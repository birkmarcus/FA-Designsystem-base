'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CarouselDot } from './CarouselDot';

export interface CarouselPaginationGroupProps {
  /**
   * Total number of slides
   */
  totalSlides: number;
  /**
   * Current slide index (0-indexed)
   */
  currentSlide: number;
  /**
   * Callback when a dot is clicked
   */
  onSlideChange?: (index: number) => void;
  /**
   * Show framed background (dark overlay with blur)
   * @default false
   */
  framed?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CarouselPaginationGroup Component
 * 
 * A group of pagination dots for carousel navigation.
 * Supports framed and unframed variants.
 */
export const CarouselPaginationGroup = React.forwardRef<HTMLDivElement, CarouselPaginationGroupProps>(
  (
    {
      totalSlides,
      currentSlide,
      onSlideChange,
      framed = false,
      className,
    },
    ref
  ) => {
    const handleDotClick = (index: number) => {
      if (index !== currentSlide) {
        onSlideChange?.(index);
      }
    };

    const containerStyles = cn(
      'flex gap-[var(--spacing-primitive-3)] items-center justify-center', // 12px gap
      'w-fit', // Fit content width
      framed && [
        'bg-[rgba(0,0,0,0.48)]',
        'backdrop-blur-sm', // Background blur
        'p-[var(--spacing-gap-md)]', // 8px padding
        'rounded-full', // Full rounded
      ],
      className
    );

    return (
      <div ref={ref} className={containerStyles} role="tablist" aria-label="Carousel pagination">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <CarouselDot
            key={index}
            current={index === currentSlide}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>
    );
  }
);

CarouselPaginationGroup.displayName = 'CarouselPaginationGroup';

