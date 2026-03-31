// NEW FILE: app/docs/layout.jsx
export const metadata = {
  title: 'Documentation — Kobin Agency Operating System',
  description: 'Complete documentation for Kobin — the agency operating system. Setup guides, inbox, task management, CRM, client portal, vault, calendar, LinkedIn Studio, and AI layer docs.',
  keywords: ['kobin documentation', 'agency operating system docs', 'kobin setup guide', 'kobin AI layer docs', 'agency software documentation'],
  alternates: { canonical: 'https://www.kobin.team/docs' },
  openGraph: {
    title: 'Kobin Documentation — Agency Operating System',
    description: 'Complete setup guides, module references, and AI layer documentation for Kobin.',
    url: 'https://www.kobin.team/docs',
    type: 'website',
    siteName: 'Kobin',
  },
}

export default function DocsLayout({ children }) {
  return children
}