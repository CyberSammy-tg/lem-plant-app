'use client';

import Link from 'next/link';

export default function InfoPage() {
  const plantFacts = [
    {
      name: "Aloe Vera",
      image: "Aloe Vera Plant Image",
      facts: "Purifies air and thrives in indirect sunlight! Contains healing gel that can be used for minor burns and skin irritation. Low maintenance - perfect for beginners."
    },
    {
      name: "Snake Plant",
      image: "Snake Plant Image",
      facts: "Releases oxygen at night, making it perfect for bedrooms! Can survive weeks without water and tolerates low light conditions. NASA studies show it removes toxins from air."
    },
    {
      name: "Peace Lily",
      image: "Peace Lily Image",
      facts: "Beautiful white flowers that bloom year-round! Excellent air purifier that removes harmful chemicals. Drooping leaves indicate it needs water - nature's own indicator!"
    }
  ];

  const rabbitFacts = [
    {
      name: "Rex Lop",
      image: "Rex Lop Rabbit Image",
      facts: "Known for their floppy ears and gentle nature! These rabbits make excellent indoor pets and can be litter trained. Their soft fur requires regular grooming for optimal health."
    },
    {
      name: "Dutch Rabbit",
      image: "Dutch Rabbit Image",
      facts: "Energetic and social companions that love interaction! Originally from England, they're known for their distinctive color patterns. Great for families with children due to their friendly temperament."
    },
    {
      name: "Flemish Giant",
      image: "Flemish Giant Image",
      facts: "Gentle giants that can weigh up to 15 pounds! Despite their size, they're calm and docile. Known as 'universal rabbits' for their adaptability and sweet nature."
    }
  ];
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
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Plants</a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">Rabbits</a>
              <a href="/info" className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#2E7D32]">Info</a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600">🛒 Cart</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🌿 🐰 Plant & Animal Facts</h1>
          <p className="text-lg text-gray-600">Discover fascinating facts about our plants and rabbits</p>
        </div>

        {/* Plant Facts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">🌿 Amazing Plant Facts</h2>
          <div className="space-y-8">
            {plantFacts.map((plant, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Large Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <span className="text-gray-400 text-xl font-medium">{plant.image}</span>
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full">
                    <span className="text-green-600 font-bold text-lg">{plant.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plant.name}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{plant.facts}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rabbit Facts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">🐰 Fascinating Rabbit Facts</h2>
          <div className="space-y-8">
            {rabbitFacts.map((rabbit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Large Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center relative">
                  <span className="text-gray-400 text-xl font-medium">{rabbit.image}</span>
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full">
                    <span className="text-orange-600 font-bold text-lg">{rabbit.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{rabbit.name}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{rabbit.facts}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
