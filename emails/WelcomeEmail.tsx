import {
  Body, Button, Container, Head, Heading, Hr,
  Html, Img, Link, Preview, Section, Text, Row, Column
} from '@react-email/components'
import * as React from 'react'

interface WelcomeEmailProps {
  email: string
  position: number
  refLink: string
  source?: string
}

export function WelcomeEmail({ email, position, refLink, source }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{`You're #${position} on the Kobin waitlist — here's your referral link`}</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* ── HEADER ── */}
          <Section style={header}>
            <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse' }}>
              <tr>
                <td>
                  <Img
                    src="https://www.kobin.team/kobin_icon_180.png"
                    width={36}
                    height={36}
                    alt="Kobin"
                    style={{ borderRadius: '9px', display: 'block' }}
                  />
                </td>
                <td style={{ paddingLeft: '12px', verticalAlign: 'middle' }}>
                  <span style={wordmark}>Kobin</span>
                </td>
              </tr>
            </table>
          </Section>

          {/* ── POSITION BADGE ── */}
          <Section style={badgeSection}>
            <table cellPadding={0} cellSpacing={0} style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
              <tr>
                <td style={badge}>
                  <Text style={badgeLabel}>WAITLIST POSITION</Text>
                  <Text style={badgeNum}>#{position}</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* ── HEADLINE ── */}
          <Section style={section}>
            <Heading style={h1}>You're in.</Heading>
            <Text style={para}>
              Hey — you're #{position} on the Kobin waitlist. We're letting people in waves, and you'll get your access link the moment your spot opens up.
            </Text>
            <Text style={para}>
              Kobin is the agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer — one workspace, one login, zero context switching.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* ── REFERRAL ── */}
          <Section style={section}>
            <Heading style={h2}>Move up the list.</Heading>
            <Text style={para}>
              Every founder you refer moves you closer to the front. The top 10 referrers get lifetime free access.
            </Text>

            <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%', marginTop: '16px', marginBottom: '16px', backgroundColor: '#F6F4EF', border: '1px solid #E0DDD6', borderRadius: '10px' }}>
              <tr>
                <td style={{ padding: '16px 20px' }}>
                  <Text style={refLabel}>YOUR REFERRAL LINK</Text>
                  <Text style={refLinkStyle}>{refLink}</Text>
                </td>
              </tr>
            </table>

            <Button style={btn} href={refLink}>
              Share your referral link →
            </Button>

            <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%', marginTop: '24px' }}>
              <tr>
                <td style={stepCol}>
                  <table cellPadding={0} cellSpacing={0} style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                    <tr><td style={stepNum}>1</td></tr>
                  </table>
                  <Text style={stepLabel}>Share your link</Text>
                </td>
                <td style={stepCol}>
                  <table cellPadding={0} cellSpacing={0} style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                    <tr><td style={stepNum}>2</td></tr>
                  </table>
                  <Text style={stepLabel}>Friend joins waitlist</Text>
                </td>
                <td style={stepCol}>
                  <table cellPadding={0} cellSpacing={0} style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                    <tr><td style={stepNum}>3</td></tr>
                  </table>
                  <Text style={stepLabel}>You move up</Text>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={divider} />

          {/* ── FEATURES ── */}
          <Section style={section}>
            <Heading style={h2}>What you're getting access to.</Heading>
            <Text style={para}>Eight modules. One workspace.</Text>

            <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%', marginTop: '16px' }}>
              <tr>
                <td style={{ verticalAlign: 'top', paddingRight: '16px' }}>
                  <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tr><td style={featureRow}><Text style={featureName}>💬 Real-Time Inbox</Text><Text style={featureSub}>Replaces Slack</Text></td></tr>
                    <tr><td style={featureRow}><Text style={featureName}>🗄️ Vault</Text><Text style={featureSub}>Replaces Notion + Drive</Text></td></tr>
                    <tr><td style={featureRow}><Text style={featureName}>✅ Tasks & Projects</Text><Text style={featureSub}>Replaces Linear</Text></td></tr>
                    <tr><td style={featureRow}><Text style={featureName}>🤝 CRM</Text><Text style={featureSub}>Replaces HubSpot</Text></td></tr>
                  </table>
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tr><td style={featureRow}><Text style={featureName}>🏢 Client Portal</Text><Text style={featureSub}>Built-in, no extra cost</Text></td></tr>
                    <tr><td style={featureRow}><Text style={featureName}>📅 Calendar</Text><Text style={featureSub}>Google Meet included</Text></td></tr>
                    <tr><td style={featureRow}><Text style={featureName}>✍️ LinkedIn Studio</Text><Text style={featureSub}>Replaces Buffer</Text></td></tr>
                    <tr><td style={featureRow}><Text style={featureName}>🤖 AI Layer</Text><Text style={featureSub}>Live — @AI + ⌘K</Text></td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={divider} />

          {/* ── PRICING ── */}
          <Section style={pricingSection}>
            <Text style={pricingLabel}>FOUNDING PRICE — LOCKED IN FOR YOU</Text>
            <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tr>
                <td style={planCol}>
                  <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                    <tr><td style={{ padding: '16px', textAlign: 'center' }}>
                      <Text style={planName}>Solo</Text>
                      <Text style={planPrice}>$19<span style={planPer}>/mo</span></Text>
                      <Text style={planDesc}>1 user · 3 projects</Text>
                    </td></tr>
                  </table>
                </td>
                <td style={planCol}>
                  <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'rgba(76,63,212,0.15)', border: '1px solid rgba(76,63,212,0.35)', borderRadius: '12px' }}>
                    <tr><td style={{ padding: '16px', textAlign: 'center' }}>
                      <Text style={planName}>Founder</Text>
                      <Text style={planPrice}>$49<span style={planPer}>/mo</span></Text>
                      <Text style={planDesc}>5 members · 3 portals</Text>
                    </td></tr>
                  </table>
                </td>
                <td style={planCol}>
                  <table cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                    <tr><td style={{ padding: '16px', textAlign: 'center' }}>
                      <Text style={planName}>Agency</Text>
                      <Text style={planPrice}>$99<span style={planPer}>/mo</span></Text>
                      <Text style={planDesc}>Unlimited everything</Text>
                    </td></tr>
                  </table>
                </td>
              </tr>
            </table>
            <Text style={pricingNote}>14-day free trial · No credit card required</Text>
          </Section>

          <Hr style={divider} />

          {/* ── FOOTER ── */}
          <Section style={footerSection}>
            <Text style={footerText}>Questions? Reply to this email — it goes straight to Arham.</Text>
            <Text style={footerText}>
              <Link href="https://www.kobin.team" style={footerLink}>kobin.team</Link>
              {' · '}
              <Link href="https://www.kobin.team/blog" style={footerLink}>Blog</Link>
              {' · '}
              <Link href="https://www.kobin.team/docs" style={footerLink}>Docs</Link>
              {' · '}
              <Link href="https://www.instagram.com/kobin.ai/" style={footerLink}>Instagram</Link>
            </Text>
            <Text style={footerMuted}>
              © 2026 Kobin. You received this because you joined the waitlist at kobin.team.
              {' '}<Link href="{{unsubscribe}}" style={{ color: '#9C9890' }}>Unsubscribe</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeEmail

// ── Styles ────────────────────────────────────────────────────────────────────

const body: React.CSSProperties = {
  backgroundColor: '#F6F4EF',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  margin: 0,
  padding: 0,
}
const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '40px auto',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  border: '1px solid #E0DDD6',
  overflow: 'hidden',
}
const header: React.CSSProperties = {
  padding: '24px 40px',
  borderBottom: '1px solid #E0DDD6',
  backgroundColor: '#0E0E0D',
}
const wordmark: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#F0EDE6',
  letterSpacing: '-0.02em',
}
const badgeSection: React.CSSProperties = {
  padding: '32px 40px 0',
  textAlign: 'center',
}
const badge: React.CSSProperties = {
  padding: '16px 32px',
  backgroundColor: '#EEF0FF',
  border: '1px solid #C5BFFF',
  borderRadius: '12px',
  textAlign: 'center',
}
const badgeLabel: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: '500',
  color: '#4C3FD4',
  letterSpacing: '0.1em',
  margin: '0 0 4px',
}
const badgeNum: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: '700',
  color: '#4C3FD4',
  letterSpacing: '-0.03em',
  lineHeight: '1',
  margin: '0',
}
const section: React.CSSProperties = { padding: '32px 40px' }
const h1: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#0E0E0D',
  letterSpacing: '-0.03em',
  margin: '0 0 16px',
  lineHeight: '1.1',
}
const h2: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#0E0E0D',
  letterSpacing: '-0.02em',
  margin: '0 0 12px',
  lineHeight: '1.2',
}
const para: React.CSSProperties = {
  fontSize: '15px',
  color: '#7A776F',
  lineHeight: '1.7',
  margin: '0 0 12px',
}
const divider: React.CSSProperties = { borderColor: '#E0DDD6', margin: '0' }
const refLabel: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: '500',
  color: '#4C3FD4',
  letterSpacing: '0.1em',
  margin: '0 0 6px',
}
const refLinkStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#0E0E0D',
  fontFamily: "'Courier New', Courier, monospace",
  margin: '0',
  wordBreak: 'break-all',
}
const btn: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#4C3FD4',
  color: '#ffffff',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '500',
  textDecoration: 'none',
}
const stepCol: React.CSSProperties = {
  textAlign: 'center',
  padding: '0 8px',
  verticalAlign: 'top',
}
const stepNum: React.CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '16px',
  backgroundColor: '#4C3FD4',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  padding: '6px 0',
}
const stepLabel: React.CSSProperties = {
  fontSize: '13px',
  color: '#7A776F',
  margin: '8px 0 0',
  textAlign: 'center',
}
const featureRow: React.CSSProperties = { paddingBottom: '12px' }
const featureName: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#0E0E0D',
  margin: '0 0 2px',
}
const featureSub: React.CSSProperties = {
  fontSize: '12px',
  color: '#9C9890',
  margin: '0',
}
const pricingSection: React.CSSProperties = {
  padding: '32px 40px',
  backgroundColor: '#0E0E0D',
}
const pricingLabel: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: '500',
  color: '#555552',
  letterSpacing: '0.1em',
  textAlign: 'center',
  margin: '0 0 16px',
}
const planCol: React.CSSProperties = {
  padding: '0 6px',
  verticalAlign: 'top',
}
const planName: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: '500',
  color: '#9896FF',
  letterSpacing: '0.08em',
  margin: '0 0 8px',
}
const planPrice: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#F0EDE6',
  letterSpacing: '-0.03em',
  margin: '0 0 4px',
  lineHeight: '1',
}
const planPer: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: '400',
  color: '#555552',
}
const planDesc: React.CSSProperties = {
  fontSize: '11px',
  color: '#555552',
  margin: '4px 0 0',
}
const pricingNote: React.CSSProperties = {
  fontSize: '12px',
  color: '#555552',
  textAlign: 'center',
  margin: '16px 0 0',
}
const footerSection: React.CSSProperties = {
  padding: '24px 40px 32px',
  textAlign: 'center',
}
const footerText: React.CSSProperties = {
  fontSize: '13px',
  color: '#9C9890',
  margin: '0 0 8px',
  textAlign: 'center',
}
const footerLink: React.CSSProperties = {
  color: '#7A776F',
  textDecoration: 'none',
}
const footerMuted: React.CSSProperties = {
  fontSize: '11px',
  color: '#C5C2BB',
  margin: '16px 0 0',
  textAlign: 'center',
  lineHeight: '1.6',
}