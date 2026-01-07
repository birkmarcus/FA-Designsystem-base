'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '/docs' },
  { label: 'Hero', href: '/docs/hero' },
  { label: 'Buttons', href: '/docs/buttons' },
  { label: 'List Items', href: '/docs/list-items' },
  { label: 'Form Inputs', href: '/docs/form-inputs' },
  { label: 'Dropdowns', href: '/docs/dropdowns' },
  { label: 'Search Fields', href: '/docs/search-fields' },
  { label: 'Text Block', href: '/docs/text-block' },
  { label: 'Group Fields', href: '/docs/group-fields' },
  { label: 'Colors', href: '/docs/colors' },
];

export function DocsSidebar() {
  const pathname = usePathname();

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
      
      <nav className="space-y-1">
        {navItems.map((item) => {
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
      </nav>
    </aside>
  );
}

