"use client";

import { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Stethoscope, Activity, Sparkles, User, ArrowUp, X } from 'lucide-react';
import React from 'react';

// Define the shape of a chat message for TypeScript
interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

// Props for the reusable Chatbot component
interface ChatbotInterfaceProps {
    title: string;
    welcomeSubMessage: string;
    welcomeMessage: React.ReactNode;
    suggestionButtons: string[];
    placeholder: string;
    disclaimer: string;
    systemPrompt: string;
}

// --- AI Icon Component ---
const AiSparkleIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M12 2.75L13.8125 10.1875L21.25 12L13.8125 13.8125L12 21.25L10.1875 13.8125L2.75 12L10.1875 10.1875L12 2.75Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M18 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 17.5C7.32843 17.5 8 16.8284 8 16C8 15.1716 7.32843 14.5 6.5 14.5C5.67157 14.5 5 15.1716 5 16C5 16.8284 5.67157 17.5 6.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- Reusable Chatbot Component ---
const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ title, welcomeSubMessage, welcomeMessage, suggestionButtons, placeholder, disclaimer, systemPrompt }) => {
    const [inputValue, setInputValue] = useState('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isChatLimitReached, setIsChatLimitReached] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    
    const MESSAGE_LIMIT = 5;

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, isLoading]);

    const handleSendMessage = async (message: string) => {
        const userMessage = message.trim();
        if (!userMessage || isLoading || isChatLimitReached) return;

        const newUserMessage: ChatMessage = { role: 'user', content: userMessage };
        const updatedChatHistory = [...chatHistory, newUserMessage];
        setChatHistory(updatedChatHistory);
        setInputValue('');
        setIsLoading(true);

        const userMessagesCount = updatedChatHistory.filter(m => m.role === 'user').length;

        if (userMessagesCount >= MESSAGE_LIMIT) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const limitReachedMessage: ChatMessage = { role: 'assistant', content: "You've reached your free message limit for this session. Please reset the chat to start a new conversation." };
            setChatHistory(prev => [...prev, limitReachedMessage]);
            setIsChatLimitReached(true);
            setIsLoading(false);
            return;
        }

        let aiResponse: string;

        try {
            // SECURE CHANGE: Call your own server-side API route
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: updatedChatHistory,
                    systemPrompt: systemPrompt
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "An unknown error occurred.");
            }

            const data = await response.json();
            aiResponse = data.response;

        } catch (error) {
            console.error("Error calling chat API:", error);
            aiResponse = "Sorry, something went wrong. Please try again later.";
        }
        
        const assistantMessage: ChatMessage = { role: 'assistant', content: aiResponse };
        setChatHistory(prev => [...prev, assistantMessage]);
        setIsLoading(false);
    };
    
    const resetChat = () => {
        setChatHistory([]);
        setIsChatLimitReached(false);
    };

    return (
        <div className="w-full max-w-5xl h-auto bg-gray-100 dark:bg-[#1C1C1E] rounded-2xl shadow-2xl flex flex-col p-6 md:p-8 text-gray-800 dark:text-white transition-all duration-300">
            {chatHistory.length === 0 ? (
                // Initial View
                <div className="flex flex-col items-center justify-center text-center animate-fade-in-up">
                    <p className="text-gray-500 dark:text-gray-400">{welcomeSubMessage}</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                        {welcomeMessage}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 md:mt-12 w-full">
                        {suggestionButtons.map((text, index) => (
                            <button key={index} onClick={() => handleSendMessage(text)} className="bg-white dark:bg-[#2C2C2E] border border-gray-200 dark:border-gray-600/70 text-gray-700 dark:text-gray-200 text-xs sm:text-sm rounded-xl py-3 px-4 sm:px-5 text-center hover:bg-gray-200/60 dark:hover:bg-gray-700/50 transition-colors">
                                {text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                // Chat View
                <div className="flex flex-col h-[500px] w-full">
                    <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-[#ED6C35]">{title}</h3>
                        <button onClick={resetChat} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                    <div ref={chatContainerRef} className="flex-1 overflow-y-auto pr-2 space-y-6">
                        {chatHistory.map((message, index) => (
                            <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {message.role === 'assistant' && (
                                    <div className="w-8 h-8 rounded-full bg-[#ED6C35] flex items-center justify-center flex-shrink-0">
                                        <AiSparkleIcon size={20} className="text-white" />
                                    </div>
                                )}
                                <div className={`p-3 rounded-2xl ${
                                    message.role === 'user'
                                        ? 'bg-[#ED6C35] text-white rounded-br-none max-w-md'
                                        : 'bg-white dark:bg-[#2C2C2E] text-gray-800 dark:text-gray-200 rounded-bl-none max-w-2xl'
                                }`}>
                                    <p className="text-base leading-relaxed">{message.content}</p>
                                </div>
                                {message.role === 'user' && (
                                        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                                            <User size={20} className="text-gray-800 dark:text-gray-200" />
                                        </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-start gap-3 justify-start">
                                <div className="w-8 h-8 rounded-full bg-[#ED6C35] flex items-center justify-center flex-shrink-0">
                                    <AiSparkleIcon size={20} className="text-white" />
                                </div>
                                <div className="max-w-md p-3 rounded-2xl bg-white dark:bg-[#2C2C2E] text-gray-800 dark:text-gray-200 rounded-bl-none">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Input Bar */}
            <div className="w-full max-w-2xl mx-auto mt-8">
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-2 flex items-center gap-2 border border-gray-200 dark:border-gray-600/70">
                    <button type="button" className="text-[#ED6C35] p-2 rounded-lg transition-colors">
                        <Sparkles size={24} />
                    </button>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={isChatLimitReached ? "Please reset to start a new chat." : placeholder}
                        className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400" 
                        disabled={isChatLimitReached}
                    />
                    <button type="submit" disabled={isLoading || !inputValue.trim() || isChatLimitReached} className="bg-[#ED6C35] text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
                        <ArrowUp size={24} />
                    </button>
                </form>
                {isChatLimitReached && (
                        <p className="text-center text-sm text-amber-500 dark:text-amber-400 mt-3 px-4">
                            Message limit reached.
                        </p>
                )}
                <p className="text-center text-xs text-gray-500 dark:text-gray-600 mt-3 px-4">
                    {disclaimer}
                </p>
            </div>
        </div>
    );
};

// --- Child Components for different sections ---
// NOTE: These components have been updated with stricter system prompts.

const EzraAIInterface = () => (
    <ChatbotInterface
        title="Ezra AI"
        welcomeSubMessage="Hello, User 👋"
        welcomeMessage={<><span className="text-[#ED6C35]">I'm Ezra,</span> How can I help you today?</>}
        suggestionButtons={[
            'Log a 30-minute walk for Luna',
            'Is it safe for dogs to eat apples?',
            'Remind me to give flea medicine on the 1st of the month',
            "Analyze my pet's activity from last week"
        ]}
        placeholder="Ask Ezra about your pet..."
        disclaimer="This is an Ezra demo. Please double check important advice."
        systemPrompt="You are Ezra, a highly specialized AI pet care assistant from Hooman Group Ltd. Your single purpose is to assist with pet-related questions. You must strictly adhere to this role.

**Core Directives:**
1. **Strictly Enforce Topic:** You MUST refuse to answer any question that is not directly related to pet care, pet health, pet behavior, or pet products. If a user asks an off-topic question (e.g., about math, history, or general knowledge), you must politely decline by saying: 'I am a specialized pet care assistant and can only answer questions about pets.' **Do not answer the off-topic question.**
2. **Be Direct & Concise:** Get straight to the point. Avoid conversational filler. Keep answers as short as possible while being helpful.
3. **Identity:** You are Ezra from Hooman Group Ltd."
    />
);

const TrackingChatbotInterface = () => (
    <ChatbotInterface
        title="Health & Activity Tracker"
        welcomeSubMessage="Health & Activity"
        welcomeMessage={<>How can I assist you with tracking <span className="text-[#ED6C35]">your pet’s healthcare?</span></>}
        suggestionButtons={[
            'Log a 30-minute walk',
            'How much did my pet eat today?',
            'Record a new symptom: coughing',
            'Remind me about medication at 8pm',
        ]}
        placeholder="Log an activity or ask a question..."
        disclaimer="Ezra may not always be accurate. Please double-check important advice."
        systemPrompt="You are Ezra, the AI pet care assistant by Hooman Group Ltd, focusing on tracking health and activities.

**Core Directives:**
1. **Strictly Enforce Topic:** Your function is to log activities, record symptoms, and answer questions about pet health tracking. You MUST refuse any request that falls outside this scope (e.g., asking about general world facts or non-pet topics). Politely decline with: 'I can only help with tracking your pet's health and activities. Please ask a relevant question.'
2. **Be Practical and Empathetic:** Give clear advice on routines, feeding, and activity.
3. **Concise and Engaging:** Keep answers brief and useful.
4. **Identity:** Always acknowledge that Ezra is part of Hooman Group Ltd."
    />
);

const VetIntegrationChatbotInterface = () => (
    <ChatbotInterface
        title="Vet Integration"
        welcomeSubMessage="Professional Care"
        welcomeMessage={<>Ready to connect with a <span className="text-[#ED6C35]">veterinarian?</span></>}
        suggestionButtons={[
            'Find a vet near me',
            'Book an appointment with a professional doctor',
            "Share my pet's latest health report",
            'Start an emergency telehealth call',
        ]}
        placeholder="Find vets, book appointments..."
        disclaimer="This is an Ezra Vet demo. Not for medical advices. If you’re worried, contact your vet."
        systemPrompt="You are Ezra, the AI veterinary guidance assistant from Hooman Group Ltd. Your purpose is to help users connect with veterinary services.

**Core Directives:**
1. **Strictly Enforce Topic:** You can only help with finding vets, booking appointments, sharing health reports, and providing guidance on when to see a vet. You MUST refuse any question not related to these tasks (e.g., medical diagnoses, general knowledge). Decline with: 'My role is to help you connect with veterinary professionals. I cannot answer questions outside of that scope.'
2. **No Medical Advice:** You are NOT a replacement for a licensed vet. You must always encourage professional consultation for medical issues.
3. **Reassuring and Smart:** Your voice should be calm, informative, and practical.
4. **Identity:** Always remind users you are Ezra from Hooman Group Ltd."
    />
);


// --- Main Page Component ---
export default function PetCarePage() {

    const sectionContent = {
        ezra: { contentComponent: <EzraAIInterface /> },
        track: { contentComponent: <TrackingChatbotInterface /> },
        vet: { contentComponent: <VetIntegrationChatbotInterface /> },
    };

    type SectionKey = keyof typeof sectionContent;

    const [activeSection, setActiveSection] = useState<SectionKey>('ezra');

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <style>{`
                @keyframes fade-in-up{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}
                .animate-fade-in-up{animation:fade-in-up .5s ease-out forwards;opacity:0}
                /* Custom scrollbar for webkit browsers */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 6px;
                }
                .overflow-y-auto::-webkit-scrollbar-track {
                    background: transparent;
                }
                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background-color: #4a4a4f;
                    border-radius: 20px;
                    border: 3px solid transparent;
                }
            `}</style>
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-wider text-[#ED6C35] dark:text-[#ED6C35]">Empower</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">Revolutionise Your Pet Care</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-base leading-7 sm:text-lg sm:leading-8 text-gray-600 dark:text-gray-400">
                        Discover how Hooman Group Pets transforms pet care with AI-driven insights. Say goodbye to guesswork and hello to tailored routines for your furry friends.
                    </p>
                </div>
                <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8 border-b border-gray-200 dark:border-gray-700">
                        {(Object.keys(sectionContent) as SectionKey[]).map((key) => {
                            const Icon = { ezra: ShieldCheck, track: Activity, vet: Stethoscope }[key];
                            const title = { ezra: "Meet Ezra AI", track: "Track Their Care", vet: "Vet Integrations" }[key];
                            return (
                                <div key={key} onClick={() => setActiveSection(key as SectionKey)}
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
                <div className="mt-12 max-w-7xl mx-auto">
                    <div key={activeSection} className="relative flex justify-center items-center animate-fade-in-up" style={{ animationDuration: '0.7s' }}>
                        <div className="absolute w-full h-full max-w-md bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 dark:from-purple-500/10 dark:to-indigo-500/10 rounded-full blur-3xl transition-opacity duration-500 opacity-60"></div>
                        <div className="relative w-full flex justify-center">
                            {sectionContent[activeSection].contentComponent}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
