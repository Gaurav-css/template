'use client';

import Link from "next/link";
import React, { useState, useEffect, useRef, SVGProps } from "react";
import { FileText } from "lucide-react";

// Define the shape of a blog post for TypeScript
interface BlogPost {
  id: number; // 👈 added for unique keys and links
  category: string;
  readTime: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  details: {
    heading: string;
    content: string;
  }[];
}

// Icon for scrolling left
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

// Icon for scrolling right
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Updated blog post data with 2 items
const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'General',
    readTime: '3 min read',
    title: "The App Overload: When More Tools Mean Less Care",
    description: 'Still juggling a dozen apps for your pet\'s care? Discover how a single, intelligent platform can reduce chaos and help you become a smarter pet parent.',
    imageUrl: '/blog1.2.png',
    href: '/blog/1', // 👈 dynamic link
    details: []
  },
  {
    id: 2,
    category: 'Pet Health & Wellness',
    readTime: '12 min read',
    title: 'Why Pet Care is Important Today: A Comprehensive Guide',
    description: 'In our rapidly evolving world, the importance of proper pet care has never been more critical. From emerging health challenges to groundbreaking technological advances, understanding why modern pet care matters is essential for every pet parent.',
    imageUrl: '/blog2.png',
    href: '/blog/2', // 👈 dynamic link
    details: []
  },
  
];

// Main Component
export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    checkArrows(); // Initial check

    if (container) {
      container.addEventListener('scroll', checkArrows);
    }
    window.addEventListener('resize', checkArrows);

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkArrows);
      }
      window.removeEventListener('resize', checkArrows);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-[#1A1A1A] min-h-screen antialiased text-gray-800 dark:text-gray-200 -mt-10 -mb-10">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 mb-6">
              <FileText className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              <span>Our Blog</span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-extrabold text-gray-900 dark:text-white tracking-tight">
              Latest Insights for Pet Parents
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Stay updated with our latest articles, tips, and stories to be the best pet parent you can be.
            </p>
          </div>

          {/* --- Scrollable Card Container for Mobile/Tablet --- */}
          <div className="lg:hidden relative">
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/60 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              </button>
            )}
            {/* NOTE: For `scrollbar-hide` to work, you may need the `tailwind-scrollbar-hide` plugin */}
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-8 pl-4 -mx-4 scrollbar-hide">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col flex-shrink-0 w-[85%] sm:w-2/3 md:w-1/2 bg-white dark:bg-[#222] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform duration-200"
                >
                  <img
                    src={post.imageUrl}
                    alt={`Image for ${post.title}`}
                    className="w-full h-48 object-cover flex-shrink-0"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <div>
                      <span className="text-sm font-semibold text-orange-500">{post.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link
                        href={post.href}
                        className="inline-flex items-center font-semibold text-orange-600 dark:text-orange-400"
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 w-1"></div>
            </div>
            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/60 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              </button>
            )}
          </div>

          {/* --- Grid for Desktop --- */}
          {/* 👇 KEY CHANGE IS HERE: Removed lg:grid-cols-3 to make it responsive */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col bg-white dark:bg-[#222] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={`Image for ${post.title}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="font-semibold text-orange-500">{post.category}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex-grow">
                    <Link
                      href={post.href}
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-base line-clamp-3">{post.description}</p>
                  <Link
                    href={post.href}
                    className="mt-auto inline-flex items-center font-semibold text-orange-600 dark:text-orange-400 group-hover:text-orange-500 dark:group-hover:text-orange-300 transition-colors duration-200"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-400 transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}