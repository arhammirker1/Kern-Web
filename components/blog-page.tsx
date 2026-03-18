'use client'
// components/blog-page.tsx

import '@/styles/blog.css'

import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

// ── Newsletter form (React-controlled) ────────────────────────────────────────
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const handleSubmit = async () => {
    if (!email.trim() || !email.includes('@')) {
      setMsg('Please enter a valid email')
      setTimeout(() => setMsg(''), 2000)
      return
    }
    setState('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'blog' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setState('success')
      setMsg(data.duplicate ? "You're already subscribed!" : "You're subscribed. First issue lands Friday.")
      setEmail('')
    } catch {
      setState('error')
      setMsg('Something went wrong. Try again.')
      setTimeout(() => setState('idle'), 3000)
    }
  }

  return (
    <div>
      {state !== 'success' && (
        <div className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="you@company.com"
            disabled={state === 'loading'}
          />
          <button className="newsletter-btn" onClick={handleSubmit} disabled={state === 'loading'}>
            {state === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      )}
      {msg && (
        <div className={`newsletter-success show`} style={{ color: state === 'success' ? '#4DD6A5' : '#E57373' }}>
          {state === 'success' && '✓ '}{msg}
        </div>
      )}
    </div>
  )
}

export function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Scroll reveal
    const obs = new IntersectionObserver(
      els => els.forEach(el => { if (el.isIntersecting) el.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: '<nav>\n  <a href="/" className="nav-logo">\n    <div className="nav-mark"><svg viewBox="0 0 16 16" fill="none" width="16" height="16"><rect x="1.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF"/><rect x="9.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5"/><rect x="1.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.3"/></svg></div>\n    <span className="nav-wordmark">kern</span>\n  </a>\n  <div className="nav-links">\n    <a href="index.html#features">Features</a>\n    <a href="index.html#pricing">Pricing</a>\n    <a href="/docs">Docs</a>\n    <a href="/blog" className="active">Blog</a>\n  </div>\n  <a href="index.html#waitlist" className="nav-cta">Join Waitlist</a>\n</nav>\n\n<!-- HERO -->\n<div className="blog-hero reveal">\n  <div className="blog-hero-inner">\n    <div className="blog-eyebrow">The Kern Blog</div>\n    <h1>For founders<br />who <em>build.</em></h1>\n    <p className="blog-hero-sub">Essays, guides, and honest writing about running an agency without losing your mind. No fluff.</p>\n  </div>\n</div>\n\n<!-- FEATURED -->\n<div className="blog-featured reveal">\n  <div className="blog-featured-inner">\n    <a href="#" className="featured-card">\n      <div className="featured-img-wrap">\n        <div className="featured-img">\n          <div className="feat-visual">\n            <div className="feat-visual-icons">\n              <div className="feat-app-icon"><svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#4A154B"/><circle cx="9" cy="14" r="2" fill="#E01E5A"/><circle cx="14" cy="9" r="2" fill="#36C5F0"/><circle cx="19" cy="14" r="2" fill="#2EB67D"/><circle cx="14" cy="19" r="2" fill="#ECB22E"/></svg></div>\n              <div className="feat-app-icon"><svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)"/><rect x="5" y="5" width="18" height="18" rx="2" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="8" y1="10" x2="20" y2="10" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"/><line x1="8" y1="14" x2="18" y2="14" stroke="rgba(255,255,255,0.3)" stroke-width="1.2"/></svg></div>\n              <div className="feat-app-icon"><svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#5E6AD2"/><path d="M6 20L20 6M6 20l5-5M11 22l5-5M16 22L22 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>\n              <div className="feat-app-icon"><svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#FF7A59"/><circle cx="14" cy="11" r="3.5" fill="rgba(255,255,255,0.9)"/><path d="M6 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg></div>\n              <div className="feat-app-icon"><svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#2C4BFF"/><path d="M14 6L18 8.5V13.5L14 16L10 13.5V8.5L14 6Z" fill="rgba(255,255,255,0.3)"/><path d="M14 9L17 11V14L14 16L11 14V11L14 9Z" fill="white"/></svg></div>\n            </div>\n            <div className="feat-chaos-text">Too many tools.<br />Not enough focus.</div>\n          </div>\n        </div>\n      </div>\n      <div className="featured-meta">\n        <span className="post-category cat-problem">The problem</span>\n        <div className="post-title">Why founders pay $283/month for tools that don\'t talk to each other</div>\n        <p className="post-excerpt">The average 5-person agency runs Slack, Notion, HubSpot, Linear, and Buffer. That\'s 5 separate logins, 5 notification streams, and a monthly invoice that quietly compounds. Here\'s the real cost of that stack.</p>\n        <div className="post-meta">\n          <span>Arham Mirkar</span>\n          <span>·</span>\n          <span>Mar 18, 2026</span>\n          <span>·</span>\n          <span>8 min read</span>\n        </div>\n        <span className="post-read-btn">Read article →</span>\n      </div>\n    </a>\n  </div>\n</div>\n\n<!-- GRID -->\n<div className="blog-grid">\n  <div className="blog-grid-inner reveal">\n    <div className="grid-header">\n      <h2>All posts</h2>\n    </div>\n    <div className="posts-grid">\n\n      <a href="#" className="post-card">\n        <div className="post-thumb thumb-dark">\n          context<br />switching\n          <span className="thumb-label">DATA ESSAY</span>\n        </div>\n        <div className="post-body">\n          <span className="post-category cat-problem">The problem</span>\n          <div className="post-title">The real cost of switching between Slack, Notion and Linear</div>\n          <p className="post-excerpt">Research shows 1.2 months of productivity lost per year to tool switching. Here\'s how we calculated that number and what it means for your team.</p>\n        </div>\n        <div className="post-footer">\n          <span className="post-footer-meta">Mar 15 · 6 min</span>\n          <span className="post-footer-arr">→</span>\n        </div>\n      </a>\n\n      <a href="#" className="post-card">\n        <div className="post-thumb thumb-vi">\n          build in<br />public\n          <span className="thumb-label">BUILD LOG</span>\n        </div>\n        <div className="post-body">\n          <span className="post-category cat-build">Build in public</span>\n          <div className="post-title">How we built a real-time inbox that replaces Slack in 3 weeks</div>\n          <p className="post-excerpt">The technical decisions, UX mistakes, and hard lessons from building Kern\'s inbox from scratch. Supabase Realtime, optimistic updates, and why reactions are harder than you think.</p>\n        </div>\n        <div className="post-footer">\n          <span className="post-footer-meta">Mar 12 · 11 min</span>\n          <span className="post-footer-arr">→</span>\n        </div>\n      </a>\n\n      <a href="#" className="post-card">\n        <div className="post-thumb thumb-parch">\n          client<br />portal\n          <span className="thumb-label">FEATURE GUIDE</span>\n        </div>\n        <div className="post-body">\n          <span className="post-category cat-guide">Guide</span>\n          <div className="post-title">How agencies are managing clients without a separate portal tool</div>\n          <p className="post-excerpt">Three agency owners share how they replaced Notion client spaces, Basecamp, and custom-built portals with a single client view. Real workflows, real numbers.</p>\n        </div>\n        <div className="post-footer">\n          <span className="post-footer-meta">Mar 10 · 9 min</span>\n          <span className="post-footer-arr">→</span>\n        </div>\n      </a>\n\n      <a href="#" className="post-card">\n        <div className="post-thumb thumb-dark">\n          kern<br />v1\n          <span className="thumb-label">LAUNCH STORY</span>\n        </div>\n        <div className="post-body">\n          <span className="post-category cat-story">Story</span>\n          <div className="post-title">I built Kern to replace my own agency tool stack. Here\'s what happened.</div>\n          <p className="post-excerpt">12 months. 5 failed prototypes. 1 name change. And a product that finally feels like what I always wanted to use. The honest story behind building Kern.</p>\n        </div>\n        <div className="post-footer">\n          <span className="post-footer-meta">Mar 6 · 14 min</span>\n          <span className="post-footer-arr">→</span>\n        </div>\n      </a>\n\n      <a href="#" className="post-card">\n        <div className="post-thumb thumb-vi">\n          AI +<br />tasks\n          <span className="thumb-label">AI LAYER</span>\n        </div>\n        <div className="post-body">\n          <span className="post-category cat-build">AI Layer</span>\n          <div className="post-title">Why we\'re building the AI layer after the foundation, not before it</div>\n          <p className="post-excerpt">Every productivity tool is rushing to ship AI. We\'re doing it differently — building the data model first so the AI actually has something to work with.</p>\n        </div>\n        <div className="post-footer">\n          <span className="post-footer-meta">Mar 3 · 7 min</span>\n          <span className="post-footer-arr">→</span>\n        </div>\n      </a>\n\n      <a href="#" className="post-card">\n        <div className="post-thumb thumb-parch">\n          Slack vs<br />Kern\n          <span className="thumb-label">COMPARISON</span>\n        </div>\n        <div className="post-body">\n          <span className="post-category cat-guide">Guide</span>\n          <div className="post-title">Slack vs Kern: what a 5-person agency actually needs in 2026</div>\n          <p className="post-excerpt">A direct, honest comparison. Where Slack wins, where Kern wins, and why we built what we did. No sales pitch — just the reality of both tools.</p>\n        </div>\n        <div className="post-footer">\n          <span className="post-footer-meta">Feb 28 · 8 min</span>\n          <span className="post-footer-arr">→</span>\n        </div>\n      </a>\n\n    </div>\n  </div>\n</div>\n\n<!-- CATEGORIES -->\n<div className="blog-cats reveal">\n  <div className="blog-cats-inner">\n    <a href="#" className="cat-card">\n      <div className="cat-num">6</div>\n      <div className="cat-name">The problem</div>\n      <div className="cat-desc">Essays on tool overload, context switching, and agency inefficiency</div>\n    </a>\n    <a href="#" className="cat-card">\n      <div className="cat-num">4</div>\n      <div className="cat-name">Build in public</div>\n      <div className="cat-desc">Technical decisions, product mistakes, and honest build logs from Kern HQ</div>\n    </a>\n    <a href="#" className="cat-card">\n      <div className="cat-num">5</div>\n      <div className="cat-name">Guides</div>\n      <div className="cat-desc">Practical walkthroughs for running a leaner, more focused agency</div>\n    </a>\n    <a href="#" className="cat-card">\n      <div className="cat-num">3</div>\n      <div className="cat-name">Stories</div>\n      <div className="cat-desc">Founder journeys and real stories from agencies using Kern</div>\n    </a>\n  </div>\n</div>\n\n<!-- NEWSLETTER -->\n<div className="blog-newsletter">\n  <div className="newsletter-inner reveal">\n    <div className="newsletter-eyebrow">Newsletter</div>\n    <h2 className="newsletter-h2">No fluff.<br /><em>Just signal.</em></h2>\n    <p className="newsletter-sub">One email per week. Founder tools, honest product updates, and essays worth reading. No marketing.</p>\n    <div id="newsletter-form-slot"></div>\n    <div className="newsletter-note">1,200+ founders subscribed · Unsubscribe anytime</div>\n  </div>\n</div>\n\n<footer>\n  <div className="foot-brand">\n    <div className="nav-mark"><svg viewBox="0 0 16 16" fill="none" width="16" height="16"><rect x="1.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF"/><rect x="9.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5"/><rect x="1.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.3"/></svg></div>\n    kern\n  </div>\n  <div className="foot-links">\n    <a href="index.html#features">Features</a>\n    <a href="index.html#pricing">Pricing</a>\n    <a href="/docs">Docs</a>\n    <a href="/blog">Blog</a>\n    <a href="#">Privacy</a>\n  </div>\n  <div className="foot-copy">© 2026 Kern. All rights reserved.</div>\n</footer>\n\n<!-- Supabase JS -->' }} />
      {mounted && document.getElementById('newsletter-form-slot') &&
        ReactDOM.createPortal(<NewsletterForm />, document.getElementById('newsletter-form-slot')!)
      }
    </>
  )
}
