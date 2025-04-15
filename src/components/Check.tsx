'use client'
import { useEffect } from 'react'

export default function Check() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = '/script.js'
        script.async = true
        script.onload = () => {
            console.log('[cloak] script loaded and executed')
        }
        script.onerror = (e) => {
            console.error('[cloak] script failed', e)
        }
        document.head.appendChild(script)
        console.log('[cloak] script injected')
    }, [])

    return null
}
