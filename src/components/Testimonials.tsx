"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

// Data for the testimonials
const testimonialsData = [
  {
    quote: "I've been using the Hooman app for about six weeks now. As someone with a young Lhasa Apso, I really value having all health records in one place, it's much easier than rifling through old vet papers when I need vaccination dates or deworming reminders. The AI assistant gave me some useful guidance when my older dog went off his food, but I still rang my vet to be on the safe side.",
    name: "Charu Mongla",
    role: "Pet owner - Eva",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=SL"
  },
  {
    quote: "I have a rescue dog with severe anxiety issues, and being able to track his progress and connect with other owners dealing with similar challenges has been reassuring. The vet reminder feature saved me from missing his heartworm treatment last month. The interface is clean and straightforward to use, although I did have trouble uploading a video once.",
    name: "Lara Rachdi",
    role: "Pet owner - Milo",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=ME"
  },
  {
    quote: "I can easily share access with my dog walker and pet sitter, and they can update me with photos and notes throughout the day. The AI feature gave me some handy suggestions for training techniques, though I still prefer speaking to my trainer for serious issues.",
    name: "Niall O'Riordan",
    role: "Pet owner - Pixel",
    avatarUrl: "https://placehold.co/100x100/334155/e2e8f0?text=JP"
  }
  
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
        <div className="text-center -mt-6">
          <div className="inline-flex items-center gap-x-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 mb-16 animate-fade-in-up">
                    <MessageSquare className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                        <span>Reviews</span>
                    </div>
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