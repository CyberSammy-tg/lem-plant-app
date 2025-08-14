'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (success && countdown > 0) {
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
    if (success && countdown === 0) {
      window.location.href = '/profile';
    }
  }, [success, countdown]);

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
      setSuccess(true);
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

      <main className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
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
              <p className="text-gray-700 mb-4">Logged in successfully!</p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  Redirecting to your profile in <span className="font-bold">{countdown}</span> seconds...
                </p>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: `${((5 - countdown) / 5) * 100}%` }} />
                </div>
              </div>
              <div className="space-y-3">
                <Link href="/profile" className="block w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors">
                  View Profile
                </Link>
                <Link href="/home" className="block w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

