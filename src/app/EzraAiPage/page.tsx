'use client';

import React from 'react';
// Using standard <img> and <a> tags instead of Next.js specific components.
import {
  Bot, BarChart, Bell, BrainCircuit, HeartPulse, ShieldCheck,
  Sparkles, PawPrint, Quote, Stethoscope,
  NotebookPen,
  Brain,
  Cpu,
  TrendingUp
} from 'lucide-react';

// --- Helper Components (Moved to top for better organisation) ---

// Helper component for the iPhone Icon
const IPhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
    <path d="M12 18h.01"></path>
  </svg>
);

// Helper component for Feature Cards.
const FeatureCard = ({ icon, title, description, animationDelay }: { icon: React.ReactNode; title: string; description: string; animationDelay?: string; }) => {
  return (
    <div
      className="group relative bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: animationDelay || '0s' }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-orange-500/10 dark:to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-800">
          {icon}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-slate-800 dark:text-zinc-100">{title}</h3>
        <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
};

// Helper component for Testimonial Cards
const TestimonialCard = ({ quote, name, role, avatarUrl }: { quote: string; name: string; role: string; avatarUrl: string }) => {
  return (
    <div className="bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl p-6 h-full flex flex-col">
      <div className="flex-grow">
        <Quote className="w-8 h-8 text-slate-300 dark:text-zinc-700" />
        <p className="mt-4 text-slate-600 dark:text-zinc-300">&quot;{quote}&quot;</p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-x-4">
        {/* Replaced Next.js Image with standard <img> tag */}
        <img
          className="h-12 w-12 rounded-full bg-slate-200 dark:bg-zinc-700 object-cover"
          src={avatarUrl}
          alt={name}
          width={48}
          height={48}
        />
        <div>
          <p className="font-semibold text-slate-800 dark:text-zinc-100">{name}</p>
          <p className="text-sm text-slate-500 dark:text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const EzraAiPage = () => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-zinc-300 antialiased">
      {/* Hero Section */}
      <header className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50 dark:bg-[#1a1a1a]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-br from-orange-200 via-purple-200 to-transparent dark:from-orange-900/40 dark:via-purple-900/30 rounded-full blur-3xl opacity-50 animate-spin-slow"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              <span>The Future of Pet Intelligence</span>
            </div>
            <h1 className="text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-800 dark:text-white leading-tight">
                Meet <span className="text-[#ED6C35] bg-gradient-to-r from-[#ED6C35] to-[#d95b2a] bg-clip-text text-transparent">
                  Ezra AI
                </span>: The Future of 
                <br />
                <span>Proactive Pet Care</span>
              </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
              Ezra AI is our advanced intelligence engine designed to analyze your pet's data, delivering personalised insights and actionable advice to enhance their health, happiness, and longevity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up [animation-delay:600ms]">
              <a
                href="#download-app"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-orange-500/30"
              >
                <span className="absolute h-0 w-0 rounded-full bg-orange-500 transition-all duration-300 ease-in-out group-hover:h-56 group-hover:w-56"></span>
                <span className="relative">Get The App</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {/* How It Works Section */}
        <section className="text-center">
          <h2 className="text-4xl lg:text-[48px] font-bold tracking-tight bg-clip-text text-gray-900 dark:text-white -mt-16">How Ezra AI Works</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">A seamless process to unlock deep insights into your pet's wellbeing.</p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 relative">
            <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
              <svg width="100%" height="2" className="hidden md:block">
                <line x1="0" y1="1" x2="100%" y2="1" strokeDasharray="5, 5" className="stroke-slate-300 dark:stroke-zinc-700" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-xl z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 text-orange-600 dark:text-orange-400 ring-1 ring-orange-200 dark:ring-orange-400/30">
                <PawPrint className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-800 dark:text-zinc-100">1. Input Pet Data</h3>
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Easily log your pet’s daily activities, diet, behaviour, and health records in the Hooman Group app.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-xl z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 text-orange-600 dark:text-orange-400 ring-1 ring-orange-200 dark:ring-orange-400/30">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-800 dark:text-zinc-100">2. Ezra AI Analyses</h3>
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Our proprietary algorithms process this data, identifying patterns, trends, and potential areas for improvement.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-xl z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 text-orange-600 dark:text-orange-400 ring-1 ring-orange-200 dark:ring-orange-400/30">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-800 dark:text-zinc-100">3. Receive Insights</h3>
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Get clear, personalised, and actionable recommendations right on your dashboard.</p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-[48px] font-bold tracking-tight text-gray-900 dark:text-white">
              Advanced Features for Pet Care
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Ezra AI is your partner in making informed decisions for every aspect of your pet's life.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<HeartPulse className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Personalised Health Insights"
              description="Analyses health logs and activity levels to suggest wellness improvements and highlight trends for your vet."
              animationDelay="200ms"
            />
            <FeatureCard
              icon={<Bell className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Smart Reminders"
              description="Predictive reminders for vaccinations, grooming, and medication based on your pet's specific profile."
              animationDelay="300ms"
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Behavioural Analysis"
              description="Identifies shifts in behaviour patterns that might indicate stress or health issues, helping you intervene early."
              animationDelay="400ms"
            />
            <FeatureCard
              icon={<NotebookPen className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Nutritional Recommendations"
              description="Get AI-driven suggestions for diet adjustments based on your pet’s breed, age, and activity level."
              animationDelay="500ms"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Proactive Risk Assessment"
              description="Leverages breed-specific data to flag potential genetic health risks, empowering you with knowledge."
              animationDelay="600ms"
            />
            <FeatureCard
              icon={<Stethoscope className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Veterinarian Connect"
              description="Generate comprehensive health reports at the tap of a button to share with your veterinarian."
              animationDelay="700ms"
            />
          </div>
        </section>

        {/* The Science Section */}
        <section className="bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-[40px] font-bold tracking-tight bg-clip-text text-gray-900 dark:text-white">The Science Behind Ezra AI</h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-zinc-400">
                Ezra AI is built on state-of-the-art machine learning models trained on a vast, anonymised dataset of veterinary knowledge and pet care best practices.
              </p>
              <ul className="mt-8 space-y-4 text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-x-3">
                  <ShieldCheck className="mt-1 h-5 w-5 flex-none text-orange-600 dark:text-orange-500" />
                  <span><strong>Data Privacy First:</strong> Your personal and pet data is encrypted and anonymised before being used for model training.</span>
                </li>
                <li className="flex items-start gap-x-3">
                  <BrainCircuit className="mt-1 h-5 w-5 flex-none text-orange-600 dark:text-orange-500" />
                  <span><strong>Continuous Learning:</strong> Ezra AI constantly evolves. It gets smarter and more accurate with every piece of data.</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-purple-100 dark:from-orange-900/50 dark:to-purple-900/40 rounded-full blur-2xl"></div> */}
                <BrainCircuit className="relative w-full h-full text-slate-400 dark:text-zinc-500 opacity-60" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-[48px] font-bold tracking-tight text-slate-900 dark:text-white">
              Trusted by Pet Lovers           </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Hear what our early adopters and veterinary advisors are saying about the potential of Ezra AI.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Ezra AI identified a subtle change in my dog's activity that led to an early diagnosis. It’s a game-changer for preventative care."
              name="Sarah L."
              role="Beta Tester & Dog Parent"
              avatarUrl="https://placehold.co/100x100/334155/e2e8f0?text=SL"
            />
            <TestimonialCard
              quote="The ability to generate a concise, data-driven report for vet visits is incredibly powerful. This tool bridges the gap between owner observation and clinical data."
              name="Dr. Mark Evans, DVM"
              role="Veterinary Advisor"
              avatarUrl="https://placehold.co/100x100/334155/e2e8f0?text=ME"
            />
            <TestimonialCard
              quote="As a cat owner, tracking nuanced behaviours is difficult. Ezra AI helps me see patterns I would have otherwise missed. Highly recommended."
              name="James P."
              role="Beta Tester & Cat Parent"
              avatarUrl="https://placehold.co/100x100/334155/e2e8f0?text=JP"
            />
          </div>
        </section>

        {/* Download App Section */}
        <section id="download-app" className="relative bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight lg:text-[40px] text-slate-900 dark:text-white">
                  Get Started with <span className="text-[#ED6C35]">Hooman Group</span> Today
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-md mx-auto">
                  Take the first step towards proactive pet care. Download the app and unlock a new world of insights.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-x-4 rounded-xl bg-transparent border-2 border-orange-600 px-8 py-4 text-lg font-medium text-orange-600 shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <IPhoneIcon />
                    <span>Coming soon on iPhone</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EzraAiPage;

