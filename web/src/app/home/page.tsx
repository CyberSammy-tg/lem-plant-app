'use client';

import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - replace with actual API calls
  const featuredPlants = [
    { id: 1, name: 'Aloe Vera', price: 20, environment: 'Indoor' },
    { id: 2, name: 'Rose', price: 15, environment: 'Outdoor' },
    { id: 3, name: 'Succulent', price: 10, environment: 'Indoor' },
    { id: 4, name: 'Fern', price: 12, environment: 'Indoor' },
  ];

  const featuredRabbits = [
    { id: 1, breed: 'Rex Lop', price: 50, temperament: 'Friendly' },
    { id: 2, breed: 'Dutch', price: 45, temperament: 'Energetic' },
    { id: 3, breed: 'Flemish', price: 60, temperament: 'Calm' },
    { id: 4, breed: 'Angora', price: 55, temperament: 'Friendly' },
  ];

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg border-b-2 border-[#1B5E20] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white drop-shadow-lg animate-pulse">🌱 Mr. Y&apos;s Nursery & Rabbit Farm</span>
            </div>

            {/* Enhanced Navigation */}
            <nav className="flex space-x-2">
              <a href="/home" className="bg-white/20 text-white border-2 border-white/30 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#2E7D32] hover:scale-105 shadow-lg backdrop-blur-sm">
                🏠 Home
              </a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">
                🌿 Plants
              </a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">
                🐰 Rabbits
              </a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">
                ℹ️ Info
              </a>
              <a href="/cart" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#FF5722] hover:scale-105 shadow-lg animate-bounce">
                🛒 Cart
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-gray-600 text-white p-8 rounded-lg mb-8">
          <h1 className="text-2xl font-bold text-center mb-6">Featured Seasonal Products</h1>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search bar to find specific products across the website"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button
              onClick={handleSearch}
              className="bg-[#2E7D32] text-white px-6 py-2 rounded-lg hover:bg-[#1B5E20] transition-colors"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Featured Plants Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold">🌿 Featured Plants</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Environment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {featuredPlants.map((plant) => (
                  <tr key={plant.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plant.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${plant.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plant.environment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="bg-[#2E7D32] text-white px-4 py-2 rounded text-xs hover:bg-[#1B5E20] transition-colors">
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Featured Rabbits Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold">🐰 Featured Rabbits</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperament</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {featuredRabbits.map((rabbit) => (
                  <tr key={rabbit.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rabbit.breed}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${rabbit.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rabbit.temperament}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="bg-[#2E7D32] text-white px-4 py-2 rounded text-xs hover:bg-[#1B5E20] transition-colors">
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>


    </div>
  );
}
