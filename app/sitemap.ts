import { MetadataRoute } from 'next'

const SITE = 'https://www.kobin.team'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE}/blog`,
      lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}