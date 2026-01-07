'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Radio } from '@/components/Radio';
import { Checkbox } from '@/components/Checkbox';

export type GroupFieldType = 'radio' | 'checkbox';

export interface GroupFieldProps {
  /**
   * Label text
   */
  label: string;
  /**
   * Description text (shown below label)
   */
  description?: string;
  /**
   * Icon element (optional, shown on the left)
   */
  icon?: React.ReactNode;
  /**
   * Type of input: 'radio' or 'checkbox'
   * @default 'radio'
   */
  type?: GroupFieldType;
  /**
   * Selected/checked state
   * @default false
   */
  selected?: boolean;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Name attribute for radio buttons (required for radio type)
   */
  name?: string;
  /**
   * Value attribute
   */
  value?: string;
  /**
   * onChange handler
   */
  onChange?: (checked: boolean) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * GroupField Component
 * 
 * A card-like component for grouping radio buttons or checkboxes.
 * Supports icon, label, description, and various states.
 */
export const GroupField = React.forwardRef<HTMLDivElement, GroupFieldProps>(
  (
    {
      label,
      description,
      icon,
      type = 'radio',
      selected = false,
      disabled = false,
      name,
      value,
      onChange,
      className,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = () => {
      if (!disabled && onChange) {
        onChange(!selected);
      }
    };

    const containerStyles = cn(
      'relative flex items-start p-4 rounded-lg transition-all duration-fast',
      'cursor-pointer',
      'border',
      
      // Selected state
      selected && [
        'bg-[var(--color-surface-unselected)]', // #f6f6fc
        'border-[var(--color-interactive-primary)]', // #4d4dbb when selected
      ],
      
      // Unselected state
      !selected && [
        'bg-[var(--color-background-surface)]', // white
        'border-[var(--color-border-selected)]', // #ccccec
      ],
      
      // Hover state
      !disabled && !selected && isHovered && [
        'border-[var(--color-border-selected)]',
      ],
      
      // Focus state
      isFocused && [
        'border-[var(--color-border-focus)]',
      ],
      
      // Disabled state
      disabled && [
        'bg-[var(--color-background-surface)]',
        'border-[var(--color-border-default)]', // #ebebec
        'cursor-not-allowed',
        'opacity-100',
      ],
      
      className
    );

    const iconWrapperStyles = cn(
      'flex items-center justify-center p-2 rounded-full shrink-0',
      'transition-colors duration-fast',
      
      // Selected state - icon wrapper background
      selected && [
        'bg-[var(--color-surface-iconWrapperHover)]',
      ],
      
      // Unselected state
      !selected && [
        'bg-[var(--color-surface-unselected)]', // #f6f6fc
      ],
      
      // Disabled state
      disabled && [
        'bg-[var(--color-surface-unselected)]',
      ],
    );

    return (
      <div
        ref={ref}
        className={containerStyles}
        onClick={handleClick}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={disabled ? -1 : 0}
        role={type === 'radio' ? 'radio' : 'checkbox'}
        aria-checked={selected}
        aria-disabled={disabled}
      >
        {/* Content section */}
        <div className="flex gap-4 grow items-start min-w-0">
          {/* Icon (if provided) */}
          {icon && (
            <div className={iconWrapperStyles}>
              <div className="w-4 h-4 flex items-center justify-center text-[var(--color-icon-primary)]">
                {icon}
              </div>
            </div>
          )}
          
          {/* Text content */}
          <div className="flex flex-col grow min-w-0">
            <p className={cn(
              'font-primary font-normal text-base leading-5',
              'text-[var(--color-text-primary)]',
              disabled && 'text-[var(--color-text-disabled)]'
            )}>
              {label}
            </p>
            {description && (
              <p className={cn(
                'font-primary font-normal text-sm leading-4 mt-0',
                'text-[var(--color-text-tertiary)]',
                disabled && 'text-[var(--color-text-disabled)]'
              )}>
                {description}
              </p>
            )}
          </div>
        </div>
        
        {/* Radio/Checkbox input */}
        <div className="flex flex-col items-start shrink-0 ml-1">
          {type === 'radio' ? (
            <Radio
              name={name}
              checked={selected}
              disabled={disabled}
              value={value}
              onChange={(e) => {
                e.stopPropagation();
                onChange?.(e.target.checked);
              }}
              className="m-0"
            />
          ) : (
            <Checkbox
              checked={selected}
              disabled={disabled}
              onChange={(e) => {
                e.stopPropagation();
                onChange?.(e.target.checked);
              }}
              className="m-0"
            />
          )}
        </div>
        
        {/* Focus ring */}
        {isFocused && (
          <div className="absolute inset-[-5px] border-2 border-[var(--color-border-focus)] rounded-xl pointer-events-none" />
        )}
      </div>
    );
  }
);

GroupField.displayName = 'GroupField';

