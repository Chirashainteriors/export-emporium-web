
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Export Emporium</h3>
            <p className="mb-6 text-gray-300">
              Your trusted partner for global exports, connecting quality products with international markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="#products" className="hover:text-secondary transition-colors">Products</Link></li>
              <li><Link to="#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="#services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="#contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-secondary transition-colors">Agricultural Products</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Textiles & Fabrics</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Handicrafts</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Processed Foods</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">View All Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Export Way, Business District</p>
              <p>Sydney, NSW 2000, Australia</p>
              <p>Phone: +61 2 1234 5678</p>
              <p>Email: info@exportemporium.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-white/20 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Export Emporium. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-secondary p-3 rounded-full shadow-lg hover:bg-secondary/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
