'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs, Blog } from '../../data/blogs';
import { FileText } from 'lucide-react';

// --- DATA PREPARATION ---
// Assumes the first blog in the array is the latest/featured one.
const featuredPost = blogs.length > 0 ? blogs[0] : null;
const remainingPosts = blogs.length > 1 ? blogs.slice(1) : [];
const categories = Array.from(new Set(['View all', ...remainingPosts.map(b => b.category)]));

// --- SVG ICONS (Unchanged) ---
const ImageIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`text-gray-400 dark:text-gray-600 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// --- NEW FEATURED BLOG POST COMPONENT ---
const FeaturedBlogPostCard = ({ post }: { post: Blog }) => (
  <Link href={`/blog/${post.id}`} className="block group mb-16 cursor-pointer">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white dark:bg-[#2b2b2b] rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6">
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gray-200 dark:bg-[#3c3c3c] h-full flex items-center justify-center">
            <ImageIcon className="h-16 w-16" />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-x-4 mb-3">
          <span>{post.category}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-6">{post.description}</p>
        <div className="font-semibold text-[#ED6C35] flex items-center mt-auto text-lg hover:opacity-80 transition-opacity">
          Read more <ArrowRightIcon />
        </div>
      </div>
    </div>
  </Link>
);


// --- BLOG LIST VIEW COMPONENTS (Unchanged Card) ---
const BlogPostCard = ({ post }: { post: Blog }) => (
  <Link href={`/blog/${post.id}`} className="bg-white dark:bg-[#2b2b2b] rounded-lg overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
    <div className="relative w-full aspect-video bg-gray-200 dark:bg-[#3c3c3c] flex items-center justify-center overflow-hidden">
      {post.image ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <ImageIcon className="h-12 w-12" />
      )}
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-x-4 mb-2">
        <span>{post.category}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4">{post.description}</p>
      <div className="font-semibold text-[#ED6C35] flex items-center mt-auto hover:opacity-80 transition-opacity">
        Read more <ArrowRightIcon />
      </div>
    </div>
  </Link>
);


// --- UPDATED BLOG LIST COMPONENT ---
const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('View all');

  const filteredPosts = activeCategory === 'View all'
    ? remainingPosts
    : remainingPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <header className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 mb-6 animate-fade-in-up">
                    <FileText className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                        <span>Blog</span>
                    </div>
        <h1 className="text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Explore Our Latest Insights</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Your go-to source for pet care advice</p>
      </header>

      <main>
        {/* Render the large featured post first */}
        {featuredPost && <FeaturedBlogPostCard post={featuredPost} />}

        {/* Section for the rest of the articles */}
        {remainingPosts.length > 0 && (
          <section>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-gray-200 dark:border-gray-800 pb-4 mb-12">
              {categories.map(category => (
                <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 ${activeCategory === category ? 'bg-[#ED6C35] text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:bg-[#ED6C35]/20'}`}>
                  {category}
                </button>
              ))}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600 dark:text-gray-400">No articles found in this category.</p>
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
};


// --- MAIN PAGE COMPONENT (Unchanged) ---
export default function BlogPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#1a1a1a] min-h-screen text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <BlogList />
      </div>
    </div>
  );
}