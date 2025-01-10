
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
import { ArrowRight, GraduationCap, BookOpen, Globe, Clock, Building, TrendingUp, Sparkles, Users, Target, CheckCircle2, Briefcase, MapPin, Languages } from 'lucide-react'

// Keep all the original constants
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
    { icon: Building, title: "Build the Life You Deserve", description: "Work in industries where innovation meets opportunity, in countries that value work-life balance." },
    { icon: TrendingUp, title: "Earn, Grow, and Thrive", description: "Salaries in top global markets can be 2-5x higher than in domestic roles, and growth is exponential." },
    { icon: Sparkles, title: "Access Unparalleled Opportunities", description: "Whether you're a student or a professional, international experience elevates your career and your life." }
]

const languagePrep = [
    { icon: Languages, title: "Speak with Confidence", description: "Whether in a lecture hall, office, or new city, language is your bridge to success." },
    { icon: Target, title: "Ace the Gateways", description: "IELTS, OET, or PTE scores open doors to top universities, visas, and global careers." },
    { icon: Globe, title: "Adapt and Excel", description: "Learning German or French helps you not just survive but thrive in new environments." },
    { icon: Sparkles, title: "Shine Bright", description: "A strong language score or fluency gives you an edge in competitive global markets." }
]
const mentorshipFeatures = [
    { icon: Users, title: "2000+ Mentors at Your Fingertips", description: "Choose from certified mentors for IELTS, OET, PTE, or global languages like German and French." },
    { icon: Clock, title: "Learn on Your Terms", description: "Flexible sessions, personalized plans, and resources tailored to your goals." },
    { icon: Target, title: "A Journey, Not Just Preparation", description: "From applications to job placements, Preplix supports you at every step." }
]

const successStories = [
    { name: "Harsh", title: "From Stagnation to Leadership", story: "I was stuck in a repetitive IT job in India. Preplix helped me ace IELTS, and now I'm leading a tech team in Toronto." },
    { name: "Prashasti", title: "Thriving in Berlin", story: "Learning German through Preplix mentors wasn't just preparation—it changed my life. I'm now a registered nurse in Germany, earning and living better than I ever imagined." },
    { name: "Raj", title: "From Classroom to Dream Job", story: "With Preplix, I mastered French and secured admission to a top university in Montreal. The language skills set me apart." }
]

const roadmap = [
    { step: "Define Your Goals", description: "Are you looking to study, work, or both? Start with a personalized plan." },
    { step: "Choose Your Mentor", description: "Whether it's mastering IELTS or learning German, pick a mentor who aligns with your goals." },
    { step: "Prepare and Excel", description: "Practice with real exam questions, mock tests, and receive actionable feedback." },
    { step: "Apply and Secure Opportunities", description: "Preplix helps you craft standout applications for universities or overseas jobs." },
    { step: "Build a Life Abroad", description: "From visa filing to post-landing support, we help you settle in with ease." }
]

const countries = [
    { name: "Canada", features: ["Over 500,000 job openings annually", "High demand for IT, healthcare, and engineering professionals", "PR pathways through Express Entry and PNP programs"] },
    { name: "Germany", features: ["Europe's STEM hub, with over 400,000 job vacancies yearly", "Welcomes skilled professionals in tech, manufacturing, and healthcare"] },
    { name: "Australia", features: ["A booming economy with opportunities in education, nursing, and construction", "Known for its balanced lifestyle and migration-friendly policies"] }
]

export default function StudentSignupPage() {
    const router = useRouter()
    const { signup, sendOTP, verifyOTP } = useAuthStore()
    const [isLoading, setIsLoading] = useState(false)
    const [showOTPDialog, setShowOTPDialog] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
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
                role: 'student',
                otp: formData.otp
            })
            router.push('/student/login')
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
                                    The World is Waiting. Are You Ready?
                                </motion.h1>
                                <motion.p
                                    className="text-xl text-muted-foreground"
                                    variants={itemVariants}
                                >
                                    Imagine yourself not just studying abroad but building a life where your skills are valued globally. Picture landing a dream job in Germany, thriving in Australia, or mastering your field in Canada.
                                </motion.p>
                                <motion.div variants={itemVariants}>
                                    <Button
                                        size="lg"
                                        className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                        onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Sign Up and Take the First Step
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
                                    src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600"
                                    alt="A student"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose a Global Career Section */}
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
                                    Why Choose a Global Career?
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <motion.div key={index} className="space-y-4" variants={itemVariants}>
                                        <feature.icon className="h-8 w-8 text-[#DC0A2D]" />
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div className="text-center mt-8" variants={itemVariants}>
                            <Button
                                size="lg"
                                className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                                onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Explore My Opportunities
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Why Language and Preparation Matter Section */}
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
                                    Why Language and Preparation Matter
                                </motion.h2>
                                <motion.p
                                    className="text-xl text-muted-foreground"
                                    variants={itemVariants}
                                >
                                    It is Not Just About Meeting Requirements. It is About Standing Out.
                                </motion.p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {languagePrep.map((item, index) => (
                                    <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                                        <div className="bg-[#DC0A2D]/10 p-2 rounded-full">
                                            <item.icon className="h-6 w-6 text-[#DC0A2D]" />
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
                            Find Your Path
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>



                {/* New What Makes Preplix Different Section */}
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
                                    What Makes Preplix Different?
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {mentorshipFeatures.map((feature, index) => (
                                    <motion.div key={index} className="space-y-4" variants={itemVariants}>
                                        <feature.icon className="h-8 w-8 text-[#DC0A2D]" />
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    </div><motion.div className="text-center mt-8" variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90"
                            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Find My Mentor
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>

                {/* Success Stories Section */}
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
                                    Success Stories: Real People, Real Impact
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {successStories.map((story, index) => (
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
                            Start Your Success Story
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>


                {/* Your Path to Success Section */}
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
                                    Your Roadmap to Success
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-5 gap-8">
                                {roadmap.map((step, index) => (
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
                            Start My Journey
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>


                {/* Countries Section */}
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
                                    Your Path to Canada, Germany, and Australia
                                </motion.h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {countries.map((country, index) => (
                                    <motion.div key={index} className="space-y-4" variants={itemVariants}>
                                        <h3 className="text-xl font-semibold">{country.name}</h3>
                                        <ul className="space-y-2">
                                            {country.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start space-x-2">
                                                    <CheckCircle2 className="h-5 w-5 text-[#DC0A2D] shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
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
                            Explore Countries
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </section>



                {/* Sign Up Form Section */}
                <section id="signup-form" className="py-20 bg-muted/50">
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
                                    <CardTitle>Create Your Account</CardTitle>
                                    <CardDescription>
                                        Take the first step towards your global career
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
                                            {isLoading ? 'Please wait...' : 'Sign Up and Get Started'}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA Section */}
                {/* <section className="py-20 bg-[#DC0A2D]">
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
                                What's Holding You Back?
                            </motion.h2>
                            <motion.p
                                className="text-xl max-w-2xl mx-auto"
                                variants={itemVariants}
                            >
                                Harsh, Prashasti, and Raj took the leap. What about you?
                                What could your life look like with the right preparation?
                                How far could your ambition take you with Preplix by your side?
                            </motion.p>
                            <motion.div variants={itemVariants}> Raj took the leap. What about you? What could your life look like with the right preparation? How far could
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-[#DC0A2D] hover:bg-white/90"
                                    onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Sign Up and Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section> */}
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
                                What's Holding You Back?
                            </motion.h2>
                            <motion.p
                                className="text-xl max-w-2xl mx-auto"
                                variants={itemVariants}
                            >
                                Harsh, Prashasti, and Raj took the leap. What about you?
                                What could your life look like with the right preparation?
                                How far could your ambition take you with Preplix by your side?
                            </motion.p>
                            <motion.div variants={itemVariants}>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-[#DC0A2D] hover:bg-white/90"
                                    onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Sign Up and Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* OTP Dialog */}
                <Dialog open={showOTPDialog} onOpenChange={setShowOTPDialog}>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Verify Your Email</DialogTitle>
                            <DialogDescription>
                                We've sent a verification code to {formData.email}. Please enter it below.
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

