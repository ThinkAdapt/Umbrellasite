import React from 'react';

export interface KnowledgeBaseIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const KnowledgeBaseIcon = ({
  width = 31,
  height = 60,
  className,
}: KnowledgeBaseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 31 60"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_489_8755)">
        <path
          d="M17.098 51.5789C17.098 56.2298 13.2705 60 8.54899 60C3.82751 60 0 56.2298 0 51.5789C0 46.9281 3.82751 43.1579 8.54899 43.1579C13.2705 43.1579 17.098 46.9281 17.098 51.5789Z"
          fill="#F68354"
        />
        <path
          d="M17.098 23.1579C17.098 27.8087 13.2705 31.5789 8.54899 31.5789C3.82751 31.5789 0 27.8087 0 23.1579C0 18.5071 3.82751 14.7368 8.54899 14.7368C13.2705 14.7368 17.098 18.5071 17.098 23.1579Z"
          fill="#F68354"
        />
        <path
          d="M30.9901 37.3684C30.9901 42.0192 27.1626 45.7895 22.4411 45.7895C17.7196 45.7895 13.8921 42.0192 13.8921 37.3684C13.8921 32.7176 17.7196 28.9474 22.4411 28.9474C27.1626 28.9474 30.9901 32.7176 30.9901 37.3684Z"
          fill="#F68354"
        />
        <path
          d="M22.4411 0C27.1626 0 30.9901 3.77023 30.9901 8.42105H31C31.0022 13.2021 28.1761 15.9678 22.8032 20.7401C22.6031 20.9179 22.2966 20.9208 22.0931 20.7468C16.6972 16.1348 13.8353 13.4185 13.8958 8.67547C13.8932 8.59097 13.8921 8.50616 13.8921 8.42105C13.8921 3.77023 17.7196 0 22.4411 0Z"
          fill="#F46429"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_489_8755"
          x="0"
          y="-4"
          width="31"
          height="64"
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
            result="effect1_innerShadow_489_8755"
          />
        </filter>
      </defs>
    </svg>
  );
};

