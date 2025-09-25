import React from 'react';
import Image from 'next/image';


export type Blog = {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  author: string;
  publishDate: string;
  image?: string;
  content: React.ReactNode;
};

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'The App Overload: When More Tools Mean Less Care',
    description: 'Still juggling a dozen apps for your pet\'s care? Discover how a single, intelligent platform can reduce chaos and help you become a smarter pet parent.',
    category: 'General',
    readTime: '3 min read',
    author: 'Prayas Ahuja',
    publishDate: 'September 24, 2025',
    image: '/blog1.1.png',
    content: (
        <>
            {/* === IMAGE 1: Stressed person with phone === */}
            <figure className="my-8">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                        src="/blog1.1.png"
                        alt="A person looking stressed surrounded by multiple smartphones"
                        className="object-contain w-full h-full"
                    />
                </div>
            </figure>

            <p>We can order a takeaway with a single tap, book a train to Manchester in seconds, and manage our entire lives from our phones. Everything around us is designed for streamlined, intelligent living.</p>
            <br />
            <p>But when it comes to caring for that furry family member curled up beside you are you still juggling a crumpled vaccination card, half-forgotten phone reminders, and those late-night Google searches when something seems off?</p>
            <br />
            <p>It's not about lacking love for your pet. The real problem is trying to manage their care across a dozen different apps and systems. One app for reminders, another for vet records, a third for booking walks. It creates chaos, not clarity.</p>
            <br />
            <p>Your pet deserves better than this scattered approach to their wellbeing.</p>
            <br />
            <h3 className='text-2xl font-bold'>Welcome to Smarter Pet Parenting with Hooman Group</h3>
            <br />
            <p><span className='font-bold'>Hooman Group</span> is there to solve the fragmented mess of pet care which is stopping you to become a Smarter pet parent. You don’t have to piece together advice from random internet forums or wait until morning to get answers.</p>
            <br />
            <p>At its core is <span className='font-bold'>Ezra</span>, your personal AI companion designed to know your pet as well as you do and be there whenever you need support.</p>
            <br />
            <p>Ezra is your pet's advocate and your peace of mind, all rolled into one intelligent assistant.</p>

            {/* === IMAGE 2: Woman showing Hooman app === */}
            <figure className="my-8 flex flex-col items-center">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden h-full">
                    <img
                        src="/blog1.2.png"
                        alt="A smiling woman holding a phone displaying the Hooman app"
                        className="object-contain w-full h-full -mt-16"
                    />
                </div>
                <p className='-mt-32'>Your Pet's Entire Care in One App</p>
            </figure>

            <h4 className='text-2xl font-bold'>How Ezra will make you a Smarter Pet Parent:</h4>
            <br />
            <ul>
                <li><strong>Get Instant, Personalised Answers Anytime:</strong> Have a concern at 2 AM? Just ask Ezra. Because it knows your pet's breed, age, and health history, you get specific advice tailored to your situation—not generic responses that leave you guessing.</li>
                <br />
                <li><strong>Enjoy Everyday Peace of Mind:</strong> Stop worrying about what you might be missing. Ezra provides helpful alerts about everything from seasonal hazards to breed-specific health considerations, creating a safety net of knowledge around your pet.</li>
                <br />
                <li><strong>Walk Into Vet Visits Prepared:</strong> Transform those stressful appointments into productive conversations. Ezra helps organise your pet's health timeline, tracks symptoms you might forget to mention, and suggests the right questions to ask your vet.</li>
                <br />
                <li><strong>Make Smart Decisions About Pet Insurance:</strong> Remove the guesswork from important financial choices. Ezra helps you understand and compare pet insurance options based on your pet's actual needs, making a complex decision much clearer.</li>
                <br />
                <li><strong>Access Expert Help When You Need It:</strong> Connect with veterinary professionals for online consultations directly through the app. Get professional guidance without the stress of unnecessary vet clinic visits.</li>
            </ul>
            <br />
            <p>Want to experience personalised pet care? Join the growing community of Smarter Pet Parents on the Hooman waitlist.</p>

            {/* === IMAGE 3 & 4: App screenshots === */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <figure>
                    <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                         <img
                            src="/blog1.3.png"
                            alt="Hooman app interface showing features"
                            className="object-contain p-4 w-full h-full"
                        />
                    </div>
                </figure>
                <figure>
                    <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                        <img
                            src="/blog1.4.png"
                            alt="Ezra AI chat interface on a smartphone"
                            className="object-contain p-4 w-full h-full"
                        />
                    </div>
                </figure>
            </div>

            <h3 className='text-2xl font-bold'>Less Stress, More Quality Time</h3>
            <br />
            <blockquote className='text-xl text-gray-300'>"You know the best thing about getting your pet’s life in order? It’s not just about them. It’s about you, too. Suddenly, you’ve got less stress on your plate and more time for what actually matters."</blockquote>
            <br />
            <p>With Hooman Group and Ezra on your side you're free to enjoy the extra cuddles, longer walks, and simple joy of your pet's companionship.</p>
            <br />
            <blockquote>It's time to step away from the scattered, stressful approach to pet care and embrace the intelligent partner you and your pet have been waiting for.&quot;</blockquote>

            {/* === IMAGE 5: Woman playing with dog === */}
            <figure className="my-8">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                        src="/blog1.5.png"
                        alt="A woman playing with her golden retriever in a park"
                        className="object-cover w-full h-full"
                    />
                </div>
            </figure>
            
            <a href="/" className='font-bold text-blue-500 underline'>Ready to transform your pet parenting experience? Join the waitlist now and be a Smarter Pet Parent.</a>
        </>
    ),
  },
  
];
