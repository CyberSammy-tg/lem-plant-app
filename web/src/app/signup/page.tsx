'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Created</h1>
          <p className="text-gray-600 mb-6">Welcome! You&apos;ve received a 10% new user discount.</p>
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="bg-white rounded-2xl shadow-lg p-8">
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
  );
}

