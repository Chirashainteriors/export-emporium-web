
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
      <Hero />
      <ProductCategories />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
