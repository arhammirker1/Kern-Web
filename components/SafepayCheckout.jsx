'use client'
// components/SafepayCheckout.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Reusable checkout component that:
//   1. Collects email + phone if not already known
//   2. Calls /api/payments/checkout
//   3. Redirects to Safepay hosted checkout
//   4. Tracks all steps with Mixpanel
//
// Props:
//   plan        — 'pro' | 'agency'
//   userId      — authenticated user ID (optional, pass when available)
//   userEmail   — pre-fill email
//   buttonLabel — override button text
//   className   — extra CSS class on button
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { track } from '../lib/mixpanel'

export default function SafepayCheckout({
  plan = 'pro',
  userId = null,
  userEmail = '',
  buttonLabel,
  className = '',
  style = {},
}) {
  const [phase, setPhase]       = useState('idle')   // idle | form | loading | error
  const [email, setEmail]       = useState(userEmail)
  const [phone, setPhone]       = useState('')
  const [firstName, setFirst]   = useState('')
  const [error, setError]       = useState('')

  const defaultLabel = plan === 'agency' ? 'Upgrade to Agency' : 'Upgrade to Pro'
  const label = buttonLabel ?? defaultLabel

  // ── Step 1: show phone collection form ────────────────────────────────────
  function handleClick() {
    track('Checkout Clicked', { plan, source: 'SafepayCheckout' })
    setPhase('form')
  }

  // ── Step 2: create session + redirect ─────────────────────────────────────
  async function handleSubmit(e) {
    e?.preventDefault()

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    if (!phone || phone.length < 7) {
      setError('Please enter a valid phone number.')
      return
    }

    setError('')
    setPhase('loading')

    track('Checkout Form Submitted', { plan, has_user_id: !!userId })

    try {
      const res = await fetch('/api/payments/checkout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          email,
          phone,
          user_id:    userId,
          first_name: firstName,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.checkout_url) {
        throw new Error(data.error ?? 'Could not create payment session')
      }

      track('Checkout Redirected', {
        plan,
        order_id: data.order_id,
        tracker:  data.tracker,
      })

      // Redirect to Safepay hosted checkout
      window.location.href = data.checkout_url
    } catch (err) {
      console.error('[SafepayCheckout]', err)
      setError(err.message ?? 'Something went wrong. Please try again.')
      setPhase('form')
      track('Checkout Error', { plan, error: err.message })
    }
  }

  // ── Styles (matching Kobin AI brand) ─────────────────────────────────────
  const base = {
    fontFamily: "'Geist', sans-serif",
    fontSize:   '14px',
    fontWeight: 500,
    cursor:     'pointer',
    transition: 'all 0.18s ease',
    border:     'none',
    borderRadius: '10px',
    padding:    '12px 22px',
    ...style,
  }

  const primaryBtn = {
    ...base,
    background: '#0E0E0D',
    color:      '#F0EDE6',
  }

  const inputStyle = {
    width:        '100%',
    padding:      '11px 14px',
    background:   '#fff',
    border:       '1px solid #E0DDD6',
    borderRadius: '9px',
    fontSize:     '14px',
    color:        '#0E0E0D',
    outline:      'none',
    fontFamily:   "'Geist', sans-serif",
    boxSizing:    'border-box',
  }

  // ── IDLE: just a button ───────────────────────────────────────────────────
  if (phase === 'idle') {
    return (
      <button
        onClick={handleClick}
        className={className}
        style={primaryBtn}
        aria-label={`Upgrade to Kobin AI ${plan} plan`}
      >
        {label}
      </button>
    )
  }

  // ── LOADING ───────────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <button disabled style={{ ...primaryBtn, opacity: 0.7, cursor: 'not-allowed' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          <svg
            width="14" height="14" viewBox="0 0 14 14"
            style={{ animation: 'spin 0.8s linear infinite' }}
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"
              fill="none" strokeDasharray="20" strokeDashoffset="5"
              strokeLinecap="round" />
          </svg>
          Redirecting to checkout…
        </span>
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </button>
    )
  }

  // ── FORM: collect phone (+ optionally email if not pre-filled) ────────────
  return (
    <div style={{
      background:   '#F6F4EF',
      border:       '1px solid #E0DDD6',
      borderRadius: '14px',
      padding:      '20px',
      maxWidth:     '400px',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{
          width: '28px', height: '28px', borderRadius: '7px',
          background: '#0E0E0D', display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0,
        }}>
          {/* Safepay shield icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L2 3v4c0 2.8 2.1 5.4 5 6 2.9-.6 5-3.2 5-6V3L7 1z"
              fill="#F0EDE6" />
            <path d="M5 7l1.5 1.5L9 5.5" stroke="#0E0E0D" strokeWidth="1.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#0E0E0D' }}>
            Secure Checkout via Safepay
          </div>
          <div style={{ fontSize: '11px', color: '#9C9890' }}>
            Kobin AI {plan === 'agency' ? 'Agency' : 'Pro'} Plan
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* First name */}
        <input
          type="text"
          placeholder="First name (optional)"
          value={firstName}
          onChange={e => setFirst(e.target.value)}
          style={inputStyle}
        />

        {/* Email — pre-filled if known */}
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            ...inputStyle,
            background: userEmail ? '#F6F4EF' : '#fff',
          }}
        />

        {/* Phone — required by Safepay guest API */}
        <input
          type="tel"
          placeholder="+923001234567"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Error */}
        {error && (
          <p style={{ fontSize: '12px', color: '#C03B30', margin: 0 }}>
            {error}
          </p>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          <button
            type="button"
            onClick={() => { setPhase('idle'); setError('') }}
            style={{
              ...base,
              flex:       1,
              background: '#EDE9E1',
              color:      '#7A776F',
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            style={{ ...primaryBtn, flex: 2 }}
          >
            Continue to Payment →
          </button>
        </div>

        <p style={{ fontSize: '11px', color: '#C5C2BB', textAlign: 'center', margin: 0 }}>
          Secured by Safepay · Your card is never stored by Kobin AI
        </p>
      </div>
    </div>
  )
}