import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// API роут для віддачі картинок
export async function GET(req: NextRequest) {
    const imageName = req.nextUrl.searchParams.get('image') || ''; // Отримуємо ім'я картинки з параметра query
    if (!imageName) {
        return new NextResponse('Image name is required', { status: 400 });
    }

    // Вказуємо шлях до папки з картинками в src/assets
    const filePath = path.resolve('src/assets/new_spain/img', imageName);

    try {
        // Читаємо картинку
        const imageBuffer = await fs.promises.readFile(filePath);

        // Визначаємо тип контенту в залежності від розширення файлу
        const ext = path.extname(imageName).toLowerCase();
        let contentType = 'image/jpeg'; // За замовчуванням встановлюємо як JPEG
        if (ext === '.png') {
            contentType = 'image/png';
        } else if (ext === '.gif') {
            contentType = 'image/gif';
        } else if (ext === '.jpg') {
            contentType = 'image/jpeg';
        }

        // Віддаємо картинку як відповідь
        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
            },
        });
    } catch (error) {
        console.error('[IMAGE ROUTE] Error fetching image:', error);
        return new NextResponse('Image not found', { status: 404 });
    }
}
