'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { SearchField } from '@/components/SearchField';
import { Badge } from '@/components/Badge';

export type SidebarNavigationVariant = 'default' | 'slim';

export interface NavItem {
  /**
   * Label text for the navigation item
   */
  label: string;
  /**
   * Icon element to display
   */
  icon?: React.ReactNode;
  /**
   * Whether this item is active/selected
   */
  active?: boolean;
  /**
   * Whether this item has a chevron (expandable)
   */
  chevron?: boolean;
  /**
   * Badge count to display (e.g., notification count)
   */
  badge?: number;
  /**
   * Sub-navigation items (for expandable items)
   */
  subItems?: NavItem[];
  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface SidebarNavigationProps {
  /**
   * Variant style
   * @default 'default'
   */
  variant?: SidebarNavigationVariant;
  /**
   * Brand logo/favicon element
   */
  brandLogo?: React.ReactNode;
  /**
   * Brand name text (only shown in default variant)
   */
  brandName?: string;
  /**
   * Main navigation items
   */
  items?: NavItem[];
  /**
   * Footer navigation items
   */
  footerItems?: NavItem[];
  /**
   * User account information
   */
  account?: {
    name: string;
    email: string;
    avatar?: React.ReactNode;
  };
  /**
   * Search placeholder text
   */
  searchPlaceholder?: string;
  /**
   * Whether sub-navigation is open (for slim variant)
   */
  subNavOpen?: boolean;
  /**
   * Callback when sub-navigation opens/closes
   */
  onSubNavToggle?: (open: boolean) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * SidebarNavigation Component
 * 
 * A sidebar navigation component with two variants: Default (full width with labels)
 * and Slim (icon-only). Supports expandable sub-navigation, badges, and account info.
 */
export const SidebarNavigation = React.forwardRef<HTMLDivElement, SidebarNavigationProps>(
  (
    {
      variant = 'default',
      brandLogo,
      brandName,
      items = [],
      footerItems = [],
      account,
      searchPlaceholder = 'Search',
      subNavOpen = false,
      onSubNavToggle,
      className,
    },
    ref
  ) => {
    // Initialize expanded items - items with active=true and subItems should be expanded
    const initialExpanded = new Set<string>();
    items.forEach(item => {
      if (item.active && item.subItems && item.subItems.length > 0) {
        initialExpanded.add(item.label);
      }
    });
    
    const [expandedItems, setExpandedItems] = useState<Set<string>>(initialExpanded);
    const [activeSubNav, setActiveSubNav] = useState<string | null>(null);

    const toggleItem = (label: string, item: NavItem) => {
      if (item.subItems && item.subItems.length > 0) {
        if (variant === 'slim') {
          // In slim variant, opening a sub-item opens the sub-nav panel
          const isOpen = activeSubNav === label;
          setActiveSubNav(isOpen ? null : label);
          onSubNavToggle?.(!isOpen);
        } else {
          // In default variant, toggle expansion
          const newExpanded = new Set(expandedItems);
          if (newExpanded.has(label)) {
            newExpanded.delete(label);
          } else {
            newExpanded.add(label);
          }
          setExpandedItems(newExpanded);
        }
      }
      item.onClick?.();
    };

    // Icon wrapper styles
    const iconWrapperStyles = cn(
      'flex items-center justify-center',
      'p-1', // 4px padding
      'rounded-full',
      'shrink-0'
    );

    // Chevron icon component (up when expanded, down when collapsed)
    const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
        />
      </svg>
    );

    // Render sub-item (for inline dropdown in default variant)
    const renderSubItem = (subItem: NavItem, parentLabel: string) => {
      return (
        <div
          key={subItem.label}
          className={cn(
            'flex items-center min-h-[44px] px-3 py-3 relative shrink-0 w-full',
            subItem.active && 'bg-[var(--color-surface-unselected)] rounded-lg'
          )}
        >
          <button
            type="button"
            onClick={() => subItem.onClick?.()}
            className="font-primary font-medium text-base leading-5 text-[var(--color-text-primary)] flex-1 text-left"
          >
            {subItem.label}
          </button>
        </div>
      );
    };

    // Render navigation item
    const renderNavItem = (item: NavItem, isFooter = false) => {
      const isExpanded = expandedItems.has(item.label);
      const isActive = item.active || (variant === 'slim' && activeSubNav === item.label);
      const hasSubItems = item.subItems && item.subItems.length > 0;

      const itemStyles = cn(
        'flex items-center',
        'h-12', // 48px height
        'px-3 py-2', // 12px horizontal, 8px vertical padding
        'gap-4', // 16px gap
        'rounded-lg', // 8px border radius
        'transition-all duration-fast ease-out',
        'cursor-pointer',
        'w-full',
        // Active state
        isActive && [
          'bg-[var(--color-surface-unselected)]', // #f6f6fc
        ],
        // Hover state
        !isActive && [
          'hover:bg-[var(--color-background-surfaceTertiary)]',
        ],
        // Footer items have different padding in slim variant
        isFooter && variant === 'slim' && 'px-4',
      );

      return (
        <div key={item.label} className="flex flex-col gap-0 items-start relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => toggleItem(item.label, item)}
            className={itemStyles}
          >
            {/* Icon */}
            {item.icon && (
              <div className={cn(iconWrapperStyles, isActive && 'bg-[var(--color-surface-unselected)]')}>
                <div className="w-6 h-6 flex items-center justify-center text-[var(--color-icon-primary)]">
                  {item.icon}
                </div>
              </div>
            )}

            {/* Label (only in default variant) */}
            {variant === 'default' && (
              <span className="font-primary font-medium text-base leading-5 text-[var(--color-text-primary)] flex-1 text-left">
                {item.label}
              </span>
            )}

            {/* Badge */}
            {item.badge !== undefined && item.badge > 0 && (
              <Badge color="brand">
                {item.badge}
              </Badge>
            )}

            {/* Chevron */}
            {item.chevron && hasSubItems && variant === 'default' && (
              <div className="w-6 h-6 shrink-0 flex items-center justify-center text-[var(--color-text-tertiary)]">
                <ChevronIcon isExpanded={isExpanded} />
              </div>
            )}
          </button>

          {/* Inline sub-items (default variant only) */}
          {variant === 'default' && isExpanded && hasSubItems && (
            <div className="flex flex-col items-start p-3 relative rounded-lg shrink-0 w-full">
              {item.subItems?.map((subItem) => renderSubItem(subItem, item.label))}
            </div>
          )}
        </div>
      );
    };

    // Render sub-navigation panel (for slim variant)
    const renderSubNav = () => {
      if (variant !== 'slim' || !subNavOpen || !activeSubNav) return null;

      const activeItem = items.find(item => item.label === activeSubNav);
      if (!activeItem?.subItems) return null;

      return (
        <div className="bg-[var(--color-background-surface)] flex flex-col h-full items-start justify-between shrink-0 w-[281px]">
          <div className="flex flex-col gap-4 items-start pb-0 pt-9 px-4 relative shrink-0 w-full">
            <p className="font-primary font-medium text-base leading-5 text-[var(--color-text-primary)] relative shrink-0 w-full">
              {activeItem.label}
            </p>
            <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
              {activeItem.subItems.map((subItem) => (
                <button
                  key={subItem.label}
                  type="button"
                  onClick={() => subItem.onClick?.()}
                  className={cn(
                    'flex h-12 items-center p-0 relative rounded-lg shrink-0 w-full',
                    subItem.active && 'bg-[var(--color-surface-unselected)]'
                  )}
                >
                  <div className={cn(
                    'flex gap-4 grow items-center min-h-px min-w-px px-3 py-2 relative rounded-lg shrink-0',
                    subItem.active && 'bg-[var(--color-surface-unselected)]'
                  )}>
                    {subItem.icon && (
                      <div className={iconWrapperStyles}>
                        <div className="w-6 h-6 flex items-center justify-center text-[var(--color-icon-primary)]">
                          {subItem.icon}
                        </div>
                      </div>
                    )}
                    <span className="font-primary font-medium text-base leading-5 text-[var(--color-text-primary)] flex-1 text-left">
                      {subItem.label}
                    </span>
                    {subItem.badge !== undefined && subItem.badge > 0 && (
                      <Badge color="brand">
                        {subItem.badge}
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Account section in sub-nav */}
          {account && (
            <div className="flex items-start justify-between pb-6 pt-0 px-5 relative shrink-0 w-full">
              <div className="flex flex-col items-start leading-5 not-italic relative shrink-0 text-sm text-nowrap">
                <p className="font-primary font-semibold relative shrink-0 text-[var(--color-text-primary)]">
                  {account.name}
                </p>
                <p className="font-primary font-normal relative shrink-0 text-[var(--color-text-tertiary)]">
                  {account.email}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    };

    // Container styles
    const containerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'flex',
      'h-[960px]',
      'items-start',
      'relative',
      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]',
      variant === 'default' && 'w-[312px]',
      variant === 'slim' && 'w-auto',
      className
    );

    // Divider component
    const Divider = () => (
      <div className="h-full relative shrink-0 w-px">
        <div className="absolute inset-0 bg-[var(--color-border-default)]" />
      </div>
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Main Content */}
        <div className="flex flex-col h-full items-start justify-between shrink-0 grow min-w-0 relative">
          {/* Navigation Section */}
          <div className="flex flex-col gap-6 items-start pb-0 pt-8 px-0 relative shrink-0 w-full">
            {/* Header */}
            <div className={cn(
              'flex items-center',
              variant === 'default' && 'gap-3 pl-6 pr-5 py-0',
              variant === 'slim' && 'justify-center px-4 py-0',
              'relative shrink-0 w-full'
            )}>
              {brandLogo && (
                <div className="bg-[var(--color-background-surfaceTertiary)] rounded-lg shrink-0 size-10">
                  {brandLogo}
                </div>
              )}
              {variant === 'default' && brandName && (
                <p className="font-primary font-semibold text-2xl leading-[30px] text-[var(--color-text-primary)] text-nowrap">
                  {brandName}
                </p>
              )}
            </div>

            {/* Search (only in default variant) */}
            {variant === 'default' && (
              <div className="flex flex-col items-start px-6 py-0 relative shrink-0 w-full">
                <div className="flex flex-col gap-2 items-start relative rounded-lg shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full">
                  <SearchField
                    placeholder={searchPlaceholder}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Main Navigation Items */}
            <div className={cn(
              'flex flex-col gap-1 items-start relative shrink-0 w-full',
              variant === 'default' && 'px-6',
              variant === 'slim' && 'px-4'
            )}>
              {items.map((item) => renderNavItem(item))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col gap-6 items-start pb-8 pt-0 px-4 relative shrink-0 w-full">
            {/* Footer Navigation */}
            <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
              {footerItems.map((item) => renderNavItem(item, true))}
            </div>

            {/* Divider */}
            <div className="h-px relative shrink-0 w-full bg-[var(--color-border-default)]" />

            {/* Account Section */}
            {account && (
              <div className="flex items-start justify-between px-3 py-0 relative shrink-0 w-full">
                {variant === 'default' ? (
                  <>
                    <div className="flex flex-col items-start leading-5 not-italic relative shrink-0 text-sm text-nowrap">
                      <p className="font-primary font-semibold relative shrink-0 text-[var(--color-text-primary)]">
                        {account.name}
                      </p>
                      <p className="font-primary font-normal relative shrink-0 text-[var(--color-text-tertiary)]">
                        {account.email}
                      </p>
                    </div>
                    {account.avatar && (
                      <div className="shrink-0 size-6">
                        {account.avatar}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="shrink-0 size-6">
                    {account.avatar || (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        {subNavOpen && variant === 'slim' && <Divider />}

        {/* Sub-Navigation Panel (Slim variant only) */}
        {renderSubNav()}
      </div>
    );
  }
);

SidebarNavigation.displayName = 'SidebarNavigation';

