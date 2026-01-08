'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  /**
   * Whether modal is open
   */
  open: boolean;
  
  /**
   * Callback when modal should close
   */
  onClose: () => void;
  
  /**
   * Modal heading
   */
  heading?: string;
  
  /**
   * Modal content - can be a string or React node
   */
  children: React.ReactNode;
  
  /**
   * Whether to show close button
   * @default true
   */
  showClose?: boolean;
  
  /**
   * Additional CSS classes for modal container
   */
  className?: string;
  
  /**
   * Additional CSS classes for content wrapper
   */
  contentClassName?: string;
  
  /**
   * Whether to close on backdrop click
   * @default true
   */
  closeOnBackdropClick?: boolean;
  
  /**
   * Whether to close on Escape key
   * @default true
   */
  closeOnEscape?: boolean;
}

/**
 * Close Icon Component
 */
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Modal Component
 * 
 * A modal dialog component with backdrop, close button, and content area.
 * Supports keyboard navigation (Escape to close) and backdrop click to close.
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      heading,
      children,
      showClose = true,
      className,
      contentClassName,
      closeOnBackdropClick = true,
      closeOnEscape = true,
    },
    ref
  ) => {
    // Handle Escape key
    useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [open, closeOnEscape, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick && e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={heading ? 'modal-heading' : undefined}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[var(--color-overlay-backdrop)]" />
        
        {/* Modal Content */}
        <div
          ref={ref}
          className={cn(
            'relative',
            'bg-[var(--color-background-surface)]',
            'border border-[var(--color-border-default)]',
            'rounded-xl', // 12px border radius
            'px-4', // 16px horizontal padding
            'py-6', // 24px vertical padding
            'max-w-[311px]',
            'w-full',
            'shadow-lg',
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          {showClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-[-1px] right-[-1px] flex items-center justify-end min-h-[44px] min-w-[44px] pr-2 cursor-pointer text-[var(--color-icon-primary)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>
          )}
          
          {/* Content */}
          <div className={cn('flex flex-col gap-2 items-start', contentClassName)}>
            {heading && (
              <h2
                id="modal-heading"
                className="font-semibold text-base leading-6 text-[var(--color-text-primary)] w-full"
              >
                {heading}
              </h2>
            )}
            <div className="flex flex-col font-normal text-sm leading-4 text-[var(--color-text-primary)] w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

