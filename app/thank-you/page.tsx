import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'You\'re on the list — Kobin',
  description: 'You\'ve joined the Kobin waitlist. We\'ll be in touch soon with your early access.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 80px',
        background: 'var(--cream)',
      }}>
        <div style={{
          maxWidth: '520px',
          width: '100%',
          textAlign: 'center',
        }}>

          {/* Icon */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'var(--vi)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14l6 6L23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            You&apos;re on the list.
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--ghost)',
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: '40px',
          }}>
            We&apos;ll send your early access link to your inbox soon. Founding pricing is locked for everyone on this list.
          </p>

          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '40px',
          }}>
            {[
              { num: '$49/mo', label: 'Founding price locked' },
              { num: '14 days', label: 'Free trial included' },
              { num: '0', label: 'Credit card needed' },
            ].map(({ num, label }) => (
              <div key={label} style={{
                background: '#fff',
                border: '1px solid var(--wire)',
                borderRadius: '12px',
                padding: '16px 12px',
              }}>
                <div style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--vi)',
                  marginBottom: '4px',
                }}>{num}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--ghost)',
                  fontFamily: "'Geist Mono', monospace",
                }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Referral nudge */}
          <div style={{
            background: 'var(--ink)',
            borderRadius: '16px',
            padding: '28px 32px',
            marginBottom: '32px',
            textAlign: 'left',
          }}>
            <div style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              color: 'var(--vi2)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              Move up the waitlist
            </div>
            <p style={{
              fontSize: '14px',
              color: '#9C9890',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Share your referral link (sent to your inbox) and skip the queue. Every referral moves you up. <span style={{ color: '#9896FF', fontWeight: 500 }}>Top 10 get lifetime free access.</span>
            </p>
          </div>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/blog" style={{
              padding: '12px 24px',
              background: 'var(--vi)',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}>
              Read the blog →
            </Link>
            <Link href="/" style={{
              padding: '12px 24px',
              background: '#fff',
              color: 'var(--ink)',
              border: '1px solid var(--wire)',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
            }}>
              Back to home
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}