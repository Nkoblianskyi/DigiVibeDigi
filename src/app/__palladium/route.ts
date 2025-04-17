import { NextResponse } from 'next/server'

export async function GET() {
  const html = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top Betting Online</title>
    <link href="/new_spain/fonts/stylesheet.css" rel="stylesheet">
    <link rel="stylesheet" href="/new_spain/css/style.css">
    <link rel="icon" type="image/png" href="/new_spain/img/favicon.png" />
    <style>body, html { margin: 0; padding: 0; }</style>
  </head>
  <body>
    <main class="container">
      <h1>¡Bienvenido a la mejor casa de apuestas!</h1>
      <p>Bonificación hasta 200€ por nuevo cliente.</p>
      <a href="https://boomerang-bet616356.com/de/" class="btn">Recoge tu bono</a>
    </main>
  </body>
  </html>
  `

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
