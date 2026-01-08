'use client';

import { useState } from 'react';
import { Tab, TabGroup } from '@/components/Tab';

// Simple icon component for examples
const Icon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

export default function TabsPage() {
  const [activeTab1, setActiveTab1] = useState('tab1');
  const [activeTab2, setActiveTab2] = useState('tab1');
  const [activeTab3, setActiveTab3] = useState('tab1');
  const [activeTab4, setActiveTab4] = useState('tab1');
  const [activeTab5, setActiveTab5] = useState('tab1');
  const [activeTab6, setActiveTab6] = useState('tab2');
  const [activeTab7, setActiveTab7] = useState('tab1');
  const [activeTab8, setActiveTab8] = useState('tab1');

  const basicTabs = [
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3' },
    { value: 'tab4', label: 'Tab 4' },
  ];

  const tabsWithIcons = [
    {
      value: 'tab1',
      label: 'Tab 1',
      leftIcon: <Icon className="w-6 h-6" />,
    },
    {
      value: 'tab2',
      label: 'Tab 2',
      rightIcon: <Icon className="w-6 h-6" />,
    },
    {
      value: 'tab3',
      label: 'Tab 3',
      leftIcon: <Icon className="w-6 h-6" />,
      rightIcon: <Icon className="w-6 h-6" />,
    },
  ];

  const tabsWithNotifications = [
    { value: 'tab1', label: 'Tab 1', notification: '+99' },
    { value: 'tab2', label: 'Tab 2', notification: 5 },
    { value: 'tab3', label: 'Tab 3' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Tabs
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Tab components with multiple variants, states, and group layouts.
      </p>

      {/* Tab Group - Plain Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tab Group - Plain Variant
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Tabs
            </h3>
            <TabGroup
              variant="plain"
              items={basicTabs}
              activeTab={activeTab1}
              onTabChange={setActiveTab1}
            />
          </div>
        </div>
      </section>

      {/* Tab Group - Wrapped Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tab Group - Wrapped Variant
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Wrapped Tabs with Background
            </h3>
            <TabGroup
              variant="wrapped"
              items={basicTabs}
              activeTab={activeTab2}
              onTabChange={setActiveTab2}
            />
          </div>
        </div>
      </section>

      {/* Tab Group - Underline Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tab Group - Underline Variant
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Underlined Tabs
            </h3>
            <TabGroup
              variant="underline"
              items={basicTabs}
              activeTab={activeTab3}
              onTabChange={setActiveTab3}
            />
          </div>
        </div>
      </section>

      {/* Tab Group - Inline Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tab Group - Inline Variant
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Inline Tabs with Dividers
            </h3>
            <TabGroup
              variant="inline"
              items={basicTabs}
              activeTab={activeTab4}
              onTabChange={setActiveTab4}
            />
          </div>
        </div>
      </section>

      {/* Tabs with Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tabs with Icons
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Tabs with Left and Right Icons
            </h3>
            <TabGroup
              variant="plain"
              items={tabsWithIcons}
              activeTab={activeTab5}
              onTabChange={setActiveTab5}
            />
          </div>
        </div>
      </section>

      {/* Tabs with Notifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tabs with Notifications
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Tabs with Notification Badges
            </h3>
            <TabGroup
              variant="plain"
              items={tabsWithNotifications}
              activeTab={activeTab6}
              onTabChange={setActiveTab6}
            />
          </div>
        </div>
      </section>

      {/* Individual Tab Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Individual Tab Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Button Grey Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="button-grey" state="default">
                Default
              </Tab>
              <Tab variant="button-grey" state="active">
                Active
              </Tab>
              <Tab variant="button-grey" state="focused">
                Focused
              </Tab>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Button White Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="button-white" state="default">
                Default
              </Tab>
              <Tab variant="button-white" state="active">
                Active
              </Tab>
              <Tab variant="button-white" state="focused">
                Focused
              </Tab>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Underlined Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="underlined" state="default">
                Default
              </Tab>
              <Tab variant="underlined" state="active">
                Active
              </Tab>
              <Tab variant="underlined" state="focused">
                Focused
              </Tab>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Line Vertical Variant
            </h3>
            <div className="flex flex-col items-start gap-4">
              <Tab variant="line-vertical" state="default">
                Default
              </Tab>
              <Tab variant="line-vertical" state="active">
                Active
              </Tab>
              <Tab variant="line-vertical" state="focused">
                Focused
              </Tab>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Complex Examples
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Wrapped Tabs with Icons and Notifications
            </h3>
            <TabGroup
              variant="wrapped"
              items={[
                {
                  value: 'tab1',
                  label: 'Tab 1',
                  leftIcon: <Icon className="w-6 h-6" />,
                  notification: '+99',
                },
                {
                  value: 'tab2',
                  label: 'Tab 2',
                  rightIcon: <Icon className="w-6 h-6" />,
                  notification: 5,
                },
                {
                  value: 'tab3',
                  label: 'Tab 3',
                  leftIcon: <Icon className="w-6 h-6" />,
                  rightIcon: <Icon className="w-6 h-6" />,
                },
              ]}
              activeTab={activeTab7}
              onTabChange={setActiveTab7}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Underline Tabs with Notifications
            </h3>
            <TabGroup
              variant="underline"
              items={tabsWithNotifications}
              activeTab={activeTab8}
              onTabChange={setActiveTab8}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

