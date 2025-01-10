
<<<<<<< HEAD
// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { useAuthStore } from '@/store/auth'
// import { ArrowRight } from 'lucide-react'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isLoading, setIsLoading] = useState(true)
//     const pathname = usePathname()
//     const { isAuthenticated, user, logout } = useAuthStore()

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20)
//         }
//         window.addEventListener('scroll', handleScroll)
//         setIsLoading(false)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     if (isLoading) {
//         return null
//     }

//     return (
//         <motion.nav
//             className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background'
//                 }`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.3 }}
//         >
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16 items-center justify-between">
//                     <Link href="/" className="text-2xl font-bold text-[#DC0A2D]">
//                         preplix
//                     </Link>

//                     {!isAuthenticated ? (
//                         <div className="flex items-center gap-4">
//                             <Link href="/teacher/signup">
//                                 <Button
//                                     variant="outline"
//                                     className="text-[#DC0A2D] border-[#DC0A2D] hover:bg-[#DC0A2D] hover:text-white"
//                                 >
//                                     Become a Tutor
//                                     <ArrowRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </Link>
//                             <Link href="/student/signup">
//                                 <Button
//                                     variant="default"
//                                     className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
//                                 >
//                                     Sign Up
//                                 </Button>
//                             </Link>
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button
//                                         variant="default"
//                                         className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
//                                     >
//                                         Sign In
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent align="end" className="w-[200px] p-2">
//                                     <h3 className="text-sm text-muted-foreground mb-2 px-2">
//                                         Sign in to Preplix as
//                                     </h3>
//                                     <DropdownMenuItem asChild>
//                                         <Link href="/student/login" className="flex items-center justify-between cursor-pointer">
//                                             Student
//                                             <ArrowRight className="h-4 w-4" />
//                                         </Link>
//                                     </DropdownMenuItem>
//                                     <DropdownMenuItem asChild>
//                                         <Link href="/teacher/login" className="flex items-center justify-between cursor-pointer">
//                                             Teacher
//                                             <ArrowRight className="h-4 w-4" />
//                                         </Link>
//                                     </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                             </DropdownMenu>
//                         </div>
//                     ) : (
//                         <div className="flex items-center gap-4">
//                             <motion.div whileHover={{ scale: 1.05 }}>
//                                 <Link
//                                     href={`/${user?.role}/dashboard`}
//                                     className={`px-3 py-2 rounded-md text-sm font-medium ${pathname?.includes('dashboard')
//                                         ? 'bg-primary text-primary-foreground'
//                                         : 'text-foreground hover:bg-muted'
//                                         }`}
//                                 >
//                                     Dashboard
//                                 </Link>
//                             </motion.div>
//                             <motion.div whileHover={{ scale: 1.05 }}>
//                                 <Button
//                                     variant="ghost"
//                                     onClick={logout}
//                                 >
//                                     Logout
//                                 </Button>
//                             </motion.div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </motion.nav>
//     )
// }

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth'
import { ArrowRight, Menu, X } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const { isAuthenticated, user, logout } = useAuthStore()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        setIsLoading(false)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (isLoading) {
        return null
    }

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-[#DC0A2D]">
                        preplix
                    </Link>

                    <div className="hidden sm:flex items-center gap-4">
                        {!isAuthenticated ? (
                            <>
                                <Link href="/teacher/signup">
                                    <Button
                                        variant="outline"
                                        className="text-[#DC0A2D] border-[#DC0A2D] hover:bg-[#DC0A2D] hover:text-white"
                                    >
                                        Become a Tutor
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/student/signup">
                                    <Button
                                        variant="default"
                                        className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="default"
                                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                        >
                                            Sign In
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-[200px] p-2">
                                        <h3 className="text-sm text-muted-foreground mb-2 px-2">
                                            Sign in to Preplix as
                                        </h3>
                                        <DropdownMenuItem asChild>
                                            <Link href="/student/login" className="flex items-center justify-between cursor-pointer">
                                                Student
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/teacher/login" className="flex items-center justify-between cursor-pointer">
                                                Teacher
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link
                                        href={`/${user?.role}/dashboard`}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${pathname?.includes('dashboard')
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-foreground hover:bg-muted'
                                            }`}
                                    >
                                        Dashboard
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Button
                                        variant="ghost"
                                        onClick={logout}
                                    >
                                        Logout
                                    </Button>
                                </motion.div>
                            </>
                        )}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="sm:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="sm:hidden overflow-hidden"
                        >
                            <div className="py-4 flex flex-col gap-4">
                                {!isAuthenticated ? (
                                    <>
                                        <Link href="/teacher/signup">
                                            <Button
                                                variant="outline"
                                                className="w-full text-[#DC0A2D] border-[#DC0A2D] hover:bg-[#DC0A2D] hover:text-white"
                                            >
                                                Become a Tutor
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href="/student/signup">
                                            <Button
                                                variant="default"
                                                className="w-full bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                            >
                                                Sign Up
                                            </Button>
                                        </Link>
                                        <div className="grid grid-cols-2 gap-2 p-2 bg-muted rounded-lg">
                                            <Link href="/student/login">
                                                <Button variant="ghost" className="w-full justify-between">
                                                    Student Login
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Link href="/teacher/login">
                                                <Button variant="ghost" className="w-full justify-between">
                                                    Teacher Login
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={`/${user?.role}/dashboard`}
                                            className={`px-3 py-2 rounded-md text-sm font-medium text-center ${pathname?.includes('dashboard')
                                                ? 'bg-primary text-primary-foreground'
                                                : 'text-foreground hover:bg-muted'
                                                }`}
                                        >
                                            Dashboard
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            onClick={logout}
                                            className="w-full"
                                        >
                                            Logout
                                        </Button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

