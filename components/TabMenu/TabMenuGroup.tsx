'use client';

import React from 'react';
import { TabMenu, TabMenuProps, TabMenuItem } from './TabMenu';

export interface TabMenuGroupProps extends Omit<TabMenuProps, 'activeTab' | 'onTabChange'> {
  /**
   * Default active tab value
   */
  defaultActiveTab?: string;
  /**
   * Controlled active tab value
   */
  activeTab?: string;
  /**
   * Callback when active tab changes
   */
  onTabChange?: (value: string) => void;
}

/**
 * TabMenuGroup Component
 * 
 * A wrapper component that manages tab state (controlled or uncontrolled).
 * Provides state management for TabMenu component.
 */
export const TabMenuGroup = React.forwardRef<HTMLDivElement, TabMenuGroupProps>(
  (
    {
      items,
      defaultActiveTab,
      activeTab: controlledActiveTab,
      onTabChange,
      ...props
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = React.useState<string>(
      defaultActiveTab || items[0]?.value || ''
    );

    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

    const handleTabChange = (value: string) => {
      if (!isControlled) {
        setInternalActiveTab(value);
      }
      onTabChange?.(value);
    };

    return (
      <TabMenu
        ref={ref}
        items={items}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        {...props}
      />
    );
  }
);

TabMenuGroup.displayName = 'TabMenuGroup';

