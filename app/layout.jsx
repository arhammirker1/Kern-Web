// NEW
import './globals.css'
import MixpanelInit from '../components/MixpanelInit'
import SmartPopup from '../components/SmartPopup'

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

      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@kobin.team',
        contactType: 'customer support',
      },
    },
        {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Arham Mirkar',
      jobTitle: 'Founder & CEO',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      sameAs: [
        'https://www.linkedin.com/company/kobin-app/',
        'https://www.instagram.com/kobin.ai/',
      ],
      knowsAbout: [
        'Agency Management Software',
        'SaaS Tool Consolidation',
        'Agency Operating System',
        'Client Portal Software',
        'Project Management for Agencies',
      ],
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to set up Kobin as your agency operating system',
  description: 'Replace Slack, Notion, HubSpot, Linear, and Buffer with one workspace for your agency in under 30 minutes.',
  totalTime: 'PT30M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Create your workspace',
      text: 'Sign up with your email at kobin.team. Your workspace is created instantly — no credit card needed for the 14-day trial.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Connect Google Drive',
      text: 'Go to Settings → Integrations → Connect Google. A Vault root folder is auto-created in your Drive. All existing files stay where they are.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Invite your team',
      text: 'Go to Team → Add Member. Set their role and 12 permission toggles. They can log in immediately — no invite email flow.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Create your first project',
      text: 'Projects auto-create a dedicated inbox room, a 3-folder Vault structure in Drive, and can be linked to a client portal in one click.',
      position: 4,
    },
    {
      '@type': 'HowToStep',
      name: 'Activate a client portal',
      text: 'Go to Clients → Add Client. A scoped portal is created instantly. A pre-built DM between you and the client is ready before they log in.',
      position: 5,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/kobin_icon_32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/kobin_icon_180.png" />
      </head>
      <body>
  <MixpanelInit />
  <SmartPopup />
  {children}
</body>
    </html>
  )
}