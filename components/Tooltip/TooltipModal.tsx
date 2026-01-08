'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/Modal';
import { QuestionCircleIcon } from './QuestionCircleIcon';
import { cn } from '@/lib/utils';

export interface TooltipModalProps {
  /**
   * Modal heading
   */
  heading?: string;
  
  /**
   * Modal content - can be a string or React node
   */
  content: React.ReactNode;
  
  /**
   * Size of the question circle icon
   * @default 'medium'
   */
  iconSize?: 'small' | 'medium' | 'large';
  
  /**
   * Whether modal is open (controlled)
   */
  open?: boolean;
  
  /**
   * Callback when open state changes (for controlled usage)
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Additional CSS classes for trigger button
   */
  triggerClassName?: string;
  
  /**
   * Additional CSS classes for modal container
   */
  modalClassName?: string;
  
  /**
   * Whether tooltip is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * TooltipModal Component
 * 
 * A tooltip variant that opens a modal dialog instead of a tooltip popup.
 * Uses a question circle icon as the trigger. Clicking the icon opens a modal
 * with the provided heading and content.
 */
export const TooltipModal = React.forwardRef<HTMLButtonElement, TooltipModalProps>(
  (
    {
      heading,
      content,
      iconSize = 'medium',
      open: controlledOpen,
      onOpenChange,
      triggerClassName,
      modalClassName,
      disabled = false,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    
    // Use controlled or uncontrolled state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = (newOpen: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    const handleClick = () => {
      if (!disabled) {
        setIsOpen(true);
      }
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <button
          ref={ref}
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className={cn(
            'flex items-center justify-center',
            'min-h-[44px] min-w-[44px]',
            'cursor-pointer',
            disabled && 'cursor-not-allowed opacity-60',
            triggerClassName
          )}
          aria-label="Open information modal"
          aria-expanded={isOpen}
        >
          <QuestionCircleIcon
            size={iconSize}
            className={cn(
              'text-[var(--color-text-tertiary)]',
              !disabled && 'hover:text-[var(--color-text-primary)] transition-colors'
            )}
          />
        </button>
        
        <Modal
          open={isOpen}
          onClose={handleClose}
          heading={heading}
          className={modalClassName}
        >
          {content}
        </Modal>
      </>
    );
  }
);

TooltipModal.displayName = 'TooltipModal';

