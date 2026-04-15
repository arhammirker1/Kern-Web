/**
 * app/api/admin/stats/route.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Dashboard analytics endpoint.
 * Returns aggregate stats for the admin panel.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest } from 'next/server'
import { verifySession } from '@/lib/admin-auth'
import { getAdminDB } from '@/lib/admin-db'

export async function GET(req: NextRequest) {
  // Auth check
  const authError = verifySession(req)
  if (authError) return authError

  const db = getAdminDB()

  try {
    // ── Run all queries in parallel ──────────────────────────────────────
    const [
      profilesResult,
      subscriptionsResult,
      newUsers7dResult,
      newUsers30dResult,
      googleIntResult,
      vaultItemsResult,
      meetingRecResult,
      tasksResult,
      chatRoomsResult,
      waitlistResult,
      recentUsersResult,
    ] = await Promise.all([
      // Total users by plan
      db.from('profiles').select('plan, user_type, created_by'),

      // Subscriptions
      db.from('subscriptions').select('plan, status'),

      // New signups last 7 days
      db.from('profiles')
        .select('id', { count: 'exact', head: true })
        .gte('updated_at', new Date(Date.now() - 7 * 86400000).toISOString())
        .is('created_by', null), // Only founders (not team/client accounts)

      // New signups last 30 days
      db.from('profiles')
        .select('id', { count: 'exact', head: true })
        .gte('updated_at', new Date(Date.now() - 30 * 86400000).toISOString())
        .is('created_by', null),

      // Google integrations (connected)
      db.from('google_integrations')
        .select('id', { count: 'exact', head: true })
        .eq('is_connected', true),

      // Total vault items
      db.from('vault_items')
        .select('id', { count: 'exact', head: true }),

      // Meeting recordings
      db.from('meeting_recordings_raw')
        .select('id', { count: 'exact', head: true }),

      // Total tasks
      db.from('tasks')
        .select('id', { count: 'exact', head: true }),

      // Chat rooms
      db.from('chat_rooms')
        .select('id', { count: 'exact', head: true }),

      // Waitlist count (from marketing Supabase — lazy import to avoid crash if env vars missing)
      (async () => {
        try {
          const { supabase: waitlistDB } = await import('@/lib/supabase/server')
          return waitlistDB.from('waitlist').select('*', { count: 'exact', head: true })
        } catch {
          return { count: 0 }
        }
      })(),

      // Recent user signups (last 10)
      db.from('profiles')
        .select('id, email, full_name, plan, user_type, updated_at')
        .is('created_by', null)
        .order('updated_at', { ascending: false })
        .limit(10),
    ])

    // ── Process plan breakdown ───────────────────────────────────────────
    const profiles = profilesResult.data || []
    const founders = profiles.filter((p: any) => !p.created_by && p.user_type !== 'team_member' && p.user_type !== 'client')
    const teamMembers = profiles.filter((p: any) => p.user_type === 'team_member')
    const clients = profiles.filter((p: any) => p.user_type === 'client')

    const planBreakdown = {
      free: founders.filter((p: any) => p.plan === 'free' || !p.plan).length,
      pro: founders.filter((p: any) => p.plan === 'pro').length,
      agency: founders.filter((p: any) => p.plan === 'agency').length,
    }

    // ── Process subscription status ──────────────────────────────────────
    const subs = subscriptionsResult.data || []
    const subStatus = {
      active: subs.filter((s: any) => s.status === 'active').length,
      cancelled: subs.filter((s: any) => s.status === 'cancelled').length,
      past_due: subs.filter((s: any) => s.status === 'past_due').length,
    }

    return Response.json({
      users: {
        total_founders: founders.length,
        total_team_members: teamMembers.length,
        total_clients: clients.length,
        total_all: profiles.length,
        by_plan: planBreakdown,
        new_7d: newUsers7dResult.count || 0,
        new_30d: newUsers30dResult.count || 0,
      },
      subscriptions: {
        total: subs.length,
        by_status: subStatus,
      },
      engagement: {
        google_connected: googleIntResult.count || 0,
        vault_items: vaultItemsResult.count || 0,
        meeting_recordings: meetingRecResult.count || 0,
        total_tasks: tasksResult.count || 0,
        chat_rooms: chatRoomsResult.count || 0,
      },
      waitlist: {
        total: waitlistResult.count || 0,
      },
      recent_users: recentUsersResult.data || [],
    })
  } catch (err) {
    console.error('[admin/stats] Error:', err)
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
