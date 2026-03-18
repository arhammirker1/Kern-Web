# Kern Marketing Site

Next.js 15 · TypeScript · Supabase · Vercel

---

## File Structure

```
kern-site/
├── .env.local.example          ← Copy to .env.local, fill in values
├── next.config.ts              ← Security headers, redirects
├── tsconfig.json
├── package.json
│
├── app/
│   ├── layout.tsx              ← Root layout: SEO metadata, fonts, JSON-LD
│   ├── page.tsx                ← Landing page (/ route)
│   ├── sitemap.ts              ← Auto-generates /sitemap.xml
│   ├── robots.ts               ← Auto-generates /robots.txt
│   │
│   ├── docs/
│   │   └── page.tsx            ← /docs route
│   │
│   ├── blog/
│   │   └── page.tsx            ← /blog route
│   │
│   └── api/
│       ├── waitlist/
│       │   └── route.ts        ← POST /api/waitlist  ← SECRET KEY LIVES HERE
│       └── newsletter/
│           └── route.ts        ← POST /api/newsletter
│
├── components/
│   ├── landing-page.tsx        ← Landing page JSX + WaitlistForm
│   ├── blog-page.tsx           ← Blog JSX + NewsletterForm
│   └── docs-page.tsx           ← Docs JSX
│
├── lib/
│   └── supabase/
│       └── server.ts           ← Supabase client (SERVER ONLY, never sent to browser)
│
└── public/
    ├── og-image.png            ← 1200×630 Open Graph image (add this!)
    ├── favicon.ico
    └── kern_mascot_k.png       ← The K mascot PNG
```

---

## Security: Why keys are safe

```
Browser                    Next.js Server              Supabase
   │                           │                           │
   │  POST /api/waitlist        │                           │
   │  { email: "..." }  ──────▶│                           │
   │                           │  SUPABASE_SERVICE_ROLE_KEY│
   │                           │  ─────────────────────────▶
   │                           │                           │
   │  { position: 5, ... } ◀───│  ◀─────────────────────── │
   │                           │                           │
```

The `SUPABASE_SERVICE_ROLE_KEY` never leaves the server.
The browser only ever sends email to `/api/waitlist`.

---

## Environment Variables

### Local development

```bash
cp .env.local.example .env.local
# Fill in .env.local with your real values
```

### Vercel (production)

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these two variables:

| Variable Name | Value | Where to find |
|---|---|---|
| `SUPABASE_URL` | `https://xxxx.supabase.co` | Supabase → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJh...` | Supabase → Settings → API → service_role key |
| `NEXT_PUBLIC_SITE_URL` | `https://kern.app` | Your domain |

⚠️ **NEVER** put `SUPABASE_SERVICE_ROLE_KEY` in a `NEXT_PUBLIC_` variable.
⚠️ **NEVER** commit `.env.local` to git (it's in `.gitignore` by default).

---

## Setup steps

### 1. Database (Supabase)
Run `supabase-setup.sql` in: Supabase Dashboard → SQL Editor → New query

### 2. Install
```bash
npm install
```

### 3. Dev server
```bash
cp .env.local.example .env.local
# Edit .env.local with your keys
npm run dev
```

### 4. Integrate your HTML pages

Each component file has a comment block showing exactly where to paste
your existing HTML content and what to replace:

**Landing page** (`components/landing-page.tsx`):
- Replace hero form with `<WaitlistForm inputId="email1" successId="hero-success" formId="hero-form" source="hero" />`
- Replace final CTA form with `<WaitlistForm inputId="email-final" successId="final-success" formId={null} source="final_cta" />`
- Remove all `<script>` tags
- Change `class=` to `className=` throughout

**Blog** (`components/blog-page.tsx`):
- Replace `<button onclick="newsletterSignup()">` section with `<NewsletterForm />`

**Docs** (`components/docs-page.tsx`):
- No forms — just paste HTML and rename `class=` to `className=`

### 5. Deploy to Vercel
```bash
npx vercel --prod
```
Or connect your GitHub repo in Vercel dashboard for auto-deploys.

---

## SEO checklist

- [ ] Add `public/og-image.png` (1200×630px) for social sharing
- [ ] Add `public/favicon.ico`
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your real domain
- [ ] Submit sitemap to Google Search Console: `https://kern.app/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add Google Analytics / Plausible in `app/layout.tsx`
