import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface FeaturedProductsProps {
  addToCart: (product: {id: number, name: string, price: number, image: string}) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ addToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Sakura Blaze",
      description: "A fiery blend with notes of cherry blossom and dragon's breath.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Fire Element"
    },
    {
      id: 2,
      name: "Midnight Warrior",
      description: "Dark and mysterious with hints of black lotus and moonlit forest.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Shadow Element"
    },
    {
      id: 3,
      name: "Electric Dreams",
      description: "Energizing citrus with electric blue lotus and thunderstorm accord.",
      price: 84.99,
      image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Lightning Element"
    },
    {
      id: 4,
      name: "Celestial Guardian",
      description: "Heavenly notes of star anise, cosmic musk, and guardian's amber.",
      price: 94.99,
      image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Celestial Element"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Fragrances</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most popular anime-inspired scents, each crafted to evoke the essence of your favorite character archetypes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <button className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors duration-300">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={() => addToCart({id: product.id, name: product.name, price: product.price, image: product.image})}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-300"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-purple-400 font-medium">{product.category}</span>
                <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;