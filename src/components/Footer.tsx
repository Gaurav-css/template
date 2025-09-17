"use client";

import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Heart,
  ChevronRight,
} from "lucide-react";

// ✅ Custom X (Twitter) Icon
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    fill="currentColor"
    className="w-4 h-4"
    {...props}
  >
    <path d="M714.163 519.284L1160.89 0H1057.3L667.137 450.887 356.581 0H0l468.492 681.821L0 1226.27h103.592l410.021-482.588 329.525 482.588H1200L714.163 519.284zm-145.77 171.5l-47.568-68.034-378.985-542.27h162.977l305.799 437.96 47.568 68.033 400.733 573.136h-162.977l-327.547-469.825z" />
  </svg>
);

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Ezra AI", href: "#" },
        { name: "Hooman Care", href: "#" },
        { name: "Hooman Connect", href: "#" },
        { name: "Hooman Veterinary", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Download Application", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Use", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "X", icon: XIcon, href: "https://x.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-white dark:bg-[#000000] border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* === YOUR LOGO IS HERE === */}
              <img
                src="/Logo.png"
                alt="Hooman Logo"
                className="h-12 mr-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/200x50/f97316/ffffff?text=Hooman";
                }}
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-sm leading-relaxed">
              Smarter pet parenting with AI-powered insights, health tracking,
              and personalized care recommendations for your furry family
              members.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <a
                  href="mailto:hello@hoomanpets.com"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
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
            <div key={index}>
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
            <div className="text-gray-600 dark:text-gray-300 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Hooman Group. All rights reserved.
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