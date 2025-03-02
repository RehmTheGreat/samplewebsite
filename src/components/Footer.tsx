import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">POISON AURA</h3>
            <p className="text-gray-400 mb-4">
              Anime-inspired fragrances that transport you to fantastical worlds and embody your favorite character archetypes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Gift Sets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Elemental Series</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mythical Beasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Enchanted Realms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Legendary Heroes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Villains' Lair</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Poison Aura. All rights reserved.</p>
          <p className="mt-2">Designed with passion for anime enthusiasts and fragrance lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;