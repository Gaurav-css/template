'use client';

import React, { useState } from 'react';

const CommunityWaitlist = () => {
  const [email, setEmail] = useState('');
  // Status can be: 'idle', 'loading', 'success', 'error'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // A simple regex for email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Whoops! Please enter a valid email address.');
      return;
    }

    try {
      // Simulate an API call (e.g., to Mailchimp, ConvertKit, or your own backend)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On successful submission
      setStatus('success');
      setMessage("Welcome to the pack! 🐾 You're on the list for early access.");
      setEmail('');
    } catch (error) {
      // On failed submission
      setStatus('error');
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-8 text-center px-4 py-16">
        
        {/* Tagline */}
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
          🐾 Paws & Friends
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl text-shadow-lg">
          The Ultimate Hub for <br className="hidden sm:inline" /> 
          <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">Happy Paws</span> is Coming Soon.
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300">
          Be the first to know! Join our waitlist for exclusive updates, early access to our platform, 
          and special content crafted for you and your beloved pets.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-md">
          {status === 'success' ? (
            <div className="text-center p-6 bg-green-500/10 rounded-lg border border-green-500/30 backdrop-blur-md">
              <p className="text-green-300 text-lg font-semibold">{message}</p>
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 w-full"
              onSubmit={handleSubmit}
            >
              <input
                className="flex-1 h-14 w-full rounded-md border border-white/30 bg-white/10 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all backdrop-blur-md"
                placeholder="your-best-friend@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                aria-label="Email Address"
              />
              <button
                className="inline-flex items-center justify-center h-14 rounded-md bg-amber-400 px-8 text-base font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:opacity-60 disabled:pointer-events-none"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-400">{message}</p>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default CommunityWaitlist;