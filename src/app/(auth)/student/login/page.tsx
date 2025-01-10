// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { toast } from 'react-hot-toast'
// import { useAuthStore } from '@/store/auth'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { AuthOnly } from '@/middleware/AuthOnly'

// export default function StudentLoginPage() {
//     const router = useRouter()
//     const login = useAuthStore((state) => state.login)
//     const [isLoading, setIsLoading] = useState(false)

//     async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
//         event.preventDefault()
//         setIsLoading(true)

//         const formData = new FormData(event.currentTarget)
//         const email = formData.get('email') as string
//         const password = formData.get('password') as string

//         try {
//             await login({ email, password, role: 'student' })
//             toast.success('Logged in successfully!')
//             router.push('/student/dashboard')
//         } catch (error) {
//             toast.error('Invalid credentials')
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return (
//         <AuthOnly>
//             <div className="container flex h-screen w-screen flex-col items-center justify-center">
//                 <Card className="w-full max-w-lg">
//                     <CardHeader className="space-y-1">
//                         <CardTitle className="text-2xl font-bold">Student Login</CardTitle>
//                         <CardDescription>
//                             Enter your email and password to login to your student account
//                         </CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                         <form onSubmit={onSubmit} className="space-y-4">
//                             <div className="space-y-2">
//                                 <Label htmlFor="email">Email</Label>
//                                 <Input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     placeholder="john@example.com"
//                                     required
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                 />
//                             </div>
//                             <Button type="submit" className="w-full" disabled={isLoading}>
//                                 {isLoading ? 'Logging in...' : 'Login'}
//                             </Button>
//                         </form>
//                         <div className="mt-4 text-center text-sm">
//                             Don&apos;t have an account?{' '}
//                             <Link href="/student/signup" className="text-primary hover:underline">
//                                 Sign up
//                             </Link>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </AuthOnly>
//     )
// }

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/store/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthOnly } from '@/middleware/AuthOnly'
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

export default function StudentLoginPage() {
    const router = useRouter()
    const login = useAuthStore((state) => state.login)
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            await login({ email, password, role: 'student' })
            toast.success('Logged in successfully!')
            router.push('/student/dashboard')
        } catch (error) {
            toast.error('Invalid credentials')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthOnly>
            <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="space-y-6 text-center md:text-left"
                    >
                        <motion.div variants={itemVariants}>
                            <GraduationCap className="h-12 w-12 text-[#DC0A2D] mx-auto md:mx-0" />
                        </motion.div>
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold tracking-tight"
                            variants={itemVariants}
                        >
                            Welcome Back to Your Global Journey
                        </motion.h1>
                        <motion.p
                            className="text-xl text-muted-foreground"
                            variants={itemVariants}
                        >
                            Continue your path to international success with expert guidance and proven strategies.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0"
                        >
                            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                                <BookOpen className="h-6 w-6 text-[#DC0A2D] mb-2" />
                                <h3 className="font-semibold">2000+</h3>
                                <p className="text-sm text-muted-foreground">Expert Mentors</p>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                                <GraduationCap className="h-6 w-6 text-[#DC0A2D] mb-2" />
                                <h3 className="font-semibold">50K+</h3>
                                <p className="text-sm text-muted-foreground">Success Stories</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="w-full">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                                <CardDescription>
                                    Sign in to continue your learning journey
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={onSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Signing in...' : 'Sign In'}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                                <div className="mt-4 text-center text-sm">
                                    Don&apos;t have an account?{' '}
                                    <Link href="/student/signup" className="text-[#DC0A2D] hover:underline">
                                        Sign up
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </AuthOnly>
    )
}
