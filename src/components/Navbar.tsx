'use client';

import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image"; // FIXED: Import Next.js Image component

// FIXED: Removed unused icons to prevent build warnings
import {
  Sparkles, LucideIcon, ChevronDown, Menu, X, Box, BarChart, Zap, Mail,
  Info, Star, Shield, Activity, Eye, Users, User, Sun, Moon
} from 'lucide-react';

type Theme = 'light' | 'dark';

type DropdownLink = {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

type MobileMenuSection = {
  title: string;
  links: {
    name: string;
    href: string;
    icon: LucideIcon;
  }[];
};

const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: Theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setThemeState(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return { theme, setTheme, mounted };
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const featuresTimeout = useRef<NodeJS.Timeout | null>(null);

  const { theme, setTheme, mounted } = useTheme();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  const featuresLinks: DropdownLink[] = [
    { name: 'Ezra AI', description: 'Advanced AI that can enhance pet care.', icon: Sparkles, href: '/EzraAiPage' },
    // FIXED: Escaped the apostrophe in "pet's"
    { name: 'Care Tracking', description: 'Easily monitor your pet&apos;s health and routines.', icon: Activity, href: '/CareTrack' },
    { name: 'Vet Insights', description: 'Access professional advice at your fingertips.', icon: Eye, href: '/vet-insights' },
    { name: 'Community Support', description: 'Join fellow pet parents in our hub.', icon: Users, href: '/community-support' }
  ];

  const mobileMenuSections: MobileMenuSection[] = [
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

  const handleDropdownEnter = (setter: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(true);
  };
  const handleDropdownLeave = (setter: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    timeoutRef.current = setTimeout(() => setter(false), 200);
  };
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileAccordion = (accordionName: string) => {
    setOpenMobileAccordion(openMobileAccordion === accordionName ? null : accordionName);
  };
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const DropdownContent = ({ items }: { items: DropdownLink[] }) => (
    <div className="p-4">
      <div className="space-y-2">
        {items.map((item) => (
          // FIXED: Replaced <a> with <Link> for internal navigation
          <Link key={item.name} href={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1c1c1e] transition-colors duration-200 group">
            <item.icon className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-500">{item.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/45 dark:bg-[#1c1c1e]/45 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                {/* FIXED: Replaced <img> with <Image> for performance */}
                <Image src="/Logo.png" alt="Hooman Pets Logo" width={150} height={56} className="h-12 lg:h-14 w-auto" />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium relative group transition-colors">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              ))}

              <div className="relative" onMouseEnter={() => handleDropdownEnter(setIsFeaturesDropdownOpen, featuresTimeout)} onMouseLeave={() => handleDropdownLeave(setIsFeaturesDropdownOpen, featuresTimeout)}>
                <button className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center group focus:outline-none transition-colors">
                  <span>Features</span>
                  <ChevronDown className={`ml-1 h-5 w-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-white transition-all duration-300 ${isFeaturesDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 w-screen max-w-sm rounded-xl shadow-2xl bg-white dark:bg-[#2B2B2B] ring-1 ring-black ring-opacity-5 dark:ring-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isFeaturesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <DropdownContent items={featuresLinks} />
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 w-[36px] h-[36px] rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] transition-colors">
                {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </button>
              <Link href="/auth" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                <User className="h-5 w-5" />
                <span>Login / Signup</span>
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 w-[36px] h-[36px] rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] transition-colors">
                {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </button>
              <button type="button" onClick={handleMenuToggle} className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] focus:outline-none">
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Panel */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuToggle}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-[#1A1A1A] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/">
              <Image src="/Logo.png" alt="Hooman Pets Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <button onClick={handleMenuToggle} className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2B2B2B]">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 pb-24">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] px-4 py-2 rounded-md font-medium">{link.name}</Link>
              ))}

              <div>
                <button onClick={() => toggleMobileAccordion('features')} className="w-full flex justify-between items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] px-4 py-2 rounded-md font-medium group transition-all duration-200">
                  <span>Features</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openMobileAccordion === 'features' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openMobileAccordion === 'features' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-2 pl-4">
                    <DropdownContent items={featuresLinks} />
                  </div>
                </div>
              </div>
            </div>

            {mobileMenuSections.map(section => (
              <div key={section.title} className="mt-6">
                <h3 className="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{section.title}</h3>
                <div className="mt-2 space-y-1">
                  {section.links.map(link => (
                    <Link key={link.name} href={link.href} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1c1c1e] px-4 py-2.5 rounded-md font-medium group transition-all duration-200">
                      <link.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 transition-colors" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 p-4 bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-700">
            <Link href="/login" className="block w-full text-center py-2.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300">
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;