'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function ProfilePage() {
  const { getCartItemCount } = useCart();
  const [countdown, setCountdown] = useState(5);
  const [userInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2024-01-15'
  });

  const [orderHistory] = useState([
    {
      id: 'ORD-001',
      date: '2024-01-20',
      items: 3,
      total: 85.00,
      status: 'Completed'
    },
    {
      id: 'ORD-002',
      date: '2024-01-18',
      items: 1,
      total: 25.00,
      status: 'Ready for Pickup'
    }
  ]);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

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
            <nav className="hidden md:flex space-x-6">
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
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Welcome Message with Countdown */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Profile!</h1>
          <p className="text-gray-600 mb-4">
            You have successfully logged in. Explore your account details and order history below.
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600">
              Profile loaded in <span className="font-bold text-lg text-[#2E7D32]">{countdown}</span> seconds
            </p>
            <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-[#2E7D32] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-900">{userInfo.name}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-900">{userInfo.email}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-900">{userInfo.phone}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-gray-900">{new Date(userInfo.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors">
              Edit Profile
            </button>
          </div>

          {/* Order History */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
            
            <div className="grid grid-cols-1 gap-4">
              {orderHistory.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                        <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{order.items} item{order.items !== 1 ? 's' : ''}</span>
                      <span className="font-semibold text-[#2E7D32]">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons row */}
            <div className="flex gap-4 mt-6">
              <Link href="/home" className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center">
                Continue Shopping
              </Link>
              <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
