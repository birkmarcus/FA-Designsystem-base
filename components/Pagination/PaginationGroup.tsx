'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type PaginationGroupHierarchy = 'leading' | 'middle' | 'trailing';
export type PaginationGroupState = 'default' | 'active' | 'hover' | 'focused';

export interface PaginationGroupProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content to display (number or label)
   */
  children?: React.ReactNode;
  /**
   * Hierarchy position
   * @default 'middle'
   */
  hierarchy?: PaginationGroupHierarchy;
  /**
   * Visual state
   * @default 'default'
   */
  state?: PaginationGroupState;
  /**
   * Show icon
   * @default false
   */
  showIcon?: boolean;
  /**
   * Icon element (for leading/trailing)
   */
  icon?: React.ReactNode;
  /**
   * Show label text
   * @default false
   */
  showLabel?: boolean;
  /**
   * Label text (e.g., "Previous", "Next")
   */
  label?: string;
}

/**
 * PaginationGroup Component
 * 
 * Base component for pagination group buttons (leading, middle, trailing).
 * Used for Previous/Next buttons and number groups.
 */
export const PaginationGroup = React.forwardRef<HTMLButtonElement, PaginationGroupProps>(
  (
    {
      children,
      hierarchy = 'middle',
      state = 'default',
      showIcon = false,
      icon,
      showLabel = false,
      label,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    // Determine effective state
    const effectiveState = disabled
      ? 'default'
      : state === 'active' || isHovered
        ? 'active'
        : isFocused
          ? 'focused'
          : state;

    const isActive = effectiveState === 'active' || effectiveState === 'hover';

    // Arrow icons - matching Figma design (24px size)
    const ArrowLeftIcon = () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    );

    const ArrowRightIcon = () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );

    const buttonStyles = cn(
      'flex items-center justify-center',
      'min-h-[44px]',
      'px-[var(--spacing-primitive-3)] py-[var(--spacing-gap-md)]', // 12px horizontal, 8px vertical
      'font-primary font-medium',
      'text-base leading-5', // 16px font, 20px line height
      'border border-solid',
      'transition-all duration-fast',
      'focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      
      // Hierarchy variants
      hierarchy === 'leading' && [
        'rounded-bl-lg rounded-tl-lg', // Rounded left corners
        'border-r-0', // No right border when grouped
      ],
      hierarchy === 'middle' && [
        'rounded-none',
        'border-l-0 border-r-0', // No side borders when grouped
      ],
      hierarchy === 'trailing' && [
        'rounded-br-lg rounded-tr-lg', // Rounded right corners
        'border-l-0', // No left border when grouped
      ],
      
      // State variants
      effectiveState === 'default' && [
        'bg-[var(--color-background-surface)]',
        'border-[var(--color-border-default)]',
        hierarchy === 'middle' ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-tertiary)]',
      ],
      isActive && [
        'bg-[var(--color-surface-unselected)]', // #f6f6fc
        'border-[var(--color-border-default)]',
        hierarchy === 'middle' ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-tertiary)]',
      ],
      effectiveState === 'focused' && [
        'bg-[var(--color-background-surface)]',
        'border-[var(--color-border-focus)]',
        hierarchy === 'middle' ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-tertiary)]',
      ],
      
      // Icon and label spacing
      (showIcon || showLabel) && 'gap-[var(--spacing-gap-md)]', // 8px gap
      
      className
    );

    const iconColor = effectiveState === 'focused'
      ? 'text-[var(--color-text-primary)]'
      : 'text-[var(--color-text-tertiary)]';

    return (
      <button
        ref={ref}
        type="button"
        className={buttonStyles}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Leading icon */}
        {showIcon && hierarchy === 'leading' && (
          <span className={cn('flex items-center justify-center shrink-0', iconColor)}>
            {icon || <ArrowLeftIcon />}
          </span>
        )}
        
        {/* Label or children */}
        {showLabel && label ? (
          <span className="text-nowrap">{label}</span>
        ) : children ? (
          <span className="px-[var(--spacing-gap-md)]">{children}</span>
        ) : null}
        
        {/* Trailing icon */}
        {showIcon && hierarchy === 'trailing' && (
          <span className={cn('flex items-center justify-center shrink-0', iconColor)}>
            {icon || <ArrowRightIcon />}
          </span>
        )}
      </button>
    );
  }
);

PaginationGroup.displayName = 'PaginationGroup';

