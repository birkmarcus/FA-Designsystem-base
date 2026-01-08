'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { IconWrapper } from '@/components/IconWrapper';
import { Button } from '@/components/Button';
import { ArrowRightIcon } from './ArrowRightIcon';

export type InfoItemLayout = 'card-and-cta' | 'list-items' | 'link-cards' | 'stats';
export type InfoItemIconStyle = 'circular' | 'square';

export interface InfoItemProps {
  /**
   * Icon element
   */
  icon?: React.ReactNode;
  /**
   * Title/Number text (e.g., "356+", "Title")
   */
  title?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Link button label (for link-cards layout)
   */
  linkLabel?: string;
  /**
   * Link button onClick handler
   */
  onLinkClick?: () => void;
  /**
   * Layout variant
   */
  layout?: InfoItemLayout;
  /**
   * Icon style variant
   */
  iconStyle?: InfoItemIconStyle;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * InfoItem Component
 * 
 * A reusable info item component that displays an icon, title/number, and description.
 * Used within the Info component to display key figures and statistics.
 */
export const InfoItem = React.forwardRef<HTMLDivElement, InfoItemProps>(
  (
    {
      icon,
      title,
      description,
      linkLabel,
      onLinkClick,
      layout = 'card-and-cta',
      iconStyle = 'circular',
      className,
    },
    ref
  ) => {
    // Card and CTA layout
    if (layout === 'card-and-cta') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col items-center',
            'bg-[var(--color-background-surface)]',
            'border border-[var(--color-border-default)]',
            'rounded-2xl', // 16px
            'min-w-[244px]',
            'overflow-hidden',
            'grow',
            className
          )}
        >
          <div className="flex flex-col gap-6 items-center p-4 w-full">
            {/* Icon */}
            {icon && (
              <IconWrapper icon={icon} size="small" />
            )}

            {/* Text Content */}
            <div className="flex flex-col gap-4 items-center w-full">
              {/* Title */}
              {title && (
                <p className="font-primary font-semibold text-2xl leading-[30px] text-[var(--color-text-primary)] text-center w-full">
                  {title}
                </p>
              )}

              {/* Description */}
              {description && (
                <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] text-center w-full">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    // List items layout
    if (layout === 'list-items') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col gap-8 items-start',
            'grow min-w-[244px]',
            className
          )}
        >
          <div className="flex flex-col gap-6 items-start p-0 w-full">
            {/* Icon */}
            {icon && (
              <IconWrapper icon={icon} size="small" />
            )}

            {/* Text Content */}
            <div className="flex flex-col gap-4 items-start w-full">
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
        </div>
      );
    }

    // Link cards layout
    if (layout === 'link-cards') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col gap-8 items-center',
            'grow min-w-[244px]',
            className
          )}
        >
          <div className="flex flex-col gap-6 items-start p-0 w-full">
            {/* Icon */}
            {icon && (
              <IconWrapper icon={icon} size="small" />
            )}

            {/* Text Content */}
            <div className="flex flex-col gap-4 items-start w-full">
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

            {/* Link Button */}
            {linkLabel && (
              <div className="flex gap-4 items-start p-0 w-full">
                <Button
                  variant="subtle"
                  size="medium"
                  onClick={onLinkClick}
                  rightIcon={<ArrowRightIcon className="w-5 h-[16.667px] text-[var(--color-interactive-primary)]" />}
                  className="px-0"
                >
                  {linkLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Stats layout
    if (layout === 'stats') {
      const iconWrapperClass = iconStyle === 'square'
        ? 'border border-[var(--color-border-default)] rounded-lg'
        : '';

      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col items-center justify-center',
            'bg-[var(--color-background-surface)]',
            'border border-[var(--color-border-default)]',
            'rounded-2xl', // 16px
            'min-w-[244px]',
            'overflow-hidden',
            'grow',
            className
          )}
        >
          <div className="flex gap-3 items-center p-4 w-full">
            {/* Icon */}
            {icon && (
              <IconWrapper
                icon={icon}
                size="large"
                className={iconWrapperClass}
              />
            )}

            {/* Text Content */}
            <div className="flex flex-col grow items-start min-w-0">
              {/* Title */}
              {title && (
                <p className="font-primary font-semibold text-lg leading-6 text-[var(--color-text-primary)] w-full">
                  {title}
                </p>
              )}

              {/* Description */}
              {description && (
                <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] w-full">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
);

InfoItem.displayName = 'InfoItem';

