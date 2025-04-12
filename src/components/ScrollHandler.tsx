'use client'

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const ScrollHandler = () => {
    const searchParams = useSearchParams()
    const scrollTo = searchParams.get('scrollTo')

    useEffect(() => {
        if (scrollTo) {
            const section = document.getElementById(scrollTo)
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [scrollTo])

    return null
}
