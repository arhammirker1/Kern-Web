'use client'


import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import { supabase } from '../lib/supabase'
import { track, identifyUser } from '../lib/mixpanel'
import Image from 'next/image'

// ─── Base64 mascot image (stored outside component to avoid re-creation) ───
const MASCOT_SRC =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAAGvCAYAAABy0V2hAAEAAElEQVR4nOxdd5gV1fl+z9Q7t28BFlilKgIWQEUpdsC6doMtxlhiTTEm9miiv5ii0cSYaGxYo9hl7QWMwooiUkUUkA7L1ttm5k49vz/OPbN3l6UYscV5n2efhd27994ZO3O+uznnnN87AIQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIEeL/FrKjnzJEiBAhvvMgRNzq773fByEEhHReliml9NHnsm0bsixDEATYtg1FUSCKIorFImRZhu/7cBwH8XgcxWIRkiTB8zyoqgrHcYK/kSQJtm0DADyPQpZlOI4DTdOg6zqi0SgIREiyAEkSY4cxX099Ap+6IBBB4UEgEnzqwrZtRKNROI4D27bR3d2NWCyGWCyGWCyGWCyGWCwGAMhms8hms8hkMujo6MDOnTsRj8cRCoXQ1NSEeDyOWCyGWCyGXC6HQqGAYrGIdDqNRCIBAKiurkYsFgMA5PN5FItF5PN5ZLNZFItF5HI5lEolFAoFFAoFVFRUIJfLQZIkuK4LVVXhuq7380VRgG3bcBwHtm0jGo0im80in8+jWCzCcRwUCgUUi0UAQCaTge/7yGazKJVKqKyshG3byGazKBaLKBQKKJVKqKqoQKFQQKFQgG3byGazKBQKKJVKKJVKKJfLKJVKcF0XxWIRxWIRhUIBxWIRhUIBxWIR5XIZpVIJxWIR5XIZxWIRhUIBxWIRpVIJpVIJlUoFpWIRpWIR5XIZpVIJpVIJpVIJpVIJpVIJpVIJpVIJpVIJuVwOuVwOuVwOuVwOuVwOuVwOuVwOuVwOuVwOuVwOuVwOuVwOuVwO+X9wTiNSKkMWGQAAAABJRU5ErkJggg=='

const KernMark = ({ size = 16 }) => (
  <svg viewBox="0 0 512 512" fill="none" width={size} height={size}>
    <rect width="512" height="512" rx="116" fill="#0D0D0C"/>
    <rect x="148" y="128" width="52" height="256" rx="26" fill="#F0EDE6"/>
    <line x1="196" y1="238" x2="352" y2="108" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round"/>
    <line x1="196" y1="272" x2="352" y2="402" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round"/>
    <circle cx="196" cy="256" r="34" fill="#5B4FE8"/>
  </svg>
)

// Generate a simple referral code from email
function makeRefCode(email) {
  return email.replace(/[^a-z0-9]/gi, '').slice(0, 8).toLowerCase() +
    Math.random().toString(36).slice(2, 6)
}



export default function Home() {
  // null = not submitted, { message, refLink } = submitted
  const [heroResult, setHeroResult]   = useState(null)
  const [finalResult, setFinalResult] = useState(null)

  const [email1,      setEmail1]      = useState('')
  const [emailFinal,  setEmailFinal]  = useState('')
  const [email1Err,   setEmail1Err]   = useState(false)
  const [emailFinalErr, setEmailFinalErr] = useState(false)
  const [copiedHero,  setCopiedHero]  = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(312)

  // Scroll-reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (els) => els.forEach((el) => { if (el.isIntersecting) el.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Live waitlist counter
  useEffect(() => {
    supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .then(({ count }) => {
        if (count) setWaitlistCount(count)
      })
  }, [])

  // Read ?ref= from URL once on mount
  const urlRef = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('ref')
    : null

  async function signup(email, setResult, setErr, clearEmail, source = 'hero') {
  if (!email || !email.includes('@')) {
    setErr(true)
    setTimeout(() => setErr(false), 1500)
    return
  }

  const { data, error } = await supabase
    .from('waitlist')
    .insert({
      email,
      source,
      referred_by: urlRef,
      metadata: {
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
        url: window.location.href,
        timestamp: new Date().toISOString()
      }
    })
    .select('position, referral_code')
    .single()

  if (error) {
    // Already on the list
    if (error.code === '23505') {
  setResult({ message: "You're already on the list! Check your inbox.", refLink: null })
  identifyUser(email)
  track('Waitlist Signup Duplicate', { source })
  return
}
    setErr(true)
    setTimeout(() => setErr(false), 1500)
    return
  }

  const refLink = `${window.location.origin}${window.location.pathname}?ref=${data.referral_code}`
setResult({ message: `You're #${data.position} on the waitlist!`, refLink })
setTimeout(() => {
  window.location.href = '/thank-you'
}, 1500)

// Identify the user now that we have their email
identifyUser(email, {
  'Waitlist Position': data.position,
  'Signup Source': source,
  'Referred By': urlRef || null,
  'Referral Code': data.referral_code,
})

track('Waitlist Signup', {
  source,
  position: data.position,
  referred_by: urlRef || null,
  referral_code: data.referral_code,
})
  clearEmail('')
}

  const copyRef = useCallback((link, setCopied) => {
  navigator.clipboard.writeText(link).then(() => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    track('Referral Link Copied', { link, source: 'hero' })
  })
}, [])

  function scrollToWaitlist(e, section = 'unknown') {
  e?.preventDefault()
  track('CTA Clicked', {
    button: 'join_waitlist',
    section,
    scroll_pct_at_click: Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    ),
  })
  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  setTimeout(() => document.getElementById('email1')?.focus(), 600)
}

  return (
    <>
      <Nav />

      {/* ── FAQ SCHEMA for AI/SGE ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is Kobin AI?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kobin AI is an all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace. It includes a real-time inbox, task management, client portal, CRM, Google Drive-backed vault, calendar, LinkedIn Studio, and AI layer — all sharing one data model.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What tools does Kobin AI replace?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kobin AI replaces Slack (real-time inbox), Notion (Google Drive-backed Vault), HubSpot (built-in CRM), Linear or Asana (task management), Buffer or Taplio (LinkedIn Studio), and Calendly (calendar with Google Meet). It also includes a built-in client portal replacing tools like Basecamp.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does Kobin AI cost?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kobin AI has three plans: Free ($0/month, 2 team members, 3 projects, 2 GB vault), Pro at $29/month (unlimited team, Gmail, CRM, Calendar, AI Command Bar, 50 GB vault), and Agency at $79/month (Meeting Recorder, AI Writer, Vault RAG, Proactive AI, white-label portal, 500 GB vault). Paid plans include a 14-day free trial.'
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Kobin AI have a client portal?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Every Kobin AI plan includes built-in client portals — a scoped workspace per client with their own inbox, tasks, calendar, and file access. Client portals are activated in one click, require no separate tool or subscription, and include a pre-created DM between founder and client before they even log in.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Kobin AI a Slack alternative for agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin AI includes a real-time inbox with project channels, group chats, and direct messages — a purpose-built Slack alternative for agencies. Every conversation is natively linked to a project, client, and task. It supports file attachments, message replies, forwards, unread badges, and @AI mentions with full project context.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Kobin AI integrate with Google Drive?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Kobin AI's Vault feature is backed by Google Drive using the drive.file scope — only accessing files the app creates, never your existing Drive content. Each project automatically gets three Drive folders: Internal Documents, Client Uploads, and Deliverables.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is the Kobin AI layer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The Kobin AI layer is a context-aware assistant built into every part of the workspace. Type @AI in any inbox room for inline AI responses, or press Cmd+K to open the global command bar. The AI sees your full workspace — tasks, projects, clients, files, meetings, and CRM — before responding.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can one tool replace Slack, Notion, HubSpot, and Asana?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin AI consolidates Slack, Notion, HubSpot, Linear, Buffer, and Calendly into one workspace — free to start, Pro from $29/month. Most 5-person agencies save between $150–$250 per month in subscription costs alone by switching to Kobin AI.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Kobin AI a Notion alternative for agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin AI Vault replaces Notion for agency project knowledge management. It is backed by Google Drive with role-scoped folder hierarchies per project (Internal Documents, Client Uploads, Deliverables). Every item requires a title, description, and document type — enforcing the structure Notion rarely maintains in practice.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Kobin AI a HubSpot alternative for small agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin AI includes a built-in CRM called Relationships, designed for agency founders rather than enterprise sales teams. It tracks leads, investors, partners, talent, and advisors with meeting outcome logging, follow-up reminders, LinkedIn URL fields, and flexible tagging — included in all plans at no extra cost.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      

      {/* ── HERO ── */}
<section id="waitlist" style={{
  background: 'var(--cream)', minHeight: '100vh',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: '120px 48px 80px', position: 'relative', overflow: 'hidden',
}}>
  <div className="hero-noise" />

  {/* Dot grid background */}
  <div style={{
    position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
    backgroundImage: 'radial-gradient(circle, rgba(14,14,13,0.09) 1px, transparent 1px)',
    backgroundSize: '28px 28px',
  }} />

  {/* ── Floating Card 1 — Inbox ── */}
  <div className="hero-float-card" style={{
    top: '22%', left: '5%', animation: 'float1 6s ease-in-out infinite',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#1D9E75', flexShrink: 0 }} />
      <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--ghost)', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.06em' }}>INBOX · REELIX PROJECT</span>
    </div>
    <p style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, margin: '0 0 3px' }}>Ahmed sent the final mockups</p>
    <p style={{ fontSize: 12, color: 'var(--ghost)', margin: 0 }}>3 files attached · just now</p>
  </div>

  {/* ── Floating Card 2 — AI Command Bar ── */}
  <div className="hero-float-card" style={{
    top: '20%', right: '5%', background: 'var(--ink)',
    border: '1px solid rgba(255,255,255,0.07)',
    animation: 'float2 7s ease-in-out infinite', width: 248,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--vi)' }} />
      <span style={{ fontSize: 10, color: '#555552', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.06em' }}>AI COMMAND BAR · ⌘K</span>
    </div>
    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', fontStyle: 'italic', margin: '0 0 9px' }}>"create task for logo redesign, due friday"</p>
    <div style={{ fontSize: 12, color: '#D4D1CA', borderLeft: '2px solid var(--vi)', paddingLeft: 9, lineHeight: 1.5 }}>
      Task created · Assigned to Ahmed · Due Fri
      <span style={{ display: 'inline-block', width: 2, height: 12, background: 'var(--vi)', animation: 'blink 1s infinite', verticalAlign: 'middle', marginLeft: 3 }} />
    </div>
  </div>

  {/* ── Floating Card 3 — CRM Lead ── */}
  <div className="hero-float-card" style={{
    bottom: '24%', left: '4%', animation: 'float3 8s ease-in-out infinite',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--vi)', flexShrink: 0 }} />
      <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--ghost)', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.06em' }}>CRM · LEAD DETECTED</span>
    </div>
    <p style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, margin: '0 0 3px' }}>Sarah Mitchell · Bloom Creative</p>
    <p style={{ fontSize: 12, color: 'var(--ghost)', margin: 0 }}>AI detected via Gmail · New client inquiry</p>
  </div>

  {/* ── Floating Card 4 — Tasks ── */}
  <div className="hero-float-card" style={{
    bottom: '26%', right: '4%', animation: 'float4 5.5s ease-in-out infinite', width: 206,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#C4720A', flexShrink: 0 }} />
      <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--ghost)', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.06em' }}>TASKS · TODAY</span>
    </div>
    {[
      { label: 'Landing page copy', done: true },
      { label: 'Client review call', done: false },
      { label: 'Send invoice', done: false },
    ].map(({ label, done }) => (
      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
        <div style={{
          width: 14, height: 14, borderRadius: 3, flexShrink: 0,
          border: `1.5px solid ${done ? '#1D9E75' : 'var(--wire)'}`,
          background: done ? '#1D9E75' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {done && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </div>
        <span style={{ fontSize: 12, color: done ? 'var(--ghost)' : 'var(--ink)', textDecoration: done ? 'line-through' : 'none' }}>{label}</span>
      </div>
    ))}
  </div>

  {/* ── Centered content ── */}
  <div style={{ textAlign: 'center', maxWidth: 620, position: 'relative', zIndex: 2 }}>
    <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: 28 }}>
      <div className="hero-badge-dot">
        <svg viewBox="0 0 10 10" width="10" height="10">
          <path d="M2 5L4.5 7.5 8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      Now accepting founding members — 47 spots remaining
    </div>

    <h1 style={{
      fontFamily: "'Fraunces', serif",
      fontSize: 'clamp(52px, 7vw, 96px)',
      lineHeight: 0.95, letterSpacing: '-0.04em',
      fontWeight: 300, color: 'var(--ink)', margin: '0 0 24px',
      animation: 'fadeUp 0.6s 0.08s ease both',
    }}>
      Your agency&apos;s<br />
      <em style={{ fontStyle: 'italic', color: 'var(--vi)' }}>operating</em><br />
      system.
    </h1>
    <p style={{
      fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--ghost2)',
      margin: '-16px auto 0', fontWeight: 400, letterSpacing: '-0.01em',
      animation: 'fadeUp 0.6s 0.12s ease both',
    }}>
      Built for founders who are done managing tools.
    </p>

    <p style={{
      fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--ghost)',
      maxWidth: 460, margin: '0 auto 36px', fontWeight: 300,
      lineHeight: 1.65, animation: 'fadeUp 0.6s 0.16s ease both',
    }}>
      The only workspace where your meetings become tasks, emails become leads, and documents become reports — automatically.
    </p>

    {!heroResult ? (
      <div className="hero-form" id="hero-form" style={{ justifyContent: 'center', animation: 'fadeUp 0.6s 0.24s ease both' }}>
        <p style={{ fontSize: 12, color: 'var(--ghost2)', margin: '0 0 10px', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.02em' }}>
          No credit card · No commitment · Founding pricing locked for life
        </p>
        <input
          type="email" id="email1" placeholder="you@company.com"
          autoComplete="email" value={email1}
          onChange={(e) => setEmail1(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && signup(email1, setHeroResult, setEmail1Err, setEmail1, 'hero')}
          style={email1Err ? { borderColor: '#C03B30' } : {}}
        />
        <button className="btn-hero" onClick={() => signup(email1, setHeroResult, setEmail1Err, setEmail1, 'hero')}>
          Request founding access →
        </button>
      <p style={{ fontSize: 12, color: 'var(--ghost2)', margin: '10px 0 0', fontFamily: "'Geist Mono',monospace", letterSpacing: '0.02em' }}>
          We review applications within 24 hours · Founding pricing locked for life.
        </p>
      </div>
    ) : (
      <div className="hero-success show">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {heroResult.message}
        </span>
        {heroResult.refLink && (
          <div className="ref-link-box">
            <div className="ref-link-label">SHARE TO MOVE UP THE LIST</div>
            <div className="ref-link-row">
              <code>{heroResult.refLink}</code>
              <button
                className="ref-copy-btn"
                style={copiedHero ? { background: '#0D6B4F' } : {}}
                onClick={() => copyRef(heroResult.refLink, setCopiedHero)}
              >
                {copiedHero ? 'Copied!' : 'Copy link'}
              </button>
            </div>
          </div>
        )}
      </div>
    )}

    <div className="hero-proof" style={{ justifyContent: 'center', animation: 'fadeUp 0.6s 0.32s ease both' }}>
      <div className="av-row">
        <div className="av" style={{ background: '#5B5BD6' }}>A</div>
        <div className="av" style={{ background: '#1D9E75' }}>J</div>
        <div className="av" style={{ background: '#C4720A' }}>M</div>
        <div className="av" style={{ background: '#C03B30' }}>S</div>
        <div className="av" style={{ background: '#7C3AED' }}>T</div>
      </div>
      <span><strong>{waitlistCount} agency founders</strong> already accepted</span>
    </div>
  </div>

  {/* Floating card shared styles */}
  <style>{`
    .hero-float-card {
      position: absolute;
      background: #fff;
      border: 1px solid var(--wire);
      border-radius: 14px;
      padding: 14px 16px;
      width: 220px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
      z-index: 1;
    }
    @media (max-width: 960px) { .hero-float-card { display: none; } }
  `}</style>
</section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[
            ['Real-time inbox', '— team + clients in one place'],
            ['Google Drive Vault', '— your files stay yours'],
            ['Client Portal', '— built in, not bolted on'],
            ['Task management', '— 4 time-horizon buckets'],
            ['AI layer', '— coming soon'],
            ['LinkedIn Studio', '— draft, schedule, post'],
            ['CRM built in', '— no HubSpot needed'],
            // Duplicate for seamless loop
            ['Real-time inbox', '— team + clients in one place'],
            ['Google Drive Vault', '— your files stay yours'],
            ['Client Portal', '— built in, not bolted on'],
            ['Task management', '— 4 time-horizon buckets'],
            ['AI layer', '— coming soon'],
            ['LinkedIn Studio', '— draft, schedule, post'],
            ['CRM built in', '— no HubSpot needed'],
          ].map(([bold, rest], i) => (
            <div className="marquee-item" key={i}>
              <div className="m-dot" />
              <strong>{bold}</strong> {rest}
            </div>
          ))}
        </div>
      </div>

      {/* ── CHAOS ── */}
      <section className="chaos reveal">
        <div className="chaos-eyebrow">The problem</div>
        <h2>6 tools. 6 invoices.<br /><em>Zero intelligence.</em></h2>
        <p className="chaos-sub">Your AI can only see one tool at a time. Kobin AI sees everything — and acts on it.</p>

        <div className="icons-arena">
          {/* Slack */}
          <div className="app-icon" style={{ top: '8%', left: '12%', animation: 'float1 5.2s ease-in-out infinite' }}>
  <img src="/slack.jpg" alt="Slack — team messaging tool replaced by Kobin AI inbox" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
  <div className="app-badge">1M+</div>
</div>

          {/* Notion */}
<div className="app-icon" style={{ top: '6%', right: '18%', animation: 'float2 6.1s ease-in-out infinite' }}>
  <img src="/notion.png" alt="Notion — docs and wiki tool replaced by Kobin AI Vault" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
  <div className="app-badge blue">100</div>
</div>

          {/* Linear */}
          <div className="app-icon" style={{ top: '60%', left: '6%', animation: 'float3 5.8s ease-in-out infinite' }}>
  <img src="/asana.jpg" alt="Asana — task management replaced by Kobin AI tasks" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
  <div className="app-badge">665</div>
</div>

          {/* Google Drive */}
          <div className="app-icon" style={{ bottom: '12%', left: '20%', animation: 'float4 7.2s ease-in-out infinite' }}>
  <img src="/google-drive.jpg" alt="Google Drive — file storage integrated into Kobin AI Vault" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
  <div className="app-badge amber" style={{ fontSize: '8px' }}>Offline</div>
</div>

          {/* HubSpot */}
          <div className="app-icon" style={{ bottom: '8%', right: '14%', animation: 'float5 5.5s ease-in-out infinite' }}>
  <img src="/hubspot.jpg" alt="HubSpot — CRM replaced by Kobin AI Relationships module" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
</div>

          {/* Google Calendar */}
          <div className="app-icon" style={{ top: '30%', left: '2%', animation: 'float6 6.8s ease-in-out infinite' }}>
  <img src="/google-meet.jpg" alt="Google Meet — integrated into Kobin AI calendar for auto-generated meeting links" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
  <div className="app-badge">99+</div>
</div>

          {/* Buffer */}
          <div className="app-icon" style={{ top: '25%', right: '3%', animation: 'float7 7.5s ease-in-out infinite' }}>
  <img src="/gmail.jpg" alt="Gmail — email fragmentation solved by Kobin AI unified inbox" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
</div>

          <div className="center-text">
            <p>Context switching<br />is killing your focus.</p>
          </div>
        </div>

        <div className="chaos-stats reveal">
          <div className="chaos-stat">
            <div className="num">2×</div>
            <div className="desc">more errors when constantly switching between tools</div>
          </div>
          <div className="chaos-stat">
            <div className="num">$283</div>
            <div className="desc">average monthly SaaS spend for a 5-person agency team</div>
          </div>
          <div className="chaos-stat">
            <div className="num">1.2mo</div>
            <div className="desc">wasted per year due to context switching and tool fragmentation</div>
          </div>
        </div>
      </section>

      {/* ── REPLACE ── */}
      <div className="replace reveal">
        <div className="replace-inner">
          <div className="replace-left">
            {[
              { bg: '#4A154B', border: false, name: 'Slack',    price: '$87/mo' },
              { bg: 'white',   border: true,  name: 'Notion',   price: '$48/mo' },
              { bg: '#FF7A59', border: false,  name: 'HubSpot',  price: '$90/mo' },
              { bg: '#5E6AD2', border: false,  name: 'Linear',   price: '$40/mo' },
              { bg: '#2C4BFF', border: false,  name: 'Buffer',   price: '$18/mo' },
            ].map(({ bg, border, name, price }) => (
              <div className="tool-row" key={name}>
                <div className="tool-name">
                  <div
                    className="tool-icon-sm"
                    style={{ background: bg, border: border ? '1px solid #ddd' : 'none' }}
                  />
                  {name}
                </div>
                <div className="tool-price">{price}</div>
              </div>
            ))}
            <div className="total-row">
              <div className="total-label">Monthly total</div>
              <div className="total-price">$283 / month</div>
            </div>
          </div>

          <div className="replace-arrow">
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.06)' }} />
            <div className="arr-circle">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div className="replace-right">
            <span className="replace-right-tag">All of the above, unified</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '4px' }}>
              <div className="nav-mark" style={{ width: '32px', height: '32px', borderRadius: '9px' }}>
                <KernMark size={18} />
              </div>
              <h3>Kobin AI</h3>
            </div>
            <div className="from">Free to start · Pro from $29/mo</div>
            <div className="save-box">
              Save up to <strong>$254 every month</strong><br />
              <span style={{ fontWeight: 400, fontSize: '12px', opacity: 0.8 }}>One login · One tab · Zero context switching</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="features" id="features">
        <div className="features-inner">
          <div className="reveal">
            <div className="section-eyebrow">What&apos;s inside</div>
            <h2 className="section-h2">Every feature<br />is a <em>result.</em></h2>
            <p className="section-sub">
              Save 3 hours/day. Never lose context. AI that executes — creating tasks, assigning team, drafting updates automatically.
            </p>
          </div>

          <div className="feat-grid reveal">
            {[
              {
                tagClass: 'vi', tagLabel: 'Free',
                title: 'Real-Time Inbox',
                desc: 'Project channels, group chats, and DMs. Reactions, file sharing, task references, and meeting invites — wired into every room.',
                replaces: 'Slack',
              },
              {
                tagClass: 'vi', tagLabel: 'Free',
                title: 'Vault',
                desc: 'Project knowledge base backed by Supabase Storage with Google Drive sync. Server-side OCR indexes every word in PDFs and DOCX files. AI auto-labels by content (not just filename), and semantic search via pgvector finds any file from a natural-language query.',
                replaces: 'Notion + Drive',
              },
              {
                tagClass: 'vi', tagLabel: 'Free',
                title: 'Tasks & Projects',
                desc: 'Today · This Week · Delegated · Backlog. Attach files and deliverable requirements to any task. Analytics bar shows completion rate, overdue tasks, and a live team workload chart across all members.',
                replaces: 'Linear / Asana',
              },
              {
                tagClass: 'vi', tagLabel: 'Pro',
                tagStyle: { background: 'rgba(99,88,232,0.12)', color: '#6358E8' },
                title: 'CRM / Relationships',
                desc: 'Track leads, investors, partners, and clients through full pipeline stages. AI scans incoming Gmail to auto-detect and classify leads — no manual entry. Email sentiment analysis flags follow-ups, meeting interest, and critical roadblocks.',
                replaces: 'HubSpot',
              },
              {
                tagClass: 'vi', tagLabel: 'Pro',
                tagStyle: { background: 'rgba(99,88,232,0.12)', color: '#6358E8' },
                title: 'Gmail & Calendar',
                desc: 'Smart email analysis, Google Calendar sync, Google Meet auto-creation, and 5-min meeting reminders.',
                replaces: 'Calendly + GCal',
              },
              {
                tagClass: 'vi', tagLabel: 'Free',
                tagStyle: { background: 'rgba(124,58,237,0.08)', color: '#7C3AED' },
                title: 'Client Portal',
                desc: 'A scoped workspace for every client. Their tasks, files, meetings, and inbox. One click to spin up. Included in every plan.',
                replaces: '$200+/mo portal tools',
              },
              {
                tagClass: 'vi', tagLabel: 'Pro',
                tagStyle: { background: 'rgba(99,88,232,0.12)', color: '#6358E8' },
                title: 'AI Command Bar',
                desc: 'Press ⌘K anywhere. Create tasks, query CRM, search vault, draft messages — AI that sees your full workspace context.',
                replaces: 'Manual workflows',
              },
              {
                tagClass: 'gr', tagLabel: 'Agency',
                tagStyle: { background: 'rgba(13,107,79,0.1)', color: '#0D6B4F' },
                title: 'AI Writer & RAG',
                desc: 'Record meetings via the desktop app — Groq Whisper transcribes in near-real-time. AI extracts action items into tasks, logs decisions, and updates the relevant CRM contact automatically. Morning briefings, risk alerts, and an AI memory that learns your patterns over time.',
                replaces: 'Otter.ai + AI tools',
              },
            ].map(({ tagClass, tagLabel, tagStyle, title, desc, replaces }) => (
              <div className="feat-card" key={title}>
                <div className="feat-icon">
                  <svg viewBox="0 0 20 20">
                    <rect x="3" y="3" width="14" height="14" rx="3" />
                  </svg>
                </div>
                <span className={`feat-tag ${tagClass}`} style={tagStyle}>{tagLabel}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                {replaces
                  ? <div className="feat-replaces">Replaces <s>{replaces}</s></div>
                  : <div className="feat-replaces">Built for founders, not generic</div>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TEASER ── */}
      <section className="ai-section reveal">
        <div className="ai-grid">
          <div className="ai-left">
            <div className="section-eyebrow">AI Layer — Live</div>
            <div className="ai-chip">
              <div className="ai-chip-dot" />
              <span className="ai-chip-text">Available on Pro+</span>
            </div>
            <h2 className="section-h2">Your workspace<br /><em>executes</em> for you.</h2>
            <p className="section-sub" style={{ color: '#555552' }}>
              The AI layer turns natural conversation into structured work. Context-aware, action-oriented, zero prompt engineering.
            </p>
            <div className="ai-features">
              {[
                { title: 'AI Command Bar (Pro)', desc: 'Press ⌘K anywhere. A multi-step agentic loop (up to 4 steps) reads your tasks, projects, CRM, and vault before acting. Creates tasks, updates relationships, searches files, and drafts messages — context-aware, no prompt engineering needed.' },
                { title: 'Meeting Recorder (Agency)', desc: 'Auto-transcribe meetings with Whisper. Get AI summaries, action items, and auto-created tasks from recordings.' },
                { title: 'Proactive AI (Agency)', desc: 'Morning briefings, risk alerts, auto-lead detection from Gmail, and AI memory that learns your patterns over time.' },
              ].map(({ title, desc }) => (
                <div className="ai-feat" key={title}>
                  <div className="ai-feat-icon">
                    <svg viewBox="0 0 16 16"><path d="M2 8L8 14 14 2" strokeWidth="1.5" /></svg>
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ai-right">
            <div className="ai-card">
              <div className="ai-card-header">
                <div className="ai-card-dot" />
                kobin ai · command bar
              </div>
              <div className="ai-prompt">
                &quot;create a task for the landing page redesign, assign to Ahmed, due friday, high priority&quot;
              </div>
              <div className="ai-response">
                Creating task: <strong>&quot;Landing page redesign&quot;</strong><br />
                Assigned to: Ahmed · Due: Friday · Priority: High · Project: Reelix
                <div className="ai-cursor" />
              </div>
            </div>
            <div className="ai-card">
              <div className="ai-card-header">
                <div className="ai-card-dot" />
                kobin ai · vault rag
              </div>
              <div className="ai-prompt">What did we agree on in the Reelix brand guidelines?</div>
              <div className="ai-response">
                Based on <strong>brand-guidelines.pdf</strong> in your Vault: Primary color is #2563EB, font is Inter, logo spacing minimum 24px.{' '}
                <strong>3 documents</strong> referenced.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials reveal">
        <div className="test-inner">
          <div className="section-eyebrow">Early feedback</div>
          <h2 className="section-h2">From the beta.</h2>
          <div className="test-grid">
            {[
              {
                initials: 'AM', color: '#5B5BD6', name: 'Ahmed M.', role: 'Founder, Reelix',
                quote: '"Cancelled Slack last week. The inbox is genuinely better — having tasks and messages in the same place changes everything about how the team operates."',
              },
              {
                initials: 'JD', color: '#1D9E75', name: 'James D.', role: 'Agency Owner',
                quote: '"The client portal alone is worth it. My clients see tasks, files, and meetings without me needing a separate tool. I genuinely couldn\'t believe it was built-in."',
              },
              {
                initials: 'SK', color: '#C4720A', name: 'Sarah K.', role: 'Solo Founder',
                quote: '"Cut $180 in SaaS spend in my first two weeks. The CRM and inbox combo alone is worth more than Slack and HubSpot ever gave me."',
              },
            ].map(({ initials, color, name, role, quote }) => (
              <div className="test-card" key={name}>
                <div className="test-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 14 14">
                      <path d="M7 1l1.55 3.14L12 4.78l-2.5 2.44.59 3.44L7 9l-3.09 1.66.59-3.44L2 4.78l3.45-.64L7 1z" />
                    </svg>
                  ))}
                </div>
                <blockquote>{quote}</blockquote>
                <div className="test-divider" />
                <div className="test-author">
                  <div className="test-av" style={{ background: color }}>{initials}</div>
                  <div>
                    <div className="test-name">{name}</div>
                    <div className="test-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pricing reveal" id="pricing">
        <div className="pricing-inner">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-h2">Start free. Scale when ready.</h2>
          <p className="section-sub">
            No credit card required. Upgrade when you need integrations, AI, or unlimited seats.
          </p>
          <div className="pricing-grid">
            {/* Free */}
            <div className="plan">
              <div className="plan-label">Free</div>
              <div className="plan-price"><sup>$</sup>0</div>
              <div className="plan-period">/ forever</div>
              <p className="plan-desc">For solopreneurs getting started.</p>
              <ul className="plan-list">
                <li>Up to 2 team members</li>
                <li>Up to 3 projects</li>
                <li>Up to 3 clients</li>
                <li>2 GB vault storage</li>
                <li>Real-time inbox</li>
                <li>Tasks \u0026 client portal</li>
                <li>AI auto-labeling on uploads</li>
              </ul>
              <button className="plan-btn" onClick={(e) => scrollToWaitlist(e, 'pricing_free')}>Get Started Free</button>
            </div>

            {/* Pro (best) */}
            <div className="plan best">
              <div className="plan-badge">MOST POPULAR</div>
              <div className="plan-label">Pro</div>
              <div className="plan-price"><sup>$</sup>29</div>
              <div className="plan-period">/ month · billed monthly</div>
              <p className="plan-desc">For founders with a team, clients, and integrations.</p>
              <ul className="plan-list">
                <li>Everything in Free</li>
                <li>Unlimited team members</li>
                <li>Unlimited projects \u0026 clients</li>
                <li>50 GB vault storage</li>
                <li>Gmail integration</li>
                <li>CRM pipeline</li>
                <li>Google Calendar sync</li>
                <li>AI Command Bar (⌘K)</li>
                <li>Semantic vault search</li>
                <li>Workspace intelligence</li>
                <li>Push notifications</li>
              </ul>
              <button className="plan-btn" onClick={(e) => scrollToWaitlist(e, 'pricing_pro')}>Start Free Trial</button>
            </div>

            {/* Agency */}
            <div className="plan">
              <div className="plan-label">Agency</div>
              <div className="plan-price"><sup>$</sup>79</div>
              <div className="plan-period">/ month · billed monthly</div>
              <p className="plan-desc">For agencies at scale with advanced AI.</p>
              <ul className="plan-list">
                <li>Everything in Pro</li>
                <li>500 GB vault storage</li>
                <li>Meeting recorder + transcription</li>
                <li>AI Writer (vault-powered)</li>
                <li>Vault RAG (AI reads your files)</li>
                <li>Proactive AI briefings</li>
                <li>AI memory system</li>
                <li>Auto lead detection</li>
                <li>White-label client portal</li>
                <li>Priority support</li>
              </ul>
              <button className="plan-btn" onClick={(e) => scrollToWaitlist(e, 'pricing_agency')}>Start Free Trial</button>
            </div>
          </div>
          <p className="pricing-note">14-day free trial on paid plans · No credit card required</p>
        </div>
      </section>

      {/* ── REFERRAL ── */}
      <section className="referral">
        <div className="ref-inner reveal">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Referral programme</div>
          <h2 className="ref-h2">Move up the waitlist.</h2>
          <p className="ref-sub">Every founder you refer moves you closer to the front. Top 10 get lifetime free access.</p>
          <div className="ref-steps">
            {[
              { label: 'Join with your email',        highlight: false },
              { label: 'Get your unique link',         highlight: false },
              { label: 'Each referral skips the queue',highlight: false },
              { label: 'Top 10 get free lifetime access', highlight: true },
            ].map(({ label, highlight }, i) => (
              <div className="ref-step" key={i}>
                <div className="ref-n">{i + 1}</div>
                <span className={highlight ? 'ref-highlight' : ''}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final">
        <div className="final-circles">
          <div style={{ width: '700px', height: '700px' }} />
          <div style={{ width: '500px', height: '500px' }} />
          <div style={{ width: '300px', height: '300px' }} />
        </div>

        <div className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>
          Ready to consolidate?
        </div>
        <h2 className="reveal">One tool.<br /><em>Every founder</em><br />needs.</h2>
        <p className="final-sub reveal">
          Lock in founding pricing before public launch. 14-day free trial, no card required.
        </p>

        {!finalResult ? (
          <div className="final-form reveal">
            <input
              type="email"
              id="email-final"
              placeholder="you@company.com"
              value={emailFinal}
              onChange={(e) => setEmailFinal(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && signup(emailFinal, setFinalResult, setEmailFinalErr, setEmailFinal, 'final_cta')
              }
              style={{
                flex: 1,
                padding: '14px 18px',
                background: '#fff',
                border: `1px solid ${emailFinalErr ? '#C03B30' : 'var(--wire)'}`,
                borderRadius: '10px',
                fontFamily: "'Geist',sans-serif",
                fontSize: '15px',
                color: 'var(--ink)',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            <button
              className="btn-hero"
              onClick={() => signup(emailFinal, setFinalResult, setEmailFinalErr, setEmailFinal, 'final_cta')}
            >
              Claim Early Access
            </button>
          </div>
        ) : (
          <div className="final-success show">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {finalResult.message} — we&apos;ll send your access link soon.
          </div>
        )}

        <div className="final-counter reveal">
          <strong>{waitlistCount} founders</strong> waiting · Wave 1 beta spots are limited
        </div>
      </section>

      {/* ── FAQ SECTION (AEO) ── */}
      <section style={{ padding: '80px 48px', background: 'var(--parch)', borderTop: '1px solid var(--wire)' }} id="faq">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* AI Workspace cluster links strip */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', padding: '0 0 40px', borderTop: '1px solid var(--wire)', paddingTop: '40px', marginTop: '-40px' }}>
            {[
              { href: '/ai-workspace', label: 'AI Workspace' },
              { href: '/ai-for-agencies', label: 'AI for Agencies' },
              { href: '/notion-ai-alternative', label: 'Notion AI Alternative' },
              { href: '/clickup-ai-alternative', label: 'ClickUp AI Alternative' },
              { href: '/ai-productivity-tool', label: 'AI Productivity Tool' },
              { href: '/what-is-kobin', label: 'What is Kobin AI?' },
              { href: '/blog/productivity-software-for-agencies', label: 'Productivity Software' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ fontSize: '13px', color: 'var(--vi)', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(76,63,212,0.2)', borderRadius: '100px', background: 'rgba(76,63,212,0.04)' }}>
                {label}
              </a>
            ))}
          </div>

          
          <div className="section-eyebrow" style={{ marginBottom: '8px' }}>Common questions</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(32px,4vw,44px)', fontWeight: 300, letterSpacing: '-0.03em', marginBottom: '36px', lineHeight: 1.05 }}>
            Everything you need<br />to know.
          </h2>
          {[
            {
              q: 'What is Kobin AI?',
              a: 'Kobin AI is an all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace. It includes a real-time inbox, task management, client portal, CRM, Google Drive-backed vault, calendar, LinkedIn Studio, and AI layer — all sharing one data model.'
            },
            {
              q: 'What tools does Kobin AI replace?',
              a: 'Kobin AI replaces Slack (real-time inbox with project rooms, group chats, and DMs), Notion (Google Drive-backed Vault with role-scoped folders), HubSpot (built-in CRM for leads, investors, partners, and advisors), Linear or Asana (time-horizon task management), Buffer or Taplio (LinkedIn Studio), and Calendly (calendar with Google Meet auto-generation).'
            },
            {
              q: 'How much does Kobin AI cost?',
              a: 'Kobin AI has three plans: Free ($0/month, 2 team members, 3 projects, 3 clients, 2 GB vault), Pro at $29/month (unlimited team, projects, clients, Gmail, CRM, Calendar, AI Command Bar, 50 GB vault), and Agency at $79/month (everything in Pro plus Meeting Recorder, AI Writer, Vault RAG, Proactive AI, white-label portal, 500 GB vault). Paid plans include a 14-day free trial with no credit card required.'
            },
            {
              q: 'Does Kobin AI have a client portal?',
              a: 'Yes. Every Kobin AI plan includes built-in client portals — a scoped workspace per client with their own inbox, tasks, calendar, and file access (Client Uploads and Deliverables folders). Client portals are activated in one click, require no separate tool or subscription, and include a pre-created DM between founder and client before they even log in.'
            },
            {
              q: 'Is Kobin AI a Slack alternative for agencies?',
              a: 'Yes. Kobin AI includes a real-time inbox with project channels, group chats, and direct messages — a purpose-built Slack alternative for agencies. Unlike Slack, every conversation is natively linked to a project, client, and task. It adds file attachments, message replies, forwards, unread badges, and @AI mentions that trigger inline AI responses with full project context.'
            },
            {
              q: 'Does Kobin AI integrate with Google Drive?',
              a: "Yes. Kobin AI's Vault feature is backed by Google Drive using the drive.file scope — meaning it only accesses files it creates, never your existing Drive content. Each project automatically gets three Drive subfolders: Internal Documents (team only), Client Uploads (clients can upload), and Deliverables (clients view only)."
            },
            {
              q: 'What is the Kobin AI layer?',
              a: 'The Kobin AI layer gives agency founders a context-aware AI assistant built into every part of the workspace. Type @AI in any inbox room for inline responses, or press ⌘K anywhere to open the global command bar. The AI sees your full workspace — every task, project, client conversation, file, meeting, and CRM contact — before responding.'
            },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: '1px solid var(--wire)', padding: '0' }}>
              <summary style={{ fontSize: '15px', fontWeight: 500, cursor: 'pointer', color: 'var(--ink)', padding: '18px 0', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                {q}
                <span style={{ fontSize: '18px', color: 'var(--ghost)', flexShrink: 0, fontWeight: 300 }}>+</span>
              </summary>
              <p style={{ paddingBottom: '18px', fontSize: '14px', color: 'var(--ghost)', lineHeight: 1.75, paddingRight: '32px' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="foot-brand">
          <div className="nav-mark"><KernMark /></div>
          Kobin AI
        </div>
        <div className="foot-links">
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:support@kobin.team">Contact</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="https://www.instagram.com/kobin.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/kobin-app/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'8px'}}>
          <a href="https://www.producthunt.com/products/kobin?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-kobin" target="_blank" rel="noopener noreferrer">
            <img alt="Kobin on Product Hunt" width="200" height="43" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1109759&theme=dark&t=1774704126274" />
          </a>
          <div className="foot-copy">© 2026 Kobin AI. All rights reserved.</div>
        <div className="foot-copy" style={{ marginTop: '4px' }}>Kobin AI (kobin.team) is an agency operating system — not affiliated with Kobin (kobin.com), an agricultural analytics company.</div>
        </div>
      </footer>
    </>
  )
}