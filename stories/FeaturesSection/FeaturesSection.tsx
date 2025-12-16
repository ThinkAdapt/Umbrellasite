import React from 'react';
import { Text } from '@/stories/Text';
import featuresSection1 from '@/stories/assets/features-section-1.png';
import featuresSection2 from '@/stories/assets/features-section-2.png';
import featuresSection3 from '@/stories/assets/features-section-3.png';
import featuresSection4 from '@/stories/assets/features-section-4.png';

export interface FeaturesSectionProps {
  /**
   * Callback when CTA is clicked
   */
  onCTAClick?: () => void;
}

export const FeaturesSection = ({ onCTAClick }: FeaturesSectionProps) => {
  const features = [
    {
      id: 'integration',
      title: 'Seamless AI Integration',
      description: 'Connect easily with your existing tools. No complex setups.',
      image: featuresSection2,
    },
    {
      id: 'simplicity',
      title: 'One-Tap Simplicity',
      description:
        'Employees can access everything they need with a single tap.',
      image: featuresSection3,
    },
    {
      id: 'analytics',
      title: 'Real-Time Analytics',
      description:
        'Track workplace satisfaction and performance instantly with AI-driven reports.',
      image: featuresSection4,
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Top Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: Heading */}
          <div>
            <Text
              variant="display3"
              as="h2"
              className="text-neutral-900"
            >
              Safe. Simple.
              <br />
              Effective.
            </Text>
          </div>

          <div className="flex items-center">
            <Text
              variant="body1"
              as="p"
              className="text-neutral-700 text-justify max-w-[30rem] ml-auto"
            >
              Unlike traditional tools that only speed up tasks, SopranoAI focuses on both efficiency and employee well-being. Our 
              AI-powered features integrate smoothly into daily workflows, boosting satisfaction and performance across your organization.
            </Text>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-200 aspect-square flex flex-col"
            >
              <div className="p-6">
                <Text
                  variant="title1"
                  as="h3"
                  className="text-neutral-900 mb-3"
                >
                  {feature.title}
                </Text>
                <Text
                  variant="body1"
                  as="p"
                  className="text-neutral-700 mb-4"
                >
                  {feature.description}
                </Text>
              </div>
              <div className={`mt-auto ${index === 1 ? 'flex justify-end pl-6' : index === 2 ? 'flex justify-start pr-6' : ''} ${index === 0 ? 'px-6 pb-6' : ''}`}>
                <img
                  src={typeof feature.image === 'string' ? feature.image : feature.image.src}
                  alt={feature.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={typeof featuresSection1 === 'string' ? featuresSection1 : featuresSection1.src}
            alt="Features section"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

