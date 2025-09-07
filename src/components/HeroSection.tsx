import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const images = [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/img4.png',
    '/img5.png',
    '/img6.png',
    '/img7.png',
    '/img8.png',
    '/img9.png',
    '/img10.png',
    '/img11.png',
    '/img12.png',
    '/img13.png',
    '/img14.png',
    '/img15.png',    
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The main grid now has vertical padding for better spacing on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-16 lg:py-0">
          
          {/* --- Left Column: Text Content --- */}
          {/* Removed fixed padding from here as it's now on the parent grid */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-white">
              Revolutionising Pet Care with <span className="text-orange-500">AI Technology</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
              Experience the future of pet care with Hooman Pets. Our AI-powered
              app ensures your furry friends receive the best care tailored to their
              needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-transform duration-300 hover:scale-105">
                Join
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>

          {/* --- Right Column: Image Gallery (Now visible on all screens) --- */}
          {/* KEY CHANGE: Removed 'hidden' class and made it a flex container by default */}
          <div className="flex justify-center items-center h-full">
            {/* The height is now responsive: shorter on mobile, taller on desktop */}
            <div className="relative h-[450px] md:h-[600px] w-full max-w-sm md:max-w-lg overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <div className="absolute inset-0 grid grid-cols-3 gap-4 animate-scroll">
                {[...images, ...images].map((src, index) => (
                  <div key={index} className="aspect-w-1 aspect-h-1">
                    <img
                      src={src}
                      alt={`Pet image ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;