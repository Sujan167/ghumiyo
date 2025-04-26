
import { Users, MessageSquare, Share2 } from 'lucide-react';

const SocialFeatures = () => {
  return (
    <section id="social-features" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Travel Social Network</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-forest rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with like-minded travelers, share your journey, and discover new destinations 
            through the experiences of fellow explorers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ramesh Shah</h4>
                  <p className="text-sm text-gray-500">Posted 2 hours ago • Langtang Trek</p>
                </div>
              </div>

              <p className="mb-4">
                Day 3 of our Langtang trek and we just reached the most magnificent viewpoint! The mountains 
                are breathtaking this time of year. #WhereIGhumiyo #LangtangTrek
              </p>

              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Langtang Trek" 
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Users size={16} />
                  <span>24 people liked this</span>
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={16} />
                  <span>12 comments</span>
                </span>
                <span className="flex items-center gap-1">
                  <Share2 size={16} />
                  <span>Share</span>
                </span>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between mb-4">
                <div className="font-semibold text-forest">Latest Updates</div>
                <div className="text-sm text-terracotta">View all</div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center text-white font-bold">
                    <span>PJ</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Priya Joshi</span> shared an update about 
                      <span className="text-forest"> Poon Hill</span>
                    </p>
                    <p className="text-xs text-gray-500">20 minutes ago</p>
                  </div>
                </div>

                <div className="flex gap-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">
                    <span>AT</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Anish Tamang</span> completed the 
                      <span className="text-forest"> Kathmandu Food Tour</span> treasure hunt
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center text-white font-bold">
                    <span>SM</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Sita Mahato</span> is now following you
                    </p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-forest">Connect with Travelers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="User profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Maya Gurung</h4>
                    <p className="text-sm text-gray-500">Adventure Enthusiast • 120 followers</p>
                  </div>
                  <button className="bg-terracotta text-white px-4 py-1 rounded-full text-sm">Follow</button>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="User profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Bikash Poudel</h4>
                    <p className="text-sm text-gray-500">Food Blogger • 348 followers</p>
                  </div>
                  <button className="bg-terracotta text-white px-4 py-1 rounded-full text-sm">Follow</button>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="User profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Nisha Rai</h4>
                    <p className="text-sm text-gray-500">Mountain Guide • 512 followers</p>
                  </div>
                  <button className="bg-forest text-white px-4 py-1 rounded-full text-sm">Following</button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
              <p className="text-gray-600 mb-6">
                Upload photos, write stories, and share your unique travel experiences with 
                fellow travelers and explorers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-forest/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-forest" />
                  </div>
                  <span className="font-medium">Stories & Blogs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-terracotta" />
                  </div>
                  <span className="font-medium">Reels & Short Videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-mustard/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-mustard" />
                  </div>
                  <span className="font-medium">Local Tips & Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeatures;
