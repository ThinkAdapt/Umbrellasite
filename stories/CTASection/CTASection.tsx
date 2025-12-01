"use client";

import React from 'react';
import { Text } from '@/stories/Text';
import { Button } from '@/stories/Button';

export interface CTASectionProps {
  /**
   * Callback when Request a Demo button is clicked
   */
  onRequestDemoClick?: () => void;
}

export const CTASection = ({ onRequestDemoClick }: CTASectionProps) => {
  const benefits = [
    'Clear Insights',
    'Happy Employees',
    'Productive Workplaces',
    'Trusted Decisions',
    'Confident Leaders',
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-8">
          <div>
            <Text
              variant="headline2"
              as="h2"
              className="text-neutral-900"
            >
              Didn't find what you're looking for?
            </Text>
            <Text
              variant="body1"
              as="p"
              className="text-neutral-700 mb-6"
            >
              Let's talk about your needs and show you how SopranoAI can fit your organization.
            </Text>
            <Button
              variant="primary"
              size="large"
              iconPosition="none"
              state="active"
              fontWeight={500}
              onClick={onRequestDemoClick}
            >
              Request a Demo
            </Button>
          </div>

          <div className="flex flex-col gap-8 overflow-hidden h-[360px] relative">
            <div
              className="absolute top-0 left-0 right-0 h-[120px] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(180deg, var(--color-neutral-10, #FAFAFA) 0%, rgba(250, 250, 250, 0) 100%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(0deg, var(--color-neutral-10, #FAFAFA) 0%, rgba(250, 250, 250, 0) 100%)',
              }}
            />
            <div
              className="flex flex-col gap-8"
              style={{
                animation: 'scroll 15s linear infinite',
              }}
            >
              {[...benefits, ...benefits].map((benefit, index) => (
                <Text
                  key={index}
                  variant="display3"
                  as="p"
                  className="text-neutral-900"
                >
                  {benefit}
                </Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

