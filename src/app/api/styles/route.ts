import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// API роут для віддачі стилів
export async function GET() {
    const filePath = path.resolve('src/assets/new_spain/css/style.css'); // Шлях до стилів

    // Читаємо CSS-файл
    const cssContent = await fs.promises.readFile(filePath, 'utf8');

    // Віддаємо файл як текст CSS
    return new NextResponse(cssContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/css',
        },
    });
}
