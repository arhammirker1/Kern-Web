import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

let initialized = false

export function initMixpanel() {
  if (initialized || !MIXPANEL_TOKEN || typeof window === 'undefined') return
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: true,
    persistence: 'localStorage',
  })
  initialized = true
}

export function track(event, props = {}) {
  if (typeof window === 'undefined') return
  initMixpanel()
  mixpanel.track(event, props)
}
