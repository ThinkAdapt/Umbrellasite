import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Header } from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['overview', 'products', 'pricing', 'company'],
    },
    profileImageUrl: {
      control: 'text',
    },
    userName: {
      control: 'text',
    },
  },
  args: {
    onContactUsClick: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItem: 'overview',
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
};

export const ProductsActive: Story = {
  args: {
    activeItem: 'products',
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
};

export const PricingActive: Story = {
  args: {
    activeItem: 'pricing',
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
};

export const CompanyActive: Story = {
  args: {
    activeItem: 'company',
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
};

export const WithCustomProfile: Story = {
  args: {
    activeItem: 'overview',
    profileImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    userName: 'John Doe',
  },
};

