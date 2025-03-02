import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionShowcase: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: "Elemental Series",
      description: "Fragrances inspired by the four elements: fire, water, earth, and air.",
      image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-500/80 to-orange-500/80"
    },
    {
      id: 2,
      name: "Mythical Beasts",
      description: "Scents that embody the power and majesty of legendary creatures.",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500/80 to-purple-500/80"
    },
    {
      id: 3,
      name: "Enchanted Realms",
      description: "Transport yourself to magical worlds with these otherworldly fragrances.",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f2c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500/80 to-teal-500/80"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Signature Collections</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our themed collections, each telling a unique story through carefully crafted fragrances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative h-96 rounded-lg overflow-hidden">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-80`}></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-white/90 mb-6">{collection.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-white font-medium group-hover:underline"
                >
                  Explore Collection
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;