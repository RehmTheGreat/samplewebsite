import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1612160609504-334bdc6b70c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      
      {/* Animated particles/aura effect */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-pink-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-indigo-500 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Unleash</span> Your 
            <span className="block">Inner Aura</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-lg">
            Anime-inspired fragrances that transport you to fantastical worlds and embody your favorite character archetypes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center sm:justify-start"
            >
              Shop Now
              <ChevronRight size={20} className="ml-2" />
            </a>
            <a 
              href="#collections" 
              className="px-8 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-300"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;