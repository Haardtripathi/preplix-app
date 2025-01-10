import mongoose from 'mongoose'
import { IUser } from './User'

export interface ITeacher extends IUser {
    subject: string
    students: string[]
}

const teacherSchema = new mongoose.Schema<ITeacher>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'teacher', immutable: true },
        subject: { type: String, required: true },
        students: [{ type: String }],
    },
    {
        timestamps: true,
    }
)

export const Teacher = mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', teacherSchema)

