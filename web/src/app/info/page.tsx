'use client';

import Link from 'next/link';

export default function InfoPage() {
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
        {/* Business Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Mr. Y&apos;s Nursery & Rabbit Farm</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Mr. Y&apos;s Nursery & Rabbit Farm, your trusted source for healthy plants and adorable rabbits.
            We&apos;ve been serving the community with premium quality plants and well-cared rabbits from trusted breeders.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">🌿 Our Plants</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Indoor and outdoor varieties</li>
                <li>• Healthy, well-maintained specimens</li>
                <li>• Care instructions included</li>
                <li>• Professional growing techniques</li>
                <li>• Wide selection of species</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">🐰 Our Rabbits</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Various breeds available</li>
                <li>• Health guarantees provided</li>
                <li>• Socialized and well-cared</li>
                <li>• From trusted breeders</li>
                <li>• Care guides included</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location & Pickup Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📍 Visit Our Nursery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Address</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">Mr. Y&apos;s Nursery & Rabbit Farm</p>
                <p>123 Green Valley Road</p>
                <p>Garden City, State 12345</p>
                <p>United States</p>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Contact Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>📞 Phone: (555) 123-4567</p>
                <p>📧 Email: info@mrysnursery.com</p>
                <p>🌐 Website: www.mrysnursery.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pickup Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Pickup Instructions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Free parking available on-site</li>
                <li>• Bring your order confirmation</li>
                <li>• Staff will assist with loading</li>
                <li>• Call ahead for large orders</li>
                <li>• Pickup within 7 days of order</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plant Care Consultation</h3>
              <p className="text-gray-600">Expert advice on plant care, placement, and maintenance for optimal growth.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🐰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rabbit Care Guidance</h3>
              <p className="text-gray-600">Comprehensive care instructions and ongoing support for your new rabbit.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Orders</h3>
              <p className="text-gray-600">Special requests for specific plants or rabbit breeds. Contact us for availability.</p>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Policies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Return Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 7-day return window for plants</li>
                <li>• Health guarantee for rabbits</li>
                <li>• Original receipt required</li>
                <li>• Items must be in original condition</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Payment Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cash accepted</li>
                <li>• Credit/Debit cards</li>
                <li>• Mobile payments</li>
                <li>• Check (with ID)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Guarantee</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Healthy plants guaranteed</li>
                <li>• Rabbit health certificates</li>
                <li>• Care instructions provided</li>
                <li>• Follow-up support available</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Special Requests</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom plant arrangements</li>
                <li>• Specific rabbit breeds</li>
                <li>• Bulk order discounts</li>
                <li>• Educational visits</li>
              </ul>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
