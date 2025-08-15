'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import type { CartItem } from '@/contexts/CartContext';

export default function LoginPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
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
        setSnapshotTotal(getCartTotal());
        clearCart();
      }

      setSuccess(true);
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Floating Plants Animation */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">🌱</div>
        <div className="absolute top-32 right-20 text-4xl animate-pulse opacity-30">🍃</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-25" style={{animationDelay: '1s'}}>🌿</div>
        <div className="absolute bottom-40 right-10 text-3xl animate-pulse opacity-20" style={{animationDelay: '2s'}}>🌾</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-bounce opacity-15" style={{animationDelay: '0.5s'}}>🌳</div>
        <div className="absolute top-1/3 right-1/3 text-5xl animate-pulse opacity-25" style={{animationDelay: '1.5s'}}>🌲</div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-emerald-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-2/3 right-20 w-8 h-8 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1.8s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg animate-slide-in-down">
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

      <main className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 animate-fade-in-up animate-delay-300">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>

          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          {!success ? (
            <form onSubmit={handleLogin} className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                />
              </div>

              <div className="flex items-center justify-between">
                <Link href="/forgot-password" className="text-sm text-[#2E7D32] hover:underline">
                  Forgot password?
                </Link>
                <Link href="/signup" className="text-sm text-[#2E7D32] hover:underline">
                  New here? Create account
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Login'}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {snapshotItems.length > 0 ? `Order Confirmed! (${orderId})` : 'Logged in successfully!'}
              </h1>
              <p className="text-gray-600 mb-4">
                {snapshotItems.length > 0 ? 'Your order has been placed successfully!' : 'Welcome back!'}
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
          )}
        </div>
      </main>
      </div>
    </div>
  );
}

