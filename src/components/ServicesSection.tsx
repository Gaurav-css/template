"use client";

import { useState } from 'react';
// Cleaned up imports to only include icons that are in use
import { ShieldCheck, Stethoscope, Activity, Plus, Mic, Waves } from 'lucide-react';
import React from 'react';

// Component for the main Ezra AI Interface (boro pill removed)
const EzraAIInterface = () => {
    
    // Updated suggestion buttons to be more generic
    const suggestionButtons = [
        'What should my pet eat after vomiting?',
        "When's the next flea treatment?",
        "Log today's walk at 6pm",
        "How often should I brush their teeth?",
    ];

    return (
        // Web version container with responsive padding and theme support
        <div className="w-full max-w-5xl h-auto bg-gray-100 dark:bg-[#1C1C1E] rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 md:p-12 text-gray-800 dark:text-white font-sans">
            
            {/* Greeting with responsive font size (Adjusted margin for removed pill) */}
            <div className="text-center mt-6 md:mt-0">
                <p className="text-gray-500 dark:text-gray-400">Hello, User 👋</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                    <span className="text-[#ED6C35] dark:text-[#ED6C35]">I'm Ezra,</span> How can I help you today?
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

// NEW: Chatbot Interface for Tracking Pet Care
const TrackingChatbotInterface = () => {
    
    // Suggestion buttons data for tracking
    const suggestionButtons = [
        'Log a 30-minute walk',
        'How much did my pet eat today?',
        'Record a new symptom: coughing',
        'Remind me about medication at 8pm',
    ];

    return (
        <div className="w-full max-w-5xl h-auto bg-gray-100 dark:bg-[#1C1C1E] rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 md:p-12 text-gray-800 dark:text-white font-sans">
            
            {/* Greeting */}
            <div className="text-center mt-6 md:mt-0">
                <p className="text-gray-500 dark:text-gray-400">Health & Activity</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                    How can I assist you with tracking <span className="text-[#ED6C35] dark:text-[#ED6C35]">your pet’s healthcare?</span>
                </h2>
            </div>
            
            {/* Suggestion Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full">
                {suggestionButtons.map((text, index) => (
                    <button key={index} className="bg-white dark:bg-[#2C2C2E] border border-gray-200 dark:border-gray-600/70 text-gray-700 dark:text-gray-200 text-xs sm:text-sm rounded-xl py-3 px-4 sm:px-5 text-center hover:bg-gray-200/60 dark:hover:bg-gray-700/50 transition-colors">
                        {text}
                    </button>
                ))}
            </div>

            {/* Bottom Input Area */}
            <div className="w-full max-w-2xl mx-auto mt-8 md:mt-12">
                <div className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-2 flex items-center gap-2 border border-gray-200 dark:border-gray-600/70">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Plus size={24} /></button>
                    <input type="text" placeholder="Log an activity or ask a question..." className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400" />
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

// NEW: Chatbot Interface for Vet Integration
const VetIntegrationChatbotInterface = () => {
    
    // Suggestion buttons data for vet integration
    const suggestionButtons = [
        'Find a vet near me',
        'Book an appointment with Professional doctor',
        "Share my pet's latest health report",
        'Start an emergency telehealth call',
    ];

    return (
        <div className="w-full max-w-5xl h-auto bg-gray-100 dark:bg-[#1C1C1E] rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 md:p-12 text-gray-800 dark:text-white font-sans">
            
            {/* Greeting */}
            <div className="text-center mt-6 md:mt-0">
                <p className="text-gray-500 dark:text-gray-400">Professional Care</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                    Ready to connect with a <span className="text-[#ED6C35] dark:text-[#ED6C35]">veterinarian?</span>
                </h2>
            </div>
            
            {/* Suggestion Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full">
                {suggestionButtons.map((text, index) => (
                    <button key={index} className="bg-white dark:bg-[#2C2C2E] border border-gray-200 dark:border-gray-600/70 text-gray-700 dark:text-gray-200 text-xs sm:text-sm rounded-xl py-3 px-4 sm:px-5 text-center hover:bg-gray-200/60 dark:hover:bg-gray-700/50 transition-colors">
                        {text}
                    </button>
                ))}
            </div>

            {/* Bottom Input Area */}
            <div className="w-full max-w-2xl mx-auto mt-8 md:mt-12">
                <div className="bg-white dark:bg-[#2C2C1E] rounded-2xl p-2 flex items-center gap-2 border border-gray-200 dark:border-gray-600/70">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Plus size={24} /></button>
                    <input type="text" placeholder="Find vets, book appointments..." className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400" />
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Mic size={24} /></button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors"><Waves size={24} /></button>
                </div>
                 <p className="text-center text-xs text-gray-500 dark:text-gray-600 mt-3 px-4">
                    For medical emergencies, please contact your local vet clinic directly.
                </p>
            </div>
        </div>
    );
};

// Main Page Component (Updated to use the new chatbot interfaces)
export default function PetCarePage() {
    
    // Define the content structure object with the new chatbot components
    const sectionContent = {
        ezra: { contentComponent: <EzraAIInterface /> },
        track: { contentComponent: <TrackingChatbotInterface /> },
        vet: { contentComponent: <VetIntegrationChatbotInterface /> },
    };

    type SectionKey = keyof typeof sectionContent;
    
    const [activeSection, setActiveSection] = useState<SectionKey>('ezra');

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <style>{`@keyframes fade-in-up{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}.animate-fade-in-up{animation:fade-in-up .5s ease-out forwards;opacity:0}`}</style>
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-wider text-[#ED6C35] dark:text-[#ED6C35]">Empower</p>
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
                                     className={`text-center py-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${activeSection === key ? 'border-b-2 border-[#ED6C35] text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}>
                                    <div className="flex items-center justify-center gap-3">
                                        <Icon className="h-6 w-6 text-[#ED6C35] dark:text-[#ED6C35]" />
                                        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Simplified Content Display Area */}
                <div className="mt-12 max-w-7xl mx-auto">
                    <div key={activeSection} className="relative flex justify-center items-center animate-fade-in-up" style={{animationDuration: '0.7s'}}>
                        {/* Decorative background blur */}
                        <div className="absolute w-full h-full max-w-md bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 dark:from-purple-500/10 dark:to-indigo-500/10 rounded-full blur-3xl transition-opacity duration-500 opacity-60"></div>
                        {/* The selected chatbot component is rendered on top */}
                        <div className="relative w-full flex justify-center">
                            {sectionContent[activeSection].contentComponent}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}