import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-spa-gold" />,
      title: "Personalized Care",
      description: "Every treatment is tailored to your unique needs and skin type."
    },
    {
      icon: <Shield className="w-6 h-6 text-spa-gold" />,
      title: "Safety First",
      description: "We use only FDA-approved products and maintain the highest hygiene standards."
    },
    {
      icon: <Award className="w-6 h-6 text-spa-gold" />,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience in aesthetic care."
    },
    {
      icon: <Users className="w-6 h-6 text-spa-gold" />,
      title: "Client-Centered",
      description: "Your comfort, satisfaction, and well-being are our top priorities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-spa-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
              Welcome to{" "}
              <span className="text-spa-sage">Nia Spa Aesthetics</span>
            </h2>
            
            <div className="space-y-6 text-lg text-spa-text-secondary leading-relaxed mb-8">
              <p>
                Founded in the heart of Lekki, Nia Spa Aesthetics was born from a simple belief: 
                <strong className="text-spa-text-primary"> self-care is health care</strong>. 
                We understand that in today's fast-paced world, taking time for yourself isn't 
                just luxury—it's essential.
              </p>
              
              <p>
                Our journey began with a vision to create a sanctuary where modern aesthetics 
                meet traditional wellness. Every service we offer is designed to not just enhance 
                your appearance, but to help you reconnect with your inner confidence and peace.
              </p>

              <p>
                At Nia Spa Aesthetics, we don't just provide treatments—we create transformative 
                experiences that leave you feeling refreshed, renewed, and radiant from the inside out.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-spa-sage mb-2">500+</div>
                <div className="text-sm text-spa-text-secondary">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-spa-sage mb-2">6+</div>
                <div className="text-sm text-spa-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-spa-sage mb-2">95%</div>
                <div className="text-sm text-spa-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-soft hover:shadow-spa-medium transition-spa">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-spa-gold-light rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-spa-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-spa-text-secondary text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;