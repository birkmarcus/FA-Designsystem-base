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
      'p-16', // 64px padding
      'gap-16', // 64px gap
      'items-center',
      'w-full',
      'max-w-[1280px]',
      className
    );

    // Text section styles
    const textSectionStyles = cn(
      'flex flex-col',
      'gap-8', // 32px gap
      'items-center',
      'max-w-[888px]',
      'w-full',
      'text-center'
    );

    // Cards wrapper styles
    const cardsWrapperStyles = cn(
      'flex flex-nowrap',
      'gap-8', // 32px gap
      'items-center',
      'justify-start',
      'w-full',
      // Height constraints for specific variants
      cardVariant === 'wrapped' && columns === '4' && 'h-[354px]',
      cardVariant === 'wrapped' && columns === '3' && 'h-[409px]',
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
              <p className="font-primary font-semibold text-[48px] leading-[48px] text-[var(--color-text-primary)] w-full">
                {heading}
              </p>
            )}
            {subheading && (
              <p className="font-primary font-normal text-[24px] leading-[30px] text-[var(--color-text-primary)] w-full">
                {subheading}
              </p>
            )}
          </div>

          {/* Body text */}
          {body && (
            <p className="font-primary font-normal text-[18px] leading-6 text-[var(--color-text-primary)] w-full">
              {body}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className={cardsWrapperStyles}>
          {items.map((item, index) => (
            <NavigationCardItem
              key={index}
              {...item}
              variant={cardVariant}
              columns={columns}
            />
          ))}
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

