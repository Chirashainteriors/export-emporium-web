
import { Card, CardContent } from '@/components/ui/card';
import { Globe2, TrendingUp, ShieldCheck, Truck, PackageCheck, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Globe2,
    title: "Global Sourcing",
    description: "We source products directly from verified manufacturers and producers, ensuring quality at competitive prices."
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Our rigorous quality control processes ensure that all products meet international standards and specifications."
  },
  {
    id: 3,
    icon: PackageCheck,
    title: "Custom Packaging",
    description: "We offer tailored packaging solutions, private labeling, and branding services to meet your specific requirements."
  },
  {
    id: 4,
    icon: Truck,
    title: "Logistics Management",
    description: "From documentation to delivery, we handle all aspects of the shipping process to ensure timely delivery."
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Market Analysis",
    description: "We provide insights on market trends, regulations, and opportunities to help you make informed decisions."
  },
  {
    id: 6,
    icon: Users,
    title: "Trade Consultation",
    description: "Our experts offer guidance on international trade regulations, tariffs, and compliance requirements."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            We offer comprehensive export services to simplify the global trade process for our clients,
            ensuring quality products reach international markets efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur border-0 hover:bg-white/15 transition-colors">
              <CardContent className="p-6">
                <div className="bg-secondary/20 p-3 rounded-full w-fit mb-5">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="opacity-90">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
