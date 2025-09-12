'use client';

import React from 'react';

// Define the type for a single testimonial
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

// Star Icon Component
const StarIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-50 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="flex text-yellow-500 mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5" />
      ))}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-300 dark:border-gray-600"
        src={testimonial.avatar}
        alt={`${testimonial.name}, ${testimonial.title}`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.currentTarget;
          target.onerror = null;
          target.src = 'https://placehold.co/48x48/1F2937/FFFFFF?text=A';
        }}
      />
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

// Main App Component
export default function App() {
  const testimonialsRow1: Testimonial[] = [
    {
      quote: "This AI product has transformed the way I manage my daily tasks. It's intuitive, fast, and incredibly accurate!",
      name: 'Sarah Thompson',
      title: 'Project Manager',
      avatar: 'https://i.pravatar.cc/48?u=1',
    },
    {
      quote: "I was skeptical at first, but this AI tool saved me hours of work. The automation features are a game-changer.",
      name: 'Michael Chen',
      title: 'Software Developer',
      avatar: 'https://i.pravatar.cc/48?u=2',
    },
    {
      quote: "The AI's ability to analyze data and provide insights is unmatched. It's like having a personal assistant 24/7.",
      name: 'Emily Rodriguez',
      title: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/48?u=3',
    },
    {
      quote: "I've never seen an AI product this user-friendly. It integrated seamlessly into my workflow from day one.",
      name: 'David Patel',
      title: 'IT Consultant',
      avatar: 'https://i.pravatar.cc/48?u=4',
    },
  ];

  const testimonialsRow2: Testimonial[] = [
    {
      quote: "This AI has boosted my productivity tenfold. The predictive features are spot-on and so helpful!",
      name: 'Olivia Harper',
      title: 'Marketing Specialist',
      avatar: 'https://i.pravatar.cc/48?u=5',
    },
    {
      quote: "The customer support paired with the AI product is phenomenal. The team listens and delivers results every time.",
      name: 'James Carter',
      title: 'Operations Manager',
      avatar: 'https://i.pravatar.cc/48?u=6',
    },
    {
      quote: "A must-have tool for any business looking to leverage AI. It simplifies complex processes effortlessly.",
      name: 'Jessica Wu',
      title: 'Business Owner',
      avatar: 'https://i.pravatar.cc/48?u=7',
    },
    {
      quote: "The insights we've gained have been invaluable. This tool has given us a significant competitive advantage.",
      name: 'Ben Adams',
      title: 'Strategy Director',
      avatar: 'https://i.pravatar.cc/48?u=8',
    },
  ];

  const Scroller: React.FC<{ testimonials: Testimonial[], speed: number, direction: 'left' | 'right' }> = ({ testimonials, speed, direction }) => {
    const duplicatedTestimonials = [...testimonials, ...testimonials];
    const animationClass = direction === 'right' ? 'animate-scroll-reverse' : 'animate-scroll';
    return (
      <div
        className="w-full overflow-hidden relative"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div className={`flex ${animationClass}`} style={{ animationDuration: `${speed}s` }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 mx-4" style={{ width: 'clamp(280px, 80vw, 380px)' }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-white relative flex flex-col items-center justify-center overflow-hidden transform-gpu">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Hooman Pets has transformed our pet care routine!
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center space-y-8">
        <Scroller testimonials={testimonialsRow1} speed={40} direction="left" />
        <Scroller testimonials={testimonialsRow2} speed={40} direction="right" />
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-scroll, .animate-scroll-reverse {
          display: flex;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        .animate-scroll {
            animation-name: scroll;
        }
        .animate-scroll-reverse {
            animation-name: scroll-reverse;
        }
        
        .animate-scroll:hover, .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
