import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import connectDB from '@/lib/db'
import { Student } from '@/models/Student'
import { Teacher } from '@/models/Teacher'

export async function GET() {
    try {
        const headersList = headers()
        const user = headersList.get('user')

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const { id, role } = JSON.parse(user)

        await connectDB()

        const Model = role === 'student' ? Student : Teacher
        const userData = await Model.findById(id).select('-password')

        if (!userData) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(userData)
    } catch (error) {
        console.error('Get user error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

