
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out. We'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or services? Our team is ready to assist you.
            Get in touch with us using the form below or through our contact details.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-8">
            <h3 className="text-xl font-semibold text-primary mb-6">Get In Touch</h3>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Our Location</h4>
                <p className="text-gray-600">
                  123 Export Way,<br />
                  Business District,<br />
                  Sydney, NSW 2000
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email Us</h4>
                <p className="text-gray-600">
                  info@exportemporium.com<br />
                  sales@exportemporium.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Call Us</h4>
                <p className="text-gray-600">
                  +61 2 1234 5678<br />
                  +61 4 9876 5432
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Business Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-primary mb-6">Send Us A Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="bg-primary hover:bg-primary/90 w-full sm:w-auto py-6 px-8">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
