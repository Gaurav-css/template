// app/page.tsx

"use client"; // Required for onClick handlers like handleScrollToJourney

import { ArrowRight, ArrowDown, ShieldCheck, Clock, Heart, Star, Lock, FlaskConical, BrainCircuit, Globe, Users, Stethoscope, Smartphone, HeartHandshake } from 'lucide-react';

// I've standardised the dark mode background to bg-neutral-900 and borders to border-neutral-800 for consistency.
const darkBgClass = "dark:bg-neutral-900";
const darkBorderClass = "dark:border-neutral-800";

// Component for the "Our Journey" section
const OurJourney = () => {
  return (
    <section id="our-journey" className="text-gray-800 dark:text-gray-200 py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Text content */}
          <div className="text-left">
            <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <blockquote className="border-l-4 border-orange-500 dark:border-orange-400 pl-6 italic text-gray-600 dark:text-gray-400 text-lg sm:text-xl my-8">
              "Every pet has its own unique personality - and we believe each one deserves <span className="text-orange-500 dark:text-orange-400 font-semibold">personalised care</span> that adapts to their specific needs and behaviors."
            </blockquote>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our team of veterinarians, AI specialists, and pet parents come together with a simple mission: to bridge the gap between professional veterinary care and everyday pet parenting through <span className="font-semibold text-gray-800 dark:text-gray-200">intelligent technology.</span>
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We've spent years researching pet behavior patterns, health indicators, and the challenges that modern pet families face. The result? <span className="font-semibold text-gray-800 dark:text-gray-200">Ezra AI</span> – your personalised pet care companion.
            </p>
          </div>

          {/* Right column: Code terminal and stats */}
          <div className={`bg-gray-50 ${darkBgClass} rounded-2xl p-6 shadow-lg border border-gray-200 ${darkBorderClass}`}>
            <div className="bg-black rounded-lg p-4 font-mono text-sm text-left">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="flex-grow text-center text-gray-500 text-xs">ezra_ai.hooman.dev</span>
              </div>
              <div>
                <p><span className="text-green-400">&gt;</span> Initializing Ezra AI...</p>
                <p><span className="text-green-400">&gt;</span> <span className="text-orange-400">const</span> getHealth = <span className="text-yellow-300">analyzeBehavior</span>(data)</p>
                <p><span className="text-green-400">&gt;</span> AI Model: 99.9% accuracy <span className="text-green-400">✓</span></p>
              </div>
            </div>
            <div className={`grid grid-cols-3 gap-4 text-center mt-6 pt-6 border-t border-gray-200 ${darkBorderClass}`}>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">50+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pet Breeds Studied</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">24/7</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">AI Support</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">100%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Personalised</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurCommitment = () => {
  const commitments = [
    { icon: <ShieldCheck size={24} className="text-green-500" />, subtitle: '100% VET APPROVED', title: 'Trusted Safety', description: 'Every recommendation backed by veterinary science and real-world testing with enterprise-grade security.', progressColor: 'bg-green-500', iconBg: 'bg-green-500/10' },
    { icon: <Clock size={24} className="text-orange-500" />, subtitle: '24/7 AVAILABLE', title: '24/7 Support', description: 'Round-the-clock AI assistance with real-time monitoring whenever your pet needs care guidance.', progressColor: 'bg-orange-500', iconBg: 'bg-orange-500/10' },
    { icon: <Heart size={24} className="text-red-500" />, subtitle: '1-TO-1 PERSONALISED', title: 'Personalised Care', description: "Advanced ML algorithms that adapt to your pet's unique personality, health history, and behavioral patterns.", progressColor: 'bg-red-500', iconBg: 'bg-red-500/10' },
    { icon: <Star size={24} className="text-purple-500" />, subtitle: '99.9% ACCURACY', title: 'Excellence Promise', description: 'Continuously improving through advanced AI, machine learning, and comprehensive user feedback loops.', progressColor: 'bg-purple-500', iconBg: 'bg-purple-500/10' },
  ];

  return (
    <section className="text-gray-800 dark:text-gray-200 py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
            Our Promise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-orange-500 dark:text-orange-400">Commitment</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
            We're dedicated to providing the most reliable, intelligent, and compassionate pet care support powered by cutting-edge technology. Every feature is designed with your pet's wellbeing at heart.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item) => (
            <div key={item.title} className={`bg-gray-50 ${darkBgClass} rounded-2xl p-6 text-left overflow-hidden relative border border-gray-200 ${darkBorderClass} transform transition-transform duration-300 hover:-translate-y-2`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              <div className={`absolute bottom-0 left-0 h-1 w-full ${item.progressColor}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PetFirstDecision = () => {
    const features = [
        { name: 'AI Health Monitor', status: 'Active', color: 'text-green-400' },
        { name: 'Vet Integration', status: 'Connected', color: 'text-orange-400' },
        { name: 'Data Security', status: 'Encrypted', color: 'text-orange-400' },
    ];

    return (
        <section className="text-gray-800 dark:text-gray-200 py-16 sm:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Every decision we make puts your pet's <span className="text-orange-500 dark:text-orange-400">happiness and health first</span>
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            From our AI algorithms to our user interface design, everything is built with deep empathy for both pets and their human families. We understand that pets aren't just animals – they're <span className="font-semibold text-orange-500 dark:text-orange-400">family members</span> who deserve the best care possible.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-100/20 dark:bg-orange-900/30 rounded-full border border-orange-400/30">
                                <Lock size={16} /> Privacy Focused
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-100/20 dark:bg-orange-900/30 rounded-full border border-orange-400/30">
                                <FlaskConical size={16} /> Science-Backed
                            </span>
                             <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-100/20 dark:bg-orange-900/30 rounded-full border border-orange-400/30">
                                <BrainCircuit size={16} /> Always Learning
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`relative bg-gray-50 ${darkBgClass} rounded-2xl p-8 shadow-lg border border-gray-200 ${darkBorderClass} z-10`}>
                            {features.map((feature, index) => (
                                <div key={feature.name} className={`flex justify-between items-center ${index < features.length - 1 ? `pb-4 mb-4 border-b border-gray-200 ${darkBorderClass}` : ''}`}>
                                    <span className="text-gray-800 dark:text-gray-200">{feature.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')}`}></span>
                                        <span className={`${feature.color} text-sm font-medium`}>{feature.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OurPrinciples = () => {
    const principles = [
        { icon: <BrainCircuit size={28} className="text-orange-500" />, title: 'Intelligent Insights', description: 'Leverage advanced AI and machine learning to understand your pet\'s unique patterns, behaviors, and health indicators for data-driven care decisions.', progressColor: 'bg-orange-500', iconBg: 'bg-orange-500/10' },
        { icon: <Heart size={28} className="text-red-500" />, title: 'Supportive Community', description: 'Connect with fellow pet parents and verified experts in a caring, moderated environment built on shared love for our furry family members.', progressColor: 'bg-red-500', iconBg: 'bg-red-500/10' },
        { icon: <Users size={28} className="text-green-500" />, title: 'Comprehensive Care', description: 'From daily wellness tracking to emergency situations, we provide complete 360° support for every aspect of your pet\'s physical and emotional wellbeing.', progressColor: 'bg-green-500', iconBg: 'bg-green-500/10' },
        { icon: <Stethoscope size={28} className="text-purple-500" />, title: 'Trusted Veterinary Access', description: 'Direct integration with licensed veterinarians and pet care professionals ensures expert guidance is always within reach when you need it most.', progressColor: 'bg-purple-500', iconBg: 'bg-purple-500/10' },
    ];

    return (
        <section className="text-gray-800 dark:text-gray-200 py-16 sm:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
                        Core Values
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        Our <span className="text-orange-500 dark:text-orange-400">Principles</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
                        At the heart of everything we do lies our commitment to smart, compassionate, and comprehensive pet care powered by cutting-edge technology. These principles guide every feature we build.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {principles.map((item) => (
                        <div key={item.title} className={`bg-gray-50 ${darkBgClass} rounded-2xl p-8 text-left overflow-hidden relative border border-gray-200 ${darkBorderClass} transform transition-transform duration-300 hover:-translate-y-2 flex flex-col items-start`}>
                             <div className={`p-4 rounded-xl mb-6 ${item.iconBg}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{item.description}</p>
                            <div className={`mt-6 h-1 w-full rounded-full ${item.progressColor}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OurVision = () => {
    const buildingList = [
        'Real-time health monitoring and smart alerts',
        'Personalised nutrition and exercise plans',
        'Emergency care guidance and vet connections',
        'AI-powered behavioral insights and training tips',
        'Community support and expert consultations',
        'Integration with wearables and smart devices',
    ];

    const roadmap = [
        { icon: <Smartphone size={24} className="text-orange-500" />, iconBg: 'bg-orange-500/10', title: 'App Launch', date: 'Q2 2025', description: 'Release Hooman Group\'s comprehensive pet care platform with Ezra AI and advanced health monitoring.', status: 'Upcoming', statusColor: 'bg-orange-500/20 text-orange-400' },
        { icon: <HeartHandshake size={24} className="text-orange-500" />, iconBg: 'bg-orange-500/10', title: 'Pet Partnership', date: 'Q3 2025', description: 'Building the world\'s largest verified network of veterinarians and pet care professionals.', status: 'In Progress', statusColor: 'bg-orange-500/20 text-orange-400' },
        { icon: <Globe size={24} className="text-green-500" />, iconBg: 'bg-green-500/10', title: 'Global Expansion', date: 'Q4 2025', description: 'Bringing smart pet care solutions to families worldwide with multi-language support.', status: 'Planned', statusColor: 'bg-gray-500/20 text-gray-400' },
        { icon: <Users size={24} className="text-purple-500" />, iconBg: 'bg-purple-500/10', title: 'Community Growth', date: '2026', description: 'Creating a thriving ecosystem of pet parents, experts, and AI-powered care solutions.', status: 'Planned', statusColor: 'bg-gray-500/20 text-gray-400' }
    ];

    return (
        <section className="text-gray-800 dark:text-gray-200 py-16 sm:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="text-left">
                         <span className="inline-block px-4 py-1.5 bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
                            Future Vision
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Our Vision
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            We're building a future where every pet receives <span className="font-semibold text-orange-500 dark:text-orange-400">personalised, intelligent care</span> that adapts to their unique needs. Our vision extends beyond just an app – it's about creating a comprehensive <span className="font-semibold text-green-500 dark:text-green-400">ecosystem of care.</span>
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What we're building:</h3>
                        <ul className="space-y-4 mb-8">
                            {buildingList.map((item, index) => (
                                <li key={index} className={`flex items-center p-3 bg-gray-50 ${darkBgClass} rounded-lg border border-gray-200 ${darkBorderClass}`}>
                                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-orange-500/20 border-2 border-orange-500 rounded-full mr-4">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                                </li>
                            ))}
                        </ul>
                         <button className="flex items-center justify-center gap-2 w-auto px-6 py-3 text-base font-semibold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform transition-transform duration-300 hover:scale-105">
                            Be Part of the Future
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="text-left">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Innovation Roadmap</h3>
                        <div className={`relative border-l-2 border-gray-200 ${darkBorderClass} ml-5`}>
                            {roadmap.map((item, index) => (
                                <div key={index} className="mb-10 ml-12">
                                    <span className={`absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full ${item.iconBg}`}>
                                        {item.icon}
                                    </span>
                                    <div className={`p-4 bg-gray-50 ${darkBgClass} rounded-lg border border-gray-200 ${darkBorderClass}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h4>
                                            <time className="text-sm font-normal text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">{item.date}</time>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.statusColor}`}>{item.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`bg-gray-50 ${darkBgClass} rounded-2xl p-6 shadow-lg border border-gray-200 ${darkBorderClass} mt-8`}>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Early Access Impact</h4>
                            <div className="flex justify-around items-center text-center">
                                <div>
                                    <p className="text-3xl font-bold text-orange-500 dark:text-orange-400">10,000+</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Beta Testers</p>
                                </div>
                                <div className={`border-l border-gray-200 ${darkBorderClass} h-12`}></div>
                                <div>
                                    <p className="text-3xl font-bold text-orange-500 dark:text-orange-400">98%</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className={`bg-gray-100 ${darkBgClass} border border-gray-200 ${darkBorderClass} rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden`}>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Ready to experience <span className="text-orange-500 dark:text-orange-400">smarter pet care?</span>
                        </h2>
                        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
                            Join thousands of pet parents who trust Hooman Group to keep their furry family members happy, healthy, and thriving with intelligent care solutions powered by AI.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform transition-transform duration-300 hover:scale-105">
                                Start Your Journey
                                <ArrowRight size={20} />
                            </button>
                            <button className={`w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-800 dark:text-gray-200 bg-transparent border border-gray-300 ${darkBorderClass} rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transform transition-transform duration-300 hover:scale-105`}>
                                Explore Features
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function HomePage() {
  const handleScrollToJourney = () => {
    const journeySection = document.getElementById('our-journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500 overflow-x-hidden">
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10 text-center">
        <div className="z-10 flex flex-col items-center">
          <div className="mb-6">
            <span className="bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
              ✨ The Future of Pet Care
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            The <span className="text-orange-500 dark:text-orange-400">Hooman Group</span> <span className="text-orange-500 dark:text-orange-400">Story</span>
          </h1>
          <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Revolutionizing Pet Care Through AI
          </h2>
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            We believe pets are family. With <span className="font-medium text-gray-800 dark:text-gray-200">cutting-edge AI technology</span>, we're making pet care smarter, simpler, and more <span className="font-medium text-orange-500 dark:text-orange-400">connected than ever before.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform transition-transform duration-300 hover:scale-105">
              Join Our Mission
              <ArrowRight size={20} />
            </button>
            <button onClick={handleScrollToJourney} className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-neutral-800/50 border border-gray-300 ${darkBorderClass} rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transform transition-transform duration-300 hover:scale-105`}>
              Our Journey
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </main>
      <OurJourney />
      <OurCommitment />
      <PetFirstDecision />
      <OurPrinciples />
      <OurVision />
      <CTASection />
    </div>
  );
};