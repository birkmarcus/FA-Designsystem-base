import React from 'react';
import { cn } from '@/lib/utils';

export interface QuestionCircleIconProps {
  /**
   * Size of the icon
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * QuestionCircleIcon Component
 * 
 * A question mark icon in a circle, commonly used as a tooltip trigger.
 */
export const QuestionCircleIcon = React.forwardRef<SVGSVGElement, QuestionCircleIconProps>(
  ({ size = 'medium', className }, ref) => {
    const sizeMap = {
      small: 'w-4 h-4', // 16px
      medium: 'w-6 h-6', // 24px
      large: 'w-8 h-8', // 32px
    };

    return (
      <svg
        ref={ref}
        className={cn(sizeMap[size], className)}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    );
  }
);

QuestionCircleIcon.displayName = 'QuestionCircleIcon';

