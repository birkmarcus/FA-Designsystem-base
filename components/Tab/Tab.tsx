'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type TabVariant = 'button-grey' | 'button-white' | 'underlined' | 'line-vertical';
export type TabState = 'default' | 'active' | 'focused';

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tab variant
   * @default 'button-grey'
   */
  variant?: TabVariant;
  /**
   * Tab state
   * @default 'default'
   */
  state?: TabState;
  /**
   * Left icon element
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon element
   */
  rightIcon?: React.ReactNode;
  /**
   * Notification badge text (e.g., "+99")
   */
  notification?: string | number;
  /**
   * Tab children (label)
   */
  children: React.ReactNode;
}

/**
 * Tab Component
 * 
 * A single tab component with multiple variants and states.
 * Supports icons, notifications, and different visual styles.
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      variant = 'button-grey',
      state = 'default',
      leftIcon,
      rightIcon,
      notification,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'inline-flex items-center justify-center gap-[var(--spacing-primitive-2)]',
      'h-12', // 48px height
      'px-[var(--spacing-primitive-4)] py-[var(--spacing-primitive-3)]', // 16px horizontal, 12px vertical
      'font-primary font-medium',
      'text-base leading-5', // 16px font, 20px line height
      'text-[var(--color-text-primary)]',
      'whitespace-nowrap',
      'transition-all duration-fast ease-out',
      'focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-40',
    );

    const variantStyles = cn(
      // Button grey variant
      variant === 'button-grey' && [
        'rounded-lg', // 8px border radius
        state === 'default' && [
          'bg-transparent',
        ],
        state === 'active' && [
          'bg-[var(--color-background-neutral)]', // #f7f7f7
          'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop Shadow/100
        ],
        state === 'focused' && [
          'bg-[var(--color-surface-unselected)]', // #f6f6fc
          'relative',
        ],
      ],

      // Button white variant
      variant === 'button-white' && [
        'rounded-lg', // 8px border radius
        state === 'default' && [
          'bg-transparent',
        ],
        state === 'active' && [
          'bg-[var(--color-background-surface)]', // white
          'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop Shadow/200
        ],
        state === 'focused' && [
          'bg-[var(--color-surface-unselected)]', // #f6f6fc
          'relative',
        ],
      ],

      // Underlined variant
      variant === 'underlined' && [
        'border-b-[1.5px]',
        state === 'default' && [
          'border-[var(--color-border-default)]', // #ebebec
        ],
        state === 'active' && [
          'border-[#00005f]', // Active underline color
          'isolate',
        ],
        state === 'focused' && [
          'border-[var(--color-border-focus)]', // #004dff
        ],
      ],

      // Line vertical variant
      variant === 'line-vertical' && [
        'px-[var(--spacing-primitive-2)]', // 8px horizontal padding
        state === 'default' && [
          // No border by default
        ],
        state === 'active' && [
          'border-l-[1.5px] border-[#00005f]', // Active left border
          'pl-[var(--spacing-primitive-2)] pr-0', // Adjust padding
        ],
        state === 'focused' && [
          'border border-[var(--color-border-focus)]', // #004dff
          'rounded-lg',
        ],
      ],
    );

    const focusRingStyles = cn(
      (variant === 'button-grey' || variant === 'button-white') && state === 'focused' && [
        'relative',
      ],
    );

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        className={cn(baseStyles, variantStyles, focusRingStyles, className)}
        {...props}
      >
        {leftIcon && (
          <span className="flex items-center justify-center shrink-0 size-6">
            {leftIcon}
          </span>
        )}
        <span className="flex items-center gap-[var(--spacing-primitive-2)]">
          {children}
          {notification !== undefined && (
            <span className="bg-[var(--color-interactive-primary)] text-[var(--color-text-inverse)] text-sm leading-4 font-medium px-[var(--spacing-primitive-3)] py-[var(--spacing-primitive-1)] rounded-full whitespace-nowrap">
              {notification}
            </span>
          )}
        </span>
        {rightIcon && (
          <span className="flex items-center justify-center shrink-0 size-6">
            {rightIcon}
          </span>
        )}
        {(variant === 'button-grey' || variant === 'button-white') && state === 'focused' && (
          <div className="absolute inset-[-2px] border border-[var(--color-border-focus)] rounded-[10px] pointer-events-none" />
        )}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

