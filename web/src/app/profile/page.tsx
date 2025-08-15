'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function ProfilePage() {
  const { getCartItemCount } = useCart();
  const [showEditModal, setShowEditModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2024-01-15',
    emailUpdates: true,
    specialOffers: false
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

  const handleSignOut = () => {
    window.location.href = '/home';
  };

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleSaveProfile = () => {
    setShowEditModal(false);
    // Save logic would go here
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    // Reset form data if needed
  };

  const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-on-load animate-fade-in animate-delay-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg sticky top-0 z-50 animate-slide-in-down">
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
      <main className="max-w-4xl mx-auto px-6 py-8 animate-on-load animate-fade-in-up animate-delay-200">
        {/* Welcome Message with Countdown */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Profile!</h1>
          <p className="text-gray-600 mb-4">
            You have successfully logged in. Explore your account details and order history below.
          </p>
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
            
            <button
              onClick={handleEditProfile}
              className="w-full mt-6 bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors"
            >
              Edit Profile
            </button>
          </div>

          {/* Order History */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
            
            <div className="grid grid-cols-1 gap-4">
              {orderHistory.map((order) => (
                <Link
                  key={order.id}
                  href={`/order/${order.id}`}
                  className="block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
                >
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
                </Link>
              ))}
            </div>

            {/* Buttons row */}
            <div className="flex gap-4 mt-6">
              <Link href="/home" className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center">
                Continue Shopping
              </Link>
              <button
                onClick={handleSignOut}
                className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleProfileInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleProfileInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleProfileInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <Link href="/change-password" className="text-[#2E7D32] hover:underline text-sm">
                    🔒 Change Password
                  </Link>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Notification Preferences</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="emailUpdates"
                        checked={userInfo.emailUpdates}
                        onChange={handleProfileInputChange}
                        className="rounded border-gray-300 text-[#2E7D32] focus:ring-[#2E7D32]"
                      />
                      <span className="ml-2 text-sm text-gray-700">Email order updates</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="specialOffers"
                        checked={userInfo.specialOffers}
                        onChange={handleProfileInputChange}
                        className="rounded border-gray-300 text-[#2E7D32] focus:ring-[#2E7D32]"
                      />
                      <span className="ml-2 text-sm text-gray-700">Special offers and promotions</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleCancelEdit}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
