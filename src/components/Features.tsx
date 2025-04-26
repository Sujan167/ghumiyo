
import { Film, Map, Users, Tent } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Travel Stories & Reels",
      description: "Share your Nepalese adventures through captivating stories and short-form videos.",
      icon: <Film className="h-10 w-10 text-terracotta" />
    },
    {
      title: "Treasure Hunts & Hidden Paths",
      description: "Discover secret locations and participate in interactive challenges across Nepal.",
      icon: <Map className="h-10 w-10 text-terracotta" />
    },
    {
      title: "Map-Based Discovery",
      description: "Explore Nepal through interactive maps highlighting destinations and experiences.",
      icon: <Tent className="h-10 w-10 text-terracotta" />
    },
    {
      title: "Join Tribes & Challenges",
      description: "Connect with like-minded travelers and complete community adventures together.",
      icon: <Users className="h-10 w-10 text-terracotta" />
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">What You Can Do on Ghumiyo</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-forest rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            More than just a travel app — Ghumiyo is your gateway to authentic Nepalese experiences 
            and a community of adventurous souls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-cream rounded-2xl p-6 shadow-md card-hover flex flex-col items-center text-center"
            >
              <div className="mb-5 bg-white p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-forest">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
