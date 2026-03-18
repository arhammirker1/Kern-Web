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
              AI overview <span className="badge badge-am" style={{ marginLeft: '6px' }}>Soon</span>
            </a>
          </div>
        </aside>

        <main className="docs-content" id="overview">
          <div className="docs-breadcrumb">
            <Link href="/">kern</Link>
            <span>›</span>
            <span>docs</span>
            <span>›</span>
            <span>overview</span>
          </div>

          <div className="doc-hero">
            <div className="doc-eyebrow">Documentation</div>
            <h1 className="doc-h1">Welcome to<br />Kern.</h1>
            <p className="doc-lead">Kern is your agency operating system — a single workspace that replaces Slack, Notion, HubSpot, Linear, and Buffer. This guide gets you from zero to fully set up.</p>
          </div>

          <div className="doc-callout">
            <div className="doc-callout-icon">⚡</div>
            <p><strong>Early access:</strong> Kern is currently in closed beta. Join the waitlist at <Link href="/#waitlist" style={{ color: 'var(--vi)' }}>kern.app</Link> to get access when your spot opens up.</p>
          </div>

          <h2 className="doc-h2" id="quickstart">Quick start</h2>
          <p className="doc-p">From signup to your first message in under 5 minutes.</p>

          <div className="doc-steps">
            {[
              { title: 'Create your workspace', desc: 'Sign up with your email. Your workspace is created instantly — no credit card needed for the trial.' },
              { title: 'Connect Google Drive', desc: 'Go to Settings → Integrations → Connect Google. A "Vault" folder is auto-created in your Drive. All files stay in your account.' },
              { title: 'Invite your team', desc: 'Go to Team → Add Member. Set their role, permissions, and credentials. They\'re ready to log in immediately — no invite email flow needed.' },
              { title: 'Create your first project', desc: 'Projects automatically get a dedicated chat room, a Vault folder structure, and can be linked to a client portal.' },
            ].map(({ title, desc }, i) => (
              <div className="doc-step" key={i}>
                <div className="doc-step-num">{i + 1}</div>
                <div className="doc-step-body"><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <h2 className="doc-h2">Explore the modules</h2>
          <p className="doc-p">Kern has 8 core modules. Click any to jump to its documentation.</p>

          <div className="feature-cards">
            {[
              { href: '#inbox', title: '💬 Real-Time Inbox', desc: 'Project channels, group chats, DMs. Reactions, file attachments, task references.' },
              { href: '#tasks', title: '✅ Tasks & Projects', desc: '4 time-horizon buckets. Priority sorting, team assignment, client visibility.' },
              { href: '#vault', title: '🗄️ Vault', desc: 'Google Drive-backed. Internal docs, client uploads, deliverables — role-scoped.' },
              { href: '#client-portal', title: '🏢 Client Portal', desc: 'White-label scoped workspace per client. Tasks, files, inbox, calendar.' },
              { href: '#crm', title: '🤝 CRM', desc: 'Track leads, investors, partners. Log outcomes, set reminders, link to events.' },
              { href: '#calendar', title: '📅 Calendar', desc: 'Day / Week / Month. Google Meet auto-creation. 5-min meeting reminders.' },
            ].map(({ href, title, desc }) => (
              <a className="feature-card" href={href} key={href}>
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="feature-card-arrow"><span>Read docs →</span></div>
              </a>
            ))}
          </div>

          <h2 className="doc-h2" id="permissions">Permission system</h2>
          <p className="doc-p">Kern uses a 3-tier user model with 12 granular permission toggles per team member.</p>

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
                <td>Owns the workspace. Can create teams, clients, projects.</td>
              </tr>
              <tr>
                <td>Team member</td>
                <td><span className="badge badge-am">Configurable</span></td>
                <td>12 permission toggles. 5 preset roles available.</td>
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
            <p><strong>Role presets:</strong> Admin · Project Manager · Executor · Sales / Outreach · Analyst. Each preset configures all 12 toggles automatically. You can override any toggle after applying a preset.</p>
          </div>

          <h2 className="doc-h2" id="inbox">Inbox — real-time messaging</h2>
          <p className="doc-p">The inbox uses Supabase Realtime WebSocket channels. Each room maintains its own subscription — switching rooms tears down the old channel and creates a new one.</p>

          <h3 className="doc-h3">Room types</h3>
          <p className="doc-p">There are three room types: <strong>Project</strong> (auto-created when you create a project), <strong>Group</strong> (custom channels you create), and <strong>Direct</strong> (1-on-1 DMs).</p>

          <h3 className="doc-h3">Sending a task reference</h3>
          <p className="doc-p">Type <code style={{ background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono',monospace", fontSize: '13px' }}>/task</code> in any message input to open the task picker.</p>

          <div className="doc-code">
            <div className="doc-code-header">
              <span className="doc-code-lang">Message input</span>
            </div>
            <code>{`/task [search query]     → opens task picker
@name                  → opens mention picker
Shift+Enter            → new line
Enter                  → send message`}</code>
          </div>

          <h2 className="doc-h2" id="google">Google Drive integration</h2>
          <p className="doc-p">Kern stores all Vault files directly in your Google Drive account. We never hold your files — they live in your Drive and you retain full ownership.</p>

          <div className="doc-steps">
            {[
              { title: 'Connect your Google account', desc: 'Settings → Integrations → Connect Google. Kern requests Drive and Calendar permissions.' },
              { title: 'Vault folder auto-created', desc: 'A root "Vault" folder is created in your Drive. All project subfolders live inside it.' },
              { title: 'Project folders created automatically', desc: 'Creating a project auto-creates 3 subfolders: Internal Documents (team only), Client Uploads, and Deliverables (client-visible).' },
            ].map(({ title, desc }, i) => (
              <div className="doc-step" key={i}>
                <div className="doc-step-num">{i + 1}</div>
                <div className="doc-step-body"><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <h2 className="doc-h2" id="ai">AI Layer — coming soon</h2>
          <div className="doc-callout" style={{ background: 'rgba(196,114,10,0.06)', borderColor: 'rgba(196,114,10,0.2)' }}>
            <div className="doc-callout-icon">🚧</div>
            <p><strong>In development.</strong> The AI layer is actively being built. Early access members will be the first to try it. <Link href="/#waitlist">Join the waitlist</Link> to get early access.</p>
          </div>
          <p className="doc-p">The AI layer will sit on top of all Kern modules and add natural language intelligence. Planned features include:</p>
          <p className="doc-p">
            · Task creation from chat messages (&quot;can you finish the landing page by Friday&quot; → task created, assigned, due date set)<br />
            · Thread summaries (&quot;what happened in the last 3 hours?&quot;)<br />
            · Client brief → project structure generation<br />
            · Smart follow-up reminders from CRM context<br />
            · Auto-scheduling from calendar patterns
          </p>

          <div className="doc-nav">
            <Link href="/" className="doc-nav-btn">
              <span>← Back to</span>
              <strong>kern.app</strong>
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
