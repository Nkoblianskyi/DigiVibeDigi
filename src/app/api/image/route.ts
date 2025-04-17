import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(req: NextRequest) {
    const image = req.nextUrl.searchParams.get('image');
    if (!image) return new NextResponse('Missing image', { status: 400 });

    const filePath = path.resolve('src/assets/new_spain/img', image);

    try {
        const data = await fs.readFile(filePath);
        const ext = path.extname(image).slice(1);
        const mime = {
            svg: 'image/svg+xml',
            png: 'image/png',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            webp: 'image/webp',
        }[ext] || 'application/octet-stream';

        return new NextResponse(data, {
            headers: { 'Content-Type': mime },
        });
    } catch {
        return new NextResponse('Not found', { status: 404 });
    }
}
