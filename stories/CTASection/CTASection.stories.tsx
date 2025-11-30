import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './CTASection';

const meta = {
  title: 'Components/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRequestDemoClick: () => {
      console.log('Request a Demo clicked');
    },
  },
};

