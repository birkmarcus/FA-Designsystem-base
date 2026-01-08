'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type InputFieldType = 'input' | 'textarea';
export type InputFieldState = 'default' | 'filled' | 'focused' | 'disabled' | 'error' | 'success' | 'warning';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'> {
  /**
   * Input field type
   * @default 'input'
   */
  type?: InputFieldType;
  /**
   * Visual state of the input
   * @default 'default'
   */
  state?: InputFieldState;
  /**
   * Label text (shown above input)
   */
  label?: string;
  /**
   * Show label
   * @default true
   */
  showLabel?: boolean;
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * Leading icon (shown on the left side of input)
   */
  icon?: React.ReactNode;
  /**
   * Show icon
   * @default false
   */
  showIcon?: boolean;
  /**
   * Status text (shown below input)
   */
  status?: string;
  /**
   * Show status
   * @default false
   */
  showStatus?: boolean;
  /**
   * Status icon (shown next to status text)
   */
  statusIcon?: React.ReactNode;
  /**
   * Show status icon
   * @default false
   */
  showStatusIcon?: boolean;
  /**
   * Mark field as mandatory (shows (*mandatory))
   * @default false
   */
  mandatory?: boolean;
  /**
   * Mark field as optional (shows (optional))
   * @default false
   */
  optional?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * InputField Component
 * 
 * A versatile input field component supporting both input and textarea types,
 * with multiple states and optional features like labels, icons, and status messages.
 * Based on Figma design specifications.
 */
export const InputField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
  (
    {
      type = 'input',
      state = 'default',
      label,
      showLabel = true,
      placeholder,
      value,
      defaultValue,
      onChange,
      icon,
      showIcon = false,
      status,
      showStatus = false,
      statusIcon,
      showStatusIcon = false,
      mandatory = false,
      optional = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value || defaultValue || '');
    const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    // Merge refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement | HTMLTextAreaElement);

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const displayValue = value !== undefined ? value : internalValue;
    const isDisabled = disabled || state === 'disabled';
    const isFilled = displayValue && displayValue.length > 0;
    // Determine effective state: prioritize explicit state prop, then focus, then filled
    const effectiveState = isDisabled ? 'disabled' : (state !== 'default' ? state : (isFocused ? 'focused' : (isFilled ? 'filled' : 'default')));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!isDisabled) {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      }
    };

    // Border color based on state (from Figma)
    const getBorderColor = () => {
      switch (effectiveState) {
        case 'error':
          return 'border-[#bd1818]'; // Error border from Figma
        case 'success':
          return 'border-[#1e7742]'; // Success border from Figma
        case 'warning':
          return 'border-[#b54708]'; // Warning border from Figma
        case 'disabled':
          return 'border-[var(--color-border-default)]';
        default:
          return 'border-[var(--color-border-default)]';
      }
    };

    // Status text color based on state (from Figma)
    const getStatusColor = () => {
      switch (effectiveState) {
        case 'error':
          return 'text-[#bd1818]'; // Error color from Figma
        case 'success':
          return 'text-[#1e7742]'; // Success color from Figma
        case 'warning':
          return 'text-[#b54708]'; // Warning color from Figma
        case 'disabled':
          return 'text-[var(--color-text-disabled)]';
        default:
          return 'text-[var(--color-text-tertiary)]';
      }
    };

    const inputContainerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'border border-solid',
      getBorderColor(),
      'flex gap-[var(--spacing-primitive-2)]', // 8px gap from Figma
      'items-start',
      'px-[var(--spacing-primitive-3)]', // 12px padding from Figma
      'py-[var(--spacing-primitive-3)]', // 12px padding from Figma
      'rounded-lg', // 8px border radius from Figma
      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop shadow from Figma
      'transition-all duration-fast',
      type === 'input' ? 'min-h-[44px] items-center' : 'h-fit',
      
      // Disabled state
      isDisabled && [
        'bg-[var(--color-surface-disabled)]',
        'cursor-not-allowed',
      ],
    );

    // Input text styles based on state (from Figma)
    const getInputTextStyles = () => {
      if (isDisabled) {
        return 'text-[var(--color-text-disabled)]';
      }
      if (isFilled || displayValue) {
        return 'font-medium text-[var(--color-text-primary)]'; // Medium weight when filled
      }
      return 'font-normal text-[var(--color-text-tertiary)]'; // Regular weight for placeholder
    };

    const inputStyles = cn(
      'flex-1',
      'font-primary',
      'text-base leading-5', // 16px font, 20px line height
      getInputTextStyles(),
      'bg-transparent',
      'outline-none',
      'border-none',
      'w-full',
      'resize-none', // For textarea
      'placeholder:text-[var(--color-text-tertiary)]',
      'placeholder:font-normal',
      isDisabled && 'cursor-not-allowed',
    );

    // Status icon component (default icons for error/success/warning)
    // Using 10.667px size from Figma (approximately 11px)
    const getDefaultStatusIcon = () => {
      if (effectiveState === 'error') {
        return (
          <svg className="w-[10.667px] h-[10.667px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      }
      if (effectiveState === 'success') {
        return (
          <svg className="w-[10.667px] h-[10.667px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      }
      if (effectiveState === 'warning') {
        return (
          <svg className="w-[10.667px] h-[10.667px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      }
      // Default placeholder icon for normal status
      return (
        <svg className="w-[10.667px] h-[10.667px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    };

    const InputComponent = type === 'textarea' ? 'textarea' : 'input';

    return (
      <div className={cn('flex flex-col gap-2 items-start', className)}>
        {/* Label */}
        {showLabel && label && (
          <div className="flex gap-[var(--spacing-gap-sm)] items-start text-nowrap w-full">
            <label className={cn(
              'font-primary font-medium', // Medium weight from Figma
              'text-sm leading-4', // 14px font, 16px line height from Figma
              'text-[var(--color-text-primary)]',
              isDisabled && 'text-[var(--color-text-disabled)]'
            )}>
              {label}
            </label>
            {mandatory && (
              <span className={cn(
                'font-primary font-medium',
                'text-sm leading-4',
                'text-[var(--color-text-tertiary)]'
              )} aria-label="Required field">
                (*mandatory)
              </span>
            )}
            {optional && !mandatory && (
              <span className={cn(
                'font-primary font-medium',
                'text-sm leading-4',
                'text-[var(--color-text-tertiary)]'
              )}>
                (optional)
              </span>
            )}
          </div>
        )}
        
        {/* Input Container */}
        <div className="relative w-full">
          <div className={inputContainerStyles}>
            {/* Input/Textarea */}
            <InputComponent
              ref={inputRef as any}
              value={displayValue}
              placeholder={placeholder}
              disabled={isDisabled}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={inputStyles}
              aria-label={label}
              aria-invalid={effectiveState === 'error'}
              aria-describedby={showStatus && status ? `input-status-${label}` : undefined}
              {...props}
            />
            
            {/* Leading Icon */}
            {showIcon && icon && (
              <div className={cn(
                'flex items-center justify-center shrink-0',
                'w-4 h-4', // 16px icon size from Figma
                'text-[var(--color-icon-primary)]',
                isDisabled && 'text-[var(--color-icon-disabled)]'
              )}>
                {icon}
              </div>
            )}
            
            {/* Textarea resize handle */}
            {type === 'textarea' && (
              <div className="absolute bottom-[3px] right-[3px] w-[13px] h-[13px] pointer-events-none">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M11.6713 0.5L0.5 11.6713M12.5 6.91433L6.91433 12.5" stroke="#9D9DA1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
          
          {/* Focus ring (custom focus indicator) - 2px border, 5px offset from Figma */}
          {effectiveState === 'focused' && !isDisabled && (
            <div className="absolute border-2 border-[var(--color-border-focus)] border-solid rounded-xl pointer-events-none" 
              style={{
                left: '-5px',
                right: '-5px',
                top: type === 'textarea' ? '-5px' : '50%',
                bottom: type === 'textarea' ? '-5px' : 'auto',
                height: type === 'textarea' ? 'calc(100% + 10px)' : 'calc(100% + 10px)',
                transform: type === 'textarea' ? 'none' : 'translateY(-50%)',
              }}
            />
          )}
        </div>
        
        {/* Status Message */}
        {showStatus && status && (
          <div className="flex gap-[var(--spacing-gap-sm)] items-start w-full">
            {showStatusIcon && (
              <div className={cn(
                'flex h-4 items-center justify-center shrink-0', // 16px height from Figma
                getStatusColor()
              )}>
                {statusIcon || getDefaultStatusIcon()}
              </div>
            )}
            <span
              id={`input-status-${label}`}
              className={cn(
                'font-primary font-normal',
                'text-sm leading-4', // 14px font, 16px line height from Figma
                'flex-1',
                getStatusColor()
              )}
            >
              {status}
            </span>
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';


