'use client'
import Link from 'next/link'

const KernMark = ({ size = 16 }) => (
  <svg viewBox="0 0 512 512" fill="none" width={size} height={size}>
    <rect width="512" height="512" rx="116" fill="#0D0D0C"/>
    <rect x="148" y="128" width="52" height="256" rx="26" fill="#F0EDE6"/>
    <line x1="196" y1="238" x2="352" y2="108" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round"/>
    <line x1="196" y1="272" x2="352" y2="402" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round"/>
    <circle cx="196" cy="256" r="34" fill="#5B4FE8"/>
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
