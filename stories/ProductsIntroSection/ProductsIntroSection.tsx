import React from 'react';
import { Text } from '@/stories/Text';
import productsIntroImage from '@/stories/assets/products-intro-section.png';

export interface ProductsIntroSectionProps {
  /**
   * Optional callback
   */
  onAction?: () => void;
}

export const ProductsIntroSection = ({ onAction }: ProductsIntroSectionProps) => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto pt-10">
        <div className="text-center mb-10">
          <Text
            variant="title3"
            as="p"
            className="text-center uppercase mb-2"
          >
            PRODUCTS
          </Text>
          <Text
            variant="display1"
            as="h1"
            className="text-center mb-6"
          >
            Helpful Products built for you.
          </Text>
          <Text
            variant="title2"
            as="p"
            className="text-neutral-700 max-w-3xl mx-auto"
          >
            Even from our first product, we are thinking about your company and your employees' needs in mind. Whether you need HR support or employee skill improvement or employee help we are here to help.
          </Text>
        </div>

        {/* Images Section */}
        <div className="flex gap-6 items-end">
          <div 
            className="rounded-lg overflow-hidden"
            style={{ width: '592px', height: '424px' }}
          >
            <img
              src={typeof productsIntroImage === 'string' ? productsIntroImage : productsIntroImage.src}
              alt="Product showcase"
              className="w-full h-full"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div 
            className="rounded-lg overflow-hidden"
            style={{ width: '520px', height: '340px' }}
          >
            <img
              src={typeof productsIntroImage === 'string' ? productsIntroImage : productsIntroImage.src}
              alt="Product showcase"
              className="w-full h-full"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

