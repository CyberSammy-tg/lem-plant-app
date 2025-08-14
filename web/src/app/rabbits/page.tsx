'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function RabbitsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRabbit, setSelectedRabbit] = useState<null | {id: number, breed: string, price: number, temperament: string, care: string, minAge: number, maxAge: number}>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedAge, setSelectedAge] = useState('Young'); // Default to Young
  const { addToCart, getCartItemCount } = useCart();

  // Sample rabbit data - replace with actual API calls
  const rabbits = [
    { id: 1, breed: 'Rex Lop', price: 50, temperament: 'Friendly', care: 'Feed daily, gentle handling', minAge: 2, maxAge: 8 },
    { id: 2, breed: 'Dutch', price: 45, temperament: 'Energetic', care: 'Active play, regular grooming', minAge: 2, maxAge: 8 },
    { id: 3, breed: 'Flemish', price: 60, temperament: 'Calm', care: 'Large space, gentle nature', minAge: 3, maxAge: 10 },
    { id: 4, breed: 'Angora', price: 55, temperament: 'Friendly', care: 'Daily brushing, gentle care', minAge: 2, maxAge: 8 },
    { id: 5, breed: 'Lop', price: 40, temperament: 'Docile', care: 'Regular handling, social', minAge: 2, maxAge: 8 },
    { id: 6, breed: 'Dwarf', price: 35, temperament: 'Playful', care: 'Small space, active', minAge: 2, maxAge: 8 },
  ];

  const filteredRabbits = rabbits.filter(rabbit =>
    rabbit.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rabbit.temperament.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Searching for rabbits:', searchQuery);
    // Optional: Add analytics or additional search logic here
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const hasSearchResults = searchQuery.trim() !== '';
  const totalResults = filteredRabbits.length;

  const handleViewDetails = (rabbit: {id: number, breed: string, price: number, temperament: string, care: string, minAge: number, maxAge: number}) => {
    setSelectedRabbit(rabbit);
    setQuantity(1);
    setSelectedAge('Young'); // Set default age to Young
  };

  const handleCloseModal = () => {
    setSelectedRabbit(null);
  };

  const handleAddToCart = () => {
    if (selectedRabbit) {
      const ageMap = { 'Young': 3, 'Middle-aged': 12, 'Old': 24 };
      // Add the item once with the specified quantity
      const item = {
        id: selectedRabbit.id,
        type: 'rabbit' as const,
        name: selectedRabbit.breed,
        price: selectedRabbit.price,
        age: ageMap[selectedAge as keyof typeof ageMap],
        image: '/placeholder-rabbit.jpg'
      };

      // Add to cart multiple times if quantity > 1
      for (let i = 0; i < quantity; i++) {
        addToCart(item);
      }
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
              <Link href="/" className="transition-transform duration-300 hover:scale-105">
                <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Home</a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Plants</a>
              <a href="/rabbits" className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E7D32]">Rabbits</a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Info</a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600 relative">
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
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-6 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-lg font-medium shadow-lg transition-all duration-300 placeholder-gray-600"
              />
              <button
                onClick={handleSearch}
                className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 font-semibold text-lg shadow-lg"
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
                <p className="text-gray-700 text-lg">
                  Found {totalResults} rabbit{totalResults !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Rabbits Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🐰 Our Rabbits Collection</h2>
            <p className="text-gray-600">Browse our selection of premium rabbit breeds from trusted breeders</p>
          </div>

          {filteredRabbits.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRabbits.map((rabbit) => (
              <div key={rabbit.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-100 flex items-center justify-center border-b">
                  <span className="text-gray-400 text-sm">Rabbit Image</span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{rabbit.breed}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Price:</span>
                      <span className="text-2xl font-bold text-orange-500">${rabbit.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Temperament:</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">{rabbit.temperament}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleViewDetails(rabbit)}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
              ))}
            </div>
          ) : hasSearchResults ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No rabbits found</h3>
              <p className="text-gray-600 mb-6">Try searching with different keywords like breed names, temperaments, or care types</p>
              <button
                onClick={clearSearch}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 font-semibold"
              >
                Show All Rabbits
              </button>
            </div>
          ) : null}
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

      {/* Enhanced Rabbit Details Modal */}
      {selectedRabbit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedRabbit.breed} Rabbit</h3>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200"
              >
                ✕
              </button>
            </div>

            {/* Rabbit Image Placeholder */}
            <div className="h-64 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center relative">
              <span className="text-gray-400 text-lg">Rabbit Image</span>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-500">
                {selectedRabbit.temperament}
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Price Section */}
              <div className="bg-orange-50 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">Price:</span>
                  <span className="text-3xl font-bold text-orange-500">${selectedRabbit.price}</span>
                </div>
              </div>

              {/* Temperament Section */}
              <div className="bg-blue-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700">Temperament:</span>
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedRabbit.temperament}
                </span>
              </div>

              {/* Care Instructions */}
              <div className="bg-purple-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700 block mb-2">Care Instructions:</span>
                <p className="text-gray-600">{selectedRabbit.care}</p>
              </div>

              {/* Age Selection Dropdown */}
              <div className="bg-green-50 p-4 rounded-2xl">
                <label className="text-lg font-semibold text-gray-700 block mb-3">Age Group:</label>
                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 text-lg font-medium"
                >
                  <option value="Young">Young (2-6 months)</option>
                  <option value="Middle Aged">Middle Aged (6-24 months)</option>
                  <option value="Old">Old (24+ months)</option>
                </select>
              </div>

              {/* Quantity Controls */}
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">Quantity:</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={decreaseQuantity}
                      className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-all duration-200 font-bold text-xl"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-2xl font-bold text-orange-500">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-all duration-200 font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
