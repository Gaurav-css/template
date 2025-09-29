'use client';

import { useState,  useEffect } from 'react';
import Link from "next/link";
import Image from "next/image"; 

import {
    LucideIcon, Menu, X, Box, BarChart, Zap, Mail,
  Info, Star, Shield,  Sun, Moon
} from 'lucide-react';

type Theme = 'light' | 'dark';

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
  const { theme, setTheme, mounted } = useTheme();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/blog' },
    {name: 'Ezra AI', href: '/EzraAiPage' },
  ];

  const mobileMenuSections: MobileMenuSection[] = [
    {
      title: 'Explore Our App',
      links: [
        { name: 'Join Us', href: '/#community', icon: Zap },
        { name: 'Contact Us', href: '/Contact-Us', icon: Mail },
        { name: 'About Us', href: '/About', icon: Info },
      ]
    },
    {
      title: 'Community Highlights',
      links: [
        { name: 'Events', href: '', icon: Star },
        { name: 'Partners', href: '', icon: BarChart },
        { name: 'Careers', href: '/career', icon: Box },
      ]
    },
    {
      title: 'Latest from Us',
      links: [
        { name: 'Feedback', href: '', icon: Mail },
        { name: 'Privacy Policy', href: '/privacypolicy', icon: Shield },
      ]
    }
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  
  // ✅ 1. CREATE A DEDICATED FUNCTION TO CLOSE THE MENU
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/45 dark:bg-[#1c1c1e]/45 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/Logo.png" alt="Hooman Group Pets Logo" width={150} height={56} className="h-12 lg:h-14 w-auto" />
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium relative group transition-colors">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 w-[36px] h-[36px] rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] transition-colors">
                {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </button>
              <button
                title="Download App (Coming Soon)"
                className="inline-flex flex-col items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 disabled:cursor-not-allowed disabled:opacity-70"
                >
                <span className="text-sm font-semibold leading-tight">Download The App</span>
                <span className="text-[10px] font-light leading-tight opacity-90">Coming Soon</span>
              </button>
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
            {/* ✅ ATTACH THE closeMenu HANDLER HERE AS WELL */}
            <Link href="/" onClick={closeMenu}>
              <Image src="/Logo.png" alt="Hooman Group Pets Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <button onClick={handleMenuToggle} className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2B2B2B]">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 pb-24">
            <div className="space-y-1">
              {navLinks.map((link) => (
                // ✅ 2. ATTACH THE onClick HANDLER TO THE MAIN NAV LINKS
                <Link key={link.name} href={link.href} onClick={closeMenu} className="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2B2B2B] px-4 py-2 rounded-md font-medium">{link.name}</Link>
              ))}
              <div>
                {/* Commented out feature links */}
              </div>
            </div>

            {mobileMenuSections.map(section => (
              <div key={section.title} className="mt-6">
                <h3 className="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{section.title}</h3>
                <div className="mt-2 space-y-1">
                  {section.links.map(link => (
                    // ✅ 3. ATTACH THE onClick HANDLER TO THE OTHER SECTION LINKS
                    <Link key={link.name} href={link.href} onClick={closeMenu} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1c1c1e] px-4 py-2.5 rounded-md font-medium group transition-all duration-200">
                      <link.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 transition-colors" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 p-4 bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-700">
            <div className="relative w-full max-w-xs px-4">
              <button
                title="Download App (Coming Soon)"
                className="inline-flex flex-col items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 disabled:cursor-not-allowed disabled:opacity-70 w-80"
                >
                <span className="text-sm font-semibold leading-tight">Download The App</span>
                <span className="text-[10px] font-light leading-tight opacity-90">Coming Soon</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;