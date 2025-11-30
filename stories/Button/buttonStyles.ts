import React from 'react';
import type { ButtonVariant, ButtonSize, ButtonState, ButtonIconPosition } from './Button';

export type LinkVariant = ButtonVariant;
export type LinkSize = ButtonSize;
export type LinkState = ButtonState;
export type LinkIconPosition = ButtonIconPosition;

export const getButtonLinkStyles = (
  variant: ButtonVariant | LinkVariant,
  size: ButtonSize | LinkSize,
  state: ButtonState | LinkState,
  iconPosition: ButtonIconPosition | LinkIconPosition
): React.CSSProperties => {
  const isDisabled = state === 'disabled';
  const isPressed = state === 'pressed';
  const isHover = state === 'hover';
  const isFocused = state === 'focused';

  // Base styles
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 700, // Bold
    borderRadius: '12px',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    transition: 'all 0.2s ease',
    outline: 'none',
    textDecoration: 'none',
    letterSpacing: '0.15px',
  };

  // Size styles
  if (size === 'large') {
    if (iconPosition === 'only') {
      baseStyles.width = '48px';
      baseStyles.height = '48px';
      baseStyles.padding = '0';
    } else {
      baseStyles.padding = '12px 20px';
      baseStyles.fontSize = '16px';
      baseStyles.lineHeight = '24px';
    }
  } else {
    // small
    if (iconPosition === 'only') {
      baseStyles.width = '40px';
      baseStyles.height = '40px';
      baseStyles.padding = '0';
    } else {
      baseStyles.padding = '8px 16px';
      baseStyles.fontSize = '14px';
      baseStyles.lineHeight = '20px';
    }
  }

  // Variant and state styles
  if (variant === 'primary') {
    if (isDisabled) {
      baseStyles.backgroundColor = 'var(--color-neutral-25, #F5F5F5)';
      baseStyles.color = '#9b9b9b'; // neutral-500
    } else if (isFocused) {
      baseStyles.border = '2px solid var(--color-accent-900, #102A63)';
      baseStyles.backgroundColor = 'var(--color-accent-600, #225AD6)';
      baseStyles.color = 'var(--color-neutral-10, #FAFAFA)';
    } else if (isPressed) {
      baseStyles.border = '1px solid var(--color-accent-500, #2563EB)';
      baseStyles.backgroundColor = 'var(--color-accent-600, #225AD6)';
      baseStyles.color = 'var(--color-neutral-10, #FAFAFA)';
      baseStyles.boxShadow = '1px 1px 6px 0 var(--color-accent-800, #143681) inset';
    } else if (isHover) {
      baseStyles.backgroundColor = 'var(--color-accent-500, #2563EB)';
      baseStyles.color = 'var(--color-neutral-10, #FAFAFA)';
      baseStyles.boxShadow = '0 0 4px 0 var(--color-accent-50, #E9EFFD)';
    } else {
      baseStyles.backgroundColor = 'var(--color-accent-500, #2563EB)';
      baseStyles.color = 'var(--color-neutral-10, #FAFAFA)';
    }
  } else if (variant === 'secondary') {
    baseStyles.border = '1px solid';

    if (isDisabled) {
      baseStyles.border = '1px solid var(--color-neutral-25, #F5F5F5)';
      baseStyles.backgroundColor = 'var(--color-neutral-10, #FAFAFA)';
      baseStyles.color = 'var(--color-neutral-200, #C3C3C3)';
    } else if (isFocused) {
      baseStyles.border = '2px solid var(--color-accent-500, #2563EB)';
      baseStyles.backgroundColor = 'var(--color-accent-100, #BBCFF9)';
      baseStyles.color = 'var(--color-accent-700, #1A46A7)';
    } else if (isPressed) {
      baseStyles.border = '1px solid rgba(155, 183, 246, 0.35)';
      baseStyles.backgroundColor = 'var(--color-accent-100, #BBCFF9)';
      baseStyles.color = 'var(--color-accent-700, #1A46A7)';
      baseStyles.boxShadow = '1px 1px 8px 0 var(--color-accent-300, #6D96F2) inset';
    } else if (isHover) {
      baseStyles.border = '1px solid var(--color-accent-50, #E9EFFD)';
      baseStyles.backgroundColor = 'var(--color-accent-100, #BBCFF9)';
      baseStyles.color = 'var(--color-accent-700, #1A46A7)';
      baseStyles.boxShadow = '0 0 2px 0 var(--color-accent-50, #E9EFFD)';
    } else {
      // Active state
      baseStyles.border = '1px solid var(--color-accent-50, #E9EFFD)';
      baseStyles.backgroundColor = 'var(--color-accent-50, #E9EFFD)';
      baseStyles.color = 'var(--color-accent-700, #1A46A7)';
    }
  } else {
    // tertiary
    baseStyles.backgroundColor = 'transparent';

    if (isDisabled) {
      baseStyles.color = 'var(--color-neutral-200, #C3C3C3)';
    } else if (isFocused) {
      baseStyles.border = '2px solid var(--color-accent-300, #6D96F2)';
      baseStyles.backgroundColor = 'var(--color-accent-50, #E9EFFD)';
      baseStyles.color = 'var(--color-accent-900, #102A63)';
    } else if (isPressed) {
      baseStyles.backgroundColor = 'var(--color-accent-50, #E9EFFD)';
      baseStyles.color = 'var(--color-accent-900, #102A63)';
      baseStyles.boxShadow = '1px 1px 8px 0 var(--color-neutral-100, #E0E0E0) inset';
    } else if (isHover) {
      baseStyles.backgroundColor = 'var(--color-accent-50, #E9EFFD)';
      baseStyles.color = 'var(--color-accent-900, #102A63)';
      baseStyles.boxShadow = '0 0 2px 0 var(--color-main-secondary-50, #EDE6F3)';
    } else {
      // Active state
      baseStyles.color = 'var(--color-accent-900, #102A63)';
    }
  }

  return baseStyles;
};

