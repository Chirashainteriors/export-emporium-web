
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const features = [
    "Direct sourcing from manufacturers and producers",
    "Rigorous quality control at every stage",
    "Competitive pricing with flexible payment options",
    "Custom packaging and private labeling services",
    "Efficient logistics and on-time delivery worldwide"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-20 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1642049634258-284f2eca7e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" 
              alt="About Export Emporium" 
              className="rounded-lg shadow-lg relative z-10 w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Export Emporium</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Export Emporium has established itself as a reliable export partner 
              connecting quality manufacturers with global markets. We specialize in sourcing, 
              quality control, and international logistics.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced professionals ensures that every product meets 
              the highest quality standards and international compliance requirements before 
              shipping to our clients worldwide.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
