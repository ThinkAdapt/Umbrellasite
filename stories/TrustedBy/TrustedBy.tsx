import React from 'react';
import { Text } from '@/stories/Text';

export interface TrustedByProps {
  /**
   * Company logos data
   */
  companies?: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
  }>;
}

const defaultCompanies = [
  {
    id: 'layers',
    name: 'Layers',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        {/* Bottom layer - darker purple */}
        <rect
          x="4"
          y="8"
          width="24"
          height="24"
          rx="4"
          fill="#6B21A8"
          transform="rotate(-5 16 20)"
        />
        {/* Top layer - lighter purple */}
        <rect
          x="8"
          y="4"
          width="24"
          height="24"
          rx="4"
          fill="#A855F7"
          transform="rotate(5 20 16)"
        />
      </svg>
    ),
  },
  {
    id: 'sisyphus',
    name: 'Sisyphus',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        {/* Bottom block - darkest green */}
        <rect x="8" y="20" width="16" height="12" rx="2" fill="#166534" />
        {/* Middle block - medium green */}
        <rect x="6" y="12" width="16" height="12" rx="2" fill="#22C55E" />
        {/* Top block - light green */}
        <rect x="4" y="4" width="16" height="12" rx="2" fill="#86EFAC" />
      </svg>
    ),
  },
  {
    id: 'circooles',
    name: 'Circooles',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        {/* Left circle - behind */}
        <circle cx="14" cy="20" r="10" fill="#2563EB" />
        {/* Right circle - in front */}
        <circle cx="26" cy="20" r="10" fill="#3B82F6" />
      </svg>
    ),
  },
];

export const TrustedBy = ({ companies = defaultCompanies }: TrustedByProps) => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Text
          variant="title2"
          as="h2"
          className="text-center text-neutral-300 text-xl font-medium leading-[1.75rem] tracking-[-0.03125rem] mb-4"
        >
          Trusted by Industry Leaders
        </Text>

        {/* Logos */}
        <div className="flex items-center justify-center gap-4 md:gap-[6.25rem] flex-wrap">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0">{company.icon}</div>
              {/* Company Name */}
              <span className="text-xl font-bold text-neutral-900">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

