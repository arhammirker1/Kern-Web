/**
 * app/api/admin/auth/route.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Admin authentication endpoint.
 *
 * POST  — Login with password → sets httpOnly secure cookie
 * GET   — Check if current session is valid
 * DELETE — Logout (clear cookie)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest } from 'next/server'
import { handleLogin, verifySession, handleLogout } from '@/lib/admin-auth'

// ── POST /api/admin/auth — Login ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const password = body?.password

    if (!password || typeof password !== 'string') {
      return Response.json({ error: 'Password is required' }, { status: 400 })
    }

    return handleLogin(req, password)
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}

// ── GET /api/admin/auth — Verify session ─────────────────────────────────────
export async function GET(req: NextRequest) {
  const authError = verifySession(req)
  if (authError) return authError

  return Response.json({ authenticated: true })
}

// ── DELETE /api/admin/auth — Logout ──────────────────────────────────────────
export async function DELETE() {
  return handleLogout()
}
