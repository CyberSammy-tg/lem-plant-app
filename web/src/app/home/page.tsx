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
        {/* Hero Search Section */}
        <div className="relative bg-gradient-to-br from-[#2E7D32] via-[#388E3C] to-[#4CAF50] text-white p-12 rounded-3xl mb-12 overflow-hidden shadow-2xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl animate-bounce">🌱</div>
            <div className="absolute top-8 right-8 text-4xl animate-pulse">🐰</div>
            <div className="absolute bottom-4 left-1/4 text-5xl animate-spin-slow">🌿</div>
            <div className="absolute bottom-8 right-1/4 text-3xl animate-bounce delay-1000">🌸</div>
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
              🌟 Featured Seasonal Products
            </h1>
            <p className="text-xl text-center mb-8 text-green-100 animate-fade-in-up delay-300">
              Discover our handpicked collection of plants and rabbits
            </p>

            {/* Enhanced Search Bar */}
            <div className="flex gap-3 max-w-2xl mx-auto animate-fade-in-up delay-500">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="🔍 Search for plants, rabbits, or anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 text-lg shadow-lg border-2 border-transparent focus:border-white focus:outline-none transition-all duration-300 transform focus:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                onClick={handleSearch}
                className="bg-white text-[#2E7D32] px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                Search ✨
              </button>
            </div>
          </div>
        </div>

        {/* Featured Plants Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 animate-fade-in-up">
              🌿 Featured Plants
            </h2>
          </div>

          {/* Plants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlants.map((plant, index) => (
              <div
                key={plant.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Plant Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl animate-bounce group-hover:scale-110 transition-transform duration-300">🌱</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Plant Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2E7D32] transition-colors">
                    {plant.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[#2E7D32]">${plant.price}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {plant.environment}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white py-3 rounded-xl font-semibold hover:from-[#1B5E20] hover:to-[#2E7D32] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Rabbits Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 animate-fade-in-up">
              🐰 Featured Rabbits
            </h2>
          </div>

          {/* Rabbits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRabbits.map((rabbit, index) => (
              <div
                key={rabbit.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Rabbit Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl animate-bounce group-hover:scale-110 transition-transform duration-300">🐰</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Rabbit Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2E7D32] transition-colors">
                    {rabbit.breed}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[#2E7D32]">${rabbit.price}</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {rabbit.temperament}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white py-3 rounded-xl font-semibold hover:from-[#FF5722] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] rounded-3xl p-12 text-center text-white shadow-2xl animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-green-100">Explore our full collection of plants and rabbits</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/plants" className="bg-white text-[#2E7D32] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              🌿 Browse Plants
            </a>
            <a href="/rabbits" className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#FF5722] transition-all duration-300 transform hover:scale-105 shadow-lg">
              🐰 Browse Rabbits
            </a>
          </div>
        </div>
      </main>


    </div>
  );
}
