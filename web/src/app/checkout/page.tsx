'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [authMode, setAuthMode] = useState<'guest' | 'login' | 'signup'>('guest');
  const [isNewUser, setIsNewUser] = useState(false);
  const [countdown, setCountdown] = useState(10);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupTime: '',
    notes: '',
    password: '',
    confirmPassword: ''
  });

  const generateOrderId = () => {
    const orderNumber = Math.floor(Math.random() * 999) + 1;
    return `ORD-${orderNumber.toString().padStart(3, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  // Countdown timer for success screen
  useEffect(() => {
    if (orderPlaced && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced, countdown]);

  // Auto-redirect after countdown
  useEffect(() => {
    if (orderPlaced && countdown === 0) {
      window.location.href = '/home';
    }
  }, [orderPlaced, countdown]);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate random stock check (10% chance of failure for demo)
    const stockCheckFailed = Math.random() < 0.1;

    if (stockCheckFailed) {
      // Redirect to error page
      window.location.href = '/order-error';
      return;
    }

    // Generate order ID
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    // Clear cart and show success
    clearCart();
    setOrderPlaced(true);
    setCountdown(10); // Reset countdown

    console.log('Order placed:', {
      orderId: newOrderId,
      customerInfo,
      items: cartItems,
      total: getCartTotal(),
      authMode,
      isNewUser
    });
  };

  const getPickupTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour += 2) {
      const time = `${hour}:00-${hour + 2}:00`;
      times.push(time);
    }
    return times;
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4 animate-bounce">✅</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-semibold">Order ID: {orderId}</p>
          </div>
          <p className="text-gray-600 mb-6">
            Thank you for your order! We&apos;ll prepare your items for pickup.
            {isNewUser && <span className="block mt-2 text-green-600 font-medium">🎉 Welcome! You&apos;ve received a 10% new user discount!</span>}
          </p>

          {/* Countdown Timer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              Redirecting to home page in <span className="font-bold text-lg">{countdown}</span> seconds...
            </p>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((10 - countdown) / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/home" className="block w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors">
              Continue Shopping
            </Link>
            <button
              onClick={() => window.location.href = '/home'}
              className="block w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Go to Home ({countdown}s)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/home" className="text-white hover:text-green-200 transition-colors">Home</Link>
              <Link href="/plants" className="text-white hover:text-green-200 transition-colors">Plants</Link>
              <Link href="/rabbits" className="text-white hover:text-green-200 transition-colors">Rabbits</Link>
              <Link href="/info" className="text-white hover:text-green-200 transition-colors">Info</Link>
              <Link href="/cart" className="text-white hover:text-green-200 transition-colors">Cart</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Auth Mode Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How would you like to proceed?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/guest-checkout"
              className="block p-4 rounded-lg border-2 border-gray-200 hover:border-[#2E7D32] hover:bg-green-50 transition-all text-center"
            >
              <div className="text-2xl mb-2">👤</div>
              <div className="font-semibold">Guest Checkout</div>
              <div className="text-sm text-gray-600">Quick and easy</div>
            </Link>
            
            <button
              onClick={() => setAuthMode('login')}
              className={`p-4 rounded-lg border-2 transition-all ${
                authMode === 'login' 
                  ? 'border-[#2E7D32] bg-green-50 text-[#2E7D32]' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">🔑</div>
              <div className="font-semibold">Login</div>
              <div className="text-sm text-gray-600">Existing customer</div>
            </button>
            
            <button
              onClick={() => { setAuthMode('signup'); setIsNewUser(true); }}
              className={`p-4 rounded-lg border-2 transition-all ${
                authMode === 'signup' 
                  ? 'border-[#2E7D32] bg-green-50 text-[#2E7D32]' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">✨</div>
              <div className="font-semibold">Sign Up</div>
              <div className="text-sm text-green-600">10% discount!</div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">
              {authMode === 'guest' ? 'Contact Information' : 
               authMode === 'login' ? 'Login' : 'Create Account'}
            </h2>
            
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              {authMode === 'login' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={customerInfo.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                </>
              )}

              {(authMode === 'guest' || authMode === 'signup') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                </>
              )}

              {authMode === 'signup' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={customerInfo.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={customerInfo.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                      required
                    />
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={customerInfo.pickupDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Time (2-hour window)</label>
                <select
                  name="pickupTime"
                  value={customerInfo.pickupTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  required
                >
                  <option value="">Select pickup time</option>
                  {getPickupTimes().map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={customerInfo.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  placeholder="Any special requests or notes..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.uniqueId} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-600">
                      {item.type === 'rabbit' && item.age && `${item.age} months old • `}
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              {isNewUser && (
                <div className="flex justify-between items-center text-green-600 mt-2">
                  <span>New User Discount (10%):</span>
                  <span>-${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xl font-bold text-[#2E7D32] mt-2">
                <span>Total:</span>
                <span>${(isNewUser ? getCartTotal() * 0.9 : getCartTotal()).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-800">
                <div className="font-semibold mb-2">📍 Pickup Information</div>
                <div>• Items will be ready for pickup at our nursery</div>
                <div>• Please bring a valid ID and your order confirmation</div>
                <div>• Contact us if you need to reschedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
