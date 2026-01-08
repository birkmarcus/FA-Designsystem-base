'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export type BreadcrumbItemType = 'page' | 'active' | 'icon' | 'intermediate';

export interface BreadcrumbItemProps {
  /**
   * Item label/text
   */
  label: string;
  /**
   * Item type
   * @default 'page'
   */
  type?: BreadcrumbItemType;
  /**
   * Link href (not used for active or intermediate items)
   */
  href?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Show separator after this item
   * @default true
   */
  showSeparator?: boolean;
  /**
   * Icon element (for icon type)
   */
  icon?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * BreadcrumbItem Component
 * 
 * Base component for individual breadcrumb items.
 * Supports page, active, icon, and intermediate (ellipsis) variants.
 */
export const BreadcrumbItem = React.forwardRef<HTMLDivElement, BreadcrumbItemProps>(
  (
    {
      label,
      type = 'page',
      href,
      onClick,
      showSeparator = true,
      icon,
      className,
    },
    ref
  ) => {
    const isActive = type === 'active';
    const isIntermediate = type === 'intermediate';
    const isIcon = type === 'icon';

    // Chevron separator icon
    const ChevronSeparator = () => (
      <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );

    // Home icon (default for icon type)
    const HomeIcon = () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    );

    const itemStyles = cn(
      'flex items-center',
      'min-h-[44px]',
      type === 'icon' ? 'gap-[var(--spacing-primitive-3)]' : 'gap-[var(--spacing-gap-md)]', // 12px gap for icon, 8px for others
      className
    );

    const buttonStyles = cn(
      'flex items-center justify-center',
      'min-h-[44px]',
      'py-[var(--spacing-gap-md)]', // 8px vertical padding
      'rounded-lg', // 8px border radius
      'transition-colors duration-fast',
      'focus:outline-none',
      'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
      !isActive && !isIntermediate && 'hover:text-[var(--color-interactive-primary)]',
    );

    const textStyles = cn(
      'font-primary',
      'text-base leading-5', // 16px font, 20px line height
      'text-center text-nowrap',
      isActive && [
        'font-medium',
        'text-[#00009e]', // Active page color from Figma
      ],
      isIntermediate && [
        'font-medium',
        'text-[var(--color-text-tertiary)]',
      ],
      !isActive && !isIntermediate && [
        'font-normal',
        'text-[var(--color-text-tertiary)]',
      ],
    );

    const iconButtonStyles = cn(
      'flex items-center justify-center',
      'h-[44px]',
      'py-[var(--spacing-primitive-3)]', // 12px vertical padding
      'rounded-full', // Full rounded for icon button
      'text-[var(--color-text-tertiary)]',
      'transition-colors duration-fast',
      'focus:outline-none',
      'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
      'hover:text-[var(--color-interactive-primary)]',
    );

    const content = (
      <>
        {isIcon ? (
          <button
            type="button"
            className={iconButtonStyles}
            onClick={onClick}
            aria-label="Home"
          >
            {icon || <HomeIcon />}
          </button>
        ) : (
          <div className={buttonStyles}>
            {isIntermediate ? (
              <span className={textStyles}>...</span>
            ) : href && !isActive ? (
              <Link href={href} className={textStyles} onClick={onClick}>
                {label}
              </Link>
            ) : (
              <span className={textStyles}>{label}</span>
            )}
          </div>
        )}
        
        {showSeparator && (
          <div className="flex items-center justify-center shrink-0 text-[var(--color-text-tertiary)]">
            <ChevronSeparator />
          </div>
        )}
      </>
    );

    return (
      <div ref={ref} className={itemStyles}>
        {content}
      </div>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

