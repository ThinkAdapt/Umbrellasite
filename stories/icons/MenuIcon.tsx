import React from 'react';

export interface MenuIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

export const MenuIcon = ({
  width = 24,
  height = 24,
  className,
  color = 'currentColor',
}: MenuIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

