
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jessica Chen",
    role: "Purchasing Manager",
    company: "Global Retail Co.",
    content: "Export Emporium has been our trusted supplier for over 5 years. Their commitment to quality and on-time delivery has been exceptional. The team is responsive and always goes the extra mile to meet our specific requirements.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Import Director",
    company: "European Markets Ltd",
    content: "Working with Export Emporium transformed our sourcing process. Their detailed product knowledge and ability to meet our stringent quality standards impressed us. The logistics management is seamless, saving us time and resources.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "CEO",
    company: "Organic Foods Inc.",
    content: "The quality of agricultural products supplied by Export Emporium is consistently excellent. Their understanding of international standards and compliance requirements makes them a valuable partner for our organic food business.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} className="h-5 w-5 fill-secondary text-secondary" />
    ));
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in building long-term relationships with our clients, providing them 
            with quality products and exceptional service.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-secondary opacity-10"></div>
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow relative z-10"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="flex justify-center mb-2">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    <p className="text-secondary font-medium">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-lg text-gray-700 italic relative">
                    <span className="text-5xl text-secondary opacity-20 absolute top-0 left-0 transform -translate-x-6 -translate-y-6">"</span>
                    {testimonials[currentTestimonial].content}
                    <span className="text-5xl text-secondary opacity-20 absolute bottom-0 right-0 transform translate-x-2 translate-y-2">"</span>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
