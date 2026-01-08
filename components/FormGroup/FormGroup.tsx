'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { InputField } from '@/components/InputField';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Dropdown } from '@/components/Dropdown';

export interface FormFieldConfig {
  /**
   * Field type
   */
  type: 'input' | 'textarea' | 'dropdown' | 'checkbox';
  /**
   * Field label
   */
  label?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Field value
   */
  value?: string;
  /**
   * Default value
   */
  defaultValue?: string;
  /**
   * Whether field is mandatory
   */
  mandatory?: boolean;
  /**
   * Whether field is optional
   */
  optional?: boolean;
  /**
   * Leading icon
   */
  icon?: React.ReactNode;
  /**
   * Show icon
   */
  showIcon?: boolean;
  /**
   * Input type (for input fields)
   */
  inputType?: 'text' | 'email' | 'password' | 'tel' | 'url';
  /**
   * Dropdown options (for dropdown fields)
   */
  options?: Array<{ label: string; value: string }>;
  /**
   * Checkbox label (for checkbox fields)
   */
  checkboxLabel?: string;
  /**
   * Checkbox description (for checkbox fields)
   */
  checkboxDescription?: string;
  /**
   * Checkbox checked state
   */
  checked?: boolean;
  /**
   * Link text (for checkbox with link)
   */
  linkText?: string;
  /**
   * Link href (for checkbox with link)
   */
  linkHref?: string;
  /**
   * onChange handler
   */
  onChange?: (value: string | boolean) => void;
  /**
   * Additional props for InputField
   */
  inputProps?: any;
}

export interface FormButtonConfig {
  /**
   * Button label
   */
  label: string;
  /**
   * Button variant
   */
  variant?: 'primary' | 'neutral' | 'subtle';
  /**
   * onClick handler
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
}

export interface FormLinkConfig {
  /**
   * Link text
   */
  text: string;
  /**
   * Link href
   */
  href?: string;
  /**
   * onClick handler
   */
  onClick?: () => void;
}

export interface FormGroupProps {
  /**
   * Heading text
   */
  heading?: string;
  /**
   * Show heading
   * @default true
   */
  showHeading?: boolean;
  /**
   * Help text (shown below heading)
   */
  helpText?: string;
  /**
   * Show help text
   * @default true
   */
  showHelpText?: boolean;
  /**
   * Form fields configuration
   */
  fields: FormFieldConfig[];
  /**
   * Buttons configuration
   */
  buttons?: FormButtonConfig[];
  /**
   * Links configuration (shown below buttons)
   */
  links?: FormLinkConfig[];
  /**
   * Form width
   * @default '300px'
   */
  width?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * FormGroup Component
 * 
 * A flexible form group component that can render various form layouts
 * with heading, help text, fields, buttons, and links.
 */
export const FormGroup = React.forwardRef<HTMLFormElement, FormGroupProps>(
  (
    {
      heading,
      showHeading = true,
      helpText,
      showHelpText = true,
      fields,
      buttons,
      links,
      width = '300px',
      className,
    },
    ref
  ) => {
    const containerStyles = cn(
      'flex flex-col',
      'items-start',
      'gap-6', // 24px gap between sections
      className
    );

    const headingStyles = cn(
      'flex flex-col',
      'gap-2', // 8px gap between heading and help text
      'items-start',
      'w-full',
    );

    const headingTextStyles = cn(
      'font-primary font-semibold',
      'text-[30px] leading-[40px]', // 30px font, 40px line height
      'text-[var(--color-text-primary)]',
      'w-full',
    );

    const helpTextStyles = cn(
      'font-primary font-normal',
      'text-base leading-5', // 16px font, 20px line height
      'text-[var(--color-text-tertiary)]',
      'w-full',
    );

    const fieldsStyles = cn(
      'flex flex-col',
      'gap-6', // 24px gap between fields
      'items-start',
      'w-full',
    );

    const buttonsStyles = cn(
      'flex',
      'gap-2', // 8px gap between buttons
      'items-center',
      'justify-center',
      'w-full',
    );

    const linksStyles = cn(
      'flex',
      'items-center',
      'w-full',
    );

    const linkStyles = cn(
      'font-primary font-normal',
      'text-base leading-5', // 16px font, 20px line height
      'text-[var(--color-interactive-primary)]',
      'hover:text-[var(--color-interactive-primaryHover)]',
      'transition-colors',
      'duration-[var(--motion-primitive-duration-base)]',
      'cursor-pointer',
    );

    return (
      <form
        ref={ref}
        className={containerStyles}
        style={{ width }}
      >
        {/* Heading Section */}
        {showHeading && (heading || helpText) && (
          <div className={headingStyles}>
            {heading && (
              <h2 className={headingTextStyles}>
                {heading}
              </h2>
            )}
            {showHelpText && helpText && (
              <p className={helpTextStyles}>
                {helpText}
              </p>
            )}
          </div>
        )}

        {/* Fields Section */}
        <div className={fieldsStyles}>
          {fields.map((field, index) => {
            if (field.type === 'checkbox') {
              return (
                <div key={index} className="w-full">
                  {field.linkText ? (
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex gap-2 items-center">
                        <Checkbox
                          checked={field.checked}
                          onChange={(e) => field.onChange?.(e.target.checked)}
                          {...field.inputProps}
                        />
                        <label className="font-primary font-medium text-base leading-5 text-[var(--color-text-primary)]">
                          {field.checkboxLabel}
                          {' '}
                          <a
                            href={field.linkHref}
                            className={linkStyles}
                            onClick={(e) => {
                              e.preventDefault();
                              field.onChange?.(true);
                            }}
                          >
                            {field.linkText}
                          </a>
                        </label>
                      </div>
                      {field.checkboxDescription && (
                        <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] pl-6">
                          {field.checkboxDescription}
                        </p>
                      )}
                    </div>
                  ) : (
                    <Checkbox
                      label={field.checkboxLabel}
                      description={field.checkboxDescription}
                      checked={field.checked}
                      onChange={(e) => field.onChange?.(e.target.checked)}
                      {...field.inputProps}
                    />
                  )}
                </div>
              );
            }

            if (field.type === 'dropdown') {
              return (
                <div key={index} className="w-full">
                  <Dropdown
                    label={field.label}
                    value={field.value}
                    placeholder={field.placeholder}
                    icon={field.icon}
                    options={field.options || []}
                    onChange={(value: string) => field.onChange?.(value)}
                    {...field.inputProps}
                  />
                </div>
              );
            }

            // For input fields, pass HTML input type through inputProps
            const inputPropsWithType = field.inputType && field.type === 'input'
              ? { ...field.inputProps, type: field.inputType }
              : field.inputProps;

            return (
              <div key={index} className="w-full">
                <InputField
                  type={field.type === 'textarea' ? 'textarea' : 'input'}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={field.value}
                  defaultValue={field.defaultValue}
                  mandatory={field.mandatory}
                  optional={field.optional}
                  icon={field.icon}
                  showIcon={field.showIcon}
                  onChange={(e) => field.onChange?.(e.target.value)}
                  {...inputPropsWithType}
                />
              </div>
            );
          })}
        </div>

        {/* Buttons Section */}
        {buttons && buttons.length > 0 && (
          <div className={buttonsStyles}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || 'primary'}
                onClick={button.onClick}
                type={button.type || 'button'}
                className="flex-1"
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}

        {/* Links Section */}
        {links && links.length > 0 && (
          <div className={linksStyles}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={linkStyles}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </form>
    );
  }
);

FormGroup.displayName = 'FormGroup';

