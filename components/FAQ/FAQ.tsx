'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FAQGroup, FAQGroupProps, FAQGroupItem } from '@/components/Accordion';

export interface FAQProps extends Omit<FAQGroupProps, 'items'> {
  /**
   * Label text (shown above heading)
   */
  label?: string;
  /**
   * Heading text
   */
  heading?: string;
  /**
   * Array of FAQ items
   */
  items: FAQGroupItem[];
  /**
   * Mobile responsive mode
   * @default false
   */
  mobile?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * FAQ Component
 * 
 * A FAQ section component with a header (label and heading) and a list of FAQ items.
 * Uses the FAQGroup component internally for managing FAQ items.
 */
export const FAQ = React.forwardRef<HTMLDivElement, FAQProps>(
  (
    {
      label,
      heading,
      items,
      allowMultiple = false,
      defaultOpen = [],
      openItems,
      onToggle,
      mobile = false,
      className,
    },
    ref
  ) => {
    // Responsive values
    const padding = mobile ? 'p-4' : 'p-16'; // 16px mobile, 64px desktop
    const containerGap = mobile ? 'gap-6' : 'gap-16'; // 24px mobile, 64px desktop
    const textGap = mobile ? 'gap-4' : 'gap-8'; // 16px mobile, 32px desktop
    const headingSize = mobile ? 'text-2xl leading-[40px]' : 'text-[36px] leading-[40px]'; // 24px mobile, 36px desktop

    const containerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'flex flex-col',
      containerGap,
      'items-center',
      padding,
      'w-full',
      className
    );

    const textSectionStyles = cn(
      'flex flex-col',
      textGap,
      'items-center max-w-[888px] w-full'
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Text Section */}
        {(label || heading) && (
          <div className={textSectionStyles}>
            <div className="flex flex-col gap-2 items-center text-center w-full">
              {label && (
                <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                  {label}
                </p>
              )}
              {heading && (
                <p className={cn('font-primary font-semibold', headingSize, 'text-[var(--color-text-primary)] w-full')}>
                  {heading}
                </p>
              )}
            </div>
          </div>
        )}

        {/* FAQ Items */}
        <FAQGroup
          items={items}
          allowMultiple={allowMultiple}
          defaultOpen={defaultOpen}
          openItems={openItems}
          onToggle={onToggle}
          className="w-full max-w-[888px]"
        />
      </div>
    );
  }
);

FAQ.displayName = 'FAQ';

