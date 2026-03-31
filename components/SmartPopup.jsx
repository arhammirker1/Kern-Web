'use client'
import { useEffect, useState, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { track, identifyUser } from '../lib/mixpanel'
import { usePathname } from 'next/navigation'

export default function SmartPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [newsletter, setNewsletter] = useState(true)
  const pathname = usePathname()
  const triggeredBy = useRef(null)
  const activeTime = useRef(0)
  const lastActive = useRef(Date.now())
  const timerRef = useRef(null)

  const show = (trigger) => {
    if (localStorage.getItem('kobin_popup_signed')) return
    const dismissed = localStorage.getItem('kobin_popup_dismissed')
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return
    triggeredBy.current = trigger
    setVisible(true)
    track('Popup Shown', { trigger, path: pathname })
  }

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem('kobin_popup_dismissed', Date.now().toString())
    track('Popup Dismissed', { trigger: triggeredBy.current, path: pathname })
  }

  useEffect(() => {
    if (localStorage.getItem('kobin_popup_signed')) return

    // ── Trigger 1: 60s active reading time on blog posts ──
    if (pathname.startsWith('/blog/')) {
      timerRef.current = setInterval(() => {
        activeTime.current += Date.now() - lastActive.current
        lastActive.current = Date.now()
        if (activeTime.current >= 60000) {
          clearInterval(timerRef.current)
          show('reading_60s')
        }
      }, 1000)
    }

    // ── Trigger 2: 75% scroll depth ──
    const onScroll = () => {
      const pct = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      )
      if (pct >= 75) {
        window.removeEventListener('scroll', onScroll)
        setTimeout(() => show('scroll_75'), 800)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Trigger 3: Exit intent (desktop) ──
    const onMouseLeave = (e) => {
      if (e.clientY <= 10) {
        document.removeEventListener('mouseleave', onMouseLeave)
        show('exit_intent')
      }
    }
    document.addEventListener('mouseleave', onMouseLeave)

    // ── Trigger 4: Return visitor ──
    const visits = parseInt(localStorage.getItem('kobin_visit_count') || '0') + 1
    localStorage.setItem('kobin_visit_count', visits.toString())
    if (visits >= 2) setTimeout(() => show('return_visitor'), 5000)

    return () => {
      clearInterval(timerRef.current)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [pathname])

  async function handleSignup() {
    if (!email || !email.includes('@')) {
      setEmailErr(true)
      setTimeout(() => setEmailErr(false), 1500)
      return
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({ email, source: `popup_${triggeredBy.current}` })

    if (newsletter) {
      await supabase
        .from('newsletter_subscribers')
        .insert({ email, source: 'popup' })
        .then(() => {})
    }

    if (error && error.code !== '23505') {
      setEmailErr(true)
      track('Popup Signup Failed', { trigger: triggeredBy.current, path: pathname })
      return
    }

    identifyUser(email, {
      'Signup Source': `popup_${triggeredBy.current}`,
      'Newsletter': newsletter,
    })
    track('Popup Signup', {
      trigger: triggeredBy.current,
      newsletter,
      path: pathname,
    })

    localStorage.setItem('kobin_popup_signed', 'true')
    setSuccess(true)
    setTimeout(() => setVisible(false), 2500)
  }

  if (!visible) return null

  return (
    <>
      <div
        onClick={dismiss}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(14,14,13,0.55)',
          zIndex: 999, backdropFilter: 'blur(4px)',
        }}
      />
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000, width: '90%', maxWidth: '480px',
        background: '#F6F4EF', borderRadius: '20px',
        overflow: 'hidden', fontFamily: "'Geist', sans-serif",
        animation: 'popupIn 0.25s ease',
      }}>
        <div style={{ height: '3px', background: 'linear-gradient(90deg,#4C3FD4,#6358E8)' }} />

        <button onClick={dismiss} style={{
          position: 'absolute', top: '14px', right: '14px',
          width: '28px', height: '28px', borderRadius: '50%',
          background: '#EDE9E1', border: 'none', cursor: 'pointer',
          fontSize: '14px', color: '#7A776F', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>✕</button>

        {/* Dark header */}
        <div style={{ background: '#0E0E0D', padding: '28px 32px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '20px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#4C3FD4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/kobin_icon_32.png" width="18" height="18" alt="Kobin" style={{ borderRadius: '4px' }} />
            </div>
            <span style={{ fontWeight: 600, fontSize: '15px', color: '#F0EDE6', letterSpacing: '-0.02em' }}>Kobin</span>
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '8px' }}>
            One workspace.<br /><em style={{ fontStyle: 'italic', color: '#6358E8' }}>Replace them all.</em>
          </div>
          <p style={{ fontSize: '13px', color: '#555552', lineHeight: 1.55, margin: 0 }}>
            Slack · Notion · HubSpot · Linear · Buffer — gone.
          </p>
        </div>

        {/* Form area */}
        <div style={{ padding: '24px 32px 28px' }}>
          {['Early access · founding price locked forever', '14-day free trial · no credit card', 'Weekly essays on running a leaner agency'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0D6B4F', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#7A776F' }}>{t}</span>
            </div>
          ))}

          {!success ? (
            <>
              <div style={{ display: 'flex', gap: '8px', margin: '20px 0 10px' }}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSignup()}
                  style={{
                    flex: 1, padding: '11px 14px',
                    background: '#fff',
                    border: `1px solid ${emailErr ? '#C03B30' : '#E0DDD6'}`,
                    borderRadius: '9px', fontSize: '14px',
                    color: '#0E0E0D', outline: 'none',
                    fontFamily: "'Geist', sans-serif",
                  }}
                />
                <button onClick={handleSignup} style={{
                  padding: '11px 18px', background: '#0E0E0D',
                  color: '#F0EDE6', border: 'none', borderRadius: '9px',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                  fontFamily: "'Geist', sans-serif",
                }}>Get access</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                <input
                  type="checkbox"
                  id="nl"
                  checked={newsletter}
                  onChange={e => {
                    setNewsletter(e.target.checked)
                    track('Popup Newsletter Toggle', { checked: e.target.checked, trigger: triggeredBy.current })
                  }}

                  style={{ accentColor: '#4C3FD4', width: '14px', height: '14px', cursor: 'pointer' }}
                />
                <label htmlFor="nl" style={{ fontSize: '12px', color: '#9C9890', cursor: 'pointer' }}>
                  Also subscribe to the newsletter — weekly essays, no spam
                </label>
              </div>
            </>
          ) : (
            <div style={{ padding: '14px', background: 'rgba(13,107,79,0.08)', border: '1px solid rgba(13,107,79,0.2)', borderRadius: '8px', fontSize: '14px', color: '#0D6B4F', margin: '20px 0 14px', textAlign: 'center' }}>
              ✓ You're on the list — check your inbox soon.
            </div>
          )}

          <p style={{ fontSize: '11px', color: '#C5C2BB', textAlign: 'center', margin: 0, fontFamily: "'Geist Mono', monospace" }}>
            247 founders already waiting · No spam · Unsubscribe anytime
          </p>
        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  )
}