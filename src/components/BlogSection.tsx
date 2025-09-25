'use client';

import Link from "next/link";
import React, { useState, useEffect, useRef, SVGProps } from "react";

// Define the shape of a blog post for TypeScript
interface BlogPost {
  category: string;
  readTime: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  href: string;   // 👈 new property
  details: {
    heading: string;
    content: string;
  }[];
}

// Define a props interface for icons that can take a size prop
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

// Icon for scrolling left
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

// Icon for the "Read more" link and scrolling right
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Sample data for the blog posts
const blogPosts: BlogPost[] = [
  {
    category: 'Health',
    readTime: '5 min read',
    title: "Understanding Your Pet's Nutritional Needs",
    description: 'Explore the best diets for your furry friends and how to ensure they live a long, healthy life.',
    imageUrl: 'food.jpg',
    href: '/blog/understanding-pet-nutritional-needs', 
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    details: []
  },
  {
    category: 'Training',
    readTime: '7 min read',
    title: 'Top Tips for Successful  Training',
    description: 'Learn effective, positive reinforcement strategies for successful and stress-free  training.',
    imageUrl: 'train.jpg',
      href: '/blog/understanding-pet-nutritional-needs', // 👈 direct page path

    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    details: []
  },
  {
    category: 'Wellness',
    readTime: '6 min read',
    title: 'Signs Your Pet Needs to See a Vet',
    description: 'Recognize the subtle but crucial warning signs for your pet’s health to get them timely care.',
    imageUrl: 'doc.png',
     href: '/blog/understanding-pet-nutritional-needs', // 👈 direct page path

    icon: (
      <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
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
    if (container) {
      checkArrows();
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
            <p className="text-sm font-semibold tracking-wider text-orange-500 dark:text-orange-400 mb-2">
              Our Blog
            </p>
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-[#1A1A1A] p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              </button>
            )}
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-8 pl-4 -mx-4 scrollbar-hide">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-shrink-0 w-[85%] sm:w-2/3 md:w-1/2 bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform duration-200 cursor-pointer"
                >
                  <img
                    src={post.imageUrl}
                    alt={`Image for ${post.title}`}
                    className="w-full h-48 object-cover flex-shrink-0"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <div>
                      <span className={`text-sm font-semibold ${post.category === 'Health' ? 'text-green-500' :
                        post.category === 'Training' ? 'text-blue-500' : 'text-red-500'
                        }`}>
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link
                        href="/blog"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-[#1A1A1A] p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              </button>
            )}
          </div>

          {/* --- Grid for Desktop --- */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={`Image for ${post.title}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className={`font-semibold ${post.category === 'Health' ? 'text-green-500' :
                      post.category === 'Training' ? 'text-blue-500' : 'text-red-500'
                      }`}>{post.category}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex-grow">
                    <Link
                      href="/blog"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">{post.description}</p>
                  <Link
                    href="/blog"
                    className="mt-auto inline-flex items-center font-semibold text-orange-500 dark:text-orange-500 group-hover:text-orange-500 dark:group-hover:text-orange-300 transition-colors duration-200"
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
              className="inline-block bg-orange-500 dark:bg-orange-500 text-white dark:text-orange-100 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange dark:hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-orange-900 dark:focus:ring-grorangeay-400 transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </div>
  );
}
