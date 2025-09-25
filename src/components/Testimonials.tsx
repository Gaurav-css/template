"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Data for the testimonials
const testimonialsData = [
  {
    quote: "Ezra AI identified a subtle change in my dog's activity that led to an early diagnosis. It’s a game-changer for preventative care.",
    name: "Sarah L.",
    role: "Beta Tester & Dog Parent",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=SL"
  },
  {
    quote: "The ability to generate a concise, data-driven report for vet visits is incredibly powerful. This tool bridges the gap between owner observation and clinical data.",
    name: "Dr. Mark Evans, DVM",
    role: "Veterinary Advisor",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=ME"
  },
  {
    quote: "As a cat owner, tracking nuanced behaviors is difficult. Ezra AI helps me see patterns I would have otherwise missed. Highly recommended.",
    name: "James P.",
    role: "Beta Tester & Cat Parent",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=JP"
  },
  {
    quote: "The nutrition planner is fantastic. It takes the guesswork out of feeding time and ensures my pet gets a balanced diet tailored to her needs.",
    name: "Anna M.",
    role: "Early Adopter",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=AM"
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
  });

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white dark:bg-neutral-950 py-16 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-[48px] font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl -mt-10">
            Customer Testimonials
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Hooman Group Pets has transformed our pet care routine!
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full px-4 md:basis-1/2 lg:basis-1/3"
                >
                  {/* --- CARD STYLING UPDATED HERE --- */}
                  <div className="h-full flex flex-col rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-6">
                    <div className="flex-grow">
                      <Quote className="w-8 h-8 text-slate-300 dark:text-zinc-700" />
                      <p className="mt-4 text-slate-600 dark:text-zinc-300">&quot;{testimonial.quote}&quot;</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-x-4">
                      <img
                        className="h-12 w-12 rounded-full bg-slate-200 dark:bg-zinc-700 object-cover"
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-zinc-100">{testimonial.name}</p>
                        <p className="text-sm text-slate-500 dark:text-zinc-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/60 dark:bg-neutral-800/60 p-2 text-gray-700 dark:text-gray-200 shadow-md backdrop-blur-sm transition hover:scale-110 lg:left-4"
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/60 dark:bg-neutral-800/60 p-2 text-gray-700 dark:text-gray-200 shadow-md backdrop-blur-sm transition hover:scale-110 lg:right-4"
            onClick={scrollNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;