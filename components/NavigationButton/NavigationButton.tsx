'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether the navigation menu is opened
   * @default false
   */
  opened?: boolean;
  /**
   * Accessible label for screen readers
   */
  'aria-label': string;
}

/**
 * NavigationButton Component
 * 
 * A button component for navigation menus that toggles between
 * hamburger menu icon (closed) and close/X icon (opened).
 * Uses design tokens for consistent styling.
 */
export const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  (
    {
      opened = false,
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
      'w-12 h-12', // 48px x 48px
      'p-2', // 8px padding
      'rounded-lg', // 8px border radius
      'transition-all duration-fast ease-out',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      
      // Hover and focus states
      'hover:bg-[var(--color-surface-unselected)]',
      'focus:bg-[var(--color-surface-unselected)]',
      'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
      
      // Disabled state
      'disabled:opacity-40',
      
      className
    );

    // Hamburger menu icon (3 horizontal lines)
    const MenuIcon = () => (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    );

    // Close/X icon
    const CloseIcon = () => (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        type="button"
        className={baseStyles}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-expanded={opened}
        {...props}
      >
        <span className="flex items-center justify-center shrink-0 text-[var(--color-icon-primary)]">
          {opened ? <CloseIcon /> : <MenuIcon />}
        </span>
      </button>
    );
  }
);

NavigationButton.displayName = 'NavigationButton';

