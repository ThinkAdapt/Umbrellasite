import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BottomSheet } from './BottomSheet';
import { Text } from '@/stories/Text';
import { Button } from '@/stories/Button';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    onClose: {
      action: 'closed',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="p-4">
        <Text variant="headline1" as="h2" className="mb-4">
          Bottom Sheet Content
        </Text>
        <Text variant="body1" className="mb-6">
          This is a bottom sheet component. It slides up from the bottom of the screen.
        </Text>
        <Button variant="primary" size="large" onClick={fn()}>
          Action Button
        </Button>
      </div>
    ),
  },
};

export const WithText: Story = {
  args: {
    isOpen: true,
    bottomSheetText: "Bottom Sheet Title",
    children: (
      <div className="p-4">
        <Text variant="body1" className="mb-4">
          This bottom sheet has a title text at the top.
        </Text>
        <Button variant="secondary" size="large" onClick={fn()}>
          Close
        </Button>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="p-4 space-y-4">
        <Text variant="headline1" as="h2">
          Long Content Example
        </Text>
        {Array.from({ length: 20 }, (_, i) => (
          <Text key={i} variant="body1">
            This is paragraph {i + 1}. Bottom sheets can handle long content with scrolling.
          </Text>
        ))}
        <Button variant="primary" size="large" onClick={fn()}>
          Scroll to See More
        </Button>
      </div>
    ),
  },
};

export const FormContent: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="p-4 space-y-4">
        <Text variant="headline1" as="h2" className="mb-4">
          Contact Form
        </Text>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-neutral-200 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-neutral-200 rounded-lg"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 border border-neutral-200 rounded-lg"
        />
        <Button variant="primary" size="large" className="w-full" onClick={fn()}>
          Submit
        </Button>
      </div>
    ),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    children: (
      <div className="p-4">
        <Text variant="body1">This bottom sheet is closed and won't be visible.</Text>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="p-4 space-y-4">
        <Text variant="headline1" as="h2">
          Interactive Bottom Sheet
        </Text>
        <Text variant="body1">
          Click outside the sheet or use the close button to dismiss it.
        </Text>
        <div className="flex gap-4">
          <Button variant="primary" size="large" onClick={fn()}>
            Primary Action
          </Button>
          <Button variant="secondary" size="large" onClick={fn()}>
            Secondary Action
          </Button>
        </div>
      </div>
    ),
  },
  render: (args) => {
    return (
      <div className="min-h-screen bg-neutral-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-neutral-900">Bottom Sheet Component</h1>
          <p className="text-neutral-600 mb-8">Interactive bottom sheet example</p>
          <BottomSheet {...args} />
        </div>
      </div>
    );
  },
};

