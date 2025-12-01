import type { Meta, StoryObj } from '@storybook/react';
import { ProductsIntroSection } from './ProductsIntroSection';

const meta = {
  title: 'Components/ProductsIntroSection',
  component: ProductsIntroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductsIntroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onAction: () => {
      console.log('Action clicked');
    },
  },
};

