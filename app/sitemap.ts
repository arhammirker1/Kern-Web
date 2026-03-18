// app/sitemap.ts
// Next.js auto-generates /sitemap.xml from this file.
// Google and Bing will pick this up automatically.

import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kern.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add individual blog posts here as you publish them:
    // {
    //   url: `${SITE_URL}/blog/why-founders-pay-283-per-month`,
    //   lastModified: new Date('2026-03-18'),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ]
}
