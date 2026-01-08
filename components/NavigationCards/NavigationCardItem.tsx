'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { ArrowRightIcon } from '@/components/Info/ArrowRightIcon';

export interface NavigationCardItemProps {
  /**
   * Image source URL
   */
  imageSrc?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Category text (small label above title)
   */
  category?: string;
  /**
   * Title text
   */
  title?: string;
  /**
   * Description/body text
   */
  description?: string;
  /**
   * Link label text
   */
  linkLabel?: string;
  /**
   * Link onClick handler
   */
  onLinkClick?: () => void;
  /**
   * Primary button label
   */
  primaryButtonLabel?: string;
  /**
   * Primary button onClick handler
   */
  onPrimaryButtonClick?: () => void;
  /**
   * Secondary button label
   */
  secondaryButtonLabel?: string;
  /**
   * Secondary button onClick handler
   */
  onSecondaryButtonClick?: () => void;
  /**
   * Card variant
   */
  variant?: 'default' | 'full' | 'wrapped';
  /**
   * Number of columns (affects card height)
   */
  columns?: '3' | '4';
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * NavigationCardItem Component
 * 
 * Individual navigation card item used within NavigationCards component.
 * Supports Default, Full, and Wrapped variants.
 */
export const NavigationCardItem = React.forwardRef<HTMLDivElement, NavigationCardItemProps>(
  (
    {
      imageSrc,
      imageAlt = 'Card image',
      category,
      title = 'Title',
      description = 'Egestas elit dui',
      linkLabel,
      onLinkClick,
      primaryButtonLabel,
      onPrimaryButtonClick,
      secondaryButtonLabel,
      onSecondaryButtonClick,
      variant = 'default',
      columns = '4',
      className,
    },
    ref
  ) => {
    // Default variant
    if (variant === 'default') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col',
            'justify-start',
            'bg-[var(--color-background-surface)]',
            'border border-[var(--color-border-default)]',
            'rounded-2xl', // 16px
            'overflow-hidden',
            'min-w-[244px]',
            columns === '3' ? 'h-[387px]' : 'h-[332px]',
            'grow',
            className
          )}
        >
          {/* Image */}
          {imageSrc && (
            <div className="w-full shrink-0 aspect-[456/256] relative overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-6 p-4 w-full">
            {/* Text */}
            <div className="flex flex-col gap-4 w-full">
              {/* Title */}
              {title && (
                <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
                  {title}
                </p>
              )}
              {/* Description */}
              {description && (
                <p className="font-primary font-normal text-base leading-5 text-[var(--color-text-primary)] w-full">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Link Button */}
          {(linkLabel || onLinkClick) && (
            <div className="flex gap-4 items-start p-4 w-full">
              <button
                onClick={onLinkClick}
                className={cn(
                  'flex gap-2 items-center justify-center',
                  'min-h-[44px] px-0 py-2',
                  'rounded-lg', // 8px
                  'text-[var(--color-interactive-primary)]',
                  'hover:text-[var(--color-interactive-primaryHover)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
                  'transition-all duration-fast'
                )}
              >
                <span className="font-primary font-medium text-base leading-5 text-center whitespace-nowrap">
                  {linkLabel || 'Link'}
                </span>
                <ArrowRightIcon className="w-5 h-[16.667px] shrink-0" />
              </button>
            </div>
          )}
        </div>
      );
    }

    // Wrapped variant
    if (variant === 'wrapped') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col',
            'justify-start',
            'items-start',
            'bg-[var(--color-background-surface)]',
            'border border-[var(--color-border-default)]',
            'rounded-2xl', // 16px
            'overflow-hidden',
            'min-w-[244px]',
            'grow',
            'p-4', // 16px padding
            className
          )}
        >
          {/* Image */}
          {imageSrc && (
            <div className="w-full shrink-0 aspect-[456/256] relative overflow-hidden rounded-lg mb-0">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-6 px-0 py-6 w-full">
            {/* Text */}
            <div className="flex flex-col gap-4 w-full">
              {/* Category + Title */}
              <div className="flex flex-col gap-2 w-full">
                {category && (
                  <p className="font-primary font-medium text-sm leading-4 text-[var(--color-text-tertiary)] w-full">
                    {category}
                  </p>
                )}
                {title && (
                  <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
                    {title}
                  </p>
                )}
              </div>
              {/* Description */}
              {description && (
                <p className="font-primary font-normal text-base leading-5 text-[var(--color-text-primary)] w-full">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          {(primaryButtonLabel || secondaryButtonLabel) && (
            <div className="flex gap-4 items-start w-full">
              {primaryButtonLabel && (
                <Button
                  variant="primary"
                  size="medium"
                  onClick={onPrimaryButtonClick}
                >
                  {primaryButtonLabel}
                </Button>
              )}
              {secondaryButtonLabel && (
                <Button
                  variant="neutral"
                  size="medium"
                  onClick={onSecondaryButtonClick}
                >
                  {secondaryButtonLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      );
    }

    // Full variant
    if (variant === 'full') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col',
            'bg-[var(--color-background-surface)]',
            'rounded-2xl', // 16px
            'overflow-hidden',
            'relative',
            'min-w-[244px]',
            columns === '3' ? 'h-[483px]' : '',
            'grow',
            className
          )}
        >
          {/* Image */}
          {imageSrc && (
            <div className="w-full shrink-0 aspect-[456/608] relative overflow-hidden flex flex-col">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ height: '100%' }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/48" aria-hidden="true" />
            </div>
          )}

          {/* Content - Absolute positioned */}
          <div className="absolute left-0 top-0 right-0 flex flex-col gap-6 px-4 py-6">
            {/* Text */}
            <div className="flex flex-col gap-4 w-full">
              {/* Title */}
              {title && (
                <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-inverse)] w-full">
                  {title}
                </p>
              )}
              {/* Description */}
              {description && (
                <p className="font-primary font-normal text-base leading-5 text-[var(--color-text-inverse)] w-full">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Button - Absolute positioned at bottom */}
          {secondaryButtonLabel && (
            <div className="absolute bottom-0 right-0 flex gap-0 items-start p-4">
              <Button
                variant="neutral"
                size="medium"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonLabel}
              </Button>
            </div>
          )}
        </div>
      );
    }

    return null;
  }
);

NavigationCardItem.displayName = 'NavigationCardItem';

