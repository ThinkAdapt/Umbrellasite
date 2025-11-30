import React from 'react';
import { Text } from '@/stories/Text';
import productsSection1 from '@/stories/assets/products-section-1.png';
import productsSection2 from '@/stories/assets/products-section-2.png';
import productsSection3 from '@/stories/assets/products-section-3.png';

export interface ProductsSectionProps {
  /**
   * Callback when a product card is clicked
   */
  onProductClick?: (productId: string) => void;
}

export const ProductsSection = ({
  onProductClick,
}: ProductsSectionProps) => {
  const products = [
    {
      id: 'teamsense',
      title: 'TeamSense',
      description:
        'Measure and improve employee satisfaction, motivation, and overall workplace engagement. With simple one-click surveys and real-time analytics, TeamSense helps leaders understand their teams and make company-wide decisions with confidence.',
      visual: 'dashboard',
      gradient: null,
    },
    {
      id: 'stageready',
      title: 'StageReady',
      description:
        'Transform presentation preparation into a structured learning process. Employees can practice their presentations, identify areas for improvement, and receive AI-driven feedback — helping them present with clarity, confidence, and impact.',
      visual: 'flowchart',
      gradient: 'from-purple-100 to-pink-50',
    },
    {
      id: 'knowledgebase',
      title: 'KnowledgeBase',
      description:
        "Your company's AI-powered knowledge assistant. KnowledgeBase gives employees instant access to policies, procedures, and documented answers to workplace questions, reducing time spent searching for information and ensuring consistency across the organization.",
      visual: 'chat',
      gradient: 'from-green-100 to-emerald-50',
    },
  ];

  const renderVisual = (visual: string, gradient: string | null) => {
    switch (visual) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg p-4 h-full">
            {/* Sidebar */}
            <div className="flex gap-4 h-full">
              <div className="w-48 space-y-2">
                <div className="h-8 bg-neutral-100 rounded mb-4"></div>
                <div className="space-y-1">
                  {['New Message', 'Dashboard', 'Report Breakdown'].map(
                    (item) => (
                      <div
                        key={item}
                        className="h-6 bg-neutral-100 rounded text-xs text-neutral-600 px-2 flex items-center"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-200">
                  <div className="h-10 bg-neutral-100 rounded"></div>
                </div>
              </div>

              {/* Main Dashboard */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded p-3">
                    <div className="text-xs text-neutral-600 mb-1">
                      Interaction Rate
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">
                      64%
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-xs text-neutral-600 mb-1">
                      Response Count
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">
                      485
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded p-3">
                    <div className="text-xs text-neutral-600 mb-1">
                      Responsiveness
                    </div>
                    <div className="text-lg font-bold text-neutral-900">
                      Sales
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded p-4">
                  <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                </div>

                <div className="bg-neutral-50 rounded p-4">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 bg-neutral-200 rounded w-24"></div>
                    <div className="h-4 bg-neutral-200 rounded w-16"></div>
                  </div>
                  <div className="h-20 bg-neutral-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'flowchart':
        return (
          <div
            className={`bg-gradient-to-br ${gradient} rounded-lg p-6 h-full flex items-center justify-center`}
          >
            <div className="flex items-center gap-4">
              {['Upload', 'Get feedback', 'Practice', 'Present with confidence'].map(
                (step, index) => (
                  <React.Fragment key={step}>
                    <div className="bg-white rounded-lg p-4 shadow-sm min-w-[120px] text-center">
                      <div className="text-sm font-semibold text-neutral-900">
                        {step}
                      </div>
                    </div>
                    {index < 3 && (
                      <svg
                        className="w-6 h-6 text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        );

      case 'chat':
        return (
          <div
            className={`bg-gradient-to-br ${gradient} rounded-lg p-6 h-full space-y-4`}
          >
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm text-neutral-600 mb-2">
                What is my daily meal allowance on an international business
                trip?
              </div>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 bg-neutral-200 rounded-lg text-xs font-medium text-neutral-700">
                GENERATING
              </button>
            </div>
            <div className="flex justify-center">
              <svg
                className="w-6 h-6 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm text-neutral-700">
                According to company policy employees may spend up to...
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-neutral-900 py-20 py-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Text
            variant="display3"
            as="h2"
            className="text-white"
          >
            Soprano Products
          </Text>
          <Text
            variant="headline3"
            as="p"
            className="text-white flex items-center ml-auto"
          >
            Three solutions. One powerful suite.
          </Text>
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          {/* TeamSense - Full Width */}
          <div
            className="rounded-3xl border-2 border-[#F46429] bg-[rgba(254,240,234,0.85)] backdrop-blur-[10px] pt-8 pl-8 pb-0 pr-0 h-[472px] overflow-hidden cursor-pointer transition-colors duration-200"
            onClick={() => onProductClick?.('teamsense')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <Text
                  variant="headline1"
                  as="h3"
                  className="text-neutral-900 mb-4"
                >
                  TeamSense
                </Text>
                <Text
                  variant="body1"
                  as="p"
                  className="text-neutral-700"
                >
                  {products[0].description}
                </Text>
              </div>
              <div className="h-[500px] overflow-visible rounded-2xl border border-neutral-200 bg-[var(--color-neutral-10,#FAFAFA)] p-4 relative">
                <div className="absolute h-[600px] overflow-hidden rounded-lg border border-neutral-200 bg-gray-300 left-4 top-4">
                  <img
                    src={typeof productsSection1 === 'string' ? productsSection1 : productsSection1.src}
                    alt="TeamSense"
                    className="h-full object-cover"
                    style={{
                      objectPosition: '-0.642px -40.783px',
                      minWidth: 'calc(100% + 1rem)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* StageReady and KnowledgeBase - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.slice(1).map((product, index) => {
              const image = index === 0 ? productsSection2 : productsSection3;
              const cardStyles = index === 0 
                ? 'rounded-3xl border-2 border-[#00027F] bg-[rgba(237,230,243,0.85)] backdrop-blur-[10px]'
                : 'rounded-3xl border-2 border-[#05D648] bg-[rgba(230,251,237,0.85)] backdrop-blur-[10px]';
              return (
                <div
                  key={product.id}
                  className={`${cardStyles} pt-8 px-8 pb-0 h-[472px] overflow-hidden cursor-pointer transition-colors duration-200 flex flex-col`}
                  onClick={() => onProductClick?.(product.id)}
                >
                  <Text
                    variant="headline1"
                    as="h3"
                    className="text-neutral-900 mb-4"
                  >
                    {product.title}
                  </Text>
                  <Text
                    variant="body1"
                    as="p"
                    className="text-neutral-700 mb-12"
                  >
                    {product.description}
                  </Text>
                  <div className="h-[500px] overflow-hidden rounded-lg mt-auto">
                    <img
                      src={typeof image === 'string' ? image : image.src}
                      alt={product.title}
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

