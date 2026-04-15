/**
 * app/api/admin/users/[id]/route.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single user detail and update endpoint.
 *
 * GET   — Full user detail (profile + subscription + team + vault + activity)
 * PATCH — Update user plan, subscription status, or other fields
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest } from 'next/server'
import { verifySession } from '@/lib/admin-auth'
import { getAdminDB } from '@/lib/admin-db'

// ── GET /api/admin/users/[id] ────────────────────────────────────────────────
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = verifySession(req)
  if (authError) return authError

  const { id } = await params
  const db = getAdminDB()

  try {
    // Fetch all data in parallel
    const [
      profileResult,
      subscriptionResult,
      teamMembersResult,
      projectsResult,
      clientsResult,
      vaultItemsResult,
      googleResult,
      tasksResult,
      meetingsResult,
      aiChatsResult,
    ] = await Promise.all([
      // Profile
      db.from('profiles')
        .select('*')
        .eq('id', id)
        .single(),

      // Subscription
      db.from('subscriptions')
        .select('*')
        .eq('founder_id', id)
        .maybeSingle(),

      // Team members
      db.from('team_members')
        .select(`
          id,
          user_id,
          position,
          is_active,
          created_at
        `)
        .eq('founder_id', id),

      // Projects
      db.from('projects')
        .select('id, name, status, created_at')
        .or(`user_id.eq.${id},founder_id.eq.${id}`)
        .order('created_at', { ascending: false })
        .limit(20),

      // Clients
      db.from('clients')
        .select('id', { count: 'exact', head: true })
        .eq('founder_id', id),

      // Vault items
      db.from('vault_items')
        .select('id', { count: 'exact', head: true })
        .eq('founder_id', id),

      // Google integration
      db.from('google_integrations')
        .select('is_connected, gmail_connected, drive_connected, google_email, updated_at')
        .eq('user_id', id)
        .maybeSingle(),

      // Tasks count
      db.from('tasks')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', id),

      // Meetings count
      db.from('meeting_recordings_raw')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', id),

      // AI command chats count
      db.from('ai_command_chats')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', id),
    ])

    if (profileResult.error || !profileResult.data) {
      return Response.json({ error: 'User not found' }, { status: 404 })
    }

    // Get team member emails
    let teamMembers = teamMembersResult.data || []
    if (teamMembers.length > 0) {
      const tmUserIds = teamMembers.map((tm: any) => tm.user_id)
      const { data: tmProfiles } = await db
        .from('profiles')
        .select('id, email, full_name')
        .in('id', tmUserIds)

      if (tmProfiles) {
        const profileMap = Object.fromEntries(tmProfiles.map((p: any) => [p.id, p]))
        teamMembers = teamMembers.map((tm: any) => ({
          ...tm,
          email: profileMap[tm.user_id]?.email,
          full_name: profileMap[tm.user_id]?.full_name,
        }))
      }
    }

    return Response.json({
      profile: profileResult.data,
      subscription: subscriptionResult.data,
      team_members: teamMembers,
      projects: projectsResult.data || [],
      stats: {
        clients: clientsResult.count || 0,
        vault_items: vaultItemsResult.count || 0,
        tasks: tasksResult.count || 0,
        meetings: meetingsResult.count || 0,
        ai_chats: aiChatsResult.count || 0,
      },
      google_integration: googleResult.data,
    })
  } catch (err) {
    console.error('[admin/users/id] GET error:', err)
    return Response.json({ error: 'Failed to fetch user' }, { status: 500 })
  }
}

// ── PATCH /api/admin/users/[id] ──────────────────────────────────────────────
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = verifySession(req)
  if (authError) return authError

  const { id } = await params
  const db = getAdminDB()

  try {
    const body = await req.json()

    // Validate allowed fields
    const allowedFields = ['plan']
    const updates: Record<string, any> = {}

    for (const key of allowedFields) {
      if (body[key] !== undefined) {
        updates[key] = body[key]
      }
    }

    // Validate plan value
    if (updates.plan && !['free', 'pro', 'agency'].includes(updates.plan)) {
      return Response.json({ error: 'Invalid plan value' }, { status: 400 })
    }

    if (Object.keys(updates).length === 0) {
      return Response.json({ error: 'No valid fields to update' }, { status: 400 })
    }

    // Update profile
    const { error: profileError } = await db
      .from('profiles')
      .update(updates)
      .eq('id', id)

    if (profileError) throw profileError

    // If plan changed, also update or create subscription record
    if (updates.plan) {
      const { data: existingSub } = await db
        .from('subscriptions')
        .select('id')
        .eq('founder_id', id)
        .maybeSingle()

      if (existingSub) {
        await db
          .from('subscriptions')
          .update({
            plan: updates.plan,
            status: 'active',
            updated_at: new Date().toISOString(),
          })
          .eq('founder_id', id)
      } else {
        await db
          .from('subscriptions')
          .insert({
            founder_id: id,
            plan: updates.plan,
            status: 'active',
          })
      }
    }

    return Response.json({ ok: true, updated: updates })
  } catch (err) {
    console.error('[admin/users/id] PATCH error:', err)
    return Response.json({ error: 'Failed to update user' }, { status: 500 })
  }
}
