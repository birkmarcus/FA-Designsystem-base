'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BreadcrumbItem, BreadcrumbItemType } from './BreadcrumbItem';

export interface BreadcrumbItemData {
  /**
   * Item label/text
   */
  label: string;
  /**
   * Item href (optional for active items)
   */
  href?: string;
  /**
   * Item type
   */
  type?: BreadcrumbItemType;
  /**
   * Custom icon (for icon type)
   */
  icon?: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItemData[];
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Breadcrumb Component
 * 
 * A breadcrumb navigation component showing the current page hierarchy.
 * Supports home icon, regular pages, intermediate ellipsis, and active page.
 */
export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      items,
      className,
    },
    ref
  ) => {
    if (!items || items.length === 0) {
      return null;
    }

    const containerStyles = cn(
      'flex gap-[var(--spacing-gap-md)] items-center', // 8px gap between items
      className
    );

    return (
      <nav ref={ref} className={containerStyles} aria-label="Breadcrumb">
        <ol className="flex gap-[var(--spacing-gap-md)] items-center list-none">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                <BreadcrumbItem
                  label={item.label}
                  type={item.type || (isLast ? 'active' : 'page')}
                  href={item.href}
                  onClick={item.onClick}
                  showSeparator={!isLast}
                  icon={item.icon}
                />
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

