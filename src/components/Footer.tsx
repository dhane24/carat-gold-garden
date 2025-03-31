
import { Link } from "react-router-dom";
import { Coins, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact-us" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-charcoal-light pt-6 mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Carat. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact-us" className="hover:text-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
