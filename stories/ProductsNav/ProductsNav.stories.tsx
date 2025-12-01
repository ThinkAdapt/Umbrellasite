import type { Meta, StoryObj } from '@storybook/react';
import { ProductsNav } from './ProductsNav';

const meta = {
  title: 'Components/ProductsNav',
  component: ProductsNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductsNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onProductClick: (product: string) => {
      console.log('Product clicked:', product);
    },
  },
};

