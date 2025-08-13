'use client';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#2E7D32]">🌱 Mr. Y&apos;s Nursery & Rabbit Farm</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/home" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="/plants" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">Plants</a>
              <a href="/rabbits" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">Rabbits</a>
              <a href="/info" className="text-[#2E7D32] border-b-2 border-[#2E7D32] px-3 py-2 text-sm font-medium">Info</a>
              <a href="/cart" className="text-gray-700 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">🛒 Cart</a>
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

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <a href="/home" className="flex flex-col items-center p-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">Home</span>
          </a>
          <a href="/plants" className="flex flex-col items-center p-2 text-gray-400">
            <span className="text-lg mb-1">🌿</span>
            <span className="text-xs">Plants</span>
          </a>
          <a href="/rabbits" className="flex flex-col items-center p-2 text-gray-400">
            <span className="text-lg mb-1">🐰</span>
            <span className="text-xs">Rabbits</span>
          </a>
          <a href="/info" className="flex flex-col items-center p-2 text-[#2E7D32]">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Info</span>
          </a>
          <a href="/cart" className="flex flex-col items-center p-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="text-xs">Cart</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
