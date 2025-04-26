
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full py-6 px-6 md:px-12 lg:px-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/fd21ff70-c0f8-4607-bd1e-70b964e05208.png"
            alt="Ghumiyo Logo"
            className="h-24" // Increased from h-16 to h-24
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-forest hover:text-terracotta transition-colors">Features</a>
          <a href="#explore" className="text-forest hover:text-terracotta transition-colors">Explore</a>
          <a href="#about" className="text-forest hover:text-terracotta transition-colors">About</a>
          <a href="#join" className="btn-primary">Join Waitlist</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-cream shadow-lg rounded-lg py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-forest hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#explore" 
              className="text-forest hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
            <a 
              href="#about" 
              className="text-forest hover:text-terracotta transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#join" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
