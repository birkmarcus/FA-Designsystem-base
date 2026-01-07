'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text
   */
  label?: string;
  /**
   * Description text (shown below label)
   */
  description?: string;
  /**
   * Indeterminate state (shows minus icon)
   */
  indeterminate?: boolean;
}

/**
 * Checkbox Component
 * 
 * A checkbox input component with label and optional description.
 * Supports checked, unchecked, and indeterminate states.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      indeterminate,
      className,
      disabled,
      checked,
      ...props
    },
    ref
  ) => {
    const checkboxId = React.useId();
    const [isChecked, setIsChecked] = React.useState(checked ?? false);
    const [isFocused, setIsFocused] = React.useState(false);

    React.useEffect(() => {
      setIsChecked(checked ?? false);
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsChecked(e.target.checked);
        props.onChange?.(e);
      }
    };

    const checkboxStyles = cn(
      'relative w-4 h-4 rounded', // 16px, 4px border radius
      'transition-all duration-fast',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      
      // Unchecked state
      !isChecked && !indeterminate && [
        'border border-[var(--color-border-default)]',
        'bg-transparent',
        'hover:border-[var(--color-interactive-primaryHover)]',
      ],
      
      // Checked/Indeterminate state
      (isChecked || indeterminate) && [
        'bg-[var(--color-interactive-primary)]',
        'hover:bg-[var(--color-interactive-primaryHover)]',
        'border-transparent',
      ],
      
      // Disabled state
      disabled && [
        'bg-[var(--color-surface-disabled)]',
        'border-transparent',
        'opacity-100',
      ],
    );

    return (
      <div className={cn('flex flex-col items-start', className)}>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              checked={isChecked}
              disabled={disabled}
              className="sr-only"
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
            <label
              htmlFor={checkboxId}
              className={cn(
                checkboxStyles,
                'flex items-center justify-center',
                'cursor-pointer',
                disabled && 'cursor-not-allowed'
              )}
            >
              {/* Check icon */}
              {(isChecked || indeterminate) && (
                <div className="w-3 h-3 flex items-center justify-center">
                  {indeterminate ? (
                    // Minus icon for indeterminate
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        stroke={disabled ? 'var(--color-icon-disabled)' : 'var(--color-text-inverse)'}
                        strokeWidth={2}
                        strokeLinecap="round"
                        d="M3 6h6"
                      />
                    </svg>
                  ) : (
                    // Check icon
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        stroke={disabled ? 'var(--color-icon-disabled)' : 'var(--color-text-inverse)'}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 6l3 3 5-6"
                      />
                    </svg>
                  )}
                </div>
              )}
              
              {/* Focus ring */}
              {isFocused && (
                <div className="absolute inset-0 border-2 border-[var(--color-border-focus)] rounded-[6px] -inset-1 pointer-events-none" />
              )}
            </label>
          </div>
          
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                'font-primary font-medium text-base leading-5',
                'text-[var(--color-text-primary)]',
                disabled && 'text-[var(--color-text-disabled)] cursor-not-allowed',
                !disabled && 'cursor-pointer'
              )}
            >
              {label}
            </label>
          )}
        </div>
        
        {description && (
          <div className="flex gap-2 items-center mt-0">
            <div className="w-4 shrink-0" /> {/* Spacer */}
            <p
              className={cn(
                'font-primary font-normal text-sm leading-4',
                'text-[var(--color-text-tertiary)]',
                disabled && 'text-[var(--color-text-disabled)]'
              )}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

