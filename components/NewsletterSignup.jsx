'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { track, identifyUser } from '../lib/mixpanel'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  async function signup() {
    if (!email || !email.includes('@')) {
      setErr(true)
      setTimeout(() => setErr(false), 1500)
      return
    }
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, source: 'blog' })
    if (error && error.code !== '23505') {
      setErr(true)
      return
    }
    identifyUser(email, { 'Newsletter Subscriber': true })
    track('Newsletter Signup', { source: 'blog', email })
    setEmail('')
    setSuccess(true)
  }

  return (
    <>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && signup()}
          style={err ? { borderColor: '#C03B30' } : {}}
        />
        <button className="newsletter-btn" onClick={signup}>Subscribe</button>
      </div>
      <div className={`newsletter-success${success ? ' show' : ''}`}>
        ✓ You&apos;re subscribed. First issue lands Friday.
      </div>
    </>
  )
}