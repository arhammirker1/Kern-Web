import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { WelcomeEmail } from '../../../../emails/WelcomeEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

// Supabase signs webhooks with a shared secret
function verifySupabaseSignature(req: NextRequest, body: string): boolean {
  const secret = process.env.SUPABASE_WEBHOOK_SECRET
  if (!secret) return true
  const signature = req.headers.get('x-supabase-signature')
  return signature === secret  // ← plain comparison, not HMAC
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text()

  if (!verifySupabaseSignature(req, rawBody)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let payload: any
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Supabase database webhook sends { type, table, record, old_record }
  // We only care about INSERT events on the waitlist table
  if (payload.type !== 'INSERT' || payload.table !== 'waitlist') {
    return NextResponse.json({ skipped: true }, { status: 200 })
  }

  const record = payload.record
  const email = record?.email
  const position = record?.position
  const referralCode = record?.referral_code
  const source = record?.source || 'website'

  if (!email) {
    return NextResponse.json({ error: 'No email in record' }, { status: 400 })
  }

  const refLink = referralCode
    ? `https://www.kobin.team?ref=${referralCode}`
    : 'https://www.kobin.team'

  try {
    await resend.emails.send({
      from: 'Arham from Kobin <arham@kobin.team>',
      to: email,
      subject: `You're #${position} on the Kobin waitlist`,
      react: WelcomeEmail({ email, position, refLink, source }),
    })

    return NextResponse.json({ success: true, email, position }, { status: 200 })
  } catch (err: any) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

