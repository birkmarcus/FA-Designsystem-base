'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type CarouselArrowColor = 'light' | 'dark';
export type CarouselArrowDirection = 'left' | 'right';

export interface CarouselArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Arrow direction
   * @default 'left'
   */
  direction?: CarouselArrowDirection;
  /**
   * Color variant
   * @default 'light'
   */
  color?: CarouselArrowColor;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CarouselArrow Component
 * 
 * Arrow button for carousel navigation.
 * Supports light (dark overlay with blur) and dark (white background) variants.
 */
export const CarouselArrow = React.forwardRef<HTMLButtonElement, CarouselArrowProps>(
  (
    {
      direction = 'left',
      color = 'light',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Chevron icons
    const ChevronLeftIcon = () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    );

    const ChevronRightIcon = () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );

    const buttonStyles = cn(
      'flex items-center justify-center',
      'min-h-[44px] min-w-[44px]',
      'p-[var(--spacing-gap-md)]', // 8px padding
      'rounded-full', // Full rounded
      'transition-all duration-fast',
      'focus:outline-none',
      'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      
      // Color variants
      color === 'light' && [
        'bg-[rgba(0,0,0,0.48)]',
        'backdrop-blur-sm', // Background blur
        'text-[var(--color-text-inverse)]', // White icon
      ],
      color === 'dark' && [
        'bg-[var(--color-background-surface)]',
        'text-[var(--color-text-primary)]', // Dark icon
      ],
      
      className
    );

    return (
      <button
        ref={ref}
        type="button"
        className={buttonStyles}
        disabled={disabled}
        aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
        {...props}
      >
        {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </button>
    );
  }
);

CarouselArrow.displayName = 'CarouselArrow';

