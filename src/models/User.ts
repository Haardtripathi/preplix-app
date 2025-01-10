import mongoose from 'mongoose'

export interface IUser {
    name: string
    email: string
    password: string
    role: 'student' | 'teacher'
    subject?: string
    createdAt: Date
    updatedAt: Date
}

const userSchema = new mongoose.Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, enum: ['student', 'teacher'] },
        subject: { type: String, required: false },
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema)

