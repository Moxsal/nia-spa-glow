import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, Sparkles, Calendar } from "lucide-react";

const SpecialOffersSection = () => {
  const offers = [
    {
      icon: <Sparkles className="w-8 h-8 text-spa-gold" />,
      title: "New Client Special",
      originalPrice: "₦25,000",
      discountPrice: "₦18,000",
      discount: "30% OFF",
      description: "Perfect introduction package including consultation + choice of facial or body contouring session.",
      features: ["Free Consultation", "Choice of Service", "Skincare Sample Kit"],
      validUntil: "Valid until end of month",
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-spa-gold" />,
      title: "Glow Club Membership",
      originalPrice: "₦60,000/month",
      discountPrice: "₦45,000/month",
      discount: "25% OFF",
      description: "Monthly membership with 3 facials + 2 body treatments. Perfect for regular self-care.",
      features: ["3 Facials Monthly", "2 Body Treatments", "Priority Booking", "Member Discounts"],
      validUntil: "Limited memberships available"
    },
    {
      icon: <Gift className="w-8 h-8 text-spa-gold" />,
      title: "Couples Spa Day",
      originalPrice: "₦80,000",
      discountPrice: "₦65,000",
      discount: "Save ₦15K",
      description: "Romantic spa experience for two. Includes side-by-side treatments and refreshments.",
      features: ["Couples Massage", "Facial for Two", "Champagne & Snacks", "Private Suite"],
      validUntil: "Perfect for anniversaries"
    }
  ];

  return (
    <section className="py-20 bg-spa-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            Special Offers & Packages
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            Treat yourself to luxury for less. Limited-time offers designed to give you 
            the best value while experiencing our premium services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className={`relative bg-spa-card border-spa-sage-light/20 shadow-spa-medium hover:shadow-spa-strong transition-spa ${offer.popular ? 'ring-2 ring-spa-gold/50' : ''}`}>
              {offer.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-spa-gold text-spa-text-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardContent className="p-8">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-spa-gold-light rounded-full">
                    {offer.icon}
                  </div>
                  <Badge variant="outline" className="border-spa-gold text-spa-gold">
                    {offer.discount}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-spa-text-primary mb-4">
                  {offer.title}
                </h3>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-spa-sage">
                      {offer.discountPrice}
                    </span>
                    <span className="text-lg text-spa-text-secondary line-through">
                      {offer.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-spa-text-secondary italic">
                    {offer.validUntil}
                  </p>
                </div>

                {/* Description */}
                <p className="text-spa-text-secondary mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-spa-text-primary mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-spa-text-secondary">
                        <div className="w-2 h-2 bg-spa-gold rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${offer.popular 
                    ? 'bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary' 
                    : 'bg-spa-sage hover:bg-spa-sage-light text-spa-warm-white'
                  }`}
                  size="lg"
                >
                  Claim This Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-spa-warm-white rounded-2xl p-8 shadow-spa-strong max-w-2xl mx-auto">
            <Calendar className="w-12 h-12 text-spa-sage mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-spa-text-primary mb-4">
              Ready to Book?
            </h3>
            <p className="text-spa-text-secondary mb-6">
              These offers are limited time only. Don't miss out on experiencing luxury 
              wellness at unbeatable prices.
            </p>
            <Button size="lg" className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold">
              Book Now & Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;