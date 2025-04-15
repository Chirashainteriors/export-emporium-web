
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Agricultural Products',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    description: 'Premium grains, pulses, spices, and other agricultural commodities sourced directly from farmers.'
  },
  {
    id: 2,
    name: 'Textiles & Fabrics',
    image: 'https://images.unsplash.com/photo-1583248127388-8c78c2253188?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    description: 'High-quality cotton, silk, wool and synthetic fabrics with customizable designs and patterns.'
  },
  {
    id: 3,
    name: 'Handicrafts',
    image: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    description: 'Authentic handcrafted items showcasing traditional craftsmanship and cultural heritage.'
  },
  {
    id: 4,
    name: 'Processed Foods',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Packaged foods meeting international quality and safety standards with customizable packaging.'
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Product Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a diverse range of high-quality products across multiple categories, 
            all meeting international standards and specifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button variant="ghost" className="text-secondary hover:text-secondary/80 p-0 flex items-center">
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-secondary hover:bg-secondary/90 text-lg py-6 px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
