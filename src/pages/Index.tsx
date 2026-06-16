import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import GallerySection from "@/components/GallerySection";
import HomeServiceSection from "@/components/HomeServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoShowcase />
        <SpecialOffersSection />
        <GallerySection />
        <HomeServiceSection />
        <TestimonialsSection />
        <GoogleReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
