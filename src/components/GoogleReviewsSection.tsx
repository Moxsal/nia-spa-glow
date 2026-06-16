import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, ExternalLink, Navigation as NavIcon } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const highlights = [
  {
    name: "Adaeze O.",
    text: "Absolutely the best spa experience in Lekki. Gina and her team are gifted — my skin has never looked better.",
  },
  {
    name: "Tolu A.",
    text: "Booked a couples day and it was magical. Clean, calming, and so professional from start to finish.",
  },
  {
    name: "Chiamaka E.",
    text: "My go-to for hyperpigmentation treatment. Real results and an honestly luxurious atmosphere.",
  },
];

const GoogleReviewsSection = () => {
  return (
    <section className="py-20 bg-spa-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-spa-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-4">
            Loved by Our Guests on Google
          </h2>
          <p className="text-lg text-spa-text-secondary max-w-2xl mx-auto">
            Real stories from real clients. Read every review on our verified Google Business Profile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {highlights.map((r, i) => (
            <Card key={i} className="bg-spa-card border-spa-sage-light/20 shadow-spa-soft hover:shadow-spa-medium transition-spa">
              <CardContent className="p-6">
                <div className="flex gap-1 text-spa-gold mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-spa-text-secondary italic mb-4">"{r.text}"</p>
                <p className="text-spa-text-primary font-semibold">— {r.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={BUSINESS.google.reviews} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="pink" className="font-semibold">
              <Star className="mr-2" size={18} fill="currentColor" /> View Reviews
            </Button>
          </a>
          <a href={BUSINESS.google.profile} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-spa-sage text-spa-text-primary">
              <ExternalLink className="mr-2" size={18} /> Find Us on Google
            </Button>
          </a>
          <a href={BUSINESS.google.directions} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-spa-sage text-spa-text-primary">
              <NavIcon className="mr-2" size={18} /> Get Directions
            </Button>
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-spa-text-secondary text-sm">
          <MapPin size={16} className="text-spa-gold" /> {BUSINESS.address}
        </p>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
