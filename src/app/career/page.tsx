'use client';

import React from 'react';
// import Link from 'next/link'; // This import is causing an issue in the current environment.
import { Briefcase } from 'lucide-react';

const CareersPage = () => {
  return (
    // Theme-friendly background and text colors
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-3xl">
        
        {/* Optional Icon */}
        <Briefcase className="mx-auto h-12 w-12 text-orange-500/80 mb-6" />

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          Join Our <span className="text-orange-500">Mission</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Help us revolutionize pet care through AI. We&apos;re building the future of pet health and looking for passionate people to join our pack.
        </p>
        
        {/* "Coming Soon" Message */}
        <p className="mt-8 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Our careers page is coming soon. Stay tuned!
        </p>

        {/* Optional: Link for speculative applications */}
        {/* <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
                Can&apos;t wait? Email your resume to{' '}
                <a 
                    href="mailto:careers@hoomanpets.com" 
                    className="text-orange-500 font-medium underline hover:text-orange-400"
                >
                    careers@hoomanpets.com
                </a>.
            </p>
        </div> */}

        {/* "Back to Home" Button */}
        <div className="mt-12">
          {/* ✅ FIXED: Replaced Link component with a standard <a> tag to resolve the build error. */}
          <a 
            href="/"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

