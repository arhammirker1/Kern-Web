import { MetadataRoute } from 'next'

const SITE = 'https://www.kobin.team'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE}/blog`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE}/docs`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE}/blog/the-283-problem`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/slack-notion-asana-hubspot-alternatives`,
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/blog/ai-layer-launch`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/kobin-ai-vs-notion-clickup`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },  
    {
      url: `${SITE}/blog/best-productivity-tools-for-agencies`,
      lastModified: new Date('2026-04-03'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/zapier-slack-asana-notion-alternative`,
      lastModified: new Date('2026-04-05'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/ai-for-marketing-agencies`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/ai-for-freelancers`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/ai-for-startups`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/ai-for-remote-teams`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/blog/ai-for-project-managers`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // ── Compare pages (high commercial intent) ──────────────────────────────
        {
      url: `${SITE}/compare`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/compare/slack-alternative-for-agencies`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/compare/notion-alternative-for-agencies`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/compare/asana-alternative-for-agencies`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/compare/hubspot-alternative-for-agencies`,
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${SITE}/llms.txt`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

     // ── AI Workspace hub pages (brand + keyword domination) ──────────────────
    {
      url: `${SITE}/ai-workspace`,
      lastModified: new Date('2026-04-06'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE}/ai-for-agencies`,
      lastModified: new Date('2026-04-06'),
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${SITE}/ai-productivity-tool`,
      lastModified: new Date('2026-04-06'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${SITE}/notion-ai-alternative`,
      lastModified: new Date('2026-04-06'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/clickup-ai-alternative`,
      lastModified: new Date('2026-04-06'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/what-is-kobin`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.98,
    },
    {
      url: `${SITE}/blog/productivity-software-for-agencies`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.98,
    },
    {
      url: `${SITE}/compare/productive-alternative-for-agencies`,
      lastModified: new Date('2026-04-08'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
        {
      url: `${SITE}/compare/kobin-vs-hubspot`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.97,
    },
    {
      url: `${SITE}/blog/hubspot-alternative-for-agencies`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.97,
    },
    {
      url: `${SITE}/blog/proactive-crm-for-agencies`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.96,
    },
    {
      url: `${SITE}/blog/vault-agency-file-management`,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'monthly',
      priority: 0.97,
    },
    {
      url: `${SITE}/vault-for-agencies`,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${SITE}/privacy`,
      lastModified: new Date('2026-04-15'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE}/terms`,
      lastModified: new Date('2026-04-15'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },

 
  ]
}
