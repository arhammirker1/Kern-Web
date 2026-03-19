'use client'
import Link from 'next/link'

const KernMark = () => (
  <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
    <rect x="1.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" />
    <rect x="9.5" y="1.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5" />
    <rect x="1.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" fill="#F6F4EF" opacity="0.3" />
  </svg>
)

export default function Nav({ activePage }) {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="nav-mark"><KernMark /></div>
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
