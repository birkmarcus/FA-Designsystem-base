'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  /**
   * Title text
   */
  title: string;
  /**
   * Content text (shown when open)
   */
  children?: React.ReactNode;
  /**
   * Whether the accordion is open
   * @default false
   */
  open?: boolean;
  /**
   * Callback when accordion is toggled
   */
  onToggle?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Chevron Icon Component with smooth rotation
 */
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={cn(
      'w-5 h-5 shrink-0',
      'transition-transform',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeInOut)]',
      open && 'rotate-180'
    )}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/**
 * AccordionItem Component
 * 
 * A single accordion item that can be expanded or collapsed.
 * Shows a title and chevron icon, with content revealed when open.
 */
export const AccordionItem = React.forwardRef<HTMLButtonElement, AccordionItemProps>(
  (
    {
      title,
      children,
      open = false,
      onToggle,
      className,
    },
    ref
  ) => {
    const buttonStyles = cn(
      'flex flex-col items-start justify-center',
      'gap-0', // 0px gap between toggle and content
      'px-4 py-2', // 16px horizontal, 8px vertical
      'w-full',
      'h-fit', // fit-content height
      'text-left',
      'transition-colors',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeOut)]',
      'focus:outline-none',
      'border-t border-[var(--color-border-default)]', // Top border only
      open && [
        'bg-[var(--color-background-neutral)]', // #f7f7f7 when open
      ],
      className
    );

    const toggleStyles = cn(
      'flex gap-2 items-center',
      'w-full',
    );

    const titleStyles = cn(
      'flex-1',
      'font-primary font-medium',
      'text-lg leading-6', // 18px font, 24px line height
      'text-[var(--color-text-primary)]',
    );

    const contentWrapperStyles = cn(
      'w-full',
      'overflow-hidden',
      'transition-all',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeInOut)]',
      open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
    );

    const contentStyles = cn(
      'w-full',
      'pb-4 pt-2 px-0', // 16px bottom padding, 8px top padding
      'font-primary font-normal',
      'text-sm leading-4', // 14px font, 16px line height
      'text-[var(--color-text-primary)]',
    );

    return (
      <button
        ref={ref}
        type="button"
        className={buttonStyles}
        onClick={onToggle}
        aria-expanded={open}
        aria-label={`${open ? 'Collapse' : 'Expand'} ${title}`}
      >
        <div className={toggleStyles}>
          <p className={titleStyles}>
            {title}
          </p>
          <span className="flex items-center justify-center text-[var(--color-icon-primary)] shrink-0">
            <ChevronIcon open={open} />
          </span>
        </div>
        <div className={contentWrapperStyles}>
          {children && (
            <div className={contentStyles}>
              {children}
            </div>
          )}
        </div>
      </button>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

