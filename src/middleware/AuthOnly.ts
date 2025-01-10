'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import { toast } from 'react-hot-toast'
import React from 'react'

interface AuthOnlyProps {
    children: React.ReactNode
}

export function AuthOnly({ children }: AuthOnlyProps) {
    const router = useRouter()
    const { isAuthenticated, user } = useAuthStore()

    useEffect(() => {
        if (isAuthenticated) {
            const redirectPath = user?.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'
            router.push(redirectPath)
        }
    }, [isAuthenticated, router, user])

    if (isAuthenticated) return null

    return React.createElement(React.Fragment, null, children)
}