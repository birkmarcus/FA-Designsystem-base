'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { GroupField } from '@/components/GroupField';

export interface CheckboxOption {
  /**
   * Option label
   */
  label: string;
  /**
   * Option value
   */
  value: string;
  /**
   * Option description (optional)
   */
  description?: string;
  /**
   * Icon element (optional, shown on the left)
   */
  icon?: React.ReactNode;
  /**
   * Whether option is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  /**
   * Group label (optional)
   */
  label?: string;
  /**
   * Group description (optional)
   */
  description?: string;
  /**
   * Checkbox options
   */
  options: CheckboxOption[];
  /**
   * Selected values (array of option values)
   */
  value?: string[];
  /**
   * Default selected values (uncontrolled)
   */
  defaultValue?: string[];
  /**
   * onChange handler
   */
  onChange?: (selectedValues: string[]) => void;
  /**
   * Disabled state (applies to all checkboxes)
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Orientation: 'vertical' or 'horizontal'
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
}

/**
 * CheckboxGroup Component
 * 
 * A group of checkbox fields (using GroupField components) that can be selected independently.
 * Supports multiple selection, icons, labels, and descriptions.
 * Reuses the GroupField component for consistent styling.
 */
export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      label,
      description,
      options,
      value,
      defaultValue,
      onChange,
      disabled = false,
      className,
      orientation = 'vertical',
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(
      value || defaultValue || []
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValues(value);
      }
    }, [value]);

    const handleChange = (optionValue: string, checked: boolean) => {
      if (disabled) return;

      const newSelectedValues = checked
        ? [...selectedValues, optionValue]
        : selectedValues.filter((v) => v !== optionValue);

      setSelectedValues(newSelectedValues);
      onChange?.(newSelectedValues);
    };

    const groupStyles = cn(
      'flex flex-col',
      orientation === 'horizontal' && 'flex-row flex-wrap gap-4',
      orientation === 'vertical' && 'gap-4',
      className
    );

    return (
      <div ref={ref} className={groupStyles} role="group" aria-label={label}>
        {/* Group Label */}
        {label && (
          <div className="mb-2">
            <p className={cn(
              'font-primary font-medium text-base leading-5',
              'text-[var(--color-text-primary)]',
              disabled && 'text-[var(--color-text-disabled)]'
            )}>
              {label}
            </p>
            {description && (
              <p className={cn(
                'font-primary font-normal text-sm leading-4 mt-1',
                'text-[var(--color-text-tertiary)]',
                disabled && 'text-[var(--color-text-disabled)]'
              )}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Checkbox Group Fields */}
        <div className={cn(
          'flex flex-col',
          orientation === 'horizontal' && 'flex-row flex-wrap gap-4',
          orientation === 'vertical' && 'gap-4'
        )}>
          {options.map((option) => (
            <GroupField
              key={option.value}
              type="checkbox"
              label={option.label}
              description={option.description}
              icon={option.icon}
              selected={selectedValues.includes(option.value)}
              disabled={disabled || option.disabled}
              onChange={(checked) => handleChange(option.value, checked)}
            />
          ))}
        </div>
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

