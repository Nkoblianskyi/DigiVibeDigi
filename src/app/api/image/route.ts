// api/image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
    const imageName = req.nextUrl.searchParams.get('image') || '';
    if (!imageName) {
        return new NextResponse('Image name is required', { status: 400 });
    }

    const filePath = path.resolve('src/assets/new_spain/img', imageName);

    try {
        const imageBuffer = await fs.promises.readFile(filePath);

        const ext = path.extname(imageName).toLowerCase();
        let contentType = 'image/jpeg';
        if (ext === '.png') {
            contentType = 'image/png';
        } else if (ext === '.gif') {
            contentType = 'image/gif';
        }

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: { 'Content-Type': contentType },
        });
    } catch (error) {
        console.error('[IMAGE ROUTE] Error fetching image:', error);
        return new NextResponse('Image not found', { status: 404 });
    }
}
