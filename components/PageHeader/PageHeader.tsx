'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Breadcrumb, BreadcrumbItemData } from '@/components/Breadcrumb';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { TabGroup, TabItem } from '@/components/Tab';
import { SearchField } from '@/components/SearchField';
import { FilterLinesIcon, CalendarIcon, UploadCloudIcon, DotsVerticalIcon } from './icons';

export type PageHeaderVariant = 'buttons' | 'tabs' | 'search' | 'dashboard';

export interface PageHeaderAction {
  /**
   * Button label
   */
  label: string;
  /**
   * Button variant
   */
  variant?: 'primary' | 'neutral' | 'subtle' | 'tertiary';
  /**
   * Left icon element
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon element
   */
  rightIcon?: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Whether button is disabled
   */
  disabled?: boolean;
}

export interface PageHeaderProps {
  /**
   * Page title
   */
  title: string;
  /**
   * Breadcrumb items
   */
  breadcrumbs?: BreadcrumbItemData[];
  /**
   * Badge text (e.g., "100 users")
   */
  badge?: string;
  /**
   * Help text (e.g., "Showing 1-10 of 100 users")
   */
  helpText?: string;
  /**
   * Action buttons
   */
  actions?: PageHeaderAction[];
  /**
   * Tab items
   */
  tabs?: TabItem[];
  /**
   * Currently active tab value
   */
  activeTab?: string;
  /**
   * Callback when tab changes
   */
  onTabChange?: (value: string) => void;
  /**
   * Search placeholder text
   */
  searchPlaceholder?: string;
  /**
   * Search value
   */
  searchValue?: string;
  /**
   * Callback when search changes
   */
  onSearchChange?: (value: string) => void;
  /**
   * Variant style
   * @default 'buttons'
   */
  variant?: PageHeaderVariant;
  /**
   * Show divider at bottom
   * @default true
   */
  showDivider?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PageHeader Component
 * 
 * A comprehensive page header component with breadcrumbs, title, badge, help text,
 * action buttons, tabs, and search functionality. Supports multiple variants.
 */
export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    {
      title,
      breadcrumbs,
      badge,
      helpText,
      actions = [],
      tabs,
      activeTab,
      onTabChange,
      searchPlaceholder = 'Search',
      searchValue,
      onSearchChange,
      variant = 'buttons',
      showDivider = true,
      className,
    },
    ref
  ) => {
    // Container styles
    const containerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'flex flex-col',
      'gap-6', // 24px gap
      'max-w-[1280px]',
      'pb-0 pt-6 px-6', // 24px padding
      'relative',
      'w-full',
      className
    );

    // Render action buttons
    const renderActions = () => {
      if (!actions || actions.length === 0) return null;

      return (
        <div className="flex gap-3 items-center justify-end relative shrink-0">
          {actions.map((action, index) => {
            // Tertiary button (text-only, no background)
            if (action.variant === 'tertiary') {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={action.onClick}
                  disabled={action.disabled}
                  className={cn(
                    'flex gap-2 items-center justify-center',
                    'min-h-[44px] px-0 py-2',
                    'rounded-lg',
                    'font-primary font-medium text-base leading-5',
                    'text-[var(--color-interactive-primary)]',
                    'transition-all duration-fast ease-out',
                    'hover:opacity-80',
                    'disabled:opacity-40 disabled:cursor-not-allowed',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2'
                  )}
                >
                  {action.label}
                </button>
              );
            }

            // Icon-only button (no label)
            if (!action.label && (action.leftIcon || action.rightIcon)) {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={action.onClick}
                  disabled={action.disabled}
                  className={cn(
                    'flex items-center justify-center',
                    'w-6 h-6',
                    'text-[var(--color-icon-primary)]',
                    'transition-all duration-fast ease-out',
                    'hover:opacity-80',
                    'disabled:opacity-40 disabled:cursor-not-allowed',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2'
                  )}
                >
                  {action.leftIcon || action.rightIcon}
                </button>
              );
            }

            // Regular button
            return (
              <Button
                key={index}
                variant={action.variant === 'neutral' ? 'neutral' : action.variant || 'primary'}
                leftIcon={action.leftIcon}
                rightIcon={action.rightIcon}
                onClick={action.onClick}
                disabled={action.disabled}
              >
                {action.label}
              </Button>
            );
          })}
        </div>
      );
    };

    // Render tabs group (wrapped variant)
    const renderTabsGroup = () => {
      if (!tabs || tabs.length === 0) return null;

      return (
        <TabGroup
          variant="wrapped"
          items={tabs}
          activeTab={activeTab}
          onTabChange={onTabChange}
          className="bg-[var(--color-background-surfaceTertiary)] border border-[var(--color-border-default)] rounded-[10px] overflow-x-auto overflow-y-clip p-0.5"
        />
      );
    };

    // Render inline tabs (for Tabs variant)
    const renderInlineTabs = () => {
      if (!tabs || tabs.length === 0) return null;

      return (
        <div className="border border-[var(--color-border-default)] flex items-center overflow-x-auto overflow-y-clip relative rounded-lg shrink-0">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.value;
            return (
              <React.Fragment key={tab.value}>
                {index > 0 && (
                  <div className="h-full relative shrink-0 w-px">
                    <div className="absolute inset-0 bg-[var(--color-border-default)]" />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => onTabChange?.(tab.value)}
                  className={cn(
                    'flex gap-2 h-12 items-center justify-center px-4 py-3 relative rounded-lg shrink-0',
                    isActive && [
                      'bg-[var(--color-background-surfaceTertiary)]',
                      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]',
                    ]
                  )}
                >
                  <span className="font-primary font-medium text-base leading-5 text-[var(--color-text-primary)] whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      );
    };

    // Divider component
    const Divider = () => (
      <div className="h-px relative shrink-0 w-full bg-[var(--color-border-default)]" />
    );

    return (
      <div ref={ref} className={containerStyles}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className="flex gap-2 items-center relative shrink-0" />
        )}

        {/* Main Content */}
        <div className="flex flex-wrap gap-4 items-start justify-between relative shrink-0 w-full">
          {/* Title and Badge Section */}
          <div className="flex flex-col gap-2 grow items-start min-w-0 relative shrink-0">
            <div className="flex gap-2 items-center relative shrink-0">
              <h1 className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] whitespace-nowrap">
                {title}
              </h1>
              {badge && (
                <Badge color="brand">
                  {badge}
                </Badge>
              )}
            </div>
            {helpText && (
              <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] whitespace-nowrap">
                {helpText}
              </p>
            )}
          </div>

          {/* Actions Section */}
          {variant === 'search' && (
            <div className="flex gap-3 items-center relative shrink-0">
              <div className="flex flex-col gap-2 items-start relative rounded-lg shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
                <SearchField
                  placeholder={searchPlaceholder}
                  value={searchValue}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="w-[240px]"
                />
              </div>
              <Button variant="neutral" leftIcon={<FilterLinesIcon className="w-4 h-4" />}>
                Filters
              </Button>
            </div>
          )}

          {variant !== 'search' && renderActions()}
        </div>

        {/* Tabs Section */}
        {variant === 'tabs' && (
          <div className="flex items-center justify-between relative shrink-0 w-full">
            {renderInlineTabs()}
            {renderActions()}
          </div>
        )}

        {variant === 'dashboard' && (
          <div className="flex items-center justify-between relative shrink-0 w-full">
            {renderInlineTabs()}
            {renderActions()}
          </div>
        )}

        {(variant === 'buttons' || variant === 'search') && renderTabsGroup()}

        {/* Divider */}
        {showDivider && <Divider />}
      </div>
    );
  }
);

PageHeader.displayName = 'PageHeader';

