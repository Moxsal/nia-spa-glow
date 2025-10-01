import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Benefits of Regular Spa Treatments",
      excerpt: "Discover how regular spa visits can improve your overall wellness and beauty routine.",
      date: "March 15, 2024",
      image: "/placeholder.svg"
    },
    {
      title: "Body Contouring: What You Need to Know",
      excerpt: "Learn about the latest non-invasive body contouring treatments available at Nia Spa.",
      date: "March 10, 2024",
      image: "/placeholder.svg"
    },
    {
      title: "Skincare Tips for Nigerian Climate",
      excerpt: "Expert advice on maintaining healthy, glowing skin in Lagos weather.",
      date: "March 5, 2024",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-spa-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-6">
                Wellness & Beauty Blog
              </h1>
              <p className="text-xl text-spa-text-secondary max-w-3xl mx-auto">
                Tips, insights, and updates from Nia Spa Aesthetics
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-spa-card border-spa-sage-light/20 shadow-spa-soft hover:shadow-spa-medium transition-spa overflow-hidden">
                  <div className="aspect-video bg-spa-accent" />
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
