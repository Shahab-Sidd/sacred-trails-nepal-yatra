
import { Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/11bacaa7-0ff8-4c81-96c0-d3c8916b197c.png" 
            alt="HolyNepalYatra Logo" 
            className="h-12"
            style={{ 
              filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))',
              mixBlendMode: 'multiply' // This helps with removing white backgrounds
            }}
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-deep-blue transition-colors">Home</Link>
          <Link to="/packages" className="font-medium hover:text-deep-blue transition-colors">Packages</Link>
          <a href="#about" className="font-medium hover:text-deep-blue transition-colors">About Us</a>
          <a href="#contact" className="font-medium hover:text-deep-blue transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center">
          <a href="tel:+918429962424" className="flex items-center bg-deep-blue text-white px-4 py-2 rounded-full">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">+91 8429962424</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <Link to="/" className="block py-2 hover:text-deep-blue">Home</Link>
          <Link to="/packages" className="block py-2 hover:text-deep-blue">Packages</Link>
          <a href="#about" className="block py-2 hover:text-deep-blue">About Us</a>
          <a href="#contact" className="block py-2 hover:text-deep-blue">Contact</a>
          <a href="tel:+918429962424" className="flex items-center mt-2 bg-deep-blue text-white px-4 py-2 rounded-full w-fit">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">+91 8429962424</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
