'use client'

import { useState, useEffect } from 'react'
import { useMotionValue, useScroll as useFramerScroll } from 'framer-motion'

export function useScroll() {
    const [scrollY, setScrollY] = useState(0)
    const { scrollYProgress } = useFramerScroll()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Initial scroll position
        handleScroll()

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return {
        scrollY,
        scrollYProgress,
        isScrolled: scrollY > 0
    }
}

