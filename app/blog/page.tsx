// app/blog/page.tsx
import type { Metadata } from 'next'
import { BlogPage } from '@/components/blog-page'

export const metadata: Metadata = {
  title: 'Blog — For Founders Who Build',
  description:
    'Essays, guides, and honest writing about running an agency without losing your mind. Tool stack analysis, build logs, and founder stories.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Kern Blog — For Founders Who Build',
    description: 'No fluff. Just signal. Essays on tools, agencies, and building in public.',
    url: '/blog',
  },
}

export default function Blog() {
  return <BlogPage />
}
