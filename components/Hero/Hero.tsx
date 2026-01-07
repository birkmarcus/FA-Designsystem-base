'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

export type HeroVariant = 'default' | 'centered' | 'split' | 'minimal';
export type HeroSize = 'large' | 'medium' | 'small';

export interface HeroProps {
  /**
   * Hero variant
   * @default 'default'
   */
  variant?: HeroVariant;
  /**
   * Hero size
   * @default 'large'
   */
  size?: HeroSize;
  /**
   * Label text (small text above heading)
   */
  label?: string;
  /**
   * Main heading text
   */
  heading: string;
  /**
   * Subheading text
   */
  subheading?: string;
  /**
   * Body text content
   */
  body?: string;
  /**
   * Primary CTA button text
   */
  primaryCta?: string;
  /**
   * Primary CTA button onClick handler
   */
  onPrimaryCtaClick?: () => void;
  /**
   * Secondary CTA button text
   */
  secondaryCta?: string;
  /**
   * Secondary CTA button onClick handler
   */
  onSecondaryCtaClick?: () => void;
  /**
   * Image element (for split variant)
   */
  image?: React.ReactNode;
  /**
   * Background color variant
   * @default 'surface'
   */
  background?: 'surface' | 'primary' | 'neutral';
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Hero Component
 * 
 * A hero section component with multiple variants and responsive design.
 * Uses existing Button components and design tokens.
 */
export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      variant = 'default',
      size = 'large',
      label,
      heading,
      subheading,
      body,
      primaryCta,
      secondaryCta,
      onPrimaryCtaClick,
      onSecondaryCtaClick,
      image,
      background = 'surface',
      className,
    },
    ref
  ) => {
    const backgroundStyles = cn(
      background === 'surface' && 'bg-[var(--color-background-surface)]',
      background === 'primary' && 'bg-[var(--color-background-primary)]',
      background === 'neutral' && 'bg-[var(--color-background-neutral)]',
    );

    const textColorStyles = cn(
      background === 'primary' && 'text-[var(--color-text-inverse)]',
      background === 'neutral' && 'text-[var(--color-text-primary)]',
      background === 'surface' && 'text-[var(--color-text-inverse)]',
    );

    const labelColorStyles = cn(
      background === 'primary' && 'text-[var(--color-text-inverse)] opacity-80',
      background === 'neutral' && 'text-[var(--color-text-tertiary)]',
      background === 'surface' && 'text-[var(--color-text-tertiary)]',
    );

    const headingSizeStyles = cn(
      size === 'large' && [
        'text-[32px] leading-[40px]',
        'md:text-[40px] md:leading-[48px]',
        'lg:text-[48px] lg:leading-[56px]',
      ],
      size === 'medium' && [
        'text-[28px] leading-[36px]',
        'md:text-[32px] md:leading-[40px]',
        'lg:text-[40px] lg:leading-[48px]',
      ],
      size === 'small' && [
        'text-[24px] leading-[32px]',
        'md:text-[28px] md:leading-[36px]',
        'lg:text-[32px] lg:leading-[40px]',
      ],
    );

    const subheadingSizeStyles = cn(
      size === 'large' && [
        'text-[20px] leading-[28px]',
        'md:text-[24px] md:leading-[32px]',
        'lg:text-[28px] lg:leading-[36px]',
      ],
      size === 'medium' && [
        'text-[18px] leading-[26px]',
        'md:text-[20px] md:leading-[28px]',
        'lg:text-[24px] lg:leading-[32px]',
      ],
      size === 'small' && [
        'text-[16px] leading-[24px]',
        'md:text-[18px] md:leading-[26px]',
        'lg:text-[20px] lg:leading-[28px]',
      ],
    );

    const bodySizeStyles = cn(
      size === 'large' && 'text-base leading-6 md:text-lg md:leading-7',
      size === 'medium' && 'text-sm leading-5 md:text-base md:leading-6',
      size === 'small' && 'text-sm leading-5',
    );

    const containerStyles = cn(
      'w-full',
      variant === 'split' && 'lg:flex lg:items-center lg:gap-12',
      className
    );

    const contentStyles = cn(
      'flex flex-col',
      variant === 'centered' && 'items-center text-center max-w-3xl mx-auto',
      variant === 'default' && 'items-start max-w-2xl',
      variant === 'split' && 'items-start max-w-2xl lg:flex-1',
      variant === 'minimal' && 'items-start max-w-xl',
    );

    const spacingStyles = cn(
      size === 'large' && [
        'py-12 px-4',
        'md:py-16 md:px-6',
        'lg:py-24 lg:px-8',
      ],
      size === 'medium' && [
        'py-10 px-4',
        'md:py-12 md:px-6',
        'lg:py-16 lg:px-8',
      ],
      size === 'small' && [
        'py-8 px-4',
        'md:py-10 md:px-6',
        'lg:py-12 lg:px-8',
      ],
    );

    const gapStyles = cn(
      size === 'large' && 'gap-4 md:gap-6',
      size === 'medium' && 'gap-3 md:gap-4',
      size === 'small' && 'gap-2 md:gap-3',
    );

    return (
      <div ref={ref} className={cn('relative', backgroundStyles, spacingStyles, textColorStyles)}>
        <div className={cn('max-w-7xl mx-auto', containerStyles)}>
          {/* Split variant: Image on right */}
          {variant === 'split' && image && (
            <div className="hidden lg:block lg:flex-1 lg:shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                {image}
              </div>
            </div>
          )}

          {/* Content */}
          <div className={cn(contentStyles, gapStyles)}>
            {/* Label */}
            {label && (
              <p className={cn(
                'font-primary font-medium text-base leading-5',
                labelColorStyles
              )}>
                {label}
              </p>
            )}

            {/* Heading */}
            <h1 className={cn(
              'font-primary font-semibold',
              headingSizeStyles,
              textColorStyles
            )}>
              {heading}
            </h1>

            {/* Subheading */}
            {subheading && (
              <h2 className={cn(
                'font-primary font-normal',
                subheadingSizeStyles,
                textColorStyles
              )}>
                {subheading}
              </h2>
            )}

            {/* Body */}
            {body && (
              <p className={cn(
                'font-primary font-normal',
                bodySizeStyles,
                textColorStyles,
                'opacity-90'
              )}>
                {body}
              </p>
            )}

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className={cn(
                'flex flex-wrap gap-4',
                variant === 'centered' && 'justify-center',
                'mt-2'
              )}>
                {secondaryCta && (
                  <Button
                    variant="neutral"
                    size="medium"
                    onClick={onSecondaryCtaClick}
                    className={cn(
                      background === 'primary' && 'bg-[var(--color-background-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-surfaceTertiary)]'
                    )}
                  >
                    {secondaryCta}
                  </Button>
                )}
                {primaryCta && (
                  <Button
                    variant={background === 'primary' ? 'subtle' : 'primary'}
                    size="medium"
                    onClick={onPrimaryCtaClick}
                    className={cn(
                      background === 'primary' && 'bg-[var(--color-background-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-surfaceTertiary)]'
                    )}
                  >
                    {primaryCta}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Split variant: Image below on mobile */}
          {variant === 'split' && image && (
            <div className="lg:hidden mt-8 w-full">
              {image}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Hero.displayName = 'Hero';

