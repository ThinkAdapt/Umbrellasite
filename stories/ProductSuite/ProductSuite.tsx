"use client";

import React from 'react';
import { Text } from '@/stories/Text';
import { Link } from '@/stories/Link';
import { CheckIcon, ArrowRightIcon, TeamSenseIcon, StageReadyIcon } from '@/stories/icons';

export interface ProductSuiteProps {
  /**
   * Callback when Learn More button is clicked
   */
  onLearnMoreClick?: (productId: string) => void;
}


const products = [
  {
    id: 'teamsense',
    name: 'TeamSense',
    icon: <TeamSenseIcon width={56} height={76} fill="white" />,
    description: "SopranoAI's analytics products. You can use TeamSense to boost your employees' emotions and motivation while you are increasing resource efficiency.",
    features: [
      "Get daily status updates on your employees' personal states and motivations.",
      "Track your company's satisfaction level and get improvements reports.",
      "Send 1-click polls to get easy results.",
    ],
    imagePosition: 'right' as const,
    gradient: 'from-orange-200 to-pink-200',
    learnMoreUrl: 'https://corporate-website-72vqqxkum-zeyneptekiins-projects.vercel.app/',
  },
  {
    id: 'stageready',
    name: 'StageReady',
    icon: <StageReadyIcon width={48} height={48} fill="white" />,
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    features: [
      "Leverage AI to increase presentation performance.",
      "Leverage automation to move fast",
      "Leverage automation to move fast",
    ],
    imagePosition: 'left' as const,
    gradient: 'from-blue-200 to-purple-200',
    learnMoreUrl: undefined,
  },
];

export const ProductSuite = ({ onLearnMoreClick }: ProductSuiteProps) => {
  return (
    <section className="w-full bg-neutral-900 pt-20 pb-30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Text
            variant="display1"
            as="h1"
            className="text-white mb-4"
          >
            SopranoAI Product Suit
          </Text>
          <Text
            variant="body1"
            as="p"
            className="text-white max-w-3xl mx-auto"
          >
            With core features focusing on pitch practice StageReady is the number one helper of your employees. It has everything your pharma reps need in one place.
          </Text>
        </div>

        {/* Products */}
        <div style={{ gap: '12.5rem' }} className="flex flex-col">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex items-stretch ${
                product.imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{ gap: '7rem' }}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="text-white mb-6">
                  {product.icon}
                </div>
                <Text
                  variant="headline1"
                  as="h2"
                  className="text-white"
                >
                  {product.name}
                </Text>
                <Text
                  variant="body1"
                  as="p"
                  className="text-white mb-8"
                >
                  {product.description}
                </Text>
                <ul className="space-y-3 mb-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="text-white flex-shrink-0">
                        <CheckIcon />
                      </div>
                      <Text
                        variant="body1"
                        as="span"
                        className="text-white"
                      >
                        {feature}
                      </Text>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  <Link
                    href={product.learnMoreUrl || '#'}
                    variant="secondary"
                    size="large"
                    iconPosition="right"
                    state="active"
                    fontWeight={500}
                    icon={<ArrowRightIcon />}
                    useNextLink={false}
                    anchorProps={{
                      ...(product.learnMoreUrl 
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {
                            onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                              e.preventDefault();
                              onLearnMoreClick?.(product.id);
                            }
                          }
                      )
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Image Placeholder */}
              <div
                className={`flex-1 bg-gradient-to-br ${product.gradient} ${
                  product.id === 'teamsense'
                    ? 'rounded-3xl border-2 border-[#F46429] backdrop-blur-[10px]'
                    : product.id === 'stageready'
                    ? 'rounded-3xl border-2 border-[#00027F] backdrop-blur-[10px]'
                    : 'rounded-2xl'
                }`}
                style={
                  product.id === 'teamsense'
                    ? {
                        aspectRatio: '512/400',
                        borderRadius: '24px',
                        border: '2px solid var(--color-supportive-orange-500, #F46429)',
                        background: 'rgba(254, 240, 234, 0.85)',
                        backdropFilter: 'blur(10px)',
                      }
                    : product.id === 'stageready'
                    ? {
                        width: '512px',
                        height: '400px',
                        borderRadius: '24px',
                        border: '2px solid var(--color-supportive-navy-500, #00027F)',
                        background: 'rgba(237, 230, 243, 0.85)',
                        backdropFilter: 'blur(10px)',
                      }
                    : {}
                }
              />
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <div className="text-center mt-[12.5rem]">
          <Text
            variant="display3"
            as="p"
            className="text-white text-center"
          >
            We are working on the suit to add more products.
          </Text>
        </div>
      </div>
    </section>
  );
};

