'use client';

import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

import Navbar from '@/components/Navbar';

// --- MOCK DATA ---
// In a real Next.js app, you would fetch this from a CMS or API.

type Post = {
    id: number;
    category: string;
    readTime: string;
    title: string;
    description: string;
    author: string;
    publishDate: string;
    featured?: boolean;
    image?: string;
};

const blogPosts: Post[] = [
  {
    id: 1,
    category: 'Health tips',
    readTime: '5 min read',
    title: 'Understanding Your Pet\'s Nutritional Needs',
    description: 'Learn how to keep your pet healthy and happy with the right diet.',
    author: 'Dr. Jane Doe',
    publishDate: '23 January 2025',
    featured: true,
    image: '/img25.jpeg',
  },
  {
    id: 2,
    category: 'New pet',
    readTime: '6 min read',
    title: 'Choosing the Right Food for Your Dog',
    description: 'Discover the best diets for your furry friend, from puppies to seniors.',
    author: 'John Smith',
    publishDate: '15 January 2025',
    image: '/food.jpg',
  },
  {
    id: 3,
    category: 'Behaviour',
    readTime: '4 min read',
    title: 'Understanding Your Cat\'s Body Language',
    description: 'Learn to interpret your cat\'s signals and moods for a stronger bond.',
    author: 'Dr. Jane Doe',
    publishDate: '10 January 2025',
    image: '/cat.png',
  },
  {
    id: 4,
    category: 'Training advice',
    readTime: '7 min read',
    title: 'Top Tips for Training Your New Puppy',
    description: 'Make puppy training fun and effective with these expert tips.',
    author: 'Mark Evans',
    publishDate: '5 January 2025',
    image: '/Train2.jpeg',
  },
  {
    id: 5,
    category: 'Health tips',
    readTime: '5 min read',
    title: 'Recognising Signs of Illness in Pets',
    description: 'Stay alert to your pet\'s health with these signs and know when to see a vet.',
    author: 'Dr. Jane Doe',
    publishDate: '28 December 2024',
    image: '/illeness.jpg',
  },
  {
    id: 6,
    category: 'Health tips',
    readTime: '3 min read',
    title: 'The Importance of Regular Vet Check-ups',
    description: 'Ensure your pet\'s well-being with routine veterinary visits.',
    author: 'John Smith',
    publishDate: '20 December 2024',
    image: '/img/pets/vet-checkup.jpeg',
  },
  {
    id: 7,
    category: 'Pet care',
    readTime: '8 min read',
    title: 'Homemade Treats: Healthy Recipes for Pets',
    description: 'Whip up a treat with these nutritious and delicious homemade recipes.',
    author: 'Sarah Lee',
    publishDate: '12 December 2024',
    image: '/food2.jpg',
  },
  {
    id: 8,
    category: 'Health tips',
    readTime: '4 min read',
    title: 'Dental Health for Dogs: A Complete Guide',
    description: 'Everything you need to know about keeping your dog\'s teeth clean and healthy.',
    author: 'Dr. Emily Carter',
    publishDate: '10 December 2024',
    image: '/img/pets/dog-dental-health.jpeg',
  },
  {
    id: 9,
    category: 'Pet care',
    readTime: '6 min read',
    title: 'Grooming Your Long-Haired Cat',
    description: 'Tips and tricks to keep your feline friend\'s coat mat-free and beautiful.',
    author: 'Sarah Lee',
    publishDate: '8 December 2024',
    image: '/img/pets/long-haired-cat.jpeg',
  },
  {
    id: 10,
    category: 'Training advice',
    readTime: '8 min read',
    title: 'Leash Training Your Energetic Puppy',
    description: 'Turn chaotic walks into peaceful strolls with these effective leash training methods.',
    author: 'Mark Evans',
    publishDate: '5 December 2024',
    image: '/img/pets/puppy-on-leash.jpeg',
  },
  {
    id: 11,
    category: 'New pet',
    readTime: '5 min read',
    title: 'Bringing Home a Rescue Animal',
    description: 'How to make the transition smooth for you and your new companion.',
    author: 'John Smith',
    publishDate: '2 December 2024',
    image: '/img/pets/rescue-dog.jpeg',
  },
  {
    id: 12,
    category: 'Behaviour',
    readTime: '6 min read',
    title: 'Solving Common Litter Box Problems',
    description: 'Understand the reasons behind your cat\'s litter box avoidance and how to fix it.',
    author: 'Dr. Jane Doe',
    publishDate: '30 November 2024',
    image: '/img/pets/cat-litter-box.jpeg',
  },
  {
    id: 13,
    category: 'Pet care',
    readTime: '7 min read',
    title: 'Summer Safety: Keeping Pets Cool',
    description: 'Learn how to protect your pets from overheating during the hot summer months.',
    author: 'Sarah Lee',
    publishDate: '28 November 2024',
    image: '/img/pets/dog-in-summer.jpeg',
  },
  {
    id: 14,
    category: 'Health tips',
    readTime: '5 min read',
    title: 'Identifying Common Pet Allergies',
    description: 'Is your pet scratching non-stop? Learn to spot the signs of common allergies.',
    author: 'Dr. Emily Carter',
    publishDate: '25 November 2024',
    image: '/img/pets/scratching-dog.jpeg',
  },
  {
    id: 15,
    category: 'Training advice',
    readTime: '6 min read',
    title: 'Crate Training Made Easy',
    description: 'A step-by-step guide to making the crate a safe and happy place for your dog.',
    author: 'Mark Evans',
    publishDate: '22 November 2024',
    image: '/img/pets/dog-in-crate.jpeg',
  },
  {
    id: 16,
    category: 'New pet',
    readTime: '4 min read',
    title: 'Essential Supplies for Your New Kitten',
    description: 'A checklist of everything you need before bringing your new kitten home.',
    author: 'John Smith',
    publishDate: '20 November 2024',
    image: '/img/pets/new-kitten-supplies.jpeg',
  },
  {
    id: 17,
    category: 'Behaviour',
    readTime: '7 min read',
    title: 'How to Stop Your Dog From Barking Excessively',
    description: 'Understand why dogs bark and learn effective techniques to manage it.',
    author: 'Dr. Jane Doe',
    publishDate: '18 November 2024',
    image: '/img/pets/barking-dog.jpeg',
  },
  {
    id: 18,
    category: 'Pet care',
    readTime: '5 min read',
    title: 'Creating a Pet-Friendly Home Environment',
    description: 'Simple adjustments to make your home safer and more enjoyable for your pets.',
    author: 'Sarah Lee',
    publishDate: '15 November 2024',
    image: '/img/pets/pet-friendly-home.jpeg',
  },
  {
    id: 19,
    category: 'Training advice',
    readTime: '9 min read',
    title: 'Advanced Trick Training for Smart Dogs',
    description: 'Challenge your brilliant pup with these fun and impressive advanced tricks.',
    author: 'Mark Evans',
    publishDate: '12 November 2024',
    image: '/img/pets/dog-doing-tricks.jpeg',
  },
];

const categories = ['View all', 'Health tips', 'New pet', 'Behaviour', 'Training advice', 'Pet care'];

// --- SVG ICONS ---
const ImageIcon = ({className}: {className: string}) => (
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
const BlogPostCard = ({ post, onSelectPost }: { post: Post, onSelectPost: (post: Post) => void }) => (
  <div onClick={() => onSelectPost(post)} className="bg-white dark:bg-[#2b2b2b] rounded-lg overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
    <div className="relative w-full aspect-video bg-gray-200 dark:bg-[#3c3c3c] flex items-center justify-center overflow-hidden">
        {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
      <div className="font-semibold text-orange-500 dark:text-orange-400 flex items-center mt-auto">
        Read more <ArrowRightIcon />
      </div>
    </div>
  </div>
);

const FeaturedBlogPost = ({ post, onSelectPost }: { post: Post, onSelectPost: (post: Post) => void }) => (
  <div onClick={() => onSelectPost(post)} className="flex flex-col lg:flex-row gap-8 items-center group cursor-pointer">
    <div className="relative w-full lg:w-1/2 aspect-video bg-gray-200 dark:bg-[#3c3c3c] rounded-lg flex items-center justify-center overflow-hidden">
        {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
            <ImageIcon className="h-16 w-16" />
        )}
    </div>
    <div className="w-full lg:w-1/2">
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-x-4 mb-3">
        <span>{post.category}</span>
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{post.description}</p>
      <div className="font-semibold text-lg text-orange-500 dark:text-orange-400 flex items-center">
        Read more <ArrowRightIcon />
      </div>
    </div>
  </div>
);

const BlogList = ({ onSelectPost }: { onSelectPost: (post: Post) => void }) => {
  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);
  const [activeCategory, setActiveCategory] = useState('View all');

  const filteredPosts = activeCategory === 'View all'
    ? regularPosts
    : regularPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <header className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-orange-500 dark:text-orange-400 font-semibold mb-2">Blog</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Explore Our Latest Insights</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Your go-to source for pet care advice</p>
      </header>
      {featuredPost && <section className="mb-20"><FeaturedBlogPost post={featuredPost} onSelectPost={onSelectPost} /></section>}
      <section className="mb-12">
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          {categories.map(category => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 ${activeCategory === category ? 'bg-orange-500 text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3c3c3c]'}`}>
              {category}
            </button>
          ))}
        </div>
      </section>
      <main>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => <BlogPostCard key={post.id} post={post} onSelectPost={onSelectPost} />)}
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

// --- BLOG POST DETAIL PAGE COMPONENT ---
const BlogPostPage = ({ post, onGoBack }: { post: Post, onGoBack: () => void }) => (
  <div className="max-w-7xl mx-auto">
      <button onClick={onGoBack} className="mb-8 text-orange-500 dark:text-orange-400 hover:underline">
          &larr; Back to all articles
      </button>
      <header className="mb-12">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-x-4 mb-3">
              <span>{post.category}</span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              {post.title}
          </h1>
          <div className="flex items-center gap-x-8 text-sm text-gray-600 dark:text-gray-300">
              <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Written by</p>
                  <p>{post.author}</p>
              </div>
              <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Published on</p>
                  <p>{post.publishDate}</p>
              </div>
          </div>
      </header>

      <div className="relative w-full aspect-[16/9] bg-gray-200 dark:bg-[#3c3c3c] rounded-lg flex items-center justify-center mb-12 overflow-hidden">
          {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : (
              <ImageIcon className="h-24 w-24"/>
          )}
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-1/4 lg:sticky top-24 self-start">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Table of Contents</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  {['Section Two', 'Section Three', 'Section Four', 'Section Five', 'Section Six'].map(item => (
                      <li key={item}><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400">{item}</a></li>
                  ))}
              </ul>
          </aside>
          
          <article className="w-full lg:w-3/4 prose dark:prose-invert prose-lg max-w-none">
              <h2>Heading 2</h2>
              <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae, in aliquet pellentesque et. In magna enim vitae, ut quis. Tincidunt congue praesent, Viverra sit enim, Viverra aliquet augue vitae. Velit malesuada-fringilla.</p>
              <p>Mi tincidunt elit, id quisque in nulla. Id diam amet, sed id elit. Amet, morbi enim, mi sed. Faucibus aenean vestibulum felis. Dictum quis montes, ut sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vestibulum, amet, et, et. Tincidunt justo, in nulla. Id aliquet, egestas praesent.</p>

              <h3>Heading 3</h3>
              <p>Eget quis et enim, leo, feugiat pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis, Faucibus augue enim. Quis at habitant diam et. Suscipit tristique risus, et, diam. In in-varius scelerisque. Sodales curabitur quam nunc, et, nisl.</p>
              <p>Tristique odio senectus, non, posuere, omare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat. Ut ipsum, vel, et, pellentesque. Dignissim eu sed. Sit enim, suspendisse ut, et, in. Mauris, id aenean. Cursus aenean aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris suspendisse.</p>

              <h4>Heading 4</h4>
              <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque et ultricies ultricies. Duis est sit sed leo nisl. Blandit elit sagittis. Quisque tristique consequat quam sed. Nisl id scelerisque amet nulla purus, tincidunt.</p>
              
              <figure className="!my-12">
                  <div className="relative w-full aspect-video bg-gray-200 dark:bg-[#3c3c3c] rounded-lg flex items-center justify-center overflow-hidden">
                      {post.image ? (
                          // Re-using the main post image for this example
                          <img src={post.image} alt="Article illustration" className="w-full h-full object-cover" />
                      ) : (
                          <ImageIcon className="h-16 w-16" />
                      )}
                  </div>
                  <figcaption className="text-center text-sm italic text-gray-500 dark:text-gray-400 mt-2">Image caption goes here</figcaption>
              </figure>

              <h5>Heading 5</h5>
              <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque et ultricies ultricies. Duis est sit sed leo nisl. Blandit elit sagittis. Quisque tristique consequat quam sed. Nisl id scelerisque amet nulla purus, tincidunt.</p>
              
              <blockquote className="border-l-4 border-orange-500 pl-4 italic my-8">
                  <p>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci. Tincidunt porttitor tempus."</p>
              </blockquote>

              <p>Eget quis et enim, leo, feugiat pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis, Faucibus augue enim. Quis at habitant diam et. Suscipit tristique risus, et, diam. In in-varius scelerisque. Sodales curabitur quam nunc, et, nisl.</p>
          </article>
      </div>
  </div>
);


// --- MAIN PAGE COMPONENT (Handles navigation) ---
export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const handleGoBack = () => {
    setSelectedPost(null);
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 dark:bg-[#1a1a1a] min-h-screen text-gray-800 dark:text-gray-200 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {selectedPost ? (
          <BlogPostPage post={selectedPost} onGoBack={handleGoBack} />
        ) : (
          <BlogList onSelectPost={handleSelectPost} />
        )}
      </div>
    </div>
    </>
  );
}