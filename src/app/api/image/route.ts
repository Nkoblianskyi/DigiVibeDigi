import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
    const imageName = req.nextUrl.searchParams.get('image');
    if (!imageName) {
        return new NextResponse('Image name is required', { status: 400 });
    }

    const filePath = path.resolve('public/hidden_assets/img', imageName);

    try {
        const imageBuffer = await fs.promises.readFile(filePath);

        const ext = path.extname(imageName).toLowerCase();
        const mimeTypes: Record<string, string> = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream';

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('[IMAGE ROUTE] Error fetching image:', error);
        return new NextResponse('Image not found', { status: 404 });
    }
}
