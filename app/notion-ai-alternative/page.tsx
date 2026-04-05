// SAVE AS: app/notion-ai-alternative/page.tsx

import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Best Notion AI Alternative 2026 — AI That Acts, Not Just Writes | Kobin',
  description: 'Notion AI helps you write. Kobin AI runs your agency. Cross-module AI that creates tasks, queries CRM, briefs you before meetings, and drafts client updates — not just document summaries. From $49/month.',
  keywords: ['Notion AI alternative', 'better than Notion AI', 'Notion AI vs Kobin', 'replace Notion AI', 'Notion AI limitations 2026', 'best Notion AI alternative'],
  alternates: { canonical: 'https://www.kobin.team/notion-ai-alternative' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Notion AI Alternative 2026 — Kobin vs Notion AI',
    description: 'Notion AI reads your docs. Kobin AI reads everything and takes action. The Notion AI alternative for agencies who need execution, not writing assistance.',
    type: 'website', url: 'https://www.kobin.team/notion-ai-alternative', siteName: 'Kobin',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kobin.team' },
      { '@type': 'ListItem', position: 2, name: 'Notion AI Alternative', item: 'https://www.kobin.team/notion-ai-alternative' },
    ]},
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the best Notion AI alternative in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'The best Notion AI alternative in 2026 is Kobin. Notion AI is scoped to Notion pages — it reads documents and helps you write. Kobin AI has simultaneous access to tasks, CRM pipeline, inbox messages, vault files, calendar events, and team workload, and can take action on all of them: creating tasks, assigning team members, drafting client updates, querying your pipeline, and generating pre-meeting briefs. It includes a built-in CRM and client portal that Notion lacks, and starts at $49/month for a team of 5.' }},
      { '@type': 'Question', name: 'What can Notion AI not do that Kobin AI can?',
        acceptedAnswer: { '@type': 'Answer', text: 'Notion AI cannot: create tasks or take any action on your workspace, access CRM contacts or pipeline data, read inbox messages or conversations, query calendar events, check team workload before assigning work, generate pre-meeting briefs, draft client updates from completed deliverables, or flag projects at risk based on task velocity. Notion AI is a writing assistant scoped to Notion content. Kobin AI is a workspace operator that reads and acts across all modules.' }},
      { '@type': 'Question', name: 'Is Kobin cheaper than Notion when you include the tools Notion requires?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Notion Team costs $16-48/month but requires Slack ($87/month) for messaging, Asana ($55/month) for tasks, and HubSpot ($50-90/month) for CRM — a total of $208-280/month for a 5-person agency. Kobin Founder includes all of these modules plus an AI layer that sees them all for $49/month. The saving is $159-231/month, or $1,908-2,772/year.' }},
    ]},
  ],
}

const comparison = [
  ['What should I focus on today?', '✗ No task or calendar access', '✓ Tasks + calendar + pipeline merged into daily brief'],
  ['Create a task from this message', '✗ Not possible', '✓ One tap — full context, assignee, priority, project auto-filled'],
  ['Which leads need follow-up?', '✗ No CRM access', '✓ Full pipeline query — sorted by deal value and days stale'],
  ['Prep me for my 3pm call', '✗ No CRM or calendar access', '✓ Full brief: client profile, open tasks, last conversation, talking points'],
  ['Where does this project stand?', '⚠ Notion pages only', '✓ Tasks + messages + vault files + timeline risk assessment'],
  ['Who has the lightest workload?', '✗ No team data', '✓ Live workload data — auto-assigns to least busy person'],
  ['Draft a client update', '⚠ Generic template only', '✓ Drafts from completed tasks + deliverables for that client'],
  ['What files were delivered this week?', '⚠ Notion pages only', '✓ Vault scan — all Deliverables folder uploads this week'],
]

export default function NotionAIAlternativePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', padding: '120px 64px 80px', background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.03) 40px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: '#555552', padding: '4px 10px', border: '1px solid #333', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Notion AI</span>
            <span style={{ color: '#555552' }}>vs</span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi2)', padding: '4px 10px', border: '1px solid rgba(99,88,232,0.4)', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kobin AI</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, color: '#F0EDE6', lineHeight: 0.97, letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Notion AI writes.<br /><em style={{ fontStyle: 'italic', color: '#6358E8' }}>Kobin AI executes.</em>
          </h1>
          <p style={{ fontSize: '18px', color: '#9C9890', maxWidth: '580px', lineHeight: 1.7, fontWeight: 300, marginBottom: '36px' }}>
            Notion AI reads your documents and helps you write better text inside Notion. Kobin AI reads your tasks, CRM, inbox, files, and calendar — and takes action across all of them. That is the real difference between a <strong style={{ color: '#F0EDE6' }}>writing assistant</strong> and a <strong style={{ color: '#F0EDE6' }}>workspace operator.</strong>
          </p>
          <Link href="/#waitlist" style={{ padding: '14px 28px', background: 'var(--vi)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
            Try Kobin free →
          </Link>
        </div>
      </section>

      {/* Direct answer */}
      <section style={{ background: 'var(--cream)', padding: '48px 64px', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            What is the best Notion AI alternative in 2026?
          </div>
          <p style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.8, fontWeight: 300 }}>
            <strong>The best Notion AI alternative for agencies in 2026 is Kobin.</strong> Notion AI is scoped to Notion pages — it summarizes documents and helps you write within the Notion environment. It cannot access your tasks, CRM, inbox messages, calendar events, or team workload. Kobin AI has simultaneous read access to every module in your workspace and can create tasks, assign team members, query your CRM pipeline, draft client updates from completed deliverables, and generate full pre-meeting briefs automatically. Kobin also includes a native client portal and CRM that Notion lacks. For most 5-person agencies, the cost saving from replacing Notion + Slack + Asana + HubSpot with Kobin is $159–231/month.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '80px 64px', background: 'var(--parch)', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '40px' }}>
            What happens when you<br /><em style={{ fontStyle: 'italic', color: 'var(--vi)' }}>actually ask the AI.</em>
          </h2>
          <div style={{ background: '#fff', border: '1px solid var(--wire)', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: 'var(--ink)', padding: '14px 20px' }}>
              {['You ask...', 'Notion AI says', 'Kobin AI does'].map((h, i) => (
                <span key={h} style={{ fontSize: '11px', fontFamily: "'Geist Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.06em', color: i === 2 ? 'var(--vi2)' : '#555552' }}>{h}</span>
              ))}
            </div>
            {comparison.map(([q, notion, kobin]) => (
              <div key={q} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', borderTop: '1px solid var(--wire)', padding: '14px 20px', alignItems: 'start' }}>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)', paddingRight: '12px', lineHeight: 1.5 }}>{q}</span>
                <span style={{ fontSize: '12px', color: notion.startsWith('✗') ? '#C03B30' : '#C4720A', paddingRight: '12px', lineHeight: 1.5 }}>{notion}</span>
                <span style={{ fontSize: '12px', color: '#0D6B4F', lineHeight: 1.5 }}>{kobin}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section style={{ padding: '80px 64px', background: 'var(--ink)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#F0EDE6', marginBottom: '40px' }}>
            The real cost of<br /><em style={{ fontStyle: 'italic', color: '#6358E8' }}>Notion as a hub.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', background: '#1A1A18', borderRadius: '14px', overflow: 'hidden' }}>
            {[
              ['Notion Team (docs + Notion AI)', '$40–48/mo'],
              ['+ Slack Pro (messaging, not in Notion)', '$87/mo'],
              ['+ Asana Premium (tasks, not in Notion)', '$55/mo'],
              ['+ HubSpot Starter (CRM, not in Notion)', '$50–90/mo'],
            ].map(([label, cost]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '14px', color: '#9C9890' }}>{label}</span>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', color: '#E57373' }}>{cost}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', background: 'rgba(229,83,75,0.08)' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#F0EDE6' }}>Total Notion stack (monthly)</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 600, color: '#E57373' }}>$232–280/mo</span>
            </div>
          </div>
          <div style={{ marginTop: '12px', background: 'rgba(76,63,212,0.12)', border: '1px solid rgba(76,63,212,0.3)', borderRadius: '10px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#F0EDE6' }}>Kobin Founder (replaces all the above)</span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '20px', fontWeight: 600, color: '#4DD6A5' }}>$49/mo</span>
          </div>
          <p style={{ fontSize: '12px', color: '#555552', marginTop: '12px', fontFamily: "'Geist Mono', monospace' " }}>Published pricing, April 2026. 5-seat comparison.</p>
        </div>
      </section>

      {/* Cluster links + CTA */}
      <section style={{ padding: '64px', background: 'var(--cream)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
          Ready to try the<br /><em style={{ fontStyle: 'italic', color: 'var(--vi)' }}>Notion AI alternative?</em>
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--ghost)', marginBottom: '28px' }}>14-day free trial. No credit card. Founding price locked.</p>
        <Link href="/#waitlist" style={{ padding: '14px 28px', background: 'var(--vi)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 500, display: 'inline-block', marginBottom: '32px' }}>
          Get early access →
        </Link>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {[
            { href: '/ai-workspace', label: 'Full AI workspace →' },
            { href: '/ai-for-agencies', label: 'AI for agencies →' },
            { href: '/clickup-ai-alternative', label: 'vs ClickUp AI →' },
            { href: '/compare/notion-alternative-for-agencies', label: 'Full Notion comparison →' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontSize: '13px', color: 'var(--vi)', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(76,63,212,0.25)', borderRadius: '100px' }}>{label}</Link>
          ))}
        </div>
      </section>
    </>
  )
}