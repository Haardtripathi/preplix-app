/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
import { BookOpen, Rocket, Globe, Users, Star, ChevronRight, ArrowRight, Calendar, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Student",
    content: "The platform has been instrumental in my MCAT preparation. The study materials are comprehensive and well-structured.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2Zlc3Npb25hbCUyMGZhY2UlMjBnaXJsfGVufDB8MXwwfHx8Mg%3D%3D?height=100&width=100"
  },
  {
    name: "Michael Chen",
    role: "Engineering Graduate",
    content: "I improved my GRE score significantly after using the practice tests and study guides available here.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100"
  },
  {
    name: "Max Davis",
    role: "Language Learner",
    content: "The language courses are excellent. The tutors are native speakers and very patient with beginners.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100"
  }
]

const courses = [
  {
    title: "IELTS Mastery Course",
    description: "Comprehensive preparation for all IELTS sections",
    duration: "12 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600",
    price: "$299"
  },
  {
    title: "GRE Quantitative Excellence",
    description: "Master GRE math with advanced problem-solving techniques",
    duration: "8 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1664382953481-141e97ad9825?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600",
    price: "$249"
  },
  {
    title: "TOEFL Speaking Skills",
    description: "Improve your TOEFL speaking score with expert guidance",
    duration: "6 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600",
    price: "$199"
  }
]

const stats = [
  { label: "Active Students", value: "10,000+" },
  { label: "Expert Tutors", value: "500+" },
  { label: "Success Rate", value: "95%" },
  { label: "Countries", value: "50+" }
]

const faqs = [
  {
    question: "How do I get started?",
    answer: "Simply sign up for an account, choose your desired course or exam preparation program, and begin your learning journey. Our platform will guide you through the process step by step."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. Payment plans are available for certain courses."
  },
  {
    question: "Can I switch tutors if I'm not satisfied?",
    answer: "Yes, you can request a different tutor at any time. We want to ensure you have the best learning experience possible."
  },
  {
    question: "Are there any refunds?",
    answer: "We offer a 7-day money-back guarantee for all our courses if you're not completely satisfied with the content."
  }
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [activeTab, setActiveTab] = useState('featured')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Students studying together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your International Education Preparation Starts here!
          </motion.h1>
          <motion.p
            className="text-xl md:text-1xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start your international education journey with us! We offer full support from exam prep to visa assistance. With expert guidance and resources, you'll be ready for exams and visa processes. Aim for top scores and achieve your study abroad dreams with ease!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/student/signup">
              <Button size="lg" className="bg-[#DC0A2D] hover:bg-[#DC0A2D]/90 w-full sm:w-auto">
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/teacher/signup">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                Become a Tutor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <h3 className="text-4xl font-bold text-[#DC0A2D] mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of courses designed to help you excel in your academic journey
            </p>
          </div>
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto mb-8">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {courses.map((course, index) => (
                  <motion.div
                    key={course.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            <span className="text-sm">{course.level}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-[#DC0A2D]">{course.price}</span>
                          <Button variant="outline" size="sm">
                            Learn More
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="trending">
              <div className="text-center py-20">
                <p className="text-muted-foreground">Check back soon for trending courses!</p>
              </div>
            </TabsContent>
            <TabsContent value="new">
              <div className="text-center py-20">
                <p className="text-muted-foreground">New courses coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read about the experiences of students who have achieved their goals with our platform
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center mt-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#DC0A2D] text-[#DC0A2D]" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#DC0A2D]/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-[#DC0A2D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
                    <p className="text-muted-foreground">
                      Learn from experienced professionals who are passionate about teaching
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#DC0A2D]/10 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-[#DC0A2D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                    <p className="text-muted-foreground">
                      Connect with students and tutors from around the world
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#DC0A2D]/10 p-3 rounded-lg">
                    <Rocket className="w-6 h-6 text-[#DC0A2D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Progress</h3>
                    <p className="text-muted-foreground">
                      Achieve your goals faster with our structured learning paths
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1659070953831-dd4fa16222fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=800&width=600"
                alt="Students in a classroom"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-[#DC0A2D] rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students already learning with us. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/student/signup">
                <Button size="lg" variant="secondary" className="bg-white text-[#DC0A2D] hover:bg-white/90 w-full sm:w-auto">
                  Sign Up as Student
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/teacher/signup">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 w-full sm:w-auto">
                  Become a Tutor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

