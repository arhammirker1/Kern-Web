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
      alternateName: 'Kobin Agency OS',
disambiguatingDescription: 'Kobin (kobin.team) is an agency operating system for founders. This is distinct from Kobin (kobin.com), an agricultural analytics company. These are separate companies that share the same name.',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/kobin_icon_180.png`,
        width: 180,
        height: 180,
      },
      description: 'Agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer in a single workspace.',
      foundingDate: '2026',
      sameAs: [
        'https://www.instagram.com/kobin.ai/',
        'https://www.linkedin.com/company/kobin-app/',
        'https://www.producthunt.com/products/kobin',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@kobin.team',
        contactType: 'customer support',
      },
      knowsAbout: [
        'Agency Management Software',
        'SaaS Tool Consolidation',
        'Agency Operating System',
        'Client Portal Software',
        'Project Management for Agencies',
        'AI Workspace Assistant',
        'Slack Alternative',
        'Notion Alternative',
        'HubSpot Alternative for Agencies',
      ],
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
      applicationSubCategory: 'Agency Management Software',
      operatingSystem: 'Web, iOS, Android',
      url: SITE_URL,
      offers: [
        {
          '@type': 'Offer',
          name: 'Solo',
          price: '19',
          priceCurrency: 'USD',
          description: 'All 8 modules, up to 3 active projects, 1 user',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '12',
        bestRating: '5',
        worstRating: '1',
      },
      description: 'All-in-one agency workspace: tasks, inbox, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer.',
      featureList: [
        'Real-time inbox replacing Slack',
        'Google Drive-backed Vault replacing Notion',
        'Built-in CRM replacing HubSpot',
        'Time-horizon task system replacing Linear',
        'LinkedIn Studio replacing Buffer',
        'Client portal included in all plans',
        'Google Calendar and Meet integration',
        'AI layer with @AI mentions and global command bar',
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

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Kobin',
  description: 'All-in-one agency operating system replacing Slack, Notion, HubSpot, Linear, and Buffer.',
  brand: { '@type': 'Brand', name: 'Kobin' },
  url: SITE_URL,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '12',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Ahmed M.' },
      reviewBody: 'Cancelled Slack last week. The inbox is genuinely better — having tasks and messages in the same place changes everything about how the team operates.',
      datePublished: '2026-03-01',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'James D.' },
      reviewBody: 'The client portal alone is worth it. My clients see tasks, files, and meetings without me needing a separate tool.',
      datePublished: '2026-03-05',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Sarah K.' },
      reviewBody: 'Cut $180 in SaaS spend in my first two weeks. The CRM and inbox combo alone is worth more than Slack and HubSpot ever gave me.',
      datePublished: '2026-03-10',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${SITE_URL}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Documentation',
      item: `${SITE_URL}/docs`,
    },      
  ],
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kobin — Agency Operating System | Replace Slack, Notion, HubSpot',
    template: '%s | Kobin',
  },
  description: 'Kobin is the all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer. One workspace for tasks, inbox, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer — from $49/month.',
  keywords: [
    'agency operating system',
    'agency management software',
    'replace Slack Notion HubSpot',
    'client portal for agencies',
    'agency tool consolidation',
    'Slack alternative for agencies',
    'Notion alternative',
    'HubSpot alternative small agency',
    'kobin app',
    'all-in-one agency tool',
    'agency AI assistant',
  ],
  authors: [{ name: 'Arham Mirkar', url: SITE_URL }],
  creator: 'Kobin',
  publisher: 'Kobin',
  category: 'Business Software',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: 'Kobin',
    url: SITE_URL,
    title: 'Kobin — Agency Operating System | Replace Slack, Notion, HubSpot',
    description: 'One workspace that replaces Slack, Notion, HubSpot, Linear, and Buffer. Tasks, inbox, CRM, client portal, vault, calendar, and AI layer — from $49/month.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kobin — Agency Operating System replacing Slack, Notion, HubSpot, Linear, Buffer' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kobin_app',
    creator: '@arham_mirkar',
    title: 'Kobin — Agency Operating System',
    description: 'Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace from $49/month.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: 'YOUR_VERIFICATION_TOKEN',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TZ54LW5K');`,
          }}
        />


        <script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="JBC2tKzAYEWLdvkLcglcwA" 
          async>
        </script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />


        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/kobin_icon_32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/kobin_icon_180.png" />
      </head>
      <body>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-TZ54LW5K"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
  {/* End Google Tag Manager (noscript) */}

  <MixpanelInit />
  <SmartPopup />
  {children}
</body>
    </html>
  )
}