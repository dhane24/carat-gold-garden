
import { Link } from "react-router-dom";
import { Coins, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-6 w-6 text-gold" />
              <span className="font-bold text-xl gold-gradient">Carat</span>
            </div>
            <p className="text-muted-foreground">
              Building wealth with digital gold. Save, invest, and grow your assets with 24K gold.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-gold transition-colors">
                  Gold Vault
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-gold transition-colors">
                  Auto Save
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-gold transition-colors">
                  Convert to Physical
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-gold transition-colors">
                  Investment Simulator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-light pt-6 mt-8 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Carat. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-gold transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
