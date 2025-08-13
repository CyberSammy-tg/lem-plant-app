'use client';

import { useState } from 'react';

export default function PlantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<null | {id: number, name: string, price: number, environment: string, care: string}>(null);
  const [quantity, setQuantity] = useState(1);

  // Sample plant data - replace with actual API calls
  const plants = [
    { id: 1, name: 'Aloe Vera', price: 20, environment: 'Indoor', care: 'Thrives indoors, water weekly' },
    { id: 2, name: 'Rose', price: 15, environment: 'Outdoor', care: 'Needs sunlight, water daily' },
    { id: 3, name: 'Succulent', price: 10, environment: 'Indoor', care: 'Low maintenance, water monthly' },
    { id: 4, name: 'Fern', price: 12, environment: 'Indoor', care: 'Humid environment, water twice weekly' },
    { id: 5, name: 'Cactus', price: 8, environment: 'Indoor', care: 'Minimal water, bright light' },
    { id: 6, name: 'Lavender', price: 18, environment: 'Outdoor', care: 'Full sun, water moderately' },
    { id: 7, name: 'Snake Plant', price: 25, environment: 'Indoor', care: 'Low light, water monthly' },
    { id: 8, name: 'Basil', price: 6, environment: 'Indoor/Outdoor', care: 'Regular watering, harvest leaves' },
  ];

  const handleSearch = () => {
    console.log('Searching for plants:', searchQuery);
  };

  const handleViewDetails = (plant: {id: number, name: string, price: number, environment: string, care: string}) => {
    setSelectedPlant(plant);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setSelectedPlant(null);
  };

  const handleAddToCart = () => {
    if (selectedPlant) {
      console.log(`Adding ${quantity} ${selectedPlant.name} to cart`);
    }
    handleCloseModal();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg border-b-2 border-[#1B5E20] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white drop-shadow-lg animate-pulse">🌱 Mr. Y&apos;s Nursery & Rabbit Farm</span>
            </div>
            <nav className="flex space-x-2">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">🏠 Home</a>
              <a href="/plants" className="bg-white/20 text-white border-2 border-white/30 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#2E7D32] hover:scale-105 shadow-lg backdrop-blur-sm">🌿 Plants</a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">🐰 Rabbits</a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">ℹ️ Info</a>
              <a href="/cart" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#FF5722] hover:scale-105 shadow-lg animate-bounce">🛒 Cart</a>
            </nav>
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
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌿 Our Plant Collection
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover beautiful plants for your home and garden
          </p>
        </div>

        {/* Enhanced Search Section */}
        <div className="mb-12 animate-fade-in-up delay-300">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Your Perfect Plant</h2>
            <div className="flex gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="🔍 Search for plants by name, environment, or care type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-green-200 focus:border-[#2E7D32] focus:outline-none transition-all duration-300 text-lg shadow-lg transform focus:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white px-8 py-4 rounded-2xl hover:from-[#1B5E20] hover:to-[#2E7D32] transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                Search ✨
              </button>
            </div>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plants.map((plant, index) => (
            <div
              key={plant.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Plant Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-green-100 via-emerald-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl animate-bounce-gentle group-hover:scale-110 transition-transform duration-500">🌱</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#2E7D32]">
                  {plant.environment}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Plant Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#2E7D32] transition-colors">
                  {plant.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {plant.care}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-[#2E7D32]">${plant.price}</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    {plant.environment}
                  </span>
                </div>
                <button
                  onClick={() => handleViewDetails(plant)}
                  className="w-full bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white py-4 rounded-2xl font-semibold hover:from-[#1B5E20] hover:to-[#2E7D32] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  🌿 View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Plant Details Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl transform transition-all duration-300 animate-fade-in-up">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-gray-800 gradient-text">🌿 {selectedPlant.name}</h3>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 transform hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Enhanced Plant Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-green-100 via-emerald-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden shadow-lg">
              <div className="text-9xl animate-bounce-gentle">🌱</div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-[#2E7D32]">
                {selectedPlant.environment}
              </div>
            </div>

            {/* Enhanced Plant Details */}
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">Price:</span>
                  <span className="text-3xl font-bold text-[#2E7D32]">${selectedPlant.price}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700">Environment:</span>
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPlant.environment}
                </span>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700 block mb-2">Care Instructions:</span>
                <p className="text-gray-600 leading-relaxed">{selectedPlant.care}</p>
              </div>
            </div>

            {/* Enhanced Quantity Controls */}
            <div className="flex items-center justify-between mb-8 bg-gray-50 p-4 rounded-2xl">
              <span className="text-lg font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all duration-200 transform hover:scale-110 shadow-lg font-bold text-xl"
                >
                  -
                </button>
                <span className="w-12 text-center text-2xl font-bold text-[#2E7D32]">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white flex items-center justify-center hover:from-green-500 hover:to-green-600 transition-all duration-200 transform hover:scale-110 shadow-lg font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Enhanced Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-[#2E7D32] to-[#388E3C] text-white py-4 rounded-2xl font-bold text-lg hover:from-[#1B5E20] hover:to-[#2E7D32] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🛒 Add {quantity} to Cart - ${selectedPlant.price * quantity}
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
