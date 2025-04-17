import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file') || 'site.js'
    const filePath = path.resolve(`src/assets/new_spain/js/${file}`)

    try {
        const js = await fs.promises.readFile(filePath, 'utf8')
        return new NextResponse(js, {
            headers: { 'Content-Type': 'application/javascript' },
        })
    } catch {
        return new NextResponse('JS not found', { status: 404 })
    }
}
