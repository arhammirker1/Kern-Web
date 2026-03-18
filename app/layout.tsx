// app/layout.tsx
// Root layout — applies to ALL pages
// All SEO metadata is defined here and overridden per-page

import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kern.app'

// ── Base metadata (inherited by all pages) ────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Kern — Your Agency Operating System',
    template: '%s | Kern',           // page title | Kern
  },
  description:
    'Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace for founders and agencies who refuse to juggle tools. Real-time inbox, tasks, client portal, vault, CRM, and LinkedIn Studio.',

  // ── Canonical & Indexing ───────────────────────────────────────────────────
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Open Graph (LinkedIn, Facebook, WhatsApp) ──────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Kern',
    title: 'Kern — Your Agency Operating System',
    description:
      'Replace Slack, Notion, HubSpot, Linear, and Buffer with one workspace built for founders.',
    images: [
      {
        url: '/og-image.png',     // Add a 1200×630 image to /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Kern — Your Agency Operating System',
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Kern — Your Agency Operating System',
    description:
      'Replace Slack, Notion, HubSpot, Linear, and Buffer with one workspace.',
    images: ['/og-image.png'],
    // creator: '@kern_app',    // Add when you have a Twitter handle
  },

  // ── GEO targeting metadata (helps local/regional SEO) ─────────────────────
  other: {
    // Tells crawlers this content is for a global English-speaking audience
    'geo.region':   'US',
    'geo.placename': 'United States',
    // Content language
    'content-language': 'en',
    // Tells Google which country to prioritise in search results
    // Change to 'PK' if you want to target Pakistan first, or remove for global
    'google': 'notranslate',
  },

  // ── App / PWA ──────────────────────────────────────────────────────────────
  applicationName: 'Kern',
  keywords: [
    'agency operating system',
    'slack alternative',
    'notion alternative',
    'founder workspace',
    'team inbox',
    'client portal',
    'project management',
    'kern app',
  ],
  authors: [{ name: 'Kern', url: SITE_URL }],
  creator: 'Kern',
  publisher: 'Kern',
}

// ── Viewport settings ─────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6F4EF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Structured data — tells Google this is a SaaS product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Kern',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '49',
                priceCurrency: 'USD',
              },
              description:
                'Agency operating system. Replaces Slack, Notion, HubSpot, Linear, and Buffer.',
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
