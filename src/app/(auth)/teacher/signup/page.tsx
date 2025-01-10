

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/store/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { AuthOnly } from '@/middleware/AuthOnly'
import { ArrowRight, GraduationCap, BookOpen, Globe, Clock, Building, TrendingUp, Sparkles, Users, Target, CheckCircle2, Briefcase, MapPin, Languages, DollarSign, Award, Lightbulb } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const features = [
    { icon: Globe, title: "Expand Your Reach Globally", description: "Teach students across continents, helping them prepare for IELTS, OET, PTE, or learn German, French, and Spanish." },
    { icon: DollarSign, title: "Earn More While Doing What You Love", description: "Set your rates, control your schedule, and earn through lessons, admissions commissions, and webinars." },
    { icon: Clock, title: "Teach on Your Terms", description: "Flexible hours. Full control. A platform that adapts to you, not the other way around." },
    { icon: Users, title: "Join a Community That Values You", description: "Collaborate with 2000+ mentors shaping futures worldwide, while growing your expertise and personal brand." }
]

const globalDemand = [
    {
        title: "Exams Students Rely On",
        items: [
            "IELTS, OET, PTE: Essential for international admissions and visas",
            "TOEFL and GRE: Crucial for students targeting top-tier universities"
        ]
    },
    {
        title: "Languages That Change Lives",
        items: [
            "German: The gateway to Germany's thriving education and job markets",
            "French: A must-have for students heading to Canada and France",
            "Spanish and Beyond: Open opportunities in Europe, South America, and beyond"
        ]
    }
]

const platformFeatures = [
    { icon: Award, title: "A Platform Built for You", description: "Manage lessons, communicate with students, and track progress effortlessly with smart tools." },
    { icon: DollarSign, title: "Earn Without Limits", description: "Beyond teaching, earn through commissions, webinars, and royalties." },
    { icon: Globe, title: "Global Visibility", description: "Teach from anywhere, connect everywhere. Your expertise deserves a global stage." },
    { icon: Lightbulb, title: "Your Career, Your Control", description: "Whether part-time or full-time, you set the pace and direction of your mentorship journey." }
]

const advisoryBoard = {
    title: "The Preplix Education Advisory Board",
    subtitle: "Shape the Future of Global Education",
    description: "A group of exceptional educators guiding Preplix's strategies, creating high-impact content, and mentoring at scale.",
    benefits: [
        "Make Your Mark: Influence how global education evolves",
        "Earn Royalties: Benefit from every student who learns through your curated courses",
        "Lead with Prestige: Represent Preplix at webinars, conferences, and global campaigns"
    ],
    eligibility: [
        "Expertise in IELTS, OET, PTE, or global languages",
        "A passion for creating transformative learning experiences"
    ]
}

const earningPotential = [
    { title: "Teach and Earn", description: "Set your lesson rates and earn directly from teaching students worldwide." },
    { title: "Commissions on Admissions", description: "Earn up to 40% commission for every successful student admission to international universities." },
    { title: "Webinars and Revenue Share", description: "Lead high-demand webinars and earn 5% of the revenue." },
    { title: "Advisory Board Perks", description: "Earn royalties from exclusive courses and guide key initiatives as part of the Preplix Education Advisory Board." }
]

const mentorJourney = [
    { step: "Build Your Profile", description: "Share your teaching expertise, preferred subjects, and availability." },
    { step: "Connect with Global Students", description: "Match with learners preparing for exams or learning languages to build their global careers." },
    { step: "Teach with Impact", description: "Deliver lessons, track progress, and inspire students to excel." },
    { step: "Earn and Grow", description: "Boost your income while shaping futures and achieving professional growth." }
]

const mentorStories = [
    { name: "Ravi", title: "The IELTS Expert", story: "Preplix gave me a global platform. My students now study in top universities, and I've grown my income 3x while teaching from home." },
    { name: "Amelia", title: "A Language Trainer", story: "Teaching French through Preplix connects me with ambitious students heading to Canada and France. The impact is real, and so are the rewards." }
]

export default function TeacherSignupPage() {
    const router = useRouter()
    const { signup, sendOTP, verifyOTP } = useAuthStore()
    const [isLoading, setIsLoading] = useState(false)
    const [showOTPDialog, setShowOTPDialog] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        subject: '',
        otp: ''
    })

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            await sendOTP(formData.email)
            setShowOTPDialog(true)
        } catch (error) {
            toast.error('Failed to send verification code')
        } finally {
            setIsLoading(false)
        }
    }

    async function handleOTPSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            await verifyOTP(formData.email, formData.otp)
            // console.log('Verification code verified')
            await signup({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: 'teacher',
                subject: formData.subject,
                otp: formData.otp
            })
            router.push('/teacher/login')
        } catch (error) {
            console.error('Failed to verify OTP or create account:', error)
        } finally {
            setIsLoading(false)
            setShowOTPDialog(false)
        }
    }

    async function handleResendOTP() {
        try {
            await sendOTP(formData.email)
            toast.success('New verification code sent')
        } catch (error) {
            toast.error('Failed to send verification code')
        }
    }

    return (
        <AuthOnly>
            <div className="min-h-screen bg-gradient-to-b from-background to-muted px-1">
                {/* Hero Section */}
                <section className="relative py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="space-y-6"
                            >
                                <motion.h1
                                    className="text-4xl md:text-5xl font-bold tracking-tight text-[#DC0A2D]"
                                    variants={itemVariants}
                                >
                                    The World Needs Your Expertise. Are You Ready to Share It?
                                </motion.h1>
                                <motion.p
                                    className="text-xl text-muted-foreground"
                                    variants={itemVariants}
                                >
                                    What if your guidance could help a student ace IELTS and secure admission to their dream university? What if teaching French or German gave someone the confidence to thrive in a foreign country?
                                </motion.p>
                                <motion.div variants={itemVariants}>
                                    <Button
                                        size="lg"
                                        className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                        onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Sign Up to Start Teaching
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative h-[400px]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1512238972088-8acb84db0771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600"
                                    alt="A mentor leading a dynamic online session with students from different countries"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Teach with Preplix Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    Why Teach with Preplix?
                                </motion.h2>
                                <motion.p
                                    className="text-xl text-muted-foreground"
                                    variants={itemVariants}
                                >
                                    Because Teaching Should Be as Transformative for You as It is for Them.
                                </motion.p>
                            </div>
                            <div className="grid md:grid-cols-4 gap-8 9">
                                {features.map((feature, index) => (
                                    <motion.div key={index} className="space-y-4" variants={itemVariants}>
                                        <feature.icon className="h-8 w-8 text-[#DC0A2D]" />
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </section>

                {/* Global Demand Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    Global Demand for Your Skills
                                </motion.h2>
                                <motion.p className="text-xl text-muted-foreground mb-8">
                                    Over 500,000 students take IELTS annually. Germany alone welcomes over 400,000 international students yearly.
                                </motion.p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {globalDemand.map((category, index) => (
                                    <motion.div key={index} className="space-y-4" variants={itemVariants}>
                                        <h3 className="text-xl font-semibold">{category.title}</h3>
                                        <ul className="space-y-2">
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start space-x-2">
                                                    <CheckCircle2 className="h-5 w-5 text-[#DC0A2D] shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* How Preplix is Different Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    How Preplix is Different
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {platformFeatures.map((feature, index) => (
                                    <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                                        <div className="bg-[#DC0A2D]/10 p-2 rounded-full">
                                            <feature.icon className="h-6 w-6 text-[#DC0A2D]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="text-center mt-8" variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Join Preplix Today
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>

                {/* Earning Potential Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    Earning Potential That Matches Your Impact
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {earningPotential.map((item, index) => (
                                    <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                                        <div className="bg-[#DC0A2D]/10 p-2 rounded-full">
                                            <DollarSign className="h-6 w-6 text-[#DC0A2D]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="text-center mt-8" variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Discover Earning Opportunities
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>

                {/* Your Journey as a Mentor Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    Your Journey as a Mentor
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-4 gap-8">
                                {mentorJourney.map((step, index) => (
                                    <motion.div key={index} className="space-y-4" variants={itemVariants}>
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DC0A2D] text-white font-bold text-xl">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-lg font-semibold">{step.step}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="text-center mt-8" variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Your Mentorship Journey
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>

                {/* Advisory Board Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    {advisoryBoard.title}
                                </motion.h2>
                                <motion.p
                                    className="text-xl text-muted-foreground"
                                    variants={itemVariants}
                                >
                                    {advisoryBoard.subtitle}
                                </motion.p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-xl font-semibold mb-4">Why Join?</h3>
                                    <ul className="space-y-4">
                                        {advisoryBoard.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <CheckCircle2 className="h-5 w-5 text-[#DC0A2D] shrink-0 mt-0.5" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                                    <ul className="space-y-4">
                                        {advisoryBoard.eligibility.map((item, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <CheckCircle2 className="h-5 w-5 text-[#DC0A2D] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="text-center mt-8" variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Apply to the Advisory Board
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>

                {/* Mentor Stories Section */}
                <section className="py-20  bg-muted/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-12"
                        >
                            <div className="text-center">
                                <motion.h2
                                    className="text-3xl font-bold mb-4"
                                    variants={itemVariants}
                                >
                                    Mentor Stories
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {mentorStories.map((story, index) => (
                                    <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
                                        <h3 className="text-xl font-semibold mb-2">{story.name}: {story.title}</h3>
                                        <p className="text-muted-foreground italic">"{story.story}"</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="text-center mt-8" variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Join the Preplix Community
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>

                {/* Sign Up Form Section */}
                <section id="signup-form" className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="max-w-md mx-auto"
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Start Your Mentorship Journey</CardTitle>
                                    <CardDescription>
                                        Join 2000+ mentors shaping futures worldwide
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={onSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Area of Expertise</Label>
                                            <Input
                                                id="subject"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                placeholder="IELTS, German, French, etc."
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="password">Password</Label>
                                            <Input
                                                id="password"
                                                type="password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Please wait...' : 'Start Teaching'}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                    <div className="mt-4 text-center text-sm">
                                        Already have an account?{' '}
                                        <Link href="/teacher/login" className="text-primary hover:underline">
                                            Login
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-20 bg-[#DC0A2D]">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="text-center text-white space-y-8"
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold"
                                variants={itemVariants}
                            >
                                Your Expertise Can Change Lives
                            </motion.h2>
                            <motion.p
                                className="text-xl max-w-2xl mx-auto"
                                variants={itemVariants}
                            >
                                This is not just teaching — it is mentoring the next generation of global achievers.
                                With Preplix, you all inspire students, grow professionally, and build a career that
                                lets you dream as big as your students do.
                            </motion.p>
                            <motion.div variants={itemVariants}>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-[#DC0A2D] hover:bg-white/90"
                                    onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Start Your Mentorship Journey
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <Dialog open={showOTPDialog} onOpenChange={setShowOTPDialog}>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Verify Your Email</DialogTitle>
                            <DialogDescription>
                                We have sent a verification code to {formData.email}. Please enter it below.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleOTPSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="otp">Verification Code</Label>
                                <Input
                                    id="otp"
                                    value={formData.otp}
                                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                                    placeholder="Enter 6-digit code"
                                    maxLength={6}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? 'Verifying...' : 'Verify and Create Account'}
                                </Button>
                                <Button type="button" variant="ghost" onClick={handleResendOTP}>
                                    Resend Code
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </AuthOnly>
    )
}

