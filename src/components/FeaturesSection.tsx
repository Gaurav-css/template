'use client'

import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { Layers, Heart, Users, Stethoscope, Sparkles, NotebookPen, BarChart4, Settings } from 'lucide-react';

// Define the type for the component's props
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  isSmallScreen: boolean;
  index: number;
};

/**
 * FeatureCard Component
 * This component uses Intersection Observer for an initial reveal animation.
 * On small screens, it uses sticky positioning to create a stacked card effect.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children, isSmallScreen, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  // Specify that the ref is for an HTMLDivElement
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for the initial reveal animation
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // Triggers animation a bit sooner
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  // Style for the card content itself (the animated part)
  const cardContentStyle: React.CSSProperties = {
    transition: 'opacity 700ms ease-out, transform 700ms ease-out',
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : 20}px)`,
  };

  // The wrapper div gets the sticky positioning on small screens
  const wrapperStyle: React.CSSProperties = isSmallScreen ? {
    position: 'sticky',
    top: `calc(8rem + ${index * 2}rem)`,
    zIndex: index,
    marginBottom: '1rem',
  } : {
    marginBottom: '2rem',
  };


  return (
    <div ref={cardRef} style={wrapperStyle}>
      <div
        style={cardContentStyle}
        className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 flex items-start space-x-6 hover:shadow-lg dark:hover:border-gray-600"
      >
        <div className="bg-gray-100 dark:bg-gray-800/50 p-3 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

const allFeatures = [
  { id: 'ai', icon: <Sparkles className="w-6 h-6 text-[#ED6C35]" />, title: "Ezra AI", children: "Meet Ezra, your personal pet assistant. With smart insights and reminders, Ezra ensures you never miss a beat in your pet's care." },
  { id: 'tracking', icon: <Heart className="w-6 h-6 text-[#ED6C35]" />, title: "Care Tracking", children: "Track your pet's health and wellness with ease. Our app provides tailored care routines and health updates to keep your pet thriving." },
  { id: 'community', icon: <Users className="w-6 h-6 text-[#ED6C35]" />, title: "Community Hub", children: "Connect with fellow pet parents and share experiences. Our community hub is a space for support, advice, and friendship." },
  { id: 'vet', icon: <Stethoscope className="w-6 h-6 text-[#ED6C35]" />, title: "Vet Integrations", children: "Access your vet's insights directly through our app. With seamless integrations, managing your pet's appointments and health records has never been easier." },
  { id: 'nutrition', icon: <NotebookPen className="w-6 h-6 text-[#ED6C35]" />, title: "Nutrition Planner", children: "Get personalised meal plans for your pet based on their breed, age, and activity level to ensure optimal nutrition." },
  { id: 'activity', icon: <BarChart4 className="w-6 h-6 text-[#ED6C35]" />, title: "Activity Monitoring", children: "Keep an eye on your pet's daily activity levels to ensure they're getting enough exercise and staying healthy." }
];


export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(allFeatures.length);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Effect to detect screen size and set initial card visibility
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 1024; // Tailwind's `lg` breakpoint
      setIsSmallScreen(isSmall);
      setVisibleCardCount(isSmall ? 2 : allFeatures.length);
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Effect to handle revealing more cards using Intersection Observer
  useEffect(() => {
    if (!isSmallScreen || visibleCardCount >= allFeatures.length) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCardCount(prevCount => prevCount + 1);
        }
      },
      { rootMargin: '0px 0px 200px 0px' }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isSmallScreen, visibleCardCount]);


  return (
    <div className="bg-gray-50 dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200 -mb-10">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* --- Left Column (Sticky on large screens) --- */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center py-16 lg:py-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 -mb-4 animate-fade-in-up">
                    <Settings className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                        <span>Features</span>
                    </div>
              <h1 className="text-4xl lg:text-[48px] lg:leading-[56px] font-bold tracking-tight text-gray-900 dark:text-white">
                Why Choose Hooman Group for Your Pet's Health?
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                At Hooman Group, we understand that your pets are family. Our AI-powered tools are designed to simplify pet care, ensuring your furry friends receive the best attention possible.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="/EzraAiPage"
                  className="inline-block px-6 py-3 bg-[#ED6C35] text-white font-semibold rounded-md shadow-sm hover:bg-[#d95b2a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ED6C35] dark:focus:ring-offset-gray-800"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* --- Right Column (Scrollable) --- */}
          <div className="pt-0 lg:pt-32 pb-32">
            {allFeatures.slice(0, visibleCardCount).map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                isSmallScreen={isSmallScreen}
                index={index}
              >
                {feature.children}
              </FeatureCard>
            ))}

            {isSmallScreen && visibleCardCount < allFeatures.length && (
              <div ref={loadMoreRef} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}