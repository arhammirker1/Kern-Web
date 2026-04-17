'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import { supabase } from '../lib/supabase'
import { track, identifyUser } from '../lib/mixpanel'
import Image from 'next/image'

/* ─── Notion-Inspired Design Tokens ─────────────────────────────────────────
   From DESIGN.MD:
   Primary text : rgba(0,0,0,0.95)
   Secondary    : #615d59
   Muted        : #a39e98
   Surface      : #ffffff  /  Alt surface: #f6f5f4
   Dark surface : #31302e
   CTA Blue     : #0075de  (Notion Blue)
   Border       : 1px solid rgba(0,0,0,0.1)
   Radius       : 4px btn / 12px card / 9999px pill
   Shadows      : multi-layer, max individual opacity 0.05
─────────────────────────────────────────────────────────────────────────── */

const S = {
  ink: 'rgba(0,0,0,0.95)',
  ink2: '#31302e',
  secondary: '#615d59',
  muted: '#a39e98',
  bg: '#ffffff',
  bgAlt: '#f6f5f4',
  blue: '#0075de',
  blueHover: '#005bab',
  blueBadgeBg: '#f2f9ff',
  blueBadgeText: '#097fe8',
  border: '1px solid rgba(0,0,0,0.1)',
  shadow: '0 4px 18px rgba(0,0,0,0.04), 0 2px 7.85px rgba(0,0,0,0.027), 0 0.8px 2.93px rgba(0,0,0,0.02), 0 0.175px 1.04px rgba(0,0,0,0.01)',
  shadowDeep: '0 1px 3px rgba(0,0,0,0.01), 0 3px 7px rgba(0,0,0,0.02), 0 7px 15px rgba(0,0,0,0.02), 0 14px 28px rgba(0,0,0,0.04), 0 23px 52px rgba(0,0,0,0.05)',
  green: '#1aae39',
}

// ─── Kobin Logo Mark ──────────────────────────────────────────────────────
const KobinMark = ({ size = 20 }) => (
  <svg viewBox="0 0 512 512" fill="none" width={size} height={size}>
    <rect width="512" height="512" rx="116" fill="#0D0D0C"/>
    <rect x="148" y="128" width="52" height="256" rx="26" fill="#F0EDE6"/>
    <line x1="196" y1="238" x2="352" y2="108" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round"/>
    <line x1="196" y1="272" x2="352" y2="402" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round"/>
    <circle cx="196" cy="256" r="34" fill="#5B4FE8"/>
  </svg>
)

// ─── Check Icon ────────────────────────────────────────────────────────────
const Check = ({ color = S.green, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M2.5 8l4 4L13.5 3.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── Pill Badge ───────────────────────────────────────────────────────────
const Pill = ({ label, color = S.blue }) => (
  <span style={{
    display: 'inline-block', fontSize: 11, fontWeight: 600,
    letterSpacing: '0.125px', padding: '3px 9px',
    borderRadius: 9999, background: S.blueBadgeBg, color: S.blueBadgeText,
    fontFamily: 'inherit', lineHeight: '1.33',
  }}>{label}</span>
)

// ─── Plan badge variant ───────────────────────────────────────────────────
const PlanPill = ({ label }) => {
  const colors = {
    Free: { bg: '#edf9f0', color: '#1a8337' },
    Pro:  { bg: S.blueBadgeBg, color: S.blueBadgeText },
    Agency: { bg: '#f5f0ff', color: '#6d3dc5' },
  }
  const c = colors[label] || colors.Pro
  return (
    <span style={{
      display: 'inline-block', fontSize: 10, fontWeight: 600,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '3px 8px', borderRadius: 9999,
      background: c.bg, color: c.color,
    }}>{label}</span>
  )
}

// ─── Feature Card Icon SVGs ────────────────────────────────────────────────
const icons = {
  inbox: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7l8 5 8-5"/><rect x="2" y="4" width="16" height="13" rx="2"/></svg>,
  vault: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 8h6M7 12h4"/></svg>,
  tasks: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h12M4 10h8M4 15h10"/><circle cx="17" cy="10" r="2" fill="none"/></svg>,
  crm: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="7" r="3"/><path d="M2 17c0-3.3 2.7-6 6-6M16 11l-3 3 3 3"/></svg>,
  calendar: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="16" height="14" rx="2"/><path d="M2 9h16M6 2v4M14 2v4"/></svg>,
  portal: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M7 4v12M2 9h5"/></svg>,
  ai: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10a7 7 0 1 0 14 0A7 7 0 0 0 3 10z"/><path d="M10 6v4l3 2"/></svg>,
  mic: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="6" height="10" rx="3"/><path d="M4 10a6 6 0 0 0 12 0M10 18v-2"/></svg>,
}

export default function Home() {
  const [heroResult,   setHeroResult]   = useState(null)
  const [finalResult,  setFinalResult]  = useState(null)
  const [email1,       setEmail1]       = useState('')
  const [emailFinal,   setEmailFinal]   = useState('')
  const [email1Err,    setEmail1Err]    = useState(false)
  const [emailFinalErr,setEmailFinalErr]= useState(false)
  const [copiedHero,   setCopiedHero]   = useState(false)
  const [waitlistCount,setWaitlistCount]= useState(312)
  const [openFaq,      setOpenFaq]      = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (els) => els.forEach((el) => { if (el.isIntersecting) el.target.classList.add('in') }),
      { threshold: 0.07 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    supabase.from('waitlist').select('*', { count: 'exact', head: true })
      .then(({ count }) => { if (count) setWaitlistCount(count) })
  }, [])

  const urlRef = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('ref') : null

  async function signup(email, setResult, setErr, clearEmail, source = 'hero') {
    if (!email || !email.includes('@')) {
      setErr(true); setTimeout(() => setErr(false), 1500); return
    }
    const { data, error } = await supabase.from('waitlist').insert({
      email, source, referred_by: urlRef,
      metadata: { user_agent: navigator.userAgent, referrer: document.referrer || null, url: window.location.href, timestamp: new Date().toISOString() }
    }).select('position, referral_code').single()
    if (error) {
      if (error.code === '23505') {
        setResult({ message: "You're already on the list! Check your inbox.", refLink: null })
        identifyUser(email); track('Waitlist Signup Duplicate', { source }); return
      }
      setErr(true); setTimeout(() => setErr(false), 1500); return
    }
    const refLink = `${window.location.origin}${window.location.pathname}?ref=${data.referral_code}`
    setResult({ message: `You're #${data.position} on the waitlist!`, refLink })
    setTimeout(() => { window.location.href = '/thank-you' }, 1500)
    identifyUser(email, { 'Waitlist Position': data.position, 'Signup Source': source, 'Referred By': urlRef || null, 'Referral Code': data.referral_code })
    track('Waitlist Signup', { source, position: data.position, referred_by: urlRef || null, referral_code: data.referral_code })
    clearEmail('')
  }

  const copyRef = useCallback((link, setCopied) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000)
      track('Referral Link Copied', { link, source: 'hero' })
    })
  }, [])

  function scrollToWaitlist(e, section = 'unknown') {
    e?.preventDefault()
    track('CTA Clicked', { button: 'join_waitlist', section })
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => document.getElementById('email1')?.focus(), 600)
  }

  /* ─── Feature data ─────────────────────────────────────────────────────── */
  const features = [
    { icon: icons.inbox, plan: 'Free', title: 'Real-Time Inbox', replaces: 'Slack', desc: 'Project rooms, group chats, and DMs with reactions, file sharing, task references, and meeting invites. @AI mentions trigger inline AI with full project context.' },
    { icon: icons.vault, plan: 'Free', title: 'Vault + RAG', replaces: 'Notion + Drive', desc: 'Google Drive-backed knowledge base with server-side OCR, AI auto-labeling, and semantic search via pgvector. AI Writer drafts proposals using your actual vault context.' },
    { icon: icons.tasks, plan: 'Free', title: 'Tasks & Projects', replaces: 'Linear / Asana', desc: 'Today · This Week · Delegated · Backlog buckets with priority sorting, analytics bar (completion rate, workload chart), and real-time client visibility toggle.' },
    { icon: icons.portal, plan: 'Free', title: 'Client Portal', replaces: '$200+/mo tools', desc: 'Scoped workspace per client — their own inbox, tasks, files, and calendar. One-click activation. Pre-created DM between you and the client before they log in.' },
    { icon: icons.crm, plan: 'Pro', title: 'CRM + AI Lead Detection', replaces: 'HubSpot', desc: 'Pipeline stages with deal values and follow-up reminders. AI scans Gmail to auto-detect leads, classify them (Investor, Partner…), and update pipeline without manual entry.' },
    { icon: icons.calendar, plan: 'Pro', title: 'Gmail & Calendar', replaces: 'Calendly + GCal', desc: 'Smart email sentiment analysis, Google Calendar sync, Google Meet auto-generation, and 5-minute pre-meeting reminders with auto-generated briefs.' },
    { icon: icons.ai, plan: 'Pro', title: 'AI Command Bar (⌘K)', replaces: 'Manual workflows', desc: 'Multi-step agentic loop (up to 4 steps). Creates tasks, queries CRM pipeline, searches vault semantically, drafts messages — AI that sees your whole workspace context.' },
    { icon: icons.mic, plan: 'Agency', title: 'Meeting Recorder + AI', replaces: 'Otter.ai + AI tools', desc: 'Groq Whisper transcription with auto action-item extraction, decision logs, and CRM updates. Proactive morning briefings, risk alerts, and AI memory that learns your patterns.' },
  ]

  /* ─── FAQ data ─────────────────────────────────────────────────────────── */
  const faqs = [
    { q: 'What is Kobin AI?', a: 'Kobin AI is an all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace. It includes a real-time inbox, task management, client portal, CRM, Google Drive-backed vault, calendar, LinkedIn Studio, and AI layer — all sharing one data model.' },
    { q: 'What tools does Kobin AI replace?', a: 'Kobin AI replaces Slack (real-time inbox), Notion (Google Drive-backed Vault with RAG), HubSpot (built-in CRM with AI lead detection), Linear or Asana (time-horizon tasks), Buffer or Taplio (LinkedIn Studio), and Calendly (calendar with Google Meet auto-generation).' },
    { q: 'How much does Kobin AI cost?', a: 'Free ($0 forever — 2 team members, 3 projects, 2 GB vault), Pro at $29/month (unlimited team, Gmail, CRM, AI Command Bar, 50 GB vault), and Agency at $79/month (Meeting Recorder, AI Writer, Vault RAG, Proactive AI, white-label portal, 500 GB vault). Paid plans include a 14-day free trial.' },
    { q: 'Does Kobin AI have a client portal?', a: 'Yes. Every plan includes built-in client portals — a scoped workspace per client with their own inbox, tasks, calendar, and file access. Activated in one click, no separate tool required.' },
    { q: 'What is the Kobin AI Command Bar?', a: 'Press ⌘K anywhere in the workspace to open a multi-step AI agent. It creates tasks, queries CRM pipeline, searches vault semantically, and drafts messages — all from one input. The AI runs up to 4 reasoning steps before responding, reading every task, project, client, and file first.' },
    { q: 'How does the Vault RAG work?', a: 'Upload PDFs, DOCX, or TXT files. The system extracts text with server-side OCR, generates vector embeddings via OpenAI, and stores them in pgvector. Ask any question in the AI Writer and it cites the exact vault documents it used to respond.' },
    { q: 'Does Kobin AI integrate with Google Drive?', a: "Yes. Vault is backed by Google Drive using the drive.file scope — only accessing files Kobin creates, never your existing Drive content. Each project automatically gets Internal Documents, Client Uploads, and Deliverables folders." },
  ]

  /* ─── Shared button styles ────────────────────────────────────────────── */
  const btnPrimary = (err = false) => ({
    padding: '10px 20px', background: S.blue, color: '#fff',
    border: `1px solid ${err ? '#c0392b' : 'transparent'}`,
    borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: 'pointer',
    fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background 0.15s',
    lineHeight: '1.33',
  })

  const btnSecondary = {
    padding: '10px 20px', background: 'rgba(0,0,0,0.05)', color: S.ink,
    border: '1px solid transparent', borderRadius: 4, fontSize: 15,
    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.15s',
    whiteSpace: 'nowrap', lineHeight: '1.33',
  }

  const inputStyle = (err = false) => ({
    flex: 1, padding: '10px 14px',
    background: S.bg, border: `1px solid ${err ? '#c0392b' : 'rgba(0,0,0,0.15)'}`,
    borderRadius: 4, fontSize: 15, color: S.ink, outline: 'none',
    fontFamily: 'inherit', minWidth: 0,
  })

  /* ─── Card style ──────────────────────────────────────────────────────── */
  const card = {
    background: S.bg, border: S.border, borderRadius: 12,
    boxShadow: S.shadow, padding: '28px 24px',
  }

  return (
    <>
      {/* ── FAQ Schema ────────────────────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [{ '@type': 'FAQPage', mainEntity: faqs.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })) }],
      })}} />

      <Nav />

      {/* ════════════════════════════════════════════════════════════════════
          HERO — Answer-first headline (AEO principle)
      ════════════════════════════════════════════════════════════════════ */}
      <section id="waitlist" style={{
        background: S.bg, paddingTop: 80,
        display: 'grid', gridTemplateColumns: '1fr 440px',
        alignItems: 'center', gap: 48, maxWidth: 1100, margin: '0 auto',
        padding: '100px 48px 80px',
      }}>
        <div style={{ maxWidth: 580 }}>

          {/* AEO-optimized eyebrow — makes the brand entity clear immediately */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            background: S.blueBadgeBg, border: '1px solid rgba(0,117,222,0.18)',
            borderRadius: 9999, padding: '5px 14px 5px 5px' }}>
            <span style={{ width: 20, height: 20, background: S.blue, borderRadius: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Check color="#fff" size={10} />
            </span>
            <span style={{ fontSize: 12, color: S.blue, fontWeight: 600, letterSpacing: '0.04em' }}>
              Agency OS · early access open
            </span>
          </div>

          {/* H1 — 64px Notion-style compressed headline */}
          <h1 style={{
            fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
            fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700,
            lineHeight: 1.0, letterSpacing: '-2px', color: S.ink,
            margin: '0 0 24px',
          }}>
            Replace Slack,<br />
            Notion & HubSpot<br />
            <span style={{ color: S.blue }}>with one workspace.</span>
          </h1>

          {/* Answer-first lead — the direct answer to "What is Kobin AI?" */}
          <p style={{ fontSize: 19, color: S.secondary, lineHeight: 1.65, fontWeight: 400,
            maxWidth: 500, margin: '0 0 8px' }}>
            Kobin AI is the all-in-one operating system for agency founders — inbox, tasks, CRM, client portal, vault, and AI layer, all sharing one data model.
          </p>
          <p style={{ fontSize: 15, color: S.muted, lineHeight: 1.6, margin: '0 0 36px', fontWeight: 400 }}>
            Free to start. Most 5-person agencies save $254/month on day one.
          </p>

          {/* Email signup */}
          {!heroResult ? (
            <div style={{ display: 'flex', gap: 8, maxWidth: 440 }}>
              <input id="email1" type="email" placeholder="you@agency.com"
                autoComplete="email" value={email1}
                onChange={e => setEmail1(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && signup(email1, setHeroResult, setEmail1Err, setEmail1, 'hero')}
                style={inputStyle(email1Err)} />
              <button style={btnPrimary()} onClick={() => signup(email1, setHeroResult, setEmail1Err, setEmail1, 'hero')}>
                Get early access
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12,
              padding: '16px 20px', background: '#edf9f0', border: '1px solid rgba(26,163,57,0.25)',
              borderRadius: 8, maxWidth: 440 }}>
              <span style={{ fontSize: 14, color: '#1a8337', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check color="#1a8337" /> {heroResult.message}
              </span>
              {heroResult.refLink && (
                <div style={{ background: S.bg, border: S.border, borderRadius: 6, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, color: S.blue, fontWeight: 600, letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginBottom: 6 }}>Share to move up the list</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <code style={{ fontSize: 12, color: S.ink, flex: 1, overflow: 'hidden',
                      textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>
                      {heroResult.refLink}
                    </code>
                    <button onClick={() => copyRef(heroResult.refLink, setCopiedHero)}
                      style={{ ...btnPrimary(), padding: '4px 10px', fontSize: 12 }}>
                      {copiedHero ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Social proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
            <div style={{ display: 'flex' }}>
              {['#5B5BD6','#1D9E75','#C4720A','#C03B30','#7C3AED'].map((c, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: c,
                  border: '2px solid #fff', marginLeft: i === 0 ? 0 : -8,
                  fontSize: 10, fontWeight: 700, color: '#fff', display: 'flex',
                  alignItems: 'center', justifyContent: 'center' }}>
                  {['A','J','M','S','T'][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: S.secondary }}>
              <strong style={{ color: S.ink, fontWeight: 600 }}>{waitlistCount} founders</strong> already on the waitlist
            </span>
          </div>
        </div>

        {/* Right — mascot */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', minHeight: 460, position: 'relative' }}>
          <Image src="/mascot.png" alt="Kobin AI mascot" width={440} height={480} priority
            style={{ objectFit: 'contain', objectPosition: 'center bottom',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
              animation: 'kobinFloat 7s ease-in-out infinite' }} />
          <style>{`
            @keyframes kobinFloat {0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)}}
            .reveal{opacity:0;transform:translateY(20px);transition:opacity 0.6s ease,transform 0.6s ease}
            .reveal.in{opacity:1;transform:translateY(0)}
            @media(max-width:900px){
              #hero-grid{grid-template-columns:1fr!important;padding:80px 20px 60px!important}
              #hero-mascot{display:none!important}
              #feat-grid{grid-template-columns:1fr!important}
              #ai-demo-grid{grid-template-columns:1fr!important}
              #price-grid{grid-template-columns:1fr!important}
              #stats-grid{grid-template-columns:1fr!important}
              .tool-compare-grid{grid-template-columns:1fr!important}
              footer{flex-direction:column!important;gap:24px!important}
            }
          `}</style>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          MARQUEE — Topical authority signals (GEO)
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderTop: S.border, borderBottom: S.border, background: S.bgAlt,
        padding: '14px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 0, animation: 'marquee 28s linear infinite',
          width: 'max-content' }}>
          {['Real-time inbox · replaces Slack','Google Drive Vault · replaces Notion','Built-in CRM · replaces HubSpot',
            'AI Command Bar ⌘K','Client Portal · free with every plan','Meeting Recorder + Whisper AI',
            'Task analytics dashboard','Vault RAG · AI reads your files',
            'Real-time inbox · replaces Slack','Google Drive Vault · replaces Notion','Built-in CRM · replaces HubSpot',
            'AI Command Bar ⌘K','Client Portal · free with every plan','Meeting Recorder + Whisper AI',
            'Task analytics dashboard','Vault RAG · AI reads your files',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10,
              padding: '0 32px', fontSize: 13, color: S.secondary,
              whiteSpace: 'nowrap', borderRight: S.border }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: S.blue, flexShrink: 0 }} />
              {t}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          PROBLEM — Tool chaos stats
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 48px', background: S.bg, textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }} className="reveal">
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: S.muted, marginBottom: 16 }}>The problem</p>
          <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
            fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700,
            letterSpacing: '-1.5px', color: S.ink, lineHeight: 1.06, marginBottom: 16 }}>
            6 tools. 6 invoices.<br />0 shared context.
          </h2>
          <p style={{ fontSize: 17, color: S.secondary, maxWidth: 480, margin: '0 auto 64px',
            lineHeight: 1.65, fontWeight: 400 }}>
            Your AI can only see one tab at a time. Kobin AI sees everything — and acts on it from a single workspace.
          </p>

          {/* Stats grid */}
          <div id="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { num: '2×', label: 'More errors from context switching', sub: 'per task switch' },
              { num: '$283', label: 'Avg monthly SaaS per 5-person agency', sub: 'Slack + Notion + HubSpot + Linear + Buffer' },
              { num: '1.2mo', label: 'Wasted per year on tool fragmentation', sub: '~48 min/day per team member' },
            ].map(({ num, label, sub }) => (
              <div key={num} style={{ ...card, textAlign: 'left' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px,4vw,48px)',
                  fontWeight: 700, letterSpacing: '-1.5px', color: S.ink, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: S.ink, marginTop: 12, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 12, color: S.muted, fontFamily: 'monospace' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          REPLACE COMPARISON — visual before/after
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '0 48px 100px', background: S.bgAlt, borderTop: S.border }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', paddingTop: 60 }} className="reveal">
          <div className="tool-compare-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 64px 1fr', alignItems: 'center', gap: 24 }}>

            {/* Old tools */}
            <div style={{ background: S.ink2, borderRadius: 16, padding: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#807068', marginBottom: 16 }}>What you currently pay</p>
              {[
                { name: 'Slack',    price: '$87/mo',  bg: '#4A154B' },
                { name: 'Notion',   price: '$48/mo',  bg: '#fff', border: true },
                { name: 'HubSpot',  price: '$90/mo',  bg: '#FF7A59' },
                { name: 'Linear',   price: '$40/mo',  bg: '#5E6AD2' },
                { name: 'Buffer',   price: '$18/mo',  bg: '#2C4BFF' },
              ].map(({ name, price, bg, border }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '11px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14,
                    color: 'rgba(255,255,255,0.75)' }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, background: bg,
                      border: border ? '1px solid #ddd' : 'none', flexShrink: 0 }} />
                    {name}
                  </div>
                  <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#E57373', fontWeight: 500 }}>{price}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px',
                background: 'rgba(229,83,75,0.08)', border: '1px solid rgba(229,83,75,0.2)',
                borderRadius: 8, marginTop: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Monthly total</span>
                <span style={{ fontFamily: 'monospace', fontSize: 14, color: '#E57373', fontWeight: 700 }}>$283 / month</span>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: S.blue,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Kobin */}
            <div style={{ background: 'rgba(0,117,222,0.06)', border: '1px solid rgba(0,117,222,0.2)',
              borderRadius: 16, padding: 36, textAlign: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: S.blue, display: 'block', marginBottom: 16 }}>All of the above, unified</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8 }}><KobinMark size={32} /></div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 28, fontWeight: 700,
                  letterSpacing: '-0.75px', color: S.ink }}>Kobin AI</span>
              </div>
              <div style={{ fontSize: 15, color: S.secondary, marginBottom: 24 }}>Free to start · Pro from $29/mo</div>
              <div style={{ background: '#edf9f0', border: '1px solid rgba(26,163,57,0.2)',
                borderRadius: 10, padding: 16, fontSize: 15, color: '#1a8337', fontWeight: 600 }}>
                Save up to <strong>$254 every month</strong><br />
                <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.75 }}>One login · One tab · Zero context switching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FEATURES GRID — All 8 features from the features doc
      ════════════════════════════════════════════════════════════════════ */}
      <section id="features" style={{ padding: '100px 48px', background: S.bg, borderTop: S.border }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: S.muted, marginBottom: 16 }}>What's inside</p>
            <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
              fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 700,
              letterSpacing: '-1.5px', color: S.ink, lineHeight: 1.06, margin: '0 0 16px' }}>
              Every feature is a tool replaced.
            </h2>
            <p style={{ fontSize: 18, color: S.secondary, fontWeight: 400, maxWidth: 500, lineHeight: 1.65 }}>
              Not built for the enterprise. Built for the founder running a 5-person agency who needs one thing to work perfectly.
            </p>
          </div>

          <div id="feat-grid" className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1, border: S.border, borderRadius: 16, overflow: 'hidden',
            background: 'rgba(0,0,0,0.08)' }}>
            {features.map(({ icon, plan, title, replaces, desc }) => (
              <div key={title} style={{ background: S.bg, padding: '28px 24px',
                transition: 'background 0.15s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = S.bgAlt}
                onMouseLeave={e => e.currentTarget.style.background = S.bg}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: S.bgAlt,
                  border: S.border, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: S.secondary, marginBottom: 16 }}>{icon}</div>
                <div style={{ marginBottom: 10 }}><PlanPill label={plan} /></div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600,
                  color: S.ink, margin: '0 0 8px', letterSpacing: '-0.2px' }}>{title}</h3>
                <p style={{ fontSize: 13, color: S.secondary, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 5,
                  fontSize: 11, color: S.muted, fontFamily: 'monospace' }}>
                  Replaces <s style={{ color: '#ccc', textDecorationColor: S.muted }}>{replaces}</s>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          AI COMMAND BAR — Demo section
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 48px', background: S.ink2 }}>
        <div id="ai-demo-grid" className="reveal" style={{ maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#807068', marginBottom: 16 }}>AI Layer — available on Pro</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px',
              background: 'rgba(0,117,222,0.15)', border: '1px solid rgba(0,117,222,0.3)',
              borderRadius: 9999, marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7da9ff',
                animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 12, color: '#7da9ff', fontFamily: 'monospace',
                letterSpacing: '0.04em' }}>Agentic loop · up to 4 steps</span>
            </div>
            <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700,
              letterSpacing: '-1.5px', color: '#f6f5f4', lineHeight: 1.06, margin: '0 0 16px' }}>
              Your workspace<br />executes for you.
            </h2>
            <p style={{ fontSize: 17, color: '#807068', lineHeight: 1.65, margin: '0 0 36px' }}>
              The AI sees every task, project, client, file, and CRM contact before it responds. Not just search — it acts.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'Multi-step task creation', desc: 'Describe a project in plain language. AI breaks it into tasks, assigns team members, sets priorities, and links to the right project.' },
                { title: 'Vault RAG answers', desc: 'Ask "What did we agree on in the Reelix brief?" — AI cites the exact vault documents it read before answering.' },
                { title: 'CRM pipeline queries', desc: 'Ask "Which leads need follow-ups this week?" — AI scans your full pipeline and returns a prioritized list with context.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginTop: 2,
                    background: 'rgba(0,117,222,0.12)', border: '1px solid rgba(0,117,222,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#7da9ff" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2.5 8l4 4L13.5 3.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#f6f5f4', margin: '0 0 3px' }}>{title}</h4>
                    <p style={{ fontSize: 13, color: '#807068', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI card demo */}
          <div>
            {[
              { label: 'command bar · ⌘K',
                prompt: '"create task for landing page redesign, assign to Ahmed, due friday, high priority"',
                response: <><strong style={{ color: '#f6f5f4' }}>Task created:</strong> "Landing page redesign" · Assigned: Ahmed · Due: Friday · Priority: High · Project: Reelix</> },
              { label: 'vault rag · natural language',
                prompt: '"What did we agree on in the Reelix brand guidelines?"',
                response: <><strong style={{ color: '#f6f5f4' }}>From brand-guidelines.pdf:</strong> Primary color #2563EB, font Inter, logo spacing min 24px. <strong style={{ color: '#7da9ff' }}>3 vault docs</strong> referenced.</> },
              { label: 'crm query · context-aware',
                prompt: '"Which investor leads need a follow-up this week?"',
                response: <><strong style={{ color: '#f6f5f4' }}>2 leads need follow-up:</strong> Marcus Chen (Sequoia, last contact 8d ago) · Priya Shah (a16z, awaiting deck reply)</> },
            ].map(({ label, prompt, response }, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 12, padding: '20px 22px', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14,
                  fontSize: 11, color: '#555552', fontFamily: 'monospace', letterSpacing: '0.04em' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: S.blue }} />
                  kobin ai · {label}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 12, fontStyle: 'italic' }}>
                  {prompt}
                </div>
                <div style={{ fontSize: 13, color: '#D4D1CA', lineHeight: 1.6,
                  borderLeft: `2px solid ${S.blue}`, paddingLeft: 12 }}>
                  {response}
                  {i === 0 && <span style={{ display: 'inline-block', width: 2, height: 14, background: S.blue,
                    animation: 'blink 1s infinite', verticalAlign: 'middle', marginLeft: 2 }} />}
                </div>
              </div>
            ))}
            <style>{`
              @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
              @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
            `}</style>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          VAULT + MEETING BOT — Two-feature callout
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 48px', background: S.bgAlt, borderTop: S.border }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: S.muted, marginBottom: 16 }}>Intelligence layer</p>
            <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700,
              letterSpacing: '-1.5px', color: S.ink, lineHeight: 1.06, margin: 0 }}>
              AI that reads your work.<br />Then acts on it.
            </h2>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* Vault RAG card */}
            <div style={{ ...card, padding: 36 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: S.blueBadgeBg,
                border: '1px solid rgba(0,117,222,0.15)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: S.blue, marginBottom: 20 }}>
                {icons.vault}
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 700,
                letterSpacing: '-0.5px', color: S.ink, margin: '0 0 12px' }}>Vault — the project brain</h3>
              <p style={{ fontSize: 15, color: S.secondary, lineHeight: 1.7, margin: '0 0 24px' }}>
                Upload PDFs, DOCX, or TXT files. Server-side OCR extracts every word. OpenAI embeddings index it in pgvector. The AI Writer then drafts proposals, client emails, and reports — citing the exact vault documents it used.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Server-side OCR via pdf-parse + DOCX extraction','AI auto-labeling — content analysis, not just filenames','Semantic search: find "that Reelix contract" from any query','AI Writer cites sources — vault-grounded, never hallucinated','Triple folder structure: Deliverables · Client Uploads · Internal'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, fontSize: 14, color: S.secondary, lineHeight: 1.5 }}>
                    <Check /> {t}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}><PlanPill label="Agency" /></div>
            </div>

            {/* Meeting Bot card */}
            <div style={{ ...card, padding: 36 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: '#f5f0ff',
                border: '1px solid rgba(109,61,197,0.15)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#6d3dc5', marginBottom: 20 }}>
                {icons.mic}
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 700,
                letterSpacing: '-0.5px', color: S.ink, margin: '0 0 12px' }}>Meeting Bot</h3>
              <p style={{ fontSize: 15, color: S.secondary, lineHeight: 1.7, margin: '0 0 24px' }}>
                Record meetings via the Kobin AI Desktop App. Groq Whisper transcribes at near-real-time speed. AI then extracts action items, logs decisions, and updates the relevant CRM contact — automatically.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Groq Whisper — near-real-time audio-to-text','Action item extraction → tasks created automatically','Decision log per meeting, stored in vault','CRM auto-update: meeting outcome logged to contact','Proactive morning briefings based on upcoming schedule'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, fontSize: 14, color: S.secondary, lineHeight: 1.5 }}>
                    <Check color="#6d3dc5" /> {t}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}><PlanPill label="Agency" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 48px', background: S.bg, borderTop: S.border }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: S.muted, marginBottom: 16 }}>Early feedback</p>
            <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700,
              letterSpacing: '-1.5px', color: S.ink, margin: 0 }}>From the beta.</h2>
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { initials: 'AM', color: '#5B5BD6', name: 'Ahmed M.', role: 'Founder, Reelix',
                quote: 'Cancelled Slack last week. The inbox is genuinely better — having tasks and messages in the same place changes everything about how the team operates.' },
              { initials: 'JD', color: '#1D9E75', name: 'James D.', role: 'Agency Owner',
                quote: 'The client portal alone is worth it. My clients see tasks, files, and meetings without me needing a separate tool. I genuinely couldn\'t believe it was built-in.' },
              { initials: 'SK', color: '#C4720A', name: 'Sarah K.', role: 'Solo Founder',
                quote: 'Cut $180 in SaaS spend in my first two weeks. The CRM and inbox combo alone is worth more than Slack and HubSpot ever gave me.' },
            ].map(({ initials, color, name, role, quote }) => (
              <div key={name} style={{ ...card, transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = S.shadowDeep }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = S.shadow }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#C4720A">
                      <path d="M7 1l1.55 3.14L12 4.78l-2.5 2.44.59 3.44L7 9l-3.09 1.66.59-3.44L2 4.78l3.45-.64L7 1z"/>
                    </svg>
                  ))}
                </div>
                <blockquote style={{ fontFamily: 'Inter, Georgia, serif', fontSize: 16, fontWeight: 400,
                  fontStyle: 'italic', color: S.ink, lineHeight: 1.65, margin: '0 0 20px' }}>"{quote}"</blockquote>
                <div style={{ height: 1, background: 'rgba(0,0,0,0.08)', margin: '0 0 16px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{initials}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: S.ink }}>{name}</div>
                    <div style={{ fontSize: 12, color: S.muted }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PRICING
      ════════════════════════════════════════════════════════════════════ */}
      <section id="pricing" style={{ padding: '100px 48px', background: S.bgAlt, borderTop: S.border }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: S.muted, marginBottom: 16 }}>Pricing</p>
            <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700,
              letterSpacing: '-1.5px', color: S.ink, margin: '0 0 16px' }}>
              Start free. Scale when ready.
            </h2>
            <p style={{ fontSize: 17, color: S.secondary, maxWidth: 440, margin: '0 auto', lineHeight: 1.65 }}>
              No credit card required. Every paid plan includes a 14-day free trial.
            </p>
          </div>

          <div id="price-grid" className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { label: 'Free', price: '0', period: 'forever', featured: false,
                desc: 'For solopreneurs getting started.',
                items: ['2 team members','3 projects · 3 clients','2 GB vault storage','Real-time inbox','Tasks & client portal','AI auto-labeling on uploads'] },
              { label: 'Pro', price: '29', period: 'month', featured: true,
                badge: 'Most popular',
                desc: 'For founders with a team, clients, and integrations.',
                items: ['Everything in Free','Unlimited team & projects','50 GB vault storage','Gmail integration','CRM pipeline + AI lead detection','Google Calendar + Meet','AI Command Bar ⌘K','Semantic vault search','Workspace intelligence'] },
              { label: 'Agency', price: '79', period: 'month', featured: false,
                desc: 'For agencies at scale with advanced AI.',
                items: ['Everything in Pro','500 GB vault storage','Meeting recorder + Whisper AI','AI Writer (vault-powered RAG)','Vault RAG (AI reads your files)','Proactive AI briefings & memory','Auto lead detection from Gmail','White-label client portal','Priority support'] },
            ].map(({ label, price, period, featured, badge, desc, items }) => (
              <div key={label} style={{
                background: S.bg, borderRadius: 16, padding: '32px 28px', position: 'relative',
                border: featured ? `2px solid ${S.blue}` : S.border,
                boxShadow: featured ? S.shadowDeep : S.shadow,
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                {badge && (
                  <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                    background: S.blue, color: '#fff', fontSize: 10, fontWeight: 700,
                    padding: '4px 14px', borderRadius: 9999, letterSpacing: '0.08em',
                    whiteSpace: 'nowrap' }}>{badge.toUpperCase()}</div>
                )}
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: S.muted, marginBottom: 20 }}>{label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 52, fontWeight: 700,
                  letterSpacing: '-2px', color: S.ink, lineHeight: 1 }}>
                  <sup style={{ fontSize: 22, verticalAlign: 'super' }}>$</sup>{price}
                </div>
                <div style={{ fontSize: 13, color: S.muted, margin: '4px 0 20px' }}>/ {period}</div>
                <p style={{ fontSize: 14, color: S.secondary, lineHeight: 1.6, margin: '0 0 20px',
                  paddingBottom: 20, borderBottom: S.border }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px',
                  display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8,
                      fontSize: 13, color: S.secondary, lineHeight: 1.5 }}>
                      <Check /> {item}
                    </li>
                  ))}
                </ul>
                <button onClick={(e) => scrollToWaitlist(e, `pricing_${label.toLowerCase()}`)}
                  style={featured ? { ...btnPrimary(), width: '100%', justifyContent: 'center',
                    display: 'flex', padding: '12px 20px', fontSize: 14 }
                    : { ...btnSecondary, width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: 14 }}>
                  {label === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: S.muted,
            fontFamily: 'monospace' }}>14-day free trial on paid plans · No credit card required</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FAQ — AEO-optimized with answer-first format
      ════════════════════════════════════════════════════════════════════ */}
      <section id="faq" style={{ padding: '100px 48px', background: S.bg, borderTop: S.border }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Internal link cluster — GEO/topical authority signals */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center',
            marginBottom: 64 }}>
            {[
              { href: '/ai-workspace', label: 'AI Workspace' },
              { href: '/ai-for-agencies', label: 'AI for Agencies' },
              { href: '/notion-ai-alternative', label: 'Notion AI Alternative' },
              { href: '/clickup-ai-alternative', label: 'ClickUp AI Alternative' },
              { href: '/ai-productivity-tool', label: 'AI Productivity Tool' },
              { href: '/what-is-kobin', label: 'What is Kobin AI?' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ fontSize: 13, color: S.blue, textDecoration: 'none',
                padding: '7px 14px', border: '1px solid rgba(0,117,222,0.2)',
                borderRadius: 9999, background: S.blueBadgeBg, fontWeight: 500,
                transition: 'border-color 0.15s' }}>
                {label}
              </a>
            ))}
          </div>

          <div className="reveal">
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: S.muted, marginBottom: 16 }}>Common questions</p>
            <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700,
              letterSpacing: '-1.5px', color: S.ink, margin: '0 0 40px', lineHeight: 1.1 }}>
              Everything you need to know.
            </h2>

            {/* Answer-first FAQ — AEO principle: direct answer at top of each item */}
            {faqs.map(({ q, a }, i) => (
              <div key={q} style={{ borderBottom: S.border }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '18px 0', background: 'none', border: 'none',
                    cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', gap: 16, textAlign: 'left' }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: S.ink, lineHeight: 1.4 }}>{q}</span>
                  <span style={{ fontSize: 20, color: S.muted, fontWeight: 300, flexShrink: 0 }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <p style={{ paddingBottom: 20, fontSize: 14, color: S.secondary,
                    lineHeight: 1.75, margin: 0, paddingRight: 32 }}>{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA — Referral + Email
      ════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 48px', background: S.bgAlt, borderTop: S.border, textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }} className="reveal">
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: S.muted, marginBottom: 20 }}>Ready to consolidate?</p>
          <h2 style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
            fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700,
            letterSpacing: '-2px', color: S.ink, lineHeight: 1.0, margin: '0 0 16px' }}>
            One tool.<br />Every founder needs.
          </h2>
          <p style={{ fontSize: 17, color: S.secondary, margin: '0 0 36px', lineHeight: 1.65 }}>
            Lock in founding pricing before public launch.
          </p>

          {!finalResult ? (
            <div style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto' }}>
              <input type="email" placeholder="you@agency.com" value={emailFinal}
                onChange={e => setEmailFinal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && signup(emailFinal, setFinalResult, setEmailFinalErr, setEmailFinal, 'final_cta')}
                style={inputStyle(emailFinalErr)} />
              <button style={btnPrimary()} onClick={() => signup(emailFinal, setFinalResult, setEmailFinalErr, setEmailFinal, 'final_cta')}>
                Claim early access
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '14px 20px', background: '#edf9f0', border: '1px solid rgba(26,163,57,0.25)',
              borderRadius: 8, maxWidth: 440, margin: '0 auto', fontSize: 14, color: '#1a8337' }}>
              <Check color="#1a8337" /> {finalResult.message} — access link coming soon.
            </div>
          )}

          <p style={{ marginTop: 16, fontSize: 13, color: S.muted, fontFamily: 'monospace' }}>
            <strong style={{ color: '#1a8337' }}>{waitlistCount} founders</strong> waiting · Wave 1 beta is limited
          </p>

          {/* Referral steps */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 56,
            padding: '36px 0 0', borderTop: S.border }}>
            {[
              { n: '1', label: 'Join with your email' },
              { n: '2', label: 'Get your unique link' },
              { n: '3', label: 'Each referral skips queue' },
              { n: '4', label: 'Top 10 → free lifetime access' },
            ].map(({ n, label }, i) => (
              <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 10, padding: '0 20px', position: 'relative' }}>
                {i < 3 && <div style={{ position: 'absolute', top: 18, right: 0,
                  width: 1, height: 20, background: 'rgba(0,0,0,0.1)' }} />}
                <div style={{ width: 36, height: 36, borderRadius: '50%', border: S.border,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, fontWeight: 700, color: i === 3 ? S.blue : S.secondary }}>
                  {n}
                </div>
                <span style={{ fontSize: 12, color: i === 3 ? S.blue : S.secondary,
                  textAlign: 'center', lineHeight: 1.4, maxWidth: 90, fontWeight: i === 3 ? 600 : 400 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════ */}
      <footer style={{ padding: '36px 48px', background: S.ink2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Inter, sans-serif',
          fontWeight: 700, fontSize: 15, color: '#f6f5f4' }}>
          <div style={{ width: 28, height: 28, borderRadius: 7 }}><KobinMark size={28} /></div>
          Kobin AI
        </div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { href: '/#features', label: 'Features' },
            { href: '/#pricing', label: 'Pricing' },
            { href: '/docs', label: 'Docs' },
            { href: '/blog', label: 'Blog' },
            { href: 'mailto:support@kobin.team', label: 'Contact' },
            { href: '/privacy', label: 'Privacy' },
            { href: '/terms', label: 'Terms' },
          ].map(({ href, label }) => (
            <a key={label} href={href} style={{ fontSize: 13, color: '#807068',
              textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f6f5f4'}
              onMouseLeave={e => e.currentTarget.style.color = '#807068'}>{label}</a>
          ))}
          {[
            { href: 'https://www.instagram.com/kobin.ai/', label: 'Instagram' },
            { href: 'https://www.linkedin.com/company/kobin-app/', label: 'LinkedIn' },
          ].map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: '#807068', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f6f5f4'}
              onMouseLeave={e => e.currentTarget.style.color = '#807068'}>{label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
          <a href="https://www.producthunt.com/products/kobin?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-kobin"
            target="_blank" rel="noopener noreferrer">
            <img alt="Kobin on Product Hunt" width="200" height="43"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1109759&theme=dark&t=1774704126274" />
          </a>
          <div style={{ fontSize: 11, color: '#555552' }}>© 2026 Kobin AI · All rights reserved.</div>
          <div style={{ fontSize: 11, color: '#444441', maxWidth: 320, textAlign: 'right' }}>
            Kobin AI (kobin.team) is an agency OS — not affiliated with Kobin (kobin.com), an agricultural analytics company.
          </div>
        </div>
      </footer>
    </>
  )
}