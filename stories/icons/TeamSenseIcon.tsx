import React from 'react';

export interface TeamSenseIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export const TeamSenseIcon = ({
  width = 25,
  height = 48,
  className,
  fill,
}: TeamSenseIconProps) => {
  const fillColor1 = fill || '#F68354';
  const fillColor2 = fill || '#F46429';
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 48"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_489_8767)">
        <path
          d="M13.7887 41.2632C13.7887 44.9838 10.702 48 6.89435 48C3.0867 48 0 44.9838 0 41.2632C0 37.5425 3.0867 34.5263 6.89435 34.5263C10.702 34.5263 13.7887 37.5425 13.7887 41.2632Z"
          fill={fillColor1}
        />
        <path
          d="M13.7887 18.5263C13.7887 22.247 10.702 25.2632 6.89435 25.2632C3.0867 25.2632 0 22.247 0 18.5263C0 14.8057 3.0867 11.7895 6.89435 11.7895C10.702 11.7895 13.7887 14.8057 13.7887 18.5263Z"
          fill={fillColor1}
        />
        <path
          d="M24.992 29.8947C24.992 33.6154 21.9053 36.6316 18.0977 36.6316C14.29 36.6316 11.2033 33.6154 11.2033 29.8947C11.2033 26.1741 14.29 23.1579 18.0977 23.1579C21.9053 23.1579 24.992 26.1741 24.992 29.8947Z"
          fill={fillColor1}
        />
        <path
          d="M18.0977 0C21.9053 0 24.992 3.01619 24.992 6.73684H25C25.0017 10.5616 22.7226 12.7743 18.3897 16.5921C18.2283 16.7343 17.9811 16.7366 17.817 16.5975C13.4655 12.9079 11.1575 10.7348 11.2063 6.94038C11.2042 6.87278 11.2033 6.80493 11.2033 6.73684C11.2033 3.01619 14.29 0 18.0977 0Z"
          fill={fillColor2}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_489_8767"
          x="0"
          y="-4"
          width="25"
          height="52"
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
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_489_8767"
          />
        </filter>
      </defs>
    </svg>
  );
};

