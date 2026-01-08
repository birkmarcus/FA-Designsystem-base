'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { Checkbox } from '@/components/Checkbox';

export type CTALayout = 'vertical' | 'horizontal' | 'newsletter';

export interface CTAProps {
  /**
   * Layout variant
   * @default 'vertical'
   */
  layout?: CTALayout;
  /**
   * Label text (shown above heading)
   */
  label?: string;
  /**
   * Heading text
   */
  heading?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Primary button label
   */
  primaryButtonLabel?: string;
  /**
   * Secondary button label
   */
  secondaryButtonLabel?: string;
  /**
   * Callback when primary button is clicked
   */
  onPrimaryClick?: () => void;
  /**
   * Callback when secondary button is clicked
   */
  onSecondaryClick?: () => void;
  /**
   * Newsletter form heading
   */
  formHeading?: string;
  /**
   * Newsletter form help text
   */
  formHelpText?: string;
  /**
   * Show form heading section
   * @default true
   */
  showFormHeading?: boolean;
  /**
   * Newsletter input placeholder
   */
  inputPlaceholder?: string;
  /**
   * Newsletter checkbox label
   */
  checkboxLabel?: string;
  /**
   * Newsletter checkbox checked state
   */
  checkboxChecked?: boolean;
  /**
   * Newsletter checkbox onChange handler
   */
  onCheckboxChange?: (checked: boolean) => void;
  /**
   * Newsletter form onSubmit handler
   */
  onSubmit?: (email: string) => void;
  /**
   * Mobile responsive mode
   * @default false
   */
  mobile?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * CTA Component
 * 
 * A call-to-action component with three layout variants: Vertical, Horizontal, and Newsletter.
 * Supports responsive mobile layouts with adjusted spacing and typography.
 */
export const CTA = React.forwardRef<HTMLDivElement, CTAProps>(
  (
    {
      layout = 'vertical',
      label,
      heading,
      description,
      primaryButtonLabel,
      secondaryButtonLabel,
      onPrimaryClick,
      onSecondaryClick,
      formHeading,
      formHelpText,
      showFormHeading = true,
      inputPlaceholder = 'Type in email',
      checkboxLabel,
      checkboxChecked = false,
      onCheckboxChange,
      onSubmit,
      mobile = false,
      className,
    },
    ref
  ) => {
    const [email, setEmail] = React.useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(checkboxChecked);

    React.useEffect(() => {
      setIsCheckboxChecked(checkboxChecked);
    }, [checkboxChecked]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsCheckboxChecked(e.target.checked);
      onCheckboxChange?.(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (email && onSubmit) {
        onSubmit(email);
      }
    };

    // Responsive values
    const padding = mobile ? 'p-4' : 'p-16'; // 16px mobile, 64px desktop
    const gap = mobile ? 'gap-4' : 'gap-8'; // 16px mobile, 32px desktop
    const headingSize = mobile ? 'text-2xl leading-[40px]' : 'text-[36px] leading-[40px]'; // 24px mobile, 36px desktop
    const formGap = mobile ? 'gap-6' : 'gap-6'; // 24px for both
    const containerGap = mobile ? 'gap-6' : 'gap-0'; // 0px desktop, 24px mobile for vertical

    // Vertical Layout
    if (layout === 'vertical') {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-[var(--color-background-surface)]',
            'flex flex-col',
            containerGap,
            'items-center',
            padding,
            'w-full',
            className
          )}
        >
          <div className={cn('flex flex-col', gap, 'items-center w-full')}>
            {/* Top Section */}
            <div className="flex flex-col gap-2 items-center text-center w-full">
              {label && (
                <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                  {label}
                </p>
              )}
              {heading && (
                <div className={cn('font-primary font-semibold', headingSize, 'text-[var(--color-text-primary)] w-full')}>
                  {heading.split('\n').map((line, index) => (
                    <p key={`${line}-${index}`} className={index === 0 ? 'mb-0' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            {(primaryButtonLabel || secondaryButtonLabel) && (
              <div className="flex gap-4 items-start">
                {secondaryButtonLabel && (
                  <Button
                    variant="neutral"
                    size="medium"
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonLabel}
                  </Button>
                )}
                {primaryButtonLabel && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={onPrimaryClick}
                  >
                    {primaryButtonLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Horizontal Layout
    if (layout === 'horizontal') {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-[var(--color-background-surface)]',
            'flex flex-wrap',
            mobile ? 'gap-4' : 'gap-8',
            'items-end justify-between',
            padding,
            'w-full',
            className
          )}
        >
          <div className={cn(
            'basis-0 flex flex-col',
            gap,
            'grow items-start',
            'max-w-[520px]',
            'min-w-0 md:min-w-[327px]' // No min-width on mobile, 327px on desktop
          )}>
            {/* Top Section */}
            <div className="flex flex-col gap-2 items-center w-full">
              {label && (
                <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                  {label}
                </p>
              )}
              {heading && (
                <p className={cn('font-primary font-semibold', headingSize, 'text-[var(--color-text-primary)] w-full')}>
                  {heading}
                </p>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
                {description}
              </p>
            )}

            {/* Buttons */}
            {(primaryButtonLabel || secondaryButtonLabel) && (
              <div className="flex gap-4 items-start">
                {secondaryButtonLabel && (
                  <Button
                    variant="neutral"
                    size="medium"
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonLabel}
                  </Button>
                )}
                {primaryButtonLabel && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={onPrimaryClick}
                  >
                    {primaryButtonLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Newsletter Layout
    if (layout === 'newsletter') {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-[var(--color-background-surface)]',
            'flex flex-col',
            mobile ? 'gap-6' : 'gap-16',
            'items-center',
            padding,
            'w-full',
            className
          )}
        >
          {/* Text Section */}
          <div className={cn('flex flex-col', gap, 'items-center max-w-[888px] text-center w-full')}>
            {/* Top Section */}
            <div className="flex flex-col gap-2 items-center w-full">
              {label && (
                <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                  {label}
                </p>
              )}
              {heading && (
                <p className={cn('font-primary font-semibold', headingSize, 'text-[var(--color-text-primary)] w-full')}>
                  {heading}
                </p>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
                {description}
              </p>
            )}
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className={cn('flex flex-col', formGap, 'items-start w-full max-w-[300px]')}
          >
            {/* Form Heading */}
            {showFormHeading && (formHeading || formHelpText) && (
              <div className={cn('flex flex-col', gap, 'items-start w-full')}>
                <div className="flex flex-col gap-2 items-center w-full">
                  {formHeading && (
                    <p className={cn('font-primary font-semibold', headingSize, 'text-[var(--color-text-primary)] w-full')}>
                      {formHeading}
                    </p>
                  )}
                  {formHelpText && (
                    <p className="font-primary font-normal text-sm leading-5 text-[var(--color-text-tertiary)] w-full">
                      {formHelpText}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Input and Submit Button */}
            <div className="flex gap-2 items-center justify-center w-full">
              <div className="basis-0 flex flex-col gap-2 grow items-start min-w-0">
                <InputField
                  type="input"
                  placeholder={inputPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  showLabel={false}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="medium"
              >
                Submit
              </Button>
            </div>

            {/* Checkbox */}
            {checkboxLabel && (
              <div className="flex flex-col items-start w-full">
                <div className="flex gap-2 items-center w-full">
                  <Checkbox
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    className="m-0"
                  />
                  <p className="basis-0 grow min-w-0 font-primary font-medium text-base leading-5 text-[var(--color-text-primary)]">
                    {checkboxLabel.split(/(terms & conditions)/i).map((part, index) => {
                      if (part.toLowerCase() === 'terms & conditions') {
                        return (
                          <span key={index} className="underline text-[var(--color-interactive-primary)]">
                            {part}
                          </span>
                        );
                      }
                      return <span key={index}>{part}</span>;
                    })}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      );
    }

    return null;
  }
);

CTA.displayName = 'CTA';

