// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.hoomanpets.com/'; // Replace with your domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: disallow crawling of a private area
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}