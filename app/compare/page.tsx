import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Compare Kobin vs Slack, Notion, Asana, HubSpot — Agency Tool Comparisons | Kobin',
  description:
    'Side-by-side comparisons of Kobin against Slack, Notion, Asana, HubSpot, and more. Real pricing, real features, honest verdicts — so you can make the right switch for your agency.',
  keywords: [
    'kobin vs slack',
    'kobin vs notion',
    'kobin vs asana',
    'kobin vs hubspot',
    'slack alternative for agencies',
    'notion alternative for agencies',
    'agency tool comparison 2026',
    'best agency software comparison',
  ],
  alternates: { canonical: 'https://www.kobin.team/compare' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Compare Kobin — vs Slack, Notion, Asana, HubSpot',
    description: 'Honest, data-backed comparisons between Kobin and the tools it replaces.',
    type: 'website',
    url: 'https://www.kobin.team/compare',
    siteName: 'Kobin',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const comparisons = [
  {
    slug: 'slack-alternative-for-agencies',
    competitor: 'Slack',
    tagline: 'Slack alternative for agencies',
    summary:
      'Slack charges $87/month for messaging alone — no tasks, no CRM, no client portal. Kobin replaces it with a natively connected workspace for $49/month total.',
    saves: '$87/mo',
    badge: 'Most searched',
    badgeStyle: { background: 'rgba(76,63,212,0.1)', color: 'var(--vi)' },
  },
  {
    slug: 'notion-alternative-for-agencies',
    competitor: 'Notion',
    tagline: 'Notion alternative with enforced structure',
    summary:
      "Notion is infinitely flexible — which means it becomes a digital junk drawer. Kobin Vault uses Google Drive with mandatory metadata and role-scoped folders.",
    saves: '$48/mo',
    badge: null,
  },
  {
    slug: 'asana-alternative-for-agencies',
    competitor: 'Asana',
    tagline: 'Asana alternative for client delivery',
    summary:
      "Asana is designed for engineering sprints, not agency time horizons. Kobin's Today / This Week / Delegated / Backlog system maps to how founders actually work.",
    saves: '$55/mo',
    badge: null,
  },
  {
    slug: 'hubspot-alternative-for-agencies',
    competitor: 'HubSpot',
    tagline: 'HubSpot alternative for small agencies',
    summary:
      'HubSpot Starter costs $90/month for a 5-person agency and is designed for enterprise sales teams. Kobin includes a built-in CRM for agency founders at no extra cost.',
    saves: '$90/mo',
    badge: 'Best value swap',
    badgeStyle: { background: 'rgba(13,107,79,0.1)', color: '#0D6B4F' },
  },
]

export default function ComparePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kobin vs Competitor Comparisons',
    description: 'Side-by-side comparisons of Kobin against popular agency tools.',
    numberOfItems: comparisons.length,
    itemListElement: comparisons.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Kobin vs ${c.competitor}`,
      url: `https://www.kobin.team/compare/${c.slug}`,
    })),
  }

  return (
    <>
      <Nav activePage="compare" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="blog-post-layout">
        <div className="blog-post-inner">
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--ghost)', marginBottom: '32px', fontFamily: "'Geist Mono', monospace", display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/" style={{ color: 'var(--ghost)', textDecoration: 'none' }}>kobin</Link>
            <span style={{ color: 'var(--ghost2)' }}>›</span>
            <span>compare</span>
          </div>

          {/* Hero */}
          <div style={{ borderBottom: '1px solid var(--wire)', paddingBottom: '40px', marginBottom: '40px' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Comparisons
            </div>
            <h1 className="post-h1" style={{ marginBottom: '16px' }}>
              Kobin vs. every tool<br />it replaces
            </h1>
            <p className="post-subtitle" style={{ marginBottom: 0 }}>
              Honest, data-backed comparisons. Real pricing as of April 2026. No affiliate links — we just explain why agencies are consolidating onto one workspace.
            </p>
          </div>

          {/* Comparison cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                style={{ textDecoration: 'none', display: 'block', background: '#fff', border: '1px solid var(--wire)', borderRadius: '14px', padding: '28px 32px', transition: 'all 0.2s', position: 'relative' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--ghost2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Kobin vs
                      </span>
                      <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{c.competitor}</span>
                      {c.badge && (
                        <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '100px', fontFamily: "'Geist Mono', monospace", ...c.badgeStyle }}>
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--ghost)', lineHeight: 1.65, margin: 0 }}>{c.summary}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
                    <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '12px', color: '#0D6B4F', background: 'rgba(13,107,79,0.08)', border: '1px solid rgba(13,107,79,0.15)', padding: '4px 10px', borderRadius: '6px' }}>
                      saves {c.saves}
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--vi)', fontWeight: 500 }}>
                      Read comparison →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Total saving callout */}
          <div style={{ background: 'var(--ink)', borderRadius: '16px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: '#555552', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Total monthly saving</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '48px', fontWeight: 300, color: '#F0EDE6', letterSpacing: '-0.03em', marginBottom: '8px' }}>$234/month</div>
            <p style={{ fontSize: '14px', color: '#555552', marginBottom: '24px' }}>when you replace Slack + Notion + Asana + HubSpot + Buffer with Kobin Founder ($49/month)</p>
            <Link href="/#waitlist" style={{ display: 'inline-block', background: 'var(--vi)', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
              Join the waitlist →
            </Link>
          </div>

          {/* Back to blog */}
          <div style={{ borderTop: '1px solid var(--wire)', paddingTop: '32px' }}>
            <Link href="/blog" style={{ fontSize: '13px', color: 'var(--ghost)', textDecoration: 'none', fontFamily: "'Geist Mono', monospace" }}>
              ← All posts
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}