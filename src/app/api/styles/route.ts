import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file') || 'style.css';
    const filePath = path.join(process.cwd(), 'src/assets/new_spain/css', file);

    try {
        const css = await fs.readFile(filePath, 'utf8');

        return new NextResponse(css, {
            headers: {
                'Content-Type': 'text/css',
                'Cache-Control': 'no-store',
            },
        });
    } catch (error) {
        console.error('❌ Failed to load CSS file:', error);
        return new NextResponse('Style not found', { status: 404 });
    }
}
