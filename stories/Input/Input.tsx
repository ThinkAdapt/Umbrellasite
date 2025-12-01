"use client";

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  floatingLabel?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, floatingLabel, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {floatingLabel && (
          <label className="block mb-1 text-sm" htmlFor={props.id || props.name}>
            {floatingLabel}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full p-3 px-3.5 border border-neutral-200 rounded-lg text-sm ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

