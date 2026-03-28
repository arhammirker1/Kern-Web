'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { initMixpanel, track } from '../lib/mixpanel'

export default function MixpanelInit() {
  const pathname = usePathname()
  const enteredAt = useRef(null)
  const maxScrollRef = useRef(0)
  const scrollFired = useRef({ 25: false, 50: false, 75: false, 90: false })

  useEffect(() => {
    initMixpanel()
  }, [])

  // Track page view + reset scroll/time tracking on route change
  useEffect(() => {
    enteredAt.current = Date.now()
    maxScrollRef.current = 0
    scrollFired.current = { 25: false, 50: false, 75: false, 90: false }

    track('Page View', {
      path: pathname,
      title: document.title,
    })

    // Time on page — fires when user leaves or navigates away
    return () => {
      const seconds = Math.round((Date.now() - enteredAt.current) / 1000)
      track('Page Exit', {
        path: pathname,
        time_on_page_seconds: seconds,
        max_scroll_pct: maxScrollRef.current,
      })
    }
  }, [pathname])

  // Scroll depth milestones
  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)

      if (pct > maxScrollRef.current) maxScrollRef.current = pct

      for (const milestone of [25, 50, 75, 90]) {
        if (pct >= milestone && !scrollFired.current[milestone]) {
          scrollFired.current[milestone] = true
          track('Scroll Depth', { path: pathname, depth_pct: milestone })
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return null
}