"use client";

import { useState } from 'react';
import { ShieldCheck, Stethoscope, Activity, Bot, User, Phone, BarChart3, BookCopy, CalendarClock, Send, ChevronLeft, Menu, Pencil, HeartPulse, MapPin, AlertTriangle, Download, Droplets, BedDouble, Smile, Weight, BrainCircuit, Pill, ClipboardList, PlusCircle, BellRing, Share2, Search, Star, Truck } from 'lucide-react';
import React from 'react';

// Smartphone Mockup for Ezra AI
const SmartphoneMockup = () => {
    const chatMessages = [
        { from: 'ezra', text: "I'm Ezra. How can I help you today?", type: 'intro', delay: '500ms' },
        { from: 'user', text: 'What should Luna eat after vomiting?', type: 'button', delay: '1200ms' },
        { from: 'user', text: "When's the next flea treatment?", type: 'button', delay: '1400ms' },
        { from: 'user', text: "Log today's walk at 6pm", type: 'button', delay: '1600ms' },
        { from: 'user', text: 'How often should I brush Luna\'s teeth?', type: 'button', delay: '1800ms' },
        { from: 'user', text: 'What should Luna eat after vomiting this morning?', type: 'message', delay: '2500ms' },
        { from: 'ezra', text: 'For Persian cats after vomiting, I recommend withholding food for 12 hours, then offering a small amount of boiled chicken and rice.', type: 'message', delay: '3200ms' },
    ];

    const footerButtons = [
        { icon: <Pencil size={14}/>, text: 'Log a task' },
        { icon: <HeartPulse size={14}/>, text: 'Health tip' },
        { icon: <MapPin size={14}/>, text: 'Find vet' },
        { icon: <CalendarClock size={14}/>, text: 'Schedule' },
    ];

    return (
        <div className="relative mx-auto border-black dark:border-gray-800 bg-black dark:bg-[#1A1A1A] border-[10px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-[140px] h-[18px] bg-black dark:bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-black dark:bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 text-white flex flex-col font-sans">
                {/* Phone Header */}
                <div className="flex-shrink-0 px-4 pt-8 pb-3 bg-gray-900 border-b border-gray-700/50">
                    <div className="absolute top-2 left-4 text-xs font-mono">9:41</div>
                    <div className="absolute top-2 right-4 text-xs flex items-center gap-1 font-mono">📶 5G 🔋</div>
                    <div className="flex items-center justify-between">
                        <ChevronLeft size={24} className="text-gray-300"/>
                        <h1 className="font-bold text-lg">Ezra</h1>
                        <Menu size={24} className="text-gray-300"/>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-1 flex items-center justify-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        Luna - Persian Cat
                    </p>
                </div>

                {/* Chat Area */}
                <div className="flex-grow p-3 space-y-3 overflow-y-auto">
                    <p className="text-center text-xs text-gray-500 pt-2">Hello, Prayas</p>
                    {chatMessages.map((msg, index) => {
                        const baseClasses = 'animate-fade-in-up';
                        if (msg.type === 'button') {
                            return (
                                <div key={index} style={{ animationDelay: msg.delay }} className={`${baseClasses} px-2`}>
                                    <button className="w-full text-center text-sm p-2.5 rounded-lg bg-gray-700/50 border border-gray-600 hover:bg-gray-700 transition-colors shadow-[0_0_15px_rgba(120,130,255,0.1)] hover:border-blue-400/50">
                                        {msg.text}
                                    </button>
                                </div>
                            )
                        }
                        return (
                            <div
                                key={index}
                                style={{ animationDelay: msg.delay }}
                                className={`flex items-start gap-2 ${baseClasses} ${msg.from === 'ezra' ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                                    msg.type === 'intro'
                                    ? 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                                    : msg.from === 'user'
                                    ? 'bg-blue-500 text-white rounded-br-none'
                                    : 'bg-gray-700 text-gray-200 rounded-bl-none'
                                }`}>
                                    <p>{msg.text}</p>
                                    {msg.from === 'user' && <p className="text-right text-xs text-blue-200 mt-1">11:42 AM</p>}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Phone Footer */}
                <div className="flex-shrink-0 p-2 bg-gray-900 border-t border-gray-800/50 space-y-2">
                    <div className="grid grid-cols-4 gap-2 text-xs">
                        {footerButtons.map(btn => (
                            <button key={btn.text} className="flex flex-col items-center justify-center gap-1 bg-gray-800/80 border border-gray-700/50 rounded-lg p-2 hover:bg-gray-700/80 transition-colors">
                                {btn.icon}
                                <span className='text-[10px]'>{btn.text}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center bg-gray-800 border border-gray-700/50 rounded-full p-1 pr-2">
                        <input type="text" placeholder="Ask Ezra..." className="flex-grow bg-transparent text-sm focus:outline-none placeholder-gray-500 px-3" />
                        <button className="bg-gradient-to-tr from-blue-500 to-indigo-600 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
                            <Send size={14} className="text-white -ml-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Smartphone Mockup for Tracking Dashboard
const TrackingDashboardMockup = () => {
    const statusCards = [
        { value: '85%', label: 'Water', icon: <Droplets size={24}/>, color: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/20' },
        { value: '7.2h', label: 'Sleep', icon: <BedDouble size={24}/>, color: 'from-pink-500 to-rose-500', shadow: 'shadow-pink-500/20' },
        { value: 'Good', label: 'Mood', icon: <Smile size={24}/>, color: 'from-orange-400 to-orange-500', shadow: 'shadow-orange-400/20' },
        { value: '32kg', label: 'Weight', icon: <Weight size={24}/>, color: 'from-green-500 to-emerald-600', shadow: 'shadow-green-500/20' },
    ];

    const actionButtons = [
        { label: 'Log Weight', icon: <Weight size={16}/> },
        { label: 'Add Note', icon: <PlusCircle size={16}/> },
        { label: 'Set Reminder', icon: <BellRing size={16}/> },
        { label: 'Share Report', icon: <Share2 size={16}/> },
    ]

    return (
        <div className="relative mx-auto border-black dark:border-gray-800 bg-black dark:bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-[140px] h-[18px] bg-black dark:bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-black dark:bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 text-white flex flex-col font-sans">
                {/* Phone Header */}
                <div className="flex-shrink-0 px-4 pt-8 pb-3 bg-gray-900 border-b border-gray-700/50">
                    <div className="absolute top-2 left-4 text-xs font-mono">9:41</div>
                    <div className="absolute top-2 right-4 text-xs flex items-center gap-1 font-mono">📶 5G 🔋</div>
                    <div className="flex items-center justify-between">
                        <ChevronLeft size={24} className="text-gray-300"/>
                        <h1 className="font-bold text-lg">Health Dashboard</h1>
                        <Download size={20} className="text-gray-400"/>
                    </div>
                </div>
                {/* Dashboard Content */}
                <div className="flex-grow overflow-y-auto space-y-3 p-3 text-sm">
                    {/* Status Section */}
                    <div className="bg-gray-800 p-3 rounded-xl border border-gray-700/80">
                        <p className="font-semibold text-base">Buddy's Status</p>
                        <div className="flex items-center gap-2 text-xs text-green-400 mt-1">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span>All vitals normal - Last updated 2 min ago</span>
                        </div>
                    </div>
                    {/* Grid Cards */}
                    <div className="grid grid-cols-2 gap-3">
                        {statusCards.map((card, i) => (
                            <div key={i} className={`bg-gradient-to-br ${card.color} p-3 rounded-xl flex flex-col justify-between h-24 shadow-lg ${card.shadow}`}>
                                {card.icon}
                                <div>
                                    <p className="font-bold text-xl">{card.value}</p>
                                    <p className="text-xs opacity-80">{card.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Weekly Activity */}
                    <div className="bg-gray-800 p-3 rounded-xl border border-gray-700/80">
                        <p className="font-semibold mb-2 text-base">Weekly Activity</p>
                        <div className="h-24 bg-gray-700/50 rounded-lg flex items-center justify-center text-xs text-gray-400">
                            Interactive charts coming soon
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <p className="font-semibold text-base pt-2">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                        {actionButtons.map(btn => (
                            <button key={btn.label} className="bg-gray-800 border border-gray-700 rounded-lg p-2.5 flex items-center justify-center gap-2 hover:bg-gray-700/80 transition-colors">
                                {btn.icon} {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Smartphone Mockup for Vet Integration
const VetIntegrationMockup = () => {
    const vets = [
        { name: 'Dr. Sarah Chen', clinic: 'Sunny Pet Clinic', rating: 4.9, color: 'from-purple-500 to-indigo-600' },
        { name: 'Dr. Michael Rodriguez', clinic: 'Central Vet Hospital', rating: 4.8, color: 'from-blue-500 to-cyan-500' },
        { name: 'Dr. Emily Wuhan', clinic: 'Bright Vet', rating: 4.9, color: 'from-purple-500 to-indigo-600' },
    ];

    return (
        <div className="relative mx-auto border-black dark:border-gray-800 bg-black dark:bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-[140px] h-[18px] bg-black dark:bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-black dark:bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 text-white flex flex-col font-sans">
                {/* Phone Header */}
                <div className="flex-shrink-0 px-4 pt-8 pb-3 bg-gray-900">
                    <div className="absolute top-2 left-4 text-xs font-mono">9:41</div>
                    <div className="absolute top-2 right-4 text-xs flex items-center gap-1 font-mono">📶 5G 🔋</div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-lg">Find Veterinarians</h1>
                        <Search size={20} className="text-gray-400"/>
                    </div>
                </div>
                {/* Vet List */}
                <div className="flex-grow overflow-y-auto space-y-3 p-2">
                    {vets.map((vet, i) => (
                        <div key={i} className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center justify-between transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                            <div>
                                <p className="font-semibold text-sm">{vet.name}</p>
                                <p className="text-xs text-gray-400">{vet.clinic}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-xs text-gray-300">
                                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                    <span>{vet.rating}</span>
                                </div>
                                <button className={`text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-gradient-to-tr ${vet.color} hover:opacity-90 shadow-md`}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Emergency Button */}
                <div className="flex-shrink-0 p-2 border-t border-gray-800">
                    <button className="w-full bg-gradient-to-tr from-red-500 to-pink-600 hover:opacity-90 transition-opacity text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-pink-500/20">
                        <Phone size={16}/>
                        Emergency Telehealth
                    </button>
                </div>
            </div>
        </div>
    );
};

const PremiumFeatures = () => {
    const features = [
        {
            icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
            title: 'Advanced Health Analytics',
            description: 'Machine learning algorithms analyze behavioral patterns, activity data, and health indicators to detect potential issues before they become serious problems.',
            stats: ['94% accuracy in early detection', '1M+ cases analyzed']
        },
        {
            icon: <BookCopy className="w-8 h-8 text-orange-400" />,
            title: 'Comprehensive Breed Intelligence',
            description: 'Specialized veterinary knowledge scanning all recognized dog and cat breeds. Each breed profile includes genetic predispositions and nutritional requirements.',
            stats: ['300+ breeds supported', 'Breed-specific care protocols']
        },
        {
            icon: <CalendarClock className="w-8 h-8 text-orange-400" />,
            title: 'Intelligent Core Scheduling',
            description: 'Automated scheduling for vaccinations, medication, grooming, and check-ups. Smart notifications ensure you never miss critical care.',
            stats: ['Automated sync across devices', 'Zero missed appointments']
        }
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Premium Features</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">Engineered for excellence</p>
            {features.map((feature, index) => (
                <div key={index} className="bg-gray-200/50 dark:bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-gray-700 transition-all hover:border-orange-400/50">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{feature.description}</p>
                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                                {feature.stats.map(stat => <span key={stat}>• {stat}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Component for Care Tracking Features
const CareTrackingFeatures = () => {
    const features = [
        {
            icon: <HeartPulse className="w-8 h-8 text-orange-400" />,
            title: 'Real-Time Health Metrics',
            description: 'Monitor vital health indicators including weight, activity levels, sleep patterns, and appetite. Advanced algorithms track changes over time and alert you to potential health concerns.',
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-orange-400" />,
            title: 'Behavioral Pattern Analysis',
            description: 'AI-powered insights into your pet\'s behavioral changes, mood patterns, and social interactions. Detect stress, anxiety, or boredom through subtle behavioral shifts.',
        },
        {
            icon: <Pill className="w-8 h-8 text-orange-400" />,
            title: 'Smart Medication Management',
            description: 'Automated medication schedules with photo confirmation, dosage tracking, and refill reminders. Never miss a dose and easily manage your pet\'s treatment plan.',
        },
        {
            icon: <ClipboardList className="w-8 h-8 text-orange-400" />,
            title: 'Comprehensive Health Reports',
            description: 'Detailed weekly and monthly health summaries with visual charts, trends, and actionable insights. Share professional reports directly with your veterinarian during appointments.',
        }
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Care Tracking Features</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">Monitor every aspect of your pet's health</p>
            {features.map((feature, index) => (
                <div key={index} className="bg-gray-200/50 dark:bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-gray-700 transition-all hover:border-orange-400/50">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Component for Vet Integration Features
const VetIntegrationFeatures = () => {
    const features = [
        { icon: <CalendarClock className="w-8 h-8 text-orange-400" />, title: 'One-Trip Appointment Booking', description: 'Book appointments with verified veterinarians in your area. Sync your pet\'s health data for a seamless experience.' },
        { icon: <ShieldCheck className="w-8 h-8 text-orange-400" />, title: 'Secure Health Record Sharing', description: 'Conveniently share your pet\'s complete health history and records with your veterinarian for a more complete consultation.' },
        { icon: <Phone className="w-8 h-8 text-orange-400" />, title: 'Emergency Telehealth Access', description: 'Connect with licensed veterinarians for urgent consultations via video call or get professional guidance for emergencies.' },
        { icon: <Truck className="w-8 h-8 text-orange-400" />, title: 'Prescription & Supply Delivery', description: 'Get prescribed medications and pet supplies delivered directly through the app with automatic re-scheduling.' },
    ];
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Veterinary Integration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">Connect with trusted professionals</p>
            {features.map((feature, index) => (
                <div key={index} className="bg-gray-200/50 dark:bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-gray-700 transition-all hover:border-orange-400/50">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Define the content structure object
const sectionContent = {
    ezra: {
        title: 'AI-Powered Pet Assistance',
        contentComponent: <SmartphoneMockup />,
    },
    track: {
        title: 'Holistic Health Dashboard',
        contentComponent: <TrackingDashboardMockup />,
    },
    vet: {
        title: 'Integrated Veterinary Records',
        contentComponent: <VetIntegrationMockup />,
    }
};

// **FIX**: Derive the type for the keys from the object itself.
// This creates a union type: 'ezra' | 'track' | 'vet'
type SectionKey = keyof typeof sectionContent;


export default function PetCarePage() {
    // **FIX**: Explicitly type the state with SectionKey.
    const [activeSection, setActiveSection] = useState<SectionKey>('ezra');
    
    // This is now type-safe because TypeScript knows `activeSection`
    // must be one of the keys defined in `sectionContent`.
    const currentContent = sectionContent[activeSection];
 
    const renderRightSideContent = () => {
        switch(activeSection) {
            case 'ezra':
                return <PremiumFeatures />;
            case 'track':
                return <CareTrackingFeatures />;
            case 'vet':
                return <VetIntegrationFeatures />;
            default:
                return null;
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <style>
                {`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                    opacity: 0; /* Start hidden */
                }
                `}
            </style>
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header Section */}
                    <p className="text-sm font-semibold  tracking-wider text-orange-600 dark:text-orange-400">
                        Empower
                    </p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                        Revolutionise Your Pet Care
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-base leading-7 sm:text-lg sm:leading-8 text-gray-600 dark:text-gray-400">
                        Discover how Hooman Pets transforms pet care with AI-driven insights. Say goodbye to guesswork and hello to tailored routines for your furry friends.
                    </p>
                </div>

                {/* Interactive Features Section (Tabs) */}
                <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8 md:gap-y-0 border-b border-gray-200 dark:border-gray-700">
                        {/* **FIX**: Cast Object.keys to SectionKey[] so 'key' is typed correctly inside map */}
                        {(Object.keys(sectionContent) as SectionKey[]).map((key) => {
                            const Icon = { ezra: ShieldCheck, track: Activity, vet: Stethoscope }[key];
                            const title = { ezra: "Meet Ezra AI", track: "Track Their Care", vet: "Vet Integrations"}[key];
                            return (
                                <div
                                    key={key}
                                    className={`text-center py-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${activeSection === key ? 'border-b-2 border-orange-500 text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
                                    onClick={() => setActiveSection(key)}
                                >
                                    <div className="flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        <h3 className="ml-3 text-base sm:text-lg font-semibold">{title}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Dynamic Content Section */}
                <div className="mt-12 max-w-6xl mx-auto">
                    <div key={activeSection} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDuration: '0.7s'}}>
                        {/* Left Side: Visual (Phone or Image) */}
                        <div className="relative flex items-center justify-center min-h-[550px]">
                            {/* Background Glow Effect */}
                            <div className={`absolute w-[350px] h-[350px] bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl opacity-0 transition-opacity duration-500 ${activeSection !== 'vet' && 'opacity-60'}`}></div>
                            <div className="relative">
                                {currentContent.contentComponent}
                            </div>
                        </div>

                        {/* Right Side: Text Content */}
                        <div>
                            {renderRightSideContent()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}