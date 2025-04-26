
import { Calendar, DollarSign, Route, Share2 } from 'lucide-react';

const ItineraryPlanning = () => {
  return (
    <section id="itinerary" className="section-padding bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Plan Your Perfect Journey</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-forest rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create detailed itineraries, compare costs, and share trip plans with friends. 
            Whether you're a planner or spontaneous explorer, Ghumiyo helps you make the most of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-forest w-12 h-12 rounded-lg flex items-center justify-center text-white">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-semibold">Detailed Itinerary Building</h3>
              </div>
              
              <div className="space-y-4">
                <p>
                  Create comprehensive day-by-day plans with accommodations, transportation, 
                  activities, and meals.
                </p>
                
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-medium mb-2">Itinerary Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-forest mt-1">•</span>
                      <span>Interactive timeline with drag-and-drop scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest mt-1">•</span>
                      <span>Accommodation and transport booking integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest mt-1">•</span>
                      <span>Distance and travel time calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest mt-1">•</span>
                      <span>Local weather forecasts for your travel dates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-terracotta w-12 h-12 rounded-lg flex items-center justify-center text-white">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-xl font-semibold">Group Cost Sharing</h3>
              </div>
              
              <div className="space-y-4">
                <p>
                  Split expenses effortlessly among travel companions with our built-in cost sharing calculator.
                </p>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b border-gray-200">
                    <h4 className="font-medium">Annapurna Circuit Trip</h4>
                    <p className="text-sm text-gray-500">4 travelers • 7 days</p>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accommodations</span>
                      <span className="font-medium">NPR 24,000</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Transportation</span>
                      <span className="font-medium">NPR 12,000</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Food & Dining</span>
                      <span className="font-medium">NPR 18,000</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Activities & Tours</span>
                      <span className="font-medium">NPR 15,000</span>
                    </div>
                    <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-medium">
                      <span>Total</span>
                      <span>NPR 69,000</span>
                    </div>
                    <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between text-forest font-medium">
                      <span>Per Person</span>
                      <span>NPR 17,250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-mustard w-12 h-12 rounded-lg flex items-center justify-center text-white">
                  <Route size={24} />
                </div>
                <h3 className="text-xl font-semibold">Routes & Road Trips</h3>
              </div>
              
              <div className="space-y-4">
                <p>
                  Discover the best routes for bike trips, hiking trails, or road journeys with 
                  insider tips and real-time updates.
                </p>
                
                <div className="relative h-56 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                    alt="Road trip" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-semibold">Kathmandu to Pokhara</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span>206 km</span>
                      <span>•</span>
                      <span>6 hours</span>
                      <span>•</span>
                      <span>4 scenic stops</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 py-2 border border-forest text-forest rounded-lg hover:bg-forest hover:text-white transition-colors text-sm">
                    Road Trip
                  </button>
                  <button className="flex-1 py-2 border border-terracotta text-terracotta rounded-lg hover:bg-terracotta hover:text-white transition-colors text-sm">
                    Bike Route
                  </button>
                  <button className="flex-1 py-2 border border-mustard text-mustard rounded-lg hover:bg-mustard hover:text-white transition-colors text-sm">
                    Trekking
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-forest w-12 h-12 rounded-lg flex items-center justify-center text-white">
                  <Share2 size={24} />
                </div>
                <h3 className="text-xl font-semibold">Itinerary Comparison</h3>
              </div>
              
              <div className="space-y-4">
                <p>
                  Compare planned vs. actual itineraries, adjust on-the-go, and generate 
                  automatic trip summaries to share or blog about.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-forest mb-2">Planned Itinerary</h4>
                    <ul className="text-sm space-y-2">
                      <li className="pb-2 border-b border-gray-200">
                        <div className="font-medium">Day 1: Kathmandu</div>
                        <div className="text-xs text-gray-500">City tour, 3 locations</div>
                      </li>
                      <li className="pb-2 border-b border-gray-200">
                        <div className="font-medium">Day 2-3: Pokhara</div>
                        <div className="text-xs text-gray-500">Lakeside stay, boat ride</div>
                      </li>
                      <li>
                        <div className="font-medium">Day 4-5: Chitwan</div>
                        <div className="text-xs text-gray-500">Safari, jungle activities</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-terracotta mb-2">Actual Journey</h4>
                    <ul className="text-sm space-y-2">
                      <li className="pb-2 border-b border-gray-200">
                        <div className="font-medium">Day 1: Kathmandu</div>
                        <div className="text-xs text-gray-500">City tour + unexpected festival</div>
                      </li>
                      <li className="pb-2 border-b border-gray-200">
                        <div className="font-medium">Day 2-4: Pokhara</div>
                        <div className="text-xs text-gray-500">Extended stay due to views</div>
                      </li>
                      <li>
                        <div className="font-medium">Day 5: Return</div>
                        <div className="text-xs text-gray-500">Changed plans, skipped Chitwan</div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors text-sm mt-2">
                  Generate Trip Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryPlanning;
