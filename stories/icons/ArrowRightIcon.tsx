import React from 'react';

export interface ArrowRightIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
}

export const ArrowRightIcon = ({
  width = 20,
  height = 20,
  className,
  color = 'currentColor',
}: ArrowRightIconProps) => {
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
        d="M18.0766 10.2373C18.0449 10.314 17.9992 10.383 17.9417 10.4405L12.1084 16.2739C11.9867 16.3955 11.8267 16.4572 11.6667 16.4572C11.5067 16.4572 11.3466 16.3964 11.225 16.2739C10.9808 16.0297 10.9808 15.6338 11.225 15.3897L15.9916 10.623H2.5C2.155 10.623 1.875 10.343 1.875 9.99803C1.875 9.65303 2.155 9.37303 2.5 9.37303H15.9908L11.2242 4.60638C10.98 4.36222 10.98 3.96635 11.2242 3.72219C11.4683 3.47802 11.8642 3.47802 12.1084 3.72219L17.9417 9.55552C17.9992 9.61302 18.0449 9.6821 18.0766 9.75877C18.1399 9.9121 18.1399 10.084 18.0766 10.2373Z"
        fill={color}
      />
    </svg>
  );
};

