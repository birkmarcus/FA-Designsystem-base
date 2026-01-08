'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FAQItemProps {
  /**
   * Question text
   */
  question: string;
  /**
   * Answer text (shown when open)
   */
  answer: string;
  /**
   * Whether the FAQ item is open
   * @default false
   */
  open?: boolean;
  /**
   * Callback when FAQ item is toggled
   */
  onToggle?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Plus/Minus Icon Component with smooth transitions
 */
const PlusMinusIcon = ({ open }: { open: boolean }) => {
  const iconWrapperStyles = cn(
    'relative',
    'w-5 h-5',
    'shrink-0',
  );

  const plusIconStyles = cn(
    'absolute inset-0',
    'transition-opacity',
    'duration-[var(--motion-primitive-duration-base)]',
    'ease-[var(--motion-primitive-easing-easeInOut)]',
    open ? 'opacity-0' : 'opacity-100',
  );

  const minusIconStyles = cn(
    'absolute inset-0',
    'transition-opacity',
    'duration-[var(--motion-primitive-duration-base)]',
    'ease-[var(--motion-primitive-easing-easeInOut)]',
    open ? 'opacity-100' : 'opacity-0',
  );

  return (
    <div className={iconWrapperStyles} aria-hidden="true">
      {/* Plus Icon */}
      <svg
        className={plusIconStyles}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
      {/* Minus Icon */}
      <svg
        className={minusIconStyles}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 12H4"
        />
      </svg>
    </div>
  );
};

/**
 * FAQItem Component
 * 
 * A FAQ accordion item with question and answer.
 * Uses plus/minus icons to indicate open/closed state.
 */
export const FAQItem = React.forwardRef<HTMLButtonElement, FAQItemProps>(
  (
    {
      question,
      answer,
      open = false,
      onToggle,
      className,
    },
    ref
  ) => {
    const buttonStyles = cn(
      'flex flex-col items-start justify-center',
      'p-4', // 16px padding
      'w-full',
      'bg-[var(--color-background-surface)]', // White background
      'border border-[var(--color-border-default)]', // Full border
      'rounded-none', // 0px border radius
      'text-left',
      'transition-colors',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeOut)]',
      'focus:outline-none',
      'focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2',
      className
    );

    const toggleStyles = cn(
      'flex items-center',
      'w-full',
      'gap-2', // 8px gap
      'transition-all',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeOut)]',
    );

    const questionStyles = cn(
      'flex-1',
      'font-primary font-medium',
      'text-lg leading-6', // 18px font, 24px line height
      'text-[var(--color-text-primary)]',
    );

    const answerWrapperStyles = cn(
      'w-full',
      'overflow-hidden',
      'transition-all',
      'duration-[var(--motion-primitive-duration-base)]',
      'ease-[var(--motion-primitive-easing-easeInOut)]',
      open ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0',
    );

    const answerStyles = cn(
      'w-full',
      'font-primary font-normal',
      'text-base leading-5', // 16px font, 20px line height
      'text-[var(--color-text-primary)]',
    );

    return (
      <button
        ref={ref}
        type="button"
        className={buttonStyles}
        onClick={onToggle}
        aria-expanded={open}
        aria-label={`${open ? 'Collapse' : 'Expand'} ${question}`}
      >
        <div className={toggleStyles}>
          <p className={questionStyles}>
            {question}
          </p>
          <span className="flex items-center justify-center text-[var(--color-icon-primary)] shrink-0">
            <PlusMinusIcon open={open} />
          </span>
        </div>
        <div className={answerWrapperStyles}>
          <div className={answerStyles}>
            {answer}
          </div>
        </div>
      </button>
    );
  }
);

FAQItem.displayName = 'FAQItem';

