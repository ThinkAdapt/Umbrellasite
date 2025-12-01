import React from 'react';

export interface StageReadyIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: string;
}

export const StageReadyIcon = ({
  width = 32,
  height = 32,
  className,
  fill,
}: StageReadyIconProps) => {
  const fillColor1 = fill || '#5455A9';
  const fillColor2 = fill || '#00027F';
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_489_8761)">
        <path
          d="M14.2773 24.5735C14.2773 28.675 11.0812 32 7.13865 32C3.19608 32 0 28.675 0 24.5735C0 20.4719 3.19608 17.147 7.13865 17.147C11.0812 17.147 14.2773 20.4719 14.2773 24.5735Z"
          fill={fillColor1}
        />
        <path
          d="M32 24.5735C32 28.675 28.8039 32 24.8613 32C20.9188 32 17.7227 28.675 17.7227 24.5735C17.7227 20.4719 20.9188 17.147 24.8613 17.147C28.8039 17.147 32 20.4719 32 24.5735Z"
          fill={fillColor1}
        />
        <path
          d="M11.441 0.447111C15.0623 -0.935829 19.1155 0.996654 20.4927 4.76393L20.5 4.76116C21.8333 8.40322 20.7202 11.3346 18.33 16.1964C17.9659 16.9367 17.1067 17.273 16.3513 16.9724C11.4606 15.0259 8.73601 13.6047 7.45914 9.97973C7.43174 9.91104 7.40391 9.84222 7.37833 9.77226C6.00116 6.00521 7.82025 1.83032 11.441 0.447111Z"
          fill={fillColor2}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_489_8761"
          x="0"
          y="-4"
          width="32"
          height="36"
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
            result="effect1_innerShadow_489_8761"
          />
        </filter>
      </defs>
    </svg>
  );
};

