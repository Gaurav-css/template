"use client";

import { useState } from 'react';
import { ShieldCheck, Stethoscope, Activity, Bot, User, Phone, BarChart3, BookCopy, CalendarClock, Send, ChevronLeft, Menu, Pencil, HeartPulse, MapPin, AlertTriangle, Download, Droplets, BedDouble, Smile, Weight, BrainCircuit, Pill, ClipboardList, PlusCircle, BellRing, Share2, Search, Star, Truck, Plus, MessageSquare, BookOpen, History, Maximize, X, Video, Mic, Waves } from 'lucide-react';
import React from 'react';

// Component for Ezra AI Interface (Now fully responsive and theme-friendly)
const EzraAIInterface = () => {
    
    // Suggestion buttons data
    const suggestionButtons = [
        'What should boro eat after vomiting?',
        "When's the next flea treatment?",
        "Log today's walk at 6pm",
        "How often should I brush boro's teeth?",
    ];

    return (
        // Web version container with responsive padding and theme support
        <div className="w-full max-w-5xl h-auto bg-gray-100 dark:bg-[#1C1C1E] rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 md:p-12 text-gray-800 dark:text-white font-sans">
            
            {/* Pet Info Pill */}
            <div className="text-center mb-6 md:mb-8">
                <button className="bg-white dark:bg-[#2C2C2E] text-sm px-5 py-2 rounded-full text-gray-700 dark:text-gray-200 shadow-md border border-gray-200 dark:border-gray-700">
                    boro (male, 3 yrs)
                </button>
            </div>
            
            {/* Greeting with responsive font size */}
            <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400">Hello, User 👋</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                    <span className="text-orange-500 dark:text-orange-400">I'm Ezra,</span> How can I help you today?
                </h2>
            </div>
            
            {/* Suggestion Buttons in a row with responsive margins */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full">
                {suggestionButtons.map((text, index) => (
                    <button key={index} className="bg-white dark:bg-[#2C2C2E] border border-gray-200 dark:border-gray-600/70 text-gray-700 dark:text-gray-200 text-xs sm:text-sm rounded-xl py-3 px-4 sm:px-5 text-center hover:bg-gray-200/60 dark:hover:bg-gray-700/50 transition-colors">
                        {text}
                    </button>
                ))}
            </div>

            {/* Bottom Input Area with responsive margins */}
            <div className="w-full max-w-2xl mx-auto mt-8 md:mt-12">
                <div className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-2 flex items-center gap-2 border border-gray-200 dark:border-gray-600/70">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Plus size={24} /></button>
                    <input type="text" placeholder="Ask Ezra about your pet..." className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400" />
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Mic size={24} /></button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Waves size={24} /></button>
                </div>
                 <p className="text-center text-xs text-gray-500 dark:text-gray-600 mt-3 px-4">
                    Ezra may not always be accurate. Please double-check important advice.
                </p>
            </div>
        </div>
    );
};


// Smartphone Mockup for Tracking Dashboard (Now responsive)
const TrackingDashboardMockup = () => {
    const statusCards = [
        { value: '85%', label: 'Water', icon: <Droplets size={24}/>, color: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/20' },
        { value: '7.2h', label: 'Sleep', icon: <BedDouble size={24}/>, color: 'from-pink-500 to-rose-500', shadow: 'shadow-pink-500/20' },
        { value: 'Good', label: 'Mood', icon: <Smile size={24}/>, color: 'from-orange-400 to-orange-500', shadow: 'shadow-orange-400/20' },
        { value: '32kg', label: 'Weight', icon: <Weight size={24}/>, color: 'from-green-500 to-emerald-600', shadow: 'shadow-green-500/20' },
    ];
    const actionButtons = [
        { label: 'Log Weight', icon: <Weight size={16}/> }, { label: 'Add Note', icon: <PlusCircle size={16}/> }, { label: 'Set Reminder', icon: <BellRing size={16}/> }, { label: 'Share Report', icon: <Share2 size={16}/> },
    ];

    return (
        <div className="relative mx-auto border-black dark:border-gray-800 bg-black dark:bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl hover:shadow-2xl transition-shadow scale-95 sm:scale-100">
            <div className="w-[140px] h-[18px] bg-black dark:bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-black dark:bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 text-white flex flex-col font-sans">
                <div className="flex-shrink-0 px-4 pt-8 pb-3 bg-gray-900 border-b border-gray-700/50">
                    <div className="absolute top-2 left-4 text-xs font-mono">9:41</div>
                    <div className="absolute top-2 right-4 text-xs flex items-center gap-1 font-mono">📶 5G 🔋</div>
                    <div className="flex items-center justify-between">
                        <ChevronLeft size={24} className="text-gray-300"/>
                        <h1 className="font-bold text-lg">Health Dashboard</h1>
                        <Download size={20} className="text-gray-400"/>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto space-y-3 p-3 text-sm">
                    <div className="bg-gray-800 p-3 rounded-xl border border-gray-700/80">
                        <p className="font-semibold text-base">Buddy's Status</p>
                        <div className="flex items-center gap-2 text-xs text-green-400 mt-1">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span>All vitals normal</span>
                        </div>
                    </div>
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
                    <div className="bg-gray-800 p-3 rounded-xl border border-gray-700/80">
                        <p className="font-semibold mb-2 text-base">Weekly Activity</p>
                        <div className="h-24 bg-gray-700/50 rounded-lg flex items-center justify-center text-xs text-gray-400">Charts coming soon</div>
                    </div>
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

// Smartphone Mockup for Vet Integration (Now responsive)
const VetIntegrationMockup = () => {
    const vets = [
        { name: 'Dr. Sarah Chen', clinic: 'Sunny Pet Clinic', rating: 4.9, color: 'from-purple-500 to-indigo-600' },
        { name: 'Dr. M. Rodriguez', clinic: 'Central Vet Hospital', rating: 4.8, color: 'from-blue-500 to-cyan-500' },
        { name: 'Dr. Emily Wuhan', clinic: 'Bright Vet', rating: 4.9, color: 'from-purple-500 to-indigo-600' },
    ];

    return (
        <div className="relative mx-auto border-black dark:border-gray-800 bg-black dark:bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl hover:shadow-2xl transition-shadow scale-95 sm:scale-100">
            <div className="w-[140px] h-[18px] bg-black dark:bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-black dark:bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 text-white flex flex-col font-sans">
                <div className="flex-shrink-0 px-4 pt-8 pb-3 bg-gray-900">
                    <div className="absolute top-2 left-4 text-xs font-mono">9:41</div>
                    <div className="absolute top-2 right-4 text-xs flex items-center gap-1 font-mono">📶 5G 🔋</div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-lg">Find Veterinarians</h1>
                        <Search size={20} className="text-gray-400"/>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto space-y-3 p-2">
                    {vets.map((vet, i) => (
                        <div key={i} className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center justify-between transition-all hover:border-purple-500/50">
                            <div>
                                <p className="font-semibold text-sm">{vet.name}</p>
                                <p className="text-xs text-gray-400">{vet.clinic}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-xs text-yellow-400"><Star size={14} className="fill-yellow-400" /><span>{vet.rating}</span></div>
                                <button className={`text-xs font-semibold px-2 py-1.5 rounded-full text-white bg-gradient-to-tr ${vet.color} hover:opacity-90`}>Book</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-shrink-0 p-2 border-t border-gray-800">
                    <button className="w-full bg-gradient-to-tr from-red-500 to-pink-600 hover:opacity-90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-pink-500/20">
                        <Phone size={16}/> Emergency Telehealth
                    </button>
                </div>
            </div>
        </div>
    );
};

// Component for Care Tracking Features
const CareTrackingFeatures = () => {
    const features = [
        { icon: <HeartPulse className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Real-Time Health Metrics', description: 'Monitor vital health indicators including weight, activity levels, sleep patterns, and appetite.' },
        { icon: <BrainCircuit className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Behavioral Pattern Analysis', description: 'AI-powered insights into your pet\'s behavioral changes, mood patterns, and social interactions.' },
        { icon: <Pill className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Smart Medication Management', description: 'Automated medication schedules, dosage tracking, and refill reminders. Never miss a dose.' },
        { icon: <ClipboardList className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Comprehensive Health Reports', description: 'Detailed health summaries with charts and trends. Share reports directly with your veterinarian.' },
    ];
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Care Tracking Features</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">Monitor every aspect of your pet's health</p>
            {features.map((feature, index) => (
                <div key={index} className="bg-gray-100/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-300 dark:border-gray-700 transition-all hover:border-orange-500/50">
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
        { icon: <CalendarClock className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'One-Tap Appointment Booking', description: 'Book appointments with verified veterinarians. Sync your pet\'s health data for a seamless experience.' },
        { icon: <ShieldCheck className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Secure Health Record Sharing', description: 'Conveniently share your pet\'s complete health history and records with your veterinarian.' },
        { icon: <Phone className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Emergency Telehealth Access', description: 'Connect with licensed veterinarians for urgent consultations via video call for guidance.' },
        { icon: <Truck className="w-8 h-8 text-orange-500 dark:text-orange-400" />, title: 'Prescription & Supply Delivery', description: 'Get prescribed medications and pet supplies delivered directly through the app.' },
    ];
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Veterinary Integration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 -mt-2">Connect with trusted professionals</p>
            {features.map((feature, index) => (
                <div key={index} className="bg-gray-100/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-300 dark:border-gray-700 transition-all hover:border-orange-500/50">
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
    ezra: { contentComponent: <EzraAIInterface /> },
    track: { contentComponent: <TrackingDashboardMockup /> },
    vet: { contentComponent: <VetIntegrationMockup /> },
};

type SectionKey = keyof typeof sectionContent;

export default function PetCarePage() {
    const [activeSection, setActiveSection] = useState<SectionKey>('ezra');
    
    const renderRightSideContent = () => {
        switch(activeSection) {
            case 'track': return <CareTrackingFeatures />;
            case 'vet': return <VetIntegrationFeatures />;
            default: return null;
        }
    };
    const layoutClass = activeSection === 'ezra' ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2';

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <style>{`@keyframes fade-in-up{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}.animate-fade-in-up{animation:fade-in-up .5s ease-out forwards;opacity:0}`}</style>
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-wider text-orange-600 dark:text-orange-400">Empower</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">Revolutionise Your Pet Care</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-base leading-7 sm:text-lg sm:leading-8 text-gray-600 dark:text-gray-400">
                        Discover how Hooman Pets transforms pet care with AI-driven insights. Say goodbye to guesswork and hello to tailored routines for your furry friends.
                    </p>
                </div>
                <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8 border-b border-gray-200 dark:border-gray-700">
                        {(Object.keys(sectionContent) as SectionKey[]).map((key) => {
                            const Icon = { ezra: ShieldCheck, track: Activity, vet: Stethoscope }[key];
                            const title = { ezra: "Meet Ezra AI", track: "Track Their Care", vet: "Vet Integrations" }[key];
                            return (
                                <div key={key} onClick={() => setActiveSection(key)}
                                     className={`text-center py-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${activeSection === key ? 'border-b-2 border-orange-500 text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}>
                                    <div className="flex items-center justify-center gap-3">
                                        <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-12 max-w-7xl mx-auto">
                    <div key={activeSection} className={`grid ${layoutClass} gap-8 lg:gap-12 items-center animate-fade-in-up`} style={{animationDuration: '0.7s'}}>
                        <div className="relative flex items-center justify-center">
                             <div className={`absolute w-full h-full max-w-md bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 dark:from-purple-500/10 dark:to-indigo-500/10 rounded-full blur-3xl transition-opacity duration-500 ${activeSection === 'ezra' ? 'opacity-80' : 'opacity-50'}`}></div>
                            <div className="relative w-full flex justify-center">
                                {sectionContent[activeSection].contentComponent}
                            </div>
                        </div>
                        {activeSection !== 'ezra' && (<div>{renderRightSideContent()}</div>)}
                    </div>
                </div>
            </main>
        </div>
    );
}