

// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { useAuthStore } from '@/store/auth'
// import { Menu, X } from 'lucide-react'
// import { useScroll } from '@/hooks/use-scroll'

// export function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isLoading, setIsLoading] = useState(true)
//     const pathname = usePathname()
//     const { isAuthenticated, user, logout } = useAuthStore()
//     const { scrollYProgress } = useScroll()

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20)
//         }
//         window.addEventListener('scroll', handleScroll)
//         setIsLoading(false)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen)
//     }

//     const closeMobileMenu = () => {
//         setIsMobileMenuOpen(false)
//     }

//     if (isLoading) {
//         return null
//     }

//     return (
//         <>
//             <motion.div
//                 className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-[0%]"
//                 style={{ scaleX: scrollYProgress }}
//             />
//             <motion.nav
//                 className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background'
//                     }`}
//                 initial={{ y: -100 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex h-16 items-center justify-between">
//                         <motion.div
//                             className="flex items-center"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Link href="/" className="text-2xl font-bold text-[#DC0A2D]">
//                                 Preplix
//                             </Link>
//                         </motion.div>

//                         <div className="hidden md:flex md:items-center md:space-x-4">
//                             {isAuthenticated ? (
//                                 <>
// <motion.div whileHover={{ scale: 1.05 }}>
//     <Link
//         href={`/${user?.role}/dashboard`}
//         className={`px-3 py-2 rounded-md text-sm font-medium ${pathname?.includes('dashboard')
//                 ? 'bg-primary text-primary-foreground'
//                 : 'text-foreground hover:bg-muted'
//             }`}
//     >
//         Dashboard
//     </Link>
// </motion.div>
// <motion.div whileHover={{ scale: 1.05 }}>
//     <Button
//         variant="ghost"
//         onClick={logout}
//     >
//         Logout
//     </Button>
// </motion.div>
//                                 </>
//                             ) : (
//                                 <>
//                                     <motion.div whileHover={{ scale: 1.05 }}>
//                                         <Link href="/student/login">
//                                             <Button variant="ghost" size="sm">Student Login</Button>
//                                         </Link>
//                                     </motion.div>
//                                     <motion.div whileHover={{ scale: 1.05 }}>
//                                         <Link href="/student/signup">
//                                             <Button variant="ghost" size="sm">Student Signup</Button>
//                                         </Link>
//                                     </motion.div>
//                                     <motion.div whileHover={{ scale: 1.05 }}>
//                                         <Link href="/teacher/login">
//                                             <Button variant="ghost" size="sm">Teacher Login</Button>
//                                         </Link>
//                                     </motion.div>
//                                     <motion.div
//                                         whileHover={{ scale: 1.05 }}
//                                         className="relative after:absolute after:inset-0 after:bg-primary/10 after:rounded-md after:blur-xl"
//                                     >
//                                         <Link href="/teacher/signup">
//                                             <Button variant="outline" size="sm">Become a Tutor</Button>
//                                         </Link>
//                                     </motion.div>
//                                 </>
//                             )}
//                         </div>

//                         <div className="md:hidden">
//                             <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
//                                 {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                             </Button>
//                         </div>
//                     </div>
//                 </div>

//                 <AnimatePresence>
//                     {isMobileMenuOpen && (
//                         <motion.div
//                             className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-md border-b"
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <div className="space-y-1 px-2 pb-3 pt-2">
//                                 {isAuthenticated ? (
//                                     <>
//                                         <Link
//                                             href={`/${user?.role}/dashboard`}
//                                             className={`block px-3 py-2 rounded-md text-base font-medium ${pathname?.includes('dashboard')
//                                                     ? 'bg-primary text-primary-foreground'
//                                                     : 'text-foreground hover:bg-muted'
//                                                 }`}
//                                             onClick={closeMobileMenu}
//                                         >
//                                             Dashboard
//                                         </Link>
//                                         <Button
//                                             variant="ghost"
//                                             className="w-full justify-start"
//                                             onClick={() => {
//                                                 logout()
//                                                 closeMobileMenu()
//                                             }}
//                                         >
//                                             Logout
//                                         </Button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Link href="/student/login" onClick={closeMobileMenu}>
//                                             <Button variant="ghost" className="w-full justify-start">Student Login</Button>
//                                         </Link>
//                                         <Link href="/student/signup" onClick={closeMobileMenu}>
//                                             <Button variant="ghost" className="w-full justify-start">Student Signup</Button>
//                                         </Link>
//                                         <Link href="/teacher/login" onClick={closeMobileMenu}>
//                                             <Button variant="ghost" className="w-full justify-start">Teacher Login</Button>
//                                         </Link>
//                                         <Link href="/teacher/signup" onClick={closeMobileMenu}>
//                                             <Button variant="outline" className="w-full justify-start">Become a Tutor</Button>
//                                         </Link>
//                                     </>
//                                 )}
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.nav>
//         </>
//     )
// }


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
//                         <>
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
//                         </>
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
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth'
import { ArrowRight } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
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

                    {!isAuthenticated ? (
                        <div className="flex items-center gap-4">
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
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
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
                        </div>
                    )}
                </div>
            </div>
        </motion.nav>
    )
}

