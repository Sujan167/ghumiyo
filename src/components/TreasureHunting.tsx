
import { MapPin, Compass, Award } from 'lucide-react';

const TreasureHunting = () => {
  return (
    <section id="treasure-hunting" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Treasure Hunting</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-forest rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on real-world adventures with our gamified treasure hunts inspired by Pokémon Go.
            Discover hidden locations, learn cultural facts, and earn unique rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cream rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-terracotta w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Location-Based Quests</h3>
            <p className="text-gray-600">
              Check in at real locations across Nepal to unlock special treasures and rewards. 
              Explore hidden temples, local cafes, and scenic viewpoints.
            </p>
          </div>

          <div className="bg-cream rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-forest w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6">
              <Compass size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Themed Expeditions</h3>
            <p className="text-gray-600">
              Follow curated paths with themes like "Ancient Temples," "Himalayan Vistas," 
              or "Kathmandu Food Tour" to collect all points in a series.
            </p>
          </div>

          <div className="bg-cream rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-mustard w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Collect & Share</h3>
            <p className="text-gray-600">
              Earn digital badges, unlock special content, and get real-world 
              discounts at partner locations as you complete hunts.
            </p>
          </div>
        </div>

        <div className="mt-16 relative bg-terracotta/10 rounded-2xl p-6 md:p-12">
          <div className="absolute right-8 top-8">
            <div className="animate-bounce bg-terracotta text-white p-3 rounded-full">
              <MapPin size={24} />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-forest">Current Active Hunts</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-terracotta">
                  <h4 className="font-medium">Trekker's Paradise</h4>
                  <p className="text-sm text-gray-500">5 locations • 3 rewards • Ends in 14 days</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-forest">
                  <h4 className="font-medium">Sacred Temples of Kathmandu</h4>
                  <p className="text-sm text-gray-500">7 locations • 5 rewards • Ends in 30 days</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-mustard">
                  <h4 className="font-medium">Pokhara Lake Mystery</h4>
                  <p className="text-sm text-gray-500">4 locations • 2 rewards • Ends in 7 days</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Treasure hunting" 
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg">
                <span className="block text-forest font-bold">238</span>
                <span className="text-xs text-gray-500">Treasures found today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasureHunting;
