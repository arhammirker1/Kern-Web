// NEW
import './globals.css'
import MixpanelInit from '../components/MixpanelInit'

// ── Placeholder until you get your domain ──
// Replace 'https://kern.app' with your real domain the day you get it.
// This one line fixes: OG images, canonical URLs, sitemap, and AI citations.

const SITE_URL = 'https://www.kobin.team'

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
        'https://www.instagram.com/kobin.ai/',
        'https://www.linkedin.com/company/kobin-app/',
      ],
```

**In `public/llms.txt` find:**
```
- Domain: kobin.team
```

**Replace with:**
```
- Domain: kobin.team
- Instagram: https://www.instagram.com/kobin.ai/
- LinkedIn: https://www.linkedin.com/company/kobin-app/
- Product Hunt: https://www.producthunt.com/products/kobin
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
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'Kobin',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: [
        {
          '@type': 'Offer',
          name: 'Solo',
          price: '19',
          priceCurrency: 'USD',
          description: 'All 8 modules, up to 3 active projects',
          priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Founder',
          price: '49',
          priceCurrency: 'USD',
          description: 'Up to 5 team members, 3 client portals, LinkedIn Studio',
          priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Agency',
          price: '99',
          priceCurrency: 'USD',
          description: 'Unlimited team members and client portals, white-label option',
          priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' },
        },
      ],
      description: 'All-in-one agency workspace: tasks, inbox, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer.',
      featureList: [
        'Real-time inbox replacing Slack',
        'Google Drive-backed Vault replacing Notion',
        'Built-in CRM replacing HubSpot',
        'Time-horizon task system replacing Linear',
        'LinkedIn Studio replacing Buffer',
        'Client portal included in all plans',
        'Google Calendar and Meet integration',
        'AI layer with @AI mentions and command bar',
      ],
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
      <body>
  <MixpanelInit />
  {children}
</body>
    </html>
  )
}