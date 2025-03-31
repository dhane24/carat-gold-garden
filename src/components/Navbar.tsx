
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Coins, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-gold" />
            <span className="font-bold text-2xl tracking-tight gold-gradient">Carat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-gold transition-colors">
              Gold Vault
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-gold transition-colors">
              Auto Save
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-gold transition-colors">
              Convert
            </Link>
            <Button variant="default" className="bg-gold hover:bg-gold-dark text-charcoal">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-gold transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gold Vault
            </Link>
            <Link 
              to="/dashboard" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Auto Save
            </Link>
            <Link 
              to="/dashboard" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Convert
            </Link>
            <Button 
              variant="default" 
              className="bg-gold hover:bg-gold-dark text-charcoal w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
