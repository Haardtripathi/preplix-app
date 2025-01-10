'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface OTPDialogProps {
    isOpen: boolean
    onClose: () => void
    email: string
    onVerify: (otp: string) => Promise<void>
}

export function OTPDialog({ isOpen, onClose, email, onVerify }: OTPDialogProps) {
    const [otp, setOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function resendOTP() {
        try {
            const response = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })

            if (!response.ok) throw new Error('Failed to send OTP')
            toast.success('OTP sent successfully')
        } catch (error) {
            toast.error('Failed to send OTP')
        }
    }

    async function handleVerify() {
        if (!otp) return
        setIsLoading(true)
        try {
            await onVerify(otp)
        } catch (error) {
            toast.error('Invalid OTP')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Verify Your Email</DialogTitle>
                    <DialogDescription>
                        We've sent a verification code to {email}. Please enter it below.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="otp">Verification Code</Label>
                        <Input
                            id="otp"
                            placeholder="Enter 6-digit code"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button onClick={handleVerify} disabled={!otp || isLoading}>
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </Button>
                        <Button variant="ghost" onClick={resendOTP}>
                            Resend Code
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
