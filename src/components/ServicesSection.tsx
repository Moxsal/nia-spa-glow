import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Zap, Sun, Flower2, Droplets, Moon, Leaf } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-spa-gold" />,
      title: "Manicure & Pedicure",
      description: "Give your hands and feet the care they deserve. We combine cleansing, exfoliation, and nail perfection to leave you polished, refreshed, and glowing.",
      tagline: "Perfect for polished elegance year-round"
    },
    {
      icon: <Flower2 className="w-8 h-8 text-spa-gold" />,
      title: "Facials & Skin Rejuvenation",
      description: "Tailored to your skin's needs, our facials deeply hydrate, brighten, and refresh — helping you achieve a natural, radiant glow.",
      tagline: "Perfect for glowing skin year-round"
    },
    {
      icon: <Heart className="w-8 h-8 text-spa-gold" />,
      title: "Body Contouring",
      description: "Sculpt and redefine your body with safe, non-invasive treatments that smooth and tone your natural curves. Confidence, reimagined.",
      tagline: "Your confidence, redefined"
    },
    {
      icon: <Sun className="w-8 h-8 text-spa-gold" />,
      title: "Hyperpigmentation Treatment",
      description: "Target dark spots and uneven skin tone with customized therapies that restore brightness and promote a balanced complexion.",
      tagline: "Gentle, safe, and effective"
    },
    {
      icon: <Droplets className="w-8 h-8 text-spa-gold" />,
      title: "Chemical Peels",
      description: "Unveil smooth, youthful-looking skin. Our gentle peels remove impurities and stimulate renewal for a fresh, revitalized glow.",
      tagline: "Professional-grade renewal treatments"
    },
    {
      icon: <Zap className="w-8 h-8 text-spa-gold" />,
      title: "Botox & Anti-Aging Care",
      description: "Soften fine lines and refresh your look with expert Botox treatments that enhance your natural beauty while keeping results subtle and refined.",
      tagline: "Natural results, expert precision"
    },
    {
      icon: <Moon className="w-8 h-8 text-spa-gold" />,
      title: "Relaxation & Wellness Rituals",
      description: "From soothing massages to calming spa therapies, our wellness rituals melt away stress and leave your body, mind, and soul restored.",
      tagline: "Complete mind, body, and soul restoration"
    },
    {
      icon: <Zap className="w-8 h-8 text-spa-gold" />,
      title: "Botox (100 units)",
      description: "Premium anti-aging treatment to smooth wrinkles and fine lines with precision. Achieve natural-looking, youthful results.",
      tagline: "Expert precision, lasting results",
      price: "₦250,000"
    },
    {
      icon: <Droplets className="w-8 h-8 text-spa-gold" />,
      title: "Advanced Chemical Peel",
      description: "Professional-grade exfoliation that removes dead skin, reduces pigmentation, and reveals smoother, brighter skin.",
      tagline: "Transform your skin texture",
      price: "₦120,000"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-spa-gold" />,
      title: "Full Body Waxing",
      description: "Complete hair removal for silky-smooth skin from head to toe. Professional technique ensures comfort and lasting results.",
      tagline: "Smooth, confident skin",
      price: "₦60,000"
    },
    {
      icon: <Heart className="w-8 h-8 text-spa-gold" />,
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deep muscle layers to release tension, relieve chronic pain, and promote healing.",
      tagline: "Relief from deep within",
      price: "₦40,000"
    },
    {
      icon: <Sun className="w-8 h-8 text-spa-gold" />,
      title: "Brightening Facial",
      description: "Specialized treatment to even skin tone, reduce dark spots, and enhance your natural radiance for a glowing complexion.",
      tagline: "Reveal your inner glow",
      price: "₦35,000"
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

                <p className="text-spa-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>

                {service.price && (
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-spa-gold-light text-spa-text-primary font-bold text-xl rounded-lg">
                      {service.price}
                    </span>
                  </div>
                )}

                <Button 
                  className="w-full bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold"
                  asChild
                >
                  <Link to="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-spa-text-secondary mb-6">
            Need a customized treatment plan? Our experts are here to help.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold"
            >
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;