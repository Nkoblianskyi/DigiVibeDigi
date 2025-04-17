import { promises as fs } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'new_spain', 'index.html')
  const html = await fs.readFile(filePath, 'utf8')

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-store',
    },
  })
}
