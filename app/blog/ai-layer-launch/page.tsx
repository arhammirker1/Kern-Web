import Link from 'next/link'
import Nav from '../../../components/Nav'

export const metadata = {
  title: "The AI Layer Is Here: Your Entire Agency, Understood by One Model | Kobin",
  description: 'Kobin\'s AI layer is now live. Ask @AI anything inside any room, or open the global command bar from anywhere. Create tasks, query your pipeline, get meeting briefs — all from one model that sees your full workspace.',
  keywords: ['agency AI assistant', 'AI task management', 'AI command bar', 'agency operating system AI', 'kobin AI layer', '@AI inbox'],
  alternates: { canonical: 'https://www.kobin.team/blog/ai-layer-launch' },
  openGraph: {
    title: "The AI Layer Is Here: Your Entire Agency, Understood by One Model",
    description: 'One model. Every task, project, client, meeting, and file — in context. The Kobin AI layer is live.',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00Z',
    modifiedTime: '2026-04-01T00:00:00Z',
    authors: ['Arham Mirkar'],
    tags: ['AI', 'agency software', 'command bar', 'task management', 'agency operating system'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "The AI Layer Is Here: Your Entire Agency, Understood by One Model",
      description: "Kobin's AI layer gives agency founders a model that sees every task, project, client conversation, file, meeting, and CRM contact in one place — and can act on all of it.",
      author: { '@type': 'Person', name: 'Arham Mirkar' },
      publisher: { '@type': 'Organization', name: 'Kobin', url: 'https://kobin.team' },
      datePublished: '2026-04-01',
      dateModified: '2026-04-01',
      keywords: 'AI agency assistant, AI command bar, @AI inbox, task creation AI, agency operating system',
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kobin.team/blog/ai-layer-launch' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Kobin AI layer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Kobin AI layer is a context-aware AI assistant built into every part of the workspace. It can read tasks, projects, CRM contacts, calendar events, vault files, and chat history — and take actions like creating tasks, updating projects, and surfacing insights — all from a single model with full workspace context.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use @AI in the Kobin inbox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In any project room, group channel, or DM, type @AI followed by your question or instruction. The AI responds inline as a purple-labeled message in the thread, with full context of your project, recent conversation, tasks, and vault files automatically injected.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can the Kobin command bar do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The global AI command bar (⌘K) gives you a persistent, multi-turn chat interface with full workspace access. You can create and update tasks, query your CRM pipeline, check team workload, attach vault files to tasks, and get answers across all modules — without leaving what you\'re doing.',
          },
        },
      ],
    },
  ],
}

export default function AILayerLaunchPost() {
  return (
    <>
      <Nav activePage="blog" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="blog-post-layout">
        <div className="blog-post-inner">

          {/* ── HEADER ── */}
          <header className="post-header">
            <div className="post-header-meta">
              <Link href="/blog" className="post-back">← All posts</Link>
              <span className="post-category cat-build">AI Layer</span>
            </div>
            <h1 className="post-h1">
              The AI Layer Is Here: Your Entire Agency, Understood by One Model
            </h1>
            <p className="post-subtitle">
              For months we said "AI layer — coming soon." Today it ships. Here is exactly what it does, why we built it the way we did, and why fragmented AI tools will never match a model that sees everything in one place.
            </p>
            <div className="post-byline">
              <div className="byline-avatar">AM</div>
              <div className="byline-info">
                <strong>Arham Mirkar</strong>
                <span>Founder, Kobin &nbsp;·&nbsp; April 1, 2026 &nbsp;·&nbsp; 10 min read</span>
              </div>
            </div>
          </header>

          {/* ── HERO STAT BLOCK ── */}
          <div className="post-stat-grid">
            {[
              { num: '2', label: 'Ways to access AI', sub: '@AI in rooms · ⌘K command bar' },
              { num: '8', label: 'Read tools available', sub: 'Tasks, projects, CRM, calendar…' },
              { num: '5', label: 'Action tools available', sub: 'Create, update, delete & more' },
              { num: '0', label: 'Context switching required', sub: 'Full workspace in every response' },
            ].map(({ num, label, sub }) => (
              <div className="post-stat" key={num}>
                <div className="post-stat-num">{num}</div>
                <div className="post-stat-label">{label}</div>
                <div className="post-stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          {/* ── BODY ── */}
          <div className="post-body-content">

            <p>
              Every AI product shipped in the last two years has made the same mistake. A project management tool adds AI that knows about tasks. A chat tool adds AI that knows about messages. A CRM adds AI that knows about contacts. Each one is smart about its own slice of your work — and completely blind to everything else.
            </p>
            <p>
              When you ask Slack&apos;s AI why a client went quiet, it cannot tell you — because the tasks, files, and meeting history that would answer the question live somewhere else. When you ask Asana&apos;s AI to help you prepare for tomorrow&apos;s call, it cannot — because the client conversation and the CRM notes are in different tools.
            </p>
            <p>
              This is the problem we set out to solve before writing a single line of AI code. The result is the Kobin AI layer — and it is unlike anything else in the agency software category.
            </p>

            <h2 id="the-architecture">The architecture decision that changes everything</h2>
            <p>
              We did not add AI features to existing modules. We built a model that has access to the entire workspace data model before it responds to anything.
            </p>
            <p>
              Every time you interact with Kobin AI — whether through <code>@AI</code> in the inbox or the global command bar — the model assembles a live briefing from your workspace. It pulls your active tasks, your project statuses, your upcoming calendar events, your CRM pipeline, your vault files, your recent team messages, and your client history. All of it lands in context before your question is processed.
            </p>
            <p>
              Then, instead of guessing, the model uses tools. It calls <em>get_tasks</em> to fetch exactly the tasks it needs. It calls <em>get_team_workload</em> before suggesting who to assign something to. It calls <em>search_contacts</em> to get a full profile before answering a question about a specific person. This is not a chatbot that makes things up — it is a model with a live, structured read on your entire operation.
            </p>

            <div className="post-pull-quote">
              <p>&ldquo;We built the data model first. The AI was always going to be the last module — because the AI is only as useful as the context it can see.&rdquo;</p>
              <cite>— Arham Mirkar, Founder of Kobin</cite>
            </div>

            <h2 id="ai-in-inbox">@AI in the Inbox</h2>
            <p>
              The first way to access the AI is the most natural: type <code>@AI</code> in any room. Project channels, group chats, DMs — it works everywhere. The AI responds inline as a new message in the thread, clearly labelled with a purple avatar and an "AI · Command Center" tag.
            </p>
            <p>
              What makes this different from every other chat AI is what happens before the model responds. When you type <code>@AI where does this project stand?</code> inside a project room, Kobin automatically injects the full project context: every active task, their statuses and priorities, recent messages from the thread, any vault files linked to the project, and the project&apos;s timeline. The model does not need to be told any of this. It already knows.
            </p>

            <p>Here is what you can ask, and what the AI does with it:</p>

            <div className="post-cost-table">
              <div className="cost-table-header" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                <span>You type</span>
                <span>What the AI does</span>
              </div>
              {[
                ['@AI where does this project stand?', 'Returns a 3-sentence operational summary: task completion %, overdue items, last client message, next meeting date.'],
                ['@AI draft a client update for this week', 'Writes a professional progress update based on completed tasks, uploaded deliverables, and upcoming milestones. You edit and send.'],
                ['@AI what is waiting on the client?', 'Surfaces all tasks flagged blocked or awaiting approval, plus unanswered messages — clean list with context and days waiting.'],
                ['@AI prepare me for tomorrow\'s call', 'Client profile, open issues, last conversation summary, pending deliverables, and three suggested talking points.'],
                ['@AI turn this message into a task', 'Pre-fills the entire task form: title, priority, suggested assignee (based on workload), suggested due date. One tap to confirm.'],
                ['@AI is this project on track?', 'Compares task completion rate against the project timeline. Flags if current pace will miss the deadline.'],
                ['@AI summarise this week\'s activity', 'Tasks completed, messages exchanged, files uploaded, meetings held — a weekly digest in plain language.'],
              ].map(([q, a]) => (
                <div className="cost-table-row" key={q as string} style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                  <span className="cost-tool" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12 }}>{q as string}</span>
                  <span className="cost-replaces">{a as string}</span>
                </div>
              ))}
            </div>

            <p>
              Responses stream in real time. There is a blinking cursor while the model is thinking. And unlike other inline AI tools, the model&apos;s responses are saved as messages in the thread — so your whole team can see what was asked and what was answered.
            </p>

            <h2 id="command-bar">The Global AI Command Bar (⌘K)</h2>
            <p>
              The second entry point is the command bar: press <code>⌘K</code> (or <code>Ctrl+K</code>) from anywhere in Kobin to open a floating AI panel. Unlike <code>@AI</code> in rooms, which is scoped to a single project or conversation, the command bar has full workspace access — every project, every client, every task across all time horizons, the complete CRM, the entire calendar, all vault files.
            </p>
            <p>
              The command bar also keeps a persistent chat history. Every conversation is saved, titled, and listed in the sidebar. You can pick up where you left off, review what the AI told you last week, or delete sessions you no longer need. It is a proper interface, not a modal that vanishes when you close it.
            </p>
            <p>
              Here is what you can ask the command bar that you cannot reasonably ask a per-module AI:
            </p>

            <div className="post-cost-table">
              <div className="cost-table-header" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                <span>You ask</span>
                <span>What the AI does</span>
              </div>
              {[
                ['Which clients have gone quiet this week?', 'Scans CRM contact timelines — surfaces anyone in an active deal who hasn\'t had an email or calendar interaction in 5+ days.'],
                ['What do I have today?', "Merges today's calendar events with the Today task bucket — a prioritised daily briefing ordered by urgency."],
                ['Show me everything overdue', 'All tasks with passed due dates across every project — grouped by client, with days overdue and assignee.'],
                ['Which projects are at risk?', 'Analyses completion rates vs timelines — flags any project where current pace misses the end date.'],
                ['Assign the API integration task to someone free', 'Fetches team workload, identifies the person with the lightest load, assigns the task and confirms.'],
                ['Create a task for the brand refresh project due Friday', 'Resolves the project name, sets the due date, picks the right bucket, and creates the task in one shot.'],
                ['Who needs a follow-up?', 'CRM contacts stale for 14+ days, sorted by deal value. Direct answer, no navigation required.'],
              ].map(([q, a]) => (
                <div className="cost-table-row" key={q as string} style={{ gridTemplateColumns: '1fr 1.5fr' }}>
                  <span className="cost-tool" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12 }}>{q as string}</span>
                  <span className="cost-replaces">{a as string}</span>
                </div>
              ))}
            </div>

            <h2 id="actions">The AI can act, not just answer</h2>
            <p>
              Most AI tools respond. Kobin AI responds <em>and</em> executes.
            </p>
            <p>
              When you ask it to create a task, it creates the task. When you ask it to assign something to the least busy team member, it checks workload, resolves the name, and assigns it. When you ask it to attach vault files to a task, it fuzzy-matches the file titles, resolves which vault folder they live in, and attaches them — all in a single action, confirmed with a green success card below the AI&apos;s response.
            </p>
            <p>
              The action layer supports five operations today, with more on the way:
            </p>

            <ul className="post-list">
              <li><strong>Create task</strong> — Full task creation with title, notes, priority, status, due date, assignee (by name), project (by name), vault file attachments, external links, and deliverable requirements. Everything in one call, nothing left blank.</li>
              <li><strong>Update task</strong> — Change any field on an existing task, found by fuzzy title match. Add vault files, add links, reassign, reschedule — partial updates work fine.</li>
              <li><strong>Delete task</strong> — Finds the task by title, shows a confirmation card in the UI, deletes only after you confirm. No accidental deletions.</li>
              <li><strong>Create project</strong> — New project with name, description, priority, status, start date, and end date.</li>
              <li><strong>Update project</strong> — Update any field on an existing project found by fuzzy name match.</li>
            </ul>

            <p>
              Every action is idempotent — the AI will never create the same task twice even if you ask the same question twice. And every action is transparent: the response always tells you exactly what was created or changed.
            </p>

            <h2 id="the-read-tools">Eight read tools. Every layer of your workspace.</h2>
            <p>
              The AI does not dump your entire workspace into a prompt and hope for the best. It uses structured read tools — functions it can call to fetch exactly the data it needs, when it needs it. This keeps responses precise and prevents hallucination from stale or irrelevant context.
            </p>
            <p>
              The eight read tools available today cover every major module:
            </p>

            <ul className="post-list">
              <li><strong>get_workspace_overview</strong> — High-level stats across all modules: task counts, overdue figures, pipeline value, team count, upcoming events this week.</li>
              <li><strong>get_tasks</strong> — Fetch tasks with filter presets: all active, overdue, blocked, due today, due this week, recently completed. Can filter by project name or assignee name.</li>
              <li><strong>get_projects</strong> — All projects with task completion stats, priorities, and deadlines. Filterable by status or name.</li>
              <li><strong>get_team_workload</strong> — Every team member with their active task count and a workload label (FREE / LIGHT / MODERATE / HEAVY). Used automatically before assigning tasks.</li>
              <li><strong>get_crm_pipeline</strong> — Full pipeline grouped by stage, with deal values, weighted values, days in stage, and stale flags. Can include clients.</li>
              <li><strong>get_calendar</strong> — Upcoming or recent events with flexible range presets: today, this week, next 7 days, past 30 days.</li>
              <li><strong>get_vault_files</strong> — Files and documents from the project vault, filterable by project or searchable by title. Used to resolve file names before attaching them to tasks.</li>
              <li><strong>search_contacts</strong> — Full contact profile by name: pipeline stage, deal value, upcoming meetings, recent past meetings with outcomes, recent email threads.</li>
            </ul>

            <h2 id="what-makes-it-different">What makes this fundamentally different from every other AI tool</h2>
            <p>
              The question we get most often is: "How is this different from ChatGPT or Claude?"
            </p>
            <p>
              The answer is context. Generic AI models know nothing about your agency. You would have to paste in your tasks, your client list, your pipeline, your calendar, and your messages every single time — and even then, the model only knows what you copy-pasted, which is always a fraction of what actually matters.
            </p>
            <p>
              Kobin AI is pre-loaded with your live workspace. Every response is grounded in real data from your Supabase instance, not from training data or hallucinated guesses. When it tells you a project is at risk, it is because it pulled the actual task completion rate and compared it to the actual end date. When it suggests assigning to a specific team member, it is because it fetched their real current workload.
            </p>

            <div className="post-pull-quote">
              <p>&ldquo;The other tools add AI. We built AI into the foundation. Every module was designed from day one to be readable by the model.&rdquo;</p>
              <cite>— Arham Mirkar, Kobin</cite>
            </div>

            <p>
              The second difference is multi-step reasoning. A simple AI assistant can answer "what tasks are overdue?" in one step. But answering "assign the most urgent overdue task to whoever has the lightest workload and set the due date to end of week" requires the model to first fetch overdue tasks, then fetch team workload, then resolve names, then create the update — all in sequence, with the output of each step informing the next. Kobin AI does this natively, using a structured tool loop that runs up to four reasoning steps before generating a response.
            </p>

            <h2 id="whats-next">What we are building next</h2>
            <p>
              The AI layer ships today with task and project actions. The modules coming next are already in development:
            </p>

            <ul className="post-list">
              <li><strong>@AI draft a follow-up to [contact]</strong> — Pull their full CRM profile, last email thread, and meeting outcomes, then draft the message in context.</li>
              <li><strong>@AI schedule a meeting with [client]</strong> — Find a free slot on your calendar, create the event, send the invite card in chat.</li>
              <li><strong>Daily morning brief</strong> — A push notification every morning at 8am: overdue tasks, today&apos;s meetings, clients awaiting response, projects needing attention, and quick wins.</li>
              <li><strong>Pre-meeting brief</strong> — 10 minutes before every calendar event: client profile, last conversation summary, open tasks, suggested talking points.</li>
              <li><strong>Client silence detection</strong> — Background scan every 6 hours. If a client with open tasks hasn&apos;t replied in 4+ days, the AI drafts a follow-up in your voice for one-tap review.</li>
              <li><strong>Weekly client report draft</strong> — Every Friday at 5pm, a draft report per active client: work completed, project status, pending client actions, next week&apos;s focus.</li>
            </ul>

            <div className="post-cta-block">
              <div className="post-cta-eyebrow">Try it now</div>
              <h3>The AI layer is live for all Kobin users</h3>
              <p>
                If you&apos;re already on Kobin, open any inbox room and type <code>@AI</code> — or press <code>⌘K</code> from anywhere. If you&apos;re not on Kobin yet, join the waitlist and get access to the full workspace including the AI layer from day one.
              </p>
              <div className="post-cta-savings">
                {[
                  { tool: '@AI in rooms', saves: 'Full project context, inline' },
                  { tool: '⌘K command bar', saves: 'Full workspace, persistent sessions' },
                  { tool: 'Create tasks', saves: 'From chat, in one call' },
                  { tool: 'Team workload', saves: 'Auto-checked before assigning' },
                  { tool: 'Vault files', saves: 'Fuzzy-matched and attached' },
                ].map(({ tool, saves }) => (
                  <div className="cta-saving" key={tool}>
                    <span className="cta-tool">{tool}</span>
                    <span className="cta-saves">{saves}</span>
                  </div>
                ))}
              </div>
              <Link href="/#waitlist" className="post-cta-btn">Join the waitlist →</Link>
              <p className="post-cta-sub">No credit card. Full access from day one.</p>
            </div>

            {/* ── FAQ ── */}
            <h2 id="faq">Frequently asked questions</h2>

            <div className="post-faq">
              {[
                {
                  q: 'Which AI model powers Kobin AI?',
                  a: 'Kobin AI uses Llama 4 Scout (17B) hosted on Groq — giving it extremely fast response times (typically under 2 seconds for simple queries, under 5 for multi-step tool calls). No API key required to use it. Founders can also connect their own Anthropic, OpenAI, or Google API key to use Claude, GPT-4o, or Gemini instead.',
                },
                {
                  q: 'Does the AI have access to all my data?',
                  a: 'The AI operates with the same permissions as the logged-in user. If you are the founder, it can see everything. If you are a team member, it respects your permission scope. Data is never sent to external AI providers in a way that could be used for training — all requests use API calls with standard data processing agreements.',
                },
                {
                  q: 'Can the AI make mistakes or create duplicate tasks?',
                  a: 'The AI has built-in deduplication guards — it will not call create_task twice for the same request. For destructive actions like task deletion, the AI returns a confirmation card and waits for you to click "Confirm Delete" before executing. Read operations (answering questions) never modify any data.',
                },
                {
                  q: 'How does @AI know which project I am asking about?',
                  a: 'When you use @AI in a project room, the room\'s project_id is automatically passed to the AI. It fetches that specific project\'s tasks, vault files, and recent messages. In the global command bar, you can specify project names in your question — the AI will fuzzy-match the name to the correct project.',
                },
                {
                  q: 'Will the AI get more capable over time?',
                  a: 'Yes. The read tools and action tools are a foundation. Each new Kobin module we ship will add corresponding AI tools. The daily brief, pre-meeting brief, and client silence detection are the next three features in the pipeline. The architecture is designed for this — each new module simply adds tools the model can call.',
                },
              ].map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary className="faq-q">{q}</summary>
                  <p className="faq-a">{a}</p>
                </details>
              ))}
            </div>

          </div>

          {/* ── POST FOOTER NAV ── */}
          <div className="post-footer-nav">
            <Link href="/blog" className="post-nav-btn">
              <span>← Back to</span>
              <strong>All posts</strong>
            </Link>
            <Link href="/docs" className="post-nav-btn" style={{ textAlign: 'right' }}>
              <span>Read the →</span>
              <strong>Documentation</strong>
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}