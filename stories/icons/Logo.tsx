import React from 'react';

export interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Logo = ({
  width = 46,
  height = 28,
  className,
}: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 46 28"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_489_9004)">
        <path
          d="M28.5517 14C28.5517 21.732 22.1602 28 14.2759 28C6.39152 28 0 21.732 0 14C0 6.26801 6.39152 0 14.2759 0C22.1602 0 28.5517 6.26801 28.5517 14Z"
          fill="#6D96F2"
        />
        <path
          d="M46 14C46 21.732 39.8013 28 32.1548 28C27.128 28 27.8556 25.2912 28.9442 21.2383C29.5115 19.1262 30.1769 16.649 30.1769 14C30.1769 11.351 29.5115 8.8738 28.9442 6.76165C27.8556 2.70884 27.128 0 32.1548 0C39.8013 0 46 6.26801 46 14Z"
          fill="#2563EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_489_9004"
          x="0"
          y="0"
          width="46"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_489_9004"
          />
        </filter>
      </defs>
    </svg>
  );
};

