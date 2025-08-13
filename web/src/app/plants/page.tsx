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
        {/* Search Section */}
        <div className="mb-6">
          <div className="flex gap-2 max-w-md">
            <input
              type="text"
              placeholder="Search bar to find specific plants"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
            />
            <button
              onClick={handleSearch}
              className="bg-[#2E7D32] text-white px-6 py-2 rounded-lg hover:bg-[#1B5E20] transition-colors"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Plants Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">🌿 Plants</h2>
          </div>
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
              {plants.map((plant) => (
                <tr key={plant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plant.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${plant.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plant.environment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleViewDetails(plant)}
                      className="bg-[#2E7D32] text-white px-4 py-2 rounded text-xs hover:bg-[#1B5E20] transition-colors"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Plant Details Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">🌿 {selectedPlant.name}</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            {/* Plant Image Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Plant Image</span>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <span className="font-medium">Price:</span>
                <span className="ml-2">${selectedPlant.price}</span>
              </div>
              <div>
                <span className="font-medium">Environment:</span>
                <span className="ml-2">{selectedPlant.environment}</span>
              </div>
              <div>
                <span className="font-medium">Care:</span>
                <span className="ml-2">{selectedPlant.care}</span>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={decreaseQuantity}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
