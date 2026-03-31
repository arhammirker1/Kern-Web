'use client'


import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import { supabase } from '../lib/supabase'
import { track, identifyUser } from '../lib/mixpanel'

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
                    name: 'What is Kobin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kobin is an all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace. It includes a real-time inbox, task management, client portal, CRM, Google Drive-backed vault, calendar, LinkedIn Studio, and AI layer — all sharing one data model.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What tools does Kobin replace?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kobin replaces Slack (real-time inbox), Notion (Google Drive-backed Vault), HubSpot (built-in CRM), Linear or Asana (task management), Buffer or Taplio (LinkedIn Studio), and Calendly (calendar with Google Meet). It also includes a built-in client portal replacing tools like Basecamp.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does Kobin cost?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kobin has three plans: Solo at $19/month (1 user, up to 3 projects), Founder at $49/month (up to 5 team members, 3 client portals, LinkedIn Studio), and Agency at $99/month (unlimited team members and client portals, white-label option). All plans include a 14-day free trial with no credit card required.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Kobin have a client portal?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Every Kobin plan includes built-in client portals — a scoped workspace per client with their own inbox, tasks, calendar, and file access. Client portals are activated in one click, require no separate tool or subscription, and include a pre-created DM between founder and client before they even log in.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Kobin a Slack alternative for agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin includes a real-time inbox with project channels, group chats, and direct messages — a purpose-built Slack alternative for agencies. Every conversation is natively linked to a project, client, and task. It supports file attachments, message replies, forwards, unread badges, and @AI mentions with full project context.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Kobin integrate with Google Drive?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Kobin's Vault feature is backed by Google Drive using the drive.file scope — only accessing files the app creates, never your existing Drive content. Each project automatically gets three Drive folders: Internal Documents, Client Uploads, and Deliverables.",
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
                      text: 'Yes. Kobin consolidates Slack, Notion, HubSpot, Linear, Buffer, and Calendly into one workspace from $49/month. Most 5-person agencies save between $150–$250 per month in subscription costs alone by switching to Kobin.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Kobin a Notion alternative for agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin Vault replaces Notion for agency project knowledge management. It is backed by Google Drive with role-scoped folder hierarchies per project (Internal Documents, Client Uploads, Deliverables). Every item requires a title, description, and document type — enforcing the structure Notion rarely maintains in practice.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Kobin a HubSpot alternative for small agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Kobin includes a built-in CRM called Relationships, designed for agency founders rather than enterprise sales teams. It tracks leads, investors, partners, talent, and advisors with meeting outcome logging, follow-up reminders, LinkedIn URL fields, and flexible tagging — included in all plans at no extra cost.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      

      {/* ── HERO ── */}
      <section className="hero" id="waitlist">
        <div className="hero-noise" />

        {/* Left column */}
        <div className="hero-left">
          <div className="hero-badge">
            <div className="hero-badge-dot">
              <svg viewBox="0 0 10 10">
                <path d="M2 5L4.5 7.5 8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            Now accepting early access — limited spots
          </div>

          <h1>
            Your agency&apos;s<br />
            <em>operating</em>
            <span className="line2">system.</span>
          </h1>

          <p className="hero-sub">
            Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace for founders who refuse to juggle tools.
          </p>

          {/* Email form or success state */}
          {!heroResult ? (
            <div className="hero-form" id="hero-form">
              <input
                type="email"
                id="email1"
                placeholder="you@company.com"
                autoComplete="email"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && signup(email1, setHeroResult, setEmail1Err, setEmail1, 'hero')}
                style={email1Err ? { borderColor: '#C03B30' } : {}}
              />
              <button
                className="btn-hero"
                onClick={() => signup(email1, setHeroResult, setEmail1Err, setEmail1, 'hero')}
              >
                Get early access
              </button>
            </div>
          ) : (
            <div className="hero-success show">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {heroResult.message}
              </span>

              {/* Referral link box */}
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
            </div>
          )}

          <div className="hero-proof">
            <div className="av-row">
              <div className="av" style={{ background: '#5B5BD6' }}>A</div>
              <div className="av" style={{ background: '#1D9E75' }}>J</div>
              <div className="av" style={{ background: '#C4720A' }}>M</div>
              <div className="av" style={{ background: '#C03B30' }}>S</div>
              <div className="av" style={{ background: '#7C3AED' }}>T</div>
            </div>
            <span>Join <strong>{waitlistCount} founders</strong> already on the waitlist</span>
          </div>
        </div>

        {/* Right column — mascot image */}
        <div className="hero-right-img">
          {/* Replace MASCOT_SRC with a real /public path once you have the image file,
              e.g. src="/mascot.png". The base64 constant at the top is a placeholder. */}
          <img
  src="/mascot.png"
  alt="Kobin mascot"
  style={{
    maxWidth: '480px',
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    objectPosition: 'center bottom',
    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
    animation: 'float1 7s ease-in-out infinite'
  }}
/>
        </div>
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
        <h2>The current way<br />you work is <em>chaos.</em></h2>
        <p className="chaos-sub">6 tools. 6 logins. 6 monthly invoices. Zero connection between any of them.</p>

        <div className="icons-arena">
          {/* Slack */}
          <div className="app-icon" style={{ top: '8%', left: '12%', animation: 'float1 5.2s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#4A154B" />
              <circle cx="13" cy="19.5" r="1.5" fill="#E01E5A" />
              <circle cx="13" cy="13.5" r="1.5" fill="#36C5F0" />
              <circle cx="23" cy="22.5" r="1.5" fill="#2EB67D" />
              <circle cx="23" cy="16.5" r="1.5" fill="#ECB22E" />
            </svg>
            <div className="app-badge">1M+</div>
          </div>

          {/* Notion */}
          <div className="app-icon" style={{ top: '6%', right: '18%', animation: 'float2 6.1s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="white" stroke="#E0E0E0" />
              <rect x="8" y="7" width="20" height="22" rx="2" fill="white" stroke="#0E0E0D" strokeWidth="1.5" />
              <line x1="12" y1="13" x2="24" y2="13" stroke="#0E0E0D" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="17" x2="22" y2="17" stroke="#0E0E0D" strokeWidth="1" strokeLinecap="round" />
              <line x1="12" y1="21" x2="20" y2="21" stroke="#0E0E0D" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <div className="app-badge blue">100</div>
          </div>

          {/* Linear */}
          <div className="app-icon" style={{ top: '60%', left: '6%', animation: 'float3 5.8s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#5E6AD2" />
              <path d="M8 24L24 8M8 24l4-4M12 28l4-4M16 28L28 16M24 8l4 4M16 28l4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="app-badge">665</div>
          </div>

          {/* Google Drive */}
          <div className="app-icon" style={{ bottom: '12%', left: '20%', animation: 'float4 7.2s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="white" stroke="#E0E0E0" />
              <path d="M18 8L26 22H10L18 8Z" fill="#4285F4" />
              <path d="M10 22L6 28H22L26 22H10Z" fill="#34A853" />
              <path d="M26 22L30 28H22L18 22L26 22Z" fill="#FBBC05" />
            </svg>
            <div className="app-badge amber" style={{ fontSize: '8px' }}>Offline</div>
          </div>

          {/* HubSpot */}
          <div className="app-icon" style={{ bottom: '8%', right: '14%', animation: 'float5 5.5s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#FF7A59" />
              <circle cx="18" cy="14" r="4" fill="white" />
              <path d="M12 24c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Google Calendar */}
          <div className="app-icon" style={{ top: '30%', left: '2%', animation: 'float6 6.8s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="white" stroke="#E0E0E0" />
              <rect x="6" y="9" width="24" height="20" rx="2" fill="white" stroke="#4285F4" strokeWidth="1.5" />
              <line x1="6" y1="15" x2="30" y2="15" stroke="#4285F4" strokeWidth="1.5" />
              <line x1="14" y1="7" x2="14" y2="12" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
              <line x1="22" y1="7" x2="22" y2="12" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
              <text x="18" y="26" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0E0E0D">31</text>
            </svg>
            <div className="app-badge">99+</div>
          </div>

          {/* Buffer */}
          <div className="app-icon" style={{ top: '25%', right: '3%', animation: 'float7 7.5s ease-in-out infinite' }}>
            <svg viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#2C4BFF" />
              <path d="M18 9L26 13.5V22.5L18 27L10 22.5V13.5L18 9Z" fill="rgba(255,255,255,0.3)" />
              <path d="M18 14L22 16.5V21.5L18 24L14 21.5V16.5L18 14Z" fill="white" />
            </svg>
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
              <h3>Kobin</h3>
            </div>
            <div className="from">From $49 per month</div>
            <div className="save-box">
              Save up to <strong>$234 every month</strong><br />
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
            <h2 className="section-h2">Eight modules.<br /><em>One workspace.</em></h2>
            <p className="section-sub">
              Everything talks to everything. A task in chat becomes a calendar event. A client meeting invite shows up in their inbox.
            </p>
          </div>

          <div className="feat-grid reveal">
            {[
              {
                tagClass: 'vi', tagLabel: '$87/mo saved',
                title: 'Real-Time Inbox',
                desc: 'Project channels, group chats, and DMs. Reactions, file sharing, task references, and meeting invites — wired into every room.',
                replaces: 'Slack',
              },
              {
                tagClass: 'gr', tagLabel: '$48/mo saved',
                title: 'Vault',
                desc: 'Google Drive-backed project knowledge base. Internal docs, client uploads, and deliverables — role-scoped. Your files stay in your Drive.',
                replaces: 'Notion + Drive',
              },
              {
                tagClass: 'am', tagLabel: '$40/mo saved',
                title: 'Tasks & Projects',
                desc: 'Today · This Week · Delegated · Backlog. Priority sorting, team assignment, real-time comments, and automatic client visibility.',
                replaces: 'Linear / Asana',
              },
              {
                tagClass: 'vi', tagLabel: 'Built-in',
                tagStyle: { background: 'rgba(74,144,217,0.1)', color: '#185FA5' },
                title: 'Calendar',
                desc: 'Day / Week / Month views. 5-min meeting reminders, Google Meet auto-creation, client invite cards sent in chat.',
                replaces: 'Calendly + GCal',
              },
              {
                tagClass: 'vi', tagLabel: '$90/mo saved',
                tagStyle: { background: 'rgba(192,59,48,0.08)', color: '#C03B30' },
                title: 'CRM / Relationships',
                desc: 'Track leads, investors, partners, and clients. Log meeting outcomes, set follow-up reminders, link contacts to events and tasks.',
                replaces: 'HubSpot',
              },
              {
                tagClass: 'vi', tagLabel: 'Unique',
                tagStyle: { background: 'rgba(124,58,237,0.08)', color: '#7C3AED' },
                title: 'Client Portal',
                desc: 'A scoped workspace for every client. Their tasks, files, meetings, and inbox. One click to spin up. Included in every plan.',
                replaces: '$200+/mo portal tools',
              },
              {
                tagClass: 'gr', tagLabel: '$18/mo saved',
                title: 'LinkedIn Studio',
                desc: 'Draft, schedule, and track your personal branding content. Build in public without leaving your workspace.',
                replaces: 'Buffer / Hootsuite',
              },
              {
                tagClass: 'vi', tagLabel: 'Coming soon',
                title: 'AI Layer',
                desc: 'Your workspace gets smarter. Task creation from chat, smart summaries, auto-scheduling, and intelligent follow-ups.',
                replaces: null,
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
            <div className="section-eyebrow">AI Layer — coming soon</div>
            <div className="ai-chip">
              <div className="ai-chip-dot" />
              <span className="ai-chip-text">In development</span>
            </div>
            <h2 className="section-h2">Your workspace<br /><em>learns</em> with you.</h2>
            <p className="section-sub" style={{ color: '#555552' }}>
              The AI layer turns natural conversation into structured work. No prompt engineering needed.
            </p>
            <div className="ai-features">
              {[
                { title: 'Task from chat', desc: '"Ahmed can you finish the landing page by Friday" → task created, assigned, due date set.' },
                { title: 'Smart summaries', desc: 'Missed a thread? Ko summarises what happened and what needs your attention.' },
                { title: 'Client brief → project', desc: 'Paste a brief, get a full project structure with tasks, timeline, and team assignments.' },
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
                kobin ai · parsing message
              </div>
              <div className="ai-prompt">
                &quot;can you please draft this task for the landing page redesign? need it done by friday&quot;
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
                kobin ai · thread summary
              </div>
              <div className="ai-prompt">Last 3 hours of #reelix channel</div>
              <div className="ai-response">
                2 decisions made · 1 task created · 3 open questions.{' '}
                <strong>Action needed:</strong> Client is waiting on deliverable upload.
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
          <h2 className="section-h2">Lock in founding price.</h2>
          <p className="section-sub">
            Early access members keep founding pricing forever. Prices increase at public launch.
          </p>
          <div className="pricing-grid">
            {/* Solo */}
            <div className="plan">
              <div className="plan-label">Solo</div>
              <div className="plan-price"><sup>$</sup>19</div>
              <div className="plan-period">/ month · billed monthly</div>
              <p className="plan-desc">For solopreneurs running everything alone.</p>
              <ul className="plan-list">
                <li>All 8 modules included</li>
                <li>Up to 3 active projects</li>
                <li>Google Drive connected</li>
                <li>Web push notifications</li>
              </ul>
              <button className="plan-btn" onClick={(e) => scrollToWaitlist(e, 'pricing_solo')}>Join Waitlist</button>
            </div>

            {/* Founder (best) */}
            <div className="plan best">
              <div className="plan-badge">MOST POPULAR</div>
              <div className="plan-label">Founder</div>
              <div className="plan-price"><sup>$</sup>49</div>
              <div className="plan-period">/ month · billed monthly</div>
              <p className="plan-desc">For founders with a growing team and active clients.</p>
              <ul className="plan-list">
                <li>Everything in Solo</li>
                <li>Up to 5 team members</li>
                <li>Up to 3 client portals</li>
                <li>LinkedIn Studio included</li>
                <li>Granular permissions (12 toggles)</li>
                <li>Unlimited projects</li>
              </ul>
              <button className="plan-btn" onClick={(e) => scrollToWaitlist(e, 'pricing_founder')}>Get Founding Price</button>
            </div>

            {/* Agency */}
            <div className="plan">
              <div className="plan-label">Agency</div>
              <div className="plan-price"><sup>$</sup>99</div>
              <div className="plan-period">/ month · billed monthly</div>
              <p className="plan-desc">For agencies managing multiple clients at scale.</p>
              <ul className="plan-list">
                <li>Everything in Founder</li>
                <li>Unlimited team members</li>
                <li>Unlimited client portals</li>
                <li>White-label portal option</li>
                <li>Priority support</li>
              </ul>
              <button className="plan-btn" onClick={(e) => scrollToWaitlist(e, 'pricing_agency')}>Join Waitlist</button>
            </div>
          </div>
          <p className="pricing-note">14-day free trial on all plans · No credit card to join waitlist</p>
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
          <div className="section-eyebrow" style={{ marginBottom: '8px' }}>Common questions</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(32px,4vw,44px)', fontWeight: 300, letterSpacing: '-0.03em', marginBottom: '36px', lineHeight: 1.05 }}>
            Everything you need<br />to know.
          </h2>
          {[
            {
              q: 'What is Kobin?',
              a: 'Kobin is an all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace. It includes a real-time inbox, task management, client portal, CRM, Google Drive-backed vault, calendar, LinkedIn Studio, and AI layer — all sharing one data model.'
            },
            {
              q: 'What tools does Kobin replace?',
              a: 'Kobin replaces Slack (real-time inbox with project rooms, group chats, and DMs), Notion (Google Drive-backed Vault with role-scoped folders), HubSpot (built-in CRM for leads, investors, partners, and advisors), Linear or Asana (time-horizon task management), Buffer or Taplio (LinkedIn Studio), and Calendly (calendar with Google Meet auto-generation).'
            },
            {
              q: 'How much does Kobin cost?',
              a: 'Kobin starts at $19/month for solo founders (1 user, up to 3 projects), $49/month for the Founder plan (up to 5 team members, 3 client portals, LinkedIn Studio), and $99/month for the Agency plan (unlimited team members and client portals, white-label option). All plans include a 14-day free trial with no credit card required.'
            },
            {
              q: 'Does Kobin have a client portal?',
              a: 'Yes. Every Kobin plan includes built-in client portals — a scoped workspace per client with their own inbox, tasks, calendar, and file access (Client Uploads and Deliverables folders). Client portals are activated in one click, require no separate tool or subscription, and include a pre-created DM between founder and client before they even log in.'
            },
            {
              q: 'Is Kobin a Slack alternative for agencies?',
              a: 'Yes. Kobin includes a real-time inbox with project channels, group chats, and direct messages — a purpose-built Slack alternative for agencies. Unlike Slack, every conversation is natively linked to a project, client, and task. It adds file attachments, message replies, forwards, unread badges, and @AI mentions that trigger inline AI responses with full project context.'
            },
            {
              q: 'Does Kobin integrate with Google Drive?',
              a: "Yes. Kobin's Vault feature is backed by Google Drive using the drive.file scope — meaning it only accesses files it creates, never your existing Drive content. Each project automatically gets three Drive subfolders: Internal Documents (team only), Client Uploads (clients can upload), and Deliverables (clients view only)."
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
          Kobin
        </div>
        <div className="foot-links">
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:hello@Kobin.app">Contact</a>
          <Link href="#">Privacy</Link>
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
          <div className="foot-copy">© 2026 Kobin. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}