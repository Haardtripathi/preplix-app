// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { verifyToken } from '@/lib/jwt'

// export async function middleware(request: NextRequest) {
//     const token = request.cookies.get('token')?.value

//     if (!token) {
//         return NextResponse.redirect(new URL('/login', request.url))
//     }

//     try {
//         const decoded = await verifyToken(token)
//         const requestHeaders = new Headers(request.headers)
//         requestHeaders.set('user', JSON.stringify(decoded))

//         return NextResponse.next({
//             request: {
//                 headers: requestHeaders,
//             },
//         })
//     } catch (error) {
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
// }

// export const config = {
//     matcher: ['/dashboard/:path*', '/api/protected/:path*'],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const path = request.nextUrl.pathname

    // Paths that should be accessible only when logged in
    const protectedPaths = ['/student/dashboard', '/teacher/dashboard']

    // Paths that should be accessible only when logged out
    const authPaths = ['/student/login', '/student/signup', '/teacher/login', '/teacher/signup']

    if (!token && protectedPaths.some(pp => path.startsWith(pp))) {
        return NextResponse.redirect(new URL('/student/login', request.url))
    }

    if (token && authPaths.some(ap => path.startsWith(ap))) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/student/:path*', '/teacher/:path*'],
}

