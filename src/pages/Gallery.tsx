import Navigation from "@/components/Navigation";
import GallerySection from "@/components/GallerySection";
import VideoShowcase from "@/components/VideoShowcase";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <GallerySection />
        <VideoShowcase
          title="Watch Our Spa Come to Life"
          subtitle="Treatments, ambience and results — captured in motion."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
