'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs, Blog } from '../../data/blogs';

const categories = Array.from(new Set(['View all', ...blogs.map(b => b.category)]));

// --- SVG ICONS ---
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

// --- BLOG LIST VIEW COMPONENTS ---
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


import { useState } from 'react';
const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('View all');
  const filteredPosts = activeCategory === 'View all'
    ? blogs
    : blogs.filter(post => post.category === activeCategory);

  return (
    <>
      <header className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-[#ED6C35] font-semibold mb-2">Blog</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Explore Our Latest Insights</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Your go-to source for pet care advice</p>
      </header>
      <section className="mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          {categories.map(category => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 ${activeCategory === category ? 'bg-[#ED6C35] text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:bg-[#ED6C35]/20'}`}>
              {category}
            </button>
          ))}
        </div>
      </section>
      <main>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 dark:text-gray-400">No articles found in this category.</p>
          </div>
        )}
      </main>
    </>
  );
};

// Blog post detail page will be handled by dynamic route: /blog/[id]


// --- MAIN PAGE COMPONENT ---
export default function BlogPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#1a1a1a] min-h-screen text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <BlogList />
      </div>
    </div>
  );
}