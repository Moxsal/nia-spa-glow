import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import blogHero from "@/assets/blog-hero.jpg";
import blogSkincareRoutine from "@/assets/blog-skincare-routine.jpg";
import blogFacialBenefits from "@/assets/blog-facial-benefits.jpg";
import blogBodyContouring from "@/assets/blog-body-contouring.jpg";
import blogSelfCare from "@/assets/blog-self-care.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Skincare Tips for Nigerian Climate",
      excerpt: "Expert advice on maintaining healthy, glowing skin in Lagos weather.",
      date: "March 15, 2024",
      image: blogSkincareRoutine
    },
    {
      title: "The Benefits of Regular Facials",
      excerpt: "Discover how regular facial treatments can improve your skin health and overall wellness.",
      date: "March 10, 2024",
      image: blogFacialBenefits
    },
    {
      title: "The Importance of Self-Care",
      excerpt: "Why taking time for yourself is essential for mental and physical wellbeing.",
      date: "March 1, 2024",
      image: blogSelfCare
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={blogHero} 
            alt="Nia Spa Aesthetics Blog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-spa-text-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
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
