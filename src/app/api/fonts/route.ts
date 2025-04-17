import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// API роут для віддачі шрифтів
export async function GET() {
    // Вказуємо шлях до файлу шрифтів в src/assets
    const filePath = path.resolve('src/assets/new_spain/fonts/stylesheet.css');

    // Читаємо CSS-файл для шрифтів
    const fontCssContent = await fs.promises.readFile(filePath, 'utf8');

    // Віддаємо файл як текст CSS
    return new NextResponse(fontCssContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/css',
        },
    });
}
