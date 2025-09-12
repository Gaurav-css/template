import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Layout from "@/components/Layout"
import Testimonials from "@/components/Testimonials"
import { ThemeProvider } from "@/components/ThemeProvider"
import ServicesSection from "@/components/ServicesSection"
import FeaturesSection from "@/components/FeaturesSection"
import BlogSection from "@/components/BlogSection"
import Pricing from '@/components/Pricing' 
import FAQSection from '@/components/FAQSection'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import OurStory from '@/components/pages/OurStory'



export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      < Layout/>
      
      <ServicesSection />
      <FeaturesSection />
      <Testimonials />
      <BlogSection />
      <Pricing />
      <FAQSection />
      <Community />
      <Footer />
      
      
      
    </div>
  )
}