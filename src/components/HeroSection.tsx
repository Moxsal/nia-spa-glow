import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/spa-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxurious spa interior at Nia Spa Aesthetics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-spa-sage-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-spa-warm-white mb-6 leading-tight">
            Relax. Renew.{" "}
            <span className="text-spa-gold">Rejuvenate.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-spa-cream mb-8 leading-relaxed">
            At Nia Spa Aesthetics, Lekki, we believe self-care is health care. 
            Experience luxurious treatments designed to enhance your natural beauty 
            and restore your inner peace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold px-8 py-6 text-lg shadow-spa-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Session
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-spa-warm-white text-spa-warm-white hover:bg-spa-warm-white hover:text-spa-text-primary px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-spa-cream">
            <a 
              href="tel:+2347015545783" 
              className="flex items-center gap-2 hover:text-spa-gold transition-spa-fast cursor-pointer"
            >
              <Phone size={20} />
              <span>+2347015545783</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>20 Dele Adeyemi Street, Agungi East Estate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-spa-warm-white/10 backdrop-blur-sm rounded-full p-6 shadow-spa-soft">
          <div className="text-spa-warm-white text-center">
            <div className="text-2xl font-bold">5★</div>
            <div className="text-sm">Rated Spa</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;