// app/page.tsx

"use client"; // Required for onClick handlers and Framer Motion

import { motion, useInView, animate, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, ShieldCheck, Clock, Heart, Star, Lock, FlaskConical, BrainCircuit, Globe, Users, Stethoscope, Smartphone, HeartHandshake, Sparkle } from 'lucide-react';

// I've standardised the dark mode background to bg-neutral-900 and borders to border-neutral-800 for consistency.
const darkBgClass = "dark:bg-neutral-900";
const darkBorderClass = "dark:border-neutral-800";

// --- Animation Variants for Framer Motion ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- Animated Number Component for Stats ---
const AnimatedStat = ({ value }: { value: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
      const suffix = value.replace(/[0-9,]/g, '');

      if (!isNaN(numericValue)) {
        const controls = animate(0, numericValue, {
          duration: 2,
          ease: "easeOut",
          onUpdate(latest) {
            node.textContent = Math.round(latest).toLocaleString() + suffix;
          }
        });
        return () => controls.stop();
      } else {
        node.textContent = value; // For non-numeric values like "24/7"
      }
    }
  }, [isInView, value]);

  return <p ref={ref} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white" />;
};


// Component for the "Our Journey" section
const OurJourney = () => {
  return (
    <motion.section 
      id="our-journey" 
      className="text-gray-800 dark:text-gray-200 py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Text content */}
          <motion.div className="text-left" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Our Journey
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </motion.h2>
            <motion.blockquote variants={fadeInUp} className="border-l-4 border-orange-500 dark:border-orange-400 pl-6 italic text-gray-600 dark:text-gray-400 text-lg sm:text-xl my-8">
              "Every pet has its own unique personality - and we believe each one deserves <span className="text-orange-500 dark:text-orange-400 font-semibold">personalised care</span> that adapts to their specific needs and behaviours."
            </motion.blockquote>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our team of veterinarians, AI specialists, and pet parents come together with a simple mission: to bridge the gap between professional veterinary care and everyday pet parenting through <span className="font-semibold text-gray-800 dark:text-gray-200">intelligent technology.</span>
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We've spent years researching pet behaviour patterns, health indicators, and the challenges that modern pet families face. The result? <span className="font-semibold text-gray-800 dark:text-gray-200">Ezra AI</span> – your personalised pet care companion.
            </motion.p>
          </motion.div>

          {/* Right column: Code terminal and stats */}
          <motion.div variants={fadeInUp} className={`bg-gray-50 ${darkBgClass} rounded-2xl p-6 shadow-lg border border-gray-200 ${darkBorderClass}`}>
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
                <p><span className="text-green-400">&gt;</span> <span className="text-orange-400">const</span> getHealth = <span className="text-yellow-300">analyzeBehaviour</span>(data)</p>
                <p><span className="text-green-400">&gt;</span> AI Model: 99.9% accuracy <span className="text-green-400">✓</span></p>
              </div>
            </div>
            <div className={`grid grid-cols-3 gap-4 text-center mt-6 pt-6 border-t border-gray-200 ${darkBorderClass}`}>
              <div>
                <AnimatedStat value="50+" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Pet Breeds Studied</p>
              </div>
              <div>
                <AnimatedStat value="24/7" />
                <p className="text-sm text-gray-500 dark:text-gray-400">AI Support</p>
              </div>
              <div>
                <AnimatedStat value="100%" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Personalised</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const OurCommitment = () => {
  const commitments = [
    { icon: <ShieldCheck size={24} className="text-green-500" />, subtitle: '100% VET APPROVED', title: 'Trusted Safety', description: 'Every recommendation backed by veterinary science and real-world testing with enterprise-grade security.', progressColor: 'bg-green-500', iconBg: 'bg-green-500/10' },
    { icon: <Clock size={24} className="text-orange-500" />, subtitle: '24/7 AVAILABLE', title: '24/7 Support', description: 'Round-the-clock AI assistance with real-time monitoring whenever your pet needs care guidance.', progressColor: 'bg-orange-500', iconBg: 'bg-orange-500/10' },
    { icon: <Heart size={24} className="text-red-500" />, subtitle: '1-TO-1 PERSONALISED', title: 'Personalised Care', description: "Advanced ML algorithms that adapt to your pet's unique personality, health history, and behavioural patterns.", progressColor: 'bg-red-500', iconBg: 'bg-red-500/10' },
    { icon: <Star size={24} className="text-purple-500" />, subtitle: '99.9% ACCURACY', title: 'Excellence Promise', description: 'Continuously improving through advanced AI, machine learning, and comprehensive user feedback loops.', progressColor: 'bg-purple-500', iconBg: 'bg-purple-500/10' },
  ];

  return (
    <motion.section 
        className="text-gray-800 dark:text-gray-200 py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div className="text-center mb-12" variants={staggerContainer}>
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
            Our Promise
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-orange-500 dark:text-orange-400">Commitment</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
            We're dedicated to providing the most reliable, intelligent, and compassionate pet care support powered by cutting-edge technology. Every feature is designed with your pet's wellbeing at heart.
          </motion.p>
        </motion.div>
        <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {commitments.map((item) => (
            <motion.div 
              key={item.title} 
              className={`bg-gray-50 ${darkBgClass} rounded-2xl p-6 text-left overflow-hidden relative border border-gray-200 ${darkBorderClass} transition-transform duration-300`}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              <div className={`absolute bottom-0 left-0 h-1 w-full ${item.progressColor}`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const PetFirstDecision = () => {
    const features = [
        { name: 'AI Health Monitor', status: 'Active', color: 'text-green-400' },
        { name: 'Vet Integration', status: 'Connected', color: 'text-orange-400' },
        { name: 'Data Security', status: 'Encrypted', color: 'text-orange-400' },
    ];

    return (
        <motion.section 
          className="text-gray-800 dark:text-gray-200 py-16 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div className="text-left" variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Every decision we make puts your pet's <span className="text-orange-500 dark:text-orange-400">happiness and health first</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            From our AI algorithms to our user interface design, everything is built with deep empathy for both pets and their human families. We understand that pets aren't just animals – they're <span className="font-semibold text-orange-500 dark:text-orange-400">family members</span> who deserve the best care possible.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                            <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-100/20 dark:bg-orange-900/30 rounded-full border border-orange-400/30">
                                <Lock size={16} /> Privacy Focused
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-100/20 dark:bg-orange-900/30 rounded-full border border-orange-400/30">
                                <FlaskConical size={16} /> Science-Backed
                            </span>
                             <span className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-100/20 dark:bg-orange-900/30 rounded-full border border-orange-400/30">
                                <BrainCircuit size={16} /> Always Learning
                            </span>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="relative">
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
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const OurPrinciples = () => {
    const principles = [
        { icon: <BrainCircuit size={28} className="text-orange-500" />, title: 'Intelligent Insights', description: 'Leverage advanced AI and machine learning to understand your pet\'s unique patterns, behaviours, and health indicators for data-driven care decisions.', progressColor: 'bg-orange-500', iconBg: 'bg-orange-500/10' },
        { icon: <Heart size={28} className="text-red-500" />, title: 'Supportive Community', description: 'Connect with fellow pet parents and verified experts in a caring, moderated environment built on shared love for our furry family members.', progressColor: 'bg-red-500', iconBg: 'bg-red-500/10' },
        { icon: <Users size={28} className="text-green-500" />, title: 'Comprehensive Care', description: 'From daily wellness tracking to emergency situations, we provide complete 360° support for every aspect of your pet\'s physical and emotional wellbeing.', progressColor: 'bg-green-500', iconBg: 'bg-green-500/10' },
        { icon: <Stethoscope size={28} className="text-purple-500" />, title: 'Trusted Veterinary Access', description: 'Direct integration with licensed veterinarians and pet care professionals ensures expert guidance is always within reach when you need it most.', progressColor: 'bg-purple-500', iconBg: 'bg-purple-500/10' },
    ];

    return (
        <motion.section 
            className="text-gray-800 dark:text-gray-200 py-16 sm:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div className="text-center mb-12" variants={staggerContainer}>
                    <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
                        Core Values
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                        Our <span className="text-orange-500 dark:text-orange-400">Principles</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
                        At the heart of everything we do lies our commitment to smart, compassionate, and comprehensive pet care powered by cutting-edge technology. These principles guide every feature we build.
                    </motion.p>
                </motion.div>
                <motion.div 
                    className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {principles.map((item) => (
                        <motion.div 
                            key={item.title} 
                            className={`bg-gray-50 ${darkBgClass} rounded-2xl p-8 text-left overflow-hidden relative border border-gray-200 ${darkBorderClass} transition-transform duration-300 flex flex-col items-start`}
                            variants={fadeInUp}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                        >
                             <div className={`p-4 rounded-xl mb-6 ${item.iconBg}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{item.description}</p>
                            <div className={`mt-6 h-1 w-full rounded-full ${item.progressColor}`}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

const OurVision = () => {
    const buildingList = [
        'Real-time health monitoring and smart alerts',
        'Personalised nutrition and exercise plans',
        'Emergency care guidance and vet connections',
        'AI-powered behavioural insights and training tips',
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
        <motion.section 
            className="text-gray-800 dark:text-gray-200 py-16 sm:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div className="text-left" variants={staggerContainer}>
                         <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-orange-100/10 dark:bg-orange-900/50 border border-orange-400/30 text-orange-400 dark:text-orange-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
                            Future Vision
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Our Vision
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            We're building a future where every pet receives <span className="font-semibold text-orange-500 dark:text-orange-400">personalised, intelligent care</span> that adapts to their unique needs. Our vision extends beyond just an app – it's about creating a comprehensive <span className="font-semibold text-green-500 dark:text-green-400">ecosystem of care.</span>
                        </motion.p>
                        <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What we're building:</motion.h3>
                        <motion.ul 
                            className="space-y-4 mb-8"
                            variants={staggerContainer}
                        >
                            {buildingList.map((item, index) => (
                                <motion.li key={index} className={`flex items-center p-3 bg-gray-50 ${darkBgClass} rounded-lg border border-gray-200 ${darkBorderClass}`} variants={fadeInUp}>
                                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-orange-500/20 border-2 border-orange-500 rounded-full mr-4">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                         <motion.button variants={fadeInUp} className="flex items-center justify-center gap-2 w-auto px-6 py-3 text-base font-semibold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform transition-transform duration-300 hover:scale-105">
                            Be Part of the Future
                            <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>

                    <motion.div className="text-left" variants={staggerContainer}>
                        <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Innovation Roadmap</motion.h3>
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={`relative border-l-2 border-gray-200 ${darkBorderClass} ml-5`}>
                            {roadmap.map((item, index) => (
                                <motion.div key={index} className="mb-10 ml-12" variants={fadeInUp}>
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
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div variants={fadeInUp} className={`bg-gray-50 ${darkBgClass} rounded-2xl p-6 shadow-lg border border-gray-200 ${darkBorderClass} mt-8`}>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Early Access Impact</h4>
                            <div className="flex justify-around items-center text-center">
                                <div>
                                    <AnimatedStat value="10,000+" />
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Beta Testers</p>
                                </div>
                                <div className={`border-l border-gray-200 ${darkBorderClass} h-12`}></div>
                                <div>
                                    <AnimatedStat value="98%" />
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Satisfaction</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const CTASection = () => {
    return (
        <motion.section 
            className="py-16 sm:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <div className={`bg-gray-100 ${darkBgClass} border border-gray-200 ${darkBorderClass} rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden`}>
                    <motion.div className="relative z-10" variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Ready to experience <span className="text-orange-500 dark:text-orange-400">smarter pet care?</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
                            Join thousands of pet parents who trust Hooman Group to keep their furry family members happy, healthy, and thriving with intelligent care solutions powered by AI.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform transition-transform duration-300 hover:scale-105">
                                Start Your Journey
                                <ArrowRight size={20} />
                            </button>
                            <button className={`w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-800 dark:text-gray-200 bg-transparent border border-gray-300 ${darkBorderClass} rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transform transition-transform duration-300 hover:scale-105`}>
                                Explore Features
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
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
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-200 transition-colors duration-500 overflow-x-hidden">
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10 text-center">
        <motion.div 
          className="z-10 flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6" variants={fadeInUp}>
            <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400">
                  <Sparkle className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                      <span>The Future of Pet Care</span>
                  </div>
          </motion.div>
          <motion.h1 className="text-5xl lg:text-[56px] font-bold text-gray-900 dark:text-white leading-tight" variants={fadeInUp}>
            The <span className="text-orange-500 dark:text-orange-400">Hooman Group</span> <span className="text-orange-500 dark:text-orange-400">Story</span>
          </motion.h1>
          <motion.h2 className="mt-2 text-5xl lg:text-[56px] font-bold text-gray-900 dark:text-white leading-tight" variants={fadeInUp}>
            Revolutionising Pet Care Through AI
          </motion.h2>
          <motion.p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400" variants={fadeInUp}>
            We believe pets are family. With <span className="font-medium text-gray-800 dark:text-gray-200">cutting-edge AI technology</span>, we're making pet care smarter, simpler, and more <span className="font-medium text-orange-500 dark:text-orange-400">connected than ever before.</span>
          </motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto" variants={fadeInUp}>
            <button  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform transition-transform duration-300 hover:scale-105">
              Join Our Mission
              <ArrowRight size={20} />
            </button>
            <button onClick={handleScrollToJourney} className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-neutral-800/50 border border-gray-300 ${darkBorderClass} rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transform transition-transform duration-300 hover:scale-105`}>
              Our Journey
              <ArrowDown size={20} />
            </button>
          </motion.div>
        </motion.div>
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

