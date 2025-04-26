
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I discovered my favorite place through Ghumiyo. The recommendations took me off the beaten path to experiences I would have never found otherwise.",
      author: "Ramita S.",
      location: "Pokhara",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      quote: "The treasure hunt with my friends around Patan was unforgettable. We learned so much about the history while having a blast!",
      author: "Nischal T.",
      location: "Kathmandu",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      quote: "Being able to share my hometown's hidden gems with travelers is so rewarding. Ghumiyo connects us all through our love for Nepal.",
      author: "Anisha P.",
      location: "Bhaktapur",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">What Travelers Say</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-forest rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from our community of explorers and locals who are discovering Nepal in new ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-cream rounded-2xl p-6 shadow-md card-hover flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-mustard" fill="#E9C46A" />
                ))}
              </div>
              
              <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              
              <div className="mt-auto flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
