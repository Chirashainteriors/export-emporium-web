
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620587458312-a396710f9593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] 
        bg-cover bg-center opacity-40"></div>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Global Export Partner for Quality Products
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We connect businesses worldwide with premium-quality products at competitive prices. From sourcing to delivery, we handle every aspect of your export needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-lg py-6 px-8">
              Explore Products
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg py-6 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
