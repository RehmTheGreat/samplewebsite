import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  toggleCart: () => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ toggleCart, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="md:hidden mr-4 text-purple-400 hover:text-purple-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            POISON AURA
          </a>
        </div>
        
        <div className={`fixed inset-0 bg-black/95 md:bg-transparent md:static md:flex md:items-center transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} z-40`}>
          <div className="md:hidden absolute top-4 right-4">
            <button 
              className="text-purple-400 hover:text-purple-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
            <li>
              <a href="#" className="text-lg md:text-base hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="text-lg md:text-base hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Shop
              </a>
            </li>
            <li>
              <a href="#collections" className="text-lg md:text-base hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Collections
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg md:text-base hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-purple-400 transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="relative text-white hover:text-purple-400 transition-colors"
            onClick={toggleCart}
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;