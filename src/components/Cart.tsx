import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  closeCart: () => void;
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  closeCart, 
  cartItems, 
  removeFromCart, 
  updateQuantity 
}) => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50"
          onClick={closeCart}
        ></div>
      )}
      
      {/* Cart panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="p-1 rounded-full hover:bg-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-grow overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <ShoppingBag size={64} className="text-gray-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Looks like you haven't added any items to your cart yet.</p>
                <button 
                  onClick={closeCart}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="px-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-b border-gray-800 pb-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">${item.price.toFixed(2)}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-gray-700 rounded-full">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-800 p-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full py-3 mt-2 bg-transparent border border-gray-700 rounded-full text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;