// ЦЕ — ФАЙЛ З РЕНДЕРОМ site/page.tsx
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Page from '@/app/site/page';

export function renderPalladiumHTML(): string {
    const html = ReactDOMServer.renderToString(<Page />);

    return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Casas de apuestas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/new_spain/img/favicon.ico" />
    <style>body{margin:0;background:#001212;color:#fff;font-family:Roboto,sans-serif;}</style>
  </head>
  <body>
    ${html}
  </body>
</html>`;
}
