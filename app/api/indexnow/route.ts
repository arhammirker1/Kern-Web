import { NextResponse } from 'next/server'

const SITE = 'https://www.kobin.team'
const KEY = process.env.INDEXNOW_KEY ?? ''

// Submit a list of URLs to Bing IndexNow
// Call POST /api/indexnow with body { urls: string[] }
export async function POST(req: Request) {
  if (!KEY) {
    return NextResponse.json({ error: 'INDEXNOW_KEY not set' }, { status: 500 })
  }

  const { urls } = await req.json() as { urls: string[] }

  const body = {
    host: 'www.kobin.team',
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls ?? [],
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  return NextResponse.json({ status: res.status })
}