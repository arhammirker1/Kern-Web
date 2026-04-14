import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Privacy Policy — Kobin AI',
  description: 'Privacy policy for Kobin AI, the agency operating system.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
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
            <span>privacy</span>
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
              Privacy Policy
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.7 }}>
              Last updated: April 2026
            </p>
          </div>

          {/* Content */}
          <div style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '32px' }}>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                1. Who We Are
              </h2>
              <p>
                Kobin AI (kobin.team) is an agency operating system built for founders and small teams. We are the data controller for information collected through our website and product. You can reach us at <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a>.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                2. Information We Collect
              </h2>
              <p style={{ marginBottom: '12px' }}>We collect the following types of information:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>Email address</strong> — when you join the waitlist or sign up for the newsletter.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Usage data</strong> — pages visited, scroll depth, and time on page, collected via Mixpanel to help us improve the product.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Referral data</strong> — referral codes used when signing up, to power our referral programme.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Browser metadata</strong> — user agent, screen resolution, and referrer URL, collected anonymously for analytics.</li>
                <li><strong style={{ color: 'var(--ink)' }}>User-uploaded files</strong> — documents (PDF, DOCX, XLSX) you upload to the Vault are processed to extract text for project context and search.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Workspace data</strong> — tasks, project details, and team interactions created within the platform.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                3. How We Use Your Information
              </h2>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>To send you your waitlist position and early access invite when your spot opens.</li>
                <li>To send the weekly newsletter if you opted in (you can unsubscribe at any time).</li>
                <li>To understand how people use our website so we can improve it.</li>
                <li>To manage referrals and waitlist position.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                4. Third-Party Services
              </h2>
              <p style={{ marginBottom: '12px' }}>We use the following third-party services to operate Kobin:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>Groq</strong> — provides AI inference models to analyze files and workspace data.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Upstash</strong> — provides high-performance caching for session management and real-time AI context.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Supabase</strong> — stores workspace data, file metadata, and user accounts in a hosted PostgreSQL database.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Resend</strong> — sends transactional emails (waitlist confirmation, welcome email).</li>
                <li><strong style={{ color: 'var(--ink)' }}>Mixpanel</strong> — anonymous usage analytics and event tracking.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Vercel</strong> — hosts the website and API routes.</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                We do not sell your data to any third party.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                5. Google &amp; Gmail Integration
              </h2>
              <p style={{ marginBottom: '12px' }}>
                When you connect Google to your Kobin AI workspace, we request specific scopes such as <code style={{ background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono', monospace", fontSize: '13px' }}>drive.file</code> and <code style={{ background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono', monospace", fontSize: '13px' }}>calendar.events</code>.
              </p>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Gmail Data:</strong> If you enable Gmail integration, our AI models analyze your emails in real-time to provide workspace intelligence (such as risk detection or task suggestions). <strong style={{ color: 'var(--ink)' }}>We do not store your Gmail messages or contact lists</strong> on our servers; they are processed as a transient stream and the original data remains exclusively in your Google account.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                6. AI Data Processing
              </h2>
              <p>
                Kobin AI uses Large Language Models (LLMs) provided by Groq to process text extracted from your files and workspace interactions. This data is used to generate semantic embeddings (stored securely in our database) to power "Ask Vault" and search features. We do not use your proprietary data to train foundation models.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                7. Cookies &amp; Local Storage
              </h2>
              <p>
                We use browser local storage (not cookies) to store your anonymous session ID, popup dismissal state, visit count, and referral link. We do not use tracking cookies for advertising purposes. Google Tag Manager may set cookies for analytics — you can opt out via your browser settings.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                8. Data Retention
              </h2>
              <p>
                Waitlist and newsletter email addresses are retained until you request deletion. Anonymous analytics data is retained for up to 12 months. If you request deletion of your data, we will remove it within 30 days. Email <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a> to request this.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                9. Your Rights
              </h2>
              <p style={{ marginBottom: '12px' }}>You have the right to:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Unsubscribe from emails at any time using the link in any email we send.</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                To exercise any of these rights, email us at <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a>.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                10. Changes to This Policy
              </h2>
              <p>
                We may update this policy as Kobin grows. If we make significant changes, we will notify waitlist members by email. The date at the top of this page reflects the most recent update.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                11. Contact
              </h2>
              <p>
                Questions about this policy? Email <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a> and we will get back to you within 2 business days.
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
              <Link href="/terms" style={{
                fontSize: '13px',
                color: 'var(--ghost)',
                textDecoration: 'none',
                fontFamily: "'Geist Mono', monospace",
              }}>
                Terms of Service
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