// lib/supabase/server.ts
// ─────────────────────────────────────────────────────────────────────────────
// SERVER-SIDE ONLY — this file is never sent to the browser.
// Uses the SERVICE_ROLE_KEY which has full DB access.
// Only import this in:  app/api/**/route.ts  files
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = process.env.SUPABASE_URL
const serviceKey   = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceKey) {
  throw new Error(
    'Missing Supabase env variables. ' +
    'Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local or Vercel dashboard.'
  )
}

// createClient is called once per module load (singleton)
export const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    // Service role doesn't use sessions
    persistSession: false,
    autoRefreshToken: false,
  },
})
