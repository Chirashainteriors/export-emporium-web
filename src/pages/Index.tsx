
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <section aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="sr-only">Export Emporium - Global Export Solutions</h1>
          <Hero />
        </section>
        
        <section id="products" aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">Product Categories</h2>
          <ProductCategories />
        </section>
        
        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About Us</h2>
          <AboutUs />
        </section>
        
        <section id="services" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <Services />
        </section>
        
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          <Testimonials />
        </section>
        
        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">Contact Us</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
