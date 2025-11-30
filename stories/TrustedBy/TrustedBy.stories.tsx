import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TrustedBy } from './TrustedBy';

const meta = {
  title: 'Components/TrustedBy',
  component: TrustedBy,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TrustedBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomCompanies: Story = {
  args: {
    companies: [
      {
        id: 'company1',
        name: 'Company A',
        icon: (
          <div className="w-10 h-10 bg-blue-500 rounded-lg"></div>
        ),
      },
      {
        id: 'company2',
        name: 'Company B',
        icon: (
          <div className="w-10 h-10 bg-green-500 rounded-lg"></div>
        ),
      },
    ],
  },
};

