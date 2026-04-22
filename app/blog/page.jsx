import Link from 'next/link'
import Nav from '../../components/Nav'
import NewsletterSignup from '../../components/NewsletterSignup'
import RevealInit from '../../components/RevealInit'
const KernMark = ({ size = 16 }) => (
  <svg viewBox="0 0 512 512" fill="none" width={size} height={size}>
    <rect width="512" height="512" rx="116" fill="#0D0D0C" />
    <rect x="148" y="128" width="52" height="256" rx="26" fill="#F0EDE6" />
    <line x1="196" y1="238" x2="352" y2="108" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round" />
    <line x1="196" y1="272" x2="352" y2="402" stroke="#F0EDE6" strokeWidth="52" strokeLinecap="round" />
    <circle cx="196" cy="256" r="34" fill="#5B4FE8" />
  </svg>
)

export default function BlogPage() {
  // server component — client interactivity via NewsletterSignup and RevealInit  
  const posts = [
    {
      thumbClass: 'thumb-dark', thumbText: 'Agency\nManagement\nSoftware', thumbLabel: 'PILLAR GUIDE',
      category: 'cat-guide', catLabel: 'Agency Operations',
      title: 'Best Agency Management Software 2026 — For Teams of 5 to 500',
      excerpt: 'We compared 12 platforms — Kobin, Productive.io, Teamwork, Scoro — across project management, CRM, and client portals for agencies at every growth stage.',
      meta: 'Apr 22 · 16 min',
      href: '/blog/agency-management-software',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'Marketing\nAgency\nTools', thumbLabel: 'RANKED LIST',
      category: 'cat-guide', catLabel: 'Marketing Agencies',
      title: 'Top Rated Tools for Marketing Agencies 2026 — What 500+ Agencies Actually Use',
      excerpt: 'The definitive ranked list of tools for marketing agencies in 2026. We rated 15 platforms by client delivery, AI capability, and real monthly cost.',
      meta: 'Apr 22 · 16 min',
      href: '/blog/best-tools-for-marketing-agencies',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'Agency\nWorkflow\nSoftware', thumbLabel: 'FRAMEWORK',
      category: 'cat-guide', catLabel: 'Operations',
      title: 'Agency Workflow Software 2026 — How to Fix Broken Operations Before They Break You',
      excerpt: 'The 8-week agency workflow rebuild framework. How to identify broken processes, choose the right software, and build operations that scale to 100+ clients.',
      meta: 'Apr 22 · 15 min',
      href: '/blog/agency-workflow-software',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'Stop\nLosing\nLeads', thumbLabel: 'CRM GUIDE',
      category: 'cat-guide', catLabel: 'CRM & Lead Management',
      title: 'How to Stop Losing Leads When You\'re Managing 5+ Clients Simultaneously',
      excerpt: '67% of B2B leads go cold within the first hour of no response. When you\'re deep in client delivery, that hour vanishes. Here\'s the exact proactive CRM system — with AI — that keeps your pipeline alive without stealing time from the work you\'re paid to do.',
      meta: 'Apr 18 · 13 min',
      href: '/blog/stop-losing-leads-managing-clients',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'Replace\nSlack\nNotion', thumbLabel: 'MIGRATION GUIDE',
      category: 'cat-guide', catLabel: 'Tool Consolidation',
      title: 'How to Replace Slack, Notion, and Asana With One Tool (Without Losing Your Team)',
      excerpt: 'The average 5-person agency pays $175/month for three tools that don\'t share data or talk to each other. Here\'s the exact 4-week migration playbook that consolidates all three — without a team revolt.',
      meta: 'Apr 18 · 14 min',
      href: '/blog/replace-slack-notion-asana',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'Agency\nFile\nSystem', thumbLabel: 'OPERATIONS GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'Your Agency Is Losing 12 Hours a Week to File Chaos — Here\'s the System That Fixes It',
      excerpt: 'Google Drive works at 3 clients. It quietly breaks at 10. Here are the six failure modes every agency hits — and the file management architecture that scales to 50+ clients without a dedicated ops person.',
      meta: 'Apr 17 · 14 min',
      href: '/blog/agency-file-management',
    },

    {
      thumbClass: 'thumb-vi', thumbText: 'Vault\nFile\nManagement', thumbLabel: 'PRODUCT DEEP DIVE',
      category: 'cat-build', catLabel: 'Product Deep Dive',
      title: 'Agency File Management in 2026 — Why Google Drive Alone Fails and What Kobin Vault Does Instead',
      excerpt: 'Scattered files, broken Drive links, clients who cannot find deliverables. Kobin Vault gives every project enforced 3-folder structure, AI auto-labeling, semantic search, Monaco editing, and a client portal that updates automatically on upload.',
      meta: 'Apr 14 · 16 min',
      href: '/blog/vault-agency-file-management',
    },

    {
      thumbClass: 'thumb-dark', thumbText: 'HubSpot\nAlternative\nAgencies', thumbLabel: 'DEEP GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'The Best HubSpot Alternative for Agencies in 2026 — Proactive CRM, AI Risk Alerts, Gmail Intelligence',
      excerpt: 'HubSpot decays into shelfware for most small agencies. Here are 4 alternatives ranked by fit — plus why a proactive CRM that monitors your pipeline daily changes everything.',
      meta: 'Apr 10 · 13 min',
      href: '/blog/hubspot-alternative-for-agencies',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'Proactive\nCRM\nIntelligence', thumbLabel: 'CRM AI',
      category: 'cat-build', catLabel: 'CRM Intelligence',
      title: 'Proactive CRM for Agencies: Revenue Intelligence, Risk Detection, and Gmail AI in 2026',
      excerpt: 'HubSpot stores your pipeline. Kobin\'s CRM watches it — daily risk alerts, revenue intelligence on closing deals, Gmail intent analysis per contact, and a morning brief. Here\'s exactly how each routine works.',
      meta: 'Apr 10 · 12 min',
      href: '/blog/proactive-crm-for-agencies',
    },

    {
      thumbClass: 'thumb-parch', thumbText: 'Productivity\nSoftware\nAgencies', thumbLabel: 'RANKED GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'Best Productivity Software for Agencies in 2026 — Ranked, Compared & Honest',
      excerpt: 'Slack, Notion, ClickUp, Productive.io, Asana, Monday.com, HubSpot — ranked by real cost and fit for a 5-person agency. One of them replaces all the others.',
      meta: 'Apr 8 · 16 min',
      href: '/blog/productivity-software-for-agencies',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'What is\nKobin\nAI?', thumbLabel: 'BRAND OVERVIEW',
      category: 'cat-build', catLabel: 'Product',
      title: 'What is Kobin? — The AI Workspace for Agencies, Explained',
      excerpt: 'Kobin (kobin.team) is an AI workspace that replaces Slack, Notion, HubSpot, Asana, and Buffer for agency founders. Here is exactly what it does, who it is for, and how the AI layer works.',
      meta: 'Apr 8 · 8 min',
      href: '/what-is-kobin',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'AI for\nMarketing\nAgencies', thumbLabel: 'GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'AI for Marketing Agencies in 2026 — The Workspace That Runs Your Campaigns',
      excerpt: 'Marketing agencies spend 50 minutes per client on weekly reports. Kobin AI does it in 4 minutes — from completed tasks, delivered assets, and client messages. Here is the full breakdown.',
      meta: 'Apr 10 · 10 min',
      href: '/blog/ai-for-marketing-agencies',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'AI for\nFreelancers', thumbLabel: 'GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'AI for Freelancers in 2026 — Run Your Entire Business From One Tab',
      excerpt: 'Freelancers lose 30% of their billable hours to admin. Kobin Free at $0/month replaces Notion, Todoist, Calendly, and client portal tools — with an AI that handles follow-ups automatically.',
      meta: 'Apr 10 · 9 min',
      href: '/blog/ai-for-freelancers',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'AI for\nStartups', thumbLabel: 'BUILD',
      category: 'cat-build', catLabel: 'Startup',
      title: 'AI for Startups in 2026 — Replace the Tool Stack Before It Slows You Down',
      excerpt: 'Most startups build a $243/month Slack + Notion + Linear + HubSpot stack before their first customer. Here is why that is the wrong architecture — and what to use instead.',
      meta: 'Apr 10 · 10 min',
      href: '/blog/ai-for-startups',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'AI for\nRemote\nTeams', thumbLabel: 'GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'AI for Remote Teams in 2026 — One Workspace Across Every Time Zone',
      excerpt: 'Remote teams lose 2 hours per day reconstructing context across tools and time zones. Kobin AI generates personalized daily briefs, surfaces blockers, and keeps distributed teams aligned.',
      meta: 'Apr 10 · 11 min',
      href: '/blog/ai-for-remote-teams',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'AI for\nProject\nManagers', thumbLabel: 'GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'AI for Project Managers in 2026 — Risk Flags and Workload Balance on Autopilot',
      excerpt: 'Project managers spend 11 hours per week on coordination overhead. Kobin AI monitors all projects for risk, generates client briefings, and balances team workload automatically.',
      meta: 'Apr 10 · 11 min',
      href: '/blog/ai-for-project-managers',
    },
    {
      thumbClass: 'thumb-dark', thumbText: '@AI\nFull\nContext', thumbLabel: 'AI LAYER',
      category: 'cat-build', catLabel: 'AI Layer',
      title: 'Your Workspace AI Is Answering in the Dark. Kobin\'s Isn\'t.',
      excerpt: 'Notion AI sees notes. ClickUp AI sees tasks. Asana Intelligence sees projects. Here is what happens when your AI can see everything — tasks, pipeline, vault, calendar, team workload — at once.',
      meta: 'Apr 1 · 11 min',
      href: '/blog/kobin-ai-vs-notion-clickup',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'Zapier\n+\nStack', thumbLabel: 'THE PROBLEM',
      category: 'cat-problem', catLabel: 'The Problem',
      title: 'Zapier + Slack + Asana + Notion Is Not a Workspace. It\'s a $312/Month Maintenance Problem.',
      excerpt: 'The average agency pays $312/month running Zapier to glue four tools together — tools that still break every time one API updates. Here\'s the real cost, why it fails architecturally, and what a true all-in-one workspace looks like.',
      meta: 'Apr 5 · 12 min',
      href: '/blog/zapier-slack-asana-notion-alternative',
    },
    {
      thumbClass: 'thumb-dark', thumbText: '@AI\n⌘K', thumbLabel: 'AI LAYER',
      category: 'cat-build', catLabel: 'AI Layer',
      title: 'The AI Layer Is Here: Your Entire Agency, Understood by One Model',
      excerpt: 'One model. Every task, project, client, meeting, and file — in context. @AI in rooms and the global command bar are live for all Kobin users.',
      meta: 'Apr 1 · 10 min',
      href: '/blog/ai-layer-launch',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'Top 10\nTools\n2026', thumbLabel: 'RANKED GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: '10 Best Productivity Tools for Agency Founders in 2026 — Ranked & Compared',
      excerpt: 'Slack, Notion, Asana, ClickUp, HubSpot, Linear, Monday.com, Basecamp — ranked by real cost and fit for a 5-person agency. Real pricing. Real tradeoffs. One of them replaces all the others.',
      meta: 'Apr 3 · 14 min',
      href: '/blog/best-productivity-tools-for-agencies',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'Slack\nNotion\nAsana', thumbLabel: 'COMPARISON GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'Slack, Notion, Asana, HubSpot: Why Agencies Are Replacing Them All With One Tool',
      excerpt: 'Four tools, four invoices, four places to check for a single client project. Here is a direct comparison — and what switching to one workspace actually saves you.',
      meta: 'Mar 25 · 10 min',
      href: '/blog/slack-notion-asana-hubspot-alternatives',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'context\nswitching', thumbLabel: 'DATA ESSAY',
      category: 'cat-problem', catLabel: 'The problem',
      title: 'The real cost of switching between Slack, Notion and Linear',
      excerpt: 'Research shows 1.2 months of productivity lost per year to tool switching. Here\'s how we calculated that number and what it means for your team.',
      meta: 'Mar 15 · 6 min',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'build in\npublic', thumbLabel: 'BUILD LOG',
      category: 'cat-build', catLabel: 'Build in public',
      title: 'How we built a real-time inbox that replaces Slack in 3 weeks',
      excerpt: 'The technical decisions, UX mistakes, and hard lessons from building Kobin\'s inbox from scratch. Supabase Realtime, optimistic updates, and why reactions are harder than you think.',
      meta: 'Mar 12 · 11 min',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'client\nportal', thumbLabel: 'FEATURE GUIDE',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'How agencies are managing clients without a separate portal tool',
      excerpt: 'Three agency owners share how they replaced Notion client spaces, Basecamp, and custom-built portals with a single client view. Real workflows, real numbers.',
      meta: 'Mar 10 · 9 min',
    },
    {
      thumbClass: 'thumb-dark', thumbText: 'kobin\nv1', thumbLabel: 'LAUNCH STORY',
      category: 'cat-story', catLabel: 'Story',
      title: 'I built Kobin to replace my own agency tool stack. Here\'s what happened.',
      excerpt: '12 months. 5 failed prototypes. 1 name change. And a product that finally feels like what I always wanted to use. The honest story behind building Kobin.',
      meta: 'Mar 6 · 14 min',
    },
    {
      thumbClass: 'thumb-vi', thumbText: 'AI +\ntasks', thumbLabel: 'AI LAYER',
      category: 'cat-build', catLabel: 'AI Layer',
      title: 'Why we\'re building the AI layer after the foundation, not before it',
      excerpt: 'Every productivity tool is rushing to ship AI. We\'re doing it differently — building the data model first so the AI actually has something to work with.',
      meta: 'Mar 3 · 7 min',
    },
    {
      thumbClass: 'thumb-parch', thumbText: 'Slack vs\nKobin', thumbLabel: 'COMPARISON',
      category: 'cat-guide', catLabel: 'Guide',
      title: 'Slack vs Kobin: what a 5-person agency actually needs in 2026',
      excerpt: 'A direct, honest comparison. Where Slack wins, where Kobin wins, and why we built what we did. No sales pitch — just the reality of both tools.',
      meta: 'Feb 28 · 8 min',
    },
  ]

  return (
    <>
      <RevealInit />
      <Nav activePage="blog" />

      {/* Blog page schema for AI crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'The Kobin Blog',
            description: 'Essays, guides, and honest writing about running an agency without losing your mind.',
            url: 'https://www.kobin.team/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Kobin',
              url: 'https://www.kobin.team',
            },
            blogPost: [
              {
                '@type': 'BlogPosting',
                headline: 'How to Stop Losing Leads When You\'re Managing 5+ Clients Simultaneously',
                url: 'https://www.kobin.team/blog/stop-losing-leads-managing-clients',
                datePublished: '2026-04-18',
                author: { '@type': 'Person', name: 'Arham Mirkar' },
                keywords: 'stop losing leads agency, proactive CRM, AI lead detection, agency pipeline management',
                description: '67% of B2B leads go cold within the first hour. Here\'s the proactive CRM system with automatic Gmail lead detection, daily risk alerts, and revenue intelligence briefs that keeps pipelines active while you deliver client work.',
              },
              {
                '@type': 'BlogPosting',
                headline: 'How to Replace Slack, Notion, and Asana With One Tool (Without Losing Your Team)',
                url: 'https://www.kobin.team/blog/replace-slack-notion-asana',
                datePublished: '2026-04-18',
                author: { '@type': 'Person', name: 'Arham Mirkar' },
                keywords: 'replace slack notion asana, all-in-one agency workspace, agency tool consolidation, Kobin AI',
                description: 'The 4-week migration playbook for replacing Slack, Notion, and Asana with one unified workspace — covering inbox migration, task migration, vault migration, and AI layer activation — saving agencies $175–$240/month.',
              },
              {
                "@type": "BlogPosting",
                "headline": "Your Agency Is Losing 12 Hours a Week to File Chaos — Here's the System That Fixes It",
                "url": "https://www.kobin.team/blog/agency-file-management",
                "datePublished": "2026-04-17",
                "author": { "@type": "Person", "name": "Arham Mirkar" },
                "keywords": "agency file management, how to organize client files agency, client deliverable management, google drive alternatives for agencies, client approval process agency",
                "description": "Why Google Drive fails agencies at scale, the six file management failure modes, and the structured vault system agencies with 20+ clients use to keep deliverables organized and delivered on time."
              },

              {
                "@type": "BlogPosting",
                "headline": "Agency File Management in 2026 — Kobin Vault Deep Dive",
                "url": "https://www.kobin.team/blog/vault-agency-file-management",
                "datePublished": "2026-04-14",
                "author": { "@type": "Person", "name": "Arham Mirkar" },
                "description": "How Kobin Vault solves agency file chaos with role-scoped folders, AI auto-labeling, pgvector semantic search, Monaco + TipTap editors, and automatic client delivery."
              },

              {
                '@type': 'BlogPosting',
                headline: "Why Founders Pay $283/Month for Tools That Don't Talk to Each Other",
                url: 'https://www.kobin.team/blog/the-283-problem',
                datePublished: '2026-03-18',
                author: { '@type': 'Person', name: 'Arham Mirkar' },
                description: 'The average 5-person agency spends $283/month on Slack, Notion, HubSpot, Linear, and Buffer. Here is the full cost breakdown.',
              },
              {
                '@type': 'BlogPosting',
                headline: 'The real cost of switching between Slack, Notion and Linear',
                datePublished: '2026-03-15',
                author: { '@type': 'Person', name: 'Arham Mirkar' },
                description: 'Research shows 1.2 months of productivity lost per year to tool switching.',
              },
              {
                '@type': 'BlogPosting',
                headline: 'How we built a real-time inbox that replaces Slack in 3 weeks',
                datePublished: '2026-03-12',
                author: { '@type': 'Person', name: 'Arham Mirkar' },
                description: 'Technical decisions and lessons from building Kobin\'s inbox with Supabase Realtime.',
              },
              {
                '@type': 'BlogPosting',
                headline: 'The AI Layer Is Here: Your Entire Agency, Understood by One Model',
                url: 'https://www.kobin.team/blog/ai-layer-launch',
                datePublished: '2026-04-01',
                author: { '@type': 'Person', name: 'Arham Mirkar' },
                description: 'The Kobin AI layer is live. @AI in any room and the global command bar give agency founders a model with full workspace context — tasks, projects, CRM, calendar, vault, and inbox all in one place.',
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <div className="blog-hero reveal">
        <div className="blog-hero-inner">
          <div className="blog-eyebrow">The Kobin Blog</div>
          <h1>For founders<br />who <em>build.</em></h1>
          <p className="blog-hero-sub">Essays, guides, and honest writing about running an agency without losing your mind. No fluff.</p>
        </div>
      </div>

      {/* FEATURED */}
      <div className="blog-featured reveal">
        <div className="blog-featured-inner">
          <Link href="/blog/the-283-problem" className="featured-card">
            <div className="featured-img-wrap">
              <div className="featured-img">
                <div className="feat-visual">
                  <div className="feat-visual-icons">
                    <div className="feat-app-icon">
                      <img src="/slack.jpg" alt="Slack" width="26" height="26" style={{ borderRadius: '6px', objectFit: 'cover' }} />
                    </div>
                    <div className="feat-app-icon">
                      <img src="/notion.png" alt="Notion" width="26" height="26" style={{ borderRadius: '6px', objectFit: 'cover' }} />
                    </div>
                    <div className="feat-app-icon">
                      <img src="/asana.jpg" alt="Asana" width="26" height="26" style={{ borderRadius: '6px', objectFit: 'cover' }} />
                    </div>
                    <div className="feat-app-icon">
                      <img src="/hubspot.jpg" alt="HubSpot" width="26" height="26" style={{ borderRadius: '6px', objectFit: 'cover' }} />
                    </div>
                    <div className="feat-app-icon">
                      <img src="/google-drive.jpg" alt="Google Drive" width="26" height="26" style={{ borderRadius: '6px', objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="feat-chaos-text">Too many tools.<br />Not enough focus.</div>
                </div>
              </div>
            </div>
            <div className="featured-meta">
              <span className="post-category cat-problem">The problem</span>
              <div className="post-title">Why founders pay $283/month for tools that don&apos;t talk to each other</div>
              <p className="post-excerpt">The average 5-person agency runs Slack, Notion, HubSpot, Linear, and Buffer. That&apos;s 5 separate logins, 5 notification streams, and a monthly invoice that quietly compounds. Here&apos;s the real cost of that stack.</p>
              <div className="post-meta">
                <span>Arham Mirkar</span>
                <span>·</span>
                <span>Mar 18, 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
              <span className="post-read-btn">Read article →</span>
            </div>
          </Link>
        </div>
      </div>

      {/* GRID */}
      <div className="blog-grid">
        <div className="blog-grid-inner reveal">
          <div className="grid-header"><h2>All posts</h2></div>
          <div className="posts-grid">
            {posts.filter(p => p.href).map(({ thumbClass, thumbText, thumbLabel, category, catLabel, title, excerpt, meta, href }) => (
              <a href={href} className="post-card" key={title}>
                <div className={`post-thumb ${thumbClass}`}>
                  {thumbText.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < thumbText.split('\n').length - 1 && <br />}</span>
                  ))}
                  <span className="thumb-label">{thumbLabel}</span>
                </div>
                <div className="post-body">
                  <span className={`post-category ${category}`}>{catLabel}</span>
                  <div className="post-title">{title}</div>
                  <p className="post-excerpt">{excerpt}</p>
                </div>
                <div className="post-footer">
                  <span className="post-footer-meta">{meta}</span>
                  <span className="post-footer-arr">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="blog-cats reveal">
        <div className="blog-cats-inner">
          {[
            { num: 6, name: 'The problem', desc: 'Essays on tool overload, context switching, and agency inefficiency' },
            { num: 4, name: 'Build in public', desc: 'Technical decisions, product mistakes, and honest build logs from Kobin HQ' },
            { num: 5, name: 'Guides', desc: 'Practical walkthroughs for running a leaner, more focused agency' },
            { num: 3, name: 'Stories', desc: 'Founder journeys and real stories from agencies using Kobin' },
          ].map(({ num, name, desc }) => (
            <a href="#" className="cat-card" key={name}>
              <div className="cat-num">{num}</div>
              <div className="cat-name">{name}</div>
              <div className="cat-desc">{desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="blog-newsletter">
        <div className="newsletter-inner reveal">
          <div className="newsletter-eyebrow">Newsletter</div>
          <h2 className="newsletter-h2">No fluff.<br /><em>Just signal.</em></h2>
          <p className="newsletter-sub">One email per week. Founder tools, honest product updates, and essays worth reading. No marketing.</p>
          <NewsletterSignup />
          <div className="newsletter-note">Join the waitlist · Unsubscribe anytime</div>
        </div>
      </div>

      <footer>
        <div className="foot-brand">
          <div className="nav-mark"><KernMark /></div>
          kobin
        </div>
        <div className="foot-links">
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
          <a href="#">Privacy</a>
        </div>
        <div className="foot-copy">© 2026 Kobin. All rights reserved.</div>
      </footer>
    </>
  )
}
