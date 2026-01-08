'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

type NavSection = NavItem | NavGroup;

const isNavGroup = (section: NavSection): section is NavGroup => {
  return 'items' in section;
};

const navSections: NavSection[] = [
  { label: 'Overview', href: '/docs' },
  {
    label: 'Atoms',
    items: [
      { label: 'Accordions', href: '/docs/accordions' },
      { label: 'Badges', href: '/docs/badges' },
      { label: 'Banner', href: '/docs/banner' },
      { label: 'Breadcrumbs', href: '/docs/breadcrumbs' },
      { label: 'Buttons', href: '/docs/buttons' },
      { label: 'Carousel Pagination', href: '/docs/carousel-pagination' },
      { label: 'Content Card', href: '/docs/content-card' },
      { label: 'Dropdowns', href: '/docs/dropdowns' },
      { label: 'Form Groups', href: '/docs/form-groups' },
      { label: 'Form Inputs', href: '/docs/form-inputs' },
      { label: 'Group Fields', href: '/docs/group-fields' },
      { label: 'Icon Wrapper', href: '/docs/icon-wrapper' },
      { label: 'Image Format', href: '/docs/image-format' },
      { label: 'Input Fields', href: '/docs/input-fields' },
      { label: 'List Items', href: '/docs/list-items' },
      { label: 'Pagination', href: '/docs/pagination' },
      { label: 'Search Fields', href: '/docs/search-fields' },
      { label: 'Tabs', href: '/docs/tabs' },
      { label: 'Text Block', href: '/docs/text-block' },
      { label: 'Tooltips', href: '/docs/tooltips' },
    ],
  },
  {
    label: 'Style',
    items: [
      { label: 'Colors', href: '/docs/colors' },
      { label: 'Typography', href: '/docs/typography' },
      { label: 'Sizing and Grid', href: '/docs/sizing-and-grid' },
    ],
  },
  {
    label: 'Web Components',
    items: [
      { label: 'Content', href: '/docs/content' },
      { label: 'CTA', href: '/docs/cta' },
      { label: 'FAQ', href: '/docs/faq' },
      { label: 'Hero', href: '/docs/hero' },
      { label: 'Info', href: '/docs/info' },
      { label: 'Navigation Cards', href: '/docs/navigation-cards' },
      { label: 'Tab Menu', href: '/docs/tab-menu' },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  
  // Initialize all groups as expanded by default for consistency across all pages
  const initializeExpandedGroups = () => {
    const allGroups = new Set<string>();
    navSections.forEach((section) => {
      if (isNavGroup(section)) {
        allGroups.add(section.label);
      }
    });
    return allGroups;
  };

  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(initializeExpandedGroups);

  // Ensure groups with active items stay expanded when navigating
  useEffect(() => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      navSections.forEach((section) => {
        if (isNavGroup(section)) {
          const hasActiveItem = section.items.some((item) => pathname === item.href);
          if (hasActiveItem) {
            next.add(section.label);
          }
        }
      });
      return next;
    });
  }, [pathname]);

  const toggleGroup = (groupLabel: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupLabel)) {
        next.delete(groupLabel);
      } else {
        next.add(groupLabel);
      }
      return next;
    });
  };

  const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg
      className={cn(
        'w-4 h-4 transition-transform duration-200',
        isExpanded && 'rotate-90'
      )}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <aside className="w-64 min-h-screen bg-[var(--color-background-surface)] border-r border-[var(--color-border-default)] p-6 sticky top-0">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Design System
        </h1>
        <p className="text-sm text-[var(--color-text-tertiary)] mt-1">
          Component Library
        </p>
      </div>
      
      <nav className="space-y-4">
        {navSections.map((section) => {
          if (isNavGroup(section)) {
            const isExpanded = expandedGroups.has(section.label);
            const hasActiveItem = section.items.some((item) => pathname === item.href);
            
            return (
              <div key={section.label}>
                <button
                  onClick={() => toggleGroup(section.label)}
                  className={cn(
                    'w-full flex items-start justify-start gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider',
                    'hover:bg-[var(--color-background-surfaceTertiary)] transition-colors duration-fast',
                    hasActiveItem && 'text-[var(--color-text-primary)]'
                  )}
                >
                  <span className="text-left">{section.label}</span>
                  <ChevronIcon isExpanded={isExpanded} />
                </button>
                {isExpanded && (
                  <div className="mt-1 space-y-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            'block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-fast',
                            'hover:bg-[var(--color-background-surfaceTertiary)]',
                            isActive
                              ? 'bg-[var(--color-background-surfaceTertiary)] text-[var(--color-text-primary)]'
                              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          } else {
            const isActive = pathname === section.href;
            
            return (
              <Link
                key={section.href}
                href={section.href}
                className={cn(
                  'block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-fast',
                  'hover:bg-[var(--color-background-surfaceTertiary)]',
                  isActive
                    ? 'bg-[var(--color-background-surfaceTertiary)] text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                )}
              >
                {section.label}
              </Link>
            );
          }
        })}
      </nav>
    </aside>
  );
}

