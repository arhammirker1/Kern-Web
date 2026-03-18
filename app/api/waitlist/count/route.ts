// app/api/waitlist/count/route.ts
// GET /api/waitlist/count — returns total waitlist count for the live counter

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/server'

// Cache for 60 seconds so we don't hammer the DB on every page load
export const revalidate = 60

export async function GET() {
  try {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) throw error

    return NextResponse.json({ count: count ?? 0 })
  } catch {
    // Fail silently — page shows static fallback number
    return NextResponse.json({ count: 247 })
  }
}
