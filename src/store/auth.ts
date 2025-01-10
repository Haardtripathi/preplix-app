

// import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
// import { toast } from 'react-hot-toast'

// interface User {
//     id: string
//     name: string
//     email: string
//     role: 'student' | 'teacher'
//     subject?: string
// }

// interface AuthState {
//     token: string | null
//     user: User | null
//     isAuthenticated: boolean
//     login: (credentials: { email: string; password: string; role: 'student' | 'teacher' }) => Promise<void>
//     signup: (data: { name: string; email: string; password: string; role: 'student' | 'teacher'; subject?: string }) => Promise<void>
//     logout: () => void
//     initializeAuth: () => void
// }

// export const useAuthStore = create<AuthState>()(
//     persist(
//         (set, get) => ({
//             token: null,
//             user: null,
//             isAuthenticated: false,
//             login: async (credentials) => {
//                 try {
//                     const response = await fetch('/api/auth/login', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(credentials),
//                     })

//                     if (!response.ok) {
//                         throw new Error('Login failed')
//                     }

//                     const data = await response.json()
//                     set({ token: data.token, user: data.user, isAuthenticated: true })
//                 } catch (error) {
//                     toast.error('Login failed. Please try again.')
//                     throw error
//                 }
//             },
//             signup: async (data) => {
//                 try {
//                     const response = await fetch('/api/auth/signup', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(data),
//                     })

//                     if (!response.ok) {
//                         throw new Error('Signup failed')
//                     }
//                     toast.success('Account created successfully. Please log in.')
//                 } catch (error) {
//                     toast.error('Signup failed. Please try again.')
//                     throw error
//                 }
//             },
//             logout: () => {
//                 set({ token: null, user: null, isAuthenticated: false })
//                 toast.success('Logged out successfully')
//             },
//             initializeAuth: () => {
//                 const state = get()
//                 if (state.token && state.user) {
//                     set({ isAuthenticated: true })
//                 }
//             },
//         }),
//         {
//             name: 'auth-storage',
//         }
//     )
// )


import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'react-hot-toast'

interface User {
    id: string
    name: string
    email: string
    role: 'student' | 'teacher'
    subject?: string
}

interface AuthState {
    token: string | null
    user: User | null
    isAuthenticated: boolean
    login: (credentials: { email: string; password: string; role: 'student' | 'teacher' }) => Promise<void>
    signup: (data: { name: string; email: string; password: string; role: 'student' | 'teacher'; subject?: string; otp: string }) => Promise<void>
    sendOTP: (email: string) => Promise<void>
    verifyOTP: (email: string, otp: string) => Promise<void>
    logout: () => void
    initializeAuth: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            isAuthenticated: false,
            login: async (credentials) => {
                try {
                    const response = await fetch('/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(credentials),
                    })

                    if (!response.ok) {
                        throw new Error('Login failed')
                    }

                    const data = await response.json()
                    set({ token: data.token, user: data.user, isAuthenticated: true })
                } catch (error) {
                    toast.error('Login failed. Please try again.')
                    throw error
                }
            },
            signup: async (data) => {
                try {
                    // console.log("DATA", data)
                    const response = await fetch('/api/auth/signup', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                    })

                    if (!response.ok) {
                        throw new Error('Signup failed')
                    }
                    toast.success('Account created successfully. Please log in.')
                } catch (error) {
                    toast.error('User already exists. Please try again. ')
                    throw error
                }
            },
            sendOTP: async (email) => {
                try {
                    const response = await fetch('/api/auth/send-otp', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email }),
                    })

                    if (!response.ok) {
                        throw new Error('Failed to send OTP')
                    }
                    toast.success('Verification code sent to your email')
                } catch (error) {
                    toast.error('Failed to send verification code')
                    throw error
                }
            },
            verifyOTP: async (email, otp) => {
                try {
                    const response = await fetch('/api/auth/verify-otp', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, otp }),
                    })
                    // console.log("ABC", response.json())

                    if (!response.ok) {
                        throw new Error('Invalid verification code')
                    }
                    toast.success('Email verified successfully')
                } catch (error) {
                    toast.error('Invalid verification code')
                    throw error
                }
            },
            logout: () => {
                set({ token: null, user: null, isAuthenticated: false })
                toast.success('Logged out successfully')
            },
            initializeAuth: () => {
                const state = get()
                if (state.token && state.user) {
                    set({ isAuthenticated: true })
                }
            },
        }),
        {
            name: 'auth-storage',
        }
    )
)

