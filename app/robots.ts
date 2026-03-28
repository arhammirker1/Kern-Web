import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: 'https://www.kobin.team/sitemap.xml',
    host: 'https://www.kobin.team',
  }
}