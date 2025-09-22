import React from 'react';
import { Bot, BarChart, Bell, BrainCircuit, HeartPulse, ShieldCheck, User, Mail, Sparkles, PawPrint, Quote, Plus } from 'lucide-react';

// Main Page Component for Ezra AI
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
            {/* --- Responsive Typography Adjustments --- */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-slate-900 dark:from-orange-400 dark:to-white animate-fade-in-up [animation-delay:200ms]">
              Meet Ezra AI: The Future of Proactive Pet Care.
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
              Ezra AI is our advanced intelligence engine designed to analyze your pet's data, delivering personalized insights and actionable advice to enhance their health, happiness, and longevity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up [animation-delay:600ms]">
              <a
                href="#download-app"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-orange-500/30"
              >
                <span className="absolute h-0 w-0 rounded-full bg-orange-500 transition-all duration-300 ease-in-out group-hover:h-56 group-hover:w-56"></span>
                <span className="relative">Get The App</span>
              </a>
              <a href="#features" className="text-base font-semibold leading-6 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- Adjusted Padding for Better Mobile View --- */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {/* How It Works Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-zinc-100 dark:to-zinc-400">How Ezra AI Works</h2>
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
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Easily log your pet’s daily activities, diet, behavior, and health records in the Hooman app.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-xl z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 text-orange-600 dark:text-orange-400 ring-1 ring-orange-200 dark:ring-orange-400/30">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-800 dark:text-zinc-100">2. Ezra AI Analyzes</h3>
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Our proprietary algorithms process this data, identifying patterns, trends, and potential areas for improvement.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 rounded-xl z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-600/20 text-orange-600 dark:text-orange-400 ring-1 ring-orange-200 dark:ring-orange-400/30">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-800 dark:text-zinc-100">3. Receive Insights</h3>
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Get clear, personalized, and actionable recommendations right on your dashboard.</p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-slate-900 dark:from-orange-400 dark:to-white">
              Advanced Features for Unmatched Care
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Ezra AI is your partner in making informed decisions for every aspect of your pet's life.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<HeartPulse className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Personalized Health Insights"
              description="Analyzes health logs and activity levels to suggest wellness improvements and highlight trends for your vet."
              animationDelay="200ms"
            />
            <FeatureCard
              icon={<Bell className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Smart Reminders"
              description="Predictive reminders for vaccinations, grooming, and medication based on your pet's specific profile."
              animationDelay="300ms"
            />
            <FeatureCard
              icon={<Bot className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Behavioral Analysis"
              description="Identifies shifts in behavior patterns that might indicate stress or health issues, helping you intervene early."
              animationDelay="400ms"
            />
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
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
              icon={<Sparkles className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-zinc-100 dark:to-zinc-400">The Science Behind Ezra AI</h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-zinc-400">
                Ezra AI is built on state-of-the-art machine learning models trained on a vast, anonymized dataset of veterinary knowledge and pet care best practices.
              </p>
              <ul className="mt-8 space-y-4 text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-x-3">
                  <ShieldCheck className="mt-1 h-5 w-5 flex-none text-orange-600 dark:text-orange-500" />
                  <span><strong>Data Privacy First:</strong> Your personal and pet data is encrypted and anonymized before being used for model training.</span>
                </li>
                <li className="flex items-start gap-x-3">
                  <BrainCircuit className="mt-1 h-5 w-5 flex-none text-orange-600 dark:text-orange-500" />
                  <span><strong>Continuous Learning:</strong> Ezra AI constantly evolves. It gets smarter and more accurate with every piece of data.</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-purple-100 dark:from-orange-900/50 dark:to-purple-900/40 rounded-full blur-2xl"></div>
                <BrainCircuit className="relative w-full h-full text-slate-400 dark:text-zinc-500 opacity-60" />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        {/* <section>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-lg font-semibold leading-8 text-slate-800 dark:text-zinc-100">
              Trusted by leading veterinary clinics and pet tech innovators
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none">
              <img className="col-span-1 max-h-10 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" src="https://tailwindui.com/img/logos/158x48/statamic-light.svg" alt="Statamic" width="158" height="48" />
              <img className="col-span-1 max-h-10 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" src="https://tailwindui.com/img/logos/158x48/tuple-light.svg" alt="Tuple" width="158" height="48" />
              <img className="col-span-1 max-h-10 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" src="https://tailwindui.com/img/logos/158x48/savvycal-light.svg" alt="SavvyCal" width="158" height="48" />
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-slate-900 dark:from-orange-400 dark:to-white">
              Trusted by Pet Lovers
            </h2>
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
              quote="As a cat owner, tracking nuanced behaviors is difficult. Ezra AI helps me see patterns I would have otherwise missed. Highly recommended."
              name="James P."
              role="Beta Tester & Cat Parent"
              avatarUrl="https://placehold.co/100x100/334155/e2e8f0?text=JP"
            />
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-zinc-100 dark:to-zinc-400">Frequently Asked Questions</h2>
            <div className="mt-12 space-y-6">
              <FaqItem
                question="Is my pet's data safe and private?"
                answer="Absolutely. We use bank-grade encryption for all data in transit and at rest. All data used for AI model training is fully anonymized, meaning it cannot be linked back to you or your pet."
              />
              <FaqItem
                question="What kind of pets does Ezra AI support?"
                answer="Currently, Ezra AI is optimized for dogs and cats. We are actively working on expanding our models to include other household pets in the near future. Stay tuned!"
              />
              <FaqItem
                question="How is this different from a regular activity tracker?"
                answer="While activity tracking is one data point we use, Ezra AI goes much further. It correlates activity with diet, behavior logs, health records, and breed-specific data to provide a holistic, proactive, and truly personalized care plan, rather than just showing you raw numbers."
              />
              <FaqItem
                question="Can Ezra AI diagnose my pet?"
                answer="No. Ezra AI is a powerful tool for providing insights and highlighting potential issues, but it is not a substitute for professional veterinary advice. It is designed to help you and your veterinarian make more informed decisions together."
              />
            </div>
          </div>
        </section> */}

        {/* Download App Section */}
        <section id="download-app" className="relative bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-slate-900 dark:from-orange-400 dark:to-white">
                  Get Started with Hooman Today
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-md mx-auto lg:mx-0">
                  Take the first step towards proactive pet care. Download the app and unlock a new world of insights.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#" className="inline-flex items-center justify-center gap-x-3 rounded-lg bg-slate-900 dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-slate-900 transition hover:opacity-90">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.33 11.0371C19.33 9.4237 20.3771 8.36857 21.6571 7.62286C21.0543 6.64 20.1343 5.92571 19.0343 5.56857C17.6571 4.96571 16.1 5.37429 15.3171 6.16286C14.5429 6.95143 13.5629 7.93143 12.5171 7.93143C11.4714 7.93143 10.3714 6.94286 9.49429 6.94286C7.94286 6.94286 6.25143 7.93143 5.24 9.25429C3.12 11.9657 4.54571 16.2714 6.36286 18.5714C7.30286 19.7257 8.35714 21.04 9.68 21C10.9514 20.9571 11.3771 20.2429 13.28 20.2429C15.1829 20.2429 15.5657 21 16.88 21C18.2029 20.9571 19.1229 19.7257 20.0629 18.5714C20.8029 17.6514 21.3286 16.5829 21.6 15.42C20.2229 14.7143 19.33 13.56 19.33 11.0371ZM13.3714 4.13714C14.2486 3.08286 15.52 2.37714 16.62 2C16.7057 3.20571 16.1 4.39429 15.2229 5.32C14.3457 6.24571 13.0714 6.95143 11.9714 7.22C11.8857 6.01429 12.4914 4.96571 13.3714 4.13714Z" />
                    </svg>
                    <div>
                      <p className="text-xs">Download on the</p>
                      <p className="text-lg font-semibold">App Store</p>
                    </div>
                  </a>
                  {/* Uncomment this when the Google Play link is available
                  <a href="#" className="inline-flex items-center justify-center gap-x-3 rounded-lg bg-slate-900 dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-slate-900 transition hover:opacity-90">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.848 11.399L3.849 0.904C2.943 0.403 2.115 0.81 1.954 1.761L1.952 1.77L5.78 12L1.952 22.23C1.802 23.144 2.942 23.593 3.849 23.097L22.848 12.6C23.65 12.164 23.65 11.836 22.848 11.399Z" />
                      <path d="M9.608 15.35L5.78 12L9.608 8.65L17.585 12L9.608 15.35Z" fill="#334155" className="dark:fill-white" />
                    </svg>
                    <div>
                      <p className="text-xs">GET IT ON</p>
                      <p className="text-lg font-semibold">Google Play</p>
                    </div>
                  </a>
                  */}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-72 h-[36rem] bg-slate-900 dark:bg-zinc-800 border-8 border-slate-900 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 dark:bg-zinc-800 rounded-full"></div>
                  <img src="/Ezra.png" alt="Hooman App on Phone" className="w-full h-full object-cover rounded-[2rem]" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// Helper component for Feature Cards
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
        <p className="mt-4 text-slate-600 dark:text-zinc-300">"{quote}"</p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-x-4">
        <img className="h-12 w-12 rounded-full bg-slate-200 dark:bg-zinc-700" src={avatarUrl} alt={name} />
        <div>
          <p className="font-semibold text-slate-800 dark:text-zinc-100">{name}</p>
          <p className="text-sm text-slate-500 dark:text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Helper component for FAQ Items
const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="p-6 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-lg">
    <dt className="text-lg font-semibold text-slate-800 dark:text-zinc-100">{question}</dt>
    <dd className="mt-2 text-base text-slate-600 dark:text-zinc-400">{answer}</dd>
  </div>
);

export default EzraAiPage;