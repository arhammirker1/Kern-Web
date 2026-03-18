'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'

const KernMark = ({ size = 16 }) => (
  <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
    <rect x="1.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" />
    <rect x="9.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5" />
    <rect x="1.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.3" />
  </svg>
)

export default function Home() {
  const [heroSuccess, setHeroSuccess] = useState(false)
  const [finalSuccess, setFinalSuccess] = useState(false)
  const [email1, setEmail1] = useState('')
  const [emailFinal, setEmailFinal] = useState('')
  const [email1Error, setEmail1Error] = useState(false)
  const [emailFinalError, setEmailFinalError] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (els) => els.forEach((el) => { if (el.isIntersecting) el.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function signup(email, setSuccess, setError, clearEmail) {
    if (!email || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    setSuccess(true)
    clearEmail('')
    // POST to your API: fetch('/api/waitlist', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})})
  }

  function scrollToWaitlist(e) {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => document.getElementById('email1')?.focus(), 600)
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero" id="waitlist">
        <div className="hero-noise"></div>

        {/* Kern K mascot floating */}
        <div className="mascot-float">
          <svg viewBox="0 0 100 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="0" width="60" height="56" rx="20" fill="#F6F4EF" stroke="#0E0E0D" strokeWidth="2.2" />
            <path d="M26 8 Q30-8 50-10 Q70-8 74 8 Q68-4 50-6 Q32-4 26 8Z" fill="#0E0E0D" />
            <rect x="26" y="18" width="18" height="13" rx="4" fill="white" stroke="#0E0E0D" strokeWidth="1.8" />
            <rect x="56" y="18" width="18" height="13" rx="4" fill="white" stroke="#0E0E0D" strokeWidth="1.8" />
            <circle cx="35" cy="24" r="4" fill="#0E0E0D" />
            <circle cx="65" cy="24" r="4" fill="#0E0E0D" />
            <circle cx="37" cy="22" r="1.5" fill="white" />
            <circle cx="67" cy="22" r="1.5" fill="white" />
            <line x1="44" y1="24" x2="56" y2="24" stroke="#0E0E0D" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="26" y1="24" x2="18" y2="22" stroke="#0E0E0D" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="74" y1="24" x2="82" y2="22" stroke="#0E0E0D" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M38 44 Q50 52 62 44" fill="none" stroke="#0E0E0D" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="56" x2="50" y2="76" stroke="#0E0E0D" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="26" y="76" width="48" height="96" rx="18" fill="#F6F4EF" stroke="#0E0E0D" strokeWidth="2.2" />
            <circle cx="50" cy="122" r="14" fill="rgba(76,63,212,0.1)" />
            <circle cx="50" cy="122" r="8" fill="#4C3FD4" />
            <line x1="47" y1="116" x2="47" y2="128" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="47" y1="121" x2="54" y2="116" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="47" y1="122" x2="54" y2="128" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M26 92 Q8 104 10 128" fill="none" stroke="#0E0E0D" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="10" cy="134" r="8" fill="#F6F4EF" stroke="#0E0E0D" strokeWidth="2" />
            <path d="M74 86 Q96 68 100 42" fill="none" stroke="#0E0E0D" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="100" cy="36" r="8" fill="#F6F4EF" stroke="#0E0E0D" strokeWidth="2" />
            <path d="M40 170 Q36 196 34 220" fill="none" stroke="#0E0E0D" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M22 220 Q34 230 46 220" fill="none" stroke="#0E0E0D" strokeWidth="2" strokeLinecap="round" />
            <path d="M60 166 Q76 192 88 212" fill="none" stroke="#0E0E0D" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M80 216 Q90 226 102 216" fill="none" stroke="#0E0E0D" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="hero-badge">
          <div className="hero-badge-dot">
            <svg viewBox="0 0 10 10"><path d="M2 5L4.5 7.5 8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
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

        {!heroSuccess ? (
          <div className="hero-form" id="hero-form">
            <input
              type="email"
              id="email1"
              placeholder="you@company.com"
              autoComplete="email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
              style={email1Error ? { borderColor: '#C03B30' } : {}}
            />
            <button className="btn-hero" onClick={() => signup(email1, setHeroSuccess, setEmail1Error, setEmail1)}>
              Get early access
            </button>
          </div>
        ) : (
          <div className="hero-success show">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            You&apos;re on the list — we&apos;ll email your access link.
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
          <span>Join <strong>247 founders</strong> already on the waitlist</span>
        </div>
      </section>

      {/* MARQUEE */}
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
            ['Real-time inbox', '— team + clients in one place'],
            ['Google Drive Vault', '— your files stay yours'],
            ['Client Portal', '— built in, not bolted on'],
            ['Task management', '— 4 time-horizon buckets'],
            ['AI layer', '— coming soon'],
            ['LinkedIn Studio', '— draft, schedule, post'],
            ['CRM built in', '— no HubSpot needed'],
          ].map(([bold, rest], i) => (
            <div className="marquee-item" key={i}>
              <div className="m-dot"></div>
              <strong>{bold}</strong> {rest}
            </div>
          ))}
        </div>
      </div>

      {/* CHAOS SECTION */}
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
          <div className="chaos-stat"><div className="num">2×</div><div className="desc">more errors when constantly switching between tools</div></div>
          <div className="chaos-stat"><div className="num">$283</div><div className="desc">average monthly SaaS spend for a 5-person agency team</div></div>
          <div className="chaos-stat"><div className="num">1.2mo</div><div className="desc">wasted per year due to context switching and tool fragmentation</div></div>
        </div>
      </section>

      {/* REPLACE */}
      <div className="replace reveal">
        <div className="replace-inner">
          <div className="replace-left">
            {[
              ['#4A154B', 'Slack', '$87/mo'],
              ['white', 'Notion', '$48/mo'],
              ['#FF7A59', 'HubSpot', '$90/mo'],
              ['#5E6AD2', 'Linear', '$40/mo'],
              ['#2C4BFF', 'Buffer', '$18/mo'],
            ].map(([bg, name, price]) => (
              <div className="tool-row" key={name}>
                <div className="tool-name">
                  <div className="tool-icon-sm" style={{ background: bg, border: bg === 'white' ? '1px solid #ddd' : 'none' }}></div>
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
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.06)' }}></div>
            <div className="arr-circle">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.06)' }}></div>
          </div>
          <div className="replace-right">
            <span className="replace-right-tag">All of the above, unified</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '4px' }}>
              <div className="nav-mark" style={{ width: '32px', height: '32px', borderRadius: '9px' }}>
                <KernMark size={18} />
              </div>
              <h3>Kern</h3>
            </div>
            <div className="from">From $49 per month</div>
            <div className="save-box">
              Save up to <strong>$234 every month</strong><br />
              <span style={{ fontWeight: 400, fontSize: '12px', opacity: 0.8 }}>One login · One tab · Zero context switching</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="features-inner">
          <div className="reveal">
            <div className="section-eyebrow">What&apos;s inside</div>
            <h2 className="section-h2">Eight modules.<br /><em>One workspace.</em></h2>
            <p className="section-sub">Everything talks to everything. A task in chat becomes a calendar event. A client meeting invite shows up in their inbox.</p>
          </div>
          <div className="feat-grid reveal">
            {[
              { tag: 'vi', tagLabel: '$87/mo saved', title: 'Real-Time Inbox', desc: 'Project channels, group chats, and DMs. Reactions, file sharing, task references, and meeting invites — wired into every room.', replaces: 'Slack' },
              { tag: 'gr', tagLabel: '$48/mo saved', title: 'Vault', desc: 'Google Drive-backed project knowledge base. Internal docs, client uploads, and deliverables — role-scoped. Your files stay in your Drive.', replaces: 'Notion + Drive' },
              { tag: 'am', tagLabel: '$40/mo saved', title: 'Tasks & Projects', desc: 'Today · This Week · Delegated · Backlog. Priority sorting, team assignment, real-time comments, and automatic client visibility.', replaces: 'Linear / Asana' },
              { tag: 'vi', tagLabel: 'Built-in', tagStyle: { background: 'rgba(74,144,217,0.1)', color: '#185FA5' }, title: 'Calendar', desc: 'Day / Week / Month views. 5-min meeting reminders, Google Meet auto-creation, client invite cards sent in chat.', replaces: 'Calendly + GCal' },
              { tag: 'vi', tagLabel: '$90/mo saved', tagStyle: { background: 'rgba(192,59,48,0.08)', color: '#C03B30' }, title: 'CRM / Relationships', desc: 'Track leads, investors, partners, and clients. Log meeting outcomes, set follow-up reminders, link contacts to events and tasks.', replaces: 'HubSpot' },
              { tag: 'vi', tagLabel: 'Unique', tagStyle: { background: 'rgba(124,58,237,0.08)', color: '#7C3AED' }, title: 'Client Portal', desc: 'A scoped workspace for every client. Their tasks, files, meetings, and inbox. One click to spin up. Included in every plan.', replaces: '$200+/mo portal tools' },
              { tag: 'gr', tagLabel: '$18/mo saved', title: 'LinkedIn Studio', desc: 'Draft, schedule, and track your personal branding content. Build in public without leaving your workspace.', replaces: 'Buffer / Hootsuite' },
              { tag: 'vi', tagLabel: 'Coming soon', title: 'AI Layer', desc: 'Your workspace gets smarter. Task creation from chat, smart summaries, auto-scheduling, and intelligent follow-ups.', replaces: null },
            ].map(({ tag, tagLabel, tagStyle, title, desc, replaces }) => (
              <div className="feat-card" key={title}>
                <div className="feat-icon">
                  <svg viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="3" /></svg>
                </div>
                <span className={`feat-tag ${tag}`} style={tagStyle}>{tagLabel}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                {replaces && <div className="feat-replaces">Replaces <s>{replaces}</s></div>}
                {!replaces && <div className="feat-replaces">Built for founders, not generic</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI TEASER */}
      <section className="ai-section reveal">
        <div className="ai-grid">
          <div className="ai-left">
            <div className="section-eyebrow">AI Layer — coming soon</div>
            <div className="ai-chip">
              <div className="ai-chip-dot"></div>
              <span className="ai-chip-text">In development</span>
            </div>
            <h2 className="section-h2">Your workspace<br /><em>learns</em> with you.</h2>
            <p className="section-sub" style={{ color: '#555552' }}>The AI layer turns natural conversation into structured work. No prompt engineering needed.</p>
            <div className="ai-features">
              {[
                { title: 'Task from chat', desc: '"Ahmed can you finish the landing page by Friday" → task created, assigned, due date set.' },
                { title: 'Smart summaries', desc: 'Missed a thread? Kern summarises what happened and what needs your attention.' },
                { title: 'Client brief → project', desc: 'Paste a brief, get a full project structure with tasks, timeline, and team assignments.' },
              ].map(({ title, desc }) => (
                <div className="ai-feat" key={title}>
                  <div className="ai-feat-icon">
                    <svg viewBox="0 0 16 16"><path d="M2 8L8 14 14 2" strokeWidth="1.5" /></svg>
                  </div>
                  <div><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="ai-right">
            <div className="ai-card">
              <div className="ai-card-header"><div className="ai-card-dot"></div>kern ai · parsing message</div>
              <div className="ai-prompt">&quot;can you please draft this task for the landing page redesign? need it done by friday&quot;</div>
              <div className="ai-response">Creating task: <strong>&quot;Landing page redesign&quot;</strong><br />Assigned to: Ahmed · Due: Friday · Priority: High · Project: Reelix<div className="ai-cursor"></div></div>
            </div>
            <div className="ai-card">
              <div className="ai-card-header"><div className="ai-card-dot"></div>kern ai · thread summary</div>
              <div className="ai-prompt">Last 3 hours of #reelix channel</div>
              <div className="ai-response">2 decisions made · 1 task created · 3 open questions. <strong>Action needed:</strong> Client is waiting on deliverable upload.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials reveal">
        <div className="test-inner">
          <div className="section-eyebrow">Early feedback</div>
          <h2 className="section-h2">From the beta.</h2>
          <div className="test-grid">
            {[
              { initials: 'AM', color: '#5B5BD6', name: 'Ahmed M.', role: 'Founder, Reelix', quote: '"Cancelled Slack last week. The inbox is genuinely better — having tasks and messages in the same place changes everything about how the team operates."' },
              { initials: 'JD', color: '#1D9E75', name: 'James D.', role: 'Agency Owner', quote: '"The client portal alone is worth it. My clients see tasks, files, and meetings without me needing a separate tool. I genuinely couldn\'t believe it was built-in."' },
              { initials: 'SK', color: '#C4720A', name: 'Sarah K.', role: 'Solo Founder', quote: '"Cut $180 in SaaS spend in my first two weeks. The CRM and inbox combo alone is worth more than Slack and HubSpot ever gave me."' },
            ].map(({ initials, color, name, role, quote }) => (
              <div className="test-card" key={name}>
                <div className="test-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 14 14"><path d="M7 1l1.55 3.14L12 4.78l-2.5 2.44.59 3.44L7 9l-3.09 1.66.59-3.44L2 4.78l3.45-.64L7 1z" /></svg>
                  ))}
                </div>
                <blockquote>{quote}</blockquote>
                <div className="test-divider"></div>
                <div className="test-author">
                  <div className="test-av" style={{ background: color }}>{initials}</div>
                  <div><div className="test-name">{name}</div><div className="test-role">{role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing reveal" id="pricing">
        <div className="pricing-inner">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-h2">Lock in founding price.</h2>
          <p className="section-sub">Early access members keep founding pricing forever. Prices increase at public launch.</p>
          <div className="pricing-grid">
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
              <button className="plan-btn" onClick={scrollToWaitlist}>Join Waitlist</button>
            </div>
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
              <button className="plan-btn" onClick={scrollToWaitlist}>Get Founding Price</button>
            </div>
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
              <button className="plan-btn" onClick={scrollToWaitlist}>Join Waitlist</button>
            </div>
          </div>
          <p className="pricing-note">14-day free trial on all plans · No credit card to join waitlist</p>
        </div>
      </section>

      {/* REFERRAL */}
      <section className="referral">
        <div className="ref-inner reveal">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Referral programme</div>
          <h2 className="ref-h2">Move up the waitlist.</h2>
          <p className="ref-sub">Every founder you refer moves you closer to the front. Top 10 get lifetime free access.</p>
          <div className="ref-steps">
            {['Join with your email', 'Get your unique link', 'Each referral skips the queue', 'Top 10 get free lifetime access'].map((step, i) => (
              <div className="ref-step" key={i}>
                <div className="ref-n">{i + 1}</div>
                <span className={i === 3 ? 'ref-highlight' : ''}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="final-circles">
          <div style={{ width: '700px', height: '700px' }}></div>
          <div style={{ width: '500px', height: '500px' }}></div>
          <div style={{ width: '300px', height: '300px' }}></div>
        </div>
        <div className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>Ready to consolidate?</div>
        <h2 className="reveal">One tool.<br /><em>Every founder</em><br />needs.</h2>
        <p className="final-sub reveal">Lock in founding pricing before public launch. 14-day free trial, no card required.</p>
        {!finalSuccess ? (
          <div className="final-form reveal">
            <input
              type="email"
              id="email-final"
              placeholder="you@company.com"
              value={emailFinal}
              onChange={(e) => setEmailFinal(e.target.value)}
              style={{
                flex: 1, padding: '14px 18px', background: '#fff', border: `1px solid ${emailFinalError ? '#C03B30' : 'var(--wire)'}`,
                borderRadius: '10px', fontFamily: "'Geist',sans-serif", fontSize: '15px', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s'
              }}
            />
            <button className="btn-hero" onClick={() => signup(emailFinal, setFinalSuccess, setEmailFinalError, setEmailFinal)}>Claim Early Access</button>
          </div>
        ) : (
          <div className="final-success show">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            You&apos;re on the list — we&apos;ll send your access link soon.
          </div>
        )}
        <div className="final-counter reveal"><strong>247 founders</strong> waiting · Wave 1 beta spots are limited</div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-brand">
          <div className="nav-mark"><KernMark /></div>
          kern
        </div>
        <div className="foot-links">
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:hello@kern.app">Contact</a>
          <Link href="#">Privacy</Link>
        </div>
        <div className="foot-copy">© 2026 Kern. All rights reserved.</div>
      </footer>
    </>
  )
}
