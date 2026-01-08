'use client';

import React from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { QuestionCircleIcon } from './QuestionCircleIcon';
import { cn } from '@/lib/utils';

export interface TooltipBodyCopyProps extends Omit<TooltipProps, 'children'> {
  /**
   * Text content that will have the tooltip trigger inline
   */
  text: string;
  
  /**
   * Size of the question circle icon
   * @default 'small'
   */
  iconSize?: 'small' | 'medium' | 'large';
  
  /**
   * Additional CSS classes for the text wrapper
   */
  textClassName?: string;
}

/**
 * TooltipBodyCopy Component
 * 
 * A specialized tooltip variant designed for inline use within body copy.
 * Displays text with an inline question mark icon that triggers the tooltip.
 */
export const TooltipBodyCopy = React.forwardRef<HTMLSpanElement, TooltipBodyCopyProps>(
  (
    {
      text,
      iconSize = 'small',
      textClassName,
      ...tooltipProps
    },
    ref
  ) => {
    return (
      <Tooltip
        {...tooltipProps}
        triggerClassName="inline-flex items-center gap-1"
      >
        <span
          ref={ref}
          className={cn('inline-flex items-center gap-1', textClassName)}
        >
          <span>{text}</span>
          <QuestionCircleIcon
            size={iconSize}
            className="text-[var(--color-text-tertiary)] shrink-0"
          />
        </span>
      </Tooltip>
    );
  }
);

TooltipBodyCopy.displayName = 'TooltipBodyCopy';

