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
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="/home" className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E7D32]">
                Home
              </a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                Plants
              </a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                Rabbits
              </a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                Info
              </a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600">
                🛒 Cart
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Enhanced Search Section */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white p-8 rounded-xl mb-8 shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 animate-pulse">🌟 Featured Seasonal Products</h1>
          <div className="flex gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔍 Search for plants, rabbits, or anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 text-lg font-medium shadow-lg border-2 border-transparent focus:border-white focus:outline-none transition-all duration-300"
            />
            <button
              onClick={handleSearch}
              className="bg-white text-[#2E7D32] px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Search
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
