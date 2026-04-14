'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav({ activePage }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{width:'100%',boxSizing:'border-box'}}>
        <Link href="/" className="nav-logo">
          <img src="/kobin_icon_32.png" width="28" height="28" alt="Kobin AI" style={{ borderRadius: '7px' }} />
          <span className="nav-wordmark">Kobin AI</span>
        </Link>

        <div className="nav-links">
          <Link href="/#features" className={activePage === 'features' ? 'active' : ''}>Features</Link>
          <Link href="/#pricing" className={activePage === 'pricing' ? 'active' : ''}>Pricing</Link>
          <Link href="/ai-workspace" className={activePage === 'ai-workspace' ? 'active' : ''} style={{ color: 'var(--vi)', fontWeight: 500 }}>AI Workspace</Link>
          <Link href="/docs" className={activePage === 'docs' ? 'active' : ''}>Docs</Link>
          <Link href="/blog" className={activePage === 'blog' ? 'active' : ''}>Blog</Link>
          <Link href="/compare" className={activePage === 'compare' ? 'active' : ''}>Compare</Link>
        </div>

        <div className="nav-socials">
          <a href="https://www.instagram.com/kobin.ai/" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/kobin-app/" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        <div className="nav-right">
          <Link href="/#waitlist" className="nav-cta nav-cta-desktop">Join Waitlist</Link>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l12 12M16 4L4 16"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 5h14M3 10h14M3 15h14"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-mobile-menu">
          <Link href="/#features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/ai-workspace" onClick={() => setOpen(false)} style={{ color: 'var(--vi)', fontWeight: 500 }}>AI Workspace</Link>
          <Link href="/docs" onClick={() => setOpen(false)}>Docs</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/compare" onClick={() => setOpen(false)}>Compare</Link>
          <div style={{ display: 'flex', gap: '16px', paddingTop: '8px' }}>
            <a href="https://www.instagram.com/kobin.ai/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ghost)', fontSize: '13px' }}>Instagram</a>
            <a href="https://www.linkedin.com/company/kobin-app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ghost)', fontSize: '13px' }}>LinkedIn</a>
          </div>
        </div>
      )}
    </>
  )
}