'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type IconWrapperSize = 'small' | 'medium' | 'large';

export interface IconWrapperProps {
  /**
   * Icon element to display
   */
  icon?: React.ReactNode;
  /**
   * Size variant
   * @default 'small'
   */
  size?: IconWrapperSize;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Placeholder Icon Component
 * Simple placeholder icon for when no icon is provided
 */
const PlaceholderIcon = ({ size }: { size: IconWrapperSize }) => {
  const sizeMap = {
    small: 'w-4 h-4', // 16px
    medium: 'w-6 h-6', // 24px
    large: 'w-8 h-8', // 32px
  };

  return (
    <svg
      className={sizeMap[size]}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};

/**
 * IconWrapper Component
 * 
 * A simple wrapper component for icons with a circular background.
 * Part of the atomic design system - used as a building block for other components.
 */
export const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  (
    {
      icon,
      size = 'small',
      className,
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'bg-[var(--color-surface-unselected)]', // #f6f6fc
      'p-[var(--spacing-primitive-2)]', // 8px padding
      'rounded-full', // Full circle
      'overflow-hidden',
      'shrink-0',
    );

    const sizeStyles = cn(
      size === 'small' && [
        // Container will size based on icon (16px icon + 8px padding * 2 = 32px total)
      ],
      size === 'medium' && [
        // Container will size based on icon (24px icon + 8px padding * 2 = 40px total)
      ],
      size === 'large' && [
        // Container will size based on icon (32px icon + 8px padding * 2 = 48px total)
      ],
    );

    const iconSizeStyles = cn(
      size === 'small' && 'w-4 h-4', // 16px
      size === 'medium' && 'w-6 h-6', // 24px
      size === 'large' && 'w-8 h-8', // 32px
    );

    return (
      <div
        ref={ref}
        className={cn(baseStyles, sizeStyles, className)}
        role="img"
        aria-hidden="true"
      >
        {icon ? (
          <span className={cn('flex items-center justify-center', iconSizeStyles)}>
            {icon}
          </span>
        ) : (
          <PlaceholderIcon size={size} />
        )}
      </div>
    );
  }
);

IconWrapper.displayName = 'IconWrapper';

