'use client';

import { useState, useMemo } from 'react';
import { PageLayout, Section } from '@/components/layout';
import { Button, Input, Select, ProductCard, Modal } from '@/components/ui';

interface Plant {
  id: number;
  name: string;
  price: number;
  environment: string;
  care: string;
  category: string;
  difficulty: string;
  size: string;
  description: string;
}

export default function PlantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [filters, setFilters] = useState({
    environment: 'all',
    category: 'all',
    difficulty: 'all',
    priceRange: 'all'
  });
  const [sortBy, setSortBy] = useState('name');

  // Enhanced plant data with more properties
  const plants: Plant[] = [
    {
      id: 1,
      name: 'Aloe Vera',
      price: 20,
      environment: 'Indoor',
      care: 'Thrives indoors, water weekly',
      category: 'Succulent',
      difficulty: 'Easy',
      size: 'Small',
      description: 'Perfect healing plant for beginners. Low maintenance and great for air purification.'
    },
    {
      id: 2,
      name: 'Rose Bush',
      price: 15,
      environment: 'Outdoor',
      care: 'Needs sunlight, water daily',
      category: 'Flowering',
      difficulty: 'Medium',
      size: 'Large',
      description: 'Beautiful flowering plant that adds color and fragrance to your garden.'
    },
    {
      id: 3,
      name: 'Succulent Mix',
      price: 10,
      environment: 'Indoor',
      care: 'Low maintenance, water monthly',
      category: 'Succulent',
      difficulty: 'Easy',
      size: 'Small',
      description: 'Variety pack of colorful succulents perfect for desk or windowsill.'
    },
    {
      id: 4,
      name: 'Boston Fern',
      price: 12,
      environment: 'Indoor',
      care: 'Humid environment, water twice weekly',
      category: 'Foliage',
      difficulty: 'Medium',
      size: 'Medium',
      description: 'Lush green fern that thrives in humid environments and indirect light.'
    },
    {
      id: 5,
      name: 'Barrel Cactus',
      price: 8,
      environment: 'Indoor',
      care: 'Minimal water, bright light',
      category: 'Cactus',
      difficulty: 'Easy',
      size: 'Small',
      description: 'Desert plant that requires minimal care and adds unique character.'
    },
    {
      id: 6,
      name: 'Lavender',
      price: 18,
      environment: 'Outdoor',
      care: 'Full sun, water moderately',
      category: 'Herb',
      difficulty: 'Medium',
      size: 'Medium',
      description: 'Aromatic herb perfect for gardens, cooking, and natural remedies.'
    },
    {
      id: 7,
      name: 'Snake Plant',
      price: 25,
      environment: 'Indoor',
      care: 'Low light, water monthly',
      category: 'Foliage',
      difficulty: 'Easy',
      size: 'Large',
      description: 'Extremely hardy plant that tolerates neglect and purifies air.'
    },
    {
      id: 8,
      name: 'Basil',
      price: 6,
      environment: 'Indoor/Outdoor',
      care: 'Regular watering, harvest leaves',
      category: 'Herb',
      difficulty: 'Easy',
      size: 'Small',
      description: 'Fresh culinary herb that grows quickly and provides continuous harvest.'
    },
    {
      id: 9,
      name: 'Monstera Deliciosa',
      price: 35,
      environment: 'Indoor',
      care: 'Bright indirect light, water weekly',
      category: 'Foliage',
      difficulty: 'Medium',
      size: 'Large',
      description: 'Trendy houseplant with unique split leaves, perfect statement piece.'
    },
    {
      id: 10,
      name: 'Sunflower',
      price: 8,
      environment: 'Outdoor',
      care: 'Full sun, water daily',
      category: 'Flowering',
      difficulty: 'Easy',
      size: 'Large',
      description: 'Cheerful annual flower that follows the sun and attracts pollinators.'
    }
  ];

  // Filter and sort plants
  const filteredAndSortedPlants = useMemo(() => {
    const filtered = plants.filter(plant => {
      const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           plant.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           plant.care.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesEnvironment = filters.environment === 'all' || plant.environment === filters.environment;
      const matchesCategory = filters.category === 'all' || plant.category === filters.category;
      const matchesDifficulty = filters.difficulty === 'all' || plant.difficulty === filters.difficulty;

      let matchesPrice = true;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        matchesPrice = plant.price >= min && (max ? plant.price <= max : true);
      }

      return matchesSearch && matchesEnvironment && matchesCategory && matchesDifficulty && matchesPrice;
    });

    // Sort plants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'difficulty':
          return a.difficulty.localeCompare(b.difficulty);
        default:
          return 0;
      }
    });

    return filtered;
  }, [plants, searchQuery, filters, sortBy]);

  const handleViewDetails = (plant: Plant) => {
    setSelectedPlant(plant);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setSelectedPlant(null);
  };

  const handleAddToCart = () => {
    if (selectedPlant) {
      console.log(`Adding ${quantity} ${selectedPlant.name} to cart`);
      // TODO: Add to cart logic
    }
    handleCloseModal();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const clearFilters = () => {
    setFilters({
      environment: 'all',
      category: 'all',
      difficulty: 'all',
      priceRange: 'all'
    });
    setSearchQuery('');
  };

  return (
    <PageLayout cartCount={0}>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white" padding="lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">🌿 Plant Collection</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Discover our carefully curated selection of indoor and outdoor plants
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
              placeholder="Search plants by name, category, or care requirements..."
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select
              label="Environment"
              value={filters.environment}
              onChange={(e) => setFilters(prev => ({ ...prev, environment: e.target.value }))}
              options={[
                { value: 'all', label: 'All Environments' },
                { value: 'Indoor', label: 'Indoor' },
                { value: 'Outdoor', label: 'Outdoor' },
                { value: 'Indoor/Outdoor', label: 'Indoor/Outdoor' }
              ]}
            />

            <Select
              label="Category"
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              options={[
                { value: 'all', label: 'All Categories' },
                { value: 'Succulent', label: 'Succulents' },
                { value: 'Flowering', label: 'Flowering' },
                { value: 'Foliage', label: 'Foliage' },
                { value: 'Herb', label: 'Herbs' },
                { value: 'Cactus', label: 'Cacti' }
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
                { value: '0-10', label: 'Under $10' },
                { value: '10-20', label: '$10 - $20' },
                { value: '20-30', label: '$20 - $30' },
                { value: '30-999', label: 'Over $30' }
              ]}
            />

            <Select
              label="Sort By"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              options={[
                { value: 'name', label: 'Name A-Z' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
                { value: 'difficulty', label: 'Difficulty' }
              ]}
            />
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Showing {filteredAndSortedPlants.length} of {plants.length} plants</span>
            {(searchQuery || Object.values(filters).some(f => f !== 'all')) && (
              <Button onClick={clearFilters} variant="outline" size="sm">
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </Section>

      {/* Plants Grid */}
      <Section>
        {filteredAndSortedPlants.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No plants found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <Button onClick={clearFilters} variant="primary">
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedPlants.map((plant) => (
              <ProductCard
                key={plant.id}
                id={plant.id}
                name={plant.name}
                price={plant.price}
                description={plant.description}
                badge={`${plant.difficulty} • ${plant.environment}`}
                onViewDetails={() => handleViewDetails(plant)}
                onAddToCart={() => {
                  console.log(`Adding ${plant.name} to cart`);
                  // TODO: Add to cart logic
                }}
                className="animate-fade-in-up hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        )}
      </Section>

      {/* Plant Details Modal */}
      <Modal
        isOpen={!!selectedPlant}
        onClose={handleCloseModal}
        title={selectedPlant ? `🌿 ${selectedPlant.name}` : ''}
        size="lg"
      >
        {selectedPlant && (
          <div className="space-y-6">
            {/* Plant Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🌿</div>
                <span className="text-gray-600">Plant Image</span>
              </div>
            </div>

            {/* Plant Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Price:</span>
                  <span className="ml-2 text-xl font-bold text-[#2E7D32]">${selectedPlant.price}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Environment:</span>
                  <span className="ml-2">{selectedPlant.environment}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="ml-2">{selectedPlant.category}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Difficulty:</span>
                  <span className="ml-2">{selectedPlant.difficulty}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Size:</span>
                  <span className="ml-2">{selectedPlant.size}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Description:</span>
              <p className="mt-1 text-gray-600">{selectedPlant.description}</p>
            </div>

            <div>
              <span className="font-medium text-gray-700">Care Instructions:</span>
              <p className="mt-1 text-gray-600">{selectedPlant.care}</p>
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
