import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    floatingLabel: 'Label',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text...',
    floatingLabel: 'Label',
    defaultValue: 'Sample text',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter text...',
    floatingLabel: 'Email',
    error: 'This field is required',
    defaultValue: 'invalid-email',
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Enter text...',
    floatingLabel: 'Required Field',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    floatingLabel: 'Disabled Field',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
    floatingLabel: 'Email Address',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    floatingLabel: 'Password',
  },
};

export const Phone: Story = {
  args: {
    type: 'tel',
    placeholder: 'Enter phone number...',
    floatingLabel: 'Phone Number',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-2 text-neutral-900">Input Component</h1>
        <p className="text-neutral-600 mb-8">Complete input component system</p>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Default Input</h2>
            <Input floatingLabel="Default Input" placeholder="Enter text..." />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">With Value</h2>
            <Input floatingLabel="Input with Value" defaultValue="Sample text" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Required Input</h2>
            <Input floatingLabel="Required Field" required placeholder="Enter text..." />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">With Error</h2>
            <Input
              floatingLabel="Email"
              type="email"
              error="Please enter a valid email address"
              defaultValue="invalid-email"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Disabled Input</h2>
            <Input
              floatingLabel="Disabled Field"
              disabled
              defaultValue="Disabled value"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Email Input</h2>
            <Input type="email" floatingLabel="Email Address" placeholder="Enter email..." />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Password Input</h2>
            <Input type="password" floatingLabel="Password" placeholder="Enter password..." />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Phone Input</h2>
            <Input type="tel" floatingLabel="Phone Number" placeholder="Enter phone number..." />
          </div>
        </div>
      </div>
    </div>
  ),
};

