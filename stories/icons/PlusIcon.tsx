import React from 'react';

export interface PlusIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

export const PlusIcon = ({
  width = 20,
  height = 20,
  className,
  color = 'currentColor',
}: PlusIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M10 4V16M4 10H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

