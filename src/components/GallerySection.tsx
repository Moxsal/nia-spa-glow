import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroMassageTable from "@/assets/hero-massage-table.jpg";
import treatmentRoomFacial from "@/assets/treatment-room-facial.jpg";
import treatmentRoomFacialAlt from "@/assets/treatment-room-facial-alt.jpg";
import treatmentRoomFull from "@/assets/treatment-room-full.jpg";
import spaTowelsCandles from "@/assets/spa-towels-candles.jpg";
import spaProductsGoldBowl from "@/assets/spa-products-gold-bowl.jpg";
import spaProductsFlowers from "@/assets/spa-products-flowers.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: heroMassageTable,
      title: "Hot Stone Massage Therapy",
      description: "Indulge in our signature hot stone massage with aromatherapy oils and rose petals"
    },
    {
      image: treatmentRoomFacial,
      title: "Facial Treatment Room",
      description: "Advanced facial treatments with professional steamer equipment"
    },
    {
      image: treatmentRoomFacialAlt,
      title: "Professional Skincare Station",
      description: "State-of-the-art equipment for your ultimate facial experience"
    },
    {
      image: treatmentRoomFull,
      title: "Complete Treatment Suite",
      description: "Fully equipped treatment room with modern spa technology"
    },
    {
      image: spaTowelsCandles,
      title: "Relaxation & Ambiance",
      description: "Premium spa towels and aromatic candles for your comfort"
    },
    {
      image: spaProductsGoldBowl,
      title: "Luxury Spa Products",
      description: "Carefully selected massage oils, hot stones, and wellness tools"
    },
    {
      image: spaProductsFlowers,
      title: "Premium Wellness Collection",
      description: "Gold bowl treatments with fresh flowers and essential oils"
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
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-spa-gold hover:bg-spa-gold-light text-spa-text-primary font-semibold"
            >
              Book Your Visit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
