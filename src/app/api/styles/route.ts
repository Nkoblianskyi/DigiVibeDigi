import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file') || 'style.css'
    const filePath = path.resolve(`src/assets/new_spain/css/${file}`)

    try {
        const css = await fs.promises.readFile(filePath, 'utf8')
        return new NextResponse(css, {
            headers: { 'Content-Type': 'text/css' },
        })
    } catch {
        return new NextResponse('Style not found', { status: 404 })
    }
}
