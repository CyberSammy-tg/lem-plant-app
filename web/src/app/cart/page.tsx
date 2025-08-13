'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageLayout, Section } from '@/components/layout';
import { Button, Input, Textarea, Select, Card, Modal, ConfirmModal } from '@/components/ui';

interface CartItem {
  id: number;
  type: 'plant' | 'rabbit';
  name: string;
  price: number;
  quantity: number;
  age?: number;
  image?: string;
  description?: string;
}

export default function CartPage() {
  // Sample cart data - replace with actual cart state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      type: 'plant',
      name: 'Aloe Vera',
      price: 20,
      quantity: 2,
      description: 'Low maintenance succulent perfect for beginners',
      image: '/placeholder-plant.jpg'
    },
    {
      id: 2,
      type: 'rabbit',
      name: 'Rex Lop',
      price: 50,
      quantity: 1,
      age: 3,
      description: 'Gentle and affectionate rabbit breed',
      image: '/placeholder-rabbit.jpg'
    },
    {
      id: 3,
      type: 'plant',
      name: 'Succulent Mix',
      price: 10,
      quantity: 3,
      description: 'Variety pack of colorful succulents',
      image: '/placeholder-plant.jpg'
    },
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupTime: '',
    notes: '',
    createAccount: false
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate pickup time slots (2-hour windows)
  const generatePickupTimes = () => {
    const times = [];
    for (let hour = 8; hour < 18; hour += 2) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`;
      const endTime = `${(hour + 2).toString().padStart(2, '0')}:00`;
      times.push({
        value: `${startTime}-${endTime}`,
        label: `${startTime} - ${endTime}`
      });
    }
    return times;
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setShowRemoveConfirm(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    setShowRemoveConfirm(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
      console.log('Order submitted:', {
        orderNumber,
        customerInfo,
        cartItems,
        subtotal: calculateSubtotal(),
        tax: calculateTax(),
        total: calculateTotal()
      });

      // Clear cart and show success
      setCartItems([]);
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        pickupDate: '',
        pickupTime: '',
        notes: '',
        createAccount: false
      });
      setShowCheckout(false);
      setIsSubmitting(false);

      alert(`Order ${orderNumber} submitted successfully! We will contact you to confirm pickup details.`);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <PageLayout cartCount={cartItems.length}>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white" padding="lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">🛒 Shopping Cart</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Review your items and proceed to checkout for nursery pickup
          </p>
        </div>
      </Section>

      {/* Cart Content */}
      <Section>
        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some plants or rabbits to get started!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plants">
                <Button variant="primary" size="lg">
                  🌿 Shop Plants
                </Button>
              </Link>
              <Link href="/rabbits">
                <Button variant="primary" size="lg">
                  🐰 Shop Rabbits
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items ({cartItems.length})</h2>
                <Link href="/home">
                  <Button variant="outline" size="sm">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {cartItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">{item.type === 'plant' ? '🌿' : '🐰'}</span>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.type === 'plant' ? 'Plant' : `Rabbit${item.age ? ` (${item.age} months old)` : ''}`}
                      </p>
                      <p className="text-lg font-bold text-[#2E7D32] mt-2">${item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        onClick={() => setShowRemoveConfirm(item.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:border-red-300"
                      >
                        Remove
                      </Button>

                      <div className="text-right">
                        <p className="text-sm text-gray-500">Subtotal</p>
                        <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary & Checkout */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name} × {item.quantity}</span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax (8%):</span>
                      <span className="font-medium">${calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                      <span>Total:</span>
                      <span className="text-[#2E7D32]">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={() => setShowCheckout(true)}
                    variant="primary"
                    className="w-full"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </Card>

              {/* Pickup Information */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📍 Pickup Information</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-gray-900">Lem Plant Nursery</p>
                    <p>123 Green Valley Road</p>
                    <p>Garden City, State 12345</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours:</p>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 5:00 PM</p>
                    <p>Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">What to Expect:</p>
                    <p>• Free parking available</p>
                    <p>• Staff assistance with loading</p>
                    <p>• Care instructions provided</p>
                  </div>
                </div>
            </div>
          </div>
        )}
      </Section>

      {/* Checkout Modal */}
      <Modal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        title="Checkout - Pickup Information"
        size="lg"
      >
        <form onSubmit={handleSubmitOrder} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name *"
              type="text"
              name="name"
              required
              value={customerInfo.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />

            <Input
              label="Phone Number *"
              type="tel"
              name="phone"
              required
              value={customerInfo.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <Input
            label="Email Address *"
            type="email"
            name="email"
            required
            value={customerInfo.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Preferred Pickup Date"
              type="date"
              name="pickupDate"
              value={customerInfo.pickupDate}
              onChange={handleInputChange}
              helperText="Orders ready within 24 hours"
            />

            <Select
              label="Pickup Time (2-hour window)"
              name="pickupTime"
              value={customerInfo.pickupTime}
              onChange={handleInputChange}
              options={[
                { value: '', label: 'Select time window' },
                ...generatePickupTimes()
              ]}
            />
          </div>

          <Textarea
            label="Special Notes"
            name="notes"
            value={customerInfo.notes}
            onChange={handleInputChange}
            placeholder="Any special requests or notes..."
            rows={3}
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="createAccount"
              name="createAccount"
              checked={customerInfo.createAccount}
              onChange={handleInputChange}
              className="h-4 w-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300 rounded"
            />
            <label htmlFor="createAccount" className="ml-2 text-sm text-gray-600">
              Create an account for faster future orders
            </label>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-2">Order Summary</h4>
            <div className="text-sm text-green-800 space-y-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t border-green-300 pt-1">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Payment:</strong> Payment is due at pickup. We accept cash, credit/debit cards, and mobile payments.
              You'll receive a confirmation email with pickup instructions.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              onClick={() => setShowCheckout(false)}
              variant="outline"
              className="flex-1"
            >
              Back to Cart
            </Button>
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Remove Item Confirmation */}
      <ConfirmModal
        isOpen={!!showRemoveConfirm}
        onClose={() => setShowRemoveConfirm(null)}
        onConfirm={() => showRemoveConfirm && removeItem(showRemoveConfirm)}
        title="Remove Item"
        message="Are you sure you want to remove this item from your cart?"
        confirmText="Remove"
        cancelText="Keep Item"
        variant="warning"
      />
    </PageLayout>
  );
}
