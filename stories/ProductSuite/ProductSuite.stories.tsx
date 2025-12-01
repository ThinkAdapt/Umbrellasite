import type { Meta, StoryObj } from '@storybook/react';
import { ProductSuite } from './ProductSuite';

const meta = {
  title: 'Components/ProductSuite',
  component: ProductSuite,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductSuite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onLearnMoreClick: (productId: string) => {
      console.log('Learn More clicked for:', productId);
    },
  },
};

