import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Zap, Sun, Flower2, Droplets, Moon, Leaf } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-spa-gold" />,
      title: "Manicure & Pedicure",
      description: "Give your hands and feet the care they deserve. We combine cleansing, exfoliation, and nail perfection to leave you polished, refreshed, and glowing.",
    },
    {
      icon: <Flower2 className="w-8 h-8 text-spa-gold" />,
      title: "Facials & Skin Rejuvenation",
      description: "Tailored to your skin's needs, our facials deeply hydrate, brighten, and refresh — helping you achieve a natural, radiant glow.",
    },
    {
      icon: <Heart className="w-8 h-8 text-spa-gold" />,
      title: "Body Contouring",
      description: "Sculpt and redefine your body with safe, non-invasive treatments that smooth and tone your natural curves. Confidence, reimagined.",
    },
    {
      icon: <Sun className="w-8 h-8 text-spa-gold" />,
      title: "Hyperpigmentation Treatment",
      description: "Target dark spots and uneven skin tone with customized therapies that restore brightness and promote a balanced complexion.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-spa-gold" />,
      title: "Chemical Peels",
      description: "Unveil smooth, youthful-looking skin. Our gentle peels remove impurities and stimulate renewal for a fresh, revitalized glow.",
    },
    {
      icon: <Zap className="w-8 h-8 text-spa-gold" />,
      title: "Botox & Anti-Aging Care",
      description: "Soften fine lines and refresh your look with expert Botox treatments that enhance your natural beauty while keeping results subtle and refined.",
    },
    {
      icon: <Moon className="w-8 h-8 text-spa-gold" />,
      title: "Relaxation & Wellness Rituals",
      description: "From soothing massages to calming spa therapies, our wellness rituals melt away stress and leave your body, mind, and soul restored.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-spa-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            Our Spa Services
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            At Nia Spa Aesthetics, we believe self-care is more than a luxury — it's a lifestyle. 
            Explore our treatments, each designed to bring balance, beauty, and confidence. 🌿
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-medium hover:shadow-spa-strong transition-spa group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-spa-gold-light rounded-full group-hover:scale-110 transition-spa">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-spa-text-primary mb-4">
                  {service.title}
                </h3>

                <p className="text-spa-text-secondary mb-8 leading-relaxed">
                  {service.description}
                </p>

                <Button className="w-full bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold">
                  Book Now
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