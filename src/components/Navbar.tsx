'use client';

import { useState, useRef } from 'react';
import { useTheme } from './ThemeProvider'; 
import { 
  ChevronDown, Menu, X, Box, BarChart, Zap, Code, HelpCircle, 
  Mail, Info, Newspaper, Shield, Star, Bot, Activity, Eye, Users, Heart, 
  MessageCircle, Bell, FileText, Share2, Lock, Play, User,
  Sun, Moon 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isMobileFeaturesDropdownOpen, setIsMobileFeaturesDropdownOpen] = useState(false);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featuresTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#' },
  ];
  const dropdownLinks = [
    { name: 'Blog', href: '#', icon: Newspaper },
    { name: 'Documentation', href: '#', icon: Code },
    { name: 'Help Center', href: '#', icon: HelpCircle },
  ];
  const featuresData = {
    'Explore More': [
      { name: 'Ezra AI', description: 'Advanced AI that can enhance pet care.', icon: Bot, href: '#' },
      { name: 'Care Tracking', description: 'Easily monitor your pet\'s health and routines.', icon: Activity, href: '#' },
      { name: 'Vet Insights', description: 'Access professional advice at your fingertips.', icon: Eye, href: '#' },
      { name: 'Community Support', description: 'Join fellow pet parents in our hub.', icon: Users, href: '#' }
    ],
    'Why Choose Us': [
      { name: 'Trusted Technology', description: 'Innovation you can trust for pet care.', icon: Shield, href: '#' },
      { name: 'Personalized Care', description: 'Tailored routines for your pet\'s needs.', icon: Heart, href: '#' },
      { name: 'Expert Vets', description: 'Connect with trusted veterinary professionals.', icon: User, href: '#' },
      { name: 'Real Stories', description: 'Hear from real happy pet parents.', icon: MessageCircle, href: '#' }
    ],
    'Latest Insights': [
      { name: 'Pet Care', description: 'Read our latest articles and tips.', icon: FileText, href: '#' },
      { name: 'FAQs', description: 'Find answers to common questions.', icon: HelpCircle, href: '#' },
      { name: 'Social Media', description: 'Follow us for updates and fun content.', icon: Share2, href: '#' },
      { name: 'Newsletter', description: 'Stay updated with our latest news.', icon: Bell, href: '#' }
    ],
    'More Resources': [
      { name: 'Blog', description: 'Explore our articles for pet care tips.', icon: Newspaper, href: '#' },
      { name: 'Terms & Conditions', description: 'Understand our policies and practices.', icon: FileText, href: '#' },
      { name: 'Privacy Policy', description: 'Learn how we protect your information.', icon: Lock, href: '#' },
      { name: 'Get Started', description: 'Join our community today.', icon: Play, href: '#' }
    ]
  };
  const mobileMenuSections = [
    {
      title: 'Explore Our App',
      links: [
        { name: 'Join Us', href: '#', icon: Zap },
        { name: 'Contact Us', href: '#', icon: Mail },
        { name: 'About Us', href: '#', icon: Info },
      ]
    },
    {
      title: 'Community Highlights',
      links: [
        { name: 'Events', href: '#', icon: Star },
        { name: 'Partners', href: '#', icon: BarChart },
        { name: 'Careers', href: '#', icon: Box },
      ]
    },
    {
      title: 'Latest from Us',
      links: [
        { name: 'Feedback', href: '#', icon: Mail },
        { name: 'Privacy Policy', href: '#', icon: Shield },
      ]
    }
  ];

  const handleDropdownEnter = () => { if (leaveTimeout.current) clearTimeout(leaveTimeout.current); setIsDropdownOpen(true); };
  const handleDropdownLeave = () => { leaveTimeout.current = setTimeout(() => setIsDropdownOpen(false), 200); };
  const handleFeaturesDropdownEnter = () => { if (featuresTimeout.current) clearTimeout(featuresTimeout.current); setIsFeaturesDropdownOpen(true); };
  const handleFeaturesDropdownLeave = () => { featuresTimeout.current = setTimeout(() => setIsFeaturesDropdownOpen(false), 200); };
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 font-sans border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#">
                <img 
                 src="/Logo.png" 
                 alt="Hooman Pets Logo" 
                 className="h-14 w-auto" 
                />
              </a>
            </div>


            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium relative group transition-colors">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </a>
              ))}

              <div className="relative" onMouseEnter={handleFeaturesDropdownEnter} onMouseLeave={handleFeaturesDropdownLeave}>
                <button className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center group focus:outline-none transition-colors">
                  <span>Features</span>
                  <ChevronDown className={`ml-1 h-5 w-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-white transition-all duration-300 ${isFeaturesDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 w-screen max-w-5xl rounded-xl shadow-2xl bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isFeaturesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="p-8">
                        <div className="grid grid-cols-4 gap-8">
                            {Object.entries(featuresData).map(([sectionTitle, items]) => (
                                <div key={sectionTitle}>
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">{sectionTitle}</h3>
                                    <div className="space-y-3">
                                        {items.map((item) => (
                                            <a key={item.name} href={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                                                <item.icon className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-500">{item.name}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{item.description}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>

              <div className="relative" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                <button className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center group focus:outline-none transition-colors">
                  <span>Resources</span>
                  <ChevronDown className={`ml-1 h-5 w-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-white transition-all duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`absolute z-10 right-0 mt-3 w-56 rounded-xl shadow-2xl bg-white dark:bg-gray-800 ring-1 ring-black dark:ring-gray-700 ring-opacity-5 overflow-hidden transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="py-2">
                    {dropdownLinks.map((item) => (
                      <a key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span className="sr-only">Toggle theme</span>
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300">Join</a>
              <a href="#" className="bg-orange-600 text-white px-5 py-2.5 rounded-lg text-base font-medium hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-600/20">Sign In</a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="sr-only">Toggle theme</span>
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button type="button" onClick={handleMenuToggle} className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuToggle}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">Logo</a>
                <button onClick={handleMenuToggle} className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <span className="sr-only">Close menu</span><X className="h-6 w-6" />
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 pb-24">
                <div className="space-y-1">
                    {navLinks.map((link) => (
                      <a key={link.name} href={link.href} className="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium">{link.name}</a>
                    ))}
                    
                    {/* Mobile Features Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsMobileFeaturesDropdownOpen(!isMobileFeaturesDropdownOpen)}
                            className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium group transition-all duration-200"
                        >
                            <span>Features</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileFeaturesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${isMobileFeaturesDropdownOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div className="pt-2 space-y-4 pl-4">
                                {Object.entries(featuresData).map(([sectionTitle, items]) => (
                                <div key={sectionTitle}>
                                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 mb-2">{sectionTitle}</h4>
                                    <div className="space-y-1">
                                    {items.map((item) => (
                                        <a key={item.name} href={item.href} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-md text-sm">
                                        <item.icon className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div className="min-w-0 flex-1">
                                            <div className="font-medium text-gray-700 dark:text-gray-200">{item.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{item.description}</div>
                                        </div>
                                        </a>
                                    ))}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Resources Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md font-medium group transition-all duration-200"
                        >
                            <span>Resources</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${isMobileDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="pt-2 space-y-1">
                            {dropdownLinks.map((item) => (
                                <a key={item.name} href={item.href} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-md text-sm font-medium">
                                <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span>{item.name}</span>
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>

                {mobileMenuSections.map(section => (
                  <div key={section.title} className="mt-6">
                    <h3 className="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{section.title}</h3>
                    <div className="mt-2 space-y-1">
                      {section.links.map(link => (
                        <a key={link.name} href={link.href} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2.5 rounded-md font-medium group transition-all duration-200">
                          <link.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 transition-colors" />
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Featured Insights</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-32 rounded-md mt-2 flex items-center justify-center">
                        <ImageIcon className="h-10 w-10 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Essential advice for happy, healthy pets.</p>
                    <a href="#" className="text-sm font-semibold text-orange-600 hover:underline mt-2 inline-block">Read more</a>
                </div>
            </div>

            <div className="flex-shrink-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <a href="#" className="block w-full text-center py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Join</a>
                <a href="#" className="block w-full text-center py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-600">Sign In</a>
            </div>
        </div>
      </div>
    </>
  );
};

const ImageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export default Navbar;