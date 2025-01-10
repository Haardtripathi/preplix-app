import mongoose from 'mongoose'
import { IUser } from './User'

export interface IStudent extends IUser {
    enrolledCourses: string[]
}

const studentSchema = new mongoose.Schema<IStudent>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'student', immutable: true },
        enrolledCourses: [{ type: String }],
    },
    {
        timestamps: true,
    }
)

export const Student = mongoose.models.Student || mongoose.model<IStudent>('Student', studentSchema)

