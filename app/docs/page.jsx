'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'

export default function DocsPage() {
  useEffect(() => {
    const links = document.querySelectorAll('.sidebar-link[href^="#"]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'))
            const link = document.querySelector(`.sidebar-link[href="#${e.target.id}"]`)
            if (link) link.classList.add('active')
          }
        })
      },
      { threshold: 0.3, rootMargin: '-56px 0px -70% 0px' }
    )
    document.querySelectorAll('[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav activePage="docs" />

      <div className="docs-layout">
        <aside className="docs-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-section-label">Getting started</div>
            <a href="#overview" className="sidebar-link active">Overview</a>
            <a href="#quickstart" className="sidebar-link">Quick start</a>
            <a href="#workspace" className="sidebar-link">Your workspace</a>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-section-label">Core modules</div>
            <a href="#inbox" className="sidebar-link">Inbox</a>
            <a href="#tasks" className="sidebar-link">Tasks &amp; Projects</a>
            <a href="#calendar" className="sidebar-link">Calendar</a>
            <a href="#vault" className="sidebar-link">Vault</a>
            <a href="#crm" className="sidebar-link">CRM</a>
            <a href="#linkedin" className="sidebar-link">LinkedIn Studio</a>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-section-label">Team &amp; clients</div>
            <a href="#team" className="sidebar-link">Team management</a>
            <a href="#permissions" className="sidebar-link">Permissions</a>
            <a href="#client-portal" className="sidebar-link">Client portal</a>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-section-label">Integrations</div>
            <a href="#google" className="sidebar-link">Google Drive</a>
            <a href="#google-calendar" className="sidebar-link">Google Calendar</a>
            <a href="#push" className="sidebar-link">Push notifications</a>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-section-label">AI Layer</div>
            <a href="#ai" className="sidebar-link">
              AI overview <span className="badge badge-vi" style={{ marginLeft: '6px' }}>New</span>
            </a>
            <a href="#ai-inbox" className="sidebar-link">@AI in Inbox</a>
            <a href="#ai-command" className="sidebar-link">Command bar</a>
            <a href="#ai-briefs" className="sidebar-link">Daily &amp; meeting briefs</a>
            <a href="#ai-tasks" className="sidebar-link">Task intelligence</a>
            <a href="#ai-automations" className="sidebar-link">Automations</a>
          </div>
        </aside>

        <main className="docs-content" id="overview">
          <div className="docs-breadcrumb">
            <Link href="/">kobin</Link>
            <span>›</span>
            <span>docs</span>
            <span>›</span>
            <span>overview</span>
          </div>

          <div className="doc-hero">
            <div className="doc-eyebrow">Documentation</div>
            <h1 className="doc-h1">Welcome to<br />Kobin.</h1>
            <p className="doc-lead">Kobin is your agency operating system — a single workspace that replaces Slack, Notion, HubSpot, Linear, and Buffer. This guide gets you from zero to fully set up.</p>
          </div>

          <div className="doc-callout">
            <div className="doc-callout-icon">⚡</div>
            <p><strong>Early access:</strong> Kobin is currently in closed beta. Join the waitlist at <Link href="/#waitlist" style={{ color: 'var(--vi)' }}>kobin.app</Link> to get access when your spot opens up.</p>
          </div>

          {/* ── QUICK START ── */}
          <h2 className="doc-h2" id="quickstart">Quick start</h2>
          <p className="doc-p">From signup to your first message in under 5 minutes.</p>

          <div className="doc-steps">
            {[
              { title: 'Create your workspace', desc: 'Sign up with your email. Your workspace is created instantly — no credit card needed for the trial.' },
              { title: 'Connect Google Drive', desc: 'Go to Settings → Integrations → Connect Google. A "Vault" folder is auto-created in your Drive. All files stay in your account.' },
              { title: 'Invite your team', desc: "Go to Team → Add Member. Set their role, permissions, and credentials. They're ready to log in immediately — no invite email flow needed." },
              { title: 'Create your first project', desc: 'Projects automatically get a dedicated chat room, a Vault folder structure, and can be linked to a client portal.' },
            ].map(({ title, desc }, i) => (
              <div className="doc-step" key={i}>
                <div className="doc-step-num">{i + 1}</div>
                <div className="doc-step-body"><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          {/* ── MODULE CARDS ── */}
          <h2 className="doc-h2">Explore the modules</h2>
          <p className="doc-p">Command Center has 8 core modules. Click any to jump to its documentation.</p>

          <div className="feature-cards">
            {[
              { href: '#inbox', title: '💬 Real-Time Inbox', desc: 'Project channels, group chats, DMs. File attachments, replies, forwards, and @AI mentions.' },
              { href: '#tasks', title: '✅ Tasks & Projects', desc: '4 time-horizon buckets. Priority sorting, team assignment, deliverable requirements, and analytics.' },
              { href: '#vault', title: '🗄️ Vault', desc: 'Google Drive-backed. Internal docs, client uploads, deliverables — role-scoped.' },
              { href: '#client-portal', title: '🏢 Client Portal', desc: 'White-label scoped workspace per client. Tasks, files, inbox, calendar — one click to spin up.' },
              { href: '#crm', title: '🤝 CRM', desc: 'Track leads, investors, partners. Log outcomes, set follow-up reminders, tag and filter.' },
              { href: '#calendar', title: '📅 Calendar', desc: 'Day / Week / Month. Google Meet auto-creation. Two-stage meeting reminders.' },
              { href: '#linkedin', title: '✍️ LinkedIn Studio', desc: 'Draft, schedule, and track LinkedIn posts. Impressions and engagement per post.' },
              { href: '#ai', title: '🤖 AI Layer', desc: 'Groq-powered (Llama 3.3 70B) intelligence built into the inbox. @AI mentions with real-time streaming, full workspace context injection, and a roadmap through command bar, briefs, and automations.' },
            ].map(({ href, title, desc }) => (
              <a className="feature-card" href={href} key={href}>
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="feature-card-arrow"><span>Read docs →</span></div>
              </a>
            ))}
          </div>

          {/* ── PERMISSION SYSTEM ── */}
          <h2 className="doc-h2" id="permissions">Permission system</h2>
          <p className="doc-p">Kobin uses a 3-tier user model with 12 granular permission toggles per team member.</p>

          <table className="doc-table">
            <thead>
              <tr>
                <th>User type</th>
                <th>Access level</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Founder</td>
                <td><span className="badge badge-vi">Full access</span></td>
                <td>Owns the workspace. Can create teams, clients, and projects.</td>
              </tr>
              <tr>
                <td>Team member</td>
                <td><span className="badge badge-am">Configurable</span></td>
                <td>12 permission toggles. Changes take effect immediately without a logout.</td>
              </tr>
              <tr>
                <td>Client</td>
                <td><span className="badge badge-gr">Portal-scoped</span></td>
                <td>Sees only their project data. Optionally can create tasks.</td>
              </tr>
            </tbody>
          </table>

          <div className="doc-callout" style={{ background: 'rgba(13,107,79,0.05)', borderColor: 'rgba(13,107,79,0.2)' }}>
            <div className="doc-callout-icon">💡</div>
            <p><strong>Permission matrix:</strong> View Tasks · Perform Tasks · Manage Tasks · View Calendar · View Projects · Create Projects · View Vault · View LinkedIn · View Relationships · Access Clients · Access Inbox · View Analytics. Each toggle is independently configurable per team member.</p>
          </div>

          {/* ── INBOX ── */}
          <h2 className="doc-h2" id="inbox">Inbox — real-time messaging</h2>
          <p className="doc-p">The inbox uses Supabase Realtime WebSocket channels. Each room maintains its own subscription — switching rooms tears down the old channel and creates a new one.</p>

          <h3 className="doc-h3">Room types</h3>
          <p className="doc-p">There are three room types: <strong>Project</strong> (auto-created when you create a project, all team members added automatically), <strong>Group</strong> (custom channels you create), and <strong>Direct</strong> (1-on-1 DMs — a founder-client DM is pre-created the moment a client gets portal access).</p>

          <h3 className="doc-h3">Messaging features</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Feature</th><th>How it works</th></tr>
            </thead>
            <tbody>
              {[
                ['Reply', 'Reply to any specific message — original appears as a quoted preview above the reply bubble.'],
                ['Edit', 'Edit any message you sent. The input bar pre-fills with original content. An Edited label appears after saving.'],
                ['Forward', 'Forward any message to any other room via a room picker dialog.'],
                ['Unsend', 'Permanently delete your own messages for all participants.'],
                ['File attachments', 'Attach images, PDFs, Office docs, CSVs, and ZIP files. Images open in a full-screen lightbox with download.'],
                ['Unread badges', 'Unread counts shown on each room, tracked via last_read_at timestamp per user per room.'],
                ['@AI mentions', 'Type @AI in any room to get an AI response inline — full project and conversation context injected automatically.'],
              ].map(([f, d]) => (
                <tr key={f}><td>{f}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="doc-h3">Keyboard shortcuts</h3>
          <div className="doc-code">
            <div className="doc-code-header">
              <span className="doc-code-lang">Message input</span>
            </div>
            <code>{`/task [search query]     → opens task picker
@name                  → opens mention picker
@AI                    → triggers AI response in thread
Shift+Enter            → new line
Enter                  → send message`}</code>
          </div>

          <h3 className="doc-h3">Performance</h3>
          <p className="doc-p">Room list loads with 5 total queries regardless of how many rooms exist. Messages load the last 20 first — older messages load on scroll-up demand with no flash to top. An animated skeleton UI shows while rooms are loading for near-instant perceived performance.</p>

          {/* ── TASKS ── */}
          <h2 className="doc-h2" id="tasks">Tasks &amp; Projects</h2>
          <p className="doc-p">The task system is the operational backbone of Command Center. Tasks are organized into four time-horizon buckets that map to how founders actually think about work.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Bucket</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              {[
                ['Today', 'Immediate priorities that must be completed today. Shown first, always visible.'],
                ['This Week', 'Short-horizon work with a deadline within the current week.'],
                ['Delegated', "Work assigned to team members. Founders monitor progress without micromanaging."],
                ['Backlog', 'Future work, ideas, and long-term items. Visible but not cluttering the active view.'],
              ].map(([b, d]) => (
                <tr key={b}><td>{b}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="doc-h3">Task features</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Feature</th><th>How it works</th></tr>
            </thead>
            <tbody>
              {[
                ['Priority sorting', 'Tasks sort automatically: Urgent → High → Medium → Low, then by due date within each tier. No manual dragging required.'],
                ['Team assignment', 'Assign tasks to any active team member. Assignee receives a browser push notification within 10 seconds. Task appears in their Delegated bucket immediately.'],
                ['Project linking', 'Every task can be linked to a project. Linked tasks are automatically visible in the client portal for the relevant project.'],
                ['Resources', "Attach unlimited URLs to any task as named resources (e.g., 'Brand Guidelines → https://...'). Resources display inline on the task card."],
                ['Comments & threads', 'Every task has an inline comment thread. All users with task access can comment. Real-time — no page refresh needed.'],
                ['Project filter', 'A pill-bar above the buckets filters all tasks by project across all time horizons simultaneously.'],
                ['Client task creation', 'Clients with permission can create tasks from their portal. Tasks auto-link to their project and immediately appear in the founder\'s workspace.'],
                ['Deliverable requirement', 'Any task can require a deliverable on completion. Marking it complete triggers a submission modal — the file is auto-saved to the project\'s Deliverables vault folder. Tasks cannot be marked complete without submitting or explicitly skipping.'],
                ['Analytics bar', 'A collapsible panel showing Completion Rate, Volume, Overdue count, Blocked count, Status Breakdown, Team Workload, and Priority Breakdown. Toggled via the Analytics button in the header.'],
              ].map(([f, d]) => (
                <tr key={f}><td>{f}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="doc-h3">Task permission tiers</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Permission</th><th>View</th><th>Comment</th><th>Update own status</th><th>Create / Edit / Assign</th></tr>
            </thead>
            <tbody>
              {[
                ['View Tasks', '✓', '✓', '—', '—'],
                ['Perform Tasks', '✓', '✓', '✓ (assigned only)', '—'],
                ['Manage Tasks', '✓', '✓', '✓', '✓'],
                ['Founder', '✓', '✓', '✓', '✓'],
              ].map(([p, ...cols]) => (
                <tr key={p}><td>{p}</td>{cols.map((c, i) => <td key={i}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>

          {/* ── CALENDAR ── */}
          <h2 className="doc-h2" id="calendar">Calendar</h2>
          <p className="doc-p">The calendar module provides a complete scheduling interface with three view modes, Google Meet integration, and an intelligent two-stage reminder system.</p>

          <h3 className="doc-h3">Views &amp; navigation</h3>
          <p className="doc-p">Day, Week, and Month views with a live red line in Day and Week views showing the current time. Click any time slot to open a pre-filled event creation dialog — event type selected via pill tabs, date and times on a single row, workspace members shown as tap-to-toggle avatar chips. The entire flow from opening the dialog to scheduling takes under 10 seconds.</p>

          <h3 className="doc-h3">Event types</h3>
          <p className="doc-p"><strong>Internal</strong> — team meetings, standups, planning sessions. <strong>Deal</strong> — client calls, sales meetings, demos. <strong>Hiring</strong> — candidate interviews, HR discussions.</p>

          <h3 className="doc-h3">Google Meet integration</h3>
          <p className="doc-p">When Google is connected, the event dialog shows a toggle for auto-generated Meet links. When enabled, a Google Calendar event is created, a unique Meet link is generated and attached, all listed attendees receive calendar invites automatically, and the Meet link is saved on the event card for one-click joining.</p>

          <h3 className="doc-h3">Meeting reminder system</h3>
          <table className="doc-table">
            <thead>
              <tr><th>When</th><th>What happens</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>5 minutes before</td>
                <td>Slide-in toast notification in the top-right corner with the meeting title and a join button.</td>
              </tr>
              <tr>
                <td>1 minute before</td>
                <td>Full-screen modal interrupts the user. Simultaneously triggers a Browser Notification API push — visible even when the tab is not in focus.</td>
              </tr>
              <tr>
                <td>10 minutes before</td>
                <td>AI-generated pre-meeting brief delivered as a full-screen notification — client profile, open tasks, last conversation summary, and suggested talking points.</td>
              </tr>
            </tbody>
          </table>

          {/* ── VAULT ── */}
          <h2 className="doc-h2" id="vault">Vault</h2>
          <p className="doc-p">Vault is Command Center&apos;s project knowledge base — a structured file and document management system backed by Google Drive. It replaces unorganized Drive folders with a clear hierarchy, role-scoped access, and mandatory metadata on every item.</p>

          <h3 className="doc-h3">Folder hierarchy</h3>
          <div className="doc-code">
            <div className="doc-code-header"><span className="doc-code-lang">Drive structure</span></div>
            <code>{`Vault/                        ← root folder, created on first Google connect
  └── Project Name/             ← auto-created when project is created
        ├── Internal Documents  ← founder + team only, hidden from clients
        ├── Client Uploads      ← clients can view and upload
        └── Deliverables        ← clients view-only, team can upload`}</code>
          </div>

          <h3 className="doc-h3">Item types</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Type</th><th>Description</th><th>Required fields</th></tr>
            </thead>
            <tbody>
              {[
                ['File Upload', 'Any file (PDF, image, Office doc) uploaded to the correct Drive folder via the app.', 'Title, Description, Document Type'],
                ['Link', 'URL to external resources — Google Sheets, Figma, Notion, Drive folders, etc.', 'Title, Description, URL'],
                ['Note', 'Rich text note for brand guidelines, credentials, instructions, or any context.', 'Title, Description, Content'],
              ].map(([t, d, r]) => (
                <tr key={t}><td>{t}</td><td>{d}</td><td>{r}</td></tr>
              ))}
            </tbody>
          </table>

          <p className="doc-p">Every item must be tagged with a <strong>Document Type</strong>: Content · Deliverable · Report · Contract · Brief · Design Asset · Spreadsheet · Presentation · Reference · Other.</p>

          <h3 className="doc-h3">Access control by role</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Folder</th><th>Founder</th><th>Team member</th><th>Client</th></tr>
            </thead>
            <tbody>
              {[
                ['Internal Documents', '✓ Full access', '✓ Full access', '— Hidden'],
                ['Client Uploads', '✓ Full access', '✓ Full access', '✓ View + Upload'],
                ['Deliverables', '✓ Full access', '✓ Full access', '✓ View only'],
              ].map(([f, ...cols]) => (
                <tr key={f}><td>{f}</td>{cols.map((c, i) => <td key={i}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>

          {/* ── CRM ── */}
          <h2 className="doc-h2" id="crm">CRM / Relationships</h2>
          <p className="doc-p">The Relationships module is a lightweight CRM built for founders who maintain diverse professional networks without needing a full HubSpot setup.</p>

          <h3 className="doc-h3">Contact types</h3>
          <p className="doc-p"><strong>Leads</strong> — potential clients or sales opportunities. <strong>Investors</strong> — active investors, angels, or VCs. <strong>Partners</strong> — integration partners, collaborators, or strategic allies. <strong>Talent</strong> — potential hires, contractors, or freelancers. <strong>Advisors</strong> — mentors, board members, or domain experts.</p>

          <h3 className="doc-h3">Contact features</h3>
          <p className="doc-p">Flexible tagging for custom categorization · LinkedIn URL field for quick profile access · Meeting outcome tracking — log the result of every interaction · Meeting link field for ongoing relationships with scheduled calls · Notes for context, next steps, and background information · Searchable and filterable by type, tag, and name.</p>

          {/* ── LINKEDIN ── */}
          <h2 className="doc-h2" id="linkedin">LinkedIn Studio</h2>
          <p className="doc-p">The LinkedIn Studio gives founders a dedicated space to draft, review, and track LinkedIn content without switching tools or losing posts in a notes app.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Feature</th><th>Details</th></tr>
            </thead>
            <tbody>
              {[
                ['Post drafting', 'Draft and save LinkedIn posts directly within Command Center.'],
                ['Status tracking', 'Track every post as Draft · Scheduled · Published.'],
                ['Engagement metrics', 'Impressions and engagement count per post.'],
                ['Content library', 'Every post saved for reference and repurposing.'],
              ].map(([f, d]) => (
                <tr key={f}><td>{f}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── TEAM MANAGEMENT ── */}
          <h2 className="doc-h2" id="team">Team management</h2>
          <p className="doc-p">The team module lets founders build and manage their workspace with fine-grained control over what each person can see and do.</p>

          <h3 className="doc-h3">Creating team members</h3>
          <p className="doc-p">Founder sets name, email, position, and all permission flags in one form. A Supabase auth account is created server-side using the Admin API — no invite email flow needed. Credentials are provided directly to the team member for immediate access.</p>

          <h3 className="doc-h3">Account lifecycle</h3>
          <p className="doc-p"><strong>Deactivate</strong> — sets is_active=false. Signed out on next page load. All data preserved. <strong>Reactivate</strong> — flip is_active back to true. Immediate re-access. <strong>Delete</strong> — permanently removes the auth account and team member record. <strong>Edit permissions</strong> — changes take effect immediately without requiring a logout.</p>

          {/* ── CLIENT PORTAL ── */}
          <h2 className="doc-h2" id="client-portal">Client portal</h2>
          <p className="doc-p">The Client Portal is a branded, role-scoped workspace given to each client. It replaces back-and-forth email updates, scattered file requests, and missed meeting links with one organized place.</p>

          <h3 className="doc-h3">Portal activation</h3>
          <div className="doc-steps">
            {[
              { title: 'Add the client', desc: 'Fill in client email and optional permissions from the Clients module. One click.' },
              { title: 'Account auto-created', desc: "A Supabase auth account is created server-side. Client is automatically added to their project's chat room." },
              { title: 'DM pre-created', desc: "A direct message between founder and client is pre-created — the conversation is ready before they even log in." },
              { title: 'Immediate access', desc: 'Client receives login credentials and can access the portal right away.' },
            ].map(({ title, desc }, i) => (
              <div className="doc-step" key={i}>
                <div className="doc-step-num">{i + 1}</div>
                <div className="doc-step-body"><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <h3 className="doc-h3">Portal modules</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Module</th><th>What the client sees</th></tr>
            </thead>
            <tbody>
              {[
                ['Dashboard', 'Top 3 upcoming priorities (merged from meetings + tasks), execution pipeline, performance metrics, and upcoming meetings with one-click Meet links.'],
                ['Inbox', 'Full messaging experience — project room and DMs. Can start new DMs with any team member. Full message history and file attachments.'],
                ['Calendar', 'All scheduled meetings linked to their account. Time, purpose, and a direct Meet link button per event.'],
                ['Tasks', 'Full task creation form (minus Assign and Link to Project). Resources, notes, and inline comment threads. Client-created tasks appear in the founder\'s workspace automatically.'],
                ['Vault', 'Client Uploads (can upload) and Deliverables (view-only) for their project. Internal Documents are hidden.'],
                ['Settings', 'Profile editing and Google Meet connection. Drive setup is hidden — clients only connect Google for Meet links.'],
              ].map(([m, d]) => (
                <tr key={m}><td>{m}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── GOOGLE DRIVE ── */}
          <h2 className="doc-h2" id="google">Google Drive integration</h2>
          <p className="doc-p">Kobin stores all Vault files directly in your Google Drive account using the <code style={{ background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono',monospace", fontSize: '13px' }}>drive.file</code> scope — only files the app creates, never your existing Drive content. We never hold your files.</p>

          <div className="doc-steps">
            {[
              { title: 'Connect your Google account', desc: 'Settings → Integrations → Connect Google. Kobin requests Drive and Calendar permissions.' },
              { title: 'Vault folder auto-created', desc: 'A root "Vault" folder is created in your Drive. All project subfolders live inside it.' },
              { title: 'Project folders created automatically', desc: 'Creating a project auto-creates 3 subfolders: Internal Documents (team only), Client Uploads, and Deliverables (client-visible).' },
            ].map(({ title, desc }, i) => (
              <div className="doc-step" key={i}>
                <div className="doc-step-num">{i + 1}</div>
                <div className="doc-step-body"><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <h3 className="doc-h3">OAuth scopes</h3>
          <table className="doc-table">
            <thead>
              <tr><th>Scope</th><th>What it enables</th><th>Why not broader</th></tr>
            </thead>
            <tbody>
              {[
                ['calendar.events', 'Create Calendar events and Meet links', 'Events only — no read access to existing calendar'],
                ['drive.file', 'Upload to Drive, create folders', "Only app-created files — no access to user's existing Drive"],
                ['userinfo.email', 'Identify the connected account', 'Minimal identity verification only'],
              ].map(([s, e, w]) => (
                <tr key={s}><td><code style={{ fontFamily: "'Geist Mono',monospace", fontSize: '12px' }}>{s}</code></td><td>{e}</td><td>{w}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── GOOGLE CALENDAR ── */}
          <h2 className="doc-h2" id="google-calendar">Google Calendar integration</h2>
          <p className="doc-p">When Google is connected, every event created in Kobin with the Meet toggle enabled automatically creates a real Google Calendar event, generates a unique Meet link, and sends calendar invites to all listed attendee emails. Access tokens refresh automatically using the stored refresh token — no re-auth needed.</p>

          {/* ── PUSH NOTIFICATIONS ── */}
          <h2 className="doc-h2" id="push">Push notifications</h2>
          <p className="doc-p">Command Center uses two notification systems that run globally for all authenticated users.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Notification type</th><th>Trigger</th><th>Delivery</th></tr>
            </thead>
            <tbody>
              {[
                ['5-min meeting reminder', '5 minutes before any calendar event', 'Slide-in toast in top-right corner with join button'],
                ['1-min meeting interrupt', '1 minute before any calendar event', 'Full-screen modal + Browser Notification API push (visible when tab is unfocused)'],
                ['Task assignment', 'Task assigned to a team member', 'Slide-in toast with task title and priority badge + Browser Notification API push'],
                ['Daily brief', 'Every morning at 8am — Phase 2', 'Push notification with 6-section workspace briefing — each section tappable to the relevant area'],
                ['Client silence nudge', 'Client has not replied in 4+ days with tasks awaiting input — Phase 2', 'Notification with AI-drafted follow-up message preview and one-tap send flow'],
              ].map(([t, tr, d]) => (
                <tr key={t}><td>{t}</td><td>{tr}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>

          <div className="doc-callout" style={{ background: 'rgba(13,107,79,0.05)', borderColor: 'rgba(13,107,79,0.2)' }}>
            <div className="doc-callout-icon">💡</div>
            <p>Deduplication is enforced on all notifications — the same meeting or task assignment will never trigger twice, even across page refreshes. Meeting reminders poll every 30 seconds; task notifications poll every 10 seconds.</p>
          </div>

          {/* ── AI LAYER ── */}
          <h2 className="doc-h2" id="ai">AI Layer</h2>
          <p className="doc-p">The AI layer sits on top of all Command Center modules and adds context-aware intelligence. Every AI request is silently enriched with a live operational briefing assembled from workspace data before the message reaches the model — projects, tasks, client conversations, files, meetings, and CRM contacts all injected automatically.</p>

          <div className="doc-callout">
            <div className="doc-callout-icon">🧠</div>
            <p><strong>The core difference:</strong> Command Center AI sees everything — because everything lives in one place. Slack&apos;s AI sees messages. Asana&apos;s AI sees tasks. Notion&apos;s AI sees documents. None of them see the full picture. This is the moat.</p>
          </div>

          <h3 className="doc-h3">Model (Phase 1)</h3>
<p className="doc-p">All users get AI on day one with no setup required. Command Center connects to Groq's free inference tier running Llama 3.3 70B — up to 14,400 requests per day, sufficient for any agency founder's daily usage. Bring-your-own-model support (Anthropic, OpenAI, Google) is planned for Phase 2.</p>

<table className="doc-table">
  <thead>
    <tr><th>Provider</th><th>Model</th><th>Status</th></tr>
  </thead>
  <tbody>
    {[
      ['Groq', 'Llama 3.3 70B', 'Live — free, no API key required'],
      ['Anthropic', 'Claude Sonnet 4.6', 'Phase 2 — bring your own key'],
      ['OpenAI', 'GPT-4o', 'Phase 2 — bring your own key'],
      ['Google', 'Gemini 1.5 Pro', 'Phase 2 — bring your own key'],
    ].map(([p, m, b]) => (
      <tr key={p}><td>{p}</td><td><code style={{ fontFamily: "'Geist Mono',monospace", fontSize: '12px' }}>{m}</code></td><td>{b}</td></tr>
    ))}
  </tbody>
</table>

          {/* ── AI INBOX ── */}
          <h2 className="doc-h2" id="ai-inbox">@AI in the Inbox <span className="badge badge-vi" style={{ marginLeft: '8px', fontSize: '11px' }}>Live</span></h2>
          <p className="doc-p">In any project room, group room, or direct message, typing <code style={{ background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono',monospace", fontSize: '13px' }}>@AI</code> triggers a streamed AI response inline as a message in the thread. The response renders token by token with a purple avatar, AI label, and subtle background. A copy button appears on hover. Full workspace context is silently injected before every request — the model never receives a bare prompt.</p>

          <div className="doc-callout" style={{ background: 'rgba(91,91,214,0.06)', borderColor: 'rgba(124,58,237,0.3)' }}>
            <div className="doc-callout-icon">⚡</div>
            <p><strong>Context injected per request:</strong> Workspace identity · Active project (name, status, dates) · All active tasks (priority, status, due dates, overdue flags) · Upcoming calendar events (next 7 days) · Vault files (titles, descriptions, types) · CRM contacts (pipeline stage, deal value) · Last 20 messages in the current room. Context is automatically scoped to the active project when in a project room.</p>
          </div>

          <table className="doc-table">
            <thead>
              <tr><th>You type</th><th>AI does</th></tr>
            </thead>
            <tbody>
              {[
                ['@AI where does this project stand?', 'Task completion %, overdue items, last client message, next meeting — returns a 3-sentence operational summary.'],
                ['@AI draft a client update for this week', 'Professional progress update based on completed tasks, uploaded files, and upcoming milestones. Founder edits and sends.'],
                ['@AI what is waiting on the client?', 'All tasks flagged blocked or awaiting approval, plus unanswered messages — clean list with context and days waiting.'],
                ['@AI prepare me for tomorrow\'s call', 'Call prep: client profile, open issues, last conversation summary, pending deliverables, suggested talking points.'],
                ['@AI turn this message into a task', 'Forwards client message — AI pre-fills the entire task form: title, priority, suggested assignee, suggested due date.'],
                ['@AI is this project on track?', 'Compares task completion rate against project timeline — flags if current pace will miss the deadline.'],
                ['@AI what did we agree last time?', 'Scans previous messages for decisions, commitments, and agreed next steps.'],
                ['@AI summarise this week\'s activity', 'Tasks completed, messages exchanged, files uploaded, meetings held — weekly digest in plain language.'],
                ['@AI write a proposal intro for this client', 'Uses client record, project brief from vault, and CRM notes to draft a personalised proposal opening.'],
              ].map(([q, a]) => (
                <tr key={q}><td style={{ fontFamily: "'Geist Mono',monospace", fontSize: '12px' }}>{q}</td><td>{a}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── AI COMMAND BAR ── */}
          <h2 className="doc-h2" id="ai-command">Global AI Command Bar <span className="badge badge-am" style={{ marginLeft: '8px', fontSize: '11px' }}>Phase 2</span></h2>
          <p className="doc-p">A floating command bar accessible from anywhere via <code style={{ background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono',monospace", fontSize: '13px' }}>Cmd/Ctrl + K</code>. Unlike inbox @AI which is scoped to one room, the command bar will have full workspace access — all projects, all clients, all tasks, complete calendar, entire CRM. Shipping in Phase 2.</p>

          <table className="doc-table">
            <thead>
              <tr><th>You ask</th><th>AI does</th></tr>
            </thead>
            <tbody>
              {[
                ['Which clients have gone quiet this week?', 'Scans last message timestamps across all rooms — flags clients with no contact in 5+ days, shows last interaction.'],
                ['What do I have today?', "Merges today's calendar events with today's task bucket — prioritised daily briefing ordered by urgency."],
                ['Show me everything overdue', 'All tasks with passed due dates across every project — grouped by client, with days overdue count.'],
                ['Which projects are at risk?', 'Analyses completion rates vs timelines — flags any project where current pace misses the deadline.'],
                ['Who needs a follow-up?', 'CRM meeting outcome logs, task notes, and inbox timestamps — prioritised follow-up list with context.'],
                ['Which team member has the most open tasks?', 'Workload distribution across all team members — flags overloaded assignees.'],
              ].map(([q, a]) => (
                <tr key={q}><td style={{ fontFamily: "'Geist Mono',monospace", fontSize: '12px' }}>{q}</td><td>{a}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── AI BRIEFS ── */}
          <h2 className="doc-h2" id="ai-briefs">Daily &amp; Pre-Meeting Briefs <span className="badge badge-am" style={{ marginLeft: '8px', fontSize: '11px' }}>Phase 2</span></h2>

          <h3 className="doc-h3">Daily morning brief — 8am</h3>
          <p className="doc-p">Every morning at 8am, Command Center auto-generates a personalised workspace briefing delivered as a notification. Six sections, each tappable to navigate directly to the relevant area.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Section</th><th>What AI generates</th></tr>
            </thead>
            <tbody>
              {[
                ["Today's meetings", "All calendar events for the day — time, type, client name, Meet link. Flags meetings with no recent communication in the linked project."],
                ['Priority tasks', "Today's task bucket sorted by priority — with assignee names for delegated items and overdue flags."],
                ['Clients awaiting response', 'Clients who messaged (inbox or Gmail) in the last 48 hours with no reply — name, last message preview, hours waiting.'],
                ['Projects needing attention', 'Projects behind timeline, with overdue deliverables, or with no activity in 3+ days.'],
                ['Follow-ups due today', "CRM contacts with today's follow-up date set, plus contacts not contacted within the defined follow-up window."],
                ['Quick wins', 'Low effort + high priority tasks surfaced as easy momentum builders for the morning.'],
              ].map(([s, w]) => (
                <tr key={s}><td>{s}</td><td>{w}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="doc-h3">Pre-meeting brief — 10 minutes before</h3>
          <p className="doc-p">Ten minutes before every calendar event, Command Center generates a focused meeting brief delivered as a full-screen notification. The founder walks into every meeting already prepared.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Section</th><th>What AI generates</th></tr>
            </thead>
            <tbody>
              {[
                ['Meeting context', 'Title, type, time, duration, Google Meet link, all attendees.'],
                ['Client or contact profile', 'Project status, portal last active, open tasks, overdue deliverables. For CRM contacts: type, tags, last outcome, notes.'],
                ['Last conversation summary', 'Last 5 inbox messages summarised in 2–3 sentences — what was discussed, what was agreed, what is open.'],
                ['Open items to address', 'Tasks awaiting client input or approval, blocked deliverables, unanswered questions from previous messages.'],
                ['Suggested talking points', '3 bullet points inferred from open tasks, recent activity, and vault context.'],
                ['Recent vault activity', 'Files uploaded or updated since the last meeting — so you can reference them naturally in conversation.'],
              ].map(([s, w]) => (
                <tr key={s}><td>{s}</td><td>{w}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── AI TASKS ── */}
          <h2 className="doc-h2" id="ai-tasks">Task Intelligence <span className="badge badge-am" style={{ marginLeft: '8px', fontSize: '11px' }}>Phase 3</span></h2>
          <p className="doc-p">AI will assist at every stage of task creation and management — suggesting priority, generating descriptions, breaking tasks into subtasks, suggesting assignees, and drafting client messages. All suggestions editable before saving. Shipping in Phase 3.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Trigger</th><th>AI behaviour</th></tr>
            </thead>
            <tbody>
              {[
                ['Suggest priority', "Reads task title + project status + existing task priorities — suggests Urgent/High/Medium/Low with a one-line reason. Updates as you type."],
                ['Generate description', "Reads title and project context — writes a clear, actionable description including what 'done' looks like and relevant vault or message context."],
                ['Break into subtasks', 'Reads title and description — suggests 3–6 subtasks with estimated time and logical sequence. Founder approves each individually.'],
                ['Suggest assignee', 'Reads team member workloads, roles, and task history — suggests most appropriate assignee with a brief reason.'],
                ['Draft client message', 'Writes a concise professional update about the task — current status, what is needed from the client if anything, expected completion.'],
                ['Auto-create from message', "When you select a client message and use @AI 'turn this into a task', AI pre-fills the entire form for one-tap confirmation."],
              ].map(([t, b]) => (
                <tr key={t}><td>{t}</td><td>{b}</td></tr>
              ))}
            </tbody>
          </table>

          {/* ── AI AUTOMATIONS ── */}
          <h2 className="doc-h2" id="ai-automations">Background Automations <span className="badge badge-am" style={{ marginLeft: '8px', fontSize: '11px' }}>Phases 2 & 3</span></h2>
          <p className="doc-p">Command Center will run background monitoring processes that proactively surface insights without the founder asking. Client silence detection and project risk monitoring ship in Phase 2. Weekly client reports and conversation-to-task detection ship in Phase 3.</p>

          <h3 className="doc-h3">Client silence detection — every 6 hours</h3>
          <p className="doc-p">Scans all active client projects for clients who have not replied in 4+ days while tasks are waiting on their input or approval. AI generates a draft follow-up message in your voice and surfaces it as a notification with a one-tap review and send flow.</p>

          <h3 className="doc-h3">Weekly client report — Friday 5pm</h3>
          <p className="doc-p">Every Friday, AI generates a draft weekly report for each active client. Founder reviews and sends — or schedules for Monday morning. Eliminates one of the most time-consuming weekly tasks in agency operations.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Report section</th><th>AI generates</th></tr>
            </thead>
            <tbody>
              {[
                ['Work completed this week', 'All tasks moved to Done this week, grouped by theme, written in plain language for non-technical clients.'],
                ['Current project status', 'Overall completion %, days until deadline, any schedule changes — framed professionally.'],
                ['Pending client actions', 'Items waiting on the client — approvals, content, feedback, decisions — listed clearly with context.'],
                ["Next week's focus", 'Tasks planned for next week in Today/This Week buckets — visibility into what is coming.'],
                ['Files delivered', 'New items uploaded to the Deliverables vault folder this week — titles and brief descriptions.'],
              ].map(([s, g]) => (
                <tr key={s}><td>{s}</td><td>{g}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="doc-h3">Project risk monitor — daily</h3>
          <p className="doc-p">Analyses all active projects for operational risks using task velocity, deadline proximity, client communication patterns, and blocked item counts. Risk digest feeds into the daily morning brief.</p>

          <table className="doc-table">
            <thead>
              <tr><th>Risk type</th><th>Detection logic</th><th>AI action</th></tr>
            </thead>
            <tbody>
              {[
                ['Deadline at risk', 'Task completion rate below pace needed to finish on time.', 'Flags project, shows projected vs actual completion date, suggests priority tasks.'],
                ['Client gone quiet', 'No client message for 5+ days on an active project.', 'Surfaces in daily brief, drafts a check-in message for review.'],
                ['Blocked deliverable', 'Task in blocked status for 3+ days with no comment activity.', 'Notifies founder, suggests unblocking action from task context.'],
                ['Abandoned project', 'No task activity across any team member for 7+ days.', 'Flags in daily brief and command bar status queries.'],
                ['Overloaded team member', '8+ open tasks assigned to a single team member simultaneously.', 'Suggests redistribution — shows which tasks could be reassigned.'],
              ].map(([r, d, a]) => (
                <tr key={r}><td>{r}</td><td>{d}</td><td>{a}</td></tr>
              ))}
            </tbody>
          </table>

          <h3 className="doc-h3">Conversation-to-task detection — passive</h3>
          <p className="doc-p">AI monitors incoming messages for actionable requests — phrases that imply a task needs creating. When detected, a &apos;Create task from this?&apos; prompt appears inline with a pre-filled task preview. Tap confirm — no navigation required.</p>

          <div className="doc-callout" style={{ background: 'rgba(76,63,212,0.06)', borderColor: 'rgba(76,63,212,0.2)' }}>
            <div className="doc-callout-icon">💬</div>
            <p><strong>Example:</strong> Client message: &quot;Can you add a testimonials section to the homepage?&quot; → AI prompt appears below: [Create task?] Title: Add testimonials section to homepage · Assignee: Developer · Priority: Medium · Due: suggested date. Tap confirm — task created and linked to project instantly.</p>
          </div>

          {/* ── NAV ── */}
          <div className="doc-nav">
            <Link href="/" className="doc-nav-btn">
              <span>← Back to</span>
              <strong>kobin.app</strong>
            </Link>
            <Link href="/blog" className="doc-nav-btn" style={{ textAlign: 'right' }}>
              <span>Read our →</span>
              <strong>Blog</strong>
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}