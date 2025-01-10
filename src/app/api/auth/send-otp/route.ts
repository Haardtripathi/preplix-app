import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { OTP } from '@/models/OTP'
import { sendOTPEmail } from '@/utils/mailer'

export async function POST(req: Request) {
    try {
        const { email } = await req.json()
        await connectDB()

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000) // 5 minutes from now

        // Save OTP to database
        await OTP.findOneAndUpdate(
            { email },
            {
                email,
                otp,
                expiresAt,
                createdAt: new Date()
            },
            { upsert: true }
        )

        // Send OTP via email
        await sendOTPEmail(email, otp)

        return NextResponse.json({ message: 'OTP sent successfully' })
    } catch (error) {
        console.error('Send OTP error:', error)
        return NextResponse.json(
            { error: 'Failed to send OTP' },
            { status: 500 }
        )
    }
}

