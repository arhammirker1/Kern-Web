'use client'
import Link from 'next/link'



export default function Nav({ activePage }) {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <img src="/kobin_icon_32.png" width="28" height="28" alt="Kobin" style={{ borderRadius: '7px' }} />
        <span className="nav-wordmark">Kobin</span>
      </Link>
      <div className="nav-links">
        <Link href="/#features" className={activePage === 'features' ? 'active' : ''}>Features</Link>
        <Link href="/#pricing" className={activePage === 'pricing' ? 'active' : ''}>Pricing</Link>
        <Link href="/docs" className={activePage === 'docs' ? 'active' : ''}>Docs</Link>
        <Link href="/blog" className={activePage === 'blog' ? 'active' : ''}>Blog</Link>
      </div>
      <Link href="/#waitlist" className="nav-cta">Join Waitlist</Link>
    </nav>
  )
}