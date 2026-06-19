import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Navigation as NavIcon } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const GoogleReviewsSection = () => {
  return (
    <section className="py-20 bg-spa-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 text-spa-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-4">
            Find Us on Google
          </h2>
          <p className="text-lg text-spa-text-secondary max-w-2xl mx-auto">
            Visit our verified Google Business Profile, leave a review after your visit, or get directions for your next appointment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={BUSINESS.google.profile} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="pink" className="font-semibold">
              <ExternalLink className="mr-2" size={18} /> Visit Google Profile
            </Button>
          </a>
          <a href={BUSINESS.google.reviews} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-spa-sage text-spa-text-primary">
              <Star className="mr-2" size={18} fill="currentColor" /> Leave a Review
            </Button>
          </a>
          <a href={BUSINESS.google.directions} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-spa-sage text-spa-text-primary">
              <NavIcon className="mr-2" size={18} /> Get Directions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
