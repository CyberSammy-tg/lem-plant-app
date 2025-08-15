'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, getCartItemCount } = useCart();

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
    // Optional: Add analytics or additional search logic here
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const hasSearchResults = searchQuery.trim() !== '';
  const totalResults = filteredPlants.length + filteredRabbits.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-emerald-100 rounded-full opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-teal-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg sticky top-0 z-50 animate-slide-in-down">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="transition-transform duration-300 hover:scale-105">
                <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
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
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 relative">
                🛒 Cart
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </a>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/30">
                <Link href="/login" className="text-white/90 hover:bg-white/20 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                  Login
                </Link>
                <Link href="/signup" className="bg-white text-[#2E7D32] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8 animate-on-load animate-fade-in-up animate-delay-200">
        {/* Enhanced Search Section */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white p-8 rounded-xl mb-8 shadow-lg animate-on-load animate-fade-in-up animate-delay-300">
          <h1 className="text-3xl font-bold text-center mb-6 animate-pulse">🌟 Featured Seasonal Products</h1>
          <div className="flex gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔍 Search for plants, rabbits, or anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-600 text-lg font-medium shadow-lg border-2 border-transparent focus:border-white focus:outline-none transition-all duration-300"
            />
            <button
              onClick={handleSearch}
              className="bg-white text-[#2E7D32] px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Search
            </button>
            {hasSearchResults && (
              <button
                onClick={clearSearch}
                className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Clear
              </button>
            )}
          </div>
          {hasSearchResults && (
            <div className="text-center mt-4">
              <p className="text-white/90 text-lg">
                Found {totalResults} result{totalResults !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>

        {/* Featured Plants Section */}
        <div className="mb-12 animate-on-load animate-fade-in-left animate-delay-400">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🌿 Featured Plants</h2>
            <p className="text-gray-600">Discover our most popular plants</p>
          </div>

          {filteredPlants.length > 0 ? (
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

                  <button
                    onClick={() => addToCart({
                      id: plant.id,
                      type: 'plant',
                      name: plant.name,
                      price: plant.price,
                      image: '/placeholder-plant.jpg'
                    })}
                    className="w-full bg-[#2E7D32] text-white py-2 rounded-xl font-semibold hover:bg-[#1B5E20] transition-all duration-300 hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              ))}
            </div>
          ) : hasSearchResults ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No plants found</h3>
              <p className="text-gray-600">Try searching with different keywords or browse all plants</p>
            </div>
          ) : null}
        </div>

        {/* Featured Rabbits Section */}
        <div className="mb-12 animate-on-load animate-fade-in-right animate-delay-500">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🐰 Featured Rabbits</h2>
            <p className="text-gray-600">Meet our adorable rabbit breeds</p>
          </div>

          {filteredRabbits.length > 0 ? (
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

                  <button
                    onClick={() => addToCart({
                      id: rabbit.id,
                      type: 'rabbit',
                      name: rabbit.breed,
                      price: rabbit.price,
                      image: '/placeholder-rabbit.jpg'
                    })}
                    className="w-full bg-orange-500 text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              ))}
            </div>
          ) : hasSearchResults ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No rabbits found</h3>
              <p className="text-gray-600">Try searching with different keywords or browse all rabbits</p>
            </div>
          ) : null}
        </div>

        {/* Auth Promotion Section */}
        {!hasSearchResults && (
          <div className="max-w-4xl mx-auto mt-16 mb-8">
            <div className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">🎉 Join Lem Plant Community!</h2>
              <p className="text-lg mb-6 text-white/90">
                Create an account to track your orders, save favorites, and get 10% off your next purchase!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup" className="bg-white text-[#2E7D32] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  🌟 Sign Up & Save 10%
                </Link>
                <Link href="/login" className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  🔑 Already a member? Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>


    </div>
  );
}
