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
        <h1 className="text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 dark:text-white">
          Careers at <span className="text-orange-500">Hooman Group</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          We’re not actively hiring at the moment, but we’re always open to connecting with talented individuals who are passionate about our mission to transform pet care with AI.
        </p>
        
        {/* "Coming Soon" Message */}
        <p className="mt-8 text-xl font-semibold text-gray-800 dark:text-gray-100">
          If you’re interested in future opportunities, please reach out to us — we’d be glad to keep your details on file for upcoming roles.
        </p>

        {/* Optional: Link for speculative applications */}
        {/* <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
                Can't wait? Email your resume to{' '}
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

