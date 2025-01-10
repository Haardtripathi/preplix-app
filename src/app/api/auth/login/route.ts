import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/db'
import { Student } from '@/models/Student'
import { Teacher } from '@/models/Teacher'
import { signToken } from '@/lib/jwt'

export async function POST(req: Request) {
    try {
        const { email, password, role } = await req.json()

        await connectDB()
        console.log("DB Connected in login")

        // Find user
        const Model = role === 'student' ? Student : Teacher
        const user = await Model.findOne({ email })
        console.log(user)

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }


        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password)
        console.log(isValidPassword)

        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // Create token
        const token = signToken({
            id: user._id,
            email: user.email,
            role: user.role,
        })

        // Create response
        const response = NextResponse.json(
            {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    ...(role === 'teacher' && { subject: user.subject }),
                },
            },
            { status: 200 }
        )

        // Set cookie
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400, // 1 day
        })

        return response
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

