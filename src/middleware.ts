// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

function isBot(ua: string) {
    return /googlebot|bingbot|yandex|duckduckbot|baiduspider/i.test(ua)
}

export async function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || ''
    const ipHeader =
        req.headers.get('x-forwarded-for') ||
        req.headers.get('x-real-ip') ||
        req.headers.get('cf-connecting-ip') ||
        '8.8.8.8'
    const ip = ipHeader.split(',')[0].trim()

    if (isBot(ua)) {
        return NextResponse.next()
    }

    try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`)
        const geo = await geoRes.json()

        const isSpain = geo.success && geo.country_code === 'ES'

        if (isSpain) {
            const url = req.nextUrl.clone()
            url.pathname = '/site'
            return NextResponse.rewrite(url)
        }

        return NextResponse.next()
    } catch (err) {
        console.error('[Middleware Error]', err)
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/', '/page', '/((?!_next|api|static|favicon.ico|fonts|images|css|js).*)'],
}
