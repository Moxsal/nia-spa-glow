import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-spa-gold" />,
      title: "Phone",
      details: ["+2347015545783", "WhatsApp: +2349095803661"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-spa-gold" />,
      title: "Email",
      details: ["Gina@nia-spa.com", "Quick Response"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6 text-spa-gold" />,
      title: "Location",
      details: ["20 Dele Adeyemi Street", "Agungi East Estate"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6 text-spa-gold" />,
      title: "Hours",
      details: ["Mon-Sat: 9AM-7PM", "Sun: 11AM-5PM"],
      action: "View Schedule"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-spa-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            Book Your Experience
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            Ready to treat yourself? Get in touch and let's schedule your 
            perfect wellness session. We're here to make booking easy and convenient.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-soft hover:shadow-spa-medium transition-spa">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-spa-gold-light rounded-full">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-spa-text-primary mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => {
                          if (info.title === "Phone") {
                            return (
                              <a 
                                key={detailIndex} 
                                href={detail.includes("WhatsApp") ? `https://wa.me/${detail.replace(/\D/g, '')}` : `tel:${detail.replace(/\D/g, '')}`}
                                className="block text-spa-text-secondary hover:text-spa-sage transition-spa-fast cursor-pointer"
                              >
                                {detail}
                              </a>
                            );
                          } else if (info.title === "Email") {
                            return (
                              <a 
                                key={detailIndex} 
                                href={detail.includes("@") ? `mailto:${detail}` : undefined}
                                className="block text-spa-text-secondary hover:text-spa-sage transition-spa-fast cursor-pointer"
                              >
                                {detail}
                              </a>
                            );
                          } else {
                            return (
                              <p key={detailIndex} className="text-spa-text-secondary">
                                {detail}
                              </p>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-spa-accent border-spa-sage-light/20 shadow-spa-medium">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-spa-sage mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-spa-text-primary mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-spa-text-secondary mb-6">
                  Most Nigerians book via WhatsApp. Chat with us directly for instant booking!
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/2349095803661', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="bg-spa-card border-spa-sage-light/20 shadow-spa-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-spa-text-primary mb-6 text-center">
                  Book Your Appointment
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-spa-text-primary mb-2">
                        First Name
                      </label>
                      <Input placeholder="Enter your first name" className="border-spa-sage-light/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-spa-text-primary mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Enter your last name" className="border-spa-sage-light/30" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+234 (0) 123 456 7890" className="border-spa-sage-light/30" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="border-spa-sage-light/30" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Service Needed
                    </label>
                    <select className="w-full p-3 border border-spa-sage-light/30 rounded-lg bg-spa-warm-white text-spa-text-primary">
                      <option value="">Select a service</option>
                      <option value="manicure-pedicure">Manicure & Pedicure</option>
                      <option value="body-contouring">Body Contouring</option>
                      <option value="botox">Botox Services</option>
                      <option value="hyperpigmentation">Hyperpigmentation Treatment</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Preferred Date & Time
                    </label>
                    <Input type="datetime-local" className="border-spa-sage-light/30" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Additional Notes
                    </label>
                    <Textarea 
                      placeholder="Tell us about any specific concerns or preferences..."
                      className="border-spa-sage-light/30 min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Thank you! We will contact you within 2 hours to confirm your appointment.');
                    }}
                  >
                    Book My Appointment
                  </Button>

                  <p className="text-sm text-spa-text-secondary text-center">
                    We'll confirm your appointment within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;