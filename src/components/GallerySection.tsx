import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/spa-hero.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import manicureStation from "@/assets/manicure-station.jpg";
import bodyContouring from "@/assets/body-contouring.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Spa Reception",
      description: "Welcome to our serene wellness sanctuary"
    },
    {
      image: treatmentRoom,
      title: "Treatment Rooms",
      description: "Private spaces designed for ultimate relaxation"
    },
    {
      image: manicureStation,
      title: "Nail Care Station",
      description: "Professional manicure & pedicure setup"
    },
    {
      image: bodyContouring,
      title: "Body Contouring Suite",
      description: "Advanced non-invasive body sculpting technology"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-spa-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            Explore Our Sanctuary
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            Take a virtual tour of our luxurious facilities. Every detail is designed 
            to provide you with the ultimate wellness and beauty experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-medium hover:shadow-spa-strong transition-spa group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-spa"
                  />
                  <div className="absolute inset-0 bg-spa-sage-dark/20 group-hover:bg-spa-sage-dark/10 transition-spa"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-spa-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-spa-text-secondary">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-spa-text-secondary mb-6">
            Want to see more? Follow us on social media for daily updates and behind-the-scenes content.
          </p>
          <Button variant="outline" size="lg" className="border-spa-sage text-spa-sage hover:bg-spa-sage hover:text-spa-warm-white">
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;