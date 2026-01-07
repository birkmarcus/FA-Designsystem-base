'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';

export type SelectMode = 'none' | 'multiselect' | 'single';

export interface DropdownItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * Label text
   */
  label: string;
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
}

/**
 * DropdownItem Component
 * 
 * A sub-item component for dropdown lists within ListItem.
 */
export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  (
    {
      label,
      selectMode = 'none',
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
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (selectMode !== 'none' && onCheckedChange) {
        e.preventDefault();
        onCheckedChange(!checked);
      }
      onClick?.(e);
    };

    const itemStyles = cn(
      'flex items-center gap-2',
      'min-h-11', // 44px minimum height
      'px-3 py-3', // 12px padding
      'w-full',
      'font-primary font-medium text-base leading-5 text-[var(--color-text-primary)]',
      'transition-colors duration-fast',
      'hover:bg-[var(--color-background-surfaceTertiary)]', // Surface/tertiary from Figma
      'focus:outline-none focus:bg-[var(--color-background-surfaceTertiary)]',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'text-left',
      'rounded-lg', // 8px border radius for hover state
      className
    );

    return (
      <button
        ref={ref}
        type="button"
        className={itemStyles}
        disabled={disabled}
        onClick={handleClick}
        aria-checked={selectMode !== 'none' ? checked : undefined}
        role={selectMode === 'single' ? 'radio' : selectMode === 'multiselect' ? 'checkbox' : undefined}
        {...props}
      >
        {selectMode === 'multiselect' && (
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
        )}
        
        {selectMode === 'single' && (
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
        )}
        
        <span className="flex-1">{label}</span>
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

