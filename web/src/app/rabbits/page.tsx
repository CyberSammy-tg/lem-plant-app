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
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg border-b-2 border-[#1B5E20] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white drop-shadow-lg animate-pulse">🌱 Mr. Y&apos;s Nursery & Rabbit Farm</span>
            </div>
            <nav className="flex space-x-2">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">🏠 Home</a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:scale-105 backdrop-blur-sm">🌿 Plants</a>
              <a href="/rabbits" className="bg-white/20 text-white border-2 border-white/30 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#2E7D32] hover:scale-105 shadow-lg backdrop-blur-sm">🐰 Rabbits</a>
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
            🐰 Our Rabbit Collection
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover adorable rabbits from trusted breeders
          </p>
        </div>

        {/* Enhanced Search Section */}
        <div className="mb-12 animate-fade-in-up delay-300">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Your Perfect Companion</h2>
            <div className="flex gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="🔍 Search for rabbits by breed, temperament, or care type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-orange-200 focus:border-[#FF6B35] focus:outline-none transition-all duration-300 text-lg shadow-lg transform focus:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-8 py-4 rounded-2xl hover:from-[#FF5722] hover:to-[#FF6B35] transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                Search ✨
              </button>
            </div>
          </div>
        </div>

        {/* Rabbits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rabbits.map((rabbit, index) => (
            <div
              key={rabbit.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rabbit Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl animate-bounce-gentle group-hover:scale-110 transition-transform duration-500">🐰</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#FF6B35]">
                  {rabbit.temperament}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Rabbit Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {rabbit.breed}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {rabbit.care}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-[#FF6B35]">${rabbit.price}</span>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                    {rabbit.temperament}
                  </span>
                </div>
                <button
                  onClick={() => handleViewDetails(rabbit)}
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white py-4 rounded-2xl font-semibold hover:from-[#FF5722] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  🐰 View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Rabbit Care Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-12 shadow-lg animate-fade-in-up">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">🐰 Rabbit Care Essentials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-6xl mb-4 animate-bounce-gentle">🏠</div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Housing</h4>
              <p className="text-gray-600 leading-relaxed">Provide clean, spacious hutch with proper ventilation and protection from weather.</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-6xl mb-4 animate-bounce-gentle delay-300">🥕</div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Feeding</h4>
              <p className="text-gray-600 leading-relaxed">Ensure a balanced diet with hay, pellets, and fresh vegetables for optimal health.</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-6xl mb-4 animate-bounce-gentle delay-500">🏥</div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Health</h4>
              <p className="text-gray-600 leading-relaxed">Regular vet checkups and proper grooming keep your rabbit healthy and happy.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Rabbit Details Modal */}
      {selectedRabbit && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl transform transition-all duration-300 animate-fade-in-up">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-gray-800">🐰 {selectedRabbit.breed} Rabbit</h3>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 transform hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Enhanced Rabbit Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden shadow-lg">
              <div className="text-9xl animate-bounce-gentle">🐰</div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-[#FF6B35]">
                {selectedRabbit.temperament}
              </div>
            </div>

            {/* Enhanced Rabbit Details */}
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">Price:</span>
                  <span className="text-3xl font-bold text-[#FF6B35]">${selectedRabbit.price}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700">Temperament:</span>
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedRabbit.temperament}
                </span>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700 block mb-2">Care Instructions:</span>
                <p className="text-gray-600 leading-relaxed">{selectedRabbit.care}</p>
              </div>
            </div>

            {/* Enhanced Age Range Selector */}
            <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
              <label className="block text-lg font-semibold text-gray-700 mb-4 text-center">
                Select Age: {selectedAge} months old
              </label>
              <input
                type="range"
                min={selectedRabbit.minAge}
                max={selectedRabbit.maxAge}
                value={selectedAge}
                onChange={(e) => setSelectedAge(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${((selectedAge - selectedRabbit.minAge) / (selectedRabbit.maxAge - selectedRabbit.minAge)) * 100}%, #d1d5db ${((selectedAge - selectedRabbit.minAge) / (selectedRabbit.maxAge - selectedRabbit.minAge)) * 100}%, #d1d5db 100%)`
                }}
              />
              <div className="flex justify-between text-sm font-medium text-gray-600 mt-2">
                <span>{selectedRabbit.minAge} months</span>
                <span>{selectedRabbit.maxAge} months</span>
              </div>
            </div>

            {/* Enhanced Quantity Controls */}
            <div className="flex items-center justify-between mb-8 bg-gray-50 p-6 rounded-2xl">
              <span className="text-lg font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all duration-200 transform hover:scale-110 shadow-lg font-bold text-xl"
                >
                  -
                </button>
                <span className="w-12 text-center text-2xl font-bold text-[#FF6B35]">{quantity}</span>
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
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white py-4 rounded-2xl font-bold text-lg hover:from-[#FF5722] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🛒 Add {quantity} to Cart - ${selectedRabbit.price * quantity}
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
