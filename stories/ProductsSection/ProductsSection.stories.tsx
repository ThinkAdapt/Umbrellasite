import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { ProductsSection } from './ProductsSection';

const meta = {
  title: 'Components/ProductsSection',
  component: ProductsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onProductClick: fn(),
  },
} satisfies Meta<typeof ProductsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

