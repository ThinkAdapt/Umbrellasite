import React from 'react';
import { Text } from '@/stories/Text';
import featuresSection1 from '@/stories/assets/features-section-1.png';

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
      icon: (
        <div className="grid grid-cols-4 gap-2 mt-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-neutral-200 rounded-lg"
            ></div>
          ))}
        </div>
      ),
    },
    {
      id: 'simplicity',
      title: 'One-Tap Simplicity',
      description:
        'Employees can access everything they need with a single tap.',
      icon: (
        <div className="flex items-end gap-2 mt-4 h-20">
          <div className="flex-1 bg-neutral-200 rounded-lg h-12"></div>
          <div className="flex-1 bg-neutral-200 rounded-lg h-16"></div>
          <div className="flex-1 bg-neutral-200 rounded-lg h-8"></div>
        </div>
      ),
    },
    {
      id: 'analytics',
      title: 'Real-Time Analytics',
      description:
        'Track workplace satisfaction and performance instantly with AI-driven reports.',
      icon: (
        <div className="flex items-end gap-2 mt-4 h-20">
          <div className="w-8 bg-neutral-200 rounded-lg h-16"></div>
          <div className="flex-1 bg-neutral-200 rounded-lg h-10"></div>
          <div className="flex-1 bg-neutral-200 rounded-lg h-14"></div>
        </div>
      ),
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
              Unlike traditional tools that only speed up tasks, SopranoAI
              focuses on both efficiency and employee well-being. Our AI-powered
              features integrate smoothly into daily workflows, boosting
              satisfaction and performance across your organization.
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
              <div className={`mt-auto ${index === 1 ? 'flex justify-end' : index === 2 ? 'flex justify-start' : ''}`}>
                {feature.icon}
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

