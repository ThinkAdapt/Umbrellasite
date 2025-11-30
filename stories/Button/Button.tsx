import React from 'react';
import { PlusIcon } from '@/stories/icons';
import { getButtonLinkStyles } from './buttonStyles';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'large' | 'small';
export type ButtonState = 'active' | 'hover' | 'focused' | 'pressed' | 'disabled';
export type ButtonIconPosition = 'left' | 'right' | 'only' | 'none';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /**
   * Button variant/style
   */
  variant?: ButtonVariant;
  /**
   * Button size
   */
  size?: ButtonSize;
  /**
   * Button state (for demonstration purposes)
   * In real usage, this is controlled by user interaction
   */
  state?: ButtonState;
  /**
   * Icon position
   */
  iconPosition?: ButtonIconPosition;
  /**
   * Button text content
   */
  children?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether button is disabled
   */
  disabled?: boolean;
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  /**
   * Font weight (400, 500, 700, etc.)
   */
  fontWeight?: number | string;
}

// Styles are now shared via buttonStyles.ts

export const Button = ({
  variant = 'primary',
  size = 'large',
  state = 'active',
  iconPosition = 'none',
  children = 'Click the Button',
  className = '',
  disabled = false,
  icon,
  fontWeight,
  ...props
}: ButtonProps) => {
  // Override state if disabled prop is true
  const actualState = disabled ? 'disabled' : state;

  const styles = getButtonLinkStyles(variant, size, actualState, iconPosition, fontWeight);

  // Icon size: 20px if text exists, 28px if icon only (for all sizes)
  const getIconSize = () => {
    if (iconPosition === 'only') {
      return 28; // 28px for icon only, all sizes
    }
    return 20; // 20px when text exists, all sizes
  };

  const iconSize = getIconSize();
  const defaultIcon = <PlusIcon width={iconSize} height={iconSize} />;

  const renderIcon = () => {
    if (iconPosition === 'none') return null;
    const iconToRender = icon || defaultIcon;
    return (
      <span className="flex items-center" style={{ flexShrink: 0 }}>
        {iconToRender}
      </span>
    );
  };

  const renderContent = () => {
    if (iconPosition === 'only') {
      return renderIcon();
    }

    if (iconPosition === 'left') {
      return (
        <>
          {renderIcon()}
          {children}
        </>
      );
    }

    if (iconPosition === 'right') {
      return (
        <>
          {children}
          {renderIcon()}
        </>
      );
    }

    return children;
  };

  return (
    <button
      style={styles}
      className={className}
      disabled={actualState === 'disabled'}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

