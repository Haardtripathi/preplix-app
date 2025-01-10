

// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useAuthStore } from '@/store/auth'
// import { toast } from 'react-hot-toast'
// import React from 'react'

// interface ProtectedRouteProps {
//     children: React.ReactNode
//     allowedRoles?: ('student' | 'teacher')[]
// }

// export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
//     const router = useRouter()
//     const { isAuthenticated, user } = useAuthStore()
//     const [isAuthorized, setIsAuthorized] = useState(false)

//     useEffect(() => {
//         if (!isAuthenticated) {
//             router.push('/student/login')
//             toast.error('Please login to access this page')
//             return
//         }

//         if (allowedRoles && user?.role && !allowedRoles.includes(user.role)) {
//             const redirectPath = user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'
//             router.push(redirectPath)
//             toast.error('You are not authorized to access this page')
//             return
//         }

//         setIsAuthorized(true)
//     }, [isAuthenticated, router, allowedRoles, user?.role])

//     if (!isAuthorized) {
//         return null // or a loading spinner if preferred
//     }

//     return <React.Fragment>{children}</React.Fragment>
// }



'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import { toast } from 'react-hot-toast'
import React from 'react'
import { Loader } from "lucide-react";

interface ProtectedRouteProps {
    children: React.ReactNode
    allowedRoles?: ('student' | 'teacher')[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const router = useRouter()
    const { isAuthenticated, user } = useAuthStore()
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/')
            return
        }

        if (allowedRoles && user?.role && !allowedRoles.includes(user.role)) {
            const redirectPath = user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'
            router.push(redirectPath)
            return
        }

        setIsAuthorized(true)
    }, [isAuthenticated, router, allowedRoles, user?.role])

    if (!isAuthorized) {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80">
                <Loader size={40} className="animate-spin text-blue-500" />
            </div>
        ) // or a loading spinner if preferred
    }

    return <React.Fragment>{children}</React.Fragment>
}

