'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/Checkbox';

export interface DropdownRowProps {
  /**
   * Label text
   */
  label: string;
  /**
   * Whether to show checkbox
   * @default false
   */
  checkbox?: boolean;
  /**
   * Checked state (when checkbox is shown)
   * @default false
   */
  checked?: boolean;
  /**
   * Indeterminate state (when checkbox is shown)
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Hover state (controlled externally)
   * @default false
   */
  hovered?: boolean;
  /**
   * onClick handler
   */
  onClick?: () => void;
  /**
   * onChange handler for checkbox
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * DropdownRow Component
 * 
 * A single row item in a dropdown list.
 * Can display a label with optional checkbox.
 */
export const DropdownRow = React.forwardRef<HTMLDivElement, DropdownRowProps>(
  (
    {
      label,
      checkbox = false,
      checked = false,
      indeterminate = false,
      disabled = false,
      hovered = false,
      onClick,
      onCheckedChange,
      className,
    },
    ref
  ) => {
    const rowStyles = cn(
      'flex items-center min-h-11 px-3 py-3 relative w-full',
      'transition-colors duration-fast',
      'cursor-pointer',
      
      // Hover state
      hovered && !disabled && [
        'bg-[var(--color-background-surfaceTertiary)]', // #f6f6fc
        'rounded-lg',
      ],
      
      // Disabled state
      disabled && [
        'cursor-not-allowed',
        'opacity-60',
      ],
      
      className
    );

    const handleClick = () => {
      if (!disabled) {
        if (checkbox && onCheckedChange) {
          onCheckedChange(!checked);
        } else {
          onClick?.();
        }
      }
    };

    return (
      <div
        ref={ref}
        className={rowStyles}
        onClick={handleClick}
        role={checkbox ? 'checkbox' : 'option'}
        aria-checked={checkbox ? checked : undefined}
        aria-disabled={disabled}
      >
        {checkbox ? (
          <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            disabled={disabled}
            label={label}
            onChange={(e) => {
              e.stopPropagation();
              onCheckedChange?.(e.target.checked);
            }}
            className="m-0 w-full"
          />
        ) : (
          <p className={cn(
            'font-primary font-medium text-base leading-5',
            'text-[var(--color-text-primary)]',
            'w-full',
            disabled && 'text-[var(--color-text-disabled)]'
          )}>
            {label}
          </p>
        )}
      </div>
    );
  }
);

DropdownRow.displayName = 'DropdownRow';

