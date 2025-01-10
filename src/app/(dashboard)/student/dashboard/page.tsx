// 'use client'

// import { useEffect, useState } from 'react'
// import { useAuthStore } from '@/store/auth'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { ProtectedRoute } from '@/middleware/ProtectedRoute'

// export default function StudentDashboard() {
//     const { user } = useAuthStore()
//     const [enrolledCourses, setEnrolledCourses] = useState([])

//     useEffect(() => {
//         // Fetch enrolled courses
//         // This would be replaced with actual API call
//         setEnrolledCourses([])
//     }, [])

//     return (
//         <ProtectedRoute allowedRoles={['student']}>
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Your Progress</CardTitle>
//                             <CardDescription>Track your learning journey</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-2xl font-bold">{enrolledCourses.length} Courses</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Upcoming Sessions</CardTitle>
//                             <CardDescription>Your scheduled learning sessions</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-muted-foreground">No upcoming sessions</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Recent Activity</CardTitle>
//                             <CardDescription>Your latest learning activities</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-muted-foreground">No recent activity</div>
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

// export default function StudentDashboard() {
//     const { user } = useAuthStore()
//     const [enrolledCourses, setEnrolledCourses] = useState([])

//     useEffect(() => {
//         // Fetch enrolled courses
//         // This would be replaced with actual API call
//         setEnrolledCourses([])
//     }, [])

//     return (
//         <ProtectedRoute allowedRoles={['student']}>
//             <div className="container mx-auto px-4 py-8 bg-black">
//                 <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Your Progress</CardTitle>
//                             <CardDescription>Track your learning journey</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-2xl font-bold">{enrolledCourses.length} Courses</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Upcoming Sessions</CardTitle>
//                             <CardDescription>Your scheduled learning sessions</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-muted-foreground">No upcoming sessions</div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Recent Activity</CardTitle>
//                             <CardDescription>Your latest learning activities</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="text-muted-foreground">No recent activity</div>
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

export default function StudentDashboard() {
    const { user } = useAuthStore()
    const [enrolledCourses, setEnrolledCourses] = useState([])

    useEffect(() => {
        // Fetch enrolled courses
        // This would be replaced with actual API call
        setEnrolledCourses([])
    }, [])

    return (
        <ProtectedRoute allowedRoles={['student']}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 w-full max-w-7xl">
                <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name}!</h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Progress</CardTitle>
                            <CardDescription>Track your learning journey</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{enrolledCourses.length} Courses</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Sessions</CardTitle>
                            <CardDescription>Your scheduled learning sessions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-muted-foreground">No upcoming sessions</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>Your latest learning activities</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-muted-foreground">No recent activity</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ProtectedRoute>
    )
}

