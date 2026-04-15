// app/api/payments/checkout/route.ts
// Creates a Safepay payment session and returns a checkout URL.
// Called by the frontend upgrade page.

import { NextRequest, NextResponse } from 'next/server'
import { createGuestToken, createPaymentTracker, buildCheckoutUrl } from '@/lib/safepay'
import { getAdminDB } from '@/lib/admin-db'

// Plan config: amount in PKR lowest denomination (1 PKR = 100 paisas)
// Adjust these to your actual pricing in PKR or USD
const PLANS: Record<string, { amount: number; currency: string; label: string }> = {
  pro:    { amount: 2900,  currency: 'PKR', label: 'Kobin AI Pro'    }, // adjust to real PKR price
  agency: { amount: 7900,  currency: 'PKR', label: 'Kobin AI Agency' },
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { plan, email, phone, user_id, first_name, last_name } = body

    // Validate plan
    if (!plan || !PLANS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }
    if (!email || !phone) {
      return NextResponse.json({ error: 'email and phone are required' }, { status: 400 })
    }

    const planConfig = PLANS[plan]
    const order_id = `kobin_${plan}_${user_id || 'guest'}_${Date.now()}`

    // 1. Create guest JWT for the user (non-fatal if Safepay endpoint unavailable)
    let guestToken: string | null = null
    try {
      const guestResult = await createGuestToken({
        email,
        phone,
        country: 'PK',
        first_name: first_name || '',
        last_name: last_name || '',
      })
      guestToken = guestResult.token
    } catch (guestErr) {
      console.warn('[payments/checkout] Guest token failed (non-fatal):', guestErr)
    }

    // 2. Create a payment tracker
    const { token: trackerToken } = await createPaymentTracker({
      amount: planConfig.amount,
      currency: planConfig.currency,
      order_id,
      source: `kobin_${plan}`,
    })

    // 3. Build checkout URL
    const origin = req.headers.get('origin') || 'https://www.kobin.team'
    const checkout_url = buildCheckoutUrl({
      token: trackerToken,
      order_id,
      cancel_url: `${origin}/upgrade?cancelled=1&plan=${plan}`,
      redirect_url: `${origin}/upgrade/success?order_id=${order_id}&plan=${plan}&tracker=${trackerToken}`,
      env: process.env.SAFEPAY_ENV === 'production' ? 'production' : 'sandbox',
    })

    // 4. Log pending payment in DB
    if (user_id) {
      try {
        const db = getAdminDB()
        await db.from('payment_attempts').insert({
          user_id,
          plan,
          order_id,
          tracker_token: trackerToken,
          amount: planConfig.amount,
          currency: planConfig.currency,
          status: 'pending',
          created_at: new Date().toISOString(),
        })
      } catch {
        // Table may not exist yet — non-fatal
      }
    }

    return NextResponse.json({
      checkout_url,
      tracker: trackerToken,
      order_id,
      guest_token: guestToken,
    })
  } catch (err: any) {
    console.error('[payments/checkout] error:', err)
    return NextResponse.json({ 
      error: err.message || 'Payment init failed',
      detail: String(err)
    }, { status: 500 })
  }
}