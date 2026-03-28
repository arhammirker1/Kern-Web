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
      <Preview>You're #{position} on the Kobin waitlist — here's your referral link</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <table cellPadding={0} cellSpacing={0} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <tr>
                    <td>
                      <div style={logoWrap}>
                        <Img
                          src="https://www.kobin.team/kobin_icon_180.png"
                          width={32}
                          height={32}
                          alt="Kobin"
                          style={{ borderRadius: '8px' }}
                        />
                      </div>
                    </td>
                    <td style={{ paddingLeft: '10px' }}>
                      <span style={wordmark}>Kobin</span>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Position badge */}
          <Section style={badgeSection}>
            <div style={badge}>
              <span style={badgeLabel}>WAITLIST POSITION</span>
              <span style={badgeNum}>#{position}</span>
            </div>
          </Section>

          {/* Headline */}
          <Section style={section}>
            <Heading style={h1}>You're in.</Heading>
            <Text style={para}>
              Hey — you're <strong style={{ color: '#0E0E0D' }}>#{position}</strong> on the Kobin waitlist.
              We're letting people in in waves, and you'll get your access link the moment your spot opens up.
            </Text>
            <Text style={para}>
              Kobin is the agency operating system that replaces Slack, Notion, HubSpot, Linear, and Buffer —
              one workspace, one login, zero context switching.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Referral section */}
          <Section style={section}>
            <Heading style={h2}>Move up the list.</Heading>
            <Text style={para}>
              Every founder you refer moves you closer to the front.
              The top 10 referrers get <strong style={{ color: '#0E0E0D' }}>lifetime free access</strong>.
            </Text>

            {/* Ref link box */}
            <div style={refBox}>
              <Text style={refLabel}>YOUR REFERRAL LINK</Text>
              <Text style={refLink_style}>{refLink}</Text>
            </div>

            <Button style={btn} href={refLink}>
              Copy your referral link →
            </Button>

            {/* Steps */}
            <Row style={{ marginTop: '24px' }}>
              {[
                { n: '1', label: 'Share your link' },
                { n: '2', label: 'Friend joins waitlist' },
                { n: '3', label: 'You move up' },
              ].map(({ n, label }) => (
                <Column key={n} style={stepCol}>
                  <div style={stepNum}>{n}</div>
                  <Text style={stepLabel}>{label}</Text>
                </Column>
              ))}
            </Row>
          </Section>

          <Hr style={divider} />

          {/* What's inside */}
          <Section style={section}>
            <Heading style={h2}>What you're getting access to.</Heading>
            <Text style={para}>Eight modules. One workspace.</Text>

            <Row style={{ marginTop: '16px' }}>
              <Column style={featureCol}>
                {[
                  ['💬', 'Real-Time Inbox', 'Replaces Slack'],
                  ['🗄️', 'Vault', 'Replaces Notion + Drive'],
                  ['✅', 'Tasks & Projects', 'Replaces Linear'],
                  ['🤝', 'CRM', 'Replaces HubSpot'],
                ].map(([icon, name, sub]) => (
                  <div key={name} style={featureRow}>
                    <span style={featureIcon}>{icon}</span>
                    <div>
                      <Text style={featureName}>{name}</Text>
                      <Text style={featureSub}>{sub}</Text>
                    </div>
                  </div>
                ))}
              </Column>
              <Column style={featureCol}>
                {[
                  ['🏢', 'Client Portal', 'Built-in, no extra cost'],
                  ['📅', 'Calendar', 'Google Meet included'],
                  ['✍️', 'LinkedIn Studio', 'Replaces Buffer'],
                  ['🤖', 'AI Layer', 'Coming soon'],
                ].map(([icon, name, sub]) => (
                  <div key={name} style={featureRow}>
                    <span style={featureIcon}>{icon}</span>
                    <div>
                      <Text style={featureName}>{name}</Text>
                      <Text style={featureSub}>{sub}</Text>
                    </div>
                  </div>
                ))}
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Pricing reminder */}
          <Section style={pricingSection}>
            <Row>
              <Column style={{ textAlign: 'center' }}>
                <Text style={pricingLabel}>FOUNDING PRICE — LOCKED IN FOR YOU</Text>
                <Row>
                  {[
                    { plan: 'Solo', price: '$19', desc: '1 user · 3 projects' },
                    { plan: 'Founder', price: '$49', desc: '5 members · 3 portals' },
                    { plan: 'Agency', price: '$99', desc: 'Unlimited everything' },
                  ].map(({ plan, price, desc }) => (
                    <Column key={plan} style={planCol}>
                      <div style={planCard}>
                        <Text style={planName}>{plan}</Text>
                        <Text style={planPrice}>{price}<span style={planPer}>/mo</span></Text>
                        <Text style={planDesc}>{desc}</Text>
                      </div>
                    </Column>
                  ))}
                </Row>
                <Text style={pricingNote}>14-day free trial · No credit card required</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Questions? Reply to this email — it goes straight to Arham.
            </Text>
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
              © 2026 Kobin. You're receiving this because you joined the waitlist at kobin.team.
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
  margin: 0, padding: 0,
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

const logoWrap: React.CSSProperties = {
  width: '36px', height: '36px',
  borderRadius: '9px',
  backgroundColor: '#0E0E0D',
  display: 'inline-flex',
  alignItems: 'center', justifyContent: 'center',
}

const wordmark: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#F0EDE6',
  letterSpacing: '-0.02em',
  verticalAlign: 'middle',
}

const badgeSection: React.CSSProperties = {
  padding: '32px 40px 0',
  textAlign: 'center',
}

const badge: React.CSSProperties = {
  display: 'inline-block',
  padding: '16px 32px',
  backgroundColor: 'rgba(76,63,212,0.06)',
  border: '1px solid rgba(76,63,212,0.2)',
  borderRadius: '12px',
  textAlign: 'center',
}

const badgeLabel: React.CSSProperties = {
  display: 'block',
  fontSize: '11px',
  fontWeight: '500',
  color: '#4C3FD4',
  letterSpacing: '0.1em',
  marginBottom: '6px',
}

const badgeNum: React.CSSProperties = {
  display: 'block',
  fontSize: '48px',
  fontWeight: '700',
  color: '#4C3FD4',
  letterSpacing: '-0.03em',
  lineHeight: '1',
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

const divider: React.CSSProperties = {
  borderColor: '#E0DDD6',
  margin: '0',
}

const refBox: React.CSSProperties = {
  backgroundColor: '#F6F4EF',
  border: '1px solid #E0DDD6',
  borderRadius: '10px',
  padding: '16px 20px',
  margin: '16px 0',
}

const refLabel: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: '500',
  color: '#4C3FD4',
  letterSpacing: '0.1em',
  margin: '0 0 6px',
}

const refLink_style: React.CSSProperties = {
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
  margin: '4px 0',
}

const stepCol: React.CSSProperties = {
  textAlign: 'center',
  padding: '0 8px',
}

const stepNum: React.CSSProperties = {
  width: '32px', height: '32px',
  borderRadius: '50%',
  backgroundColor: '#4C3FD4',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  display: 'inline-flex',
  alignItems: 'center', justifyContent: 'center',
  margin: '0 auto 8px',
}

const stepLabel: React.CSSProperties = {
  fontSize: '13px',
  color: '#7A776F',
  margin: '0',
  textAlign: 'center',
}

const featureCol: React.CSSProperties = { padding: '0 8px' }

const featureRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  marginBottom: '14px',
}

const featureIcon: React.CSSProperties = {
  fontSize: '16px',
  marginTop: '2px',
  flexShrink: 0,
}

const featureName: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#0E0E0D',
  margin: '0',
  lineHeight: '1.3',
}

const featureSub: React.CSSProperties = {
  fontSize: '12px',
  color: '#9C9890',
  margin: '2px 0 0',
  lineHeight: '1.3',
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
  margin: '0 0 20px',
}

const planCol: React.CSSProperties = { padding: '0 6px' }

const planCard: React.CSSProperties = {
  backgroundColor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  padding: '16px',
  textAlign: 'center',
}

const planName: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: '500',
  color: '#555552',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
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

const footer: React.CSSProperties = {
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