'use client';

import React, { useState } from 'react';

// NOTE: This component assumes you have Tailwind CSS dark mode configured to 'class'.
const CommunityWaitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Whoops! Please enter a valid email address.');
      return;
    }

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      setMessage("Welcome to the pack! 🐾 You're on the list for early access.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-[#1a1a1a] dark:text-white">
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-8 px-4 py-16 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center rounded-full border border-gray-900/10 bg-gray-900/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md dark:border-white/20 dark:bg-white/10">
          🐾 Paws & Friends
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          The Ultimate Hub for <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#ED6C35] to-[#d95b2a] bg-clip-text text-transparent">
            Happy Paws
          </span>{' '}
          is Coming Soon.
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Be the first to know! Join our waitlist for exclusive updates, early access to our platform, and special content crafted for you and your beloved pets.
        </p>

        {/* Waitlist Form Container */}
        <div className="w-full max-w-md">
          {status === 'success' ? (
            <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-6 text-center backdrop-blur-md">
              <p className="text-lg font-semibold text-green-800 dark:text-green-300">{message}</p>
            </div>
          ) : (
            <>
              {/* --- Form for LARGE screens (md and up) --- */}
              <form
                className="hidden w-full flex-col gap-3 md:flex md:flex-row"
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
                  className="inline-flex h-14 w-full items-center justify-center rounded-md bg-[#ED6C35] px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6C35] disabled:pointer-events-none disabled:opacity-60 md:w-auto"
                  type="submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>

              {/* --- Form for SMALL screens --- */}
              <form 
                className="space-y-4 text-left md:hidden"
                onSubmit={handleSubmit}
              >
                <div>
                  <label 
                    htmlFor="email-waitlist-mobile" 
                    className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2"
                  >
                    Email 
                    <span className="ml-1 text-red-500">*</span>
                    <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email-waitlist-mobile"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6C35] dark:border-gray-600 dark:bg-[#2b2b2b] dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[#ED6C35] px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6C35] disabled:pointer-events-none disabled:opacity-60"
                >
                  {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>
            </>
          )}

          {status === 'error' && (
            <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunityWaitlist;