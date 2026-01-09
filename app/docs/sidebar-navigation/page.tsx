'use client';

import { useState } from 'react';
import { SidebarNavigation, NavItem } from '@/components/SidebarNavigation';
import {
  HomeIcon,
  ProjectsIcon,
  TasksIcon,
  UsersIcon,
  SupportIcon,
  SettingsIcon,
  LogoutIcon,
} from '@/components/SidebarNavigation/icons';

export default function SidebarNavigationPage() {
  const [subNavOpen, setSubNavOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState(true); // Start with Projects expanded

  // Default navigation items - matching Figma design
  const defaultItems: NavItem[] = [
    {
      label: 'Home',
      icon: <HomeIcon className="w-6 h-6" />,
      active: false,
      onClick: () => console.log('Home clicked'),
    },
    {
      label: 'Projects',
      icon: <ProjectsIcon className="w-6 h-6" />,
      active: true, // Projects is active/expanded
      chevron: true,
      subItems: [
        {
          label: 'Project 1',
          onClick: () => console.log('Project 1 clicked'),
        },
        {
          label: 'Project 2',
          active: true, // Project 2 is active
          onClick: () => console.log('Project 2 clicked'),
        },
        {
          label: 'Project 3',
          onClick: () => console.log('Project 3 clicked'),
        },
      ],
      onClick: () => {
        setExpandedProjects(!expandedProjects);
        console.log('Projects clicked');
      },
    },
    {
      label: 'Tasks',
      icon: <TasksIcon className="w-6 h-6" />,
      chevron: true,
      onClick: () => console.log('Tasks clicked'),
    },
    {
      label: 'Users',
      icon: <UsersIcon className="w-6 h-6" />,
      onClick: () => console.log('Users clicked'),
    },
  ];

  // Footer items
  const footerItems: NavItem[] = [
    {
      label: 'Support',
      icon: <SupportIcon className="w-6 h-6" />,
      onClick: () => console.log('Support clicked'),
    },
    {
      label: 'Settings',
      icon: <SettingsIcon className="w-6 h-6" />,
      active: true,
      onClick: () => console.log('Settings clicked'),
    },
  ];

  // Slim variant items (icon-only) - matching Figma design
  const slimItems: NavItem[] = [
    {
      label: 'Home',
      icon: <HomeIcon className="w-6 h-6" />,
      onClick: () => console.log('Home clicked'),
    },
    {
      label: 'Settings', // In slim variant, Settings opens sub-nav
      icon: <SettingsIcon className="w-6 h-6" />,
      active: subNavOpen,
      subItems: [
        {
          label: 'Home',
          icon: <HomeIcon className="w-6 h-6" />,
          active: true,
          onClick: () => console.log('Sub Home clicked'),
        },
        {
          label: 'Profile',
          icon: <HomeIcon className="w-6 h-6" />,
          onClick: () => console.log('Profile clicked'),
        },
        {
          label: 'Password',
          icon: <HomeIcon className="w-6 h-6" />,
          onClick: () => console.log('Password clicked'),
        },
        {
          label: 'Team',
          icon: <HomeIcon className="w-6 h-6" />,
          onClick: () => console.log('Team clicked'),
        },
        {
          label: 'Billing',
          icon: <HomeIcon className="w-6 h-6" />,
          onClick: () => console.log('Billing clicked'),
        },
        {
          label: 'Notifications',
          icon: <HomeIcon className="w-6 h-6" />,
          badge: 3,
          onClick: () => console.log('Notifications clicked'),
        },
      ],
      onClick: () => {
        setSubNavOpen(!subNavOpen);
        console.log('Settings clicked');
      },
    },
    {
      label: 'Projects',
      icon: <ProjectsIcon className="w-6 h-6" />,
      onClick: () => console.log('Projects clicked'),
    },
    {
      label: 'Tasks',
      icon: <TasksIcon className="w-6 h-6" />,
      onClick: () => console.log('Tasks clicked'),
    },
    {
      label: 'Users',
      icon: <UsersIcon className="w-6 h-6" />,
      onClick: () => console.log('Users clicked'),
    },
  ];

  // Slim footer items
  const slimFooterItems: NavItem[] = [
    {
      label: 'Support',
      icon: <SupportIcon className="w-6 h-6" />,
      onClick: () => console.log('Support clicked'),
    },
    {
      label: 'Settings',
      icon: <SettingsIcon className="w-6 h-6" />,
      active: subNavOpen, // Active when sub-nav is open
      onClick: () => {
        setSubNavOpen(!subNavOpen);
        console.log('Settings clicked');
      },
    },
  ];

  // Brand logo component
  const BrandLogo = () => (
    <div className="w-full h-full flex items-center justify-center text-[var(--color-text-primary)]">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    </div>
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Sidebar Navigation
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A sidebar navigation component with two variants: Default (full width with labels)
        and Slim (icon-only). Supports expandable sub-navigation, badges, and account info.
      </p>

      {/* Default Variant - Expanded */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - With Expanded Dropdown
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Shows the default variant with Projects expanded, displaying inline sub-items (Project 1, Project 2, Project 3).
          Sub-items are simple text labels without icons. Project 2 is active.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <div className="inline-block">
            <SidebarNavigation
              variant="default"
              brandLogo={<BrandLogo />}
              brandName="Logo"
              items={defaultItems}
              footerItems={footerItems}
              account={{
                name: 'Jane Doe',
                email: 'janedoe@mail.com',
              }}
              searchPlaceholder="Search"
            />
          </div>
        </div>
      </section>

      {/* Default Variant - Collapsed */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - Collapsed
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Shows the default variant with all items collapsed.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <div className="inline-block">
            <SidebarNavigation
              variant="default"
              brandLogo={<BrandLogo />}
              brandName="Logo"
              items={defaultItems.map(item => 
                item.label === 'Projects' 
                  ? { ...item, active: false } 
                  : item
              )}
              footerItems={footerItems}
              account={{
                name: 'Jane Doe',
                email: 'janedoe@mail.com',
              }}
              searchPlaceholder="Search"
            />
          </div>
        </div>
      </section>

      {/* Slim Variant - Collapsed */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Slim Variant - Icon Only
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Shows the slim variant with icon-only navigation. Clicking an item with sub-items opens a separate sub-navigation panel.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <div className="inline-block">
            <SidebarNavigation
              variant="slim"
              brandLogo={<BrandLogo />}
              items={slimItems}
              footerItems={slimFooterItems}
              account={{
                name: 'Olivia Rhye',
                email: 'olivia@untitledui.com',
              }}
              subNavOpen={false}
              onSubNavToggle={setSubNavOpen}
            />
          </div>
        </div>
      </section>

      {/* Slim Variant with Sub-Nav Open */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Slim Variant - With Sub-Navigation Panel
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Shows the slim variant with the sub-navigation panel open. The panel appears to the right of the sidebar,
          showing Settings sub-items with icons. The account information is shown at the bottom of the sub-nav panel.
        </p>
        <div className="bg-[var(--color-background-surfaceTertiary)] p-8 rounded-lg overflow-x-auto">
          <div className="inline-block">
            <SidebarNavigation
              variant="slim"
              brandLogo={<BrandLogo />}
              items={slimItems}
              footerItems={slimFooterItems}
              account={{
                name: 'Olivia Rhye',
                email: 'olivia@untitledui.com',
              }}
              subNavOpen={true}
              onSubNavToggle={setSubNavOpen}
            />
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage
        </h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`import { SidebarNavigation, NavItem } from '@/components/SidebarNavigation';
import { HomeIcon, ProjectsIcon } from '@/components/SidebarNavigation/icons';

const items: NavItem[] = [
  {
    label: 'Home',
    icon: <HomeIcon className="w-6 h-6" />,
    active: true,
    onClick: () => console.log('Home clicked'),
  },
  {
    label: 'Projects',
    icon: <ProjectsIcon className="w-6 h-6" />,
    chevron: true,
    subItems: [
      {
        label: 'Sub Item 1',
        icon: <HomeIcon className="w-6 h-6" />,
        onClick: () => console.log('Sub item clicked'),
      },
    ],
  },
];

<SidebarNavigation
  variant="default"
  brandLogo={<YourLogo />}
  brandName="Logo"
  items={items}
  footerItems={footerItems}
  account={{
    name: 'Jane Doe',
    email: 'janedoe@mail.com',
  }}
  searchPlaceholder="Search"
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
                  <code className="bg-gray-100 px-2 py-1 rounded">variant</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>'default' | 'slim'</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>'default'</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Variant style of the sidebar
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">brandLogo</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>React.ReactNode</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Brand logo/favicon element
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">brandName</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>string</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Brand name text (only shown in default variant)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">items</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>NavItem[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Main navigation items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">footerItems</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>NavItem[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Footer navigation items
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">account</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>{'{ name: string; email: string; avatar?: React.ReactNode }'}</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  User account information
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">searchPlaceholder</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>string</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>'Search'</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Search placeholder text (default variant only)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">subNavOpen</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>boolean</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>false</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Whether sub-navigation is open (slim variant only)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">onSubNavToggle</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>(open: boolean) =&gt; void</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  -
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Callback when sub-navigation opens/closes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* NavItem Props */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          NavItem Props
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
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-default)]">
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">label</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>string</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Label text for the navigation item
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">icon</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>React.ReactNode</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Icon element to display
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">active</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>boolean</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Whether this item is active/selected
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">chevron</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>boolean</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Whether this item has a chevron (expandable)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">badge</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>number</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Badge count to display (e.g., notification count)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">subItems</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>NavItem[]</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Sub-navigation items (for expandable items)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">
                  <code className="bg-gray-100 px-2 py-1 rounded">onClick</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  <code>() =&gt; void</code>
                </td>
                <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                  Click handler
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

