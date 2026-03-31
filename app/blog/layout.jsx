// NEW FILE: app/blog/layout.jsx
export const metadata = {
  title: 'Blog — Essays for Agency Founders | Kobin',
  robots: { index: true, follow: true },
  description: 'Essays, guides, and honest writing about running an agency without losing your mind. Tool consolidation, AI, and founder operations.',
  keywords: ['agency blog', 'agency founder essays', 'SaaS tool consolidation', 'agency operating system blog', 'context switching productivity'],
  alternates: { canonical: 'https://www.kobin.team/blog' },
  openGraph: {
    title: 'The Kobin Blog — For Founders Who Build',
    description: 'Essays and guides on agency tool consolidation, context switching, AI, and founder operations.',
    url: 'https://www.kobin.team/blog',
    type: 'website',
    siteName: 'Kobin',
  },
}

export default function BlogLayout({ children }) {
  return children
}