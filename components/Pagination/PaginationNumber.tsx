'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type PaginationNumberState = 'default' | 'hover' | 'active' | 'focused';
export type PaginationNumberShape = 'circle' | 'square';

export interface PaginationNumberProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Page number to display
   */
  children: React.ReactNode;
  /**
   * Visual state
   * @default 'default'
   */
  state?: PaginationNumberState;
  /**
   * Shape variant
   * @default 'square'
   */
  shape?: PaginationNumberShape;
  /**
   * Whether this is the active/current page
   * @default false
   */
  active?: boolean;
}

/**
 * PaginationNumber Component
 * 
 * Base component for pagination number buttons.
 * Supports different states and shapes (circle/square).
 */
export const PaginationNumber = React.forwardRef<HTMLButtonElement, PaginationNumberProps>(
  (
    {
      children,
      state = 'default',
      shape = 'square',
      active = false,
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
      : active || state === 'active'
        ? 'active'
        : isFocused
          ? 'focused'
          : isHovered
            ? 'hover'
            : state;

    const isActive = effectiveState === 'active' || effectiveState === 'hover';

    const buttonStyles = cn(
      'flex items-center justify-center',
      'min-h-[44px] min-w-[44px]',
      'p-[var(--spacing-primitive-3)]', // 12px padding
      'font-primary font-medium',
      'text-base leading-5', // 16px font, 20px line height
      'text-[var(--color-text-primary)]',
      'transition-all duration-fast',
      'focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      
      // Shape variants
      shape === 'square' ? 'rounded-lg' : 'rounded-[20px]', // 8px for square, 20px for circle
      
      // State variants
      effectiveState === 'default' && [
        'bg-[var(--color-background-surface)]',
      ],
      isActive && [
        'bg-[var(--color-surface-unselected)]', // #f6f6fc
      ],
      effectiveState === 'focused' && [
        'bg-[var(--color-surface-unselected)]',
      ],
      
      className
    );

    return (
      <div className="relative flex items-center overflow-clip">
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
          <span className="text-center text-nowrap">
            {children}
          </span>
        </button>
        
        {/* Focus ring */}
        {effectiveState === 'focused' && !disabled && (
          <div
            className={cn(
              'absolute border border-[var(--color-border-focus)] border-solid pointer-events-none',
              shape === 'square' ? 'inset-0 rounded-[10px]' : 'inset-0 rounded-full'
            )}
          />
        )}
      </div>
    );
  }
);

PaginationNumber.displayName = 'PaginationNumber';

