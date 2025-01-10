import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import { OTP } from '@/models/OTP'

export async function POST(req: Request) {
    try {
        const { email, otp } = await req.json()
        console.log("Connecting DB in verify-otp")

        await connectDB()
        console.log("ABC")
        console.log("DB Connected in verify-otp")


        const otpRecord = await OTP.findOne({
            email,
            otp,
            expiresAt: { $gt: new Date() }
        })

        if (!otpRecord) {
            return NextResponse.json(
                { error: 'Invalid or expired OTP' },
                { status: 400 }
            )
        }

        // Delete the used OTP
        await OTP.deleteOne({ _id: otpRecord._id })

        return NextResponse.json({ message: 'OTP verified successfully' })
    } catch (error) {
        console.error('Verify OTP error:', error)
        return NextResponse.json(
            { error: 'Failed to verify OTP' },
            { status: 500 }
        )
    }
}

