import "./globals.css"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ 
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-urbanist",
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
    <html lang="en" suppressHydrationWarning className={urbanist.variable}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
