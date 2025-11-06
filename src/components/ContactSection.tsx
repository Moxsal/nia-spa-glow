import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-spa-gold" />,
      title: "Call",
      details: ["+2347015545783", "Speak direct with our booking team"],
      link: "tel:+2347015545783"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-spa-gold" />,
      title: "WhatsApp",
      details: ["+2349095803661", "Quick booking and inquiries"],
      link: "https://wa.me/2349095803661"
    },
    {
      icon: <Mail className="w-6 h-6 text-spa-gold" />,
      title: "Email",
      details: ["Gina@nia-spa.com", "Quick Response"],
      link: "mailto:Gina@nia-spa.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-spa-gold" />,
      title: "Location",
      details: ["20 Dele Adeyemi Street", "Agungi East Estate"],
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-spa-gold" />,
      title: "Hours",
      details: ["Mon-Sat: 9AM-7PM", "Sun: 2PM-7PM"],
      link: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const whatsappMessage = `New Booking Request:%0A%0AName: ${encodeURIComponent(fullName)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0AService: ${encodeURIComponent(formData.service)}%0ADate: ${encodeURIComponent(formData.date)}%0ATime: ${encodeURIComponent(formData.time)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    
    const whatsappUrl = `https://wa.me/2349095803661?text=${whatsappMessage}`;
    
    toast({
      title: "✅ Booking Request Sent!",
      description: "Your booking request has been sent successfully via WhatsApp. Our team will respond shortly.",
    });
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
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
                          if (info.link && detailIndex === 0) {
                            return (
                              <a 
                                key={detailIndex} 
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="block text-spa-text-secondary hover:text-spa-sage transition-spa-fast cursor-pointer font-medium"
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
          </div>

          {/* Booking Form */}
          <div>
            <Card className="bg-spa-card border-spa-sage-light/20 shadow-spa-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-spa-text-primary mb-6 text-center">
                  Book Your Appointment
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-spa-text-primary mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Enter your first name" 
                        className="border-spa-sage-light/30"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-spa-text-primary mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Enter your last name" 
                        className="border-spa-sage-light/30"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+234 (0) 123 456 7890" 
                      className="border-spa-sage-light/30"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-spa-sage-light/30"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Service Needed
                    </label>
                    <select 
                      className="w-full p-3 border border-spa-sage-light/30 rounded-lg bg-spa-warm-white text-spa-text-primary"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Massage">Massage</option>
                      <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                      <option value="Botox Services">Botox Services</option>
                      <option value="Hyperpigmentation Treatment">Hyperpigmentation Treatment</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-spa-text-primary mb-2">
                        Preferred Date
                      </label>
                      <Input 
                        type="date" 
                        className="border-spa-sage-light/30"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-spa-text-primary mb-2">
                        Preferred Time
                      </label>
                      <Input 
                        type="time" 
                        className="border-spa-sage-light/30"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-spa-text-primary mb-2">
                      Additional Notes
                    </label>
                    <Textarea 
                      placeholder="Tell us about any specific concerns or preferences..."
                      className="border-spa-sage-light/30 min-h-[100px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="pink"
                    size="lg" 
                    className="w-full font-semibold"
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