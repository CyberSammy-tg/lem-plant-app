import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <h1 className="text-2xl font-bold text-white">🌱 Lem Plant</h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/home" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Home
              </a>
              <a href="/plants" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Plants
              </a>
              <a href="/rabbits" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Rabbits
              </a>
              <a href="/info" className="text-white/90 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                Info
              </a>
              <a href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105">
                🛒 Cart
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white p-2 rounded-lg hover:bg-white/20 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Lem Plant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Your trusted source for healthy plants and adorable rabbits.
              Professional care, premium quality, visit our nursery for pickup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/home" className="bg-white text-[#2E7D32] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Start Shopping 🛒
              </a>
              <a href="/plants" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2E7D32] transition-colors text-center">
                Shop Plants 🌿
              </a>
              <a href="/rabbits" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2E7D32] transition-colors text-center">
                Shop Rabbits 🐰
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Lem Plant?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional care and premium quality for all your plant and rabbit needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Plants</h3>
              <p className="text-gray-600">
                Carefully selected plants with detailed care instructions and ongoing support.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🐰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthy Rabbits</h3>
              <p className="text-gray-600">
                Well-cared rabbits from trusted breeders with health guarantees and care guides.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Pickup</h3>
              <p className="text-gray-600">
                Visit our nursery to collect your plants and rabbits. Easy parking and friendly staff to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Promotion Section */}
      <section className="py-16 bg-gradient-to-r from-[#2E7D32] to-[#388E3C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">🎉 Join Our Community!</h2>
            <p className="text-xl mb-2 text-white/90">
              Create an account to unlock exclusive benefits:
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">📦</div>
                <h3 className="font-semibold mb-1">Order Tracking</h3>
                <p className="text-sm text-white/80">Track your orders and view purchase history</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-semibold mb-1">10% Off First Order</h3>
                <p className="text-sm text-white/80">New users get instant discount on next purchase</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold mb-1">Faster Checkout</h3>
                <p className="text-sm text-white/80">Save your info for quick future purchases</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-white text-[#2E7D32] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                🌟 Create Account & Save 10%
              </Link>
              <Link href="/login" className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                🔑 Login to Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our collection of plants and rabbits, or contact us for personalized recommendations.
          </p>
          <a href="/home" className="bg-[#2E7D32] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1B5E20] transition-colors inline-block">
            Start Shopping
          </a>
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
                <li><a href="#" className="hover:text-white transition-colors">Indoor Plants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Outdoor Plants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rabbits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Supplies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Care Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
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
