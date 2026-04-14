import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Terms of Service — Kobin AI',
  description: 'Terms of service for Kobin AI, the agency operating system.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <Nav activePage="" />
      <div style={{
        paddingTop: '56px',
        background: 'var(--cream)',
        minHeight: '100vh',
      }}>
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '64px 24px 120px',
        }}>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '13px',
            color: 'var(--ghost)',
            marginBottom: '40px',
            fontFamily: "'Geist Mono', monospace",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <Link href="/" style={{ color: 'var(--ghost)', textDecoration: 'none' }}>kobin ai</Link>
            <span style={{ color: 'var(--ghost2)' }}>›</span>
            <span>terms</span>
          </div>

          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--wire)', paddingBottom: '40px', marginBottom: '40px' }}>
            <div style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: '11px',
              color: 'var(--vi)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Legal
            </div>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.7 }}>
              Last updated: April 2026
            </p>
          </div>

          {/* Content */}
          <div style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '32px' }}>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Kobin AI (kobin.team), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service. Kobin AI is provided "as-is" and we reserve the right to modify these terms at any time.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                2. Description of Service
              </h2>
              <p>
                Kobin AI is an agency operating system that provides tools for task management, client communication, file storage (Vault), CRM, and AI-powered workspace intelligence. We integrate with third-party services like Google Drive and Gmail to enhance your workflow.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                3. User Accounts &amp; Security
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. We reserve the right to terminate accounts that violate our safety policies or are used for fraudulent activities.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                4. Acceptable Use
              </h2>
              <p style={{ marginBottom: '12px' }}>You agree not to use Kobin AI to:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Upload or transmit any content that is unlawful, harmful, or infringes on intellectual property rights.</li>
                <li>Attempt to gain unauthorized access to our systems or other users' data.</li>
                <li>Use our AI features to generate or distribute malicious content, deepfakes, or misinformation.</li>
                <li>Reverse engineer or attempt to extract the source code of the platform.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                5. AI Disclaimer &amp; Content
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Kobin AI provides AI-generated responses and workspace intelligence. While we strive for accuracy, AI outputs may occasionally be incorrect, incomplete, or biased.
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>Ownership:</strong> You own the data you input into Kobin AI and the outputs generated by our AI features for your specific use case.</li>
                <li><strong style={{ color: 'var(--ink)' }}>No Warranty:</strong> AI outputs are provided "as-is" without any warranty of accuracy or fitness for a particular purpose. You should verify all AI-generated tasks and information before taking critical actions.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                6. Intellectual Property
              </h2>
              <p>
                The Kobin AI platform, including its software, design, and branding, is the property of Kobin. You are granted a limited, non-exclusive license to use the platform for your business operations. This license does not include the right to resell or redistribute the service.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                7. Subscriptions &amp; Billing
              </h2>
              <p>
                Kobin AI offers various subscription tiers. Fees are non-refundable except where required by law. We may change our pricing with 30 days' notice. Your continued use of the service after a price change constitutes acceptance of the new fees.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Kobin AI shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform. Our total liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                9. Termination
              </h2>
              <p>
                We may suspend or terminate your access to Kobin AI at any time, with or without cause. Upon termination, your right to use the service will immediately cease. You may export your data prior to termination subject to the technical capabilities of the platform.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                10. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the jurisdiction in which Kobin operates, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                11. Contact
              </h2>
              <p>
                Questions about these terms? Email <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a>.
              </p>
            </section>

          </div>

          {/* Footer nav */}
          <div style={{
            borderTop: '1px solid var(--wire)',
            paddingTop: '40px',
            marginTop: '64px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/" style={{
                fontSize: '13px',
                color: 'var(--ghost)',
                textDecoration: 'none',
                fontFamily: "'Geist Mono', monospace",
              }}>
                ← Back to home
              </Link>
              <Link href="/privacy" style={{
                fontSize: '13px',
                color: 'var(--ghost)',
                textDecoration: 'none',
                fontFamily: "'Geist Mono', monospace",
              }}>
                Privacy Policy
              </Link>
            </div>
            <a href="mailto:support@kobin.team" style={{
              fontSize: '13px',
              color: 'var(--vi)',
              textDecoration: 'none',
              fontFamily: "'Geist Mono', monospace",
            }}>
              support@kobin.team
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
