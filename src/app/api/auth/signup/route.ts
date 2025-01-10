

import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/db'
import { Student } from '@/models/Student'
import { Teacher } from '@/models/Teacher'

export async function POST(req: Request) {
    try {
        const { name, email, password, role, subject, otp } = await req.json()
        // console.log(name, email, password, role, subject, otp)
        await connectDB()
        console.log("DB Connected in signup")



        // Check if user already exists
        const Model = role === 'student' ? Student : Teacher
        const existingUser = await Model.findOne({ email })
        // console.log("EXISTING USER", existingUser)

        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 400 }
            )
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create user
        const userData = {
            name,
            email,
            password: hashedPassword,
            role,
            ...(role === 'teacher' && { subject }),
        }

        const user = await Model.create(userData)
        // console.log("USER", user)


        return NextResponse.json(
            { message: 'User created successfully' },
            { status: 201 }
        )
    } catch (error) {
        console.error('Signup error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

