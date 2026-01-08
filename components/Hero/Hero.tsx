'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

export type HeroAlignmentY = 'center' | 'bottom';
export type HeroAlignmentX = 'left' | 'center' | 'right';

export interface HeroProps {
  /**
   * Hero heading text
   */
  heading: string;
  
  /**
   * Hero description/body text
   */
  description: string;
  
  /**
   * Primary action button label
   */
  primaryActionLabel?: string;
  
  /**
   * Secondary action button label
   */
  secondaryActionLabel?: string;
  
  /**
   * Callback when primary action is clicked
   */
  onPrimaryAction?: () => void;
  
  /**
   * Callback when secondary action is clicked
   */
  onSecondaryAction?: () => void;
  
  /**
   * Vertical alignment of content
   * @default 'center'
   */
  alignmentY?: HeroAlignmentY;
  
  /**
   * Horizontal alignment of content
   * @default 'left'
   */
  alignmentX?: HeroAlignmentX;
  
  /**
   * Hero height
   * @default 720
   */
  height?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Hero Component
 * 
 * A hero section component with flexible alignment options for both vertical and horizontal axes.
 * Supports customizable heading, description, and action buttons.
 */
export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      heading,
      description,
      primaryActionLabel,
      secondaryActionLabel,
      onPrimaryAction,
      onSecondaryAction,
      alignmentY = 'center',
      alignmentX = 'left',
      height = 720,
      className,
    },
    ref
  ) => {
    // Determine alignment classes
    const getYAlignment = () => {
      return alignmentY === 'bottom' ? 'items-end' : 'items-center';
    };

    const getXAlignment = () => {
      switch (alignmentX) {
        case 'center':
          return 'justify-center';
        case 'right':
          return 'justify-end';
        default:
          return 'justify-start';
      }
    };

    const getContentAlignment = () => {
      switch (alignmentX) {
        case 'center':
          return 'items-center text-center';
        case 'right':
          return 'items-end text-right';
        default:
          return 'items-start text-left';
      }
    };

    const getTextAlignment = () => {
      switch (alignmentX) {
        case 'center':
          return 'text-center';
        case 'right':
          return 'text-right';
        default:
          return 'text-left';
      }
    };

    const containerStyles = cn(
      'relative w-full',
      'bg-[#00009e]', // Brand color from design tokens
      getYAlignment(),
      getXAlignment(),
      className
    );

    const contentWrapperStyles = cn(
      'absolute left-0 right-0',
      'p-[64px]', // Device padding
      'flex flex-col',
      'gap-0', // Device spacing
      getContentAlignment(),
      alignmentY === 'bottom' ? 'bottom-0' : 'top-1/2 -translate-y-1/2'
    );

    const textContainerStyles = cn(
      'flex flex-col',
      'gap-8', // 32px gap (device column gap)
      'max-w-[520px]',
      'w-full',
      getContentAlignment()
    );

    return (
      <div
        ref={ref}
        className={containerStyles}
        style={{ height: `${height}px` }}
      >
        <div className={contentWrapperStyles}>
          <div className={textContainerStyles}>
            {/* Heading */}
            <div className="flex flex-col gap-2 w-full">
              <h1
                className={cn(
                  'font-semibold',
                  'text-[36px] leading-[40px]', // Title page/Small from design
                  'text-white',
                  getTextAlignment(),
                  'w-full'
                )}
              >
                {heading}
              </h1>
            </div>

            {/* Description */}
            <p
              className={cn(
                'font-normal',
                'text-[18px] leading-[24px]', // Body/Large from design
                'text-white',
                getTextAlignment(),
                'w-full'
              )}
            >
              {description}
            </p>

            {/* Buttons */}
            {(primaryActionLabel || secondaryActionLabel) && (
              <div className="flex gap-4 items-start">
                {secondaryActionLabel && (
                  <Button
                    variant="neutral"
                    size="medium"
                    onClick={onSecondaryAction}
                  >
                    {secondaryActionLabel}
                  </Button>
                )}
                {primaryActionLabel && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={onPrimaryAction}
                  >
                    {primaryActionLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Hero.displayName = 'Hero';

