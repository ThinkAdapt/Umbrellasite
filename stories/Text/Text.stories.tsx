import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Text, type TextVariant } from './Text';

const meta = {
  title: 'Design System/Typography',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display1',
        'display2',
        'display3',
        'headline1',
        'headline2',
        'headline3',
        'title1',
        'title2',
        'title3',
        'body1',
        'body2',
        'body3',
        'label1',
        'label2',
        'label3',
        'label4',
        'label5',
      ],
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const leftColumnData = [
  {
    category: 'Display',
    variants: [
      {
        name: 'Display 1',
        variant: 'display1' as const,
        info: 'DM Sans - Medium / 72px / 72.00px / -2.00px / Original',
        example: 'Lorem Ip',
      },
      {
        name: 'Display 2',
        variant: 'display2' as const,
        info: 'DM Sans - Medium / 56px / 72.00px / -1.50px / Original',
        example: 'Lorem ips.',
      },
      {
        name: 'Display 3',
        variant: 'display3' as const,
        info: 'DM Sans - Medium / 48px / 48.00px / -1.50px / Original',
        example: 'Lorem ipsum',
      },
    ],
  },
  {
    category: 'Headline',
    variants: [
      {
        name: 'Headline 1',
        variant: 'headline1' as const,
        info: 'DM Sans - Medium / 40px / 48.00px / -1.00px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Headline 2',
        variant: 'headline2' as const,
        info: 'DM Sans - Medium / 32px / 40.00px / -0.50px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Headline 3',
        variant: 'headline3' as const,
        info: 'DM Sans - Medium / 28px / 36.00px / -0.50px / Original',
        example: 'Lorem ipsum',
      },
    ],
  },
  {
    category: 'Title',
    variants: [
      {
        name: 'Title 1',
        variant: 'title1' as const,
        info: 'DM Sans - Medium / 24px / 32.00px / -1.00px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Title 2',
        variant: 'title2' as const,
        info: 'DM Sans - Medium / 20px / 28.00px / -0.50px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Title 3',
        variant: 'title3' as const,
        info: 'DM Sans - Medium / 16px / 24.00px / -0.50px / Original',
        example: 'Lorem ipsum',
      },
    ],
  },
];

const rightColumnData = [
  {
    category: 'Body',
    variants: [
      {
        name: 'Body 1',
        variant: 'body1' as const,
        info: 'DM Sans - Regular / 16px / 24.00px / -0.10px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Body 2',
        variant: 'body2' as const,
        info: 'DM Sans - Regular / 14px / 20.00px / 0.00px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Body 3',
        variant: 'body3' as const,
        info: 'DM Sans - Regular / 13px / 20.00px / 0.00px / Original',
        example: 'Lorem ipsum',
      },
    ],
  },
  {
    category: 'Label',
    variants: [
      {
        name: 'Label 1',
        variant: 'label1' as const,
        info: 'DM Sans - Medium / 16px / 24.00px / 0.15px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Label 2',
        variant: 'label2' as const,
        info: 'DM Sans - Medium / 14px / 20.00px / 0.10px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Label 3',
        variant: 'label3' as const,
        info: 'DM Sans - Regular / 14px / 20.00px / 0.10px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Label 4',
        variant: 'label4' as const,
        info: 'DM Sans - Medium / 13px / 16.00px / 0.00px / Original',
        example: 'Lorem ipsum',
      },
      {
        name: 'Label 5',
        variant: 'label5' as const,
        info: 'DM Sans - Regular / 12px / 16.00px / 0.00px / Original',
        example: 'Lorem ipsum',
      },
    ],
  },
];

const TypographyCard = ({
  category,
  variants,
}: {
  category: string;
  variants: Array<{
    name: string;
    variant: TextVariant;
    info: string;
    example: string;
  }>;
}) => (
  <div className="bg-white rounded-lg p-6">
    {/* Header Row */}
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="font-semibold text-neutral-900 text-sm">Name</div>
      <div className="font-semibold text-neutral-900 text-sm">Info</div>
      <div className="font-semibold text-neutral-900 text-sm">Example</div>
    </div>

    {/* Variants */}
    <div className="space-y-3">
      {variants.map((item) => (
        <div
          key={item.name}
          className="grid grid-cols-3 gap-4 items-center"
        >
          <div className="font-medium text-neutral-700 text-sm">{item.name}</div>
          <div className="text-xs text-neutral-600 font-mono leading-relaxed">
            {item.info}
          </div>
          <div className="text-neutral-900">
            <Text variant={item.variant}>{item.example}</Text>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Typography: Story = {
  render: () => (
    <div className="min-h-screen bg-neutral-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {leftColumnData.map((category) => (
            <TypographyCard
              key={category.category}
              category={category.category}
              variants={category.variants}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {rightColumnData.map((category) => (
            <TypographyCard
              key={category.category}
              category={category.category}
              variants={category.variants}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

