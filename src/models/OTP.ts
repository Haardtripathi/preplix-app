import mongoose from 'mongoose'

export interface IOTP {
    email: string
    otp: string
    createdAt: Date
    expiresAt: Date
}

const otpSchema = new mongoose.Schema<IOTP>({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 }, // OTP expires in 5 minutes
    expiresAt: { type: Date, required: true }
})

export const OTP = mongoose.models.OTP || mongoose.model<IOTP>('OTP', otpSchema)

