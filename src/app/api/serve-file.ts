import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// Для файлів CSS, JS, зображень і т.д.
export async function GET(req: NextRequest) {
    // Отримуємо параметр 'file' із query параметрів URL
    const file = req.nextUrl.searchParams.get('file');

    if (!file) {
        return new NextResponse('File parameter is missing', { status: 400 });
    }

    // Отримуємо шлях до файлу
    const filePath = path.resolve('src/assets/new_spain', file);

    try {
        // Читаємо файл
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');

        // Визначаємо тип контенту в залежності від розширення файлу
        let contentType = 'text/html'; // Стандартно текстовий файл
        if (filePath.endsWith('.css')) {
            contentType = 'text/css';
        } else if (filePath.endsWith('.js')) {
            contentType = 'application/javascript';
        } else if (filePath.endsWith('.svg')) {
            contentType = 'image/svg+xml';
        } else if (filePath.endsWith('.png')) {
            contentType = 'image/png';
        } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
            contentType = 'image/jpeg';
        }

        return new NextResponse(fileContent, {
            status: 200,
            headers: {
                'Content-Type': contentType,
            },
        });
    } catch (err) {
        console.error('Error reading file:', err);
        return new NextResponse('File not found', { status: 404 });
    }
}
