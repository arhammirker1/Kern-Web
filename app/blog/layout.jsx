// NEW FILE: app/blog/layout.jsx
export const metadata = {
  title: 'Blog — Essays for Agency Founders',
  description: 'Essays, guides, and honest writing about running an agency without losing your mind. Tool consolidation, AI, and founder operations.',
  alternates: { canonical: 'https://kern-web.vercel.app/blog' },
  openGraph: {
    title: 'The Kern Blog — For Founders Who Build',
    description: 'Essays and guides on agency tool consolidation, context switching, AI, and founder operations.',
    url: 'https://kern-web.vercel.app/blog',
    type: 'website',
  },
}

export default function BlogLayout({ children }) {
  return children
}