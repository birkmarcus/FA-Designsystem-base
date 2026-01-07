'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
 * Switch Component
 * 
 * A toggle switch component with label and optional description.
 * Supports checked, unchecked, hover, focus, and disabled states.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
    const switchId = React.useId();
    const [isChecked, setIsChecked] = React.useState(checked ?? false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
      setIsChecked(checked ?? false);
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsChecked(e.target.checked);
        props.onChange?.(e);
      }
    };

    const switchTrackStyles = cn(
      'relative inline-block h-6 w-10 rounded-full transition-all duration-fast', // 24px height, 40px width
      'focus:outline-none',
      'flex-shrink-0',
      
      // Selected state
      isChecked && [
        'bg-[var(--color-interactive-primary)]',
        'hover:bg-[var(--color-interactive-primaryHover)]',
      ],
      
      // Unselected state
      !isChecked && [
        'bg-[var(--color-surface-unselected)]',
        'hover:bg-[var(--color-surface-unselected)]',
        // Hover overlay effect - gradient overlay
        'hover:before:absolute hover:before:inset-0 hover:before:bg-gradient-to-r hover:before:from-black/20 hover:before:to-black/20 hover:before:rounded-full',
      ],
      
      // Disabled state
      disabled && [
        'bg-[var(--color-surface-disabled)]',
        'border border-[var(--color-surface-disabled)]',
        'hover:bg-[var(--color-surface-disabled)]',
        'hover:before:hidden',
      ],
    );

    const knobStyles = cn(
      'absolute top-[2px] w-5 h-5 rounded-full', // 20px x 20px knob
      'bg-[var(--color-background-surface)]', // White background
      'transition-all duration-fast ease-out',
      'flex items-center justify-center',
      'shadow-sm', // Subtle shadow for depth
      
      // Position based on checked state
      isChecked ? 'left-[18px]' : 'left-[2px]',
      
      // Disabled state - slight position adjustment
      disabled && isChecked && 'left-[17px] top-[1px]',
      disabled && !isChecked && 'left-[1px] top-[1px]',
    );

    return (
      <div className={cn('flex flex-col items-start justify-center', className)}>
        <div className="flex gap-3 items-center">
          {label && (
            <label
              htmlFor={switchId}
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
          
          <div className="relative shrink-0 inline-block">
            <input
              ref={ref}
              type="checkbox"
              id={switchId}
              role="switch"
              checked={isChecked}
              disabled={disabled}
              className="sr-only"
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
            <label
              htmlFor={switchId}
              className={cn(
                switchTrackStyles,
                'cursor-pointer',
                'block', // Ensure label is block-level to show background
                disabled && 'cursor-not-allowed'
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={knobStyles}>
                {/* Check icon when checked */}
                {isChecked && (
                  <div 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] flex items-center justify-center"
                    style={{
                      '--check-stroke': disabled 
                        ? 'var(--color-icon-disabled)' 
                        : isHovered && isChecked 
                          ? 'var(--color-interactive-primaryHover)'
                          : 'var(--color-icon-primary)'
                    } as React.CSSProperties}
                  >
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <path
                        stroke="var(--check-stroke)"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1 3l1.5 1.5L5 1"
                      />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Focus ring */}
              {isFocused && (
                <div className="absolute inset-0 border-2 border-[var(--color-border-focus)] rounded-full -inset-[2px] pointer-events-none" />
              )}
            </label>
          </div>
        </div>
        
        {description && (
          <p
            className={cn(
              'font-primary font-normal text-sm leading-4',
              'text-[var(--color-text-tertiary)]',
              disabled && 'text-[var(--color-text-disabled)]'
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

