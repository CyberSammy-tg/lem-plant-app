'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function OrderErrorPage() {
  const { getCartItemCount } = useCart();
  
  // Mock unavailable items - in real app, this would come from the checkout process
  const [unavailableItems] = useState([
    {
      id: 1,
      name: 'Snake Plant',
      type: 'plant',
      price: 25.00,
      image: '/placeholder-plant.jpg'
    },
    {
      id: 2,
      name: 'Rex Lop',
      type: 'rabbit',
      price: 50.00,
      image: '/placeholder-rabbit.jpg'
    }
  ]);

  const handleContactSupport = () => {
    // In a real app, this would open a support chat or redirect to contact page
    window.location.href = 'mailto:support@lemplant.com?subject=Order Processing Issue';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <Link href="/" className="transition-transform duration-300 hover:scale-105">
                <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Home</a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Plants</a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Rabbits</a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Info</a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600 relative">
                🛒 Cart
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </a>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/30">
                <Link href="/login" className="text-white/90 hover:bg-white/20 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                  Login
                </Link>
                <Link href="/signup" className="bg-white text-[#2E7D32] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Error Header */}
          <div className="bg-red-50 border-b border-red-200 p-6 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Cannot Be Processed</h1>
            <p className="text-gray-600">We were unable to process your order.</p>
          </div>

          {/* Error Details */}
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Error: Some items in your cart are temporarily unavailable.</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-3">Unavailable Items</h3>
                <div className="space-y-3">
                  {unavailableItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-white rounded-lg p-4 border border-yellow-200">
                      {/* Item Image */}
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">
                          {item.type === 'rabbit' ? '🐰' : '🌱'}
                        </span>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-lg font-semibold text-gray-900">${item.price.toFixed(2)}</div>
                      </div>

                      {/* Out of Stock Badge */}
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                        Out of Stock
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link 
                href="/cart" 
                className="block w-full bg-[#2E7D32] text-white py-4 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors text-center"
              >
                Return to Cart
              </Link>
              
              <button
                onClick={handleContactSupport}
                className="block w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                📞 Contact Support
              </button>
            </div>

            {/* Support Information */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Need help?</h3>
              <p className="text-gray-600 mb-4">
                Our customer support team is available to assist you with any questions or concerns.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>📞</span>
                <button
                  onClick={handleContactSupport}
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
