import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file');
    if (!file) {
        return new NextResponse('File parameter is missing', { status: 400 });
    }

    const filePath = path.resolve('public/hidden_assets/css', file);

    try {
        const css = await fs.promises.readFile(filePath, 'utf-8');
        return new NextResponse(css, {
            status: 200,
            headers: {
                'Content-Type': 'text/css',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (err) {
        console.error('[STYLES ROUTE] Error:', err);
        return new NextResponse('CSS file not found', { status: 404 });
    }
}
