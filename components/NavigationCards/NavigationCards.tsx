'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { NavigationCardItem, NavigationCardItemProps } from './NavigationCardItem';

export type NavigationCardsVariant = 'default' | 'full' | 'wrapped';
export type NavigationCardsColumns = '3' | '4';

export interface NavigationCardsProps {
  /**
   * Card variant
   * @default 'default'
   */
  cardVariant?: NavigationCardsVariant;
  /**
   * Number of columns
   * @default '4'
   */
  columns?: NavigationCardsColumns;
  /**
   * Label text (small text above heading)
   */
  label?: string;
  /**
   * Main heading text
   */
  heading?: string;
  /**
   * Subheading text
   */
  subheading?: string;
  /**
   * Body text content
   */
  body?: string;
  /**
   * Array of navigation card items
   */
  items?: Omit<NavigationCardItemProps, 'variant'>[];
  /**
   * Primary action button label
   */
  primaryActionLabel?: string;
  /**
   * Primary action button onClick handler
   */
  onPrimaryActionClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * NavigationCards Component
 * 
 * A component for displaying a grid of navigation cards with optional text section
 * and primary action button. Supports multiple card variants (Default, Full, Wrapped)
 * and column layouts (3 or 4 columns).
 */
export const NavigationCards = React.forwardRef<HTMLDivElement, NavigationCardsProps>(
  (
    {
      cardVariant = 'default',
      columns = '4',
      label = 'Label',
      heading = 'Purus sagittis fringilla arcu neque.',
      subheading = 'Bibendum amet at molestie mattis.',
      body = 'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.',
      items = [],
      primaryActionLabel,
      onPrimaryActionClick,
      className,
    },
    ref
  ) => {
    // Container styles
    const containerStyles = cn(
      'flex flex-col',
      'bg-[var(--color-background-surface)]',
      'p-4 md:p-16', // 16px mobile, 64px desktop padding
      'gap-4 md:gap-16', // 16px mobile, 64px desktop gap
      'items-center',
      'w-full',
      'max-w-[1280px]',
      className
    );

    // Text section styles
    const textSectionStyles = cn(
      'flex flex-col',
      'gap-4 md:gap-8', // 16px mobile, 32px desktop gap
      'items-center',
      'max-w-[888px]',
      'w-full',
      'text-center'
    );

    // Cards wrapper styles
    const cardsWrapperStyles = cn(
      'flex flex-wrap md:flex-nowrap', // Wrap on mobile, nowrap on desktop
      'gap-4 md:gap-8', // 16px mobile, 32px desktop gap
      'items-center',
      'justify-start',
      'w-full',
      // Height constraints for specific variants (only on desktop)
      cardVariant === 'wrapped' && columns === '4' && 'md:h-[354px]',
      cardVariant === 'wrapped' && columns === '3' && 'md:h-[409px]',
      cardVariant === 'default' && columns === '3' && 'h-auto',
      cardVariant === 'full' && columns === '3' && 'h-auto',
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Text Section */}
        <div className={textSectionStyles}>
          {/* Top section: Label, Heading, Subheading */}
          <div className="flex flex-col gap-2 items-center w-full">
            {label && (
              <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                {label}
              </p>
            )}
            {heading && (
              <p className="font-primary font-semibold text-2xl md:text-[48px] leading-[32px] md:leading-[48px] text-[var(--color-text-primary)] w-full">
                {heading}
              </p>
            )}
            {subheading && (
              <p className="font-primary font-normal text-lg md:text-[24px] leading-6 md:leading-[30px] text-[var(--color-text-primary)] w-full">
                {subheading}
              </p>
            )}
          </div>

          {/* Body text */}
          {body && (
            <p className="font-primary font-normal text-base md:text-[18px] leading-5 md:leading-6 text-[var(--color-text-primary)] w-full">
              {body}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className={cardsWrapperStyles}>
          {items.map((item, index) => {
            // Use stable identifier: imageSrc + title, fallback to index
            const stableKey = item.imageSrc && item.title 
              ? `${item.imageSrc}-${item.title}` 
              : item.imageSrc || item.title || `card-${index}`;
            return (
              <NavigationCardItem
                key={stableKey}
                {...item}
                variant={cardVariant}
                columns={columns}
              />
            );
          })}
        </div>

        {/* Primary Action Button */}
        {primaryActionLabel && (
          <Button
            variant="primary"
            size="medium"
            onClick={onPrimaryActionClick}
          >
            {primaryActionLabel}
          </Button>
        )}
      </div>
    );
  }
);

NavigationCards.displayName = 'NavigationCards';

