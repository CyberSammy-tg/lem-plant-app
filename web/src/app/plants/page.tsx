'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function PlantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<null | {id: number, name: string, price: number, environment: string, care: string}>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, getCartItemCount } = useCart();

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

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.environment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Searching for plants:', searchQuery);
    // Optional: Add analytics or additional search logic here
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const hasSearchResults = searchQuery.trim() !== '';
  const totalResults = filteredPlants.length;

  const handleViewDetails = (plant: {id: number, name: string, price: number, environment: string, care: string}) => {
    setSelectedPlant(plant);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setSelectedPlant(null);
  };

  const handleAddToCart = () => {
    if (selectedPlant) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: selectedPlant.id,
          type: 'plant',
          name: selectedPlant.name,
          price: selectedPlant.price,
          image: '/placeholder-plant.jpg'
        });
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
            <nav className="hidden md:flex space-x-6">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Home</a>
              <a href="/plants" className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E7D32]">Plants</a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Rabbits</a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Info</a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600 relative">
                🛒 Cart
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Enhanced Search Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🌿 Find Your Perfect Plant</h2>
            <div className="flex gap-3 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="🔍 Search for plants by name, environment, or care type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-6 py-3 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-[#2E7D32] focus:border-[#2E7D32] text-lg font-medium shadow-lg transition-all duration-300 placeholder-gray-600"
              />
              <button
                onClick={handleSearch}
                className="bg-[#2E7D32] text-white px-8 py-3 rounded-xl hover:bg-[#1B5E20] transition-all duration-300 font-semibold text-lg shadow-lg"
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
                  Found {totalResults} plant{totalResults !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Plants Cards */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🌿 Our Plants Collection</h2>
            <p className="text-gray-600">Discover our carefully selected plants for your home and garden</p>
          </div>

          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlants.map((plant) => (
              <div key={plant.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-100 flex items-center justify-center border-b">
                  <span className="text-gray-400 text-sm">Plant Image</span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{plant.name}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Price:</span>
                      <span className="text-2xl font-bold text-[#2E7D32]">${plant.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Environment:</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{plant.environment}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleViewDetails(plant)}
                    className="w-full bg-[#2E7D32] text-white py-3 rounded-xl font-semibold hover:bg-[#1B5E20] transition-all duration-300 hover:scale-105"
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No plants found</h3>
              <p className="text-gray-600 mb-6">Try searching with different keywords like plant names, environments, or care types</p>
              <button
                onClick={clearSearch}
                className="bg-[#2E7D32] text-white px-6 py-3 rounded-xl hover:bg-[#1B5E20] transition-all duration-300 font-semibold"
              >
                Show All Plants
              </button>
            </div>
          ) : null}
        </div>

        {/* Plant Care Tips Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🌿 Plant Care Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proper Watering</h4>
              <p className="text-sm text-gray-600">Water when soil feels dry to touch. Avoid overwatering to prevent root rot.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">☀️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Right Lighting</h4>
              <p className="text-sm text-gray-600">Place plants according to their light requirements - bright, indirect light for most.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Regular Care</h4>
              <p className="text-sm text-gray-600">Prune dead leaves, fertilize monthly, and repot when roots outgrow the container.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Plant Details Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedPlant.name}</h3>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200"
              >
                ✕
              </button>
            </div>

            {/* Plant Image Placeholder */}
            <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
              <span className="text-gray-400 text-lg">Plant Image</span>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#2E7D32]">
                {selectedPlant.environment}
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Price Section */}
              <div className="bg-green-50 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">Price:</span>
                  <span className="text-3xl font-bold text-[#2E7D32]">${selectedPlant.price}</span>
                </div>
              </div>

              {/* Environment Section */}
              <div className="bg-blue-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700">Environment:</span>
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPlant.environment}
                </span>
              </div>

              {/* Care Instructions */}
              <div className="bg-purple-50 p-4 rounded-2xl">
                <span className="text-lg font-semibold text-gray-700 block mb-2">Care Instructions:</span>
                <p className="text-gray-600">{selectedPlant.care}</p>
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
                    <span className="w-12 text-center text-2xl font-bold text-[#2E7D32]">{quantity}</span>
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
                className="w-full bg-[#2E7D32] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#1B5E20] transition-all duration-300 hover:scale-105"
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
