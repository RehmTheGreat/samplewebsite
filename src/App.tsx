import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import CollectionShowcase from './components/CollectionShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, image: string, quantity: number}>>([]);

  const addToCart = (product: {id: number, name: string, price: number, image: string}) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        return [...prevCart, {...product, quantity: 1}];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? {...item, quantity: newQuantity} : item
      )
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar toggleCart={toggleCart} cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Hero />
      <FeaturedProducts addToCart={addToCart} />
      <CollectionShowcase />
      <Testimonials />
      <Footer />
      <Cart 
        isOpen={isCartOpen} 
        closeCart={() => setIsCartOpen(false)} 
        cartItems={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;