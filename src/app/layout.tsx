// import { Inter } from 'next/font/google'
// import { Toaster } from 'react-hot-toast'
// import { MainLayout } from '@/components/layout/MainLayout'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Preplix - Online Learning Platform',
//   description: 'Connect with expert tutors and accelerate your learning journey',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Toaster position="top-center" />
//         <MainLayout>{children}</MainLayout>
//       </body>
//     </html>
//   )
// }


// import { Inter } from 'next/font/google'
// import { Toaster } from 'react-hot-toast'
// import { MainLayout } from '@/components/layout/MainLayout'
// import { AuthInitializer } from '@/components/AuthInitializer'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Preplix - Online Learning Platform',
//   description: 'Connect with expert tutors and accelerate your learning journey',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AuthInitializer />
//         <Toaster position="top-center" />
//         <MainLayout>{children}</MainLayout>
//       </body>
//     </html>
//   )
// }

import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { MainLayout } from '@/components/layout/MainLayout'
import { AuthInitializer } from '@/components/AuthInitializer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Preplix - Online Learning Platform',
  description: 'Connect with expert tutors and accelerate your learning journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthInitializer />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}

