'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /**
   * Tooltip content - can be a string or React node
   * If not provided, will use heading and description instead
   */
  content?: React.ReactNode;
  
  /**
   * Optional heading text (shown above description)
   */
  heading?: string;
  
  /**
   * Optional description text (shown below heading)
   */
  description?: string;
  
  /**
   * Position of the tooltip relative to trigger
   * @default 'top'
   */
  position?: TooltipPosition;
  
  /**
   * Whether tooltip is open (controlled)
   */
  open?: boolean;
  
  /**
   * Callback when open state changes (for controlled usage)
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Delay before showing tooltip (in milliseconds)
   * @default 0
   */
  delay?: number;
  
  /**
   * Whether tooltip should close on click outside
   * @default true
   */
  closeOnClickOutside?: boolean;
  
  /**
   * Additional CSS classes for tooltip content
   */
  className?: string;
  
  /**
   * Additional CSS classes for trigger wrapper
   */
  triggerClassName?: string;
  
  /**
   * Children element that triggers the tooltip
   */
  children: React.ReactElement;
  
  /**
   * Whether tooltip is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Tooltip Component
 * 
 * A flexible tooltip component that can be positioned around any trigger element.
 * Supports both controlled and uncontrolled modes, and can display heading and description content.
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      heading,
      description,
      position = 'top',
      open: controlledOpen,
      onOpenChange,
      delay = 0,
      closeOnClickOutside = true,
      className,
      triggerClassName,
      children,
      disabled = false,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [showTimeout, setShowTimeout] = useState<NodeJS.Timeout | null>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement>(null);
    
    // Use controlled or uncontrolled state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = (newOpen: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    // Handle delay
    const handleMouseEnter = () => {
      if (disabled) return;
      
      if (delay > 0) {
        const timeout = setTimeout(() => {
          setIsOpen(true);
        }, delay);
        setShowTimeout(timeout);
      } else {
        setIsOpen(true);
      }
    };

    const handleMouseLeave = () => {
      if (showTimeout) {
        clearTimeout(showTimeout);
        setShowTimeout(null);
      }
      setIsOpen(false);
    };

    // Handle click outside
    useEffect(() => {
      if (!isOpen || !closeOnClickOutside) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          tooltipRef.current &&
          !tooltipRef.current.contains(target) &&
          triggerRef.current &&
          !triggerRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, closeOnClickOutside]);

    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (showTimeout) {
          clearTimeout(showTimeout);
        }
      };
    }, [showTimeout]);

    // Position styles
    const getPositionStyles = () => {
      const gap = 12; // 12px gap between trigger and tooltip
      
      switch (position) {
        case 'top':
          return {
            bottom: `calc(100% + ${gap}px)`,
            left: '50%',
            transform: 'translateX(-50%)',
          };
        case 'bottom':
          return {
            top: `calc(100% + ${gap}px)`,
            left: '50%',
            transform: 'translateX(-50%)',
          };
        case 'left':
          return {
            right: `calc(100% + ${gap}px)`,
            top: '50%',
            transform: 'translateY(-50%)',
          };
        case 'right':
          return {
            left: `calc(100% + ${gap}px)`,
            top: '50%',
            transform: 'translateY(-50%)',
          };
        default:
          return {};
      }
    };

    // Arrow position styles
    const getArrowStyles = () => {
      switch (position) {
        case 'top':
          return {
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%) rotate(180deg)',
          };
        case 'bottom':
          return {
            top: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
          };
        case 'left':
          return {
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
          };
        case 'right':
          return {
            left: '-8px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
          };
        default:
          return {};
      }
    };

    // Clone children with ref and event handlers
    const triggerElement = React.cloneElement(children as React.ReactElement<any>, {
      ref: (node: HTMLElement | null) => {
        triggerRef.current = node;
        if (node && typeof (children as any).ref === 'function') {
          (children as any).ref(node);
        } else if (node && (children as any).ref) {
          ((children as any).ref as React.MutableRefObject<HTMLElement>).current = node;
        }
      },
      onMouseEnter: (e: React.MouseEvent) => {
        handleMouseEnter();
        (children as any).props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        handleMouseLeave();
        (children as any).props.onMouseLeave?.(e);
      },
      onClick: (e: React.MouseEvent) => {
        if (!disabled) {
          setIsOpen(!isOpen);
        }
        (children as any).props.onClick?.(e);
      },
    });

    // Determine content to display
    const displayContent = content || (
      <>
        {heading && (
          <p className="font-medium text-base leading-5 text-white">
            {heading}
          </p>
        )}
        {description && (
          <p className="font-normal text-sm leading-4 text-white mt-0">
            {description}
          </p>
        )}
      </>
    );

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex', triggerClassName)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {triggerElement}
        
        {isOpen && !disabled && (
          <div
            ref={tooltipRef}
            className={cn(
              'absolute z-50',
              'bg-[#0c0c0d]', // Dark background from design tokens
              'rounded-[4px]', // Small border radius
              'min-h-[26px]',
              'min-w-[52px]', // Minimum width
              'p-2', // 8px padding
              'shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]', // Drop shadow from design
              'isolate',
              className
            )}
            style={getPositionStyles()}
            role="tooltip"
            aria-live="polite"
          >
            {/* Arrow */}
            <div
              className="absolute w-4 h-2"
              style={getArrowStyles()}
            >
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M0 8L8 0L16 8H0Z"
                  fill="#0c0c0d"
                />
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center gap-0">
              {displayContent}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

