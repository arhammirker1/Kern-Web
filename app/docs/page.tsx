// app/docs/page.tsx
import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs-page'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Kern documentation — quick start guide, module reference, integrations, team permissions, and API overview.',
  alternates: { canonical: '/docs' },
  openGraph: {
    title: 'Kern Documentation',
    description: 'Everything you need to set up and use Kern.',
    url: '/docs',
  },
}

export default function Docs() {
  return <DocsPage />
}
