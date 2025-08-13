'use client';

import { useState, useMemo } from 'react';
import { PageLayout, Section } from '@/components/layout';
import { Button, Input, Select, ProductCard, Modal } from '@/components/ui';

interface Rabbit {
  id: number;
  breed: string;
  price: number;
  temperament: string;
  care: string;
  minAge: number;
  maxAge: number;
  size: string;
  color: string;
  description: string;
  difficulty: string;
}

export default function RabbitsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRabbit, setSelectedRabbit] = useState<Rabbit | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedAge, setSelectedAge] = useState(3);
  const [filters, setFilters] = useState({
    temperament: 'all',
    size: 'all',
    difficulty: 'all',
    priceRange: 'all',
    ageRange: 'all'
  });
  const [sortBy, setSortBy] = useState('breed');

  // Enhanced rabbit data with more properties
  const rabbits: Rabbit[] = [
    {
      id: 1,
      breed: 'Rex Lop',
      price: 50,
      temperament: 'Friendly',
      care: 'Feed daily, gentle handling',
      minAge: 2,
      maxAge: 8,
      size: 'Medium',
      color: 'Brown',
      description: 'Gentle and affectionate rabbit breed with soft, velvety fur. Perfect for families.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      breed: 'Dutch Rabbit',
      price: 45,
      temperament: 'Energetic',
      care: 'Active play, regular grooming',
      minAge: 2,
      maxAge: 8,
      size: 'Small',
      color: 'Black & White',
      description: 'Active and playful companion with distinctive markings. Great for interactive play.',
      difficulty: 'Medium'
    },
    {
      id: 3,
      breed: 'Flemish Giant',
      price: 60,
      temperament: 'Calm',
      care: 'Large space, gentle nature',
      minAge: 3,
      maxAge: 10,
      size: 'Large',
      color: 'Gray',
      description: 'Large, gentle giant perfect for families. Known for their docile and calm nature.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      breed: 'Angora Rabbit',
      price: 55,
      temperament: 'Friendly',
      care: 'Daily brushing, gentle care',
      minAge: 2,
      maxAge: 8,
      size: 'Medium',
      color: 'White',
      description: 'Fluffy and docile with beautiful long fur. Requires regular grooming but very rewarding.',
      difficulty: 'Hard'
    },
    {
      id: 5,
      breed: 'Holland Lop',
      price: 40,
      temperament: 'Docile',
      care: 'Regular handling, social',
      minAge: 2,
      maxAge: 8,
      size: 'Small',
      color: 'Cream',
      description: 'Small, adorable rabbit with droopy ears. Very social and loves human interaction.',
      difficulty: 'Easy'
    },
    {
      id: 6,
      breed: 'Netherland Dwarf',
      price: 35,
      temperament: 'Playful',
      care: 'Small space, active',
      minAge: 2,
      maxAge: 8,
      size: 'Small',
      color: 'Mixed',
      description: 'Tiny and energetic rabbit perfect for smaller living spaces. Very active and curious.',
      difficulty: 'Medium'
    },
    {
      id: 7,
      breed: 'Mini Rex',
      price: 48,
      temperament: 'Gentle',
      care: 'Moderate grooming, social',
      minAge: 2,
      maxAge: 9,
      size: 'Small',
      color: 'Chocolate',
      description: 'Compact rabbit with incredibly soft fur. Known for their gentle and calm personality.',
      difficulty: 'Easy'
    },
    {
      id: 8,
      breed: 'Lionhead',
      price: 52,
      temperament: 'Curious',
      care: 'Regular grooming, enrichment',
      minAge: 2,
      maxAge: 8,
      size: 'Small',
      color: 'Golden',
      description: 'Distinctive mane around the head. Very curious and intelligent, needs mental stimulation.',
      difficulty: 'Medium'
    }
  ];

  // Filter and sort rabbits
  const filteredAndSortedRabbits = useMemo(() => {
    const filtered = rabbits.filter(rabbit => {
      const matchesSearch = rabbit.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           rabbit.temperament.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           rabbit.care.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           rabbit.color.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTemperament = filters.temperament === 'all' || rabbit.temperament === filters.temperament;
      const matchesSize = filters.size === 'all' || rabbit.size === filters.size;
      const matchesDifficulty = filters.difficulty === 'all' || rabbit.difficulty === filters.difficulty;

      let matchesPrice = true;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        matchesPrice = rabbit.price >= min && (max ? rabbit.price <= max : true);
      }

      let matchesAge = true;
      if (filters.ageRange !== 'all') {
        const [minAge, maxAge] = filters.ageRange.split('-').map(Number);
        matchesAge = rabbit.minAge <= maxAge && rabbit.maxAge >= minAge;
      }

      return matchesSearch && matchesTemperament && matchesSize && matchesDifficulty && matchesPrice && matchesAge;
    });

    // Sort rabbits
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'breed':
          return a.breed.localeCompare(b.breed);
        case 'size':
          return a.size.localeCompare(b.size);
        case 'temperament':
          return a.temperament.localeCompare(b.temperament);
        default:
          return 0;
      }
    });

    return filtered;
  }, [rabbits, searchQuery, filters, sortBy]);

  const handleViewDetails = (rabbit: Rabbit) => {
    setSelectedRabbit(rabbit);
    setQuantity(1);
    setSelectedAge(rabbit.minAge + 1);
  };

  const handleCloseModal = () => {
    setSelectedRabbit(null);
  };

  const handleAddToCart = () => {
    if (selectedRabbit) {
      console.log(`Adding ${quantity} ${selectedRabbit.breed} (${selectedAge} months old) to cart`);
      // TODO: Add to cart logic
    }
    handleCloseModal();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const clearFilters = () => {
    setFilters({
      temperament: 'all',
      size: 'all',
      difficulty: 'all',
      priceRange: 'all',
      ageRange: 'all'
    });
    setSearchQuery('');
  };

  return (
    <PageLayout cartCount={0}>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white" padding="lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">🐰 Rabbit Collection</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Find your perfect rabbit companion from our carefully selected breeds
          </p>
        </div>
      </Section>

      {/* Search and Filters */}
      <Section className="bg-white border-b">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search rabbits by breed, temperament, or care requirements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              leftIcon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <Button onClick={clearFilters} variant="outline">
              Clear All
            </Button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <Select
              label="Temperament"
              value={filters.temperament}
              onChange={(e) => setFilters(prev => ({ ...prev, temperament: e.target.value }))}
              options={[
                { value: 'all', label: 'All Temperaments' },
                { value: 'Friendly', label: 'Friendly' },
                { value: 'Energetic', label: 'Energetic' },
                { value: 'Calm', label: 'Calm' },
                { value: 'Docile', label: 'Docile' },
                { value: 'Playful', label: 'Playful' },
                { value: 'Gentle', label: 'Gentle' },
                { value: 'Curious', label: 'Curious' }
              ]}
            />

            <Select
              label="Size"
              value={filters.size}
              onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))}
              options={[
                { value: 'all', label: 'All Sizes' },
                { value: 'Small', label: 'Small' },
                { value: 'Medium', label: 'Medium' },
                { value: 'Large', label: 'Large' }
              ]}
            />

            <Select
              label="Difficulty"
              value={filters.difficulty}
              onChange={(e) => setFilters(prev => ({ ...prev, difficulty: e.target.value }))}
              options={[
                { value: 'all', label: 'All Levels' },
                { value: 'Easy', label: 'Easy' },
                { value: 'Medium', label: 'Medium' },
                { value: 'Hard', label: 'Hard' }
              ]}
            />

            <Select
              label="Price Range"
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              options={[
                { value: 'all', label: 'All Prices' },
                { value: '0-40', label: 'Under $40' },
                { value: '40-50', label: '$40 - $50' },
                { value: '50-60', label: '$50 - $60' },
                { value: '60-999', label: 'Over $60' }
              ]}
            />

            <Select
              label="Age Range"
              value={filters.ageRange}
              onChange={(e) => setFilters(prev => ({ ...prev, ageRange: e.target.value }))}
              options={[
                { value: 'all', label: 'All Ages' },
                { value: '2-4', label: '2-4 months' },
                { value: '4-6', label: '4-6 months' },
                { value: '6-8', label: '6-8 months' },
                { value: '8-10', label: '8+ months' }
              ]}
            />

            <Select
              label="Sort By"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              options={[
                { value: 'breed', label: 'Breed A-Z' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
                { value: 'size', label: 'Size' },
                { value: 'temperament', label: 'Temperament' }
              ]}
            />
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Showing {filteredAndSortedRabbits.length} of {rabbits.length} rabbits</span>
            {(searchQuery || Object.values(filters).some(f => f !== 'all')) && (
              <Button onClick={clearFilters} variant="outline" size="sm">
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </Section>

      {/* Rabbits Grid */}
      <Section>
        {filteredAndSortedRabbits.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No rabbits found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <Button onClick={clearFilters} variant="primary">
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedRabbits.map((rabbit) => (
              <ProductCard
                key={rabbit.id}
                id={rabbit.id}
                name={rabbit.breed}
                price={rabbit.price}
                description={rabbit.description}
                badge={`${rabbit.temperament} • ${rabbit.size}`}
                onViewDetails={() => handleViewDetails(rabbit)}
                onAddToCart={() => {
                  console.log(`Adding ${rabbit.breed} to cart`);
                  // TODO: Add to cart logic
                }}
                className="animate-fade-in-up hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        )}
      </Section>

      {/* Rabbit Care Tips Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🐰 Rabbit Care Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Essential information to help you provide the best care for your new rabbit companion
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🏠</div>
            <h4 className="text-lg font-semibold mb-3">Housing</h4>
            <p className="text-gray-600">Provide clean, spacious hutch with proper ventilation and protection from weather.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🥕</div>
            <h4 className="text-lg font-semibold mb-3">Feeding</h4>
            <p className="text-gray-600">Ensure a balanced diet with hay, pellets, and fresh vegetables for optimal health.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🏥</div>
            <h4 className="text-lg font-semibold mb-3">Health</h4>
            <p className="text-gray-600">Regular vet checkups and proper grooming keep your rabbit healthy and happy.</p>
          </div>
        </div>
      </Section>

      {/* Rabbit Details Modal */}
      <Modal
        isOpen={!!selectedRabbit}
        onClose={handleCloseModal}
        title={selectedRabbit ? `🐰 ${selectedRabbit.breed}` : ''}
        size="lg"
      >
        {selectedRabbit && (
          <div className="space-y-6">
            {/* Rabbit Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🐰</div>
                <span className="text-gray-600">Rabbit Image</span>
              </div>
            </div>

            {/* Rabbit Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Price:</span>
                  <span className="ml-2 text-xl font-bold text-[#2E7D32]">${selectedRabbit.price}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Temperament:</span>
                  <span className="ml-2">{selectedRabbit.temperament}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Size:</span>
                  <span className="ml-2">{selectedRabbit.size}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Color:</span>
                  <span className="ml-2">{selectedRabbit.color}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Difficulty:</span>
                  <span className="ml-2">{selectedRabbit.difficulty}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Age Range:</span>
                  <span className="ml-2">{selectedRabbit.minAge}-{selectedRabbit.maxAge} months</span>
                </div>
              </div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Description:</span>
              <p className="mt-1 text-gray-600">{selectedRabbit.description}</p>
            </div>

            <div>
              <span className="font-medium text-gray-700">Care Instructions:</span>
              <p className="mt-1 text-gray-600">{selectedRabbit.care}</p>
            </div>

            {/* Age Range Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Age: {selectedAge} months
              </label>
              <input
                type="range"
                min={selectedRabbit.minAge}
                max={selectedRabbit.maxAge}
                value={selectedAge}
                onChange={(e) => setSelectedAge(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center space-x-3">
                <Button
                  onClick={decreaseQuantity}
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0"
                >
                  -
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  onClick={increaseQuantity}
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleCloseModal}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="primary"
                className="flex-1"
              >
                🛒 Add to Cart
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </PageLayout>
  );
}
