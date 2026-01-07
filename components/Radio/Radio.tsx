'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text
   */
  label?: string;
  /**
   * Description text (shown below label)
   */
  description?: string;
}

/**
 * Radio Component
 * 
 * A radio button input component with label and optional description.
 * Radio buttons should be grouped using the same name attribute.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      description,
      className,
      disabled,
      checked,
      ...props
    },
    ref
  ) => {
    const radioId = React.useId();
    const [isFocused, setIsFocused] = React.useState(false);

    const radioStyles = cn(
      'relative w-4 h-4 rounded-full', // 16px, full circle
      'border-2 transition-all duration-fast',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      
      // Unchecked state
      !checked && [
        'border-[var(--color-border-default)]',
        'bg-transparent',
        'hover:border-[var(--color-interactive-primaryHover)]',
      ],
      
      // Checked state
      checked && [
        'border-[var(--color-interactive-primary)]',
        'bg-transparent',
        'hover:border-[var(--color-interactive-primaryHover)]',
      ],
      
      // Disabled state
      disabled && [
        'border-[var(--color-border-default)]',
        'bg-transparent',
      ],
    );

    return (
      <div className={cn('flex flex-col items-start', className)}>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <input
              ref={ref}
              type="radio"
              id={radioId}
              checked={checked}
              disabled={disabled}
              className="sr-only"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
            <label
              htmlFor={radioId}
              className={cn(
                radioStyles,
                'flex items-center justify-center cursor-pointer',
                disabled && 'cursor-not-allowed'
              )}
            >
              {/* Inner circle when checked */}
              {checked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={cn(
                      'w-2 h-2 rounded-full',
                      disabled ? 'bg-[var(--color-surface-disabled)]' : 'bg-[var(--color-interactive-primary)]'
                    )}
                  />
                </div>
              )}
              
              {/* Focus ring */}
              {isFocused && (
                <div className="absolute inset-0 border-2 border-[var(--color-border-focus)] rounded-full -inset-1 pointer-events-none" />
              )}
            </label>
          </div>
          
          {label && (
            <label
              htmlFor={radioId}
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
          <div className="flex gap-3 items-center mt-0">
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

Radio.displayName = 'Radio';

