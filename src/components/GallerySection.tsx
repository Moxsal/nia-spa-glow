import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import treatmentRoomPetals from "@/assets/treatment-room-petals.jpg";
import massageTable from "@/assets/massage-table.jpg";
import treatmentRoomWide from "@/assets/treatment-room-wide.jpg";
import spaProductsTray from "@/assets/spa-products-tray.jpg";
import spaProductsShelf from "@/assets/spa-products-shelf.jpg";
import facialTreatment from "@/assets/facial-treatment.jpg";
import spaReception from "@/assets/spa-reception.jpg";
import relaxationLounge from "@/assets/relaxation-lounge.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: treatmentRoomPetals,
      title: "Luxurious Treatment Room",
      description: "Experience tranquility in our beautifully designed treatment spaces"
    },
    {
      image: massageTable,
      title: "Professional Massage & Body Therapy",
      description: "State-of-the-art equipment for your ultimate comfort"
    },
    {
      image: treatmentRoomWide,
      title: "Modern Spa Facilities",
      description: "Contemporary design meets traditional wellness"
    },
    {
      image: spaProductsTray,
      title: "Premium Product Collection",
      description: "Carefully curated skincare and beauty products"
    },
    {
      image: spaProductsShelf,
      title: "Quality Spa Essentials",
      description: "Only the best for your skin and wellness"
    },
    {
      image: facialTreatment,
      title: "Facial & Skincare Treatments",
      description: "Advanced facial therapies for radiant skin"
    },
    {
      image: spaReception,
      title: "Welcoming Spa Environment",
      description: "Your journey to wellness begins here"
    },
    {
      image: relaxationLounge,
      title: "Relaxation Lounge",
      description: "Unwind in our peaceful sanctuary"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-spa-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
            Explore Our Sanctuary
          </h2>
          <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
            Step inside Nia Spa Aesthetics and discover where modern luxury meets traditional Nigerian wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-spa-card border-spa-sage-light/20 shadow-spa-soft hover:shadow-spa-strong transition-spa group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-spa"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-spa-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-spa-text-secondary">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
