'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { AccordionItem, AccordionItemProps } from './AccordionItem';

export interface AccordionGroupItem {
  /**
   * Title text
   */
  title: string;
  /**
   * Content (can be string or React node)
   */
  content: React.ReactNode;
  /**
   * Additional props for the AccordionItem
   */
  itemProps?: Omit<AccordionItemProps, 'title' | 'children' | 'open' | 'onToggle'>;
}

export interface AccordionGroupProps {
  /**
   * Array of accordion items
   */
  items: AccordionGroupItem[];
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
 * AccordionGroup Component
 * 
 * A group of accordion items that can be managed together.
 * Supports single or multiple open items.
 */
export const AccordionGroup = React.forwardRef<HTMLDivElement, AccordionGroupProps>(
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
      'flex flex-col',
      'w-full',
      className
    );

    return (
      <div ref={ref} className={containerStyles}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            open={openItemsSet.has(index)}
            onToggle={() => handleToggle(index)}
            {...item.itemProps}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  }
);

AccordionGroup.displayName = 'AccordionGroup';

