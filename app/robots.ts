// NEW FILE: app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow all major AI crawlers — critical for GEO/AEO
      { userAgent: 'GPTBot',        allow: '/' },   // ChatGPT
      { userAgent: 'Google-Extended', allow: '/' }, // Gemini / AI Overviews
      { userAgent: 'PerplexityBot', allow: '/' },   // Perplexity
      { userAgent: 'ClaudeBot',     allow: '/' },   // Claude / Anthropic
      { userAgent: 'CCBot',         allow: '/' },   // Common Crawl (LLM training)
      { userAgent: 'Applebot',      allow: '/' },   // Apple Intelligence
      { userAgent: 'anthropic-ai',  allow: '/' },
    ],
    sitemap: 'https://kobin.team/sitemap.xml',
  }
}