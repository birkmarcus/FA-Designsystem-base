'use client';

import { useState } from 'react';
import { PageHeader, PageHeaderAction } from '@/components/PageHeader';
import { UploadCloudIcon, DotsVerticalIcon, FilterLinesIcon, CalendarIcon } from '@/components/PageHeader/icons';

export default function PageHeaderPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeTabDashboard, setActiveTabDashboard] = useState('12months');
  const [searchValue, setSearchValue] = useState('');

  // Breadcrumb items
  const breadcrumbs = [
    { label: '', type: 'icon' as const },
    { label: 'Pagen name' },
    { label: '...', type: 'intermediate' as const },
    { label: 'Pagen name', type: 'active page' as const },
  ];

  // Tab items
  const tabItems = [
    { label: 'View all', value: 'all' },
    { label: 'Tab Text', value: 'tab1' },
    { label: 'Tab Text', value: 'tab2' },
    { label: 'Tab Text', value: 'tab3' },
    { label: 'Tab Text', value: 'tab4' },
    { label: 'Tab Text', value: 'tab5' },
  ];

  // Dashboard tab items
  const dashboardTabItems = [
    { label: '12 months', value: '12months' },
    { label: '30 days', value: '30days' },
    { label: '7 days', value: '7days' },
    { label: '24 hours', value: '24hours' },
  ];

  // Action buttons
  const actionButtons: PageHeaderAction[] = [
    {
      label: 'Tertiary',
      variant: 'tertiary',
      onClick: () => console.log('Tertiary clicked'),
    },
    {
      label: 'Secondary',
      variant: 'neutral',
      onClick: () => console.log('Secondary clicked'),
    },
    {
      label: 'Secondary',
      variant: 'neutral',
      onClick: () => console.log('Secondary 2 clicked'),
    },
    {
      label: 'Primary',
      variant: 'primary',
      rightIcon: <UploadCloudIcon className="w-4 h-4" />,
      onClick: () => console.log('Primary clicked'),
    },
    {
      label: '',
      variant: 'neutral',
      leftIcon: <DotsVerticalIcon className="w-6 h-6" />,
      onClick: () => console.log('More clicked'),
    },
  ];

  // Dashboard actions
  const dashboardActions: PageHeaderAction[] = [
    {
      label: 'Select dates',
      variant: 'neutral',
      leftIcon: <CalendarIcon className="w-4 h-4" />,
      onClick: () => console.log('Select dates clicked'),
    },
    {
      label: 'Filters',
      variant: 'neutral',
      leftIcon: <FilterLinesIcon className="w-4 h-4" />,
      onClick: () => console.log('Filters clicked'),
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Page Header
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A comprehensive page header component with breadcrumbs, title, badge, help text,
        action buttons, tabs, and search functionality. Supports multiple variants.
      </p>

      {/* Buttons Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Buttons Variant
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Default variant with breadcrumbs, title with badge, help text, action buttons, and tabs at the bottom.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <PageHeader
            title="Team members"
            breadcrumbs={breadcrumbs}
            badge="100 users"
            helpText="Showing 1-10 of 100 users"
            actions={actionButtons}
            tabs={tabItems}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="buttons"
          />
        </div>
      </section>

      {/* Tabs Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tabs Variant
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Variant with inline tabs in the actions area, showing "View all" as the active tab with dividers.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <PageHeader
            title="Team members"
            breadcrumbs={breadcrumbs}
            badge="100 users"
            helpText="Showing 1-10 of 100 users"
            actions={actionButtons}
            tabs={tabItems}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="tabs"
          />
        </div>
      </section>

      {/* Search Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Search Variant
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Variant with search field and filters button in the actions area, plus tabs at the bottom.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <PageHeader
            title="Team members"
            breadcrumbs={breadcrumbs}
            badge="100 users"
            helpText="Showing 1-10 of 100 users"
            actions={actionButtons}
            tabs={tabItems}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchPlaceholder="Search"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            variant="search"
          />
        </div>
      </section>

      {/* Dashboard Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Dashboard Variant
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Variant with date range tabs (12 months, 30 days, 7 days, 24 hours) and date/filter actions.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <PageHeader
            title="Dashboard"
            breadcrumbs={breadcrumbs}
            badge="100 users"
            helpText="Showing 1-10 of 100 users"
            actions={dashboardActions}
            tabs={dashboardTabItems}
            activeTab={activeTabDashboard}
            onTabChange={setActiveTabDashboard}
            variant="dashboard"
          />
        </div>
      </section>

      {/* Minimal Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Minimal Example
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Simple header with just title and actions, no breadcrumbs, badge, or tabs.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <PageHeader
            title="Settings"
            actions={[
              {
                label: 'Save',
                variant: 'primary',
                onClick: () => console.log('Save clicked'),
              },
            ]}
            showDivider={false}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage
        </h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`import { PageHeader } from '@/components/PageHeader';
import { UploadCloudIcon } from '@/components/PageHeader/icons';

const breadcrumbs = [
  { label: '', type: 'icon' },
  { label: 'Page name' },
  { label: 'Current Page', type: 'active page' },
];

const actions = [
  {
    label: 'Primary',
    variant: 'primary',
    rightIcon: <UploadCloudIcon className="w-4 h-4" />,
    onClick: () => console.log('Clicked'),
  },
];

const tabs = [
  { label: 'View all', value: 'all' },
  { label: 'Tab 1', value: 'tab1' },
];

<PageHeader
  title="Team members"
  breadcrumbs={breadcrumbs}
  badge="100 users"
  helpText="Showing 1-10 of 100 users"
  actions={actions}
  tabs={tabs}
  activeTab="all"
  onTabChange={(value) => setActiveTab(value)}
  variant="buttons"
/>`}
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Props
        </h2>
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--color-background-surfaceTertiary)]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-primary)]">
                  Prop
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-primary)]">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-primary)]">
                  Default
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text-primary)]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-default)]">
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">title</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>string</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Page title
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">breadcrumbs</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>BreadcrumbItemData[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Breadcrumb items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">badge</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>string</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Badge text (e.g., "100 users")
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">helpText</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>string</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Help text (e.g., "Showing 1-10 of 100 users")
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">actions</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>PageHeaderAction[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Action buttons
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">tabs</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>TabItem[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Tab items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">variant</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>'buttons' | 'tabs' | 'search' | 'dashboard'</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>'buttons'</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Variant style
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">showDivider</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>boolean</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>true</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Show divider at bottom
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

