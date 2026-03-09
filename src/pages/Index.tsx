import StickyHeader from "@/components/landing/StickyHeader";
import HeroSection from "@/components/landing/HeroSection";
import DifferentiatorsSection from "@/components/landing/DifferentiatorsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PartnersSection from "@/components/landing/PartnersSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <DifferentiatorsSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
