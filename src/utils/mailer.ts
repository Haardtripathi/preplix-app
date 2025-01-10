import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

export async function sendOTPEmail(email: string, otp: string) {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Your OTP for Signup',
        html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Verify Your Email</h2>
                    <p>Your OTP for signup is: <strong>${otp}</strong></p>
                    <p>This OTP will expire in 5 minutes.</p>
                </div>
            `
    }

    await transporter.sendMail(mailOptions)
}

