'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initMixpanel, track } from '../lib/mixpanel'

export default function MixpanelInit() {
  const pathname = usePathname()

  useEffect(() => {
    initMixpanel()
  }, [])

  useEffect(() => {
    track('Page View', { path: pathname })
  }, [pathname])

  return null
}