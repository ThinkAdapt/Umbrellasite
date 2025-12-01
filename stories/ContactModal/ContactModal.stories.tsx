import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ContactModal } from './ContactModal';

const meta = {
  title: 'Components/ContactModal',
  component: ContactModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    onClose: {
      action: 'closed',
    },
    onSuccess: {
      action: 'success',
    },
  },
  args: {
    onClose: fn(),
    onSuccess: fn(),
  },
} satisfies Meta<typeof ContactModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent = {
  heading: "Get in Touch",
  description: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  points: [
    "Expert consultation on HR solutions",
    "Customized demo for your team",
    "Quick response within 24 hours"
  ],
  submitLabel: "Get Started"
};

export const Default: Story = {
  args: {
    open: true,
    content: defaultContent,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    content: defaultContent,
  },
};

export const CustomContent: Story = {
  args: {
    open: true,
    content: {
      heading: "Request a Demo",
      description: "See how SopranoAI can transform your HR operations. Schedule a personalized demo today.",
      points: [
        "See live product demonstrations",
        "Get answers to your questions",
        "Explore custom solutions for your needs"
      ],
      submitLabel: "Schedule Demo"
    },
  },
};

export const MinimalContent: Story = {
  args: {
    open: true,
    content: {
      heading: "Contact Us",
      description: "Have questions? We're here to help.",
      points: [
        "Fast response time",
        "Expert support"
      ],
      submitLabel: "Send Message"
    },
  },
};

export const Interactive: Story = {
  args: {
    open: true,
    content: defaultContent,
    onClose: fn(),
    onSuccess: fn(),
  },
  render: (args) => {
    return (
      <div className="min-h-screen bg-neutral-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-neutral-900">Contact Modal</h1>
          <p className="text-neutral-600 mb-8">Interactive contact form modal</p>
          <ContactModal {...args} />
        </div>
      </div>
    );
  },
};

