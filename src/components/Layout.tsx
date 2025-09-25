'use client';
import React, { useState, useEffect, useCallback } from 'react';

// --- SVG Icon Components ---
const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// --- Main Page Component ---
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      supertitle: 'Insight',
      title: 'Challenges in Modern Pet Care',
      description:
        "Pet care today is fragmented and overwhelming. Many pet parents struggle to keep track of their pet's health and needs, leading to missed appointments and unmanaged conditions.",
      image: 'Dog.png',
      layout: 'text-left',
    },
    {
      supertitle: 'Solutions',
      title: 'Our Commitment to Pet Health',
      description:
        'At Happy Pet, we believe every pet deserves personalised care. Our platform simplifies health tracking, vet access, and community support to simplify pet parenting.',
      image: 'Dog.png',
      layout: 'text-right',
    },
    {
      supertitle: 'Empower',
      title: 'Transforming Pet Care Together',
      description:
        'Join a community that prioritizes the health and happiness of pets. Together, we can create a better future for our furry friends.',
      image: 'Dog.png',
      layout: 'text-left',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="bg-white dark:bg-[#1a1a1a] min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto p-4 lg:p-8">
        <main>
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-orange-600 dark:text-orange-400 font-semibold">
              Care
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              The Future of Pet Care
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Revolutionizing how we care for our pets.
            </p>
          </div>

          {/* Carousel */}
          <section className="relative w-full h-[650px] sm:h-[550px] lg:h-[500px] max-w-6xl mx-auto rounded-2xl shadow-lg bg-gray-50 dark:bg-zinc-900 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div
                    className={`h-full w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-16 sm:p-8 md:p-12 gap-4 md:gap-8 ${
                      slide.layout === 'text-right' ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left z-10 px-2">
                      <span className="font-semibold text-orange-500 dark:text-orange-400">
                        {slide.supertitle}
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2 text-gray-900 dark:text-white">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base lg:text-lg">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                        <button className="bg-orange-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-lg transition-colors text-sm sm:text-base">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-full flex items-center justify-center p-4">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error';
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index
                        ? 'bg-orange-600 dark:bg-orange-400'
                        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-20 p-2 bg-white/70 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-20 p-2 bg-white/70 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}