// NEW FILE: app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kobin.team',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.kobin.team/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.kobin.team/blog/the-283-problem',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.kobin.team/docs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}