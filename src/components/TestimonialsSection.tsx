import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Adunni Olatunji",
      service: "Body Contouring",
      rating: 5,
      text: "Best spa experience in Lekki! My skin is glowing, and I felt so relaxed. The body contouring treatment exceeded my expectations. The staff was professional and made me feel comfortable throughout.",
      location: "Victoria Island"
    },
    {
      name: "Chioma Ikechukwu",
      service: "Hyperpigmentation Treatment",
      rating: 5,
      text: "I've struggled with dark spots for years. After just 3 sessions at Nia Spa, my skin tone has improved dramatically. The team really knows what they're doing!",
      location: "Ikoyi"
    },
    {
      name: "Fatima Ahmed",
      service: "Botox & Facial",
      rating: 5,
      text: "Professional, clean, and the results speak for themselves. I look 5 years younger! The botox treatment was painless and the facial left my skin feeling amazing.",
      location: "Lekki Phase 1"
    },
    {
      name: "Blessing Okafor",
      service: "Manicure & Pedicure",
      rating: 5,
      text: "The attention to detail is incredible. My nails have never looked better! The massage during the pedicure was so relaxing. This is now my go-to spa.",
      location: "Ajah"
    }
  ];

  return (
    <section className="py-20 bg-spa-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            Real experiences from real people. See why Nia Spa Aesthetics is 
            the most trusted wellness destination in Lekki.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-medium hover:shadow-spa-strong transition-spa">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-spa-gold text-spa-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-spa-text-secondary mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-spa-sage-light/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-spa-text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-spa-text-secondary">
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-spa-sage">
                        {testimonial.service}
                      </div>
                      <div className="text-xs text-spa-text-secondary">
                        Service
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-spa-warm-white rounded-full px-6 py-3 shadow-spa-soft">
            <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
            <span className="font-semibold text-spa-text-primary">4.8/5</span>
            <span className="text-spa-text-secondary">from 120+ Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;