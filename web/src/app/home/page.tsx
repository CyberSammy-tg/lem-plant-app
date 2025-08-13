'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageLayout, Section } from '@/components/layout';
import { Button, Input, ProductCard, Card } from '@/components/ui';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{
    id: number;
    name: string;
    price: number;
    description: string;
    type: string;
    environment?: string;
    temperament?: string;
  }>>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample data - replace with actual API calls
  const featuredPlants = [
    { id: 1, name: 'Aloe Vera', price: 20, environment: 'Indoor', description: 'Low maintenance succulent perfect for beginners' },
    { id: 2, name: 'Rose Bush', price: 15, environment: 'Outdoor', description: 'Beautiful flowering plant for your garden' },
    { id: 3, name: 'Succulent Mix', price: 10, environment: 'Indoor', description: 'Variety pack of colorful succulents' },
    { id: 4, name: 'Boston Fern', price: 12, environment: 'Indoor', description: 'Lush green fern for humid environments' },
  ];

  const featuredRabbits = [
    { id: 1, name: 'Rex Lop', price: 50, temperament: 'Friendly', description: 'Gentle and affectionate rabbit breed' },
    { id: 2, name: 'Dutch Rabbit', price: 45, temperament: 'Energetic', description: 'Active and playful companion' },
    { id: 3, name: 'Flemish Giant', price: 60, temperament: 'Calm', description: 'Large, gentle giant perfect for families' },
    { id: 4, name: 'Angora Rabbit', price: 55, temperament: 'Friendly', description: 'Fluffy and docile with beautiful fur' },
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const allProducts = [
        ...featuredPlants.map(p => ({ ...p, type: 'plant' })),
        ...featuredRabbits.map(r => ({ ...r, type: 'rabbit' }))
      ];

      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.environment && product.environment.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.temperament && product.temperament.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <PageLayout cartCount={0}>
      {/* Hero Search Section */}
      <Section className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white" padding="lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            🌱 Welcome to Lem Plant Store
          </h1>
          <p className="text-lg md:text-xl mb-8 text-green-100 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Discover our featured seasonal products and find exactly what you&apos;re looking for
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto animate-fade-in-up delay-500">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for plants, rabbits, or care supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-gray-900"
                leftIcon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
              <Button
                onClick={handleSearch}
                variant="secondary"
                size="lg"
                loading={isSearching}
                className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <Section title="Search Results" subtitle={`Found ${searchResults.length} products matching "${searchQuery}"`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard
                key={`${product.type}-${product.id}`}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                badge={product.type === 'plant' ? '🌿 Plant' : '🐰 Rabbit'}
                onViewDetails={() => {
                  window.location.href = `/${product.type}s`;
                }}
                onAddToCart={() => {
                  console.log(`Adding ${product.name} to cart`);
                }}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Quick Actions */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Plants</h3>
            <p className="text-gray-600 mb-4">Discover our collection of indoor and outdoor plants</p>
            <Link href="/plants">
              <Button variant="primary" className="w-full">
                Shop Plants
              </Button>
            </Link>
          </Card>

          <Card hover className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Rabbits</h3>
            <p className="text-gray-600 mb-4">Find your perfect rabbit companion</p>
            <Link href="/rabbits">
              <Button variant="primary" className="w-full">
                Shop Rabbits
              </Button>
            </Link>
          </Card>

          <Card hover className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Care Information</h3>
            <p className="text-gray-600 mb-4">Learn about plant and rabbit care</p>
            <Link href="/info">
              <Button variant="primary" className="w-full">
                Learn More
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Featured Plants Section */}
      <Section
        title="🌿 Featured Plants"
        subtitle="Handpicked plants perfect for any home"
        action={
          <Link href="/plants">
            <Button variant="secondary">View All Plants</Button>
          </Link>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlants.map((plant) => (
            <ProductCard
              key={plant.id}
              id={plant.id}
              name={plant.name}
              price={plant.price}
              description={plant.description}
              badge={plant.environment}
              onViewDetails={() => {
                window.location.href = '/plants';
              }}
              onAddToCart={() => {
                console.log(`Adding ${plant.name} to cart`);
              }}
              className="animate-fade-in-up"
            />
          ))}
        </div>
      </Section>

      {/* Featured Rabbits Section */}
      <Section
        title="🐰 Featured Rabbits"
        subtitle="Adorable and well-cared rabbit companions"
        action={
          <Link href="/rabbits">
            <Button variant="secondary">View All Rabbits</Button>
          </Link>
        }
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRabbits.map((rabbit) => (
            <ProductCard
              key={rabbit.id}
              id={rabbit.id}
              name={rabbit.name}
              price={rabbit.price}
              description={rabbit.description}
              badge={rabbit.temperament}
              onViewDetails={() => {
                window.location.href = '/rabbits';
              }}
              onAddToCart={() => {
                console.log(`Adding ${rabbit.name} to cart`);
              }}
              className="animate-fade-in-up"
            />
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-green-100">
            Browse our full collection or visit our nursery for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plants">
              <Button variant="secondary" size="lg" className="bg-white text-[#2E7D32] hover:bg-gray-100">
                Browse All Products
              </Button>
            </Link>
            <Link href="/info">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#2E7D32]">
                Visit Our Nursery
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
