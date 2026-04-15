/**
 * lib/admin-db.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * SERVER-SIDE ONLY — Isolated Supabase client for the Founder-Assistant DB.
 *
 * This is completely separate from the waitlist Supabase connection in
 * lib/supabase.js and lib/supabase/server.ts.
 *
 * Uses ADMIN_SUPABASE_URL + ADMIN_SUPABASE_SERVICE_KEY env vars.
 * These point to the Founder-Assistant project (profiles, subscriptions, etc.)
 *
 * Only imported in: app/api/admin/**/route.ts
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _adminClient: SupabaseClient | null = null

export function getAdminDB(): SupabaseClient {
  if (_adminClient) return _adminClient

  const url = process.env.ADMIN_SUPABASE_URL
  const key = process.env.ADMIN_SUPABASE_SERVICE_KEY

  if (!url || !key) {
    throw new Error(
      '[admin-db] Missing ADMIN_SUPABASE_URL or ADMIN_SUPABASE_SERVICE_KEY. ' +
      'Set these in your .env.local or Vercel dashboard.'
    )
  }

  _adminClient = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })

  return _adminClient
}
