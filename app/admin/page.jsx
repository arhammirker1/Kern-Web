'use client'

import { useState, useEffect, useCallback } from 'react'
import './admin.css'

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatDateShort(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getInitials(name, email) {
  if (name) return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  if (email) return email[0].toUpperCase()
  return '?'
}

const AVATAR_COLORS = ['#6358e8', '#34d399', '#fbbf24', '#f87171', '#60a5fa', '#a78bfa', '#f472b6', '#fb923c']
function getAvatarColor(id) {
  if (!id) return AVATAR_COLORS[0]
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = ((hash << 5) - hash) + id.charCodeAt(i)
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

// ── API helpers ──────────────────────────────────────────────────────────────

async function apiGet(path) {
  const res = await fetch(path, { credentials: 'include' })
  if (res.status === 401) throw new Error('AUTH_EXPIRED')
  if (!res.ok) throw new Error('API error')
  return res.json()
}

async function apiPatch(path, body) {
  const res = await fetch(path, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  })
  if (res.status === 401) throw new Error('AUTH_EXPIRED')
  if (!res.ok) throw new Error('API error')
  return res.json()
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [checking, setChecking] = useState(true)

  // Check existing session on mount
  useEffect(() => {
    fetch('/api/admin/auth', { credentials: 'include' })
      .then(r => {
        if (r.ok) setAuthed(true)
      })
      .finally(() => setChecking(false))
  }, [])

  if (checking) {
    return (
      <div className="admin-root">
        <div className="admin-login">
          <div className="login-card" style={{ textAlign: 'center', padding: '80px 40px' }}>
            <div className="skeleton" style={{ width: 200, height: 40, margin: '0 auto' }} />
          </div>
        </div>
      </div>
    )
  }

  if (!authed) {
    return <LoginScreen onSuccess={() => setAuthed(true)} />
  }

  return <Dashboard onLogout={() => setAuthed(false)} />
}

// ── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onSuccess }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    if (!password.trim()) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Authentication failed')
        return
      }

      onSuccess()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-root">
      <div className="admin-login">
        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-logo">
            <img src="/kobin_icon_32.png" width="28" height="28" alt="Kobin AI" />
            <span>Kobin AI</span>
            <span className="login-badge">Admin</span>
          </div>

          <h2 className="login-title">Admin Console</h2>
          <p className="login-subtitle">
            Enter your admin password to access the dashboard.
          </p>

          <input
            type="password"
            className="login-input"
            placeholder="Admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            autoComplete="current-password"
          />

          <button type="submit" className="login-btn" disabled={loading || !password.trim()}>
            {loading ? 'Verifying...' : 'Sign In'}
          </button>

          {error && <div className="login-error">{error}</div>}
        </form>
      </div>
    </div>
  )
}

// ── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ onLogout }) {
  const [stats, setStats] = useState(null)
  const [users, setUsers] = useState([])
  const [pagination, setPagination] = useState({ page: 1, total: 0, total_pages: 1 })
  const [search, setSearch] = useState('')
  const [planFilter, setPlanFilter] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [toast, setToast] = useState(null)
  const [loadingStats, setLoadingStats] = useState(true)
  const [loadingUsers, setLoadingUsers] = useState(true)

  // Show toast
  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  // Load stats
  useEffect(() => {
    setLoadingStats(true)
    apiGet('/api/admin/stats')
      .then(data => setStats(data))
      .catch(err => {
        if (err.message === 'AUTH_EXPIRED') onLogout()
      })
      .finally(() => setLoadingStats(false))
  }, [onLogout])

  // Load users
  const loadUsers = useCallback((page = 1) => {
    setLoadingUsers(true)
    const params = new URLSearchParams()
    params.set('page', String(page))
    if (search) params.set('q', search)
    if (planFilter) params.set('plan', planFilter)

    apiGet(`/api/admin/users?${params}`)
      .then(data => {
        setUsers(data.users || [])
        setPagination(data.pagination || { page: 1, total: 0, total_pages: 1 })
      })
      .catch(err => {
        if (err.message === 'AUTH_EXPIRED') onLogout()
      })
      .finally(() => setLoadingUsers(false))
  }, [search, planFilter, onLogout])

  useEffect(() => {
    const debounce = setTimeout(() => loadUsers(1), 300)
    return () => clearTimeout(debounce)
  }, [loadUsers])

  // Logout
  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE', credentials: 'include' })
    onLogout()
  }

  // Plan update
  async function handlePlanUpdate(userId, newPlan) {
    try {
      await apiPatch(`/api/admin/users/${userId}`, { plan: newPlan })
      showToast(`Plan updated to ${newPlan.toUpperCase()}`)
      loadUsers(pagination.page)
      // Refresh stats
      apiGet('/api/admin/stats').then(data => setStats(data))
    } catch (err) {
      if (err.message === 'AUTH_EXPIRED') return onLogout()
      showToast('Failed to update plan', 'error')
    }
  }

  return (
    <div className="admin-root">
      <div className="admin-dash">
        {/* ── Top Bar ── */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <img src="/kobin_icon_32.png" width="24" height="24" alt="Kobin AI" />
            <span>Kobin AI</span>
            <span className="topbar-badge">Admin</span>
          </div>
          <div className="topbar-right">
            <div className="topbar-status">
              <span className="topbar-status-dot" />
              Connected
            </div>
            <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main className="admin-main">

          {/* ── Stats Grid ── */}
          <div className="admin-section-title">Overview</div>
          {loadingStats ? (
            <div className="stats-grid">
              {[1,2,3,4].map(i => (
                <div key={i} className="stat-card"><div className="skeleton" style={{ height: 80 }} /></div>
              ))}
            </div>
          ) : stats && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-label">Total Founders</div>
                  <div className="stat-value">{stats.users.total_founders}</div>
                  <div className="stat-sub">
                    <span className="stat-badge green">+{stats.users.new_7d} this week</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Team Members</div>
                  <div className="stat-value">{stats.users.total_team_members}</div>
                  <div className="stat-sub">
                    <span className="stat-badge blue">{stats.users.total_clients} clients</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Active Subscriptions</div>
                  <div className="stat-value">{stats.subscriptions.by_status.active}</div>
                  <div className="stat-sub">
                    {stats.subscriptions.by_status.past_due > 0 && (
                      <span className="stat-badge amber">{stats.subscriptions.by_status.past_due} past due</span>
                    )}
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Waitlist</div>
                  <div className="stat-value">{stats.waitlist.total}</div>
                  <div className="stat-sub">
                    <span className="stat-badge vi">kobin.team</span>
                  </div>
                </div>
              </div>

              {/* ── Plan Distribution ── */}
              <div className="admin-section-title">Plan Distribution</div>
              <div className="plan-distribution">
                <div className="plan-bar plan-free">
                  <div className="plan-bar-label">Free</div>
                  <div className="plan-bar-value">{stats.users.by_plan.free}</div>
                  <div className="plan-bar-pct">
                    {stats.users.total_founders > 0
                      ? Math.round((stats.users.by_plan.free / stats.users.total_founders) * 100)
                      : 0}%
                  </div>
                </div>
                <div className="plan-bar plan-pro">
                  <div className="plan-bar-label">Pro</div>
                  <div className="plan-bar-value">{stats.users.by_plan.pro}</div>
                  <div className="plan-bar-pct">
                    {stats.users.total_founders > 0
                      ? Math.round((stats.users.by_plan.pro / stats.users.total_founders) * 100)
                      : 0}%
                  </div>
                </div>
                <div className="plan-bar plan-agency">
                  <div className="plan-bar-label">Agency</div>
                  <div className="plan-bar-value">{stats.users.by_plan.agency}</div>
                  <div className="plan-bar-pct">
                    {stats.users.total_founders > 0
                      ? Math.round((stats.users.by_plan.agency / stats.users.total_founders) * 100)
                      : 0}%
                  </div>
                </div>
              </div>

              {/* ── Engagement ── */}
              <div className="admin-section-title">Feature Engagement</div>
              <div className="engagement-grid">
                <div className="engage-card">
                  <div className="engage-icon">📧</div>
                  <div className="engage-value">{stats.engagement.google_connected}</div>
                  <div className="engage-label">Google Connected</div>
                </div>
                <div className="engage-card">
                  <div className="engage-icon">📁</div>
                  <div className="engage-value">{stats.engagement.vault_items}</div>
                  <div className="engage-label">Vault Items</div>
                </div>
                <div className="engage-card">
                  <div className="engage-icon">🎙️</div>
                  <div className="engage-value">{stats.engagement.meeting_recordings}</div>
                  <div className="engage-label">Meetings</div>
                </div>
                <div className="engage-card">
                  <div className="engage-icon">✅</div>
                  <div className="engage-value">{stats.engagement.total_tasks}</div>
                  <div className="engage-label">Tasks</div>
                </div>
                <div className="engage-card">
                  <div className="engage-icon">💬</div>
                  <div className="engage-value">{stats.engagement.chat_rooms}</div>
                  <div className="engage-label">Chat Rooms</div>
                </div>
              </div>

              {/* ── Recent Users ── */}
              {stats.recent_users?.length > 0 && (
                <div className="recent-users">
                  <h4>Recent Signups</h4>
                  {stats.recent_users.map(user => (
                    <div className="recent-row" key={user.id}>
                      <div className="recent-user-info">
                        <div className="user-avatar" style={{ background: getAvatarColor(user.id), width: 28, height: 28, fontSize: 10 }}>
                          {getInitials(user.full_name, user.email)}
                        </div>
                        <div>
                          <div className="recent-user-name">{user.full_name || user.email}</div>
                          <div className="recent-user-email">{user.email}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span className={`plan-badge-cell ${user.plan || 'free'}`}>
                          {user.plan || 'free'}
                        </span>
                        <span className="recent-user-date">{formatDateShort(user.updated_at)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* ── Users Table ── */}
          <div className="users-section">
            <div className="admin-section-title">User Management</div>

            <div className="users-header">
              <div className="users-search">
                <svg className="users-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="plan-filters">
                {['', 'free', 'pro', 'agency'].map(p => (
                  <button
                    key={p}
                    className={`plan-filter-btn ${planFilter === p ? 'active' : ''}`}
                    onClick={() => setPlanFilter(p)}
                  >
                    {p || 'All'}
                  </button>
                ))}
              </div>
            </div>

            <div className="users-table-wrap">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Team</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingUsers ? (
                    [...Array(5)].map((_, i) => (
                      <tr key={i}>
                        <td colSpan={6}><div className="skeleton" style={{ height: 20 }} /></td>
                      </tr>
                    ))
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: 40, color: 'var(--a-text3)' }}>
                        No users found
                      </td>
                    </tr>
                  ) : users.map(user => (
                    <tr key={user.id}>
                      <td>
                        <div className="user-cell">
                          <div className="user-avatar" style={{ background: getAvatarColor(user.id) }}>
                            {getInitials(user.full_name, user.email)}
                          </div>
                          <div className="user-info">
                            <div className="user-name">{user.full_name || '—'}</div>
                            <div className="user-email">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`plan-badge-cell ${user.plan || 'free'}`}>
                          {user.plan || 'free'}
                        </span>
                      </td>
                      <td>
                        <span>
                          <span className={`status-dot ${user.subscription?.status || 'none'}`} />
                          {user.subscription?.status || 'No sub'}
                        </span>
                      </td>
                      <td style={{ color: 'var(--a-text2)' }}>{user.team_count}</td>
                      <td style={{ color: 'var(--a-text3)', fontSize: 12 }}>{formatDate(user.updated_at)}</td>
                      <td>
                        <button className="action-btn" onClick={() => setSelectedUser(user.id)}>
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.total_pages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={pagination.page <= 1}
                  onClick={() => loadUsers(pagination.page - 1)}
                >
                  ← Prev
                </button>
                <span className="page-info">
                  Page {pagination.page} of {pagination.total_pages} ({pagination.total} users)
                </span>
                <button
                  className="page-btn"
                  disabled={pagination.page >= pagination.total_pages}
                  onClick={() => loadUsers(pagination.page + 1)}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </main>

        {/* ── User Detail Modal ── */}
        {selectedUser && (
          <UserDetailModal
            userId={selectedUser}
            onClose={() => setSelectedUser(null)}
            onPlanChange={(userId, plan) => handlePlanUpdate(userId, plan)}
            onAuthExpired={onLogout}
          />
        )}

        {/* ── Toast ── */}
        {toast && (
          <div className={`toast ${toast.type}`}>
            {toast.type === 'success' ? '✓' : '✗'} {toast.message}
          </div>
        )}
      </div>
    </div>
  )
}

// ── User Detail Modal ────────────────────────────────────────────────────────

function UserDetailModal({ userId, onClose, onPlanChange, onAuthExpired }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setLoading(true)
    apiGet(`/api/admin/users/${userId}`)
      .then(d => setData(d))
      .catch(err => {
        if (err.message === 'AUTH_EXPIRED') onAuthExpired()
      })
      .finally(() => setLoading(false))
  }, [userId, onAuthExpired])

  async function changePlan(newPlan) {
    setSaving(true)
    await onPlanChange(userId, newPlan)
    // Refresh
    const d = await apiGet(`/api/admin/users/${userId}`)
    setData(d)
    setSaving(false)
  }

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-card">
        <div className="modal-header">
          <h3>{loading ? 'Loading...' : (data?.profile?.full_name || data?.profile?.email || 'User Detail')}</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[1,2,3].map(i => <div key={i} className="skeleton" style={{ height: 60 }} />)}
            </div>
          ) : data && (
            <>
              {/* Profile */}
              <div className="modal-section">
                <div className="modal-section-label">Profile</div>
                <div className="detail-grid">
                  <div className="detail-item">
                    <div className="detail-item-label">Email</div>
                    <div className="detail-item-value" style={{ fontSize: 13, wordBreak: 'break-all' }}>{data.profile.email}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">Name</div>
                    <div className="detail-item-value">{data.profile.full_name || '—'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">User Type</div>
                    <div className="detail-item-value">{data.profile.user_type || 'founder'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">AI Mode</div>
                    <div className="detail-item-value">{data.profile.ai_mode || 'balanced'}</div>
                  </div>
                </div>
              </div>

              {/* Plan Toggle */}
              <div className="modal-section">
                <div className="modal-section-label">Plan</div>
                <div className="plan-toggle-group">
                  {['free', 'pro', 'agency'].map(plan => (
                    <button
                      key={plan}
                      className={`plan-toggle-btn ${data.profile.plan === plan ? 'active' : ''} ${saving ? 'saving' : ''}`}
                      onClick={() => changePlan(plan)}
                      disabled={saving || data.profile.plan === plan}
                    >
                      {plan.charAt(0).toUpperCase() + plan.slice(1)}
                      {plan === 'pro' && ' — $29'}
                      {plan === 'agency' && ' — $79'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscription */}
              {data.subscription && (
                <div className="modal-section">
                  <div className="modal-section-label">Subscription</div>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <div className="detail-item-label">Status</div>
                      <div className="detail-item-value">
                        <span className={`status-dot ${data.subscription.status}`} />
                        {data.subscription.status}
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-item-label">Period End</div>
                      <div className="detail-item-value" style={{ fontSize: 13 }}>{formatDate(data.subscription.current_period_end)}</div>
                    </div>
                    {data.subscription.stripe_customer_id && (
                      <div className="detail-item">
                        <div className="detail-item-label">Stripe Customer</div>
                        <div className="detail-item-value" style={{ fontSize: 11, fontFamily: "'Geist Mono', monospace" }}>{data.subscription.stripe_customer_id}</div>
                      </div>
                    )}
                    {data.subscription.trial_ends_at && (
                      <div className="detail-item">
                        <div className="detail-item-label">Trial Ends</div>
                        <div className="detail-item-value" style={{ fontSize: 13 }}>{formatDate(data.subscription.trial_ends_at)}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Usage Stats */}
              <div className="modal-section">
                <div className="modal-section-label">Usage Stats</div>
                <div className="detail-grid">
                  <div className="detail-item">
                    <div className="detail-item-label">Vault Items</div>
                    <div className="detail-item-value">{data.stats.vault_items}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">Tasks</div>
                    <div className="detail-item-value">{data.stats.tasks}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">Clients</div>
                    <div className="detail-item-value">{data.stats.clients}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">Meetings</div>
                    <div className="detail-item-value">{data.stats.meetings}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">AI Chats</div>
                    <div className="detail-item-value">{data.stats.ai_chats}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-item-label">Team Size</div>
                    <div className="detail-item-value">{data.team_members?.length || 0}</div>
                  </div>
                </div>
              </div>

              {/* Google Integration */}
              {data.google_integration && (
                <div className="modal-section">
                  <div className="modal-section-label">Google Integration</div>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <div className="detail-item-label">Connected</div>
                      <div className="detail-item-value">{data.google_integration.is_connected ? '✓ Yes' : '✗ No'}</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-item-label">Google Email</div>
                      <div className="detail-item-value" style={{ fontSize: 12 }}>{data.google_integration.google_email || '—'}</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-item-label">Gmail</div>
                      <div className="detail-item-value">{data.google_integration.gmail_connected ? '✓ Active' : '✗ Off'}</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-item-label">Drive</div>
                      <div className="detail-item-value">{data.google_integration.drive_connected ? '✓ Active' : '✗ Off'}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Team Members */}
              {data.team_members?.length > 0 && (
                <div className="modal-section">
                  <div className="modal-section-label">Team Members ({data.team_members.length})</div>
                  <div className="team-list">
                    {data.team_members.map(tm => (
                      <div className="team-member-row" key={tm.id}>
                        <span>{tm.full_name || tm.email || 'Unknown'}</span>
                        <span>{tm.position} · {tm.is_active ? 'Active' : 'Inactive'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {data.projects?.length > 0 && (
                <div className="modal-section">
                  <div className="modal-section-label">Projects ({data.projects.length})</div>
                  <div className="team-list">
                    {data.projects.slice(0, 10).map(p => (
                      <div className="team-member-row" key={p.id}>
                        <span>{p.name}</span>
                        <span>{p.status} · {formatDateShort(p.created_at)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
