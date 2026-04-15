import type { NextConfig } from 'next'

const config: NextConfig = {
  // ── SEO / Performance ──────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,

  // ── Image optimisation ─────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.producthunt.com' },
      { protocol: 'https', hostname: 'ph-files.imgix.net' },
    ],
  },

  // ── Security Headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',          value: 'DENY' },
          { key: 'X-Content-Type-Options',   value: 'nosniff' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection',         value: '1; mode=block' },
          // HSTS — tells browsers to always use HTTPS for 2 years
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // CSP — blocks XSS, limits resource origins
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.googletagmanager.com https://analytics.ahrefs.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.mixpanel.com https://api-js.mixpanel.com https://cdn.mxpnl.com https://www.google-analytics.com https://www.googletagmanager.com https://api.anthropic.com https://sandbox.api.getsafepay.com https://api.getsafepay.com",
              "frame-src https://www.googletagmanager.com https://www.producthunt.com https://sandbox.getsafepay.com https://getsafepay.com",
              "worker-src blob: 'self'",
              "form-action 'self' https://sandbox.getsafepay.com https://getsafepay.com",
            ].join('; '),
          },
        ],
      },
    ]
  },

  // ── Redirects ──────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // non-www → www  (www.kobin.team is the canonical domain)
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'kobin.team' }],
        destination: 'https://www.kobin.team/:path*',
        permanent: true,
      },
    ]
  },
}

export default config