import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const colorFamilies = [
  {
    name: 'Soprano Blue',
    colors: [
      { name: 'blue-50', value: '#e9effd' },
      { name: 'blue-100', value: '#d3dffb' },
      { name: 'blue-200', value: '#a7bff7' },
      { name: 'blue-300', value: '#7b9ff3' },
      { name: 'blue-400', value: '#4f7fef' },
      { name: 'blue-500', value: '#235feb' },
      { name: 'blue-600', value: '#1c4fbc' },
      { name: 'blue-700', value: '#153f8d' },
      { name: 'blue-800', value: '#0e2f5e' },
      { name: 'blue-900', value: '#071f2f' },
    ],
  },
  {
    name: 'Green',
    colors: [
      { name: 'green-50', value: '#e8f5ed' },
      { name: 'green-100', value: '#d1ebdb' },
      { name: 'green-200', value: '#a3d7b7' },
      { name: 'green-300', value: '#75c393' },
      { name: 'green-400', value: '#47af6f' },
      { name: 'green-500', value: '#1eae4f' },
      { name: 'green-600', value: '#188b3f' },
      { name: 'green-700', value: '#12682f' },
      { name: 'green-800', value: '#0c451f' },
      { name: 'green-900', value: '#06220f' },
    ],
  },
  {
    name: 'Red',
    colors: [
      { name: 'red-50', value: '#fde9eb' },
      { name: 'red-100', value: '#fbd3d7' },
      { name: 'red-200', value: '#f7a7af' },
      { name: 'red-300', value: '#f37b87' },
      { name: 'red-400', value: '#ef4f5f' },
      { name: 'red-500', value: '#ec1f33' },
      { name: 'red-600', value: '#bc1929' },
      { name: 'red-700', value: '#8d131f' },
      { name: 'red-800', value: '#5e0c14' },
      { name: 'red-900', value: '#2f060a' },
    ],
  },
  {
    name: 'Yellow',
    colors: [
      { name: 'yellow-50', value: '#fff8e8' },
      { name: 'yellow-100', value: '#fff1d1' },
      { name: 'yellow-200', value: '#ffe3a3' },
      { name: 'yellow-300', value: '#ffd575' },
      { name: 'yellow-400', value: '#ffc747' },
      { name: 'yellow-500', value: '#fdb718' },
      { name: 'yellow-600', value: '#ca9213' },
      { name: 'yellow-700', value: '#986e0e' },
      { name: 'yellow-800', value: '#65490a' },
      { name: 'yellow-900', value: '#332505' },
    ],
  },
  {
    name: 'Neutral',
    colors: [
      { name: 'neutral-50', value: '#f5f5f5' },
      { name: 'neutral-100', value: '#ebebeb' },
      { name: 'neutral-200', value: '#d7d7d7' },
      { name: 'neutral-300', value: '#c3c3c3' },
      { name: 'neutral-400', value: '#afafaf' },
      { name: 'neutral-500', value: '#9b9b9b' },
      { name: 'neutral-600', value: '#7c7c7c' },
      { name: 'neutral-700', value: '#5d5d5d' },
      { name: 'neutral-800', value: '#3e3e3e' },
      { name: 'neutral-900', value: '#0f0f0f' },
    ],
  },
];

const supportiveColors = [
  { name: 'dark-green', value: '#0d4f2d' },
  { name: 'bright-green', value: '#2dd573' },
  { name: 'light-green', value: '#7feb9f' },
  { name: 'orange', value: '#ff6b35' },
  { name: 'peach', value: '#ffb3a7' },
  { name: 'purple', value: '#8b5cf6' },
  { name: 'dark-blue', value: '#1e3a8a' },
  { name: 'indigo', value: '#4f46e5' },
];

const getTextColor = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
};

const hexToRgb = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

export const AllColors: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3 text-neutral-900 tracking-tight">
            Color Palette
          </h1>
          <p className="text-lg text-neutral-600">
            Complete color system for Soprano AI design system
          </p>
        </div>

        {/* Main Color Families */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {colorFamilies.map((family) => (
            <div
              key={family.name}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-bold mb-6 text-neutral-900 pb-3 border-b border-neutral-100">
                {family.name}
              </h2>
              <div className="space-y-3">
                {family.colors.map((color) => (
                  <div
                    key={color.name}
                    className="group cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(color.value);
                    }}
                  >
                    <div
                      className="h-20 rounded-xl mb-2 flex flex-col items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg border border-neutral-100/50"
                      style={{ backgroundColor: color.value }}
                    >
                      <span
                        className="text-sm font-semibold px-3 py-1 rounded-lg backdrop-blur-sm bg-black/10"
                        style={{ color: getTextColor(color.value) }}
                      >
                        {color.name.split('-')[1]}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-xs font-semibold text-neutral-700">
                        {color.value}
                      </div>
                      <div className="font-mono text-[10px] text-neutral-500">
                        {hexToRgb(color.value)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Supportive Colors */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">Supportive Colors</h2>
            <p className="text-neutral-600">Additional colors for specific use cases</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {supportiveColors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-32 rounded-xl mb-3 flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border border-neutral-100/50"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm bg-black/10 uppercase tracking-wide"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.replace('-', ' ')}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xs font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-[10px] text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SopranoBlue: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-neutral-900 tracking-tight">
            Soprano Blue
          </h1>
          <p className="text-lg text-neutral-600">Primary brand color palette</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {colorFamilies[0].colors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-32 rounded-xl mb-3 flex flex-col items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border border-neutral-100/50"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="text-base font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm bg-black/10 mb-1"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.split('-')[1]}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-sm font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    bg-{color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Green: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-neutral-900 tracking-tight">Green</h1>
          <p className="text-lg text-neutral-600">Success and positive action colors</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {colorFamilies[1].colors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-32 rounded-xl mb-3 flex flex-col items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border border-neutral-100/50"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="text-base font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm bg-black/10 mb-1"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.split('-')[1]}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-sm font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    bg-{color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Red: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-neutral-900 tracking-tight">Red</h1>
          <p className="text-lg text-neutral-600">Error and warning colors</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {colorFamilies[2].colors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-32 rounded-xl mb-3 flex flex-col items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border border-neutral-100/50"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="text-base font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm bg-black/10 mb-1"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.split('-')[1]}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-sm font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    bg-{color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Yellow: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-neutral-900 tracking-tight">Yellow</h1>
          <p className="text-lg text-neutral-600">Warning and attention colors</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {colorFamilies[3].colors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-32 rounded-xl mb-3 flex flex-col items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border border-neutral-100/50"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="text-base font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm bg-black/10 mb-1"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.split('-')[1]}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-sm font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    bg-{color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-neutral-900 tracking-tight">Neutral</h1>
          <p className="text-lg text-neutral-600">Grayscale palette for text and backgrounds</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {colorFamilies[4].colors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-32 rounded-xl mb-3 flex flex-col items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border-2"
                  style={{
                    backgroundColor: color.value,
                    borderColor: color.name.includes('50') || color.name.includes('100')
                      ? '#d7d7d7'
                      : 'transparent',
                  }}
                >
                  <span
                    className="text-base font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm bg-black/10 mb-1"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.split('-')[1]}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-sm font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    bg-{color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Supportive: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-neutral-900 tracking-tight">
            Supportive Colors
          </h1>
          <p className="text-lg text-neutral-600">
            Additional colors for specific use cases and accents
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {supportiveColors.map((color) => (
              <div
                key={color.name}
                className="group cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(color.value);
                }}
              >
                <div
                  className="h-36 rounded-xl mb-4 flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl border border-neutral-100/50"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="text-xs font-bold px-3 py-2 rounded-lg backdrop-blur-sm bg-black/10 uppercase tracking-wider"
                    style={{ color: getTextColor(color.value) }}
                  >
                    {color.name.replace('-', ' ')}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-sm font-semibold text-neutral-700">
                    {color.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {hexToRgb(color.value)}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    bg-supportive-{color.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

