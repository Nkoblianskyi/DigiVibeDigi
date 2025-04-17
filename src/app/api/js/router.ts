// api/js/route.ts
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file');
    if (!file) {
        return new NextResponse('File parameter is missing', { status: 400 });
    }

    const filePath = path.resolve('src/assets/new_spain/js', file);

    try {
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        return new NextResponse(fileContent, {
            status: 200,
            headers: { 'Content-Type': 'application/javascript' },
        });
    } catch (err) {
        console.error('Error reading file:', err);
        return new NextResponse('File not found', { status: 404 });
    }
}
