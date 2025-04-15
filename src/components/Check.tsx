'use client'
import { useEffect } from 'react'

export default function Check() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = '/script.js'
        script.async = true
        document.head.appendChild(script)
        console.log('[cloak] script injected')
    }, [])

    return null
}
