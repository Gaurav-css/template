
import { Analytics } from '@vercel/analytics/react';

import "./globals.css"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
// import { Analytics } from "@vercel/analytics/next"

const urbanist = Urbanist({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: 'Hooman Group', // Appends site name to page titles
    default: 'Hooman Group - Revolutionising Pet Care', // Default title for the homepage
  },
  description: 'Discover how Hooman Group transforms pet care with AI-driven insights, health tracking, and vet integrations. Your partner in pet wellness.',
  keywords: ['pet care', 'AI pet assistant', 'dog health', 'cat health', 'vet integration', 'Hooman Group'],
  authors: [{ name: 'Hooman Group Ltd.' }],
  openGraph: {
    title: 'Hooman Group - Revolutionising Pet Care',
    description: 'AI-driven insights for the best pet care.',
    url: 'https://www.hoomanpets.com/', // ❗️ REPLACE with your actual domain
    siteName: 'Hooman Group',
    // images: [
    //   {
    //     url: 'https://your-domain.com/og-image.png', // ❗️ MUST be an absolute URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'Hooman Group Logo and tagline',
    //   },
    // ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hooman Group - Revolutionising Pet Care',
    description: 'AI-driven insights for the best pet care.',
    images: ['https://your-domain.com/og-image.png'], // ❗️ MUST be an absolute URL
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
         <Analytics />
      </body>
    </html>
  )
}