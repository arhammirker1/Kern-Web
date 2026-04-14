import Link from 'next/link'
import Nav from '../../components/Nav'

export const metadata = {
  title: 'Privacy Policy — Kobin AI',
  description: 'Privacy policy for Kobin AI, the agency operating system.',
  robots: { index: true, follow: true },
}

const h2Style = { fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.02em' } as const
const codeStyle = { background: 'var(--parch)', padding: '2px 6px', borderRadius: '4px', fontFamily: "'Geist Mono', monospace", fontSize: '13px' } as const

export default function PrivacyPage() {
  return (
    <>
      <Nav activePage="" />
      <div style={{ paddingTop: '56px', background: 'var(--cream)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '64px 24px 120px' }}>

          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--ghost)', marginBottom: '40px', fontFamily: "'Geist Mono', monospace", display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/" style={{ color: 'var(--ghost)', textDecoration: 'none' }}>kobin ai</Link>
            <span style={{ color: 'var(--ghost2)' }}>›</span>
            <span>privacy</span>
          </div>

          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--wire)', paddingBottom: '40px', marginBottom: '40px' }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--vi)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Legal
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '16px' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.7 }}>
              Last updated: April 2026
            </p>
          </div>

          {/* Content */}
          <div style={{ fontSize: '15px', color: 'var(--ghost)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* 1 */}
            <section>
              <h2 style={h2Style}>1. Who We Are</h2>
              <p>
                Kobin AI (kobin.team) is an agency operating system built for founders and small teams. We are the data controller for information collected through our website and product. You can reach us at <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a>.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 style={h2Style}>2. Information We Collect</h2>
              <p style={{ marginBottom: '12px' }}>We collect the following types of information:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>Email address</strong> — when you join the waitlist or sign up for the newsletter.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Usage data</strong> — pages visited, scroll depth, and time on page, collected via Mixpanel to help us improve the product.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Referral data</strong> — referral codes used when signing up, to power our referral programme.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Browser metadata</strong> — user agent, screen resolution, and referrer URL, collected anonymously for analytics.</li>
                <li><strong style={{ color: 'var(--ink)' }}>User-uploaded files</strong> — documents (PDF, DOCX, XLSX) you upload to the Vault. Files are stored securely in Supabase Storage. If a project folder is linked to a Google Drive folder you explicitly created through Kobin AI, a copy may also be stored in that Drive folder under your account.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Workspace data</strong> — tasks, project details, deals, contacts, and team interactions created within the platform, stored in Supabase.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 style={h2Style}>3. How We Use Your Information</h2>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>To send you your waitlist position and early access invite when your spot opens.</li>
                <li>To send the weekly newsletter if you opted in (unsubscribe at any time).</li>
                <li>To understand how people use our website so we can improve it.</li>
                <li>To manage referrals and waitlist position.</li>
                <li>To provide workspace intelligence features such as task extraction, risk detection, and AI-generated summaries.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 style={h2Style}>4. Third-Party Services (Sub-processors)</h2>
              <p style={{ marginBottom: '12px' }}>We use the following third-party services to operate Kobin AI:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong style={{ color: 'var(--ink)' }}>Groq</strong> — provides AI inference models to analyze text extracted from files and workspace data. Your data is not used by Groq to train their models.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Supabase</strong> — stores all workspace data including files, metadata, user accounts, and semantic embeddings in a hosted PostgreSQL database and private object storage.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Upstash</strong> — provides high-performance Redis caching for session management and real-time AI context. Cached data is ephemeral and not persisted beyond the session.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Google</strong> — optional integration for Google Drive file storage (drive.file scope only) and calendar (calendar.events scope). See Section 5 for full details.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Resend</strong> — sends transactional emails (waitlist confirmation, welcome email).</li>
                <li><strong style={{ color: 'var(--ink)' }}>Mixpanel</strong> — anonymous usage analytics and event tracking.</li>
                <li><strong style={{ color: 'var(--ink)' }}>Vercel</strong> — hosts the website and API routes.</li>
              </ul>
              <p style={{ marginTop: '12px' }}>We do not sell your data to any third party.</p>
            </section>

            {/* 5 — Google & Gmail: expanded for Google verification */}
            <section>
              <h2 style={h2Style}>5. Google User Data — Scopes &amp; Usage</h2>
              <p style={{ marginBottom: '12px' }}>
                Kobin AI only accesses Google user data when a user explicitly connects their Google account through the platform settings. All access is governed by OAuth 2.0 and limited to the scopes you explicitly grant.
              </p>

              <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--ink)' }}>Scopes we request and why:</strong></p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <li>
                  <code style={codeStyle}>https://www.googleapis.com/auth/drive.file</code> — Allows Kobin AI to upload files to Google Drive <em>only within folders that Kobin AI itself creates</em> in your Drive. We cannot read, modify, or delete any existing files in your Drive that were not created through Kobin AI.
                </li>
                <li>
                  <code style={codeStyle}>https://www.googleapis.com/auth/calendar.events</code> — Allows Kobin AI to read and create calendar events to power scheduling and pre-meeting briefing features.
                </li>
                <li>
                  <code style={codeStyle}>https://www.googleapis.com/auth/gmail.readonly</code> — <strong style={{ color: 'var(--ink)' }}>Only accessed if you explicitly enable Gmail analysis in Settings.</strong> Used to analyze email content in real-time for workspace intelligence (e.g. risk detection, task extraction). Gmail messages are never stored on Kobin AI servers.
                </li>
              </ul>

              <p style={{ marginBottom: '12px' }}>
                <strong style={{ color: 'var(--ink)' }}>How this data is used:</strong> Google user data is used solely to provide Kobin AI features such as document management (Vault), workflow automation, task extraction, and pre-meeting briefs. <strong style={{ color: 'var(--ink)' }}>We do not sell, share, rent, or use this data for advertising purposes. We do not use it to train AI models.</strong>
              </p>

              <p style={{ marginBottom: '12px' }}>
                <strong style={{ color: 'var(--ink)' }}>File permission model:</strong> The AI cannot access any file or folder in your Google Drive unless that folder was created by Kobin AI or you explicitly grant access. Files uploaded to Vault using the Google Drive integration are placed inside a Kobin AI-created project folder in your Drive. You retain full ownership and control of all Drive files at all times.
              </p>

              <p>
                <strong style={{ color: 'var(--ink)' }}>Gmail data:</strong> If you enable Gmail integration, email content is fetched and analyzed in real-time. <strong style={{ color: 'var(--ink)' }}>Gmail messages, contact lists, and email metadata are never stored on Kobin AI servers.</strong> They are processed as a transient stream and the source data remains exclusively in your Google account. You may disable this integration at any time in Settings.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 style={h2Style}>6. AI Data Processing</h2>
              <p>
                Kobin AI uses Large Language Models (LLMs) provided by Groq to process text extracted from your files and workspace interactions. This data is used to generate semantic embeddings stored securely in Supabase to power features such as "Ask Vault" and intelligent search. <strong style={{ color: 'var(--ink)' }}>We do not use your proprietary data to train AI foundation models. Kobin AI does not make autonomous decisions on behalf of users — all outputs are assistive and require human review before action is taken.</strong>
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 style={h2Style}>7. Data Access &amp; Human Review</h2>
              <p>
                Access to user data within our systems is restricted to automated processes. Human team members do not access your workspace data or files except when strictly required for: (a) debugging a technical issue you have reported, (b) providing direct customer support, or (c) complying with a legal obligation. In all such cases access is logged and time-limited.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 style={h2Style}>8. Cookies &amp; Local Storage</h2>
              <p>
                We use browser local storage (not cookies) to store your anonymous session ID, popup dismissal state, visit count, and referral link. We do not use tracking cookies for advertising purposes. Mixpanel may set first-party analytics cookies — you can opt out via your browser settings.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 style={h2Style}>9. Data Retention</h2>
              <p>
                Waitlist and newsletter email addresses are retained until you request deletion. Workspace data (tasks, files, CRM records) is retained for the lifetime of your account and deleted within 30 days of account deletion. Anonymous analytics data is retained for up to 12 months. Supabase Storage files are deleted when you delete the associated vault item or close your account.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 style={h2Style}>10. Your Rights</h2>
              <p style={{ marginBottom: '12px' }}>You have the right to:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (processed within 30 days).</li>
                <li>Unsubscribe from emails at any time using the link in any email we send.</li>
                <li>Revoke Google account access at any time (see Section 11).</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                To exercise any of these rights, email us at <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a>.
              </p>
            </section>

            {/* 11 — Google-required deletion clause */}
            <section>
              <h2 style={h2Style}>11. Google Data Deletion &amp; Revocation</h2>
              <p style={{ marginBottom: '12px' }}>
                You can revoke Kobin AI's access to your Google account at any time by visiting <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--vi)', textDecoration: 'none' }}>myaccount.google.com/permissions</a>. Upon revocation, Kobin AI will immediately lose access to your Google data and all associated features (Drive Vault, Calendar, Gmail analysis) will be disabled.
              </p>
              <p style={{ marginBottom: '12px' }}>
                To request deletion of any Kobin AI-stored data derived from your Google account (such as embeddings generated from file content), email <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a> with the subject line "Google Data Deletion Request". We will process your request within 30 days and confirm via email.
              </p>
              <p>
                Files uploaded to Google Drive through Kobin AI remain in <em>your</em> Google Drive account. You can delete them directly from Google Drive at any time. Kobin AI does not retain copies of Drive-stored files on its own servers.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 style={h2Style}>12. Changes to This Policy</h2>
              <p>
                We may update this policy as Kobin AI grows. If we make material changes, we will notify active users by email. The date at the top of this page reflects the most recent update.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 style={h2Style}>13. Contact</h2>
              <p>
                Questions about this policy? Email <a href="mailto:support@kobin.team" style={{ color: 'var(--vi)', textDecoration: 'none' }}>support@kobin.team</a> and we will get back to you within 2 business days.
              </p>
            </section>

          </div>

          {/* Footer nav */}
          <div style={{ borderTop: '1px solid var(--wire)', paddingTop: '40px', marginTop: '64px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/" style={{ fontSize: '13px', color: 'var(--ghost)', textDecoration: 'none', fontFamily: "'Geist Mono', monospace" }}>
                ← Back to home
              </Link>
              <Link href="/terms" style={{ fontSize: '13px', color: 'var(--ghost)', textDecoration: 'none', fontFamily: "'Geist Mono', monospace" }}>
                Terms of Service
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