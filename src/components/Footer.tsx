
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/lovable-uploads/fd21ff70-c0f8-4607-bd1e-70b964e05208.png"
                alt="Ghumiyo Logo"
                className="h-28" // Increased from h-20 to h-28
              />
            </div>
            
            <p className="text-white/80 mb-6">
              Ghumiyo is Nepal's first travel-first social app, connecting explorers with authentic experiences
              and like-minded travelers.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white">Features</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">App (Coming Soon)</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Treasure Hunts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hello@ghumiyo.com" className="text-white/80 hover:text-white">hello@ghumiyo.com</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Support</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Partnerships</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ghumiyo. All rights reserved.
          </p>
          
          <div className="text-white/60 text-sm">
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
