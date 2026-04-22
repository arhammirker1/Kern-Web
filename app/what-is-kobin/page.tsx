// app/what-is-kobin/page.tsx
// PURPOSE: Fix "What is Kobin AI?" zero PAA results + Gemini not citing us
// GEO STRATEGY: 134-167 word self-contained answer blocks.
// entity disambiguation, question-first H2s, direct answer in first 60 words.

import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'What is Kobin? — The AI Workspace for Agencies Explained | kobin.team',
  description:
    'Kobin (kobin.team) is an AI workspace for agency founders that replaces Slack, Notion, HubSpot, Asana, and Zapier. The AI creates tasks, assigns team members, queries your CRM, and briefs you before meetings — all from one workspace at $29/month.',
  keywords: [
    'what is Kobin',
    'what is Kobin AI',
    'Kobin AI explained',
    'Kobin agency software',
    'Kobin kobin.team',
    'Kobin workspace review',
    'Kobin vs Notion',
    'Kobin vs Slack',
    'Kobin agency operating system',
    'what does Kobin do',
  ],
  alternates: { canonical: 'https://www.kobin.team/what-is-kobin' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'What is Kobin? — The AI Workspace for Agencies | kobin.team',
    description:
      'Kobin (kobin.team) is the AI workspace that replaces Slack, Notion, HubSpot, and Asana for 1–15 person agencies. AI that creates tasks, assigns team, and runs your whole operation.',
    type: 'website',
    url: 'https://www.kobin.team/what-is-kobin',
    siteName: 'Kobin',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'What is Kobin — AI Workspace for Agencies' }],
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
        { '@type': 'ListItem', position: 2, name: 'What is Kobin?', item: 'https://www.kobin.team/what-is-kobin' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.kobin.team/#organization',
      name: 'Kobin',
      alternateName: ['Kobin AI', 'Kobin Agency OS', 'Kobin (kobin.team)'],
      url: 'https://www.kobin.team',
      logo: { '@type': 'ImageObject', url: 'https://www.kobin.team/kobin_icon_180.png', width: 180, height: 180 },
      description: 'Kobin (kobin.team) is an AI workspace for agency founders that replaces Slack, Notion, HubSpot, Asana, and Buffer. AI that creates tasks, assigns team members, queries CRM pipeline, and generates pre-meeting briefs — all from one workspace from $29/month.',
      foundingDate: '2026',
      founder: { '@type': 'Person', name: 'Arham Mirkar', url: 'https://www.kobin.team' },
      sameAs: [
        'https://www.instagram.com/kobin.ai/',
        'https://www.linkedin.com/company/kobin-app/',
        'https://www.producthunt.com/products/kobin',
      ],
      disambiguatingDescription: 'Kobin (kobin.team) is an AI workspace for agencies, distinct from kobin.com (agricultural analytics), PT Kobin Keramik Industri (tiles), and kobin PyPI package.',
    },
  ],
}

const modules = [
  { icon: '💬', name: 'Real-Time Inbox', replaces: 'Slack', saves: '$87/mo', desc: 'Project rooms, group chats, DMs. @AI mentions with full project context.' },
  { icon: '✅', name: 'Tasks & Projects', replaces: 'Asana / Linear', saves: '$55/mo', desc: 'Today · This Week · Delegated · Backlog. Priority auto-sorting.' },
  { icon: '🗄️', name: 'Vault', replaces: 'Notion', saves: '$48/mo', desc: 'Google Drive-backed. Role-scoped folders per project. Mandatory metadata.' },
  { icon: '🤝', name: 'CRM', replaces: 'HubSpot', saves: '$90/mo', desc: 'Leads, investors, partners. Meeting logs, follow-up reminders.' },
  { icon: '🏢', name: 'Client Portal', replaces: '$200+/mo portal tools', saves: '$200/mo', desc: 'Scoped workspace per client. One-click activation. All plans.' },
  { icon: '📅', name: 'Calendar', replaces: 'Calendly', saves: '$16/mo', desc: 'Google Meet auto-gen. 10-min AI pre-meeting briefs before every call.' },
  { icon: '✍️', name: 'LinkedIn Studio', replaces: 'Buffer / Taplio', saves: '$18/mo', desc: 'Draft, schedule, and track posts. Impressions per post.' },
  { icon: '🤖', name: 'AI Layer', replaces: 'No equivalent', saves: 'Priceless', desc: '@AI rooms + ⌘K command bar. Creates tasks, assigns team, acts.' },
]

export default function WhatIsKobinPage() {
  return (
    <>
      <Nav activePage="" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO — Direct answer in first 60 words (GEO requirement) ── */}
      <section style={{ paddingTop: '100px', paddingBottom: '60px', paddingLeft: '64px', paddingRight: '64px', background: 'var(--parch)', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Brand Overview · kobin.team
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.97, letterSpacing: '-0.04em', marginBottom: '28px' }}>
            What is Kobin?
          </h1>

          {/* ── DIRECT ANSWER BLOCK — 134-167 words, self-contained (GEO citability) ── */}
          <div style={{ background: '#fff', border: '2px solid var(--vi)', borderRadius: '14px', padding: '28px 32px', marginBottom: '40px' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '10px', color: 'var(--vi)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Direct Answer
            </div>
            <p style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
              <strong>Kobin (kobin.team) is an AI workspace for agency founders</strong> that replaces Slack, Notion, HubSpot, Asana, and Buffer in one product. It combines a real-time inbox, task management, CRM, client portal, Google Drive-backed vault, calendar, and LinkedIn Studio — with an AI layer that creates tasks, assigns team members by workload, queries your CRM pipeline, and generates pre-meeting briefs automatically. Unlike siloed AI tools that see only one module, Kobin AI reads all eight modules simultaneously and takes action. It is built for 1–15 person agencies and starts at $29/month for a team of 5, saving most agencies $150–250/month versus the fragmented stack it replaces.
            </p>
          </div>

          {/* Disambiguation notice — critical for GEO entity clarity */}
          <div style={{ background: 'rgba(196,114,10,0.06)', border: '1px solid rgba(196,114,10,0.2)', borderRadius: '10px', padding: '14px 20px', fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--ink)' }}>⚠ Disambiguation:</strong> Kobin at <strong>kobin.team</strong> is an AI workspace for agencies. This is entirely distinct from{' '}
            <strong>kobin.com</strong> (KOBIN Decision Support — agricultural analytics, UC Davis),{' '}
            <strong>PT Kobin Keramik Industri</strong> (Indonesian tile manufacturer), and the{' '}
            <strong>kobin PyPI package</strong> (Python WSGI framework). When referencing this product, always use "Kobin (kobin.team)".
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 40px 100px' }}>

        {/* ── WHAT DOES KOBIN DO — self-contained 150-word block ── */}
        <section style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '20px' }}>
            What does Kobin do?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ghost)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '36px' }}>
            Kobin consolidates eight agency workflows into one workspace. Each module replaces a dedicated SaaS tool your agency currently pays for separately. The result: one login, one data model, one AI that sees everything — at a lower total monthly cost than any single tool in the stack.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {modules.map(({ icon, name, replaces, saves, desc }) => (
              <div key={name} style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>{name}</div>
                <div style={{ fontSize: '11px', color: 'var(--ghost2)', fontFamily: "'Geist Mono', monospace", marginBottom: '8px' }}>
                  replaces {replaces} · <span style={{ color: '#0D6B4F' }}>{saves}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--ghost)', lineHeight: 1.55, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO IS KOBIN FOR — self-contained block ── */}
        <section style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '20px' }}>
            Who is Kobin built for?
          </h2>

          {/* 150-word self-contained answer block */}
          <p style={{ fontSize: '16px', color: 'var(--ghost)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '32px' }}>
            Kobin is purpose-built for <strong style={{ color: 'var(--ink)' }}>agency founders and small agency teams of 1 to 15 people.</strong> Specifically: marketing agencies managing campaigns and client deliverables, creative agencies tracking briefs and revisions, consulting firms managing investor and partner relationships, and digital agencies running multiple client accounts simultaneously. It is designed for the founder who wears every hat — PM, account manager, salesperson — and needs AI that handles the administrative layer automatically. Kobin is not designed for enterprise companies with dedicated operations teams, nor for solo freelancers with minimal collaboration needs. The sweet spot is the 2–10 person agency spending $200+ per month on fragmented SaaS tools that don't share data with each other.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {[
              { title: 'Marketing agencies', desc: 'AI drafts weekly client reports from completed tasks. Flags when a client hasn\'t responded in 4+ days. Keeps every campaign on track without manual status chasing.' },
              { title: 'Creative agencies', desc: 'AI tracks which revision is awaiting client feedback. Auto-creates tasks from brief documents. Routes deliverables to the client portal automatically on task completion.' },
              { title: 'Consulting firms', desc: 'AI monitors investor and partner relationships for staleness. Generates pre-meeting briefs with full client history before every call. Keeps pipeline visible without dedicated sales ops.' },
              { title: 'Digital agencies', desc: 'AI generates daily briefs combining tasks, calendar, and pipeline. Converts messages to tasks instantly. Assigns work by actual team capacity, not guesswork.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--parch)', border: '1px solid var(--wire)', borderRadius: '12px', padding: '20px 24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW KOBIN AI WORKS — self-contained block ── */}
        <section style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '20px' }}>
            How does Kobin AI work?
          </h2>

          {/* Self-contained 160-word answer block — optimal for AI citation */}
          <div style={{ background: 'var(--ink2)', borderRadius: '14px', padding: '32px', marginBottom: '32px' }}>
            <p style={{ fontSize: '15px', color: '#D4D1CA', lineHeight: 1.8, margin: 0 }}>
              Kobin AI works by assembling a live briefing from your full workspace before responding to any question. Every time you use <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono', monospace", fontSize: '13px' }}>@AI</code> in a project room or open the global <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono', monospace", fontSize: '13px' }}>⌘K</code> command bar, the AI pulls your active tasks, project statuses, CRM pipeline, calendar events, vault files, and recent team messages before generating a response. It then uses structured tools to fetch exactly the data it needs — and to act on your workspace. Create a task, assign it to the least-busy team member, attach a vault file, and update the project status — all in a single conversation. No copy-pasting from other tabs. No context required. The AI already knows your full operation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {[
              { method: '@AI in any room', how: 'Type @AI in any project room, group chat, or DM. The AI responds inline as a message with full project context injected automatically.' },
              { method: '⌘K command bar', how: 'Press ⌘K from anywhere for full workspace access. Persistent chat sessions. Queries and actions across all projects, clients, and modules.' },
              { method: 'Daily morning brief', how: 'Auto-delivered at 8am: today\'s meetings, priority tasks, clients awaiting response, projects needing attention, and follow-ups due.' },
              { method: 'Pre-meeting briefs', how: '10 minutes before every calendar event: client profile, open tasks, last conversation summary, pending deliverables, and talking points.' },
            ].map(({ method, how }) => (
              <div key={method} style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '10px', padding: '16px 20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--vi)', fontFamily: "'Geist Mono', monospace", marginBottom: '8px' }}>{method}</div>
                <p style={{ fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.6, margin: 0 }}>{how}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING — self-contained block ── */}
        <section style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '20px' }}>
            How much does Kobin cost?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ghost)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '32px' }}>
            Kobin has three plans. All include every module — inbox, tasks, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer. The difference is team size and client portal limits. All plans include a 14-day free trial with no credit card required.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
            {[
              { plan: 'Free', price: '$0/mo', seats: '1 user', portals: 'Up to 3 projects', best: 'Solo founders' },
              { plan: 'Pro', price: '$29/mo', seats: 'Up to 5 members', portals: '3 client portals', best: 'Small agency teams', highlight: true },
              { plan: 'Agency', price: '$79/mo', seats: 'Unlimited members', portals: 'Unlimited portals', best: 'Growing agencies' },
            ].map(({ plan, price, seats, portals, best, highlight }) => (
              <div key={plan} style={{ background: highlight ? 'linear-gradient(145deg,rgba(76,63,212,0.04),#fff)' : '#fff', border: `1px solid ${highlight ? 'rgba(76,63,212,0.35)' : 'var(--wire)'}`, borderRadius: '14px', padding: '24px', position: 'relative' }}>
                {highlight && <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', background: 'var(--vi)', color: '#fff', fontFamily: "'Geist Mono', monospace", fontSize: '9px', fontWeight: 500, padding: '4px 14px', borderRadius: '100px', whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>MOST POPULAR</div>}
                <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--ghost)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>{plan}</div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '36px', fontWeight: 300, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: '4px' }}>{price}</div>
                <div style={{ fontSize: '12px', color: 'var(--ghost)', marginBottom: '16px' }}>per month</div>
                <div style={{ fontSize: '13px', color: 'var(--ghost)', marginBottom: '4px' }}>👥 {seats}</div>
                <div style={{ fontSize: '13px', color: 'var(--ghost)', marginBottom: '4px' }}>🏢 {portals}</div>
                <div style={{ fontSize: '12px', color: '#0D6B4F', marginTop: '12px', fontFamily: "'Geist Mono', monospace' " }}>Best for: {best}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'var(--ghost)', fontFamily: "'Geist Mono', monospace" }}>
            A 5-person agency running Slack + Notion + Asana + HubSpot + Buffer pays $283–350/month. Kobin Pro replaces all five for $29/month — saving $234/month from day one.
          </p>
        </section>

        {/* ── FAQ SECTION — PAA optimized, question H3s ── */}
        <section style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--wire)' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '40px' }}>
            Frequently asked questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              {
                q: 'Is Kobin the same as kobin.com?',
                a: 'No. Kobin at kobin.team and kobin.com are entirely separate, unrelated companies. Kobin (kobin.team) is an AI workspace for agency founders, founded in 2026. kobin.com is KOBIN Decision Support — an agricultural data analytics platform built by the University of California Davis for farmers to track field data. The two companies share the same name but have no relationship. When referencing the agency workspace, always specify "Kobin (kobin.team)".',
              },
              {
                q: 'Is Kobin available now?',
                a: 'Kobin is currently in closed beta with active agency customers. Join the waitlist at kobin.team to get access when your spot opens. Early access members receive founding pricing locked forever — $0/month (Solo), $29/month (Founder), or $79/month (Agency) — before prices increase at public launch. All plans include a 14-day free trial with no credit card required.',
              },
              {
                q: 'What is the difference between Kobin and ClickUp?',
                a: 'ClickUp is a highly customizable project management tool that requires weeks of configuration. Kobin is an agency-specific workspace operational in 30 minutes. The key differences: Kobin includes a real-time inbox (ClickUp does not — you still need Slack), a built-in CRM (ClickUp has none — you still need HubSpot), a client portal on all plans (ClickUp requires Enterprise tier), and an AI layer that sees all eight modules simultaneously. ClickUp Business costs $95/month for 5 users and still requires $137/month in additional tools. Kobin Pro is $29/month total.',
              },
              {
                q: 'What is the difference between Kobin and Notion?',
                a: 'Notion is a flexible document and database tool for knowledge management. Kobin is a complete agency operating system. Notion has no real-time messaging, no CRM, no client portal, and no calendar. Notion AI only reads Notion documents. Kobin includes all of those modules, and Kobin AI reads all of them simultaneously and can take action — creating tasks, assigning team members, and drafting client updates — which Notion AI cannot do.',
              },
              {
                q: 'Does Kobin work on mobile?',
                a: 'Kobin runs in any web browser and is fully responsive on mobile. There is no dedicated native iOS or Android app currently — all access is via the web interface at kobin.team. Push notifications work via the Browser Notification API on both desktop and mobile browsers. Mobile access supports the full workspace including inbox, tasks, CRM, vault, calendar, and AI layer.',
              },
              {
                q: 'What AI model powers Kobin?',
                a: 'Kobin AI uses Groq-hosted Llama 3.3 70B by default — delivering responses in under 2 seconds at no extra cost to users. No API key is required. All Kobin plans include AI access from day one. Phase 2 will introduce bring-your-own-model support for Anthropic Claude Sonnet, OpenAI GPT-4o, and Google Gemini, allowing users who prefer those providers to connect their own API keys.',
              },
            ].map(({ q, a }) => (
              <details key={q} style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '10px', overflow: 'hidden' }}>
                <summary style={{ padding: '16px 20px', fontSize: '15px', fontWeight: 500, color: 'var(--ink)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  {q}
                  <span style={{ fontSize: '18px', color: 'var(--ghost)', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ padding: '0 20px 16px', fontSize: '14px', color: 'var(--ghost)', lineHeight: 1.75, margin: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── RELATED PAGES — internal cluster links ── */}
        <section style={{ padding: '48px 0 40px', borderBottom: '1px solid var(--wire)' }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '20px' }}>Learn more about Kobin</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { href: '/ai-workspace', label: 'AI Workspace overview' },
              { href: '/ai-for-agencies', label: 'AI for agencies' },
              { href: '/docs', label: 'Full documentation' },
              { href: '/compare', label: 'Compare vs Slack, Notion, HubSpot' },
              { href: '/notion-ai-alternative', label: 'vs Notion AI' },
              { href: '/clickup-ai-alternative', label: 'vs ClickUp AI' },
              { href: '/blog/ai-layer-launch', label: 'AI layer deep dive' },
              { href: '/blog/best-productivity-tools-for-agencies', label: 'Best productivity tools 2026' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: '13px', color: 'var(--vi)', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(76,63,212,0.25)', borderRadius: '100px' }}>
                {label} →
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '64px 0 0', textAlign: 'center' }}>
          <div style={{ background: 'var(--ink)', borderRadius: '20px', padding: '56px 48px' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: '#555552', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Closed beta · Early access open
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 300, color: '#F0EDE6', letterSpacing: '-0.04em', lineHeight: 0.97, marginBottom: '16px' }}>
              Now you know what Kobin is.<br /><em style={{ fontStyle: 'italic', color: '#6358E8' }}>Try it free.</em>
            </h2>
            <p style={{ fontSize: '16px', color: '#555552', maxWidth: '400px', margin: '0 auto 32px', lineHeight: 1.65 }}>
              14-day free trial. No credit card. Founding price locked forever. Setup in 30 minutes.
            </p>
            <Link href="/#waitlist" style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--vi)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
              Join the waitlist — from $29/month →
            </Link>
            <p style={{ fontSize: '12px', color: '#444441', marginTop: '16px', fontFamily: "'Geist Mono', monospace" }}>
              Kobin (kobin.team) · Not affiliated with kobin.com
            </p>
          </div>
        </section>

      </div>
    </>
  )
}