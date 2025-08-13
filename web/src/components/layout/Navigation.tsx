'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  showCartCount?: boolean;
  cartCount?: number;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  showCartCount = true, 
  cartCount = 0 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/plants', label: 'Plants' },
    { href: '/rabbits', label: 'Rabbits' },
    { href: '/info', label: 'Info' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#2E7D32] hover:text-[#1B5E20] transition-colors">
                🌱 Lem Plant
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#2E7D32] border-b-2 border-[#2E7D32]'
                    : 'text-gray-700 hover:text-[#2E7D32]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Cart Link */}
            <Link
              href="/cart"
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                isActive('/cart')
                  ? 'text-[#2E7D32] border-b-2 border-[#2E7D32]'
                  : 'text-gray-700 hover:text-[#2E7D32]'
              }`}
            >
              🛒 Cart
              {showCartCount && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#2E7D32] p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive(item.href)
                      ? 'text-[#2E7D32] bg-green-50'
                      : 'text-gray-700 hover:text-[#2E7D32] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Cart Link */}
              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center justify-between ${
                  isActive('/cart')
                    ? 'text-[#2E7D32] bg-green-50'
                    : 'text-gray-700 hover:text-[#2E7D32] hover:bg-gray-50'
                }`}
              >
                <span>🛒 Cart</span>
                {showCartCount && cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
