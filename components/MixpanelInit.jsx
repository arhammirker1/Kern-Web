'use client'
import { useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { initMixpanel, track } from '../lib/mixpanel'

export default function MixpanelInit() {
  const pathname = usePathname()
  const enteredAt = useRef(null)
  const activeTimeRef = useRef(0)
  const lastActiveRef = useRef(null)
  const isActiveRef = useRef(true)
  const maxScrollRef = useRef(0)
  const scrollFired = useRef({ 25: false, 50: false, 75: false, 90: false })
  const readingFired = useRef({ 30: false, 60: false, 120: false, 180: false })
  const readingTimer = useRef(null)

  useEffect(() => {
    initMixpanel()
  }, [])

  // ── Active time tracking (pauses when tab hidden or user idle) ──
  const startActive = useCallback(() => {
    isActiveRef.current = true
    lastActiveRef.current = Date.now()
  }, [])

  const pauseActive = useCallback(() => {
    if (isActiveRef.current && lastActiveRef.current) {
      activeTimeRef.current += Date.now() - lastActiveRef.current
    }
    isActiveRef.current = false
  }, [])

  // ── Reading milestones (fires at 30s, 60s, 120s, 180s of active time) ──
  const startReadingTimer = useCallback(() => {
    clearInterval(readingTimer.current)
    readingTimer.current = setInterval(() => {
      if (!isActiveRef.current) return
      const activeSecs = Math.round(
        (activeTimeRef.current + (Date.now() - (lastActiveRef.current || Date.now()))) / 1000
      )
      for (const milestone of [30, 60, 120, 180]) {
        if (activeSecs >= milestone && !readingFired.current[milestone]) {
          readingFired.current[milestone] = true
          track('Reading Milestone', {
            path: pathname,
            seconds_active: milestone,
            page_title: document.title,
            scroll_pct_at_milestone: maxScrollRef.current,
          })
        }
      }
    }, 5000)
  }, [pathname])

  // ── Page view + reset on route change ──
  useEffect(() => {
    enteredAt.current = Date.now()
    activeTimeRef.current = 0
    lastActiveRef.current = Date.now()
    isActiveRef.current = true
    maxScrollRef.current = 0
    scrollFired.current = { 25: false, 50: false, 75: false, 90: false }
    readingFired.current = { 30: false, 60: false, 120: false, 180: false }

    track('Page View', {
      path: pathname,
      page_title: document.title,
      is_blog_post: pathname.startsWith('/blog/'),
      blog_slug: pathname.startsWith('/blog/') ? pathname.replace('/blog/', '') : null,
    })

    startReadingTimer()

    return () => {
      clearInterval(readingTimer.current)
      if (isActiveRef.current && lastActiveRef.current) {
        activeTimeRef.current += Date.now() - lastActiveRef.current
      }
      const totalSecs = Math.round((Date.now() - enteredAt.current) / 1000)
      const activeSecs = Math.round(activeTimeRef.current / 1000)

      track('Page Exit', {
        path: pathname,
        page_title: document.title,
        total_time_seconds: totalSecs,
        active_time_seconds: activeSecs,
        max_scroll_pct: maxScrollRef.current,
        read_quality: activeSecs >= 120 ? 'deep' : activeSecs >= 30 ? 'skim' : 'bounce',
        blog_slug: pathname.startsWith('/blog/') ? pathname.replace('/blog/', '') : null,
      })
    }
  }, [pathname])

  // ── Visibility + idle detection ──
  useEffect(() => {
    const onVisible = () => document.hidden ? pauseActive() : startActive()
    const onFocus = () => startActive()
    const onBlur = () => pauseActive()

    // Idle after 30s of no mouse/keyboard movement
    let idleTimer
    const resetIdle = () => {
      startActive()
      clearTimeout(idleTimer)
      idleTimer = setTimeout(pauseActive, 30000)
    }

    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)
    window.addEventListener('mousemove', resetIdle, { passive: true })
    window.addEventListener('keydown', resetIdle, { passive: true })
    window.addEventListener('touchstart', resetIdle, { passive: true })

    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('mousemove', resetIdle)
      window.removeEventListener('keydown', resetIdle)
      window.removeEventListener('touchstart', resetIdle)
      clearTimeout(idleTimer)
    }
  }, [startActive, pauseActive])

  // ── Scroll depth ──
  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)
      if (pct > maxScrollRef.current) maxScrollRef.current = pct

      for (const milestone of [25, 50, 75, 90]) {
        if (pct >= milestone && !scrollFired.current[milestone]) {
          scrollFired.current[milestone] = true
          track('Scroll Depth', {
            path: pathname,
            page_title: document.title,
            depth_pct: milestone,
            active_time_at_scroll: Math.round(activeTimeRef.current / 1000),
          })
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return null
}