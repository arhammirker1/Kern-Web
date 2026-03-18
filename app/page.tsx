// app/page.tsx
// Landing page — Server Component for SEO, Client islands for interactivity

import type { Metadata } from 'next'

// ── Page-level SEO override ───────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Kern — Your Agency Operating System',
  description:
    'Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace for agencies that refuse to juggle tools. Join the waitlist.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kern — Your Agency Operating System',
    description: 'One workspace. Replace five tools. Save $230/month.',
    url: '/',
  },
}

// ── The page itself ───────────────────────────────────────────────────────────
// Import your LandingPage client component (see components/landing-page.tsx)
// The page shell is a Server Component for fast initial HTML + SEO.
// Interactive bits (forms, scroll) live in the client component.

import { LandingPage } from '@/components/landing-page'

export default function Home() {
  return <LandingPage />
}
