// api/sass/route.ts
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file')
    if (!file) {
        return new NextResponse('Missing file param', { status: 400 })
    }

    const filePath = path.resolve('src/assets/new_spain/sass', file)

    try {
        const sassFile = await fs.promises.readFile(filePath, 'utf-8')
        return new NextResponse(sassFile, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
        })
    } catch (err) {
        console.error('[SASS API] Error:', err)
        return new NextResponse('File not found', { status: 404 })
    }
}
