
import { MapPin, Mountain, Star } from 'lucide-react';

const Explore = () => {
  const destinations = [
    {
      name: "Annapurna Base Camp",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      type: "Trekking"
    },
    {
      name: "Thamel, Kathmandu",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      type: "Cultural Hub"
    },
    {
      name: "Pokhara Lakeside",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      type: "Scenic Beauty"
    }
  ];

  return (
    <section id="explore" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Explore Nepal, Digitally</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-forest rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations, local cultures, and hidden gems all across Nepal through 
            our interactive platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="relative bg-white p-4 rounded-2xl shadow-lg max-w-md mx-auto card-hover">
              <div className="absolute -top-4 -right-4 bg-terracotta text-white p-3 rounded-full z-10">
                <Mountain size={24} />
              </div>
              
              {/* Mock App UI */}
              <div className="rounded-xl overflow-hidden border-4 border-white">
                <div className="h-12 bg-forest flex items-center justify-between px-4">
                  <span className="text-white font-medium">Ghumiyo</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
                
                <div className="relative h-72 bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Nepal Map View" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Map Pins */}
                  <div className="absolute top-1/4 left-1/3 animate-bounce" style={{ animationDuration: '2s' }}>
                    <MapPin size={28} className="text-terracotta drop-shadow-lg" />
                  </div>
                  <div className="absolute top-2/3 right-1/4 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    <MapPin size={28} className="text-terracotta drop-shadow-lg" />
                  </div>
                  <div className="absolute top-1/2 right-1/2 animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }}>
                    <MapPin size={28} className="text-terracotta drop-shadow-lg" />
                  </div>
                </div>
                
                <div className="bg-white p-4">
                  <h4 className="font-semibold mb-1">Discover Nearby</h4>
                  <p className="text-sm text-gray-500">3 new treasure hunts available</p>
                  
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-1 bg-mustard rounded-full text-sm">Treks</button>
                    <button className="px-3 py-1 bg-muted text-gray-700 rounded-full text-sm">Food</button>
                    <button className="px-3 py-1 bg-muted text-gray-700 rounded-full text-sm">Culture</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-forest">Trending Destinations</h3>
            <div className="space-y-6">
              {destinations.map((destination, index) => (
                <div key={index} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm card-hover">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">{destination.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span className="text-mustard">
                        <Star size={16} fill="#E9C46A" />
                      </span>
                      <span>{destination.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{destination.type}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs bg-green-50 text-forest py-1 px-2 rounded w-fit">
                      <span>12 stories</span>
                      <span className="mx-1">•</span>
                      <span>3 treasure hunts</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 border-2 border-dashed border-forest text-forest rounded-xl hover:bg-forest hover:text-white transition-colors">
                View More Destinations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
