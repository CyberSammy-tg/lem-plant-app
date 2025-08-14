'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  // Mock order data - in real app this would come from API
  const [orderDetails] = useState({
    id: orderId || 'ORD-001',
    date: '2024-01-20',
    status: 'Completed',
    customerEmail: 'john@example.com',
    items: [
      {
        id: 1,
        name: 'Aloe Vera',
        price: 20.00,
        quantity: 1,
        image: '/placeholder-plant.jpg'
      },
      {
        id: 2,
        name: 'Rex Lop',
        price: 50.00,
        quantity: 1,
        image: '/placeholder-rabbit.jpg'
      }
    ],
    total: 70.00
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </Link>
            <Link 
              href="/profile" 
              className="text-white hover:text-green-200 transition-colors flex items-center gap-2"
            >
              ← Back to Profile
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Order Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Order Details ({orderDetails.id})</h1>
              <p className="text-gray-600">{new Date(orderDetails.date).toLocaleDateString()}</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              orderDetails.status === 'Completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-orange-100 text-orange-800'
            }`}>
              {orderDetails.status}
            </span>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Order Items</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700">ITEM</th>
                  <th className="text-right py-3 px-2 font-medium text-gray-700">PRICE</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-700">QUANTITY</th>
                  <th className="text-right py-3 px-2 font-medium text-gray-700">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">
                            {item.name.toLowerCase().includes('rabbit') ? '🐰' : '🌱'}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-right text-gray-900">${item.price.toFixed(2)}</td>
                    <td className="py-4 px-2 text-center text-gray-900">{item.quantity}</td>
                    <td className="py-4 px-2 text-right font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 mt-6 pt-4">
            <div className="flex justify-between items-center text-xl font-bold text-[#2E7D32]">
              <span>Total:</span>
              <span>${orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
