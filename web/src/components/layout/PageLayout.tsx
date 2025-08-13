'use client';

import React from 'react';
import { Navigation } from './Navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  cartCount?: number;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showNavigation = true,
  cartCount = 0,
  className = ''
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {showNavigation && <Navigation cartCount={cartCount} />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  action,
  breadcrumbs
}) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {breadcrumbs && (
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-sm text-gray-500 hover:text-gray-700">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-900 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
            )}
          </div>
          {action && (
            <div className="flex-shrink-0">
              {action}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  action,
  children,
  className = '',
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6 lg:px-8 py-4',
    md: 'px-4 sm:px-6 lg:px-8 py-8',
    lg: 'px-4 sm:px-6 lg:px-8 py-12'
  };

  return (
    <section className={`${paddingClasses[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle || action) && (
          <div className="flex items-center justify-between mb-6">
            <div>
              {title && (
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
              )}
            </div>
            {action && (
              <div className="flex-shrink-0">
                {action}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageLayout;
