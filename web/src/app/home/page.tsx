'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  // Filter plants based on search query
  const filteredPlants = featuredPlants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.environment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter rabbits based on search query
  const filteredRabbits = featuredRabbits.filter(rabbit =>
    rabbit.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rabbit.temperament.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    // Search functionality is handled by the filters above
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
              <Link href="/" className="transition-transform duration-300 hover:scale-105">
                <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="/home" className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E7D32] hover:scale-105">
                Home
              </a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Plants
              </a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Rabbits
              </a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Info
              </a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105">
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
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-600 text-lg font-medium shadow-lg border-2 border-transparent focus:border-white focus:outline-none transition-all duration-300"
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
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🌿 Featured Plants</h2>
            <p className="text-gray-600">Discover our most popular plants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <div key={plant.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image Placeholder */}
                <div className="h-40 bg-gray-100 flex items-center justify-center border-b">
                  <span className="text-gray-400 text-sm">Plant Image</span>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{plant.name}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Price:</span>
                      <span className="text-xl font-bold text-[#2E7D32]">${plant.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Environment:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{plant.environment}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#2E7D32] text-white py-2 rounded-xl font-semibold hover:bg-[#1B5E20] transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Rabbits Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🐰 Featured Rabbits</h2>
            <p className="text-gray-600">Meet our adorable rabbit breeds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRabbits.map((rabbit) => (
              <div key={rabbit.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image Placeholder */}
                <div className="h-40 bg-gray-100 flex items-center justify-center border-b">
                  <span className="text-gray-400 text-sm">Rabbit Image</span>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{rabbit.breed}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Price:</span>
                      <span className="text-xl font-bold text-orange-500">${rabbit.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Temperament:</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">{rabbit.temperament}</span>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>


    </div>
  );
}
