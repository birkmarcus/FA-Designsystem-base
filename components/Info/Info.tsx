'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { InfoItem, InfoItemProps } from './InfoItem';
import { ImageFormat } from '@/components/ImageFormat';

export type InfoLayout = 'card-and-cta' | 'list-items' | 'link-cards' | 'stats';
export type InfoAlignment = 'grid' | 'left' | 'center';

export interface InfoProps {
  /**
   * Layout variant
   * @default 'link-cards'
   */
  layout?: InfoLayout;
  /**
   * Alignment variant
   * @default 'center'
   */
  alignment?: InfoAlignment;
  /**
   * Label text (small text above heading)
   */
  label?: string;
  /**
   * Main heading text
   */
  heading?: string;
  /**
   * Subheading/body text
   */
  subheading?: string;
  /**
   * Array of info items to display
   */
  items?: Omit<InfoItemProps, 'layout'>[];
  /**
   * Primary CTA button label
   */
  primaryCtaLabel?: string;
  /**
   * Primary CTA button onClick handler
   */
  onPrimaryCtaClick?: () => void;
  /**
   * Image source URL (for stats-grid layout)
   */
  imageSrc?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Info Component
 * 
 * A versatile component for displaying key figures, statistics, and information cards.
 * Supports multiple layout variants (Card and CTA, List items, Link Cards, Stats)
 * and alignment options (Grid, Left, Center).
 * 
 * Reuses existing atoms: IconWrapper, Button, ImageFormat, TextBlock patterns.
 */
export const Info = React.forwardRef<HTMLDivElement, InfoProps>(
  (
    {
      layout = 'link-cards',
      alignment = 'center',
      label,
      heading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis.',
      subheading,
      items = [],
      primaryCtaLabel,
      onPrimaryCtaClick,
      imageSrc,
      imageAlt,
      className,
    },
    ref
  ) => {
    // Determine text alignment based on alignment prop
    const textAlignClass = alignment === 'left' ? 'items-start' : 'items-center';
    const textCenterClass = alignment === 'left' ? '' : 'text-center';

    // Container styles
    const containerStyles = cn(
      'flex flex-col',
      'bg-[var(--color-background-surface)]',
      'p-4 md:p-16', // 16px mobile, 64px desktop padding
      'gap-4 md:gap-16', // 16px mobile, 64px desktop gap
      className
    );

    // Text section styles
    const textSectionStyles = cn(
      'flex flex-col',
      'max-w-[888px]',
      'w-full',
      textAlignClass,
      alignment === 'center' && 'items-center',
      alignment === 'left' && 'items-start',
      'gap-4 md:gap-8', // 16px mobile, 32px desktop gap
    );

    // Items container styles
    const itemsContainerStyles = cn(
      'flex',
      layout === 'stats' && alignment === 'center' ? 'flex-wrap md:flex-nowrap' : 'flex-wrap', // Wrap on mobile, nowrap on desktop for stats-center
      'w-full',
      layout === 'card-and-cta' && 'gap-4', // 16px gap
      layout === 'list-items' && 'gap-4 md:gap-8', // 16px mobile, 32px desktop gap
      layout === 'link-cards' && 'gap-4', // 16px gap
      layout === 'stats' && 'gap-4 md:gap-8', // 16px mobile, 32px desktop gap
      alignment === 'center' && 'justify-center',
      alignment === 'left' && 'justify-start',
      alignment === 'grid' && 'justify-start',
    );

    // Stats Grid layout - special handling
    if (layout === 'stats' && alignment === 'grid') {
      return (
        <div ref={ref} className={cn(containerStyles, 'h-auto items-start justify-center')}>
          {/* Text Section */}
          <div className={cn(textSectionStyles, 'items-start')}>
            {label && (
              <p className={cn(
                'font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full',
                textCenterClass
              )}>
                {label}
              </p>
            )}
            {heading && (
              <p className={cn(
                'font-primary font-semibold text-[36px] leading-[40px] text-[var(--color-text-primary)] w-full',
                textCenterClass
              )}>
                {heading}
              </p>
            )}
          </div>

          {/* Stats Grid with Image */}
          <div className="flex flex-wrap gap-4 md:gap-8 items-center w-full">
            {/* Image */}
            {imageSrc && (
              <div className="basis-0 grow min-w-0 md:min-w-[327px] aspect-[456/256] h-auto md:h-[184px] relative overflow-hidden">
                <ImageFormat
                  src={imageSrc}
                  alt={imageAlt || 'Info image'}
                  format="landscape"
                  overlay={false}
                />
              </div>
            )}

            {/* Stats Items */}
            <div className="flex flex-col gap-8 grow min-w-0">
            {/* First row */}
            {items.length > 0 && (
              <div className="flex flex-wrap gap-4 md:gap-8 items-start w-full">
                  {items.slice(0, 2).map((item, index) => (
                    <InfoItem
                      key={index}
                      {...item}
                      layout="stats"
                      iconStyle="square"
                    />
                  ))}
                </div>
              )}

              {/* Second row */}
              {items.length > 2 && (
                <div className="flex flex-wrap gap-4 md:gap-8 items-start w-full">
                  {items.slice(2, 4).map((item, index) => (
                    <InfoItem
                      key={index + 2}
                      {...item}
                      layout="stats"
                      iconStyle="square"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // List items layout - special handling with rows
    if (layout === 'list-items' && alignment === 'grid') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Text Section */}
          <div className={textSectionStyles}>
            {label && (
              <p className={cn(
                'font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full',
                textCenterClass
              )}>
                {label}
              </p>
            )}
            {heading && (
              <p className={cn(
                'font-primary font-semibold text-[36px] leading-[40px] text-[var(--color-text-primary)] w-full',
                textCenterClass
              )}>
                {heading}
              </p>
            )}
          </div>

          {/* List Items Grid */}
          <div className="flex flex-col gap-4 md:gap-16 items-start max-w-[888px] w-full">
            {/* First row */}
            {items.length > 0 && (
              <div className="flex flex-wrap gap-4 md:gap-8 items-start w-full">
                {items.slice(0, 2).map((item, index) => (
                  <InfoItem
                    key={index}
                    {...item}
                    layout="list-items"
                  />
                ))}
              </div>
            )}

            {/* Second row */}
            {items.length > 2 && (
              <div className="flex flex-wrap gap-4 md:gap-8 items-start w-full">
                {items.slice(2, 4).map((item, index) => (
                  <InfoItem
                    key={index + 2}
                    {...item}
                    layout="list-items"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          {primaryCtaLabel && (
            <div className="flex justify-center w-full">
              <Button
                variant="primary"
                size="medium"
                onClick={onPrimaryCtaClick}
              >
                {primaryCtaLabel}
              </Button>
            </div>
          )}
        </div>
      );
    }

    // Link Cards - Left alignment (special layout)
    if (layout === 'link-cards' && alignment === 'left') {
      return (
        <div ref={ref} className={cn(containerStyles, 'h-auto items-center justify-center')}>
          <div className="flex flex-wrap gap-4 md:gap-16 items-center w-full">
            {/* Text Section */}
            <div className="basis-0 flex flex-col grow items-start max-w-[888px] min-w-0 md:min-w-[327px] gap-4 md:gap-8">
              {heading && (
                <p className="font-primary font-semibold text-2xl leading-[30px] text-[var(--color-text-primary)] w-full">
                  {heading}
                </p>
              )}
              {subheading && (
                <p className="font-primary font-normal text-base leading-5 text-[var(--color-text-primary)] w-full">
                  {subheading}
                </p>
              )}
            </div>

            {/* Link Cards */}
            <div className="basis-0 flex flex-wrap md:flex-nowrap gap-4 grow items-start min-w-0">
              {items.map((item, index) => (
                <InfoItem
                  key={index}
                  {...item}
                  layout="link-cards"
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Default layouts
    return (
      <div ref={ref} className={containerStyles}>
        {/* Text Section */}
        <div className={textSectionStyles}>
          {label && (
            <p className={cn(
              'font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full',
              textCenterClass
            )}>
              {label}
            </p>
          )}
          {heading && (
            <p className={cn(
              'font-primary font-semibold text-[36px] leading-[40px] text-[var(--color-text-primary)] w-full',
              textCenterClass
            )}>
              {heading}
            </p>
          )}
        </div>

        {/* Items Container */}
        <div className={itemsContainerStyles}>
          {items.map((item, index) => (
            <InfoItem
              key={index}
              {...item}
              layout={layout}
            />
          ))}
        </div>

        {/* Primary CTA */}
        {primaryCtaLabel && (
          <div className="flex justify-center w-full">
            <Button
              variant="primary"
              size="medium"
              onClick={onPrimaryCtaClick}
            >
              {primaryCtaLabel}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

Info.displayName = 'Info';

