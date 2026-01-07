'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type IconButtonVariant = 'primary' | 'neutral' | 'subtle';
export type IconButtonSize = 'medium' | 'small';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon element to display
   */
  icon: React.ReactNode;
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: IconButtonVariant;
  /**
   * Button size
   * @default 'medium'
   */
  size?: IconButtonSize;
  /**
   * Accessible label for screen readers
   */
  'aria-label': string;
}

/**
 * IconButton Component
 * 
 * An icon-only button component with multiple variants, sizes, and states.
 * Uses design tokens for consistent styling.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'primary',
      size = 'medium',
      className,
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'inline-flex items-center justify-center',
      'font-primary font-medium',
      'transition-all duration-fast ease-out',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'rounded-full', // Full circle/pill shape
      
      // Size variants
      size === 'medium' && [
        'h-11 w-11', // 44px x 44px
        'p-3', // 12px padding
      ],
      size === 'small' && [
        'h-9', // 36px height
        'min-w-[35px] w-[35px]', // 35px width (from Figma)
        'p-2', // 8px padding
      ],
      
      // Variant styles
      variant === 'primary' && [
        'bg-[var(--color-interactive-primary)] text-[var(--color-text-inverse)]',
        'hover:bg-[var(--color-interactive-primaryHover)]',
        'active:bg-[var(--color-interactive-primaryActive)]',
        'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
        'disabled:bg-[var(--color-surface-disabled)] disabled:text-[var(--color-text-primary)]',
      ],
      
      variant === 'neutral' && [
        'bg-[var(--color-background-surface)] text-[var(--color-text-primary)]',
        'border border-[var(--color-border-default)]',
        'hover:bg-[var(--color-interactive-neutralHover)]',
        'active:bg-[var(--color-interactive-neutralActive)]',
        'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
        'disabled:bg-[var(--color-surface-disabled)] disabled:text-[var(--color-text-primary)] disabled:border-[var(--color-border-default)]',
      ],
      
      variant === 'subtle' && [
        'bg-transparent text-[var(--color-interactive-primary)]',
        // Icon color changes on hover/focus/pressed (handled via icon wrapper)
        'hover:text-[var(--color-interactive-primaryHover)]',
        'focus:text-[var(--color-text-primary)] focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
        'active:text-[var(--color-text-primary)]',
        'disabled:text-[var(--color-text-primary)] disabled:opacity-40',
      ],
      
      className
    );

    // Icon wrapper to handle color changes for subtle variant
    const iconWrapperStyles = cn(
      'flex items-center justify-center shrink-0',
      size === 'medium' && 'w-6 h-6', // 24px
      size === 'small' && 'w-4 h-4', // 16px
      'transition-colors duration-fast'
    );

    return (
      <button
        ref={ref}
        type="button"
        className={baseStyles}
        disabled={disabled}
        aria-label={ariaLabel}
        {...props}
      >
        <span className={iconWrapperStyles}>
          {icon}
        </span>
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

