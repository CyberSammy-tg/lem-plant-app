'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const { cartItems, getCartTotal } = useCart();

  // This page now only shows checkout options - no order processing
  // Order processing happens on individual auth pages

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/home" className="text-white hover:text-green-200 transition-colors">Home</Link>
              <Link href="/plants" className="text-white hover:text-green-200 transition-colors">Plants</Link>
              <Link href="/rabbits" className="text-white hover:text-green-200 transition-colors">Rabbits</Link>
              <Link href="/info" className="text-white hover:text-green-200 transition-colors">Info</Link>
              <Link href="/cart" className="text-white hover:text-green-200 transition-colors">Cart</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Contextual Prompt */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
          <p className="text-green-900">
            Please select one of the checkout options below to continue: Login, Sign Up, or Guest Checkout.
            This helps us apply discounts for new users and keep your order history in one place.
          </p>
        </div>

        {/* Auth Mode Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Choose your checkout option</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/guest-checkout"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-[#2E7D32] hover:bg-green-50 transition-all text-center"
            >
              <div className="text-2xl mb-2">👤</div>
              <div className="font-semibold">Guest Checkout</div>
              <div className="text-sm text-gray-600">Quick and easy</div>
            </Link>

            <Link
              href="/login"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-[#2E7D32] hover:bg-green-50 transition-all text-center"
            >
              <div className="text-2xl mb-2">🔑</div>
              <div className="font-semibold">Login</div>
              <div className="text-sm text-gray-600">Existing customer</div>
            </Link>

            <Link
              href="/signup"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-[#2E7D32] hover:bg-green-50 transition-all text-center"
            >
              <div className="text-2xl mb-2">✨</div>
              <div className="font-semibold">Sign Up</div>
              <div className="text-sm text-green-600">New users get 10% off</div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column replaced: contextual guidance only */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Select an option above to continue</h3>
              <p className="text-gray-600">Login for faster checkout, create an account for a 10% new user discount, or proceed as a guest.</p>
            </div>
          </div>

          {/* Order Summary (kept in current position) */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.uniqueId} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-600">
                      {item.type === 'rabbit' && item.age && `${item.age} months old • `}
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-[#2E7D32] mt-2">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-800">
                <div className="font-semibold mb-2">📍 Pickup Information</div>
                <div>• Items will be ready for pickup at our nursery</div>
                <div>• Please bring a valid ID and your order confirmation</div>
                <div>• Contact us if you need to reschedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
