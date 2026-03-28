// NEW
import './globals.css'

// ── Placeholder until you get your domain ──
// Replace 'https://kern.app' with your real domain the day you get it.
// This one line fixes: OG images, canonical URLs, sitemap, and AI citations.

const SITE_URL = 'https://kobin.team'

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Kobin',
      url: SITE_URL,
      description: 'Agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace.',
      foundingDate: '2026',
      sameAs: [
        'https://twitter.com/kobin_app',
        'https://www.linkedin.com/in/arham-mirkar/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@kobin.team',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Kobin',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'Kobin',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: '30',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' },
      },
      description: 'All-in-one agency workspace: tasks, inbox, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer.',
    },
  ],
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kobin — Your Agency Operating System',
    template: '%s | Kobin',
  },
  description: 'Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace for founders running agencies — tasks, inbox, CRM, client portal, vault, calendar, and AI layer.',
  keywords: ['agency operating system', 'agency management software', 'replace Slack Notion HubSpot', 'client portal for agencies', 'agency tool consolidation', 'kobin app'],
  authors: [{ name: 'Arham Mirkar', url: SITE_URL }],
  creator: 'Kobin',
  publisher: 'Kobin',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    siteName: 'Kobin',
    url: SITE_URL,
    title: 'Kobin — Your Agency Operating System',
    description: 'Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace for agency founders.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kobin — Agency Operating System' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kobin_app',
    creator: '@arham_mirkar',
    title: 'Kobin — Your Agency Operating System',
    description: 'Replace Slack, Notion, HubSpot, Linear, and Buffer.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* GEO: Organization + WebSite + SoftwareApplication schema on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <link rel="icon" type="image/png" sizes="32x32" href="/kobin_icon_32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/kobin_icon_180.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}