// api/fallback/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    try {
        const filePath = path.resolve('src/assets/new_spain/index.html');
        const html = await fs.promises.readFile(filePath, 'utf8');

        console.log('[PALLADIUM] Fallback: serving static HTML');

        return new NextResponse(html, {
            status: 200,
            headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' },
        });
    } catch (e) {
        console.error('[PALLADIUM] Fallback failed:', e);
        return new NextResponse('Error loading fallback HTML', { status: 500 });
    }
}
