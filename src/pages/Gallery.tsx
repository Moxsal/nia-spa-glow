import Navigation from "@/components/Navigation";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
