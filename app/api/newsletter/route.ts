// app/api/newsletter/route.ts
// POST /api/newsletter
// Blog newsletter subscribe. Server-side only.

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, source = 'blog' } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: email.trim().toLowerCase(),
        source,
      })

    if (error) {
      if (error.code === '23505') {
        // Already subscribed — treat as success
        return NextResponse.json({ success: true, duplicate: true })
      }
      console.error('[newsletter] Supabase error:', error)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('[newsletter] Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
