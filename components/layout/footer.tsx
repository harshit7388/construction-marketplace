import Link from 'next/link';
import { Building2, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8" />
              <span className="text-2xl font-bold">BuildMart</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your one-stop marketplace for all construction materials. 
              Connecting buyers with the best suppliers in the industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-gray-400 hover:text-white transition-colors">
                  Our Sellers
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-gray-400 hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/cement" className="text-gray-400 hover:text-white transition-colors">
                  Cement & Concrete
                </Link>
              </li>
              <li>
                <Link href="/category/bricks" className="text-gray-400 hover:text-white transition-colors">
                  Bricks & Blocks
                </Link>
              </li>
              <li>
                <Link href="/category/steel" className="text-gray-400 hover:text-white transition-colors">
                  Steel & Iron
                </Link>
              </li>
              <li>
                <Link href="/category/tiles" className="text-gray-400 hover:text-white transition-colors">
                  Tiles & Flooring
                </Link>
              </li>
              <li>
                <Link href="/category/paints" className="text-gray-400 hover:text-white transition-colors">
                  Paints & Finishes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Construction Ave, Building District, 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@buildmart.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BuildMart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sellers/join" className="text-gray-400 text-sm hover:text-white transition-colors">
              Become a Seller
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;