
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Trap focus within mobile menu when open
  useEffect(() => {
    if (isMenuOpen && navRef.current) {
      const focusableElements = navRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        };
        
        window.addEventListener('keydown', handleTabKey);
        return () => window.removeEventListener('keydown', handleTabKey);
      }
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm" role="banner">
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
              aria-label="Export Emporium Homepage"
            >
              <span className="text-2xl font-bold text-primary">ExportEmporium</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8" 
            aria-label="Main Navigation"
          >
            <Link to="/" className="text-base font-medium text-gray-700 hover:text-primary transition-colors focus-visible:text-primary">
              Home
            </Link>
            <Link to="#products" className="text-base font-medium text-gray-700 hover:text-primary transition-colors focus-visible:text-primary">
              Products
            </Link>
            <Link to="#about" className="text-base font-medium text-gray-700 hover:text-primary transition-colors focus-visible:text-primary">
              About Us
            </Link>
            <Link to="#services" className="text-base font-medium text-gray-700 hover:text-primary transition-colors focus-visible:text-primary">
              Services
            </Link>
            <Link to="#contact" className="text-base font-medium text-gray-700 hover:text-primary transition-colors focus-visible:text-primary">
              Contact
            </Link>
            <Button className="bg-secondary hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-offset-2">
              Request Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          ref={navRef}
          className="md:hidden bg-white border-t border-gray-200"
          role="navigation" 
          aria-label="Mobile Navigation"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:text-primary">
                Home
              </Link>
              <Link to="#products" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:text-primary">
                Products
              </Link>
              <Link to="#about" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:text-primary">
                About Us
              </Link>
              <Link to="#services" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:text-primary">
                Services
              </Link>
              <Link to="#contact" className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 focus-visible:text-primary">
                Contact
              </Link>
              <Button className="bg-secondary hover:bg-secondary/90 w-full focus-visible:ring-2 focus-visible:ring-offset-2">
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
