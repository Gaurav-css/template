// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "hooman-group-website",
  description: "",
}

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
          {/* ✅ THIS IS THE GLOBAL CONTAINER FOR YOUR ENTIRE WEBSITE */}
          <main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}