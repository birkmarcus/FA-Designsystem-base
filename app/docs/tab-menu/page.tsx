'use client';

import { useState } from 'react';
import { TabMenu, TabMenuGroup } from '@/components/TabMenu';

// Different content components for each tab
const TabContent1 = () => (
  <div className="flex flex-nowrap gap-8 items-center px-0 py-8 w-full">
    <div className="flex flex-col gap-8 items-center max-w-[511px] min-w-[327px] w-full">
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
          Overview
        </p>
        <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
          Welcome to the Design System
        </p>
      </div>
      <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
        This is the overview tab content. Here you can see an introduction to the design system and its core principles. The system provides a comprehensive set of components built with consistency and accessibility in mind.
      </p>
    </div>
    <div className="aspect-[456/256] flex items-center justify-center min-h-[256px] w-full bg-blue-50 rounded-lg border-2 border-blue-200">
      <div className="text-blue-600 text-sm font-medium">Overview Image</div>
    </div>
  </div>
);

const TabContent2 = () => (
  <div className="flex flex-nowrap gap-8 items-center px-0 py-8 w-full">
    <div className="flex flex-col gap-8 items-center max-w-[888px] min-w-[327px] w-full">
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
          Features
        </p>
        <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
          Powerful Component Library
        </p>
      </div>
      <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
        Explore our extensive collection of components. Each component is carefully crafted with design tokens, ensuring visual consistency across your application. All components are fully accessible and responsive.
      </p>
    </div>
    <div className="aspect-[456/256] flex items-center justify-center min-h-[256px] w-full bg-green-50 rounded-lg border-2 border-green-200">
      <div className="text-green-600 text-sm font-medium">Features Image</div>
    </div>
  </div>
);

const TabContent3 = () => (
  <div className="flex flex-nowrap gap-8 items-center px-0 py-8 w-full">
    <div className="flex flex-col gap-8 items-center max-w-[560px] min-w-[327px] w-full">
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
          Documentation
        </p>
        <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
          Comprehensive Guides and Examples
        </p>
      </div>
      <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
        Find detailed documentation for every component, including usage examples, props, and best practices. Our documentation helps you implement components quickly and correctly in your projects.
      </p>
    </div>
    <div className="aspect-[456/256] flex items-center justify-center min-h-[256px] w-full bg-purple-50 rounded-lg border-2 border-purple-200">
      <div className="text-purple-600 text-sm font-medium">Documentation Image</div>
    </div>
  </div>
);

const TabContent4 = () => (
  <div className="flex flex-nowrap gap-8 items-center px-0 py-8 w-full">
    <div className="flex flex-col gap-8 items-center max-w-[888px] min-w-[327px] w-full">
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
          Support
        </p>
        <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
          Get Help When You Need It
        </p>
      </div>
      <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
        Need assistance? Our support team is here to help. Reach out through our support channels or check out our FAQ section for common questions and answers about using the design system.
      </p>
    </div>
    <div className="aspect-[456/256] flex items-center justify-center min-h-[256px] w-full bg-orange-50 rounded-lg border-2 border-orange-200">
      <div className="text-orange-600 text-sm font-medium">Support Image</div>
    </div>
  </div>
);

export default function TabMenuPage() {
  const [activeTab1, setActiveTab1] = useState('tab1');
  const [activeTab2, setActiveTab2] = useState('tab2');
  const [activeTab3, setActiveTab3] = useState('tab3');
  const [activeTab4, setActiveTab4] = useState('tab4');

  const tabItems = [
    {
      value: 'tab1',
      label: 'Overview',
      content: <TabContent1 />,
    },
    {
      value: 'tab2',
      label: 'Features',
      content: <TabContent2 />,
    },
    {
      value: 'tab3',
      label: 'Documentation',
      content: <TabContent3 />,
    },
    {
      value: 'tab4',
      label: 'Support',
      content: <TabContent4 />,
    },
  ];

  const threeTabItems = [
    {
      value: 'tab1',
      label: 'Overview',
      content: <TabContent1 />,
    },
    {
      value: 'tab2',
      label: 'Features',
      content: <TabContent2 />,
    },
    {
      value: 'tab3',
      label: 'Documentation',
      content: <TabContent3 />,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Tab Menu
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Tab menu component with 4 variants: fixed-width and equal-width tabs with content panels.
      </p>

      {/* Variant 1: Fixed-width tabs, first tab active */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Variant 1: Fixed-width tabs (First tab active)
        </h2>
        <div className="bg-gray-50 p-16 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <TabMenu
              variant="fixed-width"
              items={tabItems}
              activeTab={activeTab1}
              onTabChange={setActiveTab1}
            />
          </div>
        </div>
      </section>

      {/* Variant 2: Equal-width tabs, second tab active */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Variant 2: Equal-width tabs (Second tab active)
        </h2>
        <div className="bg-gray-50 p-16 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <TabMenu
              variant="equal-width"
              items={threeTabItems}
              activeTab={activeTab2}
              onTabChange={setActiveTab2}
            />
          </div>
        </div>
      </section>

      {/* Variant 3: Fixed-width tabs, third tab active */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Variant 3: Fixed-width tabs (Third tab active)
        </h2>
        <div className="bg-gray-50 p-16 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <TabMenu
              variant="fixed-width"
              items={tabItems}
              activeTab={activeTab3}
              onTabChange={setActiveTab3}
            />
          </div>
        </div>
      </section>

      {/* Variant 4: Equal-width tabs, fourth tab active */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Variant 4: Equal-width tabs (Fourth tab active)
        </h2>
        <div className="bg-gray-50 p-16 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <TabMenu
              variant="equal-width"
              items={tabItems}
              activeTab={activeTab4}
              onTabChange={setActiveTab4}
            />
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage Examples
        </h2>
        <div className="space-y-8">
          {/* Controlled State */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Controlled State (Fixed-width)
            </h3>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[var(--color-background-surface)]">
                <TabMenu
                  variant="fixed-width"
                  items={tabItems}
                  activeTab={activeTab1}
                  onTabChange={setActiveTab1}
                />
              </div>
            </div>
          </div>

          {/* Uncontrolled State */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Uncontrolled State (Equal-width)
            </h3>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[var(--color-background-surface)]">
                <TabMenuGroup
                  variant="equal-width"
                  items={tabItems}
                  defaultActiveTab="tab1"
                />
              </div>
            </div>
          </div>

          {/* Custom Content */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Custom Tab Content
            </h3>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-[var(--color-background-surface)]">
                <TabMenuGroup
                  variant="equal-width"
                  items={[
                    {
                      value: 'overview',
                      label: 'Overview',
                      content: (
                        <div className="p-8 text-[var(--color-text-primary)]">
                          <h3 className="text-xl font-semibold mb-4">Overview Content</h3>
                          <p>This is custom content for the overview tab.</p>
                        </div>
                      ),
                    },
                    {
                      value: 'details',
                      label: 'Details',
                      content: (
                        <div className="p-8 text-[var(--color-text-primary)]">
                          <h3 className="text-xl font-semibold mb-4">Details Content</h3>
                          <p>This is custom content for the details tab.</p>
                        </div>
                      ),
                    },
                    {
                      value: 'settings',
                      label: 'Settings',
                      content: (
                        <div className="p-8 text-[var(--color-text-primary)]">
                          <h3 className="text-xl font-semibold mb-4">Settings Content</h3>
                          <p>This is custom content for the settings tab.</p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

