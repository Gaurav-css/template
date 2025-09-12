import React from 'react';
// import Link from 'next/link'; // Removed for standalone component compatibility
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  MapPin, 
  Heart,
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "AI Assistant", href: "/ai-assistant" },
        { name: "Vet Integration", href: "/vet-integration" },
        { name: "Mobile App", href: "/mobile-app" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Our Story", href: "/story" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Waitlist", href: "/waitlist" },
        { name: "Security", href: "/security" },
        { name: "FAQ", href: "/faq" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Data Security", href: "/data-security" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-white dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 gap-3">
              {/* SVG Logo */}
              <svg
                  className="w-10 h-10 text-gray-900 dark:text-white"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  {/* Paw pads */}
                  <circle cx="25" cy="28" r="12" />
                  <circle cx="50" cy="18" r="12" />
                  <circle cx="75" cy="28" r="12" />
                  {/* Heart-shaped main pad */}
                  <path d="M50 45 C 20 45, 15 80, 50 98 C 85 80, 80 45, 50 45 Z" />
              </svg>
              {/* Text */}
              <div className="flex flex-col">
                  <span className="text-3xl font-serif font-extrabold text-gray-900 dark:text-white">
                      Hooman
                  </span>
                  <span className="text-xs font-sans tracking-[0.2em] text-gray-500 dark:text-gray-400">
                      SMARTER PET PARENTING
                  </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-sm leading-relaxed">
              Smarter pet parenting with AI-powered insights, health tracking, and personalized care recommendations for your furry family members.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <a href="mailto:hello@hoomanpets.com" className="hover:text-orange-500 transition-colors duration-200">
                  hello@hoomanpets.com
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                <span>London, United Kingdom</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                      <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              © 2025 Hooman Group. All rights reserved.
            </div>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              <span>for pet parents everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

