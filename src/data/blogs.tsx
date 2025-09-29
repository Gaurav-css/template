import React from 'react';
// import Image from 'next/image';

export type Blog = {
  id: string | number;
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
    author: 'Nitik Kalra',
    publishDate: '10 August 2025',
    image: '/blog1.2.png',
    content: (
    <>
      {/* === IMAGE 1: Stressed person with phone === */}
      <figure className="my-8">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src="/blog1.1.png"
            alt="A person looking stressed surrounded by multiple smartphones"
            className="object-cover w-full h-full"
          />
        </div>
      </figure>

      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">We can order a takeaway with a single tap, book a train to Manchester in seconds, and manage our entire lives from our phones. Everything around us is designed for streamlined, intelligent living.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">But when it comes to caring for that furry family member curled up beside you? Are you still juggling a crumpled vaccination card, half-forgotten phone reminders, and those late-night Google searches when something seems off?</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">It's not about lacking love for your pet. The real problem is trying to manage their care across a dozen different apps and systems. One app for reminders, another for vet records, a third for booking walks. It creates chaos, not clarity.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Your pet deserves better than this scattered approach to their wellbeing.</p>

      <h3 className='text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white'>Welcome to Smarter Pet Parenting with Hooman Group</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6"><span className='font-bold text-gray-800 dark:text-gray-100'>Hooman Group</span> is there to solve the fragmented mess of pet care which is stopping you to become a Smarter pet parent. You don’t have to piece together advice from random internet forums or wait until morning to get answers.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">At its core is <span className='font-bold text-gray-800 dark:text-gray-100'>Ezra</span>, your personal AI companion designed to know your pet as well as you do and be there whenever you need support.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Ezra is your pet's advocate and your peace of mind, all rolled into one intelligent assistant.</p>

      {/* === IMAGE 2: Woman showing Hooman app === */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden h-full">
          <img
            src="/blog1.2.png"
            alt="A smiling woman holding a phone displaying the Hooman app"
            className="object-contain w-full h-full -mt-16"
          />
        </div>
        <figcaption className='-mt-32 text-center text-gray-600 dark:text-gray-400 font-semibold'>Your Pet's Entire Care in One App</figcaption>
      </figure>

      <h4 className='text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white'>How Ezra will make you a Smarter Pet Parent:</h4>
      <ul className="list-disc list-outside space-y-4 pl-5 mb-8 text-lg text-gray-600 dark:text-gray-300">
        <li><strong className="text-gray-800 dark:text-gray-100">Get Instant, Personalised Answers Anytime:</strong> Have a concern at 2 AM? Just ask Ezra. Because it knows your pet's breed, age, and health history, you get specific advice tailored to your situation—not generic responses that leave you guessing.</li>
        <li><strong className="text-gray-800 dark:text-gray-100">Enjoy Everyday Peace of Mind:</strong> Stop worrying about what you might be missing. Ezra provides helpful alerts about everything from seasonal hazards to breed-specific health considerations, creating a safety net of knowledge around your pet.</li>
        <li><strong className="text-gray-800 dark:text-gray-100">Walk Into Vet Visits Prepared:</strong> Transform those stressful appointments into productive conversations. Ezra helps organise your pet's health timeline, tracks symptoms you might forget to mention, and suggests the right questions to ask your vet.</li>
        <li><strong className="text-gray-800 dark:text-gray-100">Make Smart Decisions About Pet Insurance:</strong> Remove the guesswork from important financial choices. Ezra helps you understand and compare pet insurance options based on your pet's actual needs, making a complex decision much clearer.</li>
        <li><strong className="text-gray-800 dark:text-gray-100">Access Expert Help When You Need It:</strong> Connect with veterinary professionals for online consultations directly through the app. Get professional guidance without the stress of unnecessary vet clinic visits.</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Want to experience personalised pet care? Join the growing community of Smarter Pet Parents on the Hooman waitlist.</p>

      {/* === IMAGE 3 & 4: App screenshots === */}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <figure>
          <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
            <img
              src="/blog1.3.png"
              alt="Hooman app interface showing features"
              className="object-contain p-4 w-full h-full"
            />
          </div>
        </figure>
        <figure>
          <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
            <img
              src="/blog1.4.png"
              alt="Ezra AI chat interface on a smartphone"
              className="object-contain p-4 w-full h-full"
            />
          </div>
        </figure>
      </div>

      <h3 className='text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white'>Less Stress, More Quality Time</h3>
      <blockquote className='text-xl italic text-gray-700 dark:text-gray-300 border-l-4 border-[#ED6C35] pl-6 my-8'>
        "You know the best thing about getting your pet’s life in order? It’s not just about them. It’s about you, too. Suddenly, you’ve got less stress on your plate and more time for what actually matters."
      </blockquote>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">With Hooman Group and Ezra on your side you're free to enjoy the extra cuddles, longer walks, and simple joy of your pet's companionship.</p>
      <blockquote className='text-xl italic text-gray-700 dark:text-gray-300 border-l-4 border-[#ED6C35] pl-6 my-8'>
        It's time to step away from the scattered, stressful approach to pet care and embrace the intelligent partner you and your pet have been waiting for.
      </blockquote>

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
      
      <div className="text-center my-12">
        <a href="/#join-us" className='inline-block bg-[#ED6C35] text-white font-bold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition-all no-underline'>
          Ready to transform your pet parenting experience? Join the waitlist now!
        </a>
      </div>

      {/* === READ NEXT SECTION === */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Continue Reading</h4>
        <a href="/blog/2" className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-lg py-3 px-8 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all no-underline">
          Read Next Blog &rarr;
        </a>
      </div>
    </>
    ),
  },
  {
    id: '2',
    title: 'Why Pet Care is Important Today: A Comprehensive Guide',
    description: 'In our rapidly evolving world, the importance of proper pet care has never been more critical. From emerging health challenges to groundbreaking technological advances, understanding why modern pet care matters is essential for every pet parent.',
    category: 'Pet Health & Wellness',
    readTime: '12 min read',
    author: 'Prayas Ahuja',
    publishDate: '20 August 2025',
    image: '/blog2.1.png',
    content: (
    <>
      <figure className="my-8">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src="/blog2.1.png"
            alt="Pet parent caring for their cat and dog"
            className="object-cover w-full h-full"
          />
        </div>
      </figure>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Evolution of Pet Care</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">The landscape of pet care has transformed dramatically over the past decade. What once consisted of basic feeding and occasional veterinary visits has evolved into a sophisticated ecosystem of preventive medicine, behavioural understanding, and cutting-edge technology. Today's pet parents face unique challenges that require a more comprehensive approach to animal welfare.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">According to the Pet Food Manufacturers Association's (PFMA) 2024 report, 62% of UK households own at least one pet, representing 16.7 million families. This statistic alone underscores the massive responsibility we collectively bear in ensuring proper pet care standards.</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Deepening Human-Animal Bond</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">The relationship between humans and their pets has evolved from utility-based companionship to genuine family membership. Research published in the Journal of Applied Animal Welfare Science demonstrates that pets now serve multiple roles: emotional support providers, stress reducers, and even health monitors for their human companions.</p>

      <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 my-8 shadow-md">
        <h5 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Mental Health Benefits</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Reduced cortisol levels and blood pressure</li>
          <li>Decreased feelings of loneliness and depression</li>
          <li>Increased oxytocin production (the "bonding hormone")</li>
          <li>Enhanced social interaction and community connection</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-[#ED6C35] pl-4">Dr. Alan Beck, Director of the Center for the Human-Animal Bond at Purdue University, notes that "the therapeutic value of pets has been scientifically validated across multiple studies, making proper pet care not just an animal welfare issue, but a public health imperative."</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Emerging Health Challenges</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Today's pets face health challenges that were virtually unknown a generation ago. Environmental factors, lifestyle changes, and genetic predispositions have created a complex web of health concerns that require proactive management.</p>

      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">Obesity Epidemic</h4>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">In the UK, the PDSA's 2023 PAW Report highlights a major pet obesity crisis, with veterinarians estimating that 46% of dogs and 34% of cats are overweight or obese. This epidemic mirrors human obesity trends and carries similar health consequences: diabetes, arthritis, heart disease, and reduced lifespan.</p>

      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">Environmental Toxins</h4>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Modern pets are exposed to environmental toxins at unprecedented levels. From household chemicals to air pollution, these exposures contribute to increased cancer rates, respiratory issues, and autoimmune disorders. The Veterinary Cancer Society estimates that cancer now affects 1 in 4 dogs and 1 in 5 cats.</p>

      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">Behavioural Disorders</h4>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Anxiety, aggression, and compulsive disorders in pets have increased significantly. The British Veterinary Association (BVA) attributes this rise to urbanisation, reduced exercise, and changes in family dynamics. Proper behavioural care is now recognised as essential to overall pet health.</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Technology Revolution in Pet Care</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 shadow-md">
          <h5 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Wearable Health Monitors</h5>
          <p className="text-gray-600 dark:text-gray-300">Devices like the UK-based PitPat, or the internationally known FitBark and Whistle, track activity levels, sleep patterns, and vital signs, providing early warning signs of health issues.</p>
        </div>
        <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 shadow-md">
          <h5 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Telemedicine</h5>
          <p className="text-gray-600 dark:text-gray-300">Virtual consultations have made veterinary expertise more accessible, particularly for routine check-ups and follow-up care.</p>
        </div>
      </div>
      
      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">Artificial Intelligence in Diagnostics</h4>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">AI-powered diagnostic tools can now analyse X-rays, detect skin conditions, and even predict health issues before symptoms appear. Companies like Vetster and VetTech are pioneering AI applications that assist veterinarians in making more accurate diagnoses faster than ever before.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-[#ED6C35] pl-4">Dr. Michael Petty, a veterinary technologist, explains: "AI doesn't replace veterinary expertise; it enhances it. We can now catch diseases in their earliest stages, when treatment is most effective and least invasive."</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Economic Reality of Pet Care</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">The pet care industry has grown into a £8 billion market in the UK alone, with global spending exceeding £200 billion annually. This growth reflects not just increased pet ownership, but also elevated standards of care and longer pet lifespans.</p>
      
      <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 my-8 shadow-md">
        <h5 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Average Annual Pet Care Costs (UK)</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Dogs: £1,200 - £2,000</li>
          <li>Cats: £800 - £1,500</li>
          <li>Emergency care: £500 - £5,000+</li>
          <li>Preventive care: £200 - £500</li>
        </ul>
      </div>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">However, preventive care significantly reduces long-term costs. The British Veterinary Association reports that every £1 spent on preventive care saves an average of £4 in emergency treatment costs.</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">A Global Perspective on Animal Welfare</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Pet care standards vary dramatically worldwide, but global awareness of animal welfare is increasing. The World Animal Protection organisation ranks countries based on their animal welfare legislation and enforcement, with the UK, Germany, and Sweden leading the way.</p>
      
      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">International Standards</h4>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">The Five Freedoms of Animal Welfare, established by the Farm Animal Welfare Council, now serve as the global standard for pet care:</p>
      <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6 pl-4">
        <li>Freedom from hunger and thirst</li>
        <li>Freedom from discomfort</li>
        <li>Freedom from pain, injury, or disease</li>
        <li>Freedom to express normal behaviour</li>
        <li>Freedom from fear and distress</li>
      </ol>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">These principles guide modern pet care practices and inform legislation worldwide, creating a framework for responsible pet ownership that transcends cultural boundaries.</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Preventive Care Revolution</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Modern veterinary medicine has shifted from reactive treatment to proactive prevention. This paradigm shift has dramatically improved pet health outcomes and quality of life.</p>
      
      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">Early Detection Technologies</h4>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">Advanced diagnostic tools can now detect diseases years before symptoms appear. Blood tests can identify genetic predispositions, while imaging technology can spot tumours when they're still treatable. The key is regular health monitoring and age-appropriate screening.</p>
      
      <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 my-8 shadow-md">
        <h5 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Essential Preventive Care Schedule</h5>
        <div className="space-y-3 text-gray-600 dark:text-gray-300">
          <p><span className="font-semibold text-gray-800 dark:text-gray-100">Puppies/Kittens (0-1 year):</span> Monthly vet visits, vaccination series, spaying/neutering</p>
          <p><span className="font-semibold text-gray-800 dark:text-gray-100">Adult pets (1-7 years):</span> Annual comprehensive exams, dental cleanings, parasite prevention</p>
          <p><span className="font-semibold text-gray-800 dark:text-gray-100">Senior pets (7+ years):</span> Bi-annual exams, blood work, specialised senior care protocols</p>
        </div>
      </div>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Future of Pet Care</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">As we look ahead, several trends are shaping the future of pet care:</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4"><span className="font-semibold text-gray-800 dark:text-gray-100">Personalised Medicine:</span> Genetic testing will enable customised treatment plans based on individual pet DNA profiles.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4"><span className="font-semibold text-gray-800 dark:text-gray-100">Regenerative Therapies:</span> Stem cell treatments and tissue engineering will revolutionise treatment for chronic conditions.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4"><span className="font-semibold text-gray-800 dark:text-gray-100">Smart Homes:</span> IoT devices will monitor pet health continuously, alerting owners to changes in behaviour or vital signs.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6"><span className="font-semibold text-gray-800 dark:text-gray-100">Sustainable Practices:</span> Eco-friendly pet products and sustainable veterinary practices will become standard.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6 italic border-l-4 border-[#ED6C35] pl-4">Dr. Jennifer Coates, veterinary advisor and author, predicts: "The next decade will see pet care become as sophisticated as human healthcare, with personalised treatment plans, predictive analytics, and seamless integration of technology into daily pet care routines."</p>

      <h3 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Conclusion: Our Responsibility as Pet Parents</h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">The importance of proper pet care today extends far beyond basic animal welfare. It encompasses public health, environmental stewardship, and our collective responsibility to the animals who enrich our lives immeasurably.</p>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">As we've explored, modern pet care requires a multifaceted approach: embracing technology, prioritising preventive medicine, understanding behavioural needs, and staying informed about emerging health challenges. The investment we make in our pets' wellbeing pays dividends not only in their health and happiness but in our own quality of life.</p>
      
      <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 my-8 shadow-md">
        <h5 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Takeaways</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Modern pets face unique health challenges requiring proactive care</li>
          <li>Technology is revolutionising pet health monitoring and treatment</li>
          <li>Preventive care is more cost-effective than reactive treatment</li>
          <li>The human-animal bond has profound health benefits for both species</li>
          <li>Global standards for animal welfare continue to evolve and improve</li>
        </ul>
      </div>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">The question isn't whether we can afford to provide excellent pet care—it's whether we can afford not to. In an era where pets are family members, where technology makes better care possible, and where the benefits of the human-animal bond are scientifically proven, proper pet care isn't just important—it's essential.</p>
      
      <hr className="my-12 border-gray-200 dark:border-gray-700"/>

      <h4 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">References</h4>
      <div className="bg-white dark:bg-[#2b2b2b] rounded-xl p-6 my-8 shadow-md">
        <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <li>Pet Food Manufacturers Association. (2024). Pet Population Report.</li>
          <li>Journal of Applied Animal Welfare Science. (2023). "The Human-Animal Bond in Modern Society."</li>
          <li>PDSA. (2023). PAW (Pet Animal Wellbeing) Report.</li>
          <li>Veterinary Cancer Society. (2024). "Cancer in Companion Animals."</li>
          <li>British Veterinary Association. (2024). "Preventive Care Cost Analysis."</li>
          <li>World Animal Protection. (2024). "Global Animal Welfare Index."</li>
          <li>Farm Animal Welfare Council. "Five Freedoms of Animal Welfare."</li>
        </ol>
      </div>

      {/* === READ NEXT SECTION === */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Continue Reading</h4>
        <a href="/blog/1" className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-lg py-3 px-8 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all no-underline">
          Read Previous Blog &larr;
        </a>
      </div>
    </>
    ),
  }
];