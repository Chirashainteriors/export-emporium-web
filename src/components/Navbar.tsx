
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">ExportEmporium</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="#products" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="#about" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="#services" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="#contact" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="bg-secondary hover:bg-secondary/90">
              Request Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link to="#products" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2">
                Products
              </Link>
              <Link to="#about" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2">
                About Us
              </Link>
              <Link to="#services" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2">
                Services
              </Link>
              <Link to="#contact" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <Button className="bg-secondary hover:bg-secondary/90 w-full">
                Request Quote
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
