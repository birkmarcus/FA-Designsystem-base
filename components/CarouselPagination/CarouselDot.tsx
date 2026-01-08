'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface CarouselDotProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether this dot represents the current/active slide
   * @default false
   */
  current?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CarouselDot Component
 * 
 * A single dot indicator for carousel pagination.
 * Used to show the current position in a carousel.
 */
export const CarouselDot = React.forwardRef<HTMLButtonElement, CarouselDotProps>(
  (
    {
      current = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'bg-[var(--color-background-surface)]',
          'rounded', // 4px border radius
          'size-[8px]', // 8px × 8px
          'w-[8px]', // Explicit width to ensure 8px
          'flex flex-wrap', // Display flex with wrap
          'transition-opacity duration-fast',
          'focus:outline-none',
          'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
          current && 'text-[var(--color-background-inverse)]',
          !current && 'opacity-40',
          className
        )}
        aria-label={current ? 'Current slide' : 'Go to slide'}
        {...props}
      />
    );
  }
);

CarouselDot.displayName = 'CarouselDot';

