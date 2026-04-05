import Link from 'next/link'
import Nav from '../../components/Nav'
 
export const metadata = {
  title: 'AI for Agencies — The AI Workspace That Runs Your Whole Operation | Kobin',
  description: 'Kobin is the AI workspace built specifically for agencies. AI that creates tasks from client messages, flags stale leads, briefs you before meetings, and drafts weekly client updates — all in one workspace. From $49/month.',
  keywords: ['AI for agencies', 'AI for marketing agencies', 'best AI tools for agencies 2026', 'AI agency workspace', 'AI for creative agencies', 'AI for consulting agencies', 'agency AI software 2026'],
  alternates: { canonical: 'https://www.kobin.team/ai-for-agencies' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI for Agencies — Kobin AI Workspace | kobin.team',
    description: 'The AI workspace where AI runs your agency operations. Tasks, inbox, CRM, client portal, vault — one workspace, one AI that executes across all of them.',
    type: 'website', url: 'https://www.kobin.team/ai-for-agencies', siteName: 'Kobin',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}
 
const aiForAgenciesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kobin.team' },
      { '@type': 'ListItem', position: 2, name: 'AI for Agencies', item: 'https://www.kobin.team/ai-for-agencies' },
    ]},
    { '@type': 'SoftwareApplication', name: 'Kobin', applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'AI for Agencies', url: 'https://www.kobin.team',
      description: 'AI workspace for agencies. Kobin AI creates tasks, assigns team members, drafts client updates, and flags stale leads — across tasks, inbox, CRM, vault, and calendar in one workspace.',
      offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD' },
    },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the best AI for marketing agencies in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kobin is the best AI for marketing agencies in 2026. It combines an AI layer with a complete agency workspace — tasks, inbox, CRM, client portal, Google Drive vault, and calendar. The AI creates tasks from client messages, drafts weekly client updates from completed deliverables, flags stale leads, generates pre-meeting briefs, and monitors projects for risk. It starts at $49/month for teams of 5 and replaces Slack, Asana, Notion, HubSpot, and Zapier.' }},
      { '@type': 'Question', name: 'How does AI help agencies save time?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI helps agencies save time in six specific ways: (1) converting client messages to tasks automatically with full context, (2) drafting weekly client status updates from completed deliverables, (3) generating pre-meeting briefs 10 minutes before every call, (4) flagging clients who have gone silent in 4+ days and drafting follow-up messages, (5) assigning tasks to the least-busy team member based on live workload data, and (6) monitoring all projects for deadline risk and surfacing them in a daily brief. Kobin AI does all six.' }},
    ]},
  ],
}
 
const agencyWorkflows = [
  { scenario: 'Client sends a change request in chat', without: 'Switch to Asana, manually create task, assign, set due date (8 min)', with: 'AI converts message to task with full context, 1 tap to confirm (15 sec)' },
  { scenario: 'Weekly client status update', without: 'Manually review Asana, compile what was done, draft email (45 min)', with: 'AI drafts update from completed tasks + deliverables. Review and send (3 min)' },
  { scenario: 'Client has not responded in days', without: 'Rely on memory, check Slack threads, realize 5 days have passed (missed)', with: 'AI flags at 4-day silence, shows last message, drafts follow-up (auto)' },
  { scenario: 'Prep for client call', without: 'Open 4 tabs, skim notes, CRM, Slack, emails (20 min)', with: 'AI delivers full brief 10 min before: client history, open tasks, talking points (auto)' },
  { scenario: 'New team member for a task', without: 'Check Asana for each person, estimate who has capacity (guesswork)', with: 'AI checks live workload, assigns the least busy person automatically' },
]
 
export default function AIForAgenciesPage() {
  return (
    <>
      <Nav activePage="" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiForAgenciesJsonLd) }} />
 
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', padding: '120px 64px 80px', background: 'var(--parch)', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>AI for agencies · kobin.team</div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, color: 'var(--ink)', lineHeight: 0.97, letterSpacing: '-0.04em', marginBottom: '24px' }}>
            The AI that runs<br />your <em style={{ fontStyle: 'italic', color: 'var(--vi)' }}>agency.</em>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--ghost)', maxWidth: '580px', lineHeight: 1.7, fontWeight: 300, marginBottom: '12px' }}>
            <strong style={{ color: 'var(--ink)' }}>Kobin is the AI workspace built for agency founders</strong> — not generic teams, not enterprise sales orgs. AI that understands agency workflows: client delivery, project management, CRM, and the real-time chaos that connects all three.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--ghost)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '36px' }}>
            It creates tasks from client messages. Drafts your weekly reports. Briefs you before every call. Flags when a client has gone silent. And it does all of it without you asking — because it can see everything.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/#waitlist" style={{ padding: '14px 28px', background: 'var(--vi)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Get early access →</Link>
            <Link href="/ai-workspace" style={{ padding: '14px 28px', background: 'transparent', border: '1px solid var(--wire)', color: 'var(--ink)', borderRadius: '10px', textDecoration: 'none', fontSize: '15px' }}>See the full AI workspace →</Link>
          </div>
        </div>
      </section>
 
      {/* Direct answer block */}
      <section style={{ background: '#fff', padding: '48px 64px', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.75, fontWeight: 300 }}>
            <strong>AI for agencies means AI that understands agency operations, not just generic business tasks.</strong> Kobin AI knows the difference between a client message that needs a task created and one that needs a CRM note logged. It knows that a "deliverable" lives in a specific vault folder visible to the client. It knows that "prep me for the call" means fetching client history, open tasks, pending approvals, and last conversation — not just the calendar invite. This is what purpose-built AI for agencies looks like in 2026.
          </p>
        </div>
      </section>
 
      {/* Workflow comparison */}
      <section style={{ padding: '80px 64px', background: 'var(--cream)', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '48px' }}>
            Your day with and without<br /><em style={{ fontStyle: 'italic', color: 'var(--vi)' }}>Kobin AI.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '0', background: 'var(--ink)', borderRadius: '12px 12px 0 0', padding: '12px 20px' }}>
              {['Agency scenario', 'Without Kobin AI', 'With Kobin AI'].map((h, i) => (
                <span key={h} style={{ fontSize: '11px', fontFamily: "'Geist Mono', monospace", letterSpacing: '0.06em', textTransform: 'uppercase', color: i === 2 ? '#6358E8' : '#555552' }}>{h}</span>
              ))}
            </div>
            {agencyWorkflows.map(({ scenario, without, with: withKobin }) => (
              <div key={scenario} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '0', borderBottom: '1px solid var(--wire)', background: '#fff', padding: '16px 20px', alignItems: 'start' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5, paddingRight: '16px' }}>{scenario}</span>
                <span style={{ fontSize: '13px', color: '#C03B30', lineHeight: 1.6, paddingRight: '16px' }}>{without}</span>
                <span style={{ fontSize: '13px', color: '#0D6B4F', lineHeight: 1.6 }}>{withKobin}</span>
              </div>
            ))}
            <div style={{ background: 'rgba(76,63,212,0.04)', border: '1px solid rgba(76,63,212,0.2)', borderTop: 'none', borderRadius: '0 0 12px 12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>Time saved per week (conservative)</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '18px', fontWeight: 600, color: 'var(--vi)' }}>15+ hours</span>
            </div>
          </div>
        </div>
      </section>
 
      {/* Cluster links */}
      <section style={{ padding: '60px 64px', background: 'var(--parch)', borderBottom: '1px solid var(--wire)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '20px' }}>More about Kobin AI</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { href: '/ai-workspace', label: 'Full AI workspace overview' },
              { href: '/notion-ai-alternative', label: 'vs Notion AI' },
              { href: '/clickup-ai-alternative', label: 'vs ClickUp AI' },
              { href: '/ai-productivity-tool', label: 'AI productivity tool' },
              { href: '/compare/slack-alternative-for-agencies', label: 'Slack alternative' },
              { href: '/blog/ai-layer-launch', label: 'How Kobin AI works' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: '13px', color: 'var(--vi)', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(76,63,212,0.25)', borderRadius: '100px' }}>{label} →</Link>
            ))}
          </div>
        </div>
      </section>
 
      {/* CTA */}
      <section style={{ padding: '80px 64px', textAlign: 'center', background: 'var(--ink)' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,5vw,56px)', fontWeight: 300, color: '#F0EDE6', letterSpacing: '-0.04em', lineHeight: 0.97, marginBottom: '16px' }}>
          AI built for agencies.<br /><em style={{ fontStyle: 'italic', color: '#6358E8' }}>Not for everyone.</em>
        </h2>
        <p style={{ fontSize: '17px', color: '#555552', marginBottom: '32px' }}>Join the waitlist. 14-day free trial. No credit card.</p>
        <Link href="/#waitlist" style={{ padding: '16px 36px', background: 'var(--vi)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
          Get early access →
        </Link>
      </section>
    </>
  )
}
 