import React from 'react';
import NextLink from 'next/link';
import { PlusIcon } from '@/stories/icons';
import { getButtonLinkStyles } from '../Button/buttonStyles';

export type LinkVariant = 'primary' | 'secondary' | 'tertiary';
export type LinkSize = 'large' | 'small';
export type LinkState = 'active' | 'hover' | 'focused' | 'pressed' | 'disabled';
export type LinkIconPosition = 'left' | 'right' | 'only' | 'none';

export interface LinkProps {
  /**
   * Link variant/style
   */
  variant?: LinkVariant;
  /**
   * Link size
   */
  size?: LinkSize;
  /**
   * Link state (for demonstration purposes)
   * In real usage, this is controlled by user interaction
   */
  state?: LinkState;
  /**
   * Icon position
   */
  iconPosition?: LinkIconPosition;
  /**
   * Link text content
   */
  children?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether link is disabled
   */
  disabled?: boolean;
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  /**
   * Link href (required)
   */
  href: string;
  /**
   * Whether to use Next.js Link (default: true)
   * Set to false to use regular <a> tag
   */
  useNextLink?: boolean;
  /**
   * Additional props for Next.js Link
   */
  nextLinkProps?: React.ComponentProps<typeof NextLink>;
  /**
   * Additional props for anchor tag
   */
  anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const Link = ({
  variant = 'primary',
  size = 'large',
  state = 'active',
  iconPosition = 'none',
  children = 'Click the Link',
  className = '',
  disabled = false,
  icon,
  href,
  useNextLink = true,
  nextLinkProps,
  anchorProps,
}: LinkProps) => {
  // Override state if disabled prop is true
  const actualState = disabled ? 'disabled' : state;

  const styles = getButtonLinkStyles(variant, size, actualState, iconPosition);

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

  // If disabled, render as span
  if (actualState === 'disabled') {
    return (
      <span style={styles} className={className} aria-disabled="true">
        {renderContent()}
      </span>
    );
  }

  // Use Next.js Link or regular anchor
  if (useNextLink) {
    return (
      <NextLink href={href} style={styles} className={className} {...nextLinkProps}>
        {renderContent()}
      </NextLink>
    );
  }

  return (
    <a href={href} style={styles} className={className} {...anchorProps}>
      {renderContent()}
    </a>
  );
};

