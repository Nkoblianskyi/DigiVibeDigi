import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file');
    if (!file) {
        return new NextResponse('File parameter is missing', { status: 400 });
    }

    const filePath = path.resolve('public/hidden_assets/fonts', file);

    try {
        const content = await fs.promises.readFile(filePath, 'utf-8');
        return new NextResponse(content, {
            status: 200,
            headers: {
                'Content-Type': 'text/css',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (err) {
        console.error('[FONTS ROUTE] Error:', err);
        return new NextResponse('Font CSS file not found', { status: 404 });
    }
}
