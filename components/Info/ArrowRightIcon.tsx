'use client';

import React from 'react';

export interface ArrowRightIconProps {
  className?: string;
}

/**
 * ArrowRightIcon Component
 * 
 * A simple arrow-right icon used in link buttons.
 */
export const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="16.667"
      viewBox="0 0 20 16.667"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.5 3.333L17.5 8.333L12.5 13.333M17.5 8.333H2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightIcon.displayName = 'ArrowRightIcon';

