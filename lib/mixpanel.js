import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

let initialized = false

// Generate or retrieve a stable anonymous ID tied to this browser
function getAnonId() {
  let id = localStorage.getItem('kobin_anon_id')
  if (!id) {
    id = 'anon_' + Math.random().toString(36).slice(2) + '_' + Date.now()
    localStorage.setItem('kobin_anon_id', id)
  }
  return id
}

export function initMixpanel() {
  if (initialized || !MIXPANEL_TOKEN || typeof window === 'undefined') return
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: false, // we handle this manually with more context
    persistence: 'localStorage',
    ip: true, // capture IP for geo
  })
  // Identify this browser session with a stable anonymous ID
  const anonId = getAnonId()
  mixpanel.identify(anonId)
  mixpanel.people.set({
    '$anon_id': anonId,
    'First Seen': new Date().toISOString(),
    'User Agent': navigator.userAgent,
    'Screen Resolution': `${window.screen.width}x${window.screen.height}`,
  })
  initialized = true
}

// Call this after a user gives their email (waitlist signup)
export function identifyUser(email, extraProps = {}) {
  if (typeof window === 'undefined') return
  mixpanel.identify(email) // switch from anon ID to email as the canonical ID
  mixpanel.alias(email)    // link the anon ID to this email in Mixpanel
  mixpanel.people.set({
    '$email': email,
    'Signed Up At': new Date().toISOString(),
    ...extraProps,
  })
}

export function track(event, props = {}) {
  if (typeof window === 'undefined') return
  initMixpanel()
  mixpanel.track(event, {
    anon_id: getAnonId(),
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer || null,
    ...props,
  })
}