'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type ImageFormatType = 'portrait' | 'landscape' | 'square';

export interface ImageFormatProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Image alt text for accessibility
   */
  alt: string;
  /**
   * Format variant
   * @default 'landscape'
   */
  format?: ImageFormatType;
  /**
   * Show dark overlay
   * @default false
   */
  overlay?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Image object-fit style
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /**
   * Image object-position
   * @default 'center'
   */
  objectPosition?: string;
}

/**
 * ImageFormat Component
 * 
 * A component for displaying images in different format ratios:
 * - Portrait: 456px × 608px (3:4 ratio)
 * - Landscape: 456px × 256px (16:9 ratio)
 * - Square: 456px × 456px (1:1 ratio)
 * 
 * Supports optional dark overlay for better text readability.
 */
export const ImageFormat = React.forwardRef<HTMLDivElement, ImageFormatProps>(
  (
    {
      src,
      alt,
      format = 'landscape',
      overlay = false,
      className,
      objectFit = 'cover',
      objectPosition = 'center',
    },
    ref
  ) => {
    const containerStyles = cn(
      'relative overflow-hidden',
      'w-full max-w-[456px]', // Full width on mobile, max 456px on desktop
      format === 'portrait' && [
        'aspect-[3/4]', // Portrait: 3:4 ratio (456px × 608px)
      ],
      format === 'landscape' && [
        'aspect-[16/9]', // Landscape: 16:9 ratio (456px × 256px)
      ],
      format === 'square' && [
        'aspect-square', // Square: 1:1 ratio (456px × 456px)
      ],
      className
    );

    const imageStyles = cn(
      'absolute inset-0 w-full h-full',
      objectFit === 'cover' && 'object-cover',
      objectFit === 'contain' && 'object-contain',
      objectFit === 'fill' && 'object-fill',
      objectFit === 'none' && 'object-none',
      objectFit === 'scale-down' && 'object-scale-down',
      'pointer-events-none',
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className={imageStyles}
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
        
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-black/48" aria-hidden="true" />
        )}
      </div>
    );
  }
);

ImageFormat.displayName = 'ImageFormat';

