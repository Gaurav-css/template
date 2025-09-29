import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import Pricing from '@/components/Pricing';
import FAQSection from '@/components/FAQSection';
import Community from '@/components/Community';
import type { Metadata } from 'next';
// ✅ DYNAMIC METADATA FOR HOMEPAGE
export const metadata: Metadata = {
  title: 'Hooman Group', // This will become "Contact Us | Hooman Group"
  description: 'Get in touch with the Hooman Group team. We are here to help with any questions about our pet care platform.',
  openGraph: {
      // You can override specific OG tags here if needed
      title: ' Hooman Group',
  }
};


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <Testimonials />
      <BlogSection />
      <Pricing />
      <FAQSection />
      <Community />
    </>
  );
}