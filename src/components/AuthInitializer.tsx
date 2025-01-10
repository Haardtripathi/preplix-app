'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth'

export function AuthInitializer() {
    const initializeAuth = useAuthStore((state) => state.initializeAuth)

    useEffect(() => {
        initializeAuth()
    }, [initializeAuth])

    return null
}
