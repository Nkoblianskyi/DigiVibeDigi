// app/api/styles/route.ts
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file') || 'style.css';
    const filePath = path.join(process.cwd(), 'src/assets/new_spain/css', file);

    try {
        const css = await fs.readFile(filePath, 'utf8');
        return new NextResponse(css, {
            status: 200,
            headers: {
                'Content-Type': 'text/css',
                'Cache-Control': 'no-cache',
            },
        });
    } catch (error) {
        console.error('❌ CSS file read error:', error);
        return new NextResponse('Style not found', { status: 404 });
    }
}
