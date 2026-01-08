'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text (shown above input)
   */
  label?: string;
  /**
   * Description text (shown below label, above input)
   */
  description?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Value (controlled)
   */
  value?: string;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * onChange handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * onClear handler (called when clear button is clicked)
   */
  onClear?: () => void;
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
 * SearchField Component
 * 
 * A search input field with search icon, clear button, and optional label/description.
 * Supports default, focused, and disabled states.
 */
export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      label,
      description,
      placeholder = 'Search...',
      value,
      defaultValue,
      onChange,
      onClear,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value || defaultValue || '');
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Merge refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const displayValue = value !== undefined ? value : internalValue;
    const showClearButton = displayValue && displayValue.length > 0 && !disabled;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      }
    };

    const handleClear = () => {
      if (!disabled) {
        if (value === undefined) {
          setInternalValue('');
        }
        onClear?.();
        // Trigger onChange with empty value
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange?.(syntheticEvent);
        inputRef.current?.focus();
      }
    };

    const inputContainerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'border border-[var(--color-border-default)]',
      'flex gap-2 h-11 items-center',
      'min-w-[240px] px-4 py-3',
      'rounded-lg',
      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05),0px_1px_4px_0px_rgba(12,12,13,0.1)]', // Drop shadow from Figma
      'transition-all duration-fast',
      
      // Focus state
      isFocused && !disabled && [
        'border-[var(--color-border-default)]',
      ],
      
      // Disabled state
      disabled && [
        'bg-[var(--color-surface-disabled)]',
        'border-[var(--color-border-default)]',
        'cursor-not-allowed',
      ],
    );

    const inputStyles = cn(
      'flex-1 font-primary font-normal text-base leading-5',
      'text-[var(--color-text-primary)]',
      'bg-transparent',
      'outline-none',
      'border-none',
      'w-full',
      'placeholder:text-[var(--color-text-tertiary)]',
      disabled && 'text-[var(--color-text-disabled)] cursor-not-allowed',
    );

    // Search icon component
    const SearchIcon = () => (
      <svg
        className="w-4 h-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    );

    // Clear/X icon component
    const ClearIcon = () => (
      <svg
        className="w-4 h-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

    return (
      <div className={cn('relative flex flex-col gap-2', className)}>
        {/* Label */}
        {label && (
          <p className={cn(
            'font-primary font-normal text-base leading-5',
            'text-[var(--color-text-primary)]',
            disabled && 'text-[var(--color-text-disabled)]'
          )}>
            {label}
          </p>
        )}
        
        {/* Description */}
        {description && (
          <p className={cn(
            'font-primary font-normal text-sm leading-4',
            'text-[var(--color-text-tertiary)]',
            disabled && 'text-[var(--color-text-disabled)]'
          )}>
            {description}
          </p>
        )}
        
        {/* Input Container */}
        <div className="relative">
          <div className={inputContainerStyles}>
            {/* Search Icon */}
            <div className={cn(
              'flex items-center justify-center shrink-0',
              'text-[var(--color-icon-primary)]',
              disabled && 'text-[var(--color-icon-disabled)]'
            )}>
              <SearchIcon />
            </div>
            
            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={displayValue}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={inputStyles}
              aria-label={label || 'Search'}
              {...props}
            />
            
            {/* Clear Button */}
            {showClearButton && (
              <button
                type="button"
                onClick={handleClear}
                className={cn(
                  'flex items-center justify-center shrink-0',
                  'text-[var(--color-icon-primary)]',
                  'hover:text-[var(--color-text-primary)]',
                  'transition-colors duration-fast',
                  'cursor-pointer',
                  'p-1 -mr-1' // Extra padding for better click target
                )}
                aria-label="Clear search"
              >
                <ClearIcon />
              </button>
            )}
          </div>
          
          {/* Focus ring */}
          {isFocused && !disabled && (
            <div className="absolute inset-[-4px] border-2 border-[var(--color-border-focus)] rounded-xl pointer-events-none" />
          )}
        </div>
      </div>
    );
  }
);

SearchField.displayName = 'SearchField';


