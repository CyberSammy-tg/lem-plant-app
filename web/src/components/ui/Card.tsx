import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  description?: string;
  badge?: string;
  onViewDetails?: () => void;
  onAddToCart?: () => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  description,
  badge,
  onViewDetails,
  onAddToCart,
  className = ''
}) => {
  return (
    <Card hover className={`overflow-hidden ${className}`} padding="none">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {badge && (
          <div className="absolute top-2 left-2 bg-[#2E7D32] text-white px-2 py-1 rounded-md text-xs font-semibold">
            {badge}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#2E7D32]">${price}</span>
          
          <div className="flex gap-2">
            {onViewDetails && (
              <button
                onClick={onViewDetails}
                className="px-3 py-1 text-sm text-[#2E7D32] border border-[#2E7D32] rounded-md hover:bg-[#2E7D32] hover:text-white transition-colors"
              >
                View Details
              </button>
            )}
            {onAddToCart && (
              <button
                onClick={onAddToCart}
                className="px-3 py-1 text-sm bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] transition-colors"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  trend,
  className = ''
}) => {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        {icon && (
          <div className="text-[#2E7D32]">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Card;
