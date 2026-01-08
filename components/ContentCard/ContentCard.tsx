'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { IconWrapper } from '@/components/IconWrapper';
import { Button } from '@/components/Button';

export type ContentCardVariant = 'default' | 'wrapped' | 'full' | 'plain' | 'horizontal';

export interface ContentCardButton {
  /**
   * Button label
   */
  label: string;
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'neutral' | 'subtle';
  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface ContentCardProps {
  /**
   * Card variant
   * @default 'default'
   */
  variant?: ContentCardVariant;
  /**
   * Category text (small label above title)
   */
  category?: string;
  /**
   * Show category
   * @default true
   */
  showCategory?: boolean;
  /**
   * Title text
   */
  title?: string;
  /**
   * Show title
   * @default true
   */
  showTitle?: boolean;
  /**
   * Body/description text
   */
  body?: string;
  /**
   * Show body
   * @default true
   */
  showBody?: boolean;
  /**
   * Image source URL
   */
  imageSrc?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Show image
   * @default true
   */
  showImage?: boolean;
  /**
   * Icon element
   */
  icon?: React.ReactNode;
  /**
   * Show icon
   * @default true
   */
  showIcon?: boolean;
  /**
   * Primary button configuration
   */
  primaryButton?: ContentCardButton;
  /**
   * Secondary button configuration
   */
  secondaryButton?: ContentCardButton;
  /**
   * Show buttons
   * @default true
   */
  showButtons?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ContentCard Component
 * 
 * A versatile content card component with multiple layout variants.
 * Uses ImageFormat and IconWrapper components for consistent styling.
 */
export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  (
    {
      variant = 'default',
      category = 'Category',
      showCategory = true,
      title = 'Title',
      showTitle = true,
      body = 'Egestas elit dui',
      showBody = true,
      imageSrc,
      imageAlt = 'Card image',
      showImage = true,
      icon,
      showIcon = true,
      primaryButton,
      secondaryButton,
      showButtons = true,
      className,
    },
    ref
  ) => {
    // Default button configurations
    const defaultPrimaryButton: ContentCardButton = {
      label: 'Button',
      variant: 'primary',
    };
    const defaultSecondaryButton: ContentCardButton = {
      label: 'Button',
      variant: 'subtle',
    };

    const primaryBtn = primaryButton || defaultPrimaryButton;
    const secondaryBtn = secondaryButton || defaultSecondaryButton;

    // Base container styles
    const containerStyles = cn(
      'flex flex-col',
      'w-full max-w-[380px]', // Full width on mobile, max 380px on desktop
      'min-w-0 md:min-w-[244px]', // No min-width on mobile, 244px on desktop
      variant === 'default' && [
        'bg-[var(--color-background-surface)]',
        'border border-[var(--color-border-default)]',
        'rounded-2xl', // 16px
        'overflow-hidden',
      ],
      variant === 'wrapped' && [
        'bg-[var(--color-background-surface)]',
        'border border-[var(--color-border-default)]',
        'rounded-2xl', // 16px
        'overflow-hidden',
        'p-4', // 16px padding
      ],
      variant === 'full' && [
        'bg-[var(--color-background-surface)]',
        'rounded-2xl', // 16px
        'overflow-hidden',
        'relative',
      ],
      variant === 'plain' && [
        'gap-8', // 32px gap
      ],
      variant === 'horizontal' && [
        'bg-[var(--color-background-surface)]',
        'border border-[var(--color-border-default)]',
        'rounded-2xl', // 16px
        'overflow-hidden',
      ],
      className
    );

    // Content section styles
    const contentStyles = cn(
      'flex flex-col',
      variant === 'default' && [
        'gap-6', // 24px gap
        'p-4', // 16px padding
      ],
      variant === 'wrapped' && [
        'gap-6', // 24px gap
        'px-0 py-6', // 0px horizontal, 24px vertical
      ],
      variant === 'full' && [
        'absolute',
        'left-0 top-0 right-0',
        'gap-6', // 24px gap
        'p-4', // 16px padding
      ],
      variant === 'plain' && [
        'gap-6', // 24px gap
        'p-0', // No padding
      ],
      variant === 'horizontal' && [
        'flex-row',
        'gap-3', // 12px gap
        'p-4', // 16px padding
      ],
    );

    // Text section styles
    const textStyles = cn(
      'flex flex-col gap-4', // 16px gap
      variant === 'horizontal' && [
        'flex-1',
        'min-w-0',
      ],
    );

    // Title + Category section
    const titleSectionStyles = cn(
      'flex flex-col',
      variant === 'horizontal' ? 'gap-0' : 'gap-2', // No gap in horizontal, 8px otherwise
    );

    // Icon wrapper styles for horizontal variant
    const horizontalIconStyles = cn(
      'border border-[var(--color-border-default)]',
      'rounded-lg', // 8px
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Image - Default and Wrapped variants */}
        {(variant === 'default' || variant === 'wrapped') && showImage && imageSrc && (
          <div className={cn(
            'w-full shrink-0',
            'aspect-[456/256]', // Landscape aspect ratio
            'relative overflow-hidden',
            variant === 'wrapped' && 'rounded-lg',
          )}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        {/* Image - Full variant (square with overlay) */}
        {variant === 'full' && showImage && imageSrc && (
          <div className="w-full shrink-0 aspect-square relative overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/48" aria-hidden="true" />
          </div>
        )}

        {/* Content Section */}
        <div className={contentStyles}>
          {/* Icon */}
          {showIcon && (
            <div>
              {variant === 'horizontal' ? (
                <IconWrapper
                  icon={icon}
                  size="large"
                  className={horizontalIconStyles}
                />
              ) : (
                <IconWrapper
                  icon={icon}
                  size="small"
                />
              )}
            </div>
          )}

          {/* Text Content */}
          <div className={textStyles}>
            {/* Title + Category */}
            {(showCategory || showTitle) && (
              <div className={titleSectionStyles}>
                {showCategory && category && (
                  <p className="font-primary font-medium text-sm leading-4 text-[var(--color-text-tertiary)]">
                    {category}
                  </p>
                )}
                {showTitle && title && (
                  <p className={cn(
                    'font-primary font-semibold',
                    variant === 'horizontal' ? 'text-lg leading-6' : 'text-[30px] leading-[40px]',
                    variant === 'full' ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text-primary)]',
                  )}>
                    {title}
                  </p>
                )}
              </div>
            )}

            {/* Body */}
            {showBody && body && (
              <p className={cn(
                'font-primary font-normal',
                variant === 'horizontal' ? 'text-sm leading-4 text-[var(--color-text-tertiary)]' : 'text-base leading-5',
                variant === 'full' ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text-primary)]',
              )}>
                {body}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        {showButtons && (primaryBtn || secondaryBtn) && (
          <div className={cn(
            'flex gap-4 items-start',
            variant === 'default' && 'p-4',
            variant === 'wrapped' && 'p-0',
            variant === 'full' && 'absolute bottom-0 left-0 right-0 p-4',
            variant === 'plain' && 'p-0',
            variant === 'horizontal' && 'hidden', // No buttons in horizontal variant
          )}>
            {primaryBtn && (
              <Button
                variant={primaryBtn.variant || 'primary'}
                size="medium"
                onClick={primaryBtn.onClick}
              >
                {primaryBtn.label}
              </Button>
            )}
            {secondaryBtn && (
              <Button
                variant={secondaryBtn.variant || 'subtle'}
                size="medium"
                onClick={secondaryBtn.onClick}
              >
                {secondaryBtn.label}
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
);

ContentCard.displayName = 'ContentCard';

