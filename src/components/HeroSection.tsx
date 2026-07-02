import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-massage-table.jpg";
import { BUSINESS } from "@/lib/business";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury spa treatment room at Nia Spa Aesthetics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-spa-sage-dark/55"></div>
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
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold px-8 py-6 text-lg shadow-spa-medium"
              >
                Book Your Session
              </Button>
            </Link>
            <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-spa-warm-white text-spa-warm-white hover:bg-spa-warm-white hover:text-spa-text-primary px-8 py-6 text-lg"
              >
                <MessageCircle size={20} className="mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-spa-cream">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 hover:text-spa-gold transition-spa-fast cursor-pointer"
            >
              <Phone size={20} />
              <span>{BUSINESS.phone}</span>
            </a>
            <a
              href={BUSINESS.google.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-spa-gold transition-spa-fast"
            >
              <MapPin size={20} />
              <span>20 Dele Adeyemi Street, Agungi East Estate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-spa-warm-white/10 backdrop-blur-sm rounded-full p-6 shadow-spa-soft">
          <div className="text-spa-warm-white text-center">
            <div className="text-2xl font-bold">5★</div>
            <div className="text-sm">Rated on Google</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
