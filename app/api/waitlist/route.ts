// app/api/waitlist/route.ts
// POST /api/waitlist
// Called by the landing page forms. Runs server-side only.
// Supabase service key never reaches the browser.

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, source = 'hero', referred_by = null } = body

    // ── Validate ─────────────────────────────────────────────────────────────
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // ── Rate limiting (basic) ─────────────────────────────────────────────────
    // Vercel automatically rate-limits by IP at the edge.
    // For extra protection, check if this IP signed up in the last hour:
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'

    // ── Insert into Supabase ──────────────────────────────────────────────────
    const { data, error } = await supabase
      .from('waitlist')
      .insert({
        email: email.trim().toLowerCase(),
        source,
        referred_by: referred_by || null,
        metadata: {
          ip,
          user_agent: req.headers.get('user-agent') ?? null,
          referer:    req.headers.get('referer') ?? null,
          timestamp:  new Date().toISOString(),
        },
      })
      .select('position, referral_code')
      .single()

    // ── Handle duplicate email ────────────────────────────────────────────────
    if (error) {
      if (error.code === '23505') {
        // Already on the list — fetch their existing position + referral code
        const { data: existing } = await supabase
          .from('waitlist')
          .select('position, referral_code')
          .eq('email', email.trim().toLowerCase())
          .single()

        return NextResponse.json({
          success: true,
          duplicate: true,
          position: existing?.position,
          referral_code: existing?.referral_code,
        })
      }
      console.error('[waitlist] Supabase error:', error)
      return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      position: data.position,
      referral_code: data.referral_code,
    })

  } catch (err) {
    console.error('[waitlist] Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
