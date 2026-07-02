import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import HomeServiceSection from "@/components/HomeServiceSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ServicesSection />
        <HomeServiceSection />
        <SpecialOffersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
