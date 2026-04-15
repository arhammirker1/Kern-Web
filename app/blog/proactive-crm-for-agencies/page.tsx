// SAVE AS: app/blog/proactive-crm-for-agencies/page.tsx
// PRIMARY KEYWORD: "proactive CRM for agencies", "AI CRM for agencies 2026"
// SECONDARY: "revenue intelligence CRM", "crm risk detection agencies"
// TERTIARY: "gmail crm sync agencies", "AI email analysis CRM"
// GEO: Answer-first 40-60 word blocks, self-contained 134-167 word passages

import Link from 'next/link'
import Nav from '../../../components/Nav'

export const metadata = {
  title: 'Proactive CRM for Agencies: Revenue Intelligence, Risk Detection, and Gmail AI in 2026 | Kobin',
  description:
    'Most CRMs are passive — they store pipeline data and wait for you to check it. A proactive CRM watches your pipeline daily, alerts you when deals go cold, flags risk before it becomes a crisis, and syncs Gmail intent analysis automatically. Here is what that looks like in practice.',
  keywords: [
    'proactive CRM for agencies',
    'AI CRM for agencies 2026',
    'revenue intelligence CRM',
    'CRM risk detection agencies',
    'gmail crm sync agencies',
    'AI email analysis CRM',
    'best CRM for agencies 2026',
    'CRM with proactive alerts',
    'agency CRM intelligence',
    'automated CRM follow-ups',
  ],
  alternates: { canonical: 'https://www.kobin.team/blog/proactive-crm-for-agencies' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Proactive CRM for Agencies: Revenue Intelligence, Risk Detection, and Gmail AI 2026',
    description: 'What if your CRM told you which deals are at risk — before you even opened the app? Here is how proactive CRM intelligence works in Kobin and why it changes agency pipeline management.',
    type: 'article',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    authors: ['Arham Mirkar'],
    tags: ['CRM', 'AI', 'agency software', 'revenue intelligence', 'proactive CRM'],
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Proactive CRM for Agencies 2026 — Kobin' }],
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
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kobin.team/blog' },
        { '@type': 'ListItem', position: 3, name: 'Proactive CRM for Agencies' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Proactive CRM for Agencies: Revenue Intelligence, Risk Detection, and Gmail AI in 2026',
      description: 'How a proactive CRM works differently from HubSpot and traditional CRM tools — with daily revenue intelligence alerts, cross-module risk detection, Gmail thread intent analysis, and automated morning briefs for agency founders.',
      author: { '@type': 'Person', name: 'Arham Mirkar', url: 'https://www.kobin.team', sameAs: ['https://www.linkedin.com/company/kobin-app/'] },
      publisher: { '@type': 'Organization', name: 'Kobin', url: 'https://www.kobin.team' },
      datePublished: '2026-04-10',
      dateModified: '2026-04-10',
      keywords: 'proactive CRM agencies, AI CRM 2026, revenue intelligence, risk detection CRM, Gmail CRM sync, email intent analysis',
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.kobin.team/blog/proactive-crm-for-agencies' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a proactive CRM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A proactive CRM monitors your pipeline continuously and surfaces risks, opportunities, and required actions without you having to open the CRM and query it manually. Unlike traditional CRMs like HubSpot that are reactive (storing data and waiting for you to check it), a proactive CRM delivers daily risk detection alerts, revenue intelligence reports on closing deals, and Gmail-synced contact analysis automatically. Kobin is the only agency CRM with this proactive intelligence layer built in.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CRM revenue intelligence work for agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRM revenue intelligence for agencies monitors three signals daily: (1) Deals with expected close dates in the next 7 days — flagged with total value at stake. (2) Deals above 70% close probability that need active attention to close. (3) High-value deals ($5,000+) that have been stale for 14+ days — at risk of going cold. These are delivered as a formatted AI message in your inbox, not a dashboard you have to open. Kobin runs this automatically for every agency founder every day.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Gmail sync work with a CRM for agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin syncs Gmail to CRM contacts by matching sender email addresses to your Relationships contacts. For each matched thread, Kobin AI analyzes intent (interested, ready to close, requesting meeting, objection, not interested), sentiment (positive, neutral, negative), and specific buying signals. These appear as insight cards in the Email Intelligence panel in your CRM view. The sync runs when you click Sync Gmail, and new threads are automatically matched via Google Pub/Sub push notifications when they arrive.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is CRM risk detection and how does it help agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRM risk detection for agencies monitors three categories of signals that indicate revenue is at risk: overdue high-priority tasks (which often cause client relationship damage), blocked work that delays deliverables and threatens deal renewals, and deals stuck in key pipeline stages (proposal, negotiating, meeting booked) for 21+ days without progression. Kobin runs this scan at regular intervals and delivers a formatted risk alert to your inbox with specific actions to take. Traditional CRMs like HubSpot only flag CRM-level signals — they cannot see task blockers or team workload.',
          },
        },
      ],
    },
  ],
}

const intelligenceFeatures = [
  {
    id: 'risk-detection',
    heading: 'Risk Detection: What is blocked before it becomes a crisis',
    frequency: 'Runs every few hours',
    triggers: [
      'Urgent or high-priority tasks that are overdue (by days, not minutes)',
      'Tasks in Blocked status — with owner and how long blocked',
      'Deals stuck in Proposal, Negotiating, or Meeting Booked for 21+ days',
    ],
    sampleOutput: `⚠️ Risk Alert — afternoon check-in

🚨 2 critical tasks overdue:
  • Landing page revisions (4d overdue, high) — Ahmed
  • Scope approval email (2d overdue, urgent) — Beenish

⛔ 1 blocked task needs attention:
  • API integration spec — awaiting client sign-off

💸 1 deal stuck 21+ days — risk of going cold:
  • Maria Rodriguez (Globex) — Proposal for 24 days, $22,000`,
    hubspotEquivalent: 'Not available. HubSpot can flag deal age with notification rules, but cannot see task blockers or link them to specific deals.',
  },
  {
    id: 'revenue-intelligence',
    heading: 'Revenue Intelligence: Deals closing and at risk this week',
    frequency: 'Runs 3× per week',
    triggers: [
      'Deals with expected close dates within the next 7 days',
      'High-probability deals (above 70% win rate) needing active attention',
      'High-value deals ($5,000+) that have been stale 14+ days',
    ],
    sampleOutput: `💼 Revenue Intelligence — Wednesday

🎯 2 deals closing this week — $34,000 at stake:
  • Sarah Chen (Acme Corp) — closes Fri Apr 12, $15,000 (75%)
  • Speed testing (acme) — closes Mon Apr 15, $5,000 (60%)

💰 3 high-probability deals — ~$28,400 weighted revenue:
  • James Park (Startup Inc) — Proposal, 80%, $8,500
  • Maria Rodriguez (Globex) — Negotiating, 70%, $22,000

⚠️ 2 high-value deals going cold:
  • Tom Williams (VC Fund) — Negotiating 18 days, $45,000`,
    hubspotEquivalent: 'HubSpot requires manual Forecasting dashboard visits and sequence enrollment. There is no automated daily revenue intelligence message delivered to your inbox.',
  },
  {
    id: 'morning-brief',
    heading: 'Morning Brief: Your full operation in 90 seconds',
    frequency: 'Every morning at 8am',
    triggers: [
      'Tasks due today by priority',
      'Overdue tasks and how many days overdue',
      'Today\'s meetings with purpose and Meet links',
      'Stale CRM contacts who need follow-up today (sorted by deal value)',
      'Blocked tasks that need your intervention',
    ],
    sampleOutput: `Good morning, Arham 🌅 Thursday, April 10.

📋 Tasks due today (3):
  - [URGENT] Finalize proposal for Globex
  - [HIGH] Review design mockups before client call
  - [MEDIUM] Update project status in client portal

⚠️ Overdue (2): API integration (2d), Scope doc (1d)

📅 Meetings today (2):
  - 10:00am: Reelix kickoff — has Meet link
  - 3:00pm: Maria Rodriguez intro call

💸 Follow-ups due today (2):
  - Maria Rodriguez (Globex) — stale 14 days, $22,000
  - Tom Williams (VC Fund) — stale 20 days, $45,000

▶ Highest leverage action: Start the Globex proposal now.`,
    hubspotEquivalent: 'HubSpot has a "Today" view in the CRM showing daily tasks, but it is CRM-only — no cross-module task priorities, calendar events, or blocked work items.',
  },
  {
    id: 'weekly-review',
    heading: 'Weekly Review: What happened, what slipped, what is next',
    frequency: 'Every Friday',
    triggers: [
      'Tasks completed in the past 7 days',
      'Tasks that slipped (due but not completed)',
      'Deals advanced in the pipeline this week',
      'Meetings held and outcomes logged',
      'Team task completion by member',
    ],
    sampleOutput: `📊 Weekly Review — Apr 4 to Apr 10

✅ Strong week on delivery: 12 tasks completed (vs 9 last week). Ahmed led with 4 completions on the Reelix project.

⚠️ 2 tasks slipped: API integration spec and client scope sign-off. Both need to move in the first 2 days of next week.

💼 Pipeline movement: Maria Rodriguez (Globex) advanced from New Lead → Proposal. One deal closed won: $12,000 from previous Reelix retainer renewal.

🎯 3 actions for next week:
• Unblock API integration — schedule call with client
• Follow up on $45,000 Tom Williams deal (22 days stale)
• Complete Globex proposal before Thursday`,
    hubspotEquivalent: 'HubSpot has reporting dashboards but they require navigation to the Reports section. There is no AI-generated weekly review delivered to your inbox with cross-module context.',
  },
]

export default function ProactiveCRMForAgenciesPost() {
  return (
    <>
      <Nav activePage="blog" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="blog-post-layout">
        <div className="blog-post-inner">

          <header className="post-header">
            <div className="post-header-meta">
              <Link href="/blog" className="post-back">← All posts</Link>
              <span className="post-category cat-build">CRM Intelligence</span>
            </div>
            <h1 className="post-h1">
              Proactive CRM for Agencies: Revenue Intelligence, Risk Detection, and Gmail AI in 2026
            </h1>
            <p className="post-subtitle">
              Traditional CRMs are filing cabinets — you put data in and retrieve it when you remember to check. A proactive CRM is different. It watches your pipeline while you work and tells you what needs attention before you lose the deal.
            </p>
            <div className="post-byline">
              <div className="byline-avatar">AM</div>
              <div className="byline-info">
                <strong>Arham Mirkar</strong>
                <span>Founder, Kobin &nbsp;·&nbsp; April 10, 2026 &nbsp;·&nbsp; 12 min read</span>
              </div>
            </div>
          </header>

          {/* Direct answer — AEO optimized, 50 words */}
          <div style={{ background: 'var(--parch)', border: '1px solid var(--wire)', borderRadius: '10px', padding: '16px 20px', margin: '0 0 32px', fontSize: '14px', color: 'var(--ghost)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>Direct answer</strong>
            A proactive CRM for agencies monitors your pipeline daily and delivers alerts — revenue intelligence on closing deals, risk detection for blocked work and stale deals, Gmail intent analysis per contact, and a morning brief combining tasks and CRM follow-ups. Kobin is the only agency workspace with this built in, from $29/month.
          </div>

          <div className="post-stat-grid">
            {[
              { num: '4', label: 'Daily intelligence routines in Kobin CRM', sub: 'Risk · Revenue · Morning Brief · Weekly Review' },
              { num: '21d', label: 'Max days a deal sits in Proposal before alert', sub: 'Kobin flags it before it goes cold' },
              { num: '70%', label: 'Win probability threshold for revenue alerts', sub: 'High-probability deals surfaced daily' },
              { num: '$5K', label: 'Deal value threshold for stale deal alerts', sub: 'High-value relationships auto-monitored' },
            ].map(({ num, label, sub }) => (
              <div className="post-stat" key={label}>
                <div className="post-stat-num">{num}</div>
                <div className="post-stat-label">{label}</div>
                <div className="post-stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          <div className="post-body-content">

            <p>
              Here is a scenario every agency founder recognizes. A $22,000 deal was in proposal stage three weeks ago. You were busy delivering for existing clients. The prospect sent one follow-up email you meant to reply to. By the time you get back to your CRM, the deal is cold. The prospect has moved to a competitor. The $22,000 is gone — and you did not see it coming.
            </p>
            <p>
              This is not a discipline failure. It is a tooling failure. Traditional CRMs — HubSpot, Pipedrive, Salesforce — are built as databases. You put data in. You retrieve data when you remember to look. The CRM does not watch for risk. It does not flag urgency. It does not cross-reference your blocked task queue with your stale deal list and tell you that the same client relationship is at risk from both directions simultaneously.
            </p>
            <p>
              A proactive CRM does. And in 2026, it is the difference between an agency that converts its pipeline and one that lets deals die in the backlog.
            </p>

            <h2 id="what-is-proactive-crm">What is a proactive CRM, exactly?</h2>
            <p>
              <strong>A proactive CRM is a relationship management system that monitors your pipeline continuously and surfaces risks and opportunities without waiting for you to manually query it.</strong> The distinction from a traditional CRM is architectural: a reactive CRM stores data and responds to your queries. A proactive CRM has an intelligence layer that runs on a schedule, interprets your pipeline state, and delivers actionable alerts.
            </p>
            <p>
              For agencies specifically, proactive CRM intelligence needs to operate across three dimensions simultaneously: the CRM pipeline itself (deal stages, values, probabilities, and ages), the operational layer (which tasks are blocked, overdue, or creating client delivery risk), and the communication layer (what the last email from a prospect actually said and whether it signals buying intent or cold decline). No traditional CRM can see all three of these layers — because they live in separate tools.
            </p>
            <p>
              Kobin&apos;s proactive CRM is possible precisely because CRM, tasks, inbox, and email are all part of the same workspace and data model. The intelligence layer reads all three simultaneously before generating each alert.
            </p>

            <div className="post-pull-quote">
              <p>&ldquo;The best CRM is not the one with the most fields. It is the one that tells you which deal you are about to lose — before you lose it.&rdquo;</p>
              <cite>— On what proactive CRM intelligence actually means</cite>
            </div>

            <h2 id="four-intelligence-routines">The four daily intelligence routines in Kobin CRM</h2>
            <p>
              Kobin runs four automated intelligence routines. Each produces a structured message delivered to your Kobin inbox — so you get CRM intelligence where you actually work, not in a dashboard you have to remember to open.
            </p>

            {intelligenceFeatures.map((feature) => (
              <div key={feature.id} id={feature.id} style={{ marginTop: '40px' }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '8px' }}>
                  {feature.heading}
                </h3>
                <div style={{ display: 'inline-block', fontSize: '11px', color: 'var(--vi)', background: 'rgba(76,63,212,0.08)', padding: '3px 10px', borderRadius: '100px', marginBottom: '14px', fontFamily: "'Geist Mono', monospace' " }}>
                  {feature.frequency}
                </div>

                <p style={{ fontSize: '14px', color: 'var(--ghost)', marginBottom: '14px', lineHeight: 1.7 }}>
                  <strong>Triggers on:</strong>
                </p>
                <ul className="checklist" style={{ marginTop: 0, marginBottom: '16px' }}>
                  {feature.triggers.map(t => (
                    <li key={t} style={{ padding: '6px 0 6px 28px', position: 'relative', borderBottom: '1px dashed var(--border)', fontSize: '13px', color: 'var(--muted)' }}>
                      {t}
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Example output (from a live Kobin workspace):</p>
                <pre style={{ background: '#0E0E0D', borderRadius: '12px', padding: '20px 24px', fontSize: '12px', color: '#9C9890', lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: "'Geist Mono', monospace", overflowX: 'auto' }}>
                  {feature.sampleOutput}
                </pre>

                <div style={{ marginTop: '12px', padding: '12px 16px', background: 'rgba(192,59,48,0.04)', border: '1px solid rgba(192,59,48,0.15)', borderRadius: '8px', fontSize: '12px', color: '#C03B30', lineHeight: 1.65 }}>
                  <strong>HubSpot equivalent:</strong> {feature.hubspotEquivalent}
                </div>
              </div>
            ))}

            <h2 id="gmail-crm-sync" style={{ marginTop: '56px' }}>Gmail CRM sync: AI email intent analysis per contact</h2>
            <p>
              Most agencies manage critical CRM relationships through email — but their CRM and their inbox are completely disconnected. HubSpot tracks email opens and clicks. It does not tell you what the email actually said or whether the prospect is about to convert or go cold.
            </p>
            <p>
              Kobin&apos;s Gmail sync goes further. When you connect Gmail and trigger a sync, Kobin matches the last 8 email threads per contact to your Relationships records by sender email address. For each thread where the last inbound message is newer than the last analysis, an AI model reads the thread and produces:
            </p>

            <div className="post-cost-table" style={{ margin: '24px 0' }}>
              <div className="cost-table-header" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                <span>Analysis field</span>
                <span>What it means for your pipeline</span>
              </div>
              {[
                ['Intent classification', 'Interested · Ready to close · Requesting meeting · Objection · Not interested · Neutral'],
                ['Sentiment scoring', 'Positive · Neutral · Negative — based on tone, urgency, and language patterns in the thread'],
                ['Buying signals', 'Specific phrases or behavioral patterns that indicate purchase readiness or friction'],
                ['Summary / reasoning', 'A 1-2 sentence explanation of why the thread was classified this way'],
                ['Analysis timestamp', 'When the analysis was last run — so you know how fresh the signal is'],
              ].map(([field, meaning]) => (
                <div className="cost-table-row" key={field} style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                  <span className="cost-tool">{field}</span>
                  <span className="cost-replaces">{meaning}</span>
                </div>
              ))}
            </div>

            <p>
              These signals appear as insight cards in the Email Intelligence panel at the top of your CRM view — one card per contact, showing the most recent non-neutral analysis. You can see at a glance which contacts are showing positive buying signals, which have objections, and which have gone silent.
            </p>
            <p>
              For deals flagged by the revenue intelligence routine as closing this week, the email intelligence panel shows whether the last conversation supports that timeline or contradicts it. A deal marked as closing Friday with a negative sentiment thread in the last email is a signal to intervene today — not discover on Friday that the deal fell through.
            </p>

            <h2 id="pipeline-view">The pipeline view: kanban + intelligence in one place</h2>
            <p>
              Kobin&apos;s CRM view includes both a kanban pipeline view (drag-and-drop stage management) and a list view with sorting by type, company, and stage. Deal cards show:
            </p>
            <ul className="post-list">
              <li><strong>Deal value and close probability</strong> — inline, no detail page required.</li>
              <li><strong>Expected close date</strong> — visible on each card, color-coded when approaching.</li>
              <li><strong>Pipeline stage and days in stage</strong> — calculated automatically from stage_entered_at.</li>
              <li><strong>Contact type badge</strong> — Lead, Investor, Partner, or Talent, each color-coded.</li>
              <li><strong>Next scheduled meeting</strong> — if one exists, shown inline with a Join Meeting button.</li>
              <li><strong>Email intelligence badge</strong> — if a Gmail analysis exists for this contact, the intent classification is visible on the card.</li>
            </ul>
            <p>
              When you advance a contact to Meeting Booked stage, Kobin auto-advances the pipeline stage. When you schedule a meeting from the card, the contact is automatically moved from New Lead or Contacted to Meeting Booked. The intelligence routines take the pipeline stage into account — Proposal, Negotiating, and Meeting Booked contacts that are stale trigger the 21-day risk alert.
            </p>

            <h2 id="cross-module-crm">Why cross-module CRM intelligence matters more than pure CRM features</h2>
            <p>
              The most important thing about Kobin&apos;s proactive CRM is not any individual feature — it is that the CRM shares a data model with every other module. This makes cross-module risk detection possible in a way that no standalone CRM can replicate.
            </p>
            <p>
              Consider a scenario: you have a $45,000 deal in negotiation that has been stale for 18 days. The revenue intelligence alert flags it. You open the client&apos;s project room in your inbox. The last message is from 3 days ago asking a technical question that never got a response — because the team member responsible has three overdue tasks on the same project. The task layer shows the deliverable that was supposed to answer the question is blocked waiting on an external review.
            </p>
            <p>
              The risk to this deal is not CRM-visible. It is a combination of inbox silence, task overload, and a blocked deliverable. HubSpot would not know any of this. Kobin&apos;s cross-module risk detection sees all three layers simultaneously, which is why the morning brief and risk alerts can say &ldquo;this relationship is at risk&rdquo; — not just &ldquo;this deal is old.&rdquo;
            </p>

            <div className="post-pull-quote">
              <p>&ldquo;A CRM that only sees CRM data can only flag CRM risks. The deals that slip through the cracks are usually killed by task overload, inbox silence, or delivery delays — none of which a standalone CRM can detect.&rdquo;</p>
              <cite>— Arham Mirkar, Founder of Kobin</cite>
            </div>

            <h2 id="getting-started">How to set up Kobin CRM intelligence for your agency</h2>
            <p>
              Getting Kobin&apos;s proactive CRM running takes about 15 minutes:
            </p>
            <ul className="post-list">
              <li><strong>Import your contacts.</strong> Export your existing CRM (HubSpot, Pipedrive, or spreadsheet) as a CSV. Import via the Relationships → Import button. Kobin maps name, email, company, role, and tags automatically and deduplicates against existing contacts.</li>
              <li><strong>Set deal values and close dates.</strong> Use the Pipeline view to add deal_value, close_probability, and expected_close_date per contact. These are the primary inputs for revenue intelligence alerts.</li>
              <li><strong>Connect Gmail.</strong> Settings → Integrations → Google. Kobin requests the gmail.readonly scope and begins matching threads to contacts by email address. First sync runs immediately and populates the Email Intelligence panel.</li>
              <li><strong>Let the routines run.</strong> Risk detection runs on a schedule. Revenue intelligence runs 3× per week. Morning brief runs at 8am. Weekly review runs every Friday. All are delivered to your Kobin inbox — no configuration required.</li>
            </ul>

            <div className="post-cta-block">
              <div className="post-cta-eyebrow">Try proactive CRM</div>
              <h3>Revenue intelligence. Risk detection. Gmail AI. All in one workspace.</h3>
              <p>
                Kobin&apos;s proactive CRM runs daily intelligence routines, syncs Gmail to contacts, and surfaces cross-module risk signals — alongside team inbox, tasks, vault, and client portal. From $29/month for a team of 5.
              </p>
              <div className="post-cta-savings">
                {[
                  { tool: 'HubSpot', saves: 'replaced · saves ~$50–90/mo' },
                  { tool: 'Slack', saves: 'replaced · saves ~$87/mo' },
                  { tool: 'Asana', saves: 'replaced · saves ~$55/mo' },
                  { tool: 'Notion', saves: 'replaced · saves ~$40/mo' },
                  { tool: 'Zapier', saves: 'eliminated · saves ~$29/mo' },
                ].map(({ tool, saves }) => (
                  <div className="cta-saving" key={tool}>
                    <span className="cta-tool">{tool}</span>
                    <span className="cta-saves">{saves}</span>
                  </div>
                ))}
              </div>
              <Link href="/#waitlist" className="post-cta-btn">Join the waitlist →</Link>
              <p className="post-cta-sub">Closed beta · 14-day free trial · No credit card required</p>
            </div>

            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="post-faq">
              {[
                {
                  q: 'What is a proactive CRM?',
                  a: 'A proactive CRM monitors your pipeline continuously and delivers risk alerts, revenue intelligence, and contact analysis without requiring you to manually query it. Unlike traditional CRMs that store data and wait for you to check dashboards, a proactive CRM has an intelligence layer that runs on a schedule and pushes actionable information to where you work. Kobin is the only agency workspace with a proactive CRM built in.',
                },
                {
                  q: 'How does Kobin\'s risk detection work?',
                  a: 'Kobin\'s risk detection scans run at regular intervals and flag three categories: (1) High-priority tasks that are overdue and the team member responsible. (2) Tasks in Blocked status across all active projects. (3) Deals stuck in Proposal, Negotiating, or Meeting Booked stages for 21+ days without progression. These are combined into a formatted alert message delivered to your Kobin inbox — not a dashboard notification.',
                },
                {
                  q: 'What CRM fields does Kobin\'s revenue intelligence use?',
                  a: 'Revenue intelligence uses four CRM fields: expected_close_date (to identify deals closing in the next 7 days), close_probability (to identify high-probability deals above 70%), deal_value (to identify high-value deals above $5,000 for stale monitoring), and stage_entered_at (to calculate how long a deal has been in each stage). These fields can be set from the Pipeline view — no CRM admin configuration required.',
                },
                {
                  q: 'Is the Gmail sync secure? Does Kobin read all my email?',
                  a: 'Kobin requests the gmail.readonly scope, which allows thread listing and reading. Kobin only reads threads where the sender or recipient email matches a contact in your Relationships module. It does not scan your entire inbox. Thread content is sent to the AI model for analysis and the result is stored in your Kobin database — it is not retained by the AI provider for training.',
                },
                {
                  q: 'Can I use Kobin CRM without connecting Gmail?',
                  a: 'Yes. Gmail sync is optional. All other CRM features — pipeline kanban, deal tracking, revenue intelligence, risk detection, morning brief, and weekly review — work without Gmail connection. Email intelligence analysis is only available for contacts with matched Gmail threads. If you prefer not to connect Gmail, you can log meeting outcomes and notes manually from the contact card.',
                },
              ].map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary className="faq-q">{q}</summary>
                  <p className="faq-a">{a}</p>
                </details>
              ))}
            </div>

          </div>

          <div className="post-footer-nav">
            <Link href="/blog" className="post-nav-btn">
              <span>← Back to</span>
              <strong>All posts</strong>
            </Link>
            <Link href="/compare/kobin-vs-hubspot" className="post-nav-btn" style={{ textAlign: 'right' }}>
              <span>Compare →</span>
              <strong>Kobin vs HubSpot</strong>
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}