'use client';

import { useState } from 'react';

const HeroSection = () => {
  const images = [
    '/img1.png', '/img2.png', '/img3.png', '/img4.png', '/img5.png',
    '/img6.png', '/img7.png', '/img8.png', '/img9.png', '/img10.png',
    '/img11.png', '/img12.png', '/img13.png', '/img14.png', '/img15.png'
  ];

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // --- UPDATED: This function now calls your real backend API ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Basic client-side validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Whoops! Please enter a valid email address.');
      return;
    }

    try {
      // Call the real API endpoint
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle errors from the API (e.g., validation, server errors)
        throw new Error(data.error || 'Something went wrong.');
      }
      
      // Handle success from the API
      setStatus('success');
      // Use the message sent back from the server ("Success!" or "You're already on the list!")
      setMessage(data.message); 
      
      // Only clear the input field for a brand new submission
      if (data.message.includes("Success")) {
        setEmail('');
      }

    } catch (error) {
      // Handle network errors or exceptions
      setStatus('error');
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred.');
      }
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300 min-h-screen mt-16 lg:mt-20 -mb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left px-2 sm:px-4 lg:px-0 order-2 lg:order-1">
              <h1 className="text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-800 dark:text-white leading-tight">
                Revolutionising Pet Care with
                <br />
                <span className="text-[#ED6C35] bg-gradient-to-r from-[#ED6C35] to-[#d95b2a] bg-clip-text text-transparent">
                  AI Technology
                </span>
              </h1>
              <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience the future of pet care with Hooman Group Pets. Our AI-powered
                app ensures your furry friends receive the best care tailored to their
                needs.
              </p>
              
              {/* --- Functional Waitlist Form --- */}
              <div className="mt-6 sm:mt-8 md:mt-10 w-full max-w-md mx-auto lg:mx-0">
                {status === 'success' ? (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center backdrop-blur-md">
                    <p className="font-semibold text-green-800 dark:text-green-300">{message}</p>
                  </div>
                ) : (
                  <>
                    <form
                      className="flex flex-col sm:flex-row gap-3"
                      onSubmit={handleSubmit}
                    >
                      <input
                        className="h-14 flex-1 rounded-md border border-gray-300 bg-white/80 px-4 text-gray-900 placeholder:text-gray-500 backdrop-blur-md transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6C35] dark:border-white/30 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-400"
                        placeholder="your-best-friend@email.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        aria-label="Email Address"
                      />
                      <button
                        className="inline-flex h-14 w-full items-center justify-center rounded-md bg-[#ED6C35] px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6C35] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                        type="submit"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                      </button>
                    </form>
                    {status === 'error' && (
                      <p className="mt-2 text-left text-sm text-red-600 dark:text-red-400">{message}</p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Image Gallery */}
            <div className="flex justify-center items-center h-full order-1 lg:order-2">
              <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-sm lg:max-w-md xl:max-w-lg overflow-hidden">
                <div
                  className="absolute inset-0 z-10 pointer-events-none dark:hidden"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(249,250,251,1) 0%, transparent 15%, transparent 85%, rgba(249,250,251,1) 100%)'
                  }}
                ></div>
                <div
                  className="absolute inset-0 z-10 pointer-events-none hidden dark:block"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, transparent 15%, transparent 85%, rgba(26,26,26,1) 100%)'
                  }}
                ></div>
                <div className="absolute inset-0 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 animate-scroll-up">
                    {images.slice(0, 5).map((src, index) => (
                      <div key={index} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img src={src} alt={`Pet ${index + 1}`} className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    ))}
                    {images.slice(0, 5).map((src, index) => (
                      <div key={`repeat1-${index}`} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img src={src} alt={`Pet ${index + 1}`} className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 animate-scroll-down">
                    {images.slice(5, 10).map((src, index) => (
                      <div key={index} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img src={src} alt={`Pet ${index + 6}`} className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    ))}
                    {images.slice(5, 10).map((src, index) => (
                      <div key={`repeat2-${index}`} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img src={src} alt={`Pet ${index + 6}`} className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 animate-scroll-up-slow">
                    {images.slice(10, 15).map((src, index) => (
                      <div key={index} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img src={src} alt={`Pet ${index + 11}`} className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    ))}
                    {images.slice(10, 15).map((src, index) => (
                      <div key={`repeat3-${index}`} className="w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 flex-shrink-0">
                        <img src={src} alt={`Pet ${index + 11}`} className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          @keyframes scroll-up-slow {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-up { animation: scroll-up 20s linear infinite; }
          .animate-scroll-down { animation: scroll-down 25s linear infinite; }
          .animate-scroll-up-slow { animation: scroll-up-slow 30s linear infinite; }
        `}</style>
      </section>
    </div>
  );
};

export default HeroSection;