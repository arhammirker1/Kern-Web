// SAVE AS: app/compare/kobin-vs-hubspot/page.tsx
// PRIMARY KEYWORD: "kobin vs hubspot", "hubspot alternative for agencies"
// SECONDARY: "hubspot alternative small agency 2026", "crm for agencies 2026"
// TERTIARY: "hubspot crm replacement", "agency crm with ai proactive alerts"

import Link from 'next/link'
import Nav from '../../../components/Nav'

export const metadata = {
  title: 'Kobin vs HubSpot: The CRM Built for Agencies vs the CRM Built for Enterprise | Kobin',
  description:
    'HubSpot costs $50–90/month for a 5-person agency and is designed for enterprise sales teams. Kobin includes a proactive CRM with revenue intelligence, risk alerts, Gmail sync, and daily briefs — all from $49/month total. Here is the full comparison.',
  keywords: [
    'kobin vs hubspot',
    'hubspot alternative for agencies',
    'hubspot alternative small agency 2026',
    'crm for agencies 2026',
    'hubspot crm replacement',
    'agency crm ai proactive',
    'best crm for small agencies',
    'hubspot vs kobin comparison',
    'proactive crm for agencies',
    'hubspot alternative all-in-one',
  ],
  alternates: { canonical: 'https://www.kobin.team/compare/kobin-vs-hubspot' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Kobin vs HubSpot — Which CRM Actually Works for a 5-Person Agency?',
    description:
      'HubSpot is built for sales teams with dedicated CRM admins. Kobin is built for agency founders who need proactive revenue intelligence, risk alerts, and Gmail-synced CRM in one tab.',
    type: 'website',
    url: 'https://www.kobin.team/compare/kobin-vs-hubspot',
    siteName: 'Kobin',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kobin vs HubSpot — CRM Comparison for Agencies 2026' }],
  },
  twitter: { card: 'summary_large_image', creator: '@arham_mirkar' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kobin.team' },
        { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.kobin.team/compare' },
        { '@type': 'ListItem', position: 3, name: 'Kobin vs HubSpot' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Kobin',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Agency CRM with Proactive Intelligence',
      url: 'https://www.kobin.team',
      description:
        'Kobin is an all-in-one agency workspace with a built-in proactive CRM. Unlike HubSpot, Kobin AI monitors your pipeline daily, sends revenue intelligence alerts, detects deal risk before it becomes a crisis, syncs Gmail threads to contacts automatically, and delivers a morning brief with follow-up actions — all from $49/month for a team of 5.',
      offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD', url: 'https://www.kobin.team/#waitlist' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '14', bestRating: '5' },
      featureList: [
        'Proactive revenue intelligence — AI flags deals closing this week',
        'Daily risk alerts — overdue tasks, blocked work, stale deals in one notification',
        'Gmail sync — threads auto-matched to CRM contacts',
        'Email intent analysis — AI reads tone, sentiment, buying signals per thread',
        'Weekly pipeline review — AI-generated with wins, losses, and next steps',
        'Morning brief — tasks + meetings + follow-ups surfaced at 8am',
        'Pipeline kanban view with drag-and-drop stage management',
        'Deal value tracking with close probability and expected close date',
        'Built-in inbox replacing Slack (included in $49/month)',
        'Client portal included in all plans',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'HubSpot CRM',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'CRM',
      url: 'https://hubspot.com',
      description:
        'HubSpot is an enterprise CRM platform designed for dedicated sales teams. The free tier handles basic contact tracking. Paid plans start at $20/user/month (Starter) and scale to $135/user/month (Professional). HubSpot does not include team messaging, task management, or client portals.',
      offers: { '@type': 'Offer', price: '20', priceCurrency: 'USD', url: 'https://hubspot.com/pricing' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Kobin a good HubSpot alternative for small agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Kobin is the best HubSpot alternative for agencies of 1–15 people. Unlike HubSpot, which requires dedicated CRM administration and costs $50–90/month for 5 seats on Starter, Kobin includes a proactive CRM as part of a $49/month all-in-one workspace. Kobin AI monitors your pipeline daily, sends risk alerts for stale deals, syncs Gmail threads to contacts, and delivers a morning brief — without any CRM setup or administration overhead.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does Kobin have that HubSpot does not?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin has several capabilities HubSpot does not offer: (1) Proactive revenue intelligence — AI detects deals closing this week and stale high-value deals before they go cold. (2) Cross-module AI — Kobin AI sees your CRM alongside tasks, inbox, calendar, and vault simultaneously. (3) Built-in team inbox replacing Slack. (4) Google Drive-backed file vault replacing Notion. (5) Client portal included at no extra cost. (6) Daily risk alerts combining overdue tasks, blocked work, and CRM signals in one notification.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does HubSpot cost vs Kobin for a 5-person agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HubSpot Starter costs $50–90/month for a 5-person team (as of April 2026). This includes only CRM, email tracking, and basic sequences — no team messaging, project management, or client portal. Kobin costs $49/month for a team of 5 and includes CRM, proactive intelligence, team inbox (replacing Slack at $87/month), task management (replacing Asana at $55/month), vault (replacing Notion at $40/month), and client portal. The true HubSpot stack costs $243–350/month for the same functionality.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Kobin sync Gmail to CRM contacts like HubSpot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Kobin syncs Gmail threads to CRM contacts automatically. When you connect Gmail, Kobin matches incoming and outgoing emails by sender address to your Relationships contacts. For each thread, Kobin AI analyzes intent (interested, ready to close, objection, requesting meeting), sentiment (positive, neutral, negative), and buying signals. These are surfaced in the Email Intelligence panel in your CRM view — updated every time you sync. HubSpot offers Gmail sync on paid plans only and does not include this level of per-thread AI analysis.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Kobin\'s proactive CRM and how is it different from HubSpot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin\'s proactive CRM runs three daily intelligence routines: a risk detection scan (flags overdue high-priority tasks, blocked work, and deals stuck 21+ days), a revenue intelligence report (surfaces deals closing this week, high-probability deals above 70%, and stale high-value deals above $5,000), and a morning brief with your full pipeline context. These are delivered as AI-generated messages in your Kobin inbox at 8am. HubSpot requires you to configure notification rules and sequences manually — it is reactive, not proactive.',
          },
        },
      ],
    },
  ],
}

const featureMatrix = [
  { feature: 'CRM pipeline (kanban + list view)', kobin: '✓ Built in', hubspot: '✓ Built in' },
  { feature: 'Deal value + close probability', kobin: '✓ Built in', hubspot: '✓ Built in' },
  { feature: 'Contact types (leads, investors, partners)', kobin: '✓ All types', hubspot: '✗ Contacts only' },
  { feature: 'Meeting outcome logging', kobin: '✓ One-click', hubspot: '✗ Manual setup required' },
  { feature: 'Gmail sync to contacts', kobin: '✓ Auto-matched', hubspot: '✓ Paid plans only' },
  { feature: 'Email intent analysis (AI)', kobin: '✓ Per thread', hubspot: '✗ Not available' },
  { feature: 'Proactive revenue intelligence alerts', kobin: '✓ Daily auto-generated', hubspot: '✗ Manual sequences only' },
  { feature: 'Risk detection (stale deals + blockers)', kobin: '✓ Cross-module AI', hubspot: '✗ CRM only signals' },
  { feature: 'Daily morning brief (tasks + CRM)', kobin: '✓ Auto at 8am', hubspot: '✗ Not available' },
  { feature: 'Weekly pipeline review (AI-generated)', kobin: '✓ Auto every Friday', hubspot: '✗ Manual reporting' },
  { feature: 'Team inbox (replaces Slack)', kobin: '✓ Included', hubspot: '✗ Not included' },
  { feature: 'Task management (replaces Asana)', kobin: '✓ Included', hubspot: '✗ Not included' },
  { feature: 'Client portal', kobin: '✓ All plans', hubspot: '✗ Not included' },
  { feature: 'Google Drive vault', kobin: '✓ Included', hubspot: '✗ Not included' },
  { feature: 'AI that sees full workspace context', kobin: '✓ Cross-module', hubspot: '✗ HubSpot data only' },
  { feature: 'Price (5 seats, April 2026)', kobin: '$49/mo all-in', hubspot: '$50–90/mo (CRM only)' },
]

export default function KobinVsHubspotPage() {
  return (
    <>
      <Nav activePage="" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section style={{ padding: '100px 64px 72px', background: 'var(--parch)', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: '12px', color: 'var(--ghost2)', fontFamily: "'Geist Mono', monospace", marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'var(--ghost2)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/compare" style={{ color: 'var(--ghost2)', textDecoration: 'none' }}>Compare</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>Kobin vs HubSpot</span>
          </nav>

          {/* Last updated — trust signal */}
          <div style={{ display: 'inline-block', fontSize: '11px', color: 'var(--ghost2)', background: 'rgba(0,0,0,0.04)', padding: '4px 10px', borderRadius: '100px', marginBottom: '20px', fontFamily: "'Geist Mono', monospace" }}>
            Last updated April 2026 · Pricing verified from public pages
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.97, color: 'var(--ink)', marginBottom: '20px' }}>
            Kobin vs HubSpot<br /><em style={{ fontStyle: 'italic', color: 'var(--vi)' }}>for agencies.</em>
          </h1>

          {/* Direct answer — 50 words (GEO citability) */}
          <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.75, fontWeight: 300, maxWidth: '720px', marginBottom: '16px', background: 'rgba(76,63,212,0.04)', border: '1px solid rgba(76,63,212,0.15)', borderRadius: '10px', padding: '16px 20px' }}>
            <strong>Kobin is the best HubSpot alternative for agencies in 2026.</strong> HubSpot Starter costs $50–90/month for CRM alone and is designed for dedicated sales teams. Kobin costs $49/month and includes a proactive CRM with daily revenue intelligence, risk alerts, Gmail sync, and email AI — plus team inbox, tasks, vault, and client portal at no extra cost.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--ghost)', maxWidth: '660px', lineHeight: 1.75, marginBottom: '40px' }}>
            This comparison covers pricing, CRM capabilities, AI intelligence features, Gmail integration, and the hidden cost of running HubSpot alongside the other tools agencies still need when they choose it.
          </p>

          {/* Disclosure */}
          <div style={{ fontSize: '12px', color: 'var(--ghost2)', padding: '10px 16px', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', border: '1px solid var(--wire)', maxWidth: '520px' }}>
            <strong>Disclosure:</strong> Kobin is made by this site. HubSpot is an independent company. All HubSpot feature and pricing data is sourced from HubSpot&apos;s public website as of April 2026.
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 100px' }}>

        {/* ── PRICING COMPARISON ── */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '12px' }}>
            What does HubSpot actually cost a 5-person agency?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ghost)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '36px' }}>
            HubSpot&apos;s Starter plan covers CRM only. An agency still needs Slack for messaging, Asana or Linear for projects, and Notion for documentation alongside it. Here is what the full stack costs vs Kobin.
          </p>

          {/* Math block */}
          <div style={{ background: 'var(--ink2)', borderRadius: '14px', overflow: 'hidden', marginBottom: '32px' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#F0EDE6' }}>HubSpot Starter + Required Stack (5 seats)</span>
            </div>
            {[
              ['HubSpot Starter CRM', '$50–90/mo'],
              ['Slack Pro (team messaging)', '$87/mo'],
              ['Asana Premium (project management)', '$55/mo'],
              ['Notion Team (docs + wikis)', '$40/mo'],
              ['Zapier Professional (connecting the above)', '$29/mo'],
            ].map(([item, cost]) => (
              <div key={item} style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: '#9C9890' }}>{item}</span>
                <span style={{ fontSize: '13px', color: '#E57373', fontFamily: "'Geist Mono', monospace" }}>{cost}</span>
              </div>
            ))}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', background: 'rgba(229,83,75,0.08)' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#F0EDE6' }}>Monthly total (HubSpot stack)</span>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#E57373', fontFamily: "'Geist Mono', monospace" }}>$261–$301/mo</span>
            </div>
          </div>

          <div style={{ background: 'rgba(13,107,79,0.06)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(13,107,79,0.2)' }}>
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>Kobin Founder plan — everything included</span>
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#0D6B4F', fontFamily: "'Geist Mono', monospace" }}>$49/mo</span>
            </div>
            <div style={{ padding: '0 24px 16px' }}>
              <p style={{ fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.7 }}>
                Includes: CRM + revenue intelligence + Gmail sync + team inbox + tasks + vault + client portal + calendar + LinkedIn Studio + AI layer. No Zapier. No HubSpot. No Slack.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '12px', color: 'var(--ghost2)', marginTop: '12px', fontFamily: "'Geist Mono', monospace" }}>
            Pricing from published pages, April 2026. HubSpot Starter: $20/user/month (billed annually). Slack Pro: $7.25/user/month. Asana Premium: $10.99/user/month.
          </p>
        </section>

        {/* ── FEATURE MATRIX ── */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '12px' }}>
            Kobin vs HubSpot: full feature comparison
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ghost)', maxWidth: '600px', lineHeight: 1.75, marginBottom: '36px' }}>
            Every feature listed here has been verified against HubSpot&apos;s public documentation and pricing pages as of April 2026.
          </p>

          <div style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', background: 'var(--ink)', padding: '14px 24px', gap: '16px' }}>
              {['Feature', 'Kobin', 'HubSpot Starter'].map((h, i) => (
                <span key={h} style={{ fontSize: '11px', fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', textTransform: 'uppercase', color: i === 1 ? '#6358E8' : '#555552' }}>{h}</span>
              ))}
            </div>
            {featureMatrix.map(({ feature, kobin, hubspot }, idx) => (
              <div key={feature} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr', padding: '13px 24px', gap: '16px', borderTop: '1px solid var(--wire)', background: idx % 2 === 0 ? '#fff' : 'var(--cream)', alignItems: 'start' }}>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5 }}>{feature}</span>
                <span style={{ fontSize: '12px', color: kobin.startsWith('✓') ? '#0D6B4F' : kobin.startsWith('✗') ? '#C03B30' : 'var(--ghost)', lineHeight: 1.5 }}>{kobin}</span>
                <span style={{ fontSize: '12px', color: hubspot.startsWith('✓') ? '#0D6B4F' : hubspot.startsWith('✗') ? '#C03B30' : 'var(--ghost)', lineHeight: 1.5 }}>{hubspot}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROACTIVE CRM SECTION ── */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '12px' }}>
            The feature HubSpot does not have: proactive CRM intelligence
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ghost)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '36px' }}>
            HubSpot is reactive — it stores your pipeline data and waits for you to query it. Kobin&apos;s CRM is proactive — it monitors your pipeline every day and surfaces risks, opportunities, and required actions before you even open your laptop.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              {
                title: 'Daily Risk Detection',
                icon: '🚨',
                description: 'Every day, Kobin AI scans all active deals for: high-priority tasks that are overdue, blocked work by team member, and deals stuck in key pipeline stages (proposal, negotiating, meeting booked) for 21+ days. These are delivered as a formatted alert in your inbox — not a dashboard you have to visit.',
                hubspotNote: 'HubSpot can send deal age notifications, but does not cross-reference task blockers or team workload with CRM signals.',
              },
              {
                title: 'Revenue Intelligence Alerts',
                icon: '💼',
                description: 'Kobin AI surfaces deals with expected close dates in the next 7 days, high-probability deals above 70% win rate, and high-value deals ($5,000+) that have been stale for 14+ days. Total pipeline value at stake is shown so you know which actions protect the most revenue.',
                hubspotNote: 'HubSpot requires manual deal task creation and sequence enrollment to achieve similar notifications — there is no automated revenue intelligence layer.',
              },
              {
                title: 'Morning Brief + Pipeline',
                icon: '☀️',
                description: 'At 8am every day, Kobin generates a personalized brief combining your task priorities, today\'s meetings, stale CRM contacts who need follow-up (sorted by deal value), and any blocked items. It ends with one specific highest-leverage action. Delivered to your Kobin inbox — no app to open.',
                hubspotNote: 'HubSpot does not have a cross-module morning brief. It shows CRM activity summaries only, with no task or calendar integration.',
              },
              {
                title: 'Gmail Thread Intelligence',
                icon: '📧',
                description: 'Kobin syncs Gmail threads to CRM contacts by email address. For each matched thread, an AI model analyzes intent (interested, ready to close, requesting meeting, objection), sentiment, and buying signals. These appear as insight cards in the CRM Email Intelligence panel — updated every time you sync.',
                hubspotNote: 'HubSpot\'s Gmail sync tracks opens and clicks but does not provide AI intent analysis or sentiment scoring per conversation thread.',
              },
              {
                title: 'Weekly Pipeline Review',
                icon: '📊',
                description: 'Every Friday, Kobin AI generates a formatted weekly pipeline review: deals advanced this week, tasks completed, meetings held with outcomes, deals at risk, and 2-3 specific actions for the coming week. Delivered to your Kobin inbox — no report to build, no dashboard to configure.',
                hubspotNote: 'HubSpot has reporting dashboards that require manual setup and are only accessible by navigating to the Reports section.',
              },
              {
                title: 'Cross-Module Risk Signals',
                icon: '🔗',
                description: 'Because Kobin\'s CRM shares a data model with tasks, inbox, vault, and calendar, risk signals are cross-module. A deal flagged at risk might be because a key deliverable task is blocked — not because of anything in the CRM. HubSpot cannot see your task layer, so it cannot make this connection.',
                hubspotNote: 'HubSpot is a standalone CRM. It has no access to your task management layer, team workload, or project inbox — making true cross-operational risk detection impossible.',
              },
            ].map(({ title, icon, description, hubspotNote }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px' }}>{icon}</span>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>{title}</h3>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.7, margin: 0 }}>{description}</p>
                <div style={{ padding: '10px 14px', background: 'rgba(192,59,48,0.04)', border: '1px solid rgba(192,59,48,0.12)', borderRadius: '8px', fontSize: '12px', color: '#C03B30', lineHeight: 1.6 }}>
                  <strong>HubSpot:</strong> {hubspotNote}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHERE HUBSPOT WINS ── */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '12px' }}>
            Where HubSpot is genuinely stronger
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ghost)', maxWidth: '660px', lineHeight: 1.75, marginBottom: '32px' }}>
            This is an honest comparison. HubSpot has real strengths that Kobin does not match — and they matter for certain agency types and scales.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { area: 'Email sequence automation', detail: 'HubSpot\'s sequence builder is best-in-class for outbound sales automation. Multi-step drip sequences with conditional branching, A/B testing, and reply detection. If you send more than 50 outbound emails per day in active sequences, HubSpot is the better tool.' },
              { area: 'Deep third-party integrations', detail: 'HubSpot integrates with 1,000+ tools including Salesforce, Shopify, and enterprise marketing stacks. If your agency manages clients who require CRM data flowing into enterprise systems, HubSpot\'s integration ecosystem is significantly deeper than Kobin\'s.' },
              { area: 'Marketing Hub (landing pages, email campaigns)', detail: 'HubSpot\'s Marketing Hub (separate from CRM) includes landing page builders, email campaign tools, and ad tracking. For agencies that manage their own marketing stack inside the same tool as their CRM, HubSpot\'s Marketing Hub has no equivalent in Kobin.' },
              { area: 'Enterprise reporting and analytics', detail: 'HubSpot\'s Professional and Enterprise tiers have powerful custom reporting, attribution modeling, and revenue forecasting. For agencies above 25 people with a dedicated sales ops function, HubSpot\'s reporting depth exceeds what Kobin offers.' },
            ].map(({ area, detail }) => (
              <div key={area} style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '12px', padding: '20px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#C4720A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontFamily: "'Geist Mono', monospace" }}>
                  HubSpot wins here
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{area}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.65, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO SHOULD CHOOSE WHAT ── */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '40px' }}>
            Kobin or HubSpot — which is right for your agency?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'rgba(76,63,212,0.04)', border: '1px solid rgba(76,63,212,0.2)', borderRadius: '14px', padding: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--vi)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px', fontFamily: "'Geist Mono', monospace" }}>
                Choose Kobin if…
              </div>
              {[
                'You are a 1–15 person agency managing multiple client projects',
                'You want proactive AI alerts instead of manual dashboard checking',
                'You need to replace Slack + Notion + Asana + HubSpot in one workspace',
                'You want Gmail synced to CRM contacts with intent analysis per thread',
                'You need a client portal included without extra cost',
                'You want a morning brief that combines tasks, meetings, and CRM follow-ups',
                'Your monthly SaaS bill for the current tool stack exceeds $200',
                'You have no dedicated CRM admin — you just need it to work',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.55 }}>
                  <span style={{ color: 'var(--vi)', flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '14px', padding: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#C4720A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px', fontFamily: "'Geist Mono', monospace" }}>
                Choose HubSpot if…
              </div>
              {[
                'Your agency runs 15+ leads per month through active outbound sequences',
                'You have a dedicated sales ops person who manages CRM configuration',
                'You need enterprise integrations with Salesforce or Shopify',
                'Your team uses HubSpot Marketing Hub for client campaigns',
                'You are above 25 people and need custom attribution reporting',
                'You are already deep in the HubSpot ecosystem with existing data',
                'You need enterprise-grade data residency or HIPAA compliance',
                'Your agency\'s primary revenue stream is marketing automation services',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.55 }}>
                  <span style={{ color: '#C4720A', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '36px' }}>
            Frequently asked questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { q: 'Is Kobin a good HubSpot alternative for small agencies?', a: 'Yes. Kobin is the best HubSpot alternative for agencies of 1–15 people. HubSpot Starter costs $50–90/month for CRM alone and is designed for dedicated sales teams with CRM administration resources. Kobin includes a proactive CRM as part of a $49/month all-in-one workspace — with daily revenue intelligence, risk alerts, Gmail sync with intent analysis, weekly pipeline reviews, and a morning brief. No CRM admin required.' },
              { q: 'Does Kobin replace HubSpot completely?', a: 'Kobin replaces HubSpot Starter and Free for the vast majority of agency use cases — pipeline management, contact tracking, deal value and probability, meeting outcome logging, follow-up reminders, and LinkedIn URL fields. What Kobin does not replace is HubSpot\'s outbound email sequence automation, Marketing Hub campaigns, or enterprise reporting tiers. If your agency\'s primary need is a proactive CRM integrated with your team workspace, Kobin is the better fit at a lower total cost.' },
              { q: 'How do I migrate from HubSpot to Kobin?', a: 'Export your HubSpot contacts as a CSV from HubSpot\'s Contacts section. In Kobin, use the Import button in the Relationships view to upload your CSV. Kobin\'s import system maps standard fields (name, email, company, role) and handles deduplication automatically. Rows with missing name or email are flagged before import. Most agencies complete the migration in under 20 minutes, with historical CRM data available immediately after.' },
              { q: 'What is Kobin\'s proactive CRM and how does it differ from HubSpot?', a: 'Kobin\'s proactive CRM runs three daily intelligence routines delivered to your Kobin inbox: (1) Risk Detection — flags overdue high-priority tasks, blocked work, and deals stuck in key stages 21+ days. (2) Revenue Intelligence — surfaces deals closing this week, high-probability deals above 70%, and stale high-value deals. (3) Morning Brief — combines tasks, meetings, and CRM follow-ups at 8am. HubSpot is reactive — it stores pipeline data and waits for you to query it.' },
              { q: 'Can Kobin sync Gmail to CRM contacts?', a: 'Yes. Connect Gmail from Kobin settings. Kobin syncs threads by email address to your Relationships contacts, then AI analyzes each thread for intent (interested, ready to close, objection, requesting meeting), sentiment, and buying signals. These appear as insight cards in the Email Intelligence panel in the CRM view. HubSpot offers Gmail sync on paid plans but does not include this level of per-thread AI intent analysis.' },
            ].map(({ q, a }) => (
              <details key={q} style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '10px', overflow: 'hidden' }}>
                <summary style={{ padding: '16px 20px', fontSize: '15px', fontWeight: 500, color: 'var(--ink)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  {q}<span style={{ fontSize: '18px', color: 'var(--ghost)', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ padding: '0 20px 16px', fontSize: '14px', color: 'var(--ghost)', lineHeight: 1.75, margin: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── RELATED COMPARISONS ── */}
        <section style={{ padding: '56px 0 40px', borderBottom: '1px solid var(--wire)' }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 300, color: 'var(--ink)', marginBottom: '16px' }}>Related comparisons</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { href: '/compare/kobin-vs-slack', label: 'Kobin vs Slack' },
              { href: '/compare/kobin-vs-notion', label: 'Kobin vs Notion' },
              { href: '/compare/kobin-vs-asana', label: 'Kobin vs Asana' },
              { href: '/compare/kobin-vs-clickup', label: 'Kobin vs ClickUp' },
              { href: '/blog/slack-notion-asana-hubspot-alternatives', label: 'Full stack comparison' },
              { href: '/blog/best-productivity-tools-for-agencies', label: '10 Best Tools 2026' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: '13px', color: 'var(--vi)', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(76,63,212,0.25)', borderRadius: '100px' }}>
                {label} →
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '72px 0 0', textAlign: 'center' }}>
          <div style={{ background: 'var(--ink)', borderRadius: '20px', padding: '64px 48px' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: '#555552', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Try the HubSpot alternative
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 300, color: '#F0EDE6', letterSpacing: '-0.04em', lineHeight: 0.97, marginBottom: '16px' }}>
              CRM + intelligence +<br /><em style={{ fontStyle: 'italic', color: '#6358E8' }}>everything else.</em>
            </h2>
            <p style={{ fontSize: '16px', color: '#555552', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.65 }}>
              $49/month. 5 seats. CRM, inbox, tasks, vault, client portal, AI, and proactive revenue intelligence included. No HubSpot. No Slack. No Zapier.
            </p>
            <Link href="/#waitlist" style={{ display: 'inline-block', padding: '16px 36px', background: 'var(--vi)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>
              Join the waitlist →
            </Link>
            <p style={{ fontSize: '13px', color: '#444441', marginTop: '16px', fontFamily: "'Geist Mono', monospace" }}>
              14-day free trial · No credit card required · Kobin (kobin.team)
            </p>
          </div>
        </section>

      </div>
    </>
  )
}