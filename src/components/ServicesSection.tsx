import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Zap, Sun } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-spa-gold" />,
      title: "Manicure & Pedicure",
      description: "Luxury nail care to keep your hands & feet soft and beautiful. Professional treatments with premium products for lasting results.",
      features: ["Classic & Gel Polish", "Nail Art", "Hand & Foot Massage", "Cuticle Care"],
      duration: "45-90 mins",
      price: "From ₦8,000"
    },
    {
      icon: <Heart className="w-8 h-8 text-spa-gold" />,
      title: "Body Contouring",
      description: "Non-invasive sculpting treatments designed to enhance your shape and boost your confidence naturally.",
      features: ["Fat Reduction", "Skin Tightening", "Cellulite Treatment", "Body Sculpting"],
      duration: "60-90 mins",
      price: "From ₦25,000"
    },
    {
      icon: <Zap className="w-8 h-8 text-spa-gold" />,
      title: "Botox Services",
      description: "Safe, professional treatments for a youthful, refreshed look. Administered by certified professionals.",
      features: ["Wrinkle Reduction", "Lip Enhancement", "Face Lifting", "Anti-Aging"],
      duration: "30-45 mins",
      price: "From ₦35,000"
    },
    {
      icon: <Sun className="w-8 h-8 text-spa-gold" />,
      title: "Hyperpigmentation Treatment",
      description: "Even out skin tone and restore radiant skin with our advanced pigmentation correction treatments.",
      features: ["Dark Spot Removal", "Melasma Treatment", "Acne Scarring", "Skin Brightening"],
      duration: "45-75 mins",
      price: "From ₦15,000"
    }
  ];

  return (
    <section id="services" className="py-20 bg-spa-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            Our Signature Services
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            Discover our range of luxurious treatments designed to enhance your natural beauty 
            and provide the ultimate relaxation experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-medium hover:shadow-spa-strong transition-spa group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-spa-gold-light rounded-full group-hover:scale-110 transition-spa">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-spa-text-primary mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-spa-text-secondary mb-4">
                      <span className="bg-spa-sage-light px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                      <span className="font-semibold text-spa-gold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-spa-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-spa-text-primary mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-spa-text-secondary">
                        <div className="w-2 h-2 bg-spa-gold rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full border-spa-sage text-spa-sage hover:bg-spa-sage hover:text-spa-warm-white">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-spa-text-secondary mb-6">
            Need a customized treatment plan? Our experts are here to help.
          </p>
          <Button size="lg" className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;