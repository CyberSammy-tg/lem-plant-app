'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Landing Page Header - Different from Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#2E7D32]">🌱 Lem Plant</h1>
              </div>
            </div>

            {/* Simple Navigation for Landing */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#features" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <Link href="/home">
                <Button variant="primary" size="sm">
                  Enter Store
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link href="/home">
                <Button variant="primary" size="sm">
                  Enter Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-green-200">Lem Plant</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
                Your trusted source for healthy plants and adorable rabbits.
                <br />
                Professional care, premium quality, convenient nursery pickup.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link href="/home">
                <Button variant="secondary" size="lg" className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8 py-4 text-lg">
                  🛒 Start Shopping
                </Button>
              </Link>
              <Link href="/plants">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#2E7D32] px-8 py-4 text-lg">
                  🌿 Browse Plants
                </Button>
              </Link>
              <Link href="/rabbits">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#2E7D32] px-8 py-4 text-lg">
                  🐰 Browse Rabbits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Lem Plant?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional care and premium quality for all your plant and rabbit needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#2E7D32] transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors">Premium Plants</h3>
              <p className="text-gray-600">
                Carefully selected plants with detailed care instructions and ongoing support.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#2E7D32] transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors">Healthy Rabbits</h3>
              <p className="text-gray-600">
                Well-cared rabbits from trusted breeders with health guarantees and care guides.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#2E7D32] transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors">Convenient Pickup</h3>
              <p className="text-gray-600">
                Visit our nursery to collect your plants and rabbits. Easy parking and friendly staff to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Lem Plant</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a passion for nurturing life, Lem Plant has been serving the community
                with premium quality plants and well-cared rabbits. Our nursery combines traditional
                care methods with modern techniques to ensure every plant and rabbit thrives.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in sustainable practices, ethical breeding, and providing ongoing support
                to help our customers succeed in their plant and rabbit care journey.
              </p>
              <Link href="/info">
                <Button variant="primary" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Promise</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Health guarantee on all plants and rabbits
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Expert care instructions and ongoing support
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Sustainable and ethical practices
                </li>
                <li className="flex items-center">
                  <span className="text-green-200 mr-3">✓</span>
                  Convenient nursery pickup with easy parking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our collection of plants and rabbits, or visit our nursery for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home">
              <Button variant="primary" size="lg">
                Start Shopping
              </Button>
            </Link>
            <Link href="/info">
              <Button variant="secondary" size="lg">
                Visit Our Nursery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Nursery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come see our plants and rabbits in person. Our friendly staff is ready to help you find the perfect addition to your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#2E7D32] mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-medium text-gray-900">123 Green Valley Road</p>
                    <p className="text-gray-600">Garden City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#2E7D32] mr-3 mt-1">🕒</span>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat-Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#2E7D32] mr-3 mt-1">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">Contact</p>
                    <p className="text-gray-600">Phone: (555) 123-4567</p>
                    <p className="text-gray-600">Email: info@lemplant.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Start</h3>
              <p className="text-gray-600 mb-6">
                Ready to browse our collection? Start shopping online and schedule your pickup time.
              </p>
              <div className="space-y-3">
                <Link href="/home" className="block">
                  <Button variant="primary" className="w-full">
                    🛒 Browse All Products
                  </Button>
                </Link>
                <Link href="/plants" className="block">
                  <Button variant="secondary" className="w-full">
                    🌿 Shop Plants
                  </Button>
                </Link>
                <Link href="/rabbits" className="block">
                  <Button variant="secondary" className="w-full">
                    🐰 Shop Rabbits
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">🌱 Lem Plant</h3>
              <p className="text-gray-400">
                Your trusted partner for plants and rabbits.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/plants" className="hover:text-white transition-colors">Indoor Plants</Link></li>
                <li><Link href="/plants" className="hover:text-white transition-colors">Outdoor Plants</Link></li>
                <li><Link href="/rabbits" className="hover:text-white transition-colors">Rabbits</Link></li>
                <li><Link href="/info" className="hover:text-white transition-colors">Care Guides</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/info" className="hover:text-white transition-colors">Care Instructions</Link></li>
                <li><Link href="/info" className="hover:text-white transition-colors">Pickup Information</Link></li>
                <li><Link href="/info" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/info" className="hover:text-white transition-colors">Policies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/home" className="hover:text-white transition-colors">Shop Now</Link></li>
                <li><Link href="/cart" className="hover:text-white transition-colors">View Cart</Link></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Visit Nursery</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lem Plant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
