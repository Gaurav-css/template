import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
// import Layout from "@/components/Layout"
import Testimonials from "@/components/Testimonials"
import { ThemeProvider } from "@/components/ThemeProvider"
import ServicesSection from "@/components/ServicesSection"
import FeaturesSection from "@/components/FeaturesSection"
import BlogSection from "@/components/BlogSection"
import Pricing from '@/components/Pricing' 
import FAQSection from '@/components/FAQSection'
import Community from '@/components/Community'

import Footer from '@/components/Footer'
// import OurStory from '@/app/ourstory/page'
import blog from '@/app/blog/page'
import TermsOfService from "./terms&services/page"
import ScrollToTop from "@/components/ScrollToTop";
import EzraAiPage from "./EzraAiPage/page"





export default function HomePage() {
  return (
    <div>
      
      <HeroSection />
      {/* < Layout/> */}
      
      <ServicesSection />
      <FeaturesSection />
      <Testimonials />
      <BlogSection />
      <Pricing />
      <FAQSection />
      <Community />
      
      
      
      
    </div>
  )
}