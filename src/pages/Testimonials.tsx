import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <GoogleReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
