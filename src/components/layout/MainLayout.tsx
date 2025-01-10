// 'use client'

// import { usePathname } from 'next/navigation'
// import { Navbar } from './Navbar'
// import { Footer } from './Footer'

// export function MainLayout({ children }: { children: React.ReactNode }) {
//     const pathname = usePathname()
//     const isAuthPage = pathname?.includes('/login') || pathname?.includes('/signup')

//     if (isAuthPage) {
//         return <>{children}</>
//     }

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-grow">{children}</main>
//             <Footer />
//         </div>
//     )
// }


// 'use client'

// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Navbar } from './Navbar'
// import { Footer } from './Footer'

// export function MainLayout({ children }: { children: React.ReactNode }) {
//     const pathname = usePathname()
//     const isAuthPage = pathname?.includes('/login') || pathname?.includes('/signup')

//     if (isAuthPage) {
//         return (

//             <>
//                 <Navbar />
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         {children}
//                     </motion.div>
//                 </AnimatePresence>
//                 <Footer />
//             </>
//         )
//     }

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <motion.main
//                 className="flex-grow"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 {children}
//             </motion.main>
//             <Footer />
//         </div>
//     )
// }

'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAuthPage = pathname?.includes('/login') || pathname?.includes('/signup')

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <motion.main
                className="flex-grow w-full pt-16 min-h-[calc(100vh-4rem)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </motion.main>
            <Footer />
        </div>
    )
}

