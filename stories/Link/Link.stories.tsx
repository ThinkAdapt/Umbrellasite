import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

// Helper function to create link grid stories
const createLinkGrid = (
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
                          <Link
                            variant={variant}
                            size={size}
                            state={state}
                            iconPosition={iconPosition}
                            href="#"
                            useNextLink={false}
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

// Large Links
export const LargeTextOnly: Story = createLinkGrid('Large - Text Only', 'large', 'none');

export const LargeIconRight: Story = createLinkGrid('Large - Icon Right', 'large', 'right');

export const LargeIconLeft: Story = createLinkGrid('Large - Icon Left', 'large', 'left');

export const LargeIconOnly: Story = createLinkGrid('Large - Icon Only', 'large', 'only');

// Small Links
export const SmallTextOnly: Story = createLinkGrid('Small - Text Only', 'small', 'none');

export const SmallIconRight: Story = createLinkGrid('Small - Icon Right', 'small', 'right');

export const SmallIconLeft: Story = createLinkGrid('Small - Icon Left', 'small', 'left');

export const SmallIconOnly: Story = createLinkGrid('Small - Icon Only', 'small', 'only');

// All Links Combined
export const AllLinks: Story = {
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
          <h1 className="text-4xl font-bold mb-2 text-neutral-900">Link System</h1>
          <p className="text-neutral-600 mb-8">Complete link component system</p>

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
                                <Link
                                  variant={variant}
                                  size={size}
                                  state={state}
                                  iconPosition={iconPosition}
                                  href="#"
                                  useNextLink={false}
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

