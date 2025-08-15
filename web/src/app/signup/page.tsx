'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import type { CartItem } from '@/contexts/CartContext';

export default function SignupPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [orderId, setOrderId] = useState('');
  const [snapshotItems, setSnapshotItems] = useState<CartItem[]>([]);
  const [snapshotTotal, setSnapshotTotal] = useState(0);

  useEffect(() => {
    if (success && countdown > 0) {
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
    if (success && countdown === 0) {
      window.location.href = '/profile';
    }
  }, [success, countdown]);

  const generateOrderId = () => {
    const orderNumber = Math.floor(Math.random() * 999) + 1;
    return `ORD-${orderNumber.toString().padStart(3, '0')}`;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await new Promise((r) => setTimeout(r, 1000));

      // Generate order ID and snapshot cart if items exist
      if (cartItems.length > 0) {
        const newOrderId = generateOrderId();
        setOrderId(newOrderId);
        setSnapshotItems(cartItems);
        setSnapshotTotal(getCartTotal() * 0.9); // Apply 10% new user discount
        clearCart();
      }

      setSuccess(true);
    } catch {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {snapshotItems.length > 0 ? `Order Confirmed! (${orderId})` : 'Account Created'}
          </h1>
          <p className="text-gray-600 mb-4">
            {snapshotItems.length > 0
              ? 'Your order has been placed successfully!'
              : 'Welcome! You will get 10% off your next purchase/order.'}
          </p>

          {snapshotItems.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">Items:</h3>
              {snapshotItems.map((item) => (
                <div key={item.uniqueId} className="flex justify-between text-sm mb-1">
                  <span>• {item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 font-semibold">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${snapshotTotal.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                A confirmation email has been sent to: {email}
              </p>
              <p className="text-xs text-gray-500">
                Your items will be ready for pickup within 2 hours.
              </p>
            </div>
          )}

          <div className="space-y-3">
            <Link href="/profile" className="block w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors">
              View Your Profile
            </Link>
            <Link href="/home" className="block w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Continue Shopping
            </Link>
          </div>

          {countdown > 0 && (
            <div className="mt-4 text-xs text-gray-500">
              ⏱ Redirecting to profile in {countdown} seconds...
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Floating Elements Animation */}
        <div className="absolute top-16 left-16 text-5xl animate-bounce opacity-25">🌟</div>
        <div className="absolute top-40 right-24 text-4xl animate-pulse opacity-30">✨</div>
        <div className="absolute bottom-24 left-24 text-6xl animate-bounce opacity-20" style={{animationDelay: '1.2s'}}>🎉</div>
        <div className="absolute bottom-48 right-16 text-3xl animate-pulse opacity-25" style={{animationDelay: '2.1s'}}>💫</div>
        <div className="absolute top-1/2 left-1/3 text-4xl animate-bounce opacity-15" style={{animationDelay: '0.8s'}}>🌈</div>
        <div className="absolute top-1/4 right-1/4 text-5xl animate-pulse opacity-20" style={{animationDelay: '1.7s'}}>🎊</div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-24 right-1/3 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-ping" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute bottom-36 left-1/4 w-14 h-14 bg-indigo-300 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute top-3/4 right-24 w-10 h-10 bg-purple-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-ping" style={{animationDelay: '3.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h1>

          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70"
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </main>
      </div>
    </div>
  );
}

