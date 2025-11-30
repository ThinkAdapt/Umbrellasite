import React from 'react';

export type TextVariant =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'label1'
  | 'label2'
  | 'label3'
  | 'label4'
  | 'label5';

export interface TextProps {
  /**
   * Text variant/style
   */
  variant?: TextVariant;
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * HTML tag to render
   */
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

const variantStyles: Record<TextVariant, React.CSSProperties> = {
  display1: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500, // Medium
    fontSize: '72px',
    lineHeight: '72px',
    letterSpacing: '-2px',
    color: '#000',
  },
  display2: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '56px',
    lineHeight: '72px',
    letterSpacing: '-1.5px',
    color: '#000',
  },
  display3: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '48px',
    letterSpacing: '-1.5px',
  },
  headline1: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-1px',
    color: '#000',
  },
  headline2: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.5px',
    color: '#000',
  },
  headline3: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '36px',
    letterSpacing: '-0.5px',
    color: '#000',
  },
  title1: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-1px',
    color: '#000',
  },
  title2: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '-0.5px',
    color: '#000',
  },
  title3: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.5px',
    color: '#000',
  },
  body1: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 400, // Regular
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '-0.1px',
    color: '#000',
  },
  body2: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
    color: '#000',
  },
  body3: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0px',
    color: '#000',
  },
  label1: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    color: '#000',
  },
  label2: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.1px',
    color: '#000',
  },
  label3: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.1px',
    color: '#000',
  },
  label4: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0px',
    color: '#000',
  },
  label5: {
    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0px',
    color: '#000',
  },
};

const getDefaultTag = (variant: TextVariant): TextProps['as'] => {
  if (variant.startsWith('display') || variant.startsWith('headline')) {
    return 'h1';
  }
  if (variant.startsWith('title')) {
    return 'h2';
  }
  return 'p';
};

export const Text = ({
  variant = 'body1',
  children,
  className = '',
  as,
  style: customStyle,
}: TextProps) => {
  const Tag = (as || getDefaultTag(variant)) as React.ElementType;
  const variantStyle = variantStyles[variant];
  
  // Remove color from variant style if customStyle has color or className has color classes
  const { color, ...variantStyleWithoutColor } = variantStyle;
  const hasColorInCustomStyle = customStyle?.color !== undefined;
  const hasColorInClassName = className.includes('text-');
  
  // Only apply variant color if no custom color is provided
  const finalVariantStyle = hasColorInCustomStyle || hasColorInClassName 
    ? variantStyleWithoutColor 
    : variantStyle;
  
  const style = customStyle ? { ...finalVariantStyle, ...customStyle } : finalVariantStyle;

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

