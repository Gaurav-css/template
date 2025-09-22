import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import Pricing from '@/components/Pricing';
import FAQSection from '@/components/FAQSection';
import Community from '@/components/Community';

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