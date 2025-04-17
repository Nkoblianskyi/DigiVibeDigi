import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
    const imageName = req.nextUrl.searchParams.get('image') || '';
    if (!imageName) {
        return new NextResponse('Image name is required', { status: 400 });
    }

    // Якщо у продакшні — шукаємо в public
    const filePath = path.resolve('public/hidden_assets/img', imageName);

    try {
        const imageBuffer = await fs.promises.readFile(filePath);

        const ext = path.extname(imageName).toLowerCase();
        let contentType = 'application/octet-stream';

        switch (ext) {
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
            case '.svg':
                contentType = 'image/svg+xml';
                break;
            case '.gif':
                contentType = 'image/gif';
                break;
            case '.webp':
                contentType = 'image/webp';
                break;
        }

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable'
            },
        });
    } catch (error) {
        console.error('[IMAGE ROUTE] Error fetching image:', error);
        return new NextResponse('Image not found', { status: 404 });
    }
}
