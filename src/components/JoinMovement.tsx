
import { useState } from 'react';

const JoinMovement = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="join" className="section-padding bg-mustard relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="black" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest">Join the Movement</h2>
            <div className="h-1 w-24 bg-terracotta rounded-full mb-6"></div>
            <p className="mb-8 text-gray-800">
              Be part of a community that's redefining travel in Nepal. Share your stories, 
              discover hidden gems, and connect with fellow explorers.
            </p>
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold mb-4">Get Notified When We Launch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@example.com"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full justify-center"
                >
                  {submitted ? 'Thank you!' : 'Join Waitlist'}
                </button>
              </form>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                By signing up, you agree to receive updates about Ghumiyo
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-lg rotate-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Nepal Mountains" 
                  className="w-full h-auto rounded-xl aspect-video object-cover"
                />
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-forest"></div>
                    <span className="text-sm font-medium">@himalayan_explorer</span>
                  </div>
                  <div className="text-sm text-gray-500">#WhereIGhumiyo</div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-lg -rotate-2 absolute top-12 -right-4">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Nepal River" 
                  className="w-full h-auto rounded-xl aspect-square max-w-[200px] object-cover"
                />
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-terracotta"></div>
                    <span className="text-sm font-medium">@nepal_wanderer</span>
                  </div>
                  <div className="text-sm text-gray-500">#WhereIGhumiyo</div>
                </div>
              </div>
              
              <div className="mt-32 text-center">
                <h3 className="text-xl font-semibold text-forest mb-2">Download App (Coming Soon)</h3>
                <div className="flex justify-center gap-4">
                  <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <div>
                      <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.5C16.6944 21.5 20.5 17.6944 20.5 13C20.5 8.30558 16.6944 4.5 12 4.5C7.30558 4.5 3.5 8.30558 3.5 13C3.5 17.6944 7.30558 21.5 12 21.5Z" fill="white" stroke="white"/>
                        <path d="M15.93 13.33L7.92 18.39C7.7 18.54 7.42 18.4 7.38 18.13L6.17 8.28C6.12 8.01 6.36 7.77 6.62 7.86L16.15 11.14C16.41 11.22 16.47 11.56 16.27 11.74L10.54 16.95C10.4 17.08 10.18 17.08 10.04 16.95L7.6 14.65" stroke="#E76F51" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    App Store
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <div>
                      <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4.5H20C20.2761 4.5 20.5 4.72386 20.5 5V19C20.5 19.2761 20.2761 19.5 20 19.5H4C3.72386 19.5 3.5 19.2761 3.5 19V5C3.5 4.72386 3.72386 4.5 4 4.5Z" fill="white" stroke="white"/>
                        <path d="M14 9.5L8.5 12L14 14.5V9.5Z" stroke="#E76F51" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    Play Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
