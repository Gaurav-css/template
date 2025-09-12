'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Component for the horizontal parallax gallery
const HorizontalParallaxGallery = () => {
  const targetRef = useRef(null);

  // useScroll hook to track scroll progress on the target element.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // useTransform to map scroll progress to horizontal translation.
  // The end value is adjusted to '-70%' to ensure the full, more compact gallery
  // scrolls smoothly into view.
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-70%']);

  // New set of images with a vintage, "Postcards from Paris" feel.
  const cards = [
    {
      id: 1,
      title: 'Eiffel Tower',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 2,
      title: 'Louvre Museum',
      imageUrl: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
    },
    {
      id: 3,
      title: 'Parisian Cafe',
      imageUrl: 'https://images.unsplash.com/photo-1551823295-d3b2c585c575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    },
    {
      id: 4,
      title: 'Montmartre Street',
      imageUrl: 'https://images.unsplash.com/photo-1560240359-1a0670356e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 5,
        title: 'Street Artist',
        imageUrl: 'https://images.unsplash.com/photo-1520175480921-4edfa6957a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    },
    {
        id: 6,
        title: 'Love Lock Bridge',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    }
  ];

  // Pre-defined styles for rotation and vertical alignment to create a scattered look.
  // Margins are reduced to complement the smaller card sizes.
  const cardStyles = [
    { rotate: '-rotate-3', margin: 'mt-8 md:mt-12' },
    { rotate: 'rotate-2', margin: 'mb-6 md:mb-10' },
    { rotate: 'rotate-5', margin: 'mt-6 md:mt-8' },
    { rotate: '-rotate-2', margin: 'mb-4 md:mb-8' },
    { rotate: 'rotate-4', margin: 'mt-10 md:mt-16' },
    { rotate: '-rotate-3', margin: 'mb-8 md:mb-12' },
  ];

  return (
    // Changed background to a vintage off-white color.
    <section className="bg-[#F5F0E8]">
      {/* The scrollable section. Increased height to 500vh for a smoother scroll animation over a longer distance. */}
      <section ref={targetRef} className="relative h-[500vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* The horizontally moving container. Gaps are reduced for the smaller cards. */}
          <motion.div style={{ x }} className="flex items-center gap-8 lg:gap-16 px-4">
            {cards.map((card, index) => (
              // Each card is now styled to look like a vintage photograph.
              <div
                key={card.id}
                // Card dimensions are reduced for a smaller look.
                className={`relative w-[200px] h-[280px] md:w-[240px] md:h-[320px] flex-shrink-0 ${cardStyles[index % cardStyles.length].rotate} ${cardStyles[index % cardStyles.length].margin}`}
              >
                {/* This div creates the white "polaroid" border and shadow. */}
                <div className="bg-white p-2 md:p-3 rounded-md shadow-2xl h-full w-full transform-gpu transition-transform hover:scale-105">
                  <img
                      src={card.imageUrl}
                      alt={card.title}
                      // Image is set to cover the frame, with sepia and grayscale filters applied.
                      className="w-full h-full object-cover grayscale sepia-[.20]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

// To use this component in your Next.js page, make sure to mark the page as a client component
// by adding 'use client'; at the top of your page file (e.g., app/page.tsx).
// You will also need to install framer-motion: npm install framer-motion

export default HorizontalParallaxGallery;

