'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

export interface BannerProps {
  /**
   * Main message text
   */
  message: string;
  /**
   * Link text (e.g., "Cookie Policy")
   */
  linkText?: string;
  /**
   * Link URL
   */
  linkUrl?: string;
  /**
   * Label for the primary action button
   * @default 'Allow'
   */
  primaryActionLabel?: string;
  /**
   * Label for the secondary action button
   * @default 'Decline'
   */
  secondaryActionLabel?: string;
  /**
   * Callback when primary action is clicked
   */
  onPrimaryAction?: () => void;
  /**
   * Callback when secondary action is clicked
   */
  onSecondaryAction?: () => void;
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
  /**
   * Show close button
   * @default true
   */
  showClose?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Banner Component
 * 
 * A banner component for displaying important messages with action buttons.
 * Commonly used for cookie consent, announcements, or notifications.
 */
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      message,
      linkText,
      linkUrl,
      primaryActionLabel = 'Allow',
      secondaryActionLabel = 'Decline',
      onPrimaryAction,
      onSecondaryAction,
      onClose,
      showClose = true,
      className,
    },
    ref
  ) => {
    // Flag icon component
    const FlagIcon = () => (
      <svg width="22" height="22" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px' }}>
        <path d="M12.0676 4.97217H18.0969C18.5442 4.97217 18.7679 4.97217 18.8987 5.06621C19.0128 5.14826 19.0871 5.27456 19.1034 5.41416C19.1221 5.57417 19.0135 5.76967 18.7962 6.16068L17.3267 8.80588C17.2479 8.94768 17.2085 9.01858 17.1931 9.09366C17.1794 9.16012 17.1794 9.22866 17.1931 9.29512C17.2085 9.3702 17.2479 9.4411 17.3267 9.5829L18.7962 12.2281C19.0135 12.6191 19.1221 12.8146 19.1034 12.9746C19.0871 13.1142 19.0128 13.2405 18.8987 13.3226C18.7679 13.4166 18.5442 13.4166 18.0969 13.4166H10.501C9.94093 13.4166 9.6609 13.4166 9.44699 13.3076C9.25882 13.2117 9.10584 13.0588 9.00997 12.8706C8.90098 12.6567 8.90098 12.3767 8.90098 11.8166V9.19439M5.20654 19.7502L0.98432 2.86133M2.5677 9.19444H10.4676C11.0277 9.19444 11.3077 9.19444 11.5216 9.08545C11.7098 8.98958 11.8628 8.8366 11.9587 8.64844C12.0676 8.43452 12.0676 8.1545 12.0676 7.59445V2.35C12.0676 1.78995 12.0676 1.50992 11.9587 1.29601C11.8628 1.10785 11.7098 0.954867 11.5216 0.858993C11.3077 0.75 11.0277 0.75 10.4676 0.75H2.50576C1.80724 0.75 1.45798 0.75 1.2191 0.894736C1.00973 1.02159 0.854165 1.22084 0.78188 1.45472C0.699406 1.72158 0.784118 2.06041 0.95354 2.73807L2.5677 9.19444Z" stroke="#000020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '19px' }}/>
      </svg>
    );

    // Close icon component
    const CloseIcon = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4l8 8" stroke="#000020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );

    const bannerStyles = cn(
      'bg-[var(--color-background-neutral)]', // Light gray background
      'border border-[var(--color-border-default)]',
      'rounded-2xl', // 16px border radius
      'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop shadow
      'p-[var(--spacing-primitive-3)]', // 12px padding
      className
    );

    const iconWrapperStyles = cn(
      'bg-[var(--color-background-surface)]',
      'border border-[var(--color-border-default)]',
      'rounded-lg', // 8px border radius
      'p-[var(--spacing-primitive-2)]', // 8px padding
      'flex items-center justify-center',
      'shrink-0',
      'w-fit h-fit' // fit-content icon wrapper
    );

    return (
      <div ref={ref} className={bannerStyles}>
        <div className="flex items-center justify-between gap-[var(--spacing-primitive-3)]">
          {/* Left section: Icon + Text */}
          <div className="flex gap-[var(--spacing-primitive-3)] items-center flex-1 min-w-0 h-fit">
            {/* Icon wrapper */}
            <div className={iconWrapperStyles}>
              <FlagIcon />
            </div>

            {/* Text content */}
            <div className="flex items-center flex-1 min-w-0">
              <p className="font-primary text-base leading-5 text-[var(--color-text-primary)]">
                <span className="font-medium h-[19px] w-fit">{message}</span>
                {linkText && (
                  <>
                    <span className="font-normal text-[var(--color-text-tertiary)]"> Read our </span>
                    {linkUrl ? (
                      <a
                        href={linkUrl}
                        className="font-normal text-[var(--color-text-tertiary)] underline decoration-solid underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        {linkText}
                      </a>
                    ) : (
                      <span className="font-normal text-[var(--color-text-tertiary)] underline decoration-solid underline-offset-2">{linkText}</span>
                    )}
                    <span className="font-normal text-[var(--color-text-tertiary)]">.</span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right section: Buttons + Close */}
          <div className="flex gap-[var(--spacing-primitive-4)] items-center shrink-0">
            {/* Action buttons */}
            <div className="flex gap-[var(--spacing-primitive-2)] items-center w-fit">
              {secondaryActionLabel && onSecondaryAction && (
                <Button
                  variant="neutral"
                  size="medium"
                  onClick={onSecondaryAction}
                >
                  {secondaryActionLabel}
                </Button>
              )}
              {primaryActionLabel && onPrimaryAction && (
                <Button
                  variant="primary"
                  size="medium"
                  onClick={onPrimaryAction}
                >
                  {primaryActionLabel}
                </Button>
              )}
            </div>

            {/* Close button */}
            {showClose && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center shrink-0 w-4 h-4 text-[var(--color-icon-primary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
                aria-label="Close banner"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Banner.displayName = 'Banner';

