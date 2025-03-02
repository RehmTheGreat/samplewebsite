import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mika Tanaka",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "Sakura Blaze perfectly captures the essence of my favorite anime heroine. I feel powerful and confident whenever I wear it!",
      product: "Sakura Blaze"
    },
    {
      id: 2,
      name: "Kai Nakamura",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "Midnight Warrior has become my signature scent. The dark, mysterious notes match my personality perfectly. I get compliments everywhere I go.",
      product: "Midnight Warrior"
    },
    {
      id: 3,
      name: "Yuna Kim",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      text: "Electric Dreams is so unique! It's energizing and calming at the same time. The bottle design is also absolutely gorgeous.",
      product: "Electric Dreams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover why anime enthusiasts and fragrance lovers alike are obsessed with our unique scents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <p className="text-sm text-purple-400">On {testimonial.product}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Fragrance Community</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for exclusive offers, new releases, and anime-inspired fragrance tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-black/50 border border-purple-500/50 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:rounded-l-lg mb-2 sm:mb-0 focus:outline-none focus:border-purple-500 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg sm:rounded-l-none rounded-l-lg sm:rounded-r-lg text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;