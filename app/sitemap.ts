// NEW FILE: app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kern-web.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kern-web.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://kern-web.vercel.app/blog/the-283-problem',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://kern-web.vercel.app/docs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}