import React from 'react';

export interface CheckCircleProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export const CheckCircle = ({ width = 24, height = 24, className, fill = 'currentColor' }: CheckCircleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
};

