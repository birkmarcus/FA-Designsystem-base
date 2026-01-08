'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FAQItem, FAQItemProps } from './FAQItem';

export interface FAQGroupItem {
  /**
   * Question text
   */
  question: string;
  /**
   * Answer text
   */
  answer: string;
  /**
   * Additional props for the FAQItem
   */
  itemProps?: Omit<FAQItemProps, 'question' | 'answer' | 'open' | 'onToggle'>;
}

export interface FAQGroupProps {
  /**
   * Array of FAQ items
   */
  items: FAQGroupItem[];
  /**
   * Allow multiple items to be open at once
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * Default open items (by index)
   */
  defaultOpen?: number[];
  /**
   * Controlled open items (by index)
   */
  openItems?: number[];
  /**
   * Callback when items are toggled
   */
  onToggle?: (index: number, isOpen: boolean) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * FAQGroup Component
 * 
 * A group of FAQ items that can be managed together.
 * Supports single or multiple open items.
 */
export const FAQGroup = React.forwardRef<HTMLDivElement, FAQGroupProps>(
  (
    {
      items,
      allowMultiple = false,
      defaultOpen = [],
      openItems: controlledOpenItems,
      onToggle,
      className,
    },
    ref
  ) => {
    const [internalOpenItems, setInternalOpenItems] = React.useState<Set<number>>(
      new Set(defaultOpen)
    );

    const isControlled = controlledOpenItems !== undefined;
    const openItemsSet = isControlled
      ? new Set(controlledOpenItems)
      : internalOpenItems;

    const handleToggle = (index: number) => {
      const isOpen = openItemsSet.has(index);
      const newOpenItems = new Set(openItemsSet);

      if (allowMultiple) {
        if (isOpen) {
          newOpenItems.delete(index);
        } else {
          newOpenItems.add(index);
        }
      } else {
        // Single open mode - close all others
        newOpenItems.clear();
        if (!isOpen) {
          newOpenItems.add(index);
        }
      }

      if (!isControlled) {
        setInternalOpenItems(newOpenItems);
      }

      onToggle?.(index, !isOpen);
    };

    const containerStyles = cn(
      'flex flex-col gap-4', // 16px gap between items
      'items-start', // Align items to start
      'w-full',
      className
    );

    return (
      <div ref={ref} className={containerStyles}>
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            open={openItemsSet.has(index)}
            onToggle={() => handleToggle(index)}
            {...item.itemProps}
          />
        ))}
      </div>
    );
  }
);

FAQGroup.displayName = 'FAQGroup';

