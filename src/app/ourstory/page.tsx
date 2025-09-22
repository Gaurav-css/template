'use client';

import React from 'react';
import { 
    ArrowRight, 
    ShieldCheck, 
    Clock, 
    Heart, 
    Star, 
    Cpu, 
    Lightbulb, 
    CircleDot,
    ChevronDown,
    Users
} from 'lucide-react';

// A helper component for feature cards to keep the code clean
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div>
        <div className="flex items-center justify-center h-12 w-12 bg-green-900/50 border border-green-500/30 rounded-lg mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
);

// Main "Our Story" page component
export default function OurStoryPage() {
    return (
        <div className="bg-black text-zinc-300">
            {/* --- 1. Hero Section --- */}
            <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10">
                    <div className="inline-block bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm mb-4">
                        The Future of Pet Care
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        The Hooman Story
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400">
                        Revolutionizing Pet Care Through AI
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
                        We believe pets are family. With cutting-edge AI technology, we&apos;re making pet care smarter, simpler, and more connected than ever before.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-[#ED6C35] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition-colors w-full sm:w-auto justify-center">
                            Join Our Mission <ArrowRight size={20} />
                        </button>
                        <button className="bg-zinc-800 text-white font-semibold px-6 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors w-full sm:w-auto justify-center">
                            Our Journey
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500">
                    <p className="text-sm">Scroll to explore</p>
                    <ChevronDown className="animate-bounce" size={20} />
                </div>
            </section>

            <main className="container mx-auto px-4 py-24 space-y-32">
                {/* --- 2. Our Journey Section --- */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm text-[#ED6C35] font-semibold">
                            OUR JOURNEY
                        </div>
                        <h2 className="text-4xl font-bold text-white">Our Journey</h2>
                        <blockquote className="border-l-2 border-[#ED6C35] pl-6 text-lg italic text-zinc-300">
                            &quot;Every pet has its own unique personality - and we believe each one deserves <span className="text-[#ED6C35]">personalized care</span> that adapts to their specific needs and behaviors.&quot;
                        </blockquote>
                        <p className="text-zinc-400">
                            Our team of veterinarians, AI specialists, and pet parents come together with a simple mission: to bridge the gap between professional veterinary care and everyday pet parenting through <span className="text-white font-medium">intelligent technology</span>.
                        </p>
                        <p className="text-zinc-400">
                            We&apos;ve spent years researching pet behavior patterns, health indicators, and the challenges that modern pet families face. The result? <span className="text-white font-medium">Ezra AI</span> - your personalized pet care companion.
                        </p>
                    </div>
                    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6 shadow-2xl shadow-orange-500/10">
                        <div className="bg-black rounded-lg p-6 font-mono text-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-zinc-500 ml-auto">ezra_ai.hooman.dev</span>
                            </div>
                            <div className="space-y-2 text-zinc-300">
                                <p><span className="text-green-400">&gt;</span> Initializing Ezra AI...</p>
                                <p><span className="text-green-400">&gt;</span> const getHealth = analyzeBehavior(data)</p>
                                <p><span className="text-green-400">&gt;</span> AI Model: 99.9% accuracy ✓</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center mt-6 pt-6 border-t border-zinc-800">
                            <div>
                                <p className="text-3xl font-bold text-white">50+</p>
                                <p className="text-xs text-zinc-400">Pet Breeds Studied</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">24/7</p>
                                <p className="text-xs text-zinc-400">AI Support</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">100%</p>
                                <p className="text-xs text-zinc-400">Personalized</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 3. Core Principle Section --- */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                     <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-8 shadow-2xl shadow-green-500/10 order-2 lg:order-1">
                         <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-lg">
                                <p className="font-medium text-white">AI Health Monitor</p>
                                <span className="text-xs font-semibold text-green-400 bg-green-900/50 px-2 py-1 rounded-full">● Active</span>
                            </div>
                             <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-lg">
                                <p className="font-medium text-white">Vet Integration</p>
                                <span className="text-xs font-semibold text-blue-400 bg-blue-900/50 px-2 py-1 rounded-full">● Connected</span>
                            </div>
                             <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-lg">
                                <p className="font-medium text-white">Data Security</p>
                                <span className="text-xs font-semibold text-yellow-400 bg-yellow-900/50 px-2 py-1 rounded-full">● Encrypted</span>
                            </div>
                         </div>
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-white leading-tight">Every decision we make puts your pet&apos;s <span className="text-[#ED6C35]">happiness and health first</span></h2>
                        <p className="text-zinc-400">
                            From our AI algorithms to our user interface design, everything is built with deep empathy for both pets and their human families. We understand that pets aren&apos;t just animals - they&apos;re <span className="text-white font-medium">family members</span> who deserve the best care possible.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm">Privacy Focused</span>
                            <span className="bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm">Science-Backed</span>
                            <span className="bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm">Always Learning</span>
                        </div>
                    </div>
                </section>

                {/* --- 4. Our Commitment Section --- */}
                <section className="text-center">
                    <div className="inline-block bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm text-[#ED6C35] font-semibold">
                        OUR PROMISE
                    </div>
                    <h2 className="text-4xl font-bold text-white mt-4">Our Commitment</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-zinc-400">
                        We&apos;re dedicated to providing the most reliable, intelligent, and compassionate pet care support powered by cutting-edge technology. Every feature is designed with your pet&apos;s wellbeing at heart.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto text-left">
                        <FeatureCard icon={<ShieldCheck className="text-green-400" />} title="Trusted Safety" description="Every recommendation backed by veterinary science and real-world testing with enterprise-grade security." />
                        <FeatureCard icon={<Clock className="text-green-400" />} title="24/7 Support" description="Round-the-clock AI assistance with real-time monitoring whenever your pet needs care guidance." />
                        <FeatureCard icon={<Heart className="text-green-400" />} title="1-to-1 Personalized Care" description="Advanced ML algorithms that adapt to your pet's unique personality, health history, and behavioral patterns." />
                        <FeatureCard icon={<Star className="text-green-400" />} title="Excellence Promise" description="Continuously improving through advanced AI, machine learning, and comprehensive user feedback loops." />
                    </div>
                </section>

                 {/* --- 5. Our Vision Section --- */}
                <section className="bg-[#18181B] border border-zinc-800 rounded-2xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                             <div className="inline-block bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5 text-sm text-[#ED6C35] font-semibold">
                                OUR VISION
                            </div>
                            <h2 className="text-4xl font-bold text-white">Our Vision</h2>
                            <p className="text-zinc-400">We&apos;re building a future where every pet receives <span className="text-white">personalized, intelligent care</span> that adapts to their unique needs. Our vision extends beyond just an app - it&apos;s about creating a comprehensive <span className="text-white">ecosystem of care</span>.</p>
                            <h3 className="text-xl font-semibold text-white pt-4">What we&apos;re building:</h3>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="flex items-center gap-3"><Cpu size={20} className="text-[#ED6C35]" /> Real-time health monitoring and smart alerts</li>
                                <li className="flex items-center gap-3"><Heart size={20} className="text-[#ED6C35]" /> Personalized nutrition and exercise plans</li>
                                <li className="flex items-center gap-3"><Lightbulb size={20} className="text-[#ED6C35]" /> AI-powered behavioral insights and training tips</li>
                                <li className="flex items-center gap-3"><Users size={20} className="text-[#ED6C35]" /> Community support and expert consultations</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Innovation Roadmap</h3>
                            <div className="space-y-6 border-l-2 border-zinc-700 pl-6">
                                <div className="relative">
                                    <CircleDot className="absolute -left-[33px] top-1 text-[#ED6C35] bg-black" />
                                    <p className="font-semibold text-white">App Launch</p>
                                    <p className="text-sm text-zinc-400">A robust platform with core AI and health monitoring.</p>
                                </div>
                                <div className="relative">
                                    <CircleDot className="absolute -left-[33px] top-1 text-[#ED6C35] bg-black" />
                                    <p className="font-semibold text-white">Pet Partnership <span className="text-xs ml-2 bg-yellow-800 text-yellow-300 px-2 py-0.5 rounded-full">In Progress</span></p>
                                    <p className="text-sm text-zinc-400">Building the world's largest verified network of veterinarians.</p>
                                </div>
                                 <div className="relative">
                                    <CircleDot className="absolute -left-[33px] top-1 text-zinc-600 bg-black" />
                                    <p className="font-semibold text-zinc-500">Global Expansion</p>
                                    <p className="text-sm text-zinc-600">Bringing smart pet care solutions to families worldwide.</p>
                                </div>
                            </div>
                             <div className="grid grid-cols-2 gap-4 text-center mt-6 pt-6 border-t border-zinc-800">
                                <div>
                                    <p className="text-2xl font-bold text-white">10,000+</p>
                                    <p className="text-xs text-zinc-400">Early Access Users</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">98%</p>
                                    <p className="text-xs text-zinc-400">Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
