
import { MapPin, Route } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col space-y-6 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span>Roam.</span><br/>
              <span className="text-terracotta">Share.</span><br/>
              <span className="text-forest">Belong.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              The ultimate travel platform for Nepal — built for wanderers, storytellers, and explorers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#join" className="btn-primary flex items-center justify-center gap-2">
                <Route size={20} />
                Start Your Journey
              </a>
              <a href="#explore" className="px-6 py-3 rounded-full border-2 border-forest text-forest font-medium flex items-center justify-center gap-2 hover:bg-forest hover:text-white transition-colors">
                <MapPin size={20} />
                Explore Now
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* The pathway curve illustration */}
              <svg 
                className="w-full h-full absolute" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M50,200 Q100,50 200,150 T350,200" 
                  stroke="#E76F51" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  className="animate-path-draw"
                />
              </svg>
              
              <img 
                src="/lovable-uploads/fd21ff70-c0f8-4607-bd1e-70b964e05208.png"
                alt="Ghumiyo logo" 
                className="w-32 h-32 absolute top-24 left-1/2 -translate-x-1/2 animate-float"
              />
              
              <div className="absolute bottom-10 right-10 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <MapPin size={24} className="text-terracotta" />
                  <span className="text-forest font-medium">Discover Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-forest mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-forest rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 bg-forest rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
