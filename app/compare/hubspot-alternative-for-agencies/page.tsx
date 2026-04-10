// app/compare/hubspot-alternative-for-agencies/page.tsx
import Link from 'next/link'
import Nav from '../../../components/Nav'

export const metadata = {
  title: 'Best HubSpot Alternative for Agencies in 2026 — Proactive AI CRM, Not Just a Database | Kobin',
  description:
    'HubSpot is a reactive database — you check it when you remember. Kobin\'s CRM monitors your pipeline daily: AI risk alerts, revenue intelligence, Gmail intent analysis per thread, auto-lead detection, and a morning brief. From $49/month total including inbox, tasks, and client portal.',
  keywords: [
    'hubspot alternative for agencies',
    'best hubspot alternative 2026',
    'kobin vs hubspot',
    'free hubspot alternative',
    'replace hubspot agency',
    'lightweight crm for agencies',
    'hubspot too expensive small team',
    'proactive crm hubspot alternative',
    'ai crm for agencies',
    'crm with gmail intelligence',
  ],
  alternates: { canonical: 'https://www.kobin.team/compare/kobin-vs-hubspot' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best HubSpot Alternative for Agencies 2026 — AI CRM That Monitors Your Pipeline',
    description: 'HubSpot waits for you to check it. Kobin AI monitors your pipeline every day — risk alerts, revenue intelligence, Gmail intent analysis. $49/month total.',
    type: 'website',
    url: 'https://www.kobin.team/compare/kobin-vs-hubspot',
    siteName: 'Kobin',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kobin vs HubSpot — AI CRM Alternative for Agencies' }],
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
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best HubSpot alternative for small agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin is the best HubSpot alternative for small agencies. Unlike HubSpot — a reactive database you must manually check — Kobin runs daily AI intelligence routines: risk detection (blocked tasks + stale deals), revenue intelligence (closing this week + high-probability deals), Gmail intent analysis per contact, auto-lead detection from unknown senders, and a morning brief combining CRM and task data. Included in all Kobin plans at no extra cost from $49/month for 5 seats.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI does Kobin CRM have that HubSpot does not?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin CRM has five AI capabilities HubSpot lacks: (1) Daily proactive risk detection — flags deals stuck 21+ days AND blocked tasks simultaneously. (2) Revenue intelligence alerts 3x/week — surfaces deals closing this week and high-probability deals before they go cold. (3) Gmail intent analysis — AI reads each email thread and classifies intent (interested, ready to close, objection), sentiment, and buying signals. (4) Auto pipeline stage advancement — AI moves deals forward based on email content. (5) Auto lead detection — unknown email senders are AI-screened and added as leads if relevant.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Kobin cheaper than HubSpot for a 5-person agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin Founder ($49/month for 5 seats) includes CRM, AI intelligence, team inbox, tasks, client portal, vault, calendar, and LinkedIn Studio. HubSpot Starter costs $50–90/month for CRM only — and agencies still need Slack ($87/month), Asana ($55/month), and Notion ($40/month) alongside it. The full HubSpot stack costs $232–272/month. Kobin replaces it all for $49/month.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Kobin detect risk in my CRM pipeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin runs cross-module risk detection multiple times per day. It scans three signals: (1) Urgent or high-priority tasks that are overdue — showing owner and days overdue. (2) Tasks in Blocked status across all projects. (3) Deals in Proposal, Negotiating, or Meeting Booked stages for 21+ days without movement. These are combined into a single alert delivered to your Kobin inbox. HubSpot can only flag CRM-level signals — it has no visibility into your task layer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Kobin auto-detect new leads from Gmail?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When Gmail is connected, Kobin monitors incoming emails. For emails from unknown senders not in your CRM, an AI model screens relevance: is this a potential client, partner, investor, or collaborator? If yes, the contact is auto-created as a New Lead with their email, name, and source noted. The email thread is immediately analyzed for intent and sentiment. HubSpot requires manual contact creation or specific form submissions — it cannot auto-detect leads from inbound email.',
          },
        },
      ],
    },
  ],
}

const aiIntelligenceRoutines = [
  {
    id: 'risk',
    icon: '🚨',
    label: 'Risk Detection',
    frequency: 'Multiple times daily',
    description: 'Scans your workspace for signals that revenue is at risk — before you discover them the hard way.',
    signals: [
      'High-priority or urgent tasks that are overdue (owner + days)',
      'Tasks stuck in Blocked status across all active projects',
      'Deals in Proposal / Negotiating / Meeting Booked for 21+ days',
    ],
    sampleAlert: `⚠️ Risk Alert — afternoon check-in

🚨 2 critical tasks overdue:
  • Landing page revisions (4d, high) — Ahmed
  • Scope sign-off email (2d, urgent) — Beenish

⛔ 1 blocked task:
  • API integration spec — awaiting client sign-off

💸 Deal going cold (24 days in Proposal):
  • Maria Rodriguez (Globex) · $22,000`,
    hubspotNote: 'HubSpot can send deal age notifications but cannot cross-reference task blockers or team workload against CRM data.',
  },
  {
    id: 'revenue',
    icon: '💼',
    label: 'Revenue Intelligence',
    frequency: '3× per week',
    description: 'Proactively surfaces deals at critical moments — closing this week, high probability, and stale high-value relationships.',
    signals: [
      'Deals with expected close dates in the next 7 days — total value at stake',
      'High-probability deals above 70% win rate needing active attention',
      'High-value deals ($5,000+) stale for 14+ days',
    ],
    sampleAlert: `💼 Revenue Intelligence — Wednesday

🎯 2 deals closing this week — $34,000 at stake:
  • Sarah Chen (Acme) — closes Fri, $15,000 (75%)
  • Speed testing (acme) — closes Mon, $5,000 (60%)

💰 3 high-probability deals — ~$28k weighted:
  • James Park — Proposal, 80%, $8,500
  • Maria Rodriguez — Negotiating, 70%, $22,000`,
    hubspotNote: 'HubSpot requires manual sequence enrollment and dashboard navigation. There is no automated revenue intelligence message.',
  },
  {
    id: 'gmail',
    icon: '📧',
    label: 'Gmail Intent Analysis',
    frequency: 'Real-time on new email + manual sync',
    description: 'Every email thread matched to a CRM contact is analyzed by AI — not just tracked for opens.',
    signals: [
      'Intent: interested · requesting_meeting · ready_to_close · objection · not_interested',
      'Sentiment: positive · neutral · negative',
      'Buying signals: specific phrases indicating purchase intent',
      'Lead score delta: −20 to +20 applied automatically',
      'Suggested pipeline stage with reason',
    ],
    sampleAlert: `📧 Important email from Maria Rodriguez

Strong buying signals detected. She referenced budget approval and asked about onboarding timelines.

*Sentiment: positive · Intent: ready_to_close*
📊 Stage auto-updated: Negotiating → Proposal
⭐ Lead score: 45 → 63
✅ Task auto-created: "Send proposal to Maria Rodriguez"`,
    hubspotNote: 'HubSpot tracks email opens and clicks. It does not read email content or classify intent, sentiment, or buying signals.',
  },
  {
    id: 'morning',
    icon: '☀️',
    label: 'Morning Brief',
    frequency: 'Daily at 8am',
    description: 'One message combining your tasks, meetings, and CRM follow-ups. No dashboards to open.',
    signals: [
      'Tasks due today by priority + overdue task count',
      'Today\'s meetings with purpose and Meet link',
      'Stale CRM contacts due for follow-up (by deal value)',
      'One specific highest-leverage action',
    ],
    sampleAlert: `Good morning, Arham 🌅 Thursday, April 10.

📋 Today: 3 tasks due, 2 overdue
📅 10:00am: Reelix kickoff — Meet link ready
📅 3:00pm: Maria Rodriguez intro call

💸 Follow-ups due today:
  • Maria Rodriguez — 14 days stale, $22,000
  • Tom Williams — 20 days stale, $45,000

▶ Highest leverage: Send the Globex proposal now.`,
    hubspotNote: 'HubSpot has a Tasks view showing CRM-only tasks. No cross-module morning brief combining calendar, tasks, and CRM.',
  },
]

const featureMatrix = [
  { feature: 'Pipeline kanban + list view', kobin: '✓', hubspot: '✓' },
  { feature: 'Deal value + close probability', kobin: '✓', hubspot: '✓' },
  { feature: 'Daily proactive risk alerts', kobin: '✓ Auto-delivered', hubspot: '✗ Manual dashboards' },
  { feature: 'Revenue intelligence (3×/week)', kobin: '✓ Inbox message', hubspot: '✗ Not available' },
  { feature: 'Gmail thread intent analysis (AI)', kobin: '✓ All 8 intent types', hubspot: '✗ Opens/clicks only' },
  { feature: 'Auto pipeline stage advancement', kobin: '✓ From email AI', hubspot: '✗ Manual only' },
  { feature: 'Lead score auto-update', kobin: '✓ Per email thread', hubspot: '⚠ Manual or sequences' },
  { feature: 'Auto task creation from emails', kobin: '✓ AI extracts action items', hubspot: '✗ Not available' },
  { feature: 'Auto lead detection (new senders)', kobin: '✓ AI screens relevance', hubspot: '✗ Manual only' },
  { feature: 'Morning brief (tasks + CRM)', kobin: '✓ 8am daily', hubspot: '✗ CRM only, no tasks' },
  { feature: 'Cross-module risk (tasks + CRM)', kobin: '✓ Same data model', hubspot: '✗ CRM-only signals' },
  { feature: 'Team inbox (replaces Slack)', kobin: '✓ Included', hubspot: '✗ Requires Slack +$87/mo' },
  { feature: 'Task management (replaces Asana)', kobin: '✓ Included', hubspot: '✗ Requires Asana +$55/mo' },
  { feature: 'Client portal', kobin: '✓ All plans', hubspot: '✗ Not included' },
  { feature: 'Price (5 seats)', kobin: '$49/mo all-in', hubspot: '$50–90/mo CRM only' },
]

export default function HubSpotAlternativePage() {
  return (
    <>
      <Nav activePage="compare" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="blog-post-layout">
        <div className="blog-post-inner">

          <div className="post-header">
            <div className="post-header-meta">
              <Link href="/compare" className="post-back">← All comparisons</Link>
              <span className="post-category cat-guide">Comparison</span>
            </div>
            <h1 className="post-h1">
              The best HubSpot alternative<br />for agencies in 2026
            </h1>
            <p className="post-subtitle">
              HubSpot is a reactive database — it stores your pipeline and waits for you to open it. Kobin CRM is proactive: daily risk alerts, revenue intelligence, Gmail intent analysis per contact, auto-lead detection, and a morning brief. Here is what the difference looks like in practice.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
              <div className="byline-avatar">AM</div>
              <div className="byline-info">
                <strong>Arham Mirkar</strong>
                <span>Founder, Kobin &nbsp;·&nbsp; April 2026 &nbsp;·&nbsp; Updated monthly</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--parch)', border: '1px solid var(--wire)', borderRadius: '10px', padding: '16px 20px', margin: '0 0 32px', fontSize: '14px', color: 'var(--ghost)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>Direct answer</strong>
            The best HubSpot alternative for agencies is Kobin — the only CRM with a proactive AI intelligence layer. It monitors your pipeline daily, sends risk alerts for blocked work and stale deals, reads every matched Gmail thread for intent and sentiment, auto-advances pipeline stages, and delivers a morning brief combining tasks and CRM follow-ups. From $49/month — less than HubSpot alone.
          </div>

          <div className="post-stat-grid">
            {[
              { num: '$90/mo', label: 'HubSpot Starter for 5 seats', sub: 'CRM only — no inbox, tasks, or portal' },
              { num: '4', label: 'Daily AI intelligence routines', sub: 'Risk · Revenue · Gmail · Morning Brief' },
              { num: '8', label: 'Email intent types classified', sub: 'interested · ready_to_close · objection…' },
              { num: '$0', label: 'Extra cost for CRM in Kobin', sub: 'Included in all plans from $49/mo' },
            ].map(({ num, label, sub }) => (
              <div className="post-stat" key={label}>
                <div className="post-stat-num">{num}</div>
                <div className="post-stat-label">{label}</div>
                <div className="post-stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          <div className="post-body-content">

            <h2 id="reactive-vs-proactive">HubSpot is reactive. Kobin CRM is proactive.</h2>
            <p>
              This is the core architectural difference. HubSpot stores your contacts, deals, and pipeline data — and waits for you to check it. When a $22,000 deal has been sitting in Proposal for 24 days without movement, HubSpot does not tell you. When a task linked to your most important client is blocked, HubSpot has no visibility into that because it is a different tool. When an email from a warm prospect arrived yesterday with buying signals, HubSpot tracks that it was opened — it does not read what it said.
            </p>
            <p>
              Kobin&apos;s CRM operates differently. It runs background intelligence routines continuously. It monitors your deals alongside your task layer and your inbox. When the same client relationship is at risk from both a stale deal and a blocked deliverable simultaneously, Kobin surfaces both in one alert — because they share the same data model.
            </p>

            <div className="post-pull-quote">
              <p>&ldquo;HubSpot knows your pipeline. Kobin watches it. The difference is whether a $45,000 deal goes cold before you notice.&rdquo;</p>
              <cite>— The core argument for proactive CRM intelligence</cite>
            </div>

            <h2 id="four-intelligence-routines">The four AI intelligence routines that run automatically</h2>
            <p>
              Each routine runs on its own schedule and delivers its output directly to your Kobin inbox — no dashboard, no navigation, no remembering to check.
            </p>

            {aiIntelligenceRoutines.map((routine) => (
              <div key={routine.id} style={{ margin: '32px 0', background: '#fff', border: '1px solid var(--wire)', borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--wire)', display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--parch)' }}>
                  <span style={{ fontSize: '22px' }}>{routine.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{routine.label}</h3>
                    <span style={{ fontSize: '11px', color: 'var(--vi)', fontFamily: "'Geist Mono', monospace" }}>{routine.frequency}</span>
                  </div>
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--ghost)', lineHeight: 1.7, marginBottom: '12px' }}>{routine.description}</p>
                  <div style={{ marginBottom: '16px' }}>
                    {routine.signals.map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '5px', fontSize: '12.5px', color: 'var(--ghost)' }}>
                        <span style={{ color: '#0D6B4F', flexShrink: 0 }}>✓</span>{s}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Sample output:</p>
                  <pre style={{ background: '#0E0E0D', borderRadius: '10px', padding: '16px 20px', fontSize: '11.5px', color: '#9C9890', lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: "'Geist Mono', monospace", margin: '0 0 12px' }}>
                    {routine.sampleAlert}
                  </pre>
                  <div style={{ padding: '10px 14px', background: 'rgba(192,59,48,0.04)', border: '1px solid rgba(192,59,48,0.12)', borderRadius: '8px', fontSize: '12px', color: '#C03B30', lineHeight: 1.6 }}>
                    <strong>HubSpot:</strong> {routine.hubspotNote}
                  </div>
                </div>
              </div>
            ))}

            <h2 id="gmail-crm-intelligence">Gmail CRM intelligence: reading the email, not just tracking it</h2>
            <p>
              Connect Gmail once. Kobin automatically matches every incoming and outgoing email thread to your CRM contacts by email address. For each matched thread where a new message has arrived, an AI model reads the full conversation — not just the metadata — and produces a structured analysis.
            </p>
            <p>
              The intent classification distinguishes between eight states: <strong>interested</strong>, <strong>not_interested</strong>, <strong>requesting_info</strong>, <strong>requesting_meeting</strong>, <strong>following_up</strong>, <strong>neutral</strong>, <strong>objection</strong>, and <strong>ready_to_close</strong>. A deal with a &ldquo;ready_to_close&rdquo; intent signal in the last email is very different from one with an &ldquo;objection&rdquo; signal — and Kobin treats them differently in the revenue intelligence output.
            </p>
            <p>
              When the AI detects a strong signal — a prospect asking about contract timelines, referencing internal approval processes, or requesting a proposal — it flags the email as important, sends you a notification in your Kobin inbox, auto-advances the pipeline stage if appropriate, updates the lead score, and creates a follow-up task automatically. You do none of this manually.
            </p>
            <p>
              For emails from unknown senders, the same AI model runs a relevance check: is this a business lead, partner, or investor? If yes, a new contact is auto-created, added to your pipeline, and the email is immediately analyzed. If not (newsletter, automated notification, receipt), it is ignored. Your CRM grows automatically from your inbox.
            </p>

            <h2 id="cross-module-crm">Why cross-module CRM context changes the alert quality</h2>
            <p>
              The risk detection capability is unique to Kobin because no standalone CRM can replicate it. Consider a scenario: you have a $45,000 deal in negotiation that has been stale for 18 days. That alone warrants a risk flag. But if you add that the project delivery for that same client has a blocked task that has been waiting on their sign-off for a week, the risk is not just &ldquo;deal is old&rdquo; — it is &ldquo;relationship is at risk from two directions simultaneously.&rdquo;
            </p>
            <p>
              HubSpot does not know about the blocked task. Asana does not know about the stale deal. Kobin knows about both because they live in the same workspace, linked by the same client record. The morning brief that mentions both tells you more in one notification than a week of checking two separate tools.
            </p>

            <h2 id="comparison">Kobin vs HubSpot: full feature comparison</h2>

            <div className="post-cost-table">
              <div className="cost-table-header" style={{ gridTemplateColumns: '1.8fr 1fr 1fr' }}>
                <span>Feature</span><span>Kobin</span><span>HubSpot Starter</span>
              </div>
              {featureMatrix.map(({ feature, kobin, hubspot }) => (
                <div className="cost-table-row" key={feature} style={{ gridTemplateColumns: '1.8fr 1fr 1fr' }}>
                  <span className="cost-tool">{feature}</span>
                  <span style={{ fontSize: '13px', color: kobin.startsWith('✓') ? '#0D6B4F' : kobin.startsWith('✗') ? '#C03B30' : 'var(--ghost)' }}>{kobin}</span>
                  <span style={{ fontSize: '13px', color: hubspot.startsWith('✓') ? '#0D6B4F' : hubspot.startsWith('✗') ? '#C03B30' : '#C4720A' }}>{hubspot}</span>
                </div>
              ))}
            </div>

            <h2 id="pricing">The real cost: HubSpot stack vs Kobin</h2>
            <div className="post-math-block">
              <div className="math-row"><span>HubSpot Starter (5 seats)</span><span className="math-num negative">$50–90/mo</span></div>
              <div className="math-row"><span>+ Slack Pro (messaging Kobin includes)</span><span className="math-num negative">$87/mo</span></div>
              <div className="math-row"><span>+ Asana Premium (tasks Kobin includes)</span><span className="math-num negative">$55/mo</span></div>
              <div className="math-row"><span>+ Notion Team (docs Kobin includes)</span><span className="math-num negative">$40/mo</span></div>
              <div className="math-row math-total"><span>Full HubSpot stack monthly</span><span className="math-num negative">$232–$272/mo</span></div>
            </div>
            <div className="post-math-block" style={{ marginTop: '12px' }}>
              <div className="math-row math-total">
                <span>Kobin Founder — CRM + AI intelligence + inbox + tasks + portal + vault</span>
                <span className="math-num" style={{ color: '#4DD6A5' }}>$49/mo</span>
              </div>
            </div>

            <h2 id="when-to-use-hubspot">When HubSpot is still the right choice</h2>
            <p>
              HubSpot wins when your agency runs high-volume outbound sequences (50+ emails/day), needs enterprise integrations with Salesforce or Shopify, uses the Marketing Hub for client campaigns, or has a dedicated sales ops administrator managing CRM configuration. Above 25 people with a revenue operations function, HubSpot&apos;s reporting depth and integration breadth are genuinely stronger.
            </p>
            <p>
              For the majority of agencies under 15 people managing ongoing client relationships alongside delivery, Kobin&apos;s proactive intelligence layer — combined with a unified workspace — is a better fit at a fraction of the cost.
            </p>

            <div className="post-cta-block">
              <div className="post-cta-eyebrow">Try the HubSpot alternative</div>
              <h3>A CRM that monitors your pipeline — not a database you check</h3>
              <p>Kobin includes proactive risk detection, revenue intelligence, Gmail intent analysis, auto-lead detection, auto-stage advancement, and a daily morning brief — alongside team inbox, tasks, vault, and client portal. No setup. No CRM admin required.</p>
              <div className="post-cta-savings">
                {[
                  { tool: 'HubSpot', saves: 'replaced · saves ~$90/mo' },
                  { tool: 'Slack', saves: 'replaced · saves ~$87/mo' },
                  { tool: 'Asana', saves: 'replaced · saves ~$55/mo' },
                  { tool: 'Notion', saves: 'replaced · saves ~$40/mo' },
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

            <h2 id="faq">Frequently asked questions</h2>
            <div className="post-faq">
              {[
                {
                  q: 'What is the best HubSpot alternative for agencies?',
                  a: 'Kobin is the best HubSpot alternative for agencies. Unlike HubSpot — a reactive CRM database — Kobin includes a proactive AI intelligence layer: daily risk alerts for stale deals and blocked tasks, revenue intelligence 3× per week, Gmail thread intent analysis classifying 8 intent types, auto pipeline stage advancement, auto lead detection from inbound email, and a morning brief combining tasks and CRM. From $49/month for 5 seats including inbox, tasks, vault, and client portal.',
                },
                {
                  q: 'How does Kobin auto-advance pipeline stages from email?',
                  a: 'When Gmail is connected, Kobin analyzes each matched email thread using AI. If the AI detects a suggested pipeline stage that is forward progression from the current stage — for example, a contact in "new_lead" who just requested a meeting — the stage is automatically updated to "meeting_booked" with the reason logged. The AI never moves a deal backwards unless it detects a "closed_lost" signal. You are notified in your Kobin inbox for each stage change.',
                },
                {
                  q: 'Does Kobin create tasks from emails automatically?',
                  a: 'Yes. When the AI analyzes an email thread and identifies action items in the conversation, it creates tasks automatically. Up to one task per email analysis is created, placed in the Today bucket (if urgency is high) or This Week bucket. The task title is derived from the action item, and the notes reference the email context and contact name. Duplicate tasks are suppressed if a similar task was already created in the last 24 hours.',
                },
                {
                  q: 'Can Kobin auto-detect new leads from my Gmail inbox?',
                  a: 'Yes. When a new email arrives from a sender not in your CRM, Kobin\'s AI screens them for business relevance: is this a potential client, investor, partner, or collaborator? If yes, a new contact is created as a New Lead, tagged as auto-detected, and the email thread is immediately analyzed for intent and sentiment. If the email is a newsletter, receipt, automated notification, or irrelevant, it is ignored.',
                },
                {
                  q: 'What are the 8 email intent types Kobin AI classifies?',
                  a: 'Kobin AI classifies email threads into 8 intent categories: interested (engaged, asking questions), not_interested (declining or unresponsive), requesting_info (asking for more details or pricing), requesting_meeting (asking to schedule a call), following_up (checking in on a previous conversation), neutral (routine communication), objection (raising concerns or hesitations), and ready_to_close (referencing contract, approval, or onboarding timelines). High-signal intents trigger inbox notifications and lead score updates.',
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
            <Link href="/compare/asana-alternative-for-agencies" className="post-nav-btn">
              <span>← Previous</span>
              <strong>Kobin vs Asana</strong>
            </Link>
            <Link href="/compare" className="post-nav-btn" style={{ textAlign: 'right' }}>
              <span>See all →</span>
              <strong>All comparisons</strong>
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}