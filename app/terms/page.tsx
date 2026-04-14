import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Terms of Service — Kobin AI',
  description: 'Terms of service for Kobin AI, the agency operating system.',
  robots: { index: true, follow: true },
}

const h2Style = { fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' } as const

export default function TermsPage() {
  return (
    <>
      <Nav activePage="" />
      <div style={{ paddingTop: '56px', background: 'var(--cream)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 120px' }}>

          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--ghost)', marginBottom: '40px', fontFamily: "'Geist Mono', monospace", display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/" style={{ color: 'var(--ghost)', textDecoration: 'none' }}>kobin ai</Link>
            <span style={{ color: 'var(--ghost2)' }}>›</span>
            <span>terms</span>
          </div>

          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--wire)', paddingBottom: '40px', marginBottom: '40px' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Legal
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '16px' }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.7 }}>
              Last updated: April 2026
            </p>
          </div>

          {/* Content */}
          <div style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* 1 */}
            <section>
              <h2 style={h2Style}>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Kobin AI (kobin.team), you agree to be bound by these Terms of Service and our <Link href="/privacy" style={{ color: 'var(--vi)', textDecoration: 'none' }}>Privacy Policy</Link>. If you do not agree to these terms, please do not use our service. We reserve the right to modify these terms at any time with reasonable notice.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 style={h2Style}>2. Description of Service</h2>
              <p>
                Kobin AI is an agency operating system providing tools for task management, client communication, knowledge management (Vault), CRM, and AI-powered workspace intelligence. We optionally integrate with third-party services including Google Drive, Gmail, and Google Calendar when you explicitly connect them.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 style={h2Style}>3. User Accounts &amp; Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorised use at <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a>. We reserve the right to suspend accounts believed to be compromised or used for fraudulent activity.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 style={h2Style}>4. Acceptable Use</h2>
              <p style={{ marginBottom: '12px' }}>You agree not to use Kobin AI to:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Upload or transmit any content that is unlawful, harmful, or infringes on third-party intellectual property rights.</li>
                <li>Attempt to gain unauthorised access to our systems, other users' accounts, or any connected Google accounts.</li>
                <li>Use AI features to generate or distribute malicious content, spam, deepfakes, or deliberate misinformation.</li>
                <li>Reverse engineer, decompile, or extract source code from the platform.</li>
                <li>Use the service in a way that disproportionately burdens our infrastructure.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 style={h2Style}>5. Google Integration &amp; User Data</h2>
              <p style={{ marginBottom: '12px' }}>
                Kobin AI integrates with Google services (Drive, Calendar, Gmail) only when you explicitly connect your Google account. By connecting, you grant Kobin AI permission to access the stated OAuth scopes on your behalf as described in our <Link href="/privacy" style={{ color: 'var(--vi)', textDecoration: 'none' }}>Privacy Policy</Link>.
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>Drive:</strong> Kobin AI only accesses files and folders it creates in your Drive. It cannot read, modify, or delete pre-existing Drive content.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Gmail:</strong> Gmail analysis is off by default. If you enable it, email content is analyzed in real-time and never stored on Kobin AI servers.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Revoking access:</strong> You may disconnect your Google account from Kobin AI at any time in Settings or directly via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--vi)', textDecoration: 'none' }}>myaccount.google.com/permissions</a>.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 style={h2Style}>6. AI Features &amp; Disclaimer</h2>
              <p style={{ marginBottom: '12px' }}>
                Kobin AI provides AI-generated responses and workspace intelligence powered by Groq LLMs. While we strive for accuracy, AI outputs may be incomplete or incorrect.
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>No autonomous action:</strong> Kobin AI does not make autonomous decisions on behalf of users. All AI outputs are assistive and require human review before any action is taken.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Ownership:</strong> You own the data you input into Kobin AI and the outputs generated for your specific use case. We do not claim ownership over your content.</li>
                <li><strong style={{ color: 'var(--ink)' }}>No training on your data:</strong> Your proprietary content is not used to train AI foundation models.</li>
                <li><strong style={{ color: 'var(--ink)' }}>No warranty:</strong> AI outputs are provided "as-is" without warranty of accuracy. Always verify AI-generated information before acting on it.</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 style={h2Style}>7. Intellectual Property</h2>
              <p>
                The Kobin AI platform — including its software, design, branding, and AI features — is the property of Kobin. You are granted a limited, non-exclusive, non-transferable licence to use the platform for your internal business operations. This licence does not include the right to resell, redistribute, or sublicence the service.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 style={h2Style}>8. Subscriptions &amp; Billing</h2>
              <p>
                Kobin AI offers subscription plans billed monthly or annually. Fees are non-refundable except where required by applicable law. We may update pricing with at least 30 days' notice. Your continued use of the service after a price change constitutes acceptance of the new fees. You may cancel your subscription at any time; access continues until the end of your current billing period.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 style={h2Style}>9. Service Availability</h2>
              <p>
                Kobin AI does not guarantee uninterrupted or error-free service. We aim for high availability but maintenance windows, infrastructure outages, or third-party service failures may cause temporary disruptions. Features may be modified, paused, or discontinued at any time; we will provide reasonable notice for significant changes where possible.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 style={h2Style}>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Kobin AI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total aggregate liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 style={h2Style}>11. Termination</h2>
              <p>
                We may suspend or terminate your access to Kobin AI if you violate these Terms or misuse the platform. Where possible, we will notify you and give you an opportunity to resolve the issue before termination. Upon termination, your right to use the service ceases immediately. You may export your workspace data prior to termination using the data export tools available in Settings.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 style={h2Style}>12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which Kobin operates, without regard to conflict of law principles. Any disputes will be resolved through good-faith negotiation before any formal legal proceedings.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 style={h2Style}>13. Contact</h2>
              <p>
                Questions about these terms? Email <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a> and we will respond within 2 business days.
              </p>
            </section>

          </div>

          {/* Footer nav */}
          <div style={{ borderTop: '1px solid var(--wire)', paddingTop: '40px', marginTop: '64px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/" style={{ fontSize: '13px', color: 'var(--ghost)', textDecoration: 'none', fontFamily: "'Geist Mono', monospace" }}>
                ← Back to home
              </Link>
              <Link href="/privacy" style={{ fontSize: '13px', color: 'var(--ghost)', textDecoration: 'none', fontFamily: "'Geist Mono', monospace" }}>
                Privacy Policy
              </Link>
            </div>
            <a href="mailto:support@kobin.team" style={{ fontSize: '13px', color: 'var(--vi)', textDecoration: 'none', fontFamily: "'Geist Mono', monospace" }}>
              support@kobin.team
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
