'use client';

import { useState } from 'react';

export default function RabbitsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRabbit, setSelectedRabbit] = useState<null | {id: number, breed: string, price: number, temperament: string, care: string, minAge: number, maxAge: number}>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedAge, setSelectedAge] = useState(3); // Default to 3 months

  // Sample rabbit data - replace with actual API calls
  const rabbits = [
    { id: 1, breed: 'Rex Lop', price: 50, temperament: 'Friendly', care: 'Feed daily, gentle handling', minAge: 2, maxAge: 8 },
    { id: 2, breed: 'Dutch', price: 45, temperament: 'Energetic', care: 'Active play, regular grooming', minAge: 2, maxAge: 8 },
    { id: 3, breed: 'Flemish', price: 60, temperament: 'Calm', care: 'Large space, gentle nature', minAge: 3, maxAge: 10 },
    { id: 4, breed: 'Angora', price: 55, temperament: 'Friendly', care: 'Daily brushing, gentle care', minAge: 2, maxAge: 8 },
    { id: 5, breed: 'Lop', price: 40, temperament: 'Docile', care: 'Regular handling, social', minAge: 2, maxAge: 8 },
    { id: 6, breed: 'Dwarf', price: 35, temperament: 'Playful', care: 'Small space, active', minAge: 2, maxAge: 8 },
  ];

  const handleSearch = () => {
    console.log('Searching for rabbits:', searchQuery);
  };

  const handleViewDetails = (rabbit: {id: number, breed: string, price: number, temperament: string, care: string, minAge: number, maxAge: number}) => {
    setSelectedRabbit(rabbit);
    setQuantity(1);
    setSelectedAge(rabbit.minAge + 1); // Set default age slightly above minimum
  };

  const handleCloseModal = () => {
    setSelectedRabbit(null);
  };

  const handleAddToCart = () => {
    if (selectedRabbit) {
      console.log(`Adding ${quantity} ${selectedRabbit.breed} (${selectedAge} months old) to cart`);
    }
    handleCloseModal();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Home</a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Plants</a>
              <a href="/rabbits" className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E7D32]">Rabbits</a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Info</a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600">🛒 Cart</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Enhanced Search Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🐰 Find Your Perfect Companion</h2>
            <div className="flex gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="🔍 Search for rabbits by breed, temperament, or care type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-lg font-medium shadow-lg transition-all duration-300"
              />
              <button
                onClick={handleSearch}
                className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Rabbits Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">🐰 Rabbits</h2>
            <p className="text-sm text-gray-600 mt-1">Browse our selection of premium rabbit breeds from trusted breeders</p>
          </div>
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
              {rabbits.map((rabbit) => (
                <tr key={rabbit.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rabbit.breed}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${rabbit.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rabbit.temperament}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleViewDetails(rabbit)}
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

        {/* Rabbit Care Tips Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🐰 Rabbit Care Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🏠</div>
              <h4 className="font-medium mb-2">Housing</h4>
              <p className="text-sm text-gray-600">Provide clean, spacious hutch with proper ventilation and protection from weather.</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🥕</div>
              <h4 className="font-medium mb-2">Feeding</h4>
              <p className="text-sm text-gray-600">Ensure a balanced diet with hay, pellets, and fresh vegetables for optimal health.</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h4 className="font-medium mb-2">Health</h4>
              <p className="text-sm text-gray-600">Regular vet checkups and proper grooming keep your rabbit healthy and happy.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Rabbit Details Modal */}
      {selectedRabbit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">🐰 {selectedRabbit.breed} Rabbit</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            {/* Rabbit Image Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Rabbit Image</span>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <span className="font-medium">Price:</span>
                <span className="ml-2">${selectedRabbit.price}</span>
              </div>
              <div>
                <span className="font-medium">Temperament:</span>
                <span className="ml-2">{selectedRabbit.temperament}</span>
              </div>
              <div>
                <span className="font-medium">Care:</span>
                <span className="ml-2">{selectedRabbit.care}</span>
              </div>
            </div>

            {/* Age Range Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age: {selectedAge} months
              </label>
              <input
                type="range"
                min={selectedRabbit.minAge}
                max={selectedRabbit.maxAge}
                value={selectedAge}
                onChange={(e) => setSelectedAge(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2E7D32 0%, #2E7D32 ${((selectedAge - selectedRabbit.minAge) / (selectedRabbit.maxAge - selectedRabbit.minAge)) * 100}%, #d1d5db ${((selectedAge - selectedRabbit.minAge) / (selectedRabbit.maxAge - selectedRabbit.minAge)) * 100}%, #d1d5db 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{selectedRabbit.minAge} months</span>
                <span>{selectedRabbit.maxAge} months</span>
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
