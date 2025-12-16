"use client";

import React from 'react';
import { StageReadyIcon, TeamSenseIcon, KnowledgeBaseIcon } from '@/stories/icons';
import { Text } from '@/stories/Text';
import { Button } from '@/stories/Button';
import heroImage1 from '@/stories/assets/hero-image-1.png';
import heroImage2 from '@/stories/assets/hero-image-2.png';
import heroImage3 from '@/stories/assets/hero-image-3.png';

export interface HeroSectionProps {
  onContactUsClick?: () => void;
  onExploreProductsClick?: () => void;
}

export const HeroSection = ({
  onContactUsClick,
  onExploreProductsClick,
}: HeroSectionProps) => {
  return (
    <div className="w-full h-fit">
      <section className="container max-w-[50rem] mx-auto py-16 text-center">
        <Text variant="display1" as="h1" className="mb-6">
          SopranoAI. Work smarter, every day.
        </Text>
        <Text
          variant="title2"
          as="p"
          className="max-w-[50rem] mx-auto mb-8"
          style={{ color: 'var(--color-neutral-700, #3A3A3A)' }}
        >
          SopranoAI is a next-generation HR suite powered by AI. It helps your employees stay productive, motivated, and engaged — while giving leaders clear insights to build a stronger workplace.
        </Text>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="primary"
            size="large"
            iconPosition="none"
            state="active"
            fontWeight={500}
            onClick={onContactUsClick}
          >
            Contact Us
          </Button>
          {/* <Button
            variant="secondary"
            size="large"
            iconPosition="none"
            state="active"
            fontWeight={500}
            onClick={onExploreProductsClick}
          >
            Explore Products
          </Button> */}
        </div>
      </section>

      <section className="relative overflow-hidden min-h-[20rem]">
        <div className="hidden md:grid absolute grid-cols-1 md:grid-cols-3 gap-6 z-0 pointer-events-none">
          <div></div>
          <div
            className="relative overflow-hidden mt-16 w-[28rem] h-[18.5rem] bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage2.src || heroImage2})`,
              backgroundPosition: '-1.71rem -1.03rem',
              backgroundSize: '106.174% 107.13%',
            }}
          />
          <div></div>
        </div>
        <div
          className="hidden md:block absolute overflow-hidden z-0 w-[22.75rem] h-[18rem] -left-5 -top-[3.125rem] bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${heroImage1.src || heroImage1})`,
            }}
        />
        <div
          className="hidden md:block absolute overflow-hidden z-0 w-[26.25rem] h-[17.5rem] -right-5 -top-[6.25rem] bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${heroImage3.src || heroImage3})`,
          }}
        />

        <div className="container mx-auto relative z-20 h-fit px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
          <div className="w-full md:w-auto">
            <div
              className="flex w-full md:w-[21rem] p-2 items-center gap-2 rounded-xl border border-[#00027F] mb-2 backdrop-blur-[10px]"
              style={{
                background:
                  'linear-gradient(0deg, rgba(230, 230, 242, 0.35) 0%, rgba(230, 230, 242, 0.35) 100%), rgba(250, 250, 250, 0.50)',
              }}
            >
              <div
                className="flex w-[4.5rem] h-[4.5rem] p-5 justify-center items-center flex-shrink-0 rounded-md backdrop-blur-[1px]"
                style={{
                  background: 'rgba(237, 230, 243, 0.75)',
                  boxShadow: '0.125rem 0.25rem 0.5rem 0 rgba(0, 2, 127, 0.20) inset',
                }}
              >
                <StageReadyIcon width={32} height={32} />
              </div>

              <div className="flex-1">
                <Text
                  variant="title3"
                  as="h3"
                  style={{ color: 'var(--color-neutral-900, #0F0F0F)' }}
                >
                  StageReady
                </Text>
                <Text variant="label5" as="p">
                  AI-powered training for confident presentations. Employees can practice, refine, and deliver with impact — anytime.
                </Text>
              </div>
            </div>

            <div
              className="flex w-full md:w-[21rem] p-2 items-center gap-2 rounded-xl border border-[#F46429] md:ml-20 ml-0 backdrop-blur-[10px]"
              style={{
                background:
                  'linear-gradient(0deg, rgba(254, 240, 234, 0.35) 0%, rgba(254, 240, 234, 0.35) 100%), rgba(250, 250, 250, 0.50)',
              }}
            >
              <div
                className="flex w-[4.5rem] h-[4.5rem] p-5 justify-center items-center flex-shrink-0 rounded-md backdrop-blur-[1px]"
                style={{
                  background: 'rgba(254, 240, 234, 0.75)',
                  boxShadow: '0.125rem 0.25rem 0.5rem 0 rgba(244, 100, 41, 0.20) inset',
                }}
              >
                <TeamSenseIcon width={72} height={72} />
              </div>

              <div className="flex-1">
                <Text
                  variant="title3"
                  as="h3"
                  style={{ color: 'var(--color-neutral-900, #0F0F0F)' }}
                >
                  TeamSense
                </Text>
                <Text variant="label5" as="p">
                  Measure and improve employee satisfaction with instant feedback
                  and simple one-click surveys.
                </Text>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div
              className="flex w-full md:w-[21rem] p-2 items-center gap-2 rounded-xl border border-[#05D648] md:mr-40 md:mb-40 mr-0 mb-0 backdrop-blur-[10px]"
              style={{
                background:
                  'linear-gradient(0deg, rgba(230, 251, 237, 0.20) 0%, rgba(230, 251, 237, 0.20) 100%), rgba(250, 250, 250, 0.50)',
              }}
            >
              <div
                className="flex w-[4.5rem] h-[4.5rem] p-5 justify-center items-center flex-shrink-0 rounded-md backdrop-blur-[1px]"
                style={{
                  background: 'rgba(230, 251, 237, 0.75)',
                  boxShadow: '0.125rem 0.25rem 0.5rem 0 rgba(5, 214, 72, 0.20) inset',
                }}
              >
                <KnowledgeBaseIcon width={72} height={72} />
              </div>

              <div className="flex-1">
                <Text
                  variant="title3"
                  as="h3"
                  style={{ color: 'var(--color-neutral-900, #0F0F0F)' }}
                >
                  KnowledgeBase
                </Text>
                <Text variant="label5" as="p">
                  Your AI assistant for company knowledge. Quick answers to
                  policies, procedures, and workplace questions.
                </Text>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

