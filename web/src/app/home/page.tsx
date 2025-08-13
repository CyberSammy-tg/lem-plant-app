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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#2E7D32]">🌱 Mr. Y's Nursery & Rabbit Farm</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/home" className="text-[#2E7D32] border-b-2 border-[#2E7D32] px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/plants" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                Plants
              </a>
              <a href="/rabbits" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                Rabbits
              </a>
              <a href="/info" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                Info
              </a>
              <a href="/cart" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                🛒 Cart
              </a>
            </nav>
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

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <a href="/home" className="flex flex-col items-center p-2 text-[#2E7D32]">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">Home</span>
          </a>
          <a href="/plants" className="flex flex-col items-center p-2 text-gray-400">
            <span className="text-lg mb-1">🌿</span>
            <span className="text-xs">Plants</span>
          </a>
          <a href="/rabbits" className="flex flex-col items-center p-2 text-gray-400">
            <span className="text-lg mb-1">🐰</span>
            <span className="text-xs">Rabbits</span>
          </a>
          <a href="/info" className="flex flex-col items-center p-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Info</span>
          </a>
          <a href="/cart" className="flex flex-col items-center p-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="text-xs">Cart</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
