'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'

const KernMark = () => (
  <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
    <rect x="1.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" />
    <rect x="9.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5" />
    <rect x="1.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.3" />
  </svg>
)

export default function BlogPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (els) => els.forEach((el) => { if (el.isIntersecting) el.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function newsletterSignup() {
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setEmailError(true)
      setTimeout(() => setEmailError(false), 1500)
      return
    }
    setNewsletterSuccess(true)
    setNewsletterEmail('')
  }

  const posts = [
    {
      thumbClass: 'thumb-dark', thumbText: 'context\nswitching', thumbLabel: 'DATA ESSAY',
      category: 'cat-problem', catLabel: 'The problem',
      title: 'The real cost of switching between Slack, Notion and Linear',
      excerpt: 'Research shows 1.2 months of productivity lost per year to tool switching. Here\'s how we calculated that number and what it means for your team.',
      meta: 'Mar 15 · 6 min',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'build in\npublic', thumbLabel: 'BUILD LOG',
      category: 'cat-build', catLabel: 'Build in public',
      title: 'How we built a real-time inbox that replaces Slack in 3 weeks',
      excerpt: 'The technical decisions, UX mistakes, and hard lessons from building Kern\'s inbox from scratch. Supabase Realtime, optimistic updates, and why reactions are harder than you think.',
      meta: 'Mar 12 · 11 min',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'client\nportal', thumbLabel: 'FEATURE GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'How agencies are managing clients without a separate portal tool',
      excerpt: 'Three agency owners share how they replaced Notion client spaces, Basecamp, and custom-built portals with a single client view. Real workflows, real numbers.',
      meta: 'Mar 10 · 9 min',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'kern\nv1', thumbLabel: 'LAUNCH STORY',
      category: 'cat-story', catLabel: 'Story',
      title: 'I built Kern to replace my own agency tool stack. Here\'s what happened.',
      excerpt: '12 months. 5 failed prototypes. 1 name change. And a product that finally feels like what I always wanted to use. The honest story behind building Kern.',
      meta: 'Mar 6 · 14 min',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'AI +\ntasks', thumbLabel: 'AI LAYER',
      category: 'cat-build', catLabel: 'AI Layer',
      title: 'Why we\'re building the AI layer after the foundation, not before it',
      excerpt: 'Every productivity tool is rushing to ship AI. We\'re doing it differently — building the data model first so the AI actually has something to work with.',
      meta: 'Mar 3 · 7 min',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'Slack vs\nKern', thumbLabel: 'COMPARISON',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'Slack vs Kern: what a 5-person agency actually needs in 2026',
      excerpt: 'A direct, honest comparison. Where Slack wins, where Kern wins, and why we built what we did. No sales pitch — just the reality of both tools.',
      meta: 'Feb 28 · 8 min',
    },
  ]

  return (
    <>
      <Nav activePage="blog" />

      {/* HERO */}
      <div className="blog-hero reveal">
        <div className="blog-hero-inner">
          <div className="blog-eyebrow">The Kern Blog</div>
          <h1>For founders<br />who <em>build.</em></h1>
          <p className="blog-hero-sub">Essays, guides, and honest writing about running an agency without losing your mind. No fluff.</p>
        </div>
      </div>

      {/* FEATURED */}
      <div className="blog-featured reveal">
        <div className="blog-featured-inner">
          <a href="#" className="featured-card">
            <div className="featured-img-wrap">
              <div className="featured-img">
                <div className="feat-visual">
                  <div className="feat-visual-icons">
                    <div className="feat-app-icon">
                      <svg viewBox="0 0 28 28" fill="none">
                        <rect width="28" height="28" rx="7" fill="#4A154B" />
                        <circle cx="9" cy="14" r="2" fill="#E01E5A" />
                        <circle cx="14" cy="9" r="2" fill="#36C5F0" />
                        <circle cx="19" cy="14" r="2" fill="#2EB67D" />
                        <circle cx="14" cy="19" r="2" fill="#ECB22E" />
                      </svg>
                    </div>
                    <div className="feat-app-icon">
                      <svg viewBox="0 0 28 28" fill="none">
                        <rect width="28" height="28" rx="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" />
                        <rect x="5" y="5" width="18" height="18" rx="2" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                        <line x1="8" y1="10" x2="20" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                        <line x1="8" y1="14" x2="18" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div className="feat-app-icon">
                      <svg viewBox="0 0 28 28" fill="none">
                        <rect width="28" height="28" rx="7" fill="#5E6AD2" />
                        <path d="M6 20L20 6M6 20l5-5M11 22l5-5M16 22L22 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="feat-app-icon">
                      <svg viewBox="0 0 28 28" fill="none">
                        <rect width="28" height="28" rx="7" fill="#FF7A59" />
                        <circle cx="14" cy="11" r="3.5" fill="rgba(255,255,255,0.9)" />
                        <path d="M6 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="feat-app-icon">
                      <svg viewBox="0 0 28 28" fill="none">
                        <rect width="28" height="28" rx="7" fill="#2C4BFF" />
                        <path d="M14 6L18 8.5V13.5L14 16L10 13.5V8.5L14 6Z" fill="rgba(255,255,255,0.3)" />
                        <path d="M14 9L17 11V14L14 16L11 14V11L14 9Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <div className="feat-chaos-text">Too many tools.<br />Not enough focus.</div>
                </div>
              </div>
            </div>
            <div className="featured-meta">
              <span className="post-category cat-problem">The problem</span>
              <div className="post-title">Why founders pay $283/month for tools that don&apos;t talk to each other</div>
              <p className="post-excerpt">The average 5-person agency runs Slack, Notion, HubSpot, Linear, and Buffer. That&apos;s 5 separate logins, 5 notification streams, and a monthly invoice that quietly compounds. Here&apos;s the real cost of that stack.</p>
              <div className="post-meta">
                <span>Arham Mirkar</span>
                <span>·</span>
                <span>Mar 18, 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
              <span className="post-read-btn">Read article →</span>
            </div>
          </a>
        </div>
      </div>

      {/* GRID */}
      <div className="blog-grid">
        <div className="blog-grid-inner reveal">
          <div className="grid-header"><h2>All posts</h2></div>
          <div className="posts-grid">
            {posts.map(({ thumbClass, thumbText, thumbLabel, category, catLabel, title, excerpt, meta }) => (
              <a href="#" className="post-card" key={title}>
                <div className={`post-thumb ${thumbClass}`}>
                  {thumbText.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < thumbText.split('\n').length - 1 && <br />}</span>
                  ))}
                  <span className="thumb-label">{thumbLabel}</span>
                </div>
                <div className="post-body">
                  <span className={`post-category ${category}`}>{catLabel}</span>
                  <div className="post-title">{title}</div>
                  <p className="post-excerpt">{excerpt}</p>
                </div>
                <div className="post-footer">
                  <span className="post-footer-meta">{meta}</span>
                  <span className="post-footer-arr">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="blog-cats reveal">
        <div className="blog-cats-inner">
          {[
            { num: 6, name: 'The problem', desc: 'Essays on tool overload, context switching, and agency inefficiency' },
            { num: 4, name: 'Build in public', desc: 'Technical decisions, product mistakes, and honest build logs from Kern HQ' },
            { num: 5, name: 'Guides', desc: 'Practical walkthroughs for running a leaner, more focused agency' },
            { num: 3, name: 'Stories', desc: 'Founder journeys and real stories from agencies using Kern' },
          ].map(({ num, name, desc }) => (
            <a href="#" className="cat-card" key={name}>
              <div className="cat-num">{num}</div>
              <div className="cat-name">{name}</div>
              <div className="cat-desc">{desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="blog-newsletter">
        <div className="newsletter-inner reveal">
          <div className="newsletter-eyebrow">Newsletter</div>
          <h2 className="newsletter-h2">No fluff.<br /><em>Just signal.</em></h2>
          <p className="newsletter-sub">One email per week. Founder tools, honest product updates, and essays worth reading. No marketing.</p>
          <div className="newsletter-form">
            <input
              type="email"
              id="newsletter-email"
              placeholder="you@company.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={emailError ? { borderColor: '#C03B30' } : {}}
            />
            <button className="newsletter-btn" onClick={newsletterSignup}>Subscribe</button>
          </div>
          <div className={`newsletter-success${newsletterSuccess ? ' show' : ''}`}>
            ✓ You&apos;re subscribed. First issue lands Friday.
          </div>
          <div className="newsletter-note">1,200+ founders subscribed · Unsubscribe anytime</div>
        </div>
      </div>

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
          <a href="#">Privacy</a>
        </div>
        <div className="foot-copy">© 2026 Kern. All rights reserved.</div>
      </footer>
    </>
  )
}
