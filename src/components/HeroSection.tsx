'use client'

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const images = [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/img4.png',
    '/img5.png',
    '/img6.png',
    '/img7.png',
    '/img8.png',
    '/img9.png',
    '/img10.png',
    '/img11.png',
    '/img12.png',
    '/img13.png',
    '/img14.png',
    '/img15.png'
  ];

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section className="bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300 min-h-screen mt-16 lg:mt-20 -mb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left px-2 sm:px-4 lg:px-0 order-2 lg:order-1">
              {/* UPDATED H1 ELEMENT */}
              <h1 className="text-[48px] font-extrabold tracking-tight text-gray-800 dark:text-white leading-tight">
                Revolutionising Pet Care with{' '}
                <span className="text-[#ED6C35] bg-gradient-to-r from-[#ED6C35] to-[#d95b2a] bg-clip-text text-transparent">
                  AI Technology
                </span>
              </h1>
              <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience the future of pet care with Hooman Group Pets. Our AI-powered
                app ensures your furry friends receive the best care tailored to their
                needs.
              </p>
              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl text-white bg-gradient-to-r from-[#ED6C35] to-[#d95b2a] hover:from-[#d95b2a] hover:to-[#c35025] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Join
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Image Gallery */}
            <div className="flex justify-center items-center h-full order-1 lg:order-2">
              <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-sm lg:max-w-md xl:max-w-lg overflow-hidden">
                {/* Mask for fade effect - Light mode */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none dark:hidden"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(249,250,251,1) 0%, transparent 15%, transparent 85%, rgba(249,250,251,1) 100%)'
                  }}
                ></div>
                {/* Mask for fade effect - Dark mode */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none hidden dark:block"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, transparent 15%, transparent 85%, rgba(26,26,26,1) 100%)'
                  }}
                ></div>

                {/* Scrolling container */}
                <div className="absolute inset-0 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {/* First column */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 animate-scroll-up">
                    {images.slice(0, 5).map((src, index) => (
                      <div key={index} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img
                          src={src}
                          alt={`Pet ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                    ))}
                    {/* Repeat for seamless loop */}
                    {images.slice(0, 5).map((src, index) => (
                      <div key={`repeat1-${index}`} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img
                          src={src}
                          alt={`Pet ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Second column */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 animate-scroll-down">
                    {images.slice(5, 10).map((src, index) => (
                      <div key={index} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img
                          src={src}
                          alt={`Pet ${index + 6}`}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                    ))}
                    {/* Repeat for seamless loop */}
                    {images.slice(5, 10).map((src, index) => (
                      <div key={`repeat2-${index}`} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img
                          src={src}
                          alt={`Pet ${index + 6}`}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Third column */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 animate-scroll-up-slow">
                    {images.slice(10, 15).map((src, index) => (
                      <div key={index} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img
                          src={src}
                          alt={`Pet ${index + 11}`}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                    ))}
                    {/* Repeat for seamless loop */}
                    {images.slice(10, 15).map((src, index) => (
                      <div key={`repeat3-${index}`} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img
                          src={src}
                          alt={`Pet ${index + 11}`}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for animations */}
        <style jsx>{`
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          
          @keyframes scroll-down {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
          
          @keyframes scroll-up-slow {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          
          .animate-scroll-up {
            animation: scroll-up 20s linear infinite;
          }
          
          .animate-scroll-down {
            animation: scroll-down 25s linear infinite;
          }
          
          .animate-scroll-up-slow {
            animation: scroll-up-slow 30s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default HeroSection;