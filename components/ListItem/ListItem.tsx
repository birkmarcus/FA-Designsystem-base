'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';
import { SelectMode } from './DropdownItem';

export interface ListItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * Label text
   */
  label?: string;
  /**
   * Icon element (left side)
   */
  icon?: React.ReactNode;
  /**
   * Whether to show chevron indicator
   * @default false
   */
  chevron?: boolean;
  /**
   * Whether the dropdown is open (affects chevron direction)
   * @default false
   */
  open?: boolean;
  /**
   * Notification badge content
   */
  notification?: string | number;
  /**
   * Icon-only mode (no label)
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Dropdown sub-items (shown when open)
   */
  children?: React.ReactNode;
  /**
   * Select mode: 'none' (default), 'multiselect' (checkbox), or 'single' (radio)
   * @default 'none'
   */
  selectMode?: SelectMode;
  /**
   * Checked state for select variants
   * @default false
   */
  checked?: boolean;
  /**
   * Indeterminate state for multiselect variant
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Name attribute for radio buttons (required for single select)
   */
  name?: string;
  /**
   * onChange handler for select variants
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * @deprecated Use selectMode="multiselect" instead
   */
  multiselect?: boolean;
}

/**
 * ListItem Component
 * 
 * A list item component for navigation menus and dropdowns.
 * Supports icons, chevrons, notifications, and nested dropdown items.
 */
export const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(
  (
    {
      label,
      icon,
      chevron = false,
      open = false,
      notification,
      iconOnly = false,
      children,
      selectMode,
      multiselect, // Deprecated, kept for backwards compatibility
      checked = false,
      indeterminate = false,
      name,
      onCheckedChange,
      className,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    // Determine select mode (support deprecated multiselect prop)
    const actualSelectMode = selectMode || (multiselect ? 'multiselect' : 'none');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (actualSelectMode !== 'none' && onCheckedChange) {
        e.preventDefault();
        onCheckedChange(!checked);
      }
      onClick?.(e);
    };
    const buttonStyles = cn(
      // Base styles
      'relative inline-flex items-center',
      'h-12', // 48px height
      'px-3 py-2', // 12px horizontal, 8px vertical padding
      'gap-4', // 16px gap between elements
      'rounded-lg', // 8px border radius
      'transition-all duration-fast ease-out',
      'focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'text-left',
      
      // Hover state - Surface/tertiary
      'hover:bg-[var(--color-background-surfaceTertiary)]',
      
          // Focus state - border instead of ring
      'focus:border-2 focus:border-[var(--color-border-focus)]',
      
      // Icon-only mode
      iconOnly && 'p-2',
      
      // Full width when not icon-only
      !iconOnly && 'w-full',
      
      className
    );

    // Icon wrapper styles
    const iconWrapperStyles = cn(
      'flex items-center justify-center',
      'p-1', // 4px padding
      'rounded-full',
      'shrink-0'
    );

    // Chevron icon component
    const ChevronIcon = ({ direction }: { direction: 'up' | 'down' }) => (
      <svg
        className="w-6 h-6 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {direction === 'down' ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        )}
      </svg>
    );

    // Notification badge component
    const NotificationBadge = ({ content, iconOnly }: { content: string | number; iconOnly?: boolean }) => (
      <div className={cn(
        'absolute bg-[var(--color-interactive-primary)] rounded-full shrink-0',
        iconOnly ? 'right-0 top-0' : 'left-[200px] top-px'
      )}>
        <div className="flex items-center justify-center gap-1 px-3 py-1 rounded-2xl">
          <span className="font-primary font-medium text-sm leading-4 text-white text-center whitespace-nowrap">
            {content}
          </span>
        </div>
      </div>
    );

    return (
      <div className={cn('flex flex-col', !iconOnly && 'w-[240px]')}>
        <button
          ref={ref}
          type="button"
          className={buttonStyles}
          disabled={disabled}
          aria-expanded={chevron ? open : undefined}
          aria-haspopup={chevron ? 'true' : undefined}
          aria-label={iconOnly && label ? label : undefined}
          aria-checked={selectMode !== 'none' ? checked : undefined}
          role={selectMode === 'single' ? 'radio' : selectMode === 'multiselect' ? 'checkbox' : undefined}
          onClick={handleClick}
          {...props}
        >
          {actualSelectMode === 'multiselect' ? (
            <div className="shrink-0">
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                disabled={disabled}
                className="m-0"
                onChange={(e) => {
                  e.stopPropagation();
                  onCheckedChange?.(e.target.checked);
                }}
              />
            </div>
          ) : actualSelectMode === 'single' ? (
            <div className="shrink-0">
              <Radio
                name={name}
                checked={checked}
                disabled={disabled}
                className="m-0"
                onChange={(e) => {
                  e.stopPropagation();
                  onCheckedChange?.(e.target.checked);
                }}
              />
            </div>
          ) : icon ? (
            <span className={iconWrapperStyles}>
              <span className="w-6 h-6 flex items-center justify-center text-[var(--color-icon-primary)]">
                {icon}
              </span>
            </span>
          ) : null}
          
          {!iconOnly && label && (
            <span className="flex-1 font-primary font-medium text-base leading-5 text-[var(--color-text-primary)] text-left">
              {label}
            </span>
          )}
          
          {chevron && (
            <span className="w-6 h-6 flex items-center justify-center text-[var(--color-text-tertiary)] shrink-0">
              <ChevronIcon direction={open ? 'up' : 'down'} />
            </span>
          )}
          
          {notification && (
            <NotificationBadge content={notification} iconOnly={iconOnly} />
          )}
        </button>
        
        {open && children && (
          <div className="flex flex-col items-start p-3 rounded-lg w-full">
            {children}
          </div>
        )}
      </div>
    );
  }
);

ListItem.displayName = 'ListItem';

