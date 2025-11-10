import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import blogMassageTherapy from "@/assets/blog-massage-therapy.jpg";
import blogRelaxationMassage from "@/assets/blog-relaxation-massage.jpg";
import blogChemicalPeel from "@/assets/blog-chemical-peel.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Deep Tissue Massage: Release Tension & Restore Balance",
      excerpt: "Experience expert therapeutic massage techniques that target muscle tension, improve circulation, and promote total body relaxation. Our skilled therapists use personalized approaches to address your specific wellness needs.",
      date: "May 20, 2024",
      image: blogMassageTherapy
    },
    {
      title: "The Healing Power of Professional Massage Therapy",
      excerpt: "Discover how regular massage sessions at Nia Spa can reduce stress, relieve chronic pain, and enhance your overall wellbeing. Learn about the science-backed benefits of expert massage therapy for mind and body.",
      date: "May 15, 2024",
      image: blogRelaxationMassage
    },
    {
      title: "Transform Your Skin with Advanced Chemical Peels",
      excerpt: "Unveil radiant, youthful skin with our professional chemical peel treatments. From brightening hyperpigmentation to smoothing fine lines, our advanced peels deliver visible results tailored to your unique skin type and concerns.",
      date: "May 10, 2024",
      image: blogChemicalPeel
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[350px] overflow-hidden bg-gradient-to-br from-spa-sage via-spa-sage-light to-spa-cream">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-spa-text-primary px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Wellness & Beauty Blog
              </h1>
              <p className="text-xl md:text-2xl">
                Tips, insights, and updates from Nia Spa Aesthetics
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-spa-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-soft hover:shadow-spa-medium transition-spa overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-spa"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-spa-text-secondary mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold text-spa-text-primary mb-3">
                      {post.title}
                    </h3>
                    <p className="text-spa-text-secondary mb-4">
                      {post.excerpt}
                    </p>
                    <a href="#" className="text-spa-gold hover:text-spa-sage transition-spa-fast font-medium">
                      Read More →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
