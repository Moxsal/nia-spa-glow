import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-sage-dark text-spa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-spa-warm-white mb-4">
              Nia Spa Aesthetics
            </h3>
            <p className="text-spa-cream/80 mb-6 leading-relaxed max-w-md">
              Your premier wellness destination in Lekki. We believe self-care is health care, 
              and we're here to help you look and feel your absolute best.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-spa-sage/20 rounded-full hover:bg-spa-gold transition-spa-fast">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-spa-sage/20 rounded-full hover:bg-spa-gold transition-spa-fast">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-spa-warm-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-spa-cream/80">
              <li><a href="#services" className="hover:text-spa-gold transition-spa-fast">Manicure & Pedicure</a></li>
              <li><a href="#services" className="hover:text-spa-gold transition-spa-fast">Body Contouring</a></li>
              <li><a href="#services" className="hover:text-spa-gold transition-spa-fast">Botox Services</a></li>
              <li><a href="#services" className="hover:text-spa-gold transition-spa-fast">Hyperpigmentation</a></li>
              <li><a href="#contact" className="hover:text-spa-gold transition-spa-fast">Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-spa-warm-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-spa-cream/80">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-spa-gold flex-shrink-0" />
                <span className="text-sm">123 Admiralty Way, Lekki Phase 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-spa-gold flex-shrink-0" />
                <span className="text-sm">+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-spa-gold flex-shrink-0" />
                <span className="text-sm">hello@niaspa.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-spa-gold flex-shrink-0" />
                <span className="text-sm">Mon-Sat: 9AM-7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-spa-sage/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-spa-cream/60 text-sm">
              © 2024 Nia Spa Aesthetics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-spa-cream/60">
              <a href="#" className="hover:text-spa-gold transition-spa-fast">Privacy Policy</a>
              <a href="#" className="hover:text-spa-gold transition-spa-fast">Terms of Service</a>
              <a href="#" className="hover:text-spa-gold transition-spa-fast">Booking Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;