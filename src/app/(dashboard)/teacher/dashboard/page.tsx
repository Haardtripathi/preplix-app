// 'use client'

// import { useEffect, useState } from 'react'
// import { useAuthStore } from '@/store/auth'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { ProtectedRoute } from '@/middleware/ProtectedRoute'

// export default function TeacherDashboard() {
//     const { user } = useAuthStore()
//     const [students, setStudents] = useState([])

//     useEffect(() => {
//         // Fetch teacher's students
//         // This would be replaced with actual API call
//         setStudents([])
//     }, [])

//     return (
//         <ProtectedRoute allowedRoles={['teacher']}>
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Your Students</CardTitle>
//                             <CardDescription>Students you are currently teaching</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-2xl font-bold">{students.length} Students</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Upcoming Sessions</CardTitle>
//                             <CardDescription>Your scheduled teaching sessions</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-muted-foreground">No upcoming sessions</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Your Subject</CardTitle>
//                             <CardDescription>Your teaching specialty</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-2xl font-bold">{user?.subject}</div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </ProtectedRoute>
//     )
// }


// 'use client'

// import { useEffect, useState } from 'react'
// import { useAuthStore } from '@/store/auth'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { ProtectedRoute } from '@/middleware/ProtectedRoute'

// export default function TeacherDashboard() {
//     const { user } = useAuthStore()
//     const [students, setStudents] = useState([])

//     useEffect(() => {
//         // Fetch teacher's students
//         // This would be replaced with actual API call
//         setStudents([])
//     }, [])

//     return (
//         <ProtectedRoute allowedRoles={['teacher']}>
//             <div className="container mx-auto px-4 py-8 bg-black">
//                 <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Your Students</CardTitle>
//                             <CardDescription>Students you are currently teaching</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-2xl font-bold">{students.length} Students</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Upcoming Sessions</CardTitle>
//                             <CardDescription>Your scheduled teaching sessions</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-muted-foreground">No upcoming sessions</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Your Subject</CardTitle>
//                             <CardDescription>Your teaching specialty</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-2xl font-bold">{user?.subject}</div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </ProtectedRoute>
//     )
// }


'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProtectedRoute } from '@/middleware/ProtectedRoute'

export default function TeacherDashboard() {
    const { user } = useAuthStore()
    const [students, setStudents] = useState([])

    useEffect(() => {
        // Fetch teacher's students
        // This would be replaced with actual API call
        setStudents([])
    }, [])

    return (
        <ProtectedRoute allowedRoles={['teacher']}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 w-full max-w-7xl">
                <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Students</CardTitle>
                            <CardDescription>Students you are currently teaching</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{students.length} Students</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Sessions</CardTitle>
                            <CardDescription>Your scheduled teaching sessions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-muted-foreground">No upcoming sessions</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Your Subject</CardTitle>
                            <CardDescription>Your teaching specialty</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{user?.subject}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedRoute>
    )
}

