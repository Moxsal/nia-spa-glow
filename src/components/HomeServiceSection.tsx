import { Button } from "@/components/ui/button";
import { Home, Clock, Sparkles, MessageCircle } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import video from "@/assets/videos/spa-relaxation.mp4.asset.json";
import { BUSINESS } from "@/lib/business";
import { getHostedAssetUrl } from "@/lib/assets";

const benefits = [
  { icon: Home, title: "In the comfort of your home", text: "Skip the traffic. Enjoy spa-grade treatments in your own space." },
  { icon: Sparkles, title: "Premium products & tools", text: "We bring our luxury product line and sanitised equipment to you." },
  { icon: Clock, title: "Flexible scheduling", text: "Mornings, evenings or weekends — booked around your day." },
];

const HomeServiceSection = () => {
  const bookMsg = encodeURIComponent(
    "Hi Nia Spa! I'd like to book a home service appointment. Please share availability and pricing."
  );
  const bookUrl = `${BUSINESS.whatsappLink}?text=${bookMsg}`;

  return (
    <section className="py-20 bg-spa-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-spa-gold/20 text-spa-text-primary font-medium text-sm mb-4">
              New • Premium Home Service
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6 leading-tight">
              Luxury Spa & Aesthetic Services Delivered to Your Home
            </h2>
            <p className="text-lg text-spa-text-secondary mb-8 leading-relaxed">
              Enjoy professional spa and aesthetic treatments in the comfort and privacy of your own home.
              Every appointment is personally handled by our founder, ensuring meticulous, one-on-one care
              with premium products and a truly bespoke experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <div className="p-2 h-10 w-10 rounded-full bg-spa-gold-light flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-spa-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-text-primary">{title}</h3>
                    <p className="text-sm text-spa-text-secondary">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={bookUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="pink" className="font-semibold">
                  <MessageCircle className="mr-2" size={18} /> Book Home Service
                </Button>
              </a>
              <a href={`tel:${BUSINESS.phone}`}>
                <Button size="lg" variant="outline" className="border-spa-sage text-spa-text-primary">
                  Call {BUSINESS.phone}
                </Button>
              </a>
            </div>
          </div>

          <div>
            <VideoCard
              src={getHostedAssetUrl(video.url)}
              title="At-home spa, redefined"
              description="Calm, clean and curated — the Nia experience, your space"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
