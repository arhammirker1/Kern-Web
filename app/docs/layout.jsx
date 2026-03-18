// NEW FILE: app/docs/layout.jsx
export const metadata = {
  title: 'Documentation — Kern',
  description: 'Complete documentation for Kern — the agency operating system. Setup guides, module references, AI layer docs, and integration guides.',
  alternates: { canonical: 'https://kern.app/docs' },
  openGraph: {
    title: 'Kern Documentation',
    description: 'Complete setup guides, module references, and AI layer documentation for Kern.',
    url: 'https://kern.app/docs',
    type: 'website',
  },
}

export default function DocsLayout({ children }) {
  return children
}