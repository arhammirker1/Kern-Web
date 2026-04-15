/**
 * lib/admin-auth.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * SERVER-SIDE ONLY — Hardened admin authentication.
 *
 * Security measures:
 *   1. Timing-safe password comparison (prevents timing attacks)
 *   2. HMAC-SHA256 signed JWT tokens (not just raw secret storage)
 *   3. Short-lived tokens (8 hours) — auto-expire
 *   4. httpOnly + Secure + SameSite=Strict cookies (not localStorage)
 *   5. No password ever stored or transmitted after initial login
 *   6. Rate limiting via in-memory counter (prevents brute force)
 *
 * Env vars required:
 *   ADMIN_SECRET — the admin password (set in Vercel, never hardcoded)
 *   ADMIN_JWT_SECRET — signing key for JWT tokens (set in Vercel)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// ── Constants ────────────────────────────────────────────────────────────────

const COOKIE_NAME = '__kobin_admin_session'
const TOKEN_MAX_AGE = 8 * 60 * 60 // 8 hours in seconds
const MAX_LOGIN_ATTEMPTS = 5
const LOCKOUT_DURATION_MS = 15 * 60 * 1000 // 15 minutes

// ── Rate limiting (in-memory, resets on cold start — acceptable for admin) ──

interface RateEntry {
  attempts: number
  lockedUntil: number
}

const rateLimiter = new Map<string, RateEntry>()

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now()
  const entry = rateLimiter.get(ip)

  if (!entry) return { allowed: true }

  // Still locked out?
  if (entry.lockedUntil > now) {
    return { allowed: false, retryAfterMs: entry.lockedUntil - now }
  }

  // Lockout expired — reset
  if (entry.lockedUntil > 0 && entry.lockedUntil <= now) {
    rateLimiter.delete(ip)
    return { allowed: true }
  }

  return { allowed: entry.attempts < MAX_LOGIN_ATTEMPTS }
}

function recordFailedAttempt(ip: string): void {
  const entry = rateLimiter.get(ip) || { attempts: 0, lockedUntil: 0 }
  entry.attempts += 1

  if (entry.attempts >= MAX_LOGIN_ATTEMPTS) {
    entry.lockedUntil = Date.now() + LOCKOUT_DURATION_MS
  }

  rateLimiter.set(ip, entry)
}

function clearAttempts(ip: string): void {
  rateLimiter.delete(ip)
}

// ── Timing-safe password comparison ──────────────────────────────────────────

function safeCompare(input: string, secret: string): boolean {
  // Pad both to same length before comparison to prevent length leaks
  const inputBuf = Buffer.from(input.padEnd(256, '\0'))
  const secretBuf = Buffer.from(secret.padEnd(256, '\0'))
  return crypto.timingSafeEqual(inputBuf, secretBuf)
}

// ── JWT-like token creation/verification (HMAC-SHA256) ───────────────────────
// We use a simple HMAC-signed payload instead of a full JWT library
// to avoid dependencies. The format: base64url(payload).base64url(signature)

function getJWTSecret(): string {
  const secret = process.env.ADMIN_JWT_SECRET
  if (!secret) {
    throw new Error('[admin-auth] ADMIN_JWT_SECRET env var is not set.')
  }
  return secret
}

function base64url(buf: Buffer): string {
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function fromBase64url(str: string): Buffer {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice((2 - str.length * 3) & 3)
  return Buffer.from(padded, 'base64')
}

interface TokenPayload {
  sub: 'admin'
  iat: number
  exp: number
  jti: string // unique token ID to prevent replay
}

export function createAdminToken(): string {
  const secret = getJWTSecret()
  const now = Math.floor(Date.now() / 1000)

  const payload: TokenPayload = {
    sub: 'admin',
    iat: now,
    exp: now + TOKEN_MAX_AGE,
    jti: crypto.randomBytes(16).toString('hex'),
  }

  const payloadStr = base64url(Buffer.from(JSON.stringify(payload)))
  const signature = base64url(
    crypto.createHmac('sha256', secret).update(payloadStr).digest()
  )

  return `${payloadStr}.${signature}`
}

export function verifyAdminToken(token: string): { valid: boolean; payload?: TokenPayload } {
  try {
    const secret = getJWTSecret()
    const [payloadStr, signature] = token.split('.')

    if (!payloadStr || !signature) return { valid: false }

    // Verify signature
    const expectedSig = base64url(
      crypto.createHmac('sha256', secret).update(payloadStr).digest()
    )

    // Timing-safe signature comparison
    if (!safeCompare(signature, expectedSig)) {
      return { valid: false }
    }

    // Decode and check expiry
    const payload: TokenPayload = JSON.parse(
      fromBase64url(payloadStr).toString('utf-8')
    )

    const now = Math.floor(Date.now() / 1000)
    if (payload.exp < now) return { valid: false }
    if (payload.sub !== 'admin') return { valid: false }

    return { valid: true, payload }
  } catch {
    return { valid: false }
  }
}

// ── Public helpers ───────────────────────────────────────────────────────────

/**
 * Validate admin password and return a signed session cookie response.
 * Returns an error response if invalid or rate-limited.
 */
export function handleLogin(req: NextRequest, password: string): NextResponse {
  const ip = getClientIP(req)

  // Rate limit check
  const rateCheck = checkRateLimit(ip)
  if (!rateCheck.allowed) {
    const retryMinutes = Math.ceil((rateCheck.retryAfterMs || 0) / 60000)
    return NextResponse.json(
      { error: 'Too many failed attempts. Try again in ' + retryMinutes + ' minutes.' },
      { status: 429 }
    )
  }

  // Get the admin secret
  const adminSecret = process.env.ADMIN_SECRET
  if (!adminSecret) {
    console.error('[admin-auth] ADMIN_SECRET env var is not set!')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  // Timing-safe comparison
  if (!safeCompare(password, adminSecret)) {
    recordFailedAttempt(ip)
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  // Password is correct — clear rate limiter and create token
  clearAttempts(ip)
  const token = createAdminToken()

  const response = NextResponse.json({ ok: true })

  // Set httpOnly secure cookie
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: TOKEN_MAX_AGE,
  })

  return response
}

/**
 * Verify the admin session from cookies.
 * Returns null if valid, or an error NextResponse if invalid.
 */
export function verifySession(req: NextRequest): NextResponse | null {
  const token = req.cookies.get(COOKIE_NAME)?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { valid } = verifyAdminToken(token)

  if (!valid) {
    // Clear the invalid cookie
    const response = NextResponse.json({ error: 'Session expired' }, { status: 401 })
    response.cookies.delete(COOKIE_NAME)
    return response
  }

  return null // Session is valid
}

/**
 * Clear the admin session cookie.
 */
export function handleLogout(): NextResponse {
  const response = NextResponse.json({ ok: true })
  response.cookies.delete(COOKIE_NAME)
  return response
}

/**
 * Check if the current request has a valid admin session.
 * Returns true/false without sending a response.
 */
export function isAuthenticated(req: NextRequest): boolean {
  const token = req.cookies.get(COOKIE_NAME)?.value
  if (!token) return false
  return verifyAdminToken(token).valid
}
