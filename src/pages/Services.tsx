import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import HomeServiceSection from "@/components/HomeServiceSection";
import VideoShowcase from "@/components/VideoShowcase";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ServicesSection />
        <VideoShowcase
          title="See Our Treatments in Action"
          subtitle="Hands-on craft, clean spaces and visible care."
        />
        <HomeServiceSection />
        <SpecialOffersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
