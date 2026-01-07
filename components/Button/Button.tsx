'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'neutral' | 'subtle';
export type ButtonSize = 'medium' | 'small';
export type ButtonState = 'default' | 'hover' | 'focused' | 'pressed' | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * Left icon element
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon element
   */
  rightIcon?: React.ReactNode;
  /**
   * Button children (label)
   */
  children: React.ReactNode;
}

/**
 * Button Component
 * 
 * A versatile button component with multiple variants, sizes, and states.
 * Uses design tokens for consistent styling.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2',
      'font-primary font-medium',
      'transition-all duration-fast ease-out',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'whitespace-nowrap',
      
      // Size variants
      size === 'medium' && [
        'h-11 px-4', // 44px height, 16px horizontal padding
        'text-base leading-5', // 16px font, 20px line height
      ],
      size === 'small' && [
        'h-9 px-4', // 36px height, 16px horizontal padding
        'text-sm leading-4', // 14px font, 16px line height
      ],
      
      // Variant styles
      variant === 'primary' && [
        'bg-[var(--color-interactive-primary)] text-[var(--color-text-inverse)]',
        'hover:bg-[var(--color-interactive-primaryHover)]',
        'active:bg-[var(--color-interactive-primaryActive)]',
        'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
        'disabled:bg-[var(--color-interactive-disabled)] disabled:text-[var(--color-text-disabled)]',
      ],
      
      variant === 'neutral' && [
        'bg-[var(--color-background-surface)] text-[var(--color-text-primary)]',
        'border border-[var(--color-border-default)]',
        'hover:bg-[var(--color-interactive-neutralHover)]',
        'active:bg-[var(--color-interactive-neutralActive)]',
        'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
        'disabled:bg-[var(--color-interactive-disabled)] disabled:text-[var(--color-text-disabled)] disabled:border-[var(--color-border-subtle)]',
      ],
      
      variant === 'subtle' && [
        'bg-transparent text-[var(--color-interactive-primary)]',
        // Hover: text color changes to darker blue
        'hover:text-[var(--color-interactive-primaryHover)]',
        'hover:bg-[var(--color-background-surfaceTertiary)]',
        // Focused: text color changes to very dark + focus ring
        'focus:text-[var(--color-text-primary)]',
        'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
        // Active/Pressed: text color changes to very dark
        'active:text-[var(--color-text-primary)]',
        'active:bg-[var(--color-background-surfaceTertiary)]',
        'disabled:text-[var(--color-text-disabled)]',
      ],
      
      // Border radius (pill shape)
      'rounded-lg', // 8px border radius
      
      className
    );

    return (
      <button
        ref={ref}
        type="button"
        className={baseStyles}
        disabled={disabled}
        {...props}
      >
        {leftIcon && (
          <span className="flex items-center justify-center shrink-0">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {rightIcon && (
          <span className="flex items-center justify-center shrink-0">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

