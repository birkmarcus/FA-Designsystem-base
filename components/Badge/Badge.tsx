'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeColor = 'default' | 'brand' | 'dark' | 'error' | 'success' | 'warning';

export interface BadgeProps {
  /**
   * Badge color variant
   * @default 'default'
   */
  color?: BadgeColor;
  /**
   * Show close button
   * @default false
   */
  showClose?: boolean;
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
  /**
   * Badge children (label)
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Close Icon Component
 */
const CloseIcon = ({ color }: { color: string }) => (
  <svg
    className="w-3 h-3 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{ color }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/**
 * Badge Component
 * 
 * A badge component with multiple color variants and optional close button.
 * Used for labels, tags, and status indicators.
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      color = 'default',
      showClose = false,
      onClose,
      children,
      className,
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-1',
      'px-[var(--spacing-primitive-3)] py-[var(--spacing-primitive-1)]', // 12px horizontal, 4px vertical
      'rounded-full', // Full rounded pill shape
      'font-primary font-medium',
      'text-sm leading-4', // 14px font, 16px line height
      'whitespace-nowrap',
    );

    const colorStyles = cn(
      // Default variant
      color === 'default' && [
        'bg-[var(--color-background-neutral)]', // #f7f7f7
        'text-[var(--color-text-tertiary)]', // #76767b
      ],

      // Brand variant
      color === 'brand' && [
        'bg-[var(--color-surface-unselected)]', // #f6f6fc
        'text-[var(--color-interactive-primary)]', // #4d4dbb
      ],

      // Dark variant
      color === 'dark' && [
        'bg-[var(--color-interactive-primary)]', // #4d4dbb
        'text-[var(--color-text-inverse)]', // white
      ],

      // Error variant
      color === 'error' && [
        'bg-[var(--color-status-errorBackground)]', // #fef2f2
        'text-[#bd1818]', // Error text color
      ],

      // Success variant
      color === 'success' && [
        'bg-[#dff9e9]', // Success background
        'text-[#1e7742]', // Success text color
      ],

      // Warning variant
      color === 'warning' && [
        'bg-[#fff0d4]', // Warning background
        'text-[#b54708]', // Warning text color
      ],
    );

    const getCloseIconColor = (): string => {
      switch (color) {
        case 'default':
          return 'var(--color-text-tertiary)'; // #76767b
        case 'brand':
          return 'var(--color-interactive-primary)'; // #4d4dbb
        case 'dark':
          return 'var(--color-text-inverse)'; // white
        case 'error':
          return '#bd1818';
        case 'success':
          return '#1e7742';
        case 'warning':
          return '#b54708';
        default:
          return 'var(--color-text-tertiary)';
      }
    };

    const handleCloseClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onClose?.();
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, colorStyles, className)}
        role={showClose ? 'button' : undefined}
        tabIndex={showClose ? 0 : undefined}
        onClick={showClose && onClose ? handleCloseClick : undefined}
        onKeyDown={(e) => {
          if (showClose && onClose && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleCloseClick(e as any);
          }
        }}
      >
        <span>{children}</span>
        {showClose && (
          <button
            type="button"
            className="ml-1 -mr-1 p-0.5 rounded hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-current"
            onClick={handleCloseClick}
            aria-label="Remove badge"
            tabIndex={-1}
          >
            <CloseIcon color={getCloseIconColor()} />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

