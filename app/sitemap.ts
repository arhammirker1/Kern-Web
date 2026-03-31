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
      url: `${SITE}/blog/the-283-problem`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE}/docs`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
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
  ]
}