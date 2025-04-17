import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const referer = req.headers.get('referer') || '';
    const ua = req.headers.get('user-agent') || '';

    const isBot = /bot|crawl|spider|preview|fetch|monitor/i.test(ua);
    const isInternal = referer.includes('digi-vibe-digi.vercel.app');

    if (isBot || !isInternal) {
        return new NextResponse(null, { status: 204 });
    }

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Top Betting Online</title>
  <link rel="stylesheet" href="/new_spain/css/style.css" />
  <link rel="stylesheet" href="/new_spain/fonts/stylesheet.css" />
  <link rel="icon" type="image/png" href="/new_spain/img/favicon.png" />
  <style>body, html { margin: 0; padding: 0; height: 100vh; }</style>
</head>
<body>
  <main class="container">
    <h1>🏆 Las Mejores Casas de Apuestas</h1>
    <p>Obtenga hasta 200€ de bonificación como nuevo cliente.</p>
    <a href="https://boomerang-bet616356.com/de/" style="display:inline-block;margin-top:20px;padding:12px 24px;background:#4282FF;color:#fff;text-decoration:none;font-weight:bold;border-radius:6px;">Reclamar Bono</a>
  </main>
</body>
</html>`;

    return new NextResponse(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
    });
}
