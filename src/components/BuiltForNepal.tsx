
import { Globe, MapPin, BookOpen, Film } from 'lucide-react';

const BuiltForNepal = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-terracotta" />,
      title: "Local Stories",
      description: "Authentic narratives from locals and travelers sharing their Nepal experiences."
    },
    {
      icon: <Film className="h-6 w-6 text-forest" />,
      title: "Cultural Moments",
      description: "Capture and share genuine cultural interactions across Nepal's diverse regions."
    },
    {
      icon: <MapPin className="h-6 w-6 text-mustard" />,
      title: "Offline Mode",
      description: "Access maps, saved routes, and essential info even without an internet connection."
    },
    {
      icon: <Globe className="h-6 w-6 text-terracotta" />,
      title: "Multilingual Support",
      description: "Experience Ghumiyo in English, Nepali and other local languages."
    }
  ];

  return (
    <section id="about" className="section-padding bg-forest text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="1" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Nepal
          </h2>
          <div className="h-1 w-24 bg-terracotta mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Designed with Nepal's unique geography, cultural diversity and connectivity challenges in mind. 
            Ghumiyo embraces and celebrates what makes Nepal special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition duration-300"
            >
              <div className="bg-white/10 rounded-full p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Nepal Mountains" 
                className="rounded-xl w-full h-auto object-cover shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Community-Sourced Insights</h3>
              <p className="mb-6 text-white/80">
                Ghumiyo believes in the wisdom of the community. Our platform aggregates recommendations, warnings, 
                and insights from local experts and experienced travelers to provide you with the most authentic and 
                up-to-date travel information.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-terracotta rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Real-time updates on trail conditions</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-terracotta rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Authentic recommendations from locals</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-terracotta rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Cultural etiquette guidance for travelers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForNepal;
