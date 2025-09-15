'use client';

import React, { useState } from 'react';

// You can replace these with your preferred icon library, like lucide-react or heroicons
const PawPrintIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="4" />
    <path d="M15.52 12.52a3 3 0 1 0 4.24-4.24" />
    <path d="M8.48 12.52a3 3 0 1 1-4.24-4.24" />
    <path d="M12.52 15.52a3 3 0 1 0 4.24 4.24" />
    <path d="M12.52 8.48a3 3 0 1 1 4.24-4.24" />
  </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);


const Community = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        if (!email) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('/api/join-waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }
            
            setStatus('success');
            setMessage("You're on the list! We'll notify you at launch.");
            setEmail('');

        } catch (error) {
            setStatus('error');
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage('An unknown error occurred.');
            }
        }
    };


  return (
    <section className="bg-white dark:bg-[#1A1A1A] w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              Our Community
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
              Join Our Pet Care Community
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stay updated with the latest tips, tricks, and insights for your
              beloved furry friends. Our community is the perfect place to learn and share.
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              {status === 'success' ? (
                <div className="text-center">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300">{message}</p>
                </div>
              ) : (
                <>
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
                        <PawPrintIcon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-gray-50 mb-2">
                        Join Our Waitlist
                    </h3>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
                        Get the latest pet care news straight to your inbox.
                    </p>
                    <form className="w-full flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
                        <input
                            className="flex-1 h-10 w-full rounded-md border border-gray-200 bg-white dark:bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-600"
                            placeholder="Your Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                        />
                        <button
                            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            type="submit"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Joining...' : 'Join Now'}
                        </button>
                    </form>
                    {status === 'error' && <p className="mt-2 text-sm text-red-500">{message}</p>}
                    <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
                        By clicking Join Now, you agree to our{' '}
                        <a className="underline underline-offset-2" href="#">
                        Terms & Conditions
                        </a>
                        .
                    </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

