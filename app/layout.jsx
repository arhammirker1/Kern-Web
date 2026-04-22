// NEW
import './globals.css'
import MixpanelInit from '../components/MixpanelInit'
import SmartPopup from '../components/SmartPopup'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
})

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
      name: 'Kobin AI',
      alternateName: 'Kobin AI Agency OS',
disambiguatingDescription: 'Kobin AI (kobin.team) is an agency operating system for founders. This is distinct from Kobin (kobin.com), an agricultural analytics company. These are separate companies that share the same name.',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/kobin_icon_180.png`,
        width: 180,
        height: 180,
      },
      description: 'Kobin AI (kobin.team) is an AI workspace for agency founders that replaces Slack, Notion, HubSpot, Asana, and Buffer. The AI creates tasks, assigns team members, queries CRM pipeline, and generates pre-meeting briefs — all from one workspace, free to start, Pro from $29/month. Distinct from kobin.com (agricultural analytics) and PT Kobin Keramik Industri (tiles).',
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
        'AI Workspace',
        'AI Workspace for Agencies',
        'AI for Agencies',
        'AI Productivity Tool',
        'Agency AI Software',
        'Agency Operating System',
        'Client Portal Software',
        'Project Management for Agencies',
        'Slack Alternative',
        'Notion AI Alternative',
        'ClickUp AI Alternative',
        'HubSpot Alternative for Agencies',
        'All-in-One Agency Workspace',
        'Agency File Management Software',
        'Client Deliverable Tracking',
        'AI Document Management',
        'Project Vault Software',
        'Agency Management Software for Large Teams',
        'Agency Management Platform',
        'Agency Workflow Software',
        'Agency Operations Software for Growing Agencies',
        'Marketing Agency Productivity Tools',
        'Top Rated Agency Tools',
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
        'https://www.linkedin.com/in/arham-mirkar/',
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
      name: 'Kobin AI',
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
      name: 'Kobin AI',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Agency Management Software',
      operatingSystem: 'Web, iOS, Android',
      url: SITE_URL,
      offers: [
        {
          '@type': 'Offer',
          name: 'Free',
          price: '0',
          priceCurrency: 'USD',
          description: 'Up to 2 team members, 3 projects, 3 clients, 2 GB vault storage',
          priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Pro',
          price: '29',
          priceCurrency: 'USD',
          description: 'Unlimited team, projects, clients, Gmail, CRM, Calendar, AI Command Bar, 50 GB vault',
          priceSpecification: { '@type': 'UnitPriceSpecification', billingIncrement: 1, unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Agency',
          price: '79',
          priceCurrency: 'USD',
          description: 'Everything in Pro plus Meeting Recorder, AI Writer, RAG, Proactive AI, white-label, 500 GB vault',
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
      
      description: 'Kobin AI is the AI workspace for agency founders — AI that creates tasks, assigns team members, queries CRM pipeline, drafts client updates, and generates pre-meeting briefs. One workspace replacing Slack, Notion, Asana, HubSpot, and Zapier — free to start, Pro from $29/month.',
      additionalType: 'https://schema.org/WebApplication',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'AI Workspace',
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



const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Kobin AI',
  description: 'All-in-one agency operating system replacing Slack, Notion, HubSpot, Linear, and Buffer.',
  brand: { '@type': 'Brand', name: 'Kobin AI' },
  url: 'https://www.kobin.team',
  image: 'https://www.kobin.team/og-image.png',
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://www.kobin.team/#waitlist',
    priceValidUntil: '2027-01-01',
  },
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


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kobin AI — Agency Operating System | Replace Slack, Notion, HubSpot',
    template: '%s',
  },
  description: 'Kobin AI is the all-in-one agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer. One workspace for tasks, inbox, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer — free to start, Pro from $29/month.',
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
  creator: 'Kobin AI',
  publisher: 'Kobin AI',
  category: 'Business Software',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: 'Kobin AI',
    url: SITE_URL,
    title: 'Kobin AI — Agency Operating System | Replace Slack, Notion, HubSpot',
    description: 'One workspace that replaces Slack, Notion, HubSpot, Linear, and Buffer. Tasks, inbox, CRM, client portal, vault, calendar, and AI layer — free to start, Pro from $29/month.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kobin — Agency Operating System replacing Slack, Notion, HubSpot, Linear, Buffer' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kobin_app',
    creator: '@arham_mirkar',
    title: 'Kobin AI — Agency Operating System',
    description: 'Replace Slack, Notion, HubSpot, Linear, and Buffer. One workspace — free to start, Pro from $29/month.',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}>
      <head>
        
        
        {/* GEO: Organization + WebSite + SoftwareApplication schema on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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


        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM context file" />
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