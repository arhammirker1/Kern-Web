/**
 * app/api/admin/users/route.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * List all users with plan and subscription data.
 * Supports search via ?q= query param.
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
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('q')?.trim()
  const planFilter = searchParams.get('plan')
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = Math.min(parseInt(searchParams.get('limit') || '50', 10), 100)
  const offset = (page - 1) * limit

  try {
    // Build the query — only fetch founder profiles (not team/client accounts)
    let dbQuery = db
      .from('profiles')
      .select(`
        id,
        email,
        full_name,
        plan,
        user_type,
        avatar_url,
        ai_mode,
        settings,
        updated_at
      `)
      .is('created_by', null) // Only founders
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit - 1)

    // Search filter
    if (query) {
      dbQuery = dbQuery.or(`email.ilike.%${query}%,full_name.ilike.%${query}%`)
    }

    // Plan filter
    if (planFilter && ['free', 'pro', 'agency'].includes(planFilter)) {
      dbQuery = dbQuery.eq('plan', planFilter)
    }

    const { data: profiles, error: profilesError } = await dbQuery

    if (profilesError) throw profilesError

    // Get subscription data for these users
    const founderIds = (profiles || []).map((p: any) => p.id)

    let subscriptions: Record<string, any> = {}
    if (founderIds.length > 0) {
      const { data: subs } = await db
        .from('subscriptions')
        .select('founder_id, plan, status, stripe_customer_id, current_period_end, trial_ends_at')
        .in('founder_id', founderIds)

      if (subs) {
        for (const sub of subs) {
          subscriptions[sub.founder_id] = sub
        }
      }
    }

    // Get team member counts per founder
    let teamCounts: Record<string, number> = {}
    if (founderIds.length > 0) {
      const { data: teams } = await db
        .from('team_members')
        .select('founder_id')
        .in('founder_id', founderIds)

      if (teams) {
        for (const tm of teams) {
          teamCounts[tm.founder_id] = (teamCounts[tm.founder_id] || 0) + 1
        }
      }
    }

    // Get total count for pagination
    let countQuery = db
      .from('profiles')
      .select('id', { count: 'exact', head: true })
      .is('created_by', null)

    if (query) {
      countQuery = countQuery.or(`email.ilike.%${query}%,full_name.ilike.%${query}%`)
    }
    if (planFilter && ['free', 'pro', 'agency'].includes(planFilter)) {
      countQuery = countQuery.eq('plan', planFilter)
    }

    const { count: totalCount } = await countQuery

    // Merge data
    const users = (profiles || []).map((profile: any) => ({
      ...profile,
      subscription: subscriptions[profile.id] || null,
      team_count: teamCounts[profile.id] || 0,
    }))

    return Response.json({
      users,
      pagination: {
        page,
        limit,
        total: totalCount || 0,
        total_pages: Math.ceil((totalCount || 0) / limit),
      },
    })
  } catch (err) {
    console.error('[admin/users] Error:', err)
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
