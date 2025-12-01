import React from 'react';
import { Text } from '@/stories/Text';

export interface ProductsNavProps {
  /**
   * Callback when a product is clicked
   */
  onProductClick?: (product: string) => void;
}

const products = [
  { name: 'TeamSense', color: 'var(--color-supportive-orange-500, #F46429)' },
  { name: 'StageReady', color: 'var(--color-supportive-navy-500, #00027F)' },
  { name: 'KnowledgeBase', color: 'var(--color-supportive-dark-green-500, #003024)' },
];

export const ProductsNav = ({ onProductClick }: ProductsNavProps) => {
  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <section className="w-full bg-white py-8 overflow-hidden">
      <div className="flex" style={{
        gap: '100px',
        animation: 'scroll-left 20s linear infinite',
        willChange: 'transform',
      }}>
        {duplicatedProducts.map((product, index) => (
          <button
            key={index}
            onClick={() => onProductClick?.(product.name)}
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <Text
              variant="display3"
              as="span"
              className="text-center"
              style={{
                color: product.color,
                fontSize: '48px',
                fontWeight: 500,
                lineHeight: '48px',
                letterSpacing: '-1.5px',
              }}
            >
              {product.name}
            </Text>
          </button>
        ))}
      </div>
    </section>
  );
};

