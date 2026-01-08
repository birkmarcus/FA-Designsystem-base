'use client';

import React from 'react';

export interface PlaceholderIconProps {
  className?: string;
}

/**
 * PlaceholderIcon Component
 * 
 * A simple placeholder icon used in examples.
 */
export const PlaceholderIcon: React.FC<PlaceholderIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ color: 'var(--color-icon-primary)' }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16 10V16L20 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlaceholderIcon.displayName = 'PlaceholderIcon';

