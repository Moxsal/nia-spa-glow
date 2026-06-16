import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import HomeServiceSection from "@/components/HomeServiceSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <VideoShowcase />
        <SpecialOffersSection />
        <HomeServiceSection />
        <GoogleReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
