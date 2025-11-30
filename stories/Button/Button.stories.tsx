import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Helper function to create button grid stories
const createButtonGrid = (
  title: string,
  size: 'large' | 'small',
  iconPosition: 'none' | 'left' | 'right' | 'only'
) => {
  const states: Array<'active' | 'hover' | 'focused' | 'pressed' | 'disabled'> = [
    'active',
    'hover',
    'focused',
    'pressed',
    'disabled',
  ];

  const variants: Array<'primary' | 'secondary' | 'tertiary'> = [
    'primary',
    'secondary',
    'tertiary',
  ];

  return {
    render: () => (
      <div className="min-h-screen bg-neutral-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900">{title}</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                    Type
                  </th>
                  <th className="text-center p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                    State: Active
                  </th>
                  <th className="text-center p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                    State: Hover
                  </th>
                  <th className="text-center p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                    State: Focused
                  </th>
                  <th className="text-center p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                    State: Pressed
                  </th>
                  <th className="text-center p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                    State: Disabled
                  </th>
                </tr>
              </thead>
              <tbody>
                {variants.map((variant) => (
                  <tr key={variant}>
                    <td className="p-4 border-b border-neutral-100 font-medium text-neutral-700 capitalize">
                      {variant}
                    </td>
                    {states.map((state) => (
                      <td key={state} className="p-4 border-b border-neutral-100 text-center">
                        <div className="flex justify-center">
                          <Button
                            variant={variant}
                            size={size}
                            state={state}
                            iconPosition={iconPosition}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  };
};

// Large Buttons
export const LargeTextOnly: Story = createButtonGrid(
  'Large - Text Only',
  'large',
  'none'
);

export const LargeIconRight: Story = createButtonGrid(
  'Large - Icon Right',
  'large',
  'right'
);

export const LargeIconLeft: Story = createButtonGrid(
  'Large - Icon Left',
  'large',
  'left'
);

export const LargeIconOnly: Story = createButtonGrid(
  'Large - Icon Only',
  'large',
  'only'
);

// Small Buttons
export const SmallTextOnly: Story = createButtonGrid(
  'Small - Text Only',
  'small',
  'none'
);

export const SmallIconRight: Story = createButtonGrid(
  'Small - Icon Right',
  'small',
  'right'
);

export const SmallIconLeft: Story = createButtonGrid(
  'Small - Icon Left',
  'small',
  'left'
);

export const SmallIconOnly: Story = createButtonGrid(
  'Small - Icon Only',
  'small',
  'only'
);

// All Buttons Combined
export const AllButtons: Story = {
  render: () => {
    const sizes: Array<'large' | 'small'> = ['large', 'small'];
    const iconPositions: Array<'none' | 'left' | 'right' | 'only'> = [
      'none',
      'left',
      'right',
      'only',
    ];
    const states: Array<'active' | 'hover' | 'focused' | 'pressed' | 'disabled'> = [
      'active',
      'hover',
      'focused',
      'pressed',
      'disabled',
    ];
    const variants: Array<'primary' | 'secondary' | 'tertiary'> = [
      'primary',
      'secondary',
      'tertiary',
    ];

    const getTitle = (size: string, iconPosition: string) => {
      const sizeLabel = size === 'large' ? 'Large' : 'Small';
      const iconLabel =
        iconPosition === 'none'
          ? 'Text Only'
          : iconPosition === 'left'
            ? 'Icon Left'
            : iconPosition === 'right'
              ? 'Icon Right'
              : 'Icon Only';
      return `${sizeLabel} - ${iconLabel}`;
    };

    return (
      <div className="min-h-screen bg-neutral-50 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <h1 className="text-4xl font-bold mb-2 text-neutral-900">Button System</h1>
          <p className="text-neutral-600 mb-8">Complete button component system</p>

          {sizes.map((size) =>
            iconPositions.map((iconPosition) => (
              <div key={`${size}-${iconPosition}`} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                  {getTitle(size, iconPosition)}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left p-4 border-b border-neutral-200 font-semibold text-neutral-900">
                          Type
                        </th>
                        {states.map((state) => (
                          <th
                            key={state}
                            className="text-center p-4 border-b border-neutral-200 font-semibold text-neutral-900 capitalize"
                          >
                            State: {state}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {variants.map((variant) => (
                        <tr key={variant}>
                          <td className="p-4 border-b border-neutral-100 font-medium text-neutral-700 capitalize">
                            {variant}
                          </td>
                          {states.map((state) => (
                            <td
                              key={state}
                              className="p-4 border-b border-neutral-100 text-center"
                            >
                              <div className="flex justify-center">
                                <Button
                                  variant={variant}
                                  size={size}
                                  state={state}
                                  iconPosition={iconPosition}
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  },
};

