'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type TabMenuVariant = 'fixed-width' | 'equal-width';

export interface TabMenuItem {
  /**
   * Tab label
   */
  label: React.ReactNode;
  /**
   * Tab value (unique identifier)
   */
  value: string;
  /**
   * Tab content panel (shown when tab is active)
   */
  content?: React.ReactNode;
}

export interface TabMenuProps {
  /**
   * Tab menu variant
   * @default 'equal-width'
   */
  variant?: TabMenuVariant;
  /**
   * Array of tab items
   */
  items: TabMenuItem[];
  /**
   * Currently active tab value
   */
  activeTab?: string;
  /**
   * Callback when a tab is clicked
   */
  onTabChange?: (value: string) => void;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Additional CSS classes for the tab group
   */
  tabGroupClassName?: string;
  /**
   * Additional CSS classes for the content area
   */
  contentClassName?: string;
}

/**
 * TabMenu Component
 * 
 * A tab menu component with 4 variants:
 * - Fixed-width tabs (fit-content width)
 * - Equal-width tabs (flex grow to fill space)
 * 
 * Uses underlined style with bottom border for active/inactive states.
 */
export const TabMenu = React.forwardRef<HTMLDivElement, TabMenuProps>(
  (
    {
      variant = 'equal-width',
      items,
      activeTab,
      onTabChange,
      className,
      tabGroupClassName,
      contentClassName,
    },
    ref
  ) => {
    const handleTabClick = (value: string) => {
      if (value !== activeTab) {
        onTabChange?.(value);
      }
    };

    const containerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'flex flex-col',
      'items-start',
      'w-full',
      className
    );

    const tabGroupStyles = cn(
      'flex',
      'items-center',
      'overflow-x-auto overflow-y-clip',
      'isolate',
      'w-full',
      variant === 'fixed-width' && 'w-auto', // Allow horizontal scroll for fixed-width
      tabGroupClassName
    );

    const tabStyles = (isActive: boolean) => cn(
      'flex',
      'items-center justify-center',
      'gap-2', // 8px gap
      'h-12', // 48px height
      'px-4 py-3', // 16px horizontal, 12px vertical padding
      'border-b-[1.5px]', // 1.5px bottom border
      'font-primary font-medium',
      'text-base leading-5', // 16px font, 20px line height
      'text-[var(--color-text-primary)]',
      'whitespace-nowrap',
      'transition-colors',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeOut)]',
      'focus:outline-none',
      'cursor-pointer',
      // Variant-specific width
      variant === 'fixed-width' && 'w-fit shrink-0',
      variant === 'equal-width' && 'flex-1 min-w-0',
      // Active/inactive border colors
      isActive
        ? 'border-[#00005f] isolate' // Active tab border color
        : 'border-[var(--color-border-default)]', // Inactive tab border color
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Tab Group */}
        <div className={tabGroupStyles} role="tablist">
          {items.map((item, index) => {
            const isActive = activeTab === item.value;
            return (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${item.value}`}
                id={`tab-${item.value}`}
                className={tabStyles(isActive)}
                onClick={() => handleTabClick(item.value)}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content with Fade Transition */}
        <div className="relative w-full">
          {items.map((item) => {
            const isActive = activeTab === item.value;
            return (
              <div
                key={item.value}
                id={`tabpanel-${item.value}`}
                role="tabpanel"
                aria-labelledby={`tab-${item.value}`}
                aria-hidden={!isActive}
                className={cn(
                  'w-full',
                  'transition-opacity',
                  'duration-[var(--motion-primitive-duration-base)]',
                  'ease-[var(--motion-primitive-easing-easeInOut)]',
                  isActive
                    ? 'opacity-100 relative z-10'
                    : 'opacity-0 absolute inset-0 pointer-events-none z-0',
                  contentClassName
                )}
              >
                {item.content}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

TabMenu.displayName = 'TabMenu';

