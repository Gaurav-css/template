// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <ScrollToTop />
          <Footer />   {/* ✅ Add Footer here */}
        </ThemeProvider>
      </body>
    </html>
  )
}
