'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { DropdownRow } from './DropdownRow';

export interface DropdownOption {
  /**
   * Option label
   */
  label: string;
  /**
   * Option value
   */
  value: string;
  /**
   * Whether option is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether option is checked (for checkbox mode)
   * @default false
   */
  checked?: boolean;
  /**
   * Whether option is indeterminate (for checkbox mode)
   * @default false
   */
  indeterminate?: boolean;
}

export interface DropdownProps {
  /**
   * Label text above the select field
   */
  label?: string;
  /**
   * Selected value (displayed in select field)
   */
  value?: string;
  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string;
  /**
   * Icon element (shown on the left in select field)
   */
  icon?: React.ReactNode;
  /**
   * Dropdown options
   */
  options: DropdownOption[];
  /**
   * Whether dropdown is open
   * @default false
   */
  open?: boolean;
  /**
   * Controlled open state
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * onSelect handler (called when option is clicked)
   */
  onSelect?: (value: string) => void;
  /**
   * Whether to show checkboxes (multiselect mode)
   * @default false
   */
  multiselect?: boolean;
  /**
   * onCheckedChange handler (for multiselect mode)
   */
  onCheckedChange?: (value: string, checked: boolean) => void;
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Dropdown Component
 * 
 * A dropdown select component with a select field and dropdown list.
 * Supports single select and multiselect (checkbox) modes.
 */
export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      label,
      value,
      placeholder = 'Select...',
      icon,
      options,
      open = false,
      onOpenChange,
      onSelect,
      multiselect = false,
      onCheckedChange,
      disabled = false,
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(open);
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    React.useEffect(() => {
      setIsOpen(open);
    }, [open]);

    const handleToggle = () => {
      if (!disabled) {
        const newOpen = !isOpen;
        setIsOpen(newOpen);
        onOpenChange?.(newOpen);
      }
    };

    const handleSelect = (optionValue: string) => {
      if (!disabled) {
        if (multiselect) {
          // In multiselect mode, don't close on select
          onSelect?.(optionValue);
        } else {
          // In single select mode, close on select
          setIsOpen(false);
          onOpenChange?.(false);
          onSelect?.(optionValue);
        }
      }
    };

    const handleCheckedChange = (optionValue: string, checked: boolean) => {
      if (!disabled) {
        onCheckedChange?.(optionValue, checked);
      }
    };

    // Find selected option for display
    const selectedOption = options.find(opt => opt.value === value);
    const displayValue = selectedOption?.label || placeholder;

    const selectFieldStyles = cn(
      'bg-[var(--color-background-surface)]',
      'border border-[var(--color-border-default)]',
      'flex gap-2 h-10 items-center',
      'min-w-[240px] px-4 py-3',
      'rounded-lg',
      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop shadow from Figma
      'transition-all duration-fast',
      'cursor-pointer',
      
      // Hover state
      !disabled && 'hover:border-[var(--color-border-default)]',
      
      // Focus state
      isOpen && [
        'border-[var(--color-border-default)]',
      ],
      
      // Disabled state
      disabled && [
        'cursor-not-allowed',
        'opacity-60',
      ],
    );

    const dropdownListStyles = cn(
      'bg-[var(--color-background-surface)]',
      'border border-[var(--color-border-default)]',
      'flex flex-col items-start',
      'p-3',
      'rounded-lg',
      'absolute top-full mt-2',
      'w-full',
      'z-50',
      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop shadow for dropdown list
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

    return (
      <div ref={ref} className={cn('relative flex flex-col gap-2', className)}>
        {/* Label */}
        {label && (
          <p className={cn(
            'font-primary font-medium text-sm leading-4',
            'text-[var(--color-text-primary)]'
          )}>
            {label}
          </p>
        )}
        
        {/* Select Field */}
        <button
          type="button"
          className={selectFieldStyles}
          onClick={handleToggle}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={label || 'Select option'}
        >
          {/* Icon */}
          {icon && (
            <div className="w-4 h-4 flex items-center justify-center shrink-0 text-[var(--color-icon-primary)]">
              {icon}
            </div>
          )}
          
          {/* Value */}
          <span className={cn(
            'flex-1 font-primary font-medium text-base leading-5',
            'text-[var(--color-text-primary)]',
            'text-left',
            !value && 'text-[var(--color-text-tertiary)]'
          )}>
            {displayValue}
          </span>
          
          {/* Chevron */}
          <ChevronIcon direction={isOpen ? 'up' : 'down'} />
        </button>
        
        {/* Dropdown List */}
        {isOpen && (
          <div className={dropdownListStyles}>
            {options.map((option, index) => (
              <DropdownRow
                key={option.value}
                label={option.label}
                checkbox={multiselect}
                checked={option.checked || false}
                indeterminate={option.indeterminate || false}
                disabled={option.disabled || disabled}
                hovered={hoveredIndex === index}
                onClick={() => handleSelect(option.value)}
                onCheckedChange={(checked) => handleCheckedChange(option.value, checked)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

