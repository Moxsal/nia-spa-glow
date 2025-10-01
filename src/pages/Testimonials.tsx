import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
