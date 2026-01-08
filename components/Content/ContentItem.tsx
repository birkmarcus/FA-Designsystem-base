'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ContentItemProps {
  /**
   * Icon element
   */
  icon?: React.ReactNode;
  /**
   * Title text
   */
  title?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Layout variant
   */
  layout?: 'column' | 'grid';
  /**
   * Show icon
   * @default true
   */
  showIcon?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * ContentItem Component
 * 
 * A reusable content item component that displays an icon, title, and description.
 * Used within the Content component for Column and Grid layouts.
 */
export const ContentItem = React.forwardRef<HTMLDivElement, ContentItemProps>(
  (
    {
      icon,
      title,
      description,
      layout = 'column',
      showIcon = true,
      className,
    },
    ref
  ) => {
    // Column layout
    if (layout === 'column') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col gap-6 items-start',
            'grow min-w-0',
            className
          )}
        >
          {/* Icon */}
          {showIcon && icon && (
            <div className="shrink-0 w-6 h-6 relative overflow-hidden">
              {icon}
            </div>
          )}

          {/* Text Content */}
          <div className="flex flex-col items-start w-full">
            {/* Description */}
            {description && (
              <p className="font-primary font-normal text-base leading-5 text-[var(--color-text-primary)] w-full">
                {description}
              </p>
            )}
          </div>
        </div>
      );
    }

    // Grid layout
    if (layout === 'grid') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col gap-4 items-start',
            'grow min-w-0',
            className
          )}
        >
          {/* Icon */}
          {showIcon && icon && (
            <div className="shrink-0 w-6 h-6 relative overflow-hidden">
              {icon}
            </div>
          )}

          {/* Text Content */}
          <div className="flex flex-col items-start w-full">
            {/* Title */}
            {title && (
              <p className="font-primary font-semibold text-2xl leading-[30px] text-[#21272a] w-full">
                {title}
              </p>
            )}

            {/* Description */}
            {description && (
              <p className="font-primary font-normal text-base leading-5 text-[#21272a] w-full">
                {description}
              </p>
            )}
          </div>
        </div>
      );
    }

    return null;
  }
);

ContentItem.displayName = 'ContentItem';

