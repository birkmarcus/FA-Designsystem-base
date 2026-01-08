'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Tab, TabProps } from './Tab';

export type TabGroupVariant = 'plain' | 'wrapped' | 'underline' | 'inline';

export interface TabItem {
  /**
   * Tab label
   */
  label: React.ReactNode;
  /**
   * Tab value (unique identifier)
   */
  value: string;
  /**
   * Left icon element
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon element
   */
  rightIcon?: React.ReactNode;
  /**
   * Notification badge text
   */
  notification?: string | number;
  /**
   * Additional props for the Tab component
   */
  tabProps?: Omit<TabProps, 'children' | 'leftIcon' | 'rightIcon' | 'notification'>;
}

export interface TabGroupProps {
  /**
   * Tab group variant
   * @default 'plain'
   */
  variant?: TabGroupVariant;
  /**
   * Array of tab items
   */
  items: TabItem[];
  /**
   * Currently active tab value
   */
  activeTab?: string;
  /**
   * Callback when a tab is clicked
   */
  onTabChange?: (value: string) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TabGroup Component
 * 
 * A group of tabs with multiple layout variants.
 * Supports different visual styles: plain, wrapped, underline, and inline.
 */
export const TabGroup = React.forwardRef<HTMLDivElement, TabGroupProps>(
  (
    {
      variant = 'plain',
      items,
      activeTab,
      onTabChange,
      className,
    },
    ref
  ) => {
    const handleTabClick = (value: string) => {
      if (value !== activeTab) {
        onTabChange?.(value);
      }
    };

    // Determine tab variant based on group variant and active state
    const getTabVariant = (isActive: boolean): TabProps['variant'] => {
      switch (variant) {
        case 'underline':
          return 'underlined';
        case 'inline':
          return 'button-grey';
        case 'wrapped':
          return isActive ? 'button-white' : 'button-grey';
        case 'plain':
        default:
          return 'button-grey';
      }
    };

    const containerStyles = cn(
      'flex items-center',
      variant === 'plain' && [
        'rounded-[10px]',
        'overflow-hidden',
      ],
      variant === 'wrapped' && [
        'bg-[var(--color-background-neutral)]', // #f7f7f7
        'border border-[var(--color-border-default)]', // #ebebec
        'p-[2px]', // 2px padding
        'rounded-[10px]',
        'overflow-hidden',
      ],
      variant === 'underline' && [
        'isolate',
      ],
      variant === 'inline' && [
        'border border-[var(--color-border-default)]', // #ebebec
        'rounded-lg',
        'overflow-hidden',
      ],
      className
    );

    return (
      <div ref={ref} className={containerStyles} role="tablist">
        {items.map((item, index) => {
          const isActive = activeTab === item.value;
          const isLast = index === items.length - 1;

          // Determine tab state
          const tabState: TabProps['state'] = isActive ? 'active' : 'default';
          const tabVariant = getTabVariant(isActive);

          return (
            <React.Fragment key={item.value}>
              <Tab
                variant={tabVariant}
                state={tabState}
                leftIcon={item.leftIcon}
                rightIcon={item.rightIcon}
                notification={item.notification}
                onClick={() => handleTabClick(item.value)}
                aria-selected={isActive}
                {...item.tabProps}
              >
                {item.label}
              </Tab>
              {variant === 'inline' && !isLast && (
                <div className="h-full w-px bg-[var(--color-border-default)] shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

TabGroup.displayName = 'TabGroup';

