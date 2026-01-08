'use client';

import { Breadcrumb } from '@/components/Breadcrumb';
import { BreadcrumbItem } from '@/components/Breadcrumb';

export default function BreadcrumbsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Breadcrumbs
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Breadcrumb navigation component for showing the current page hierarchy.
      </p>

      {/* Basic Breadcrumb */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Basic Breadcrumb
        </h2>
        <div className="space-y-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/', type: 'icon' },
              { label: 'Page name', href: '/page' },
              { label: 'Current page', type: 'active' },
            ]}
          />
        </div>
      </section>

      {/* Breadcrumb with Multiple Levels */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Multiple Levels
        </h2>
        <div className="space-y-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/', type: 'icon' },
              { label: 'Category', href: '/category' },
              { label: 'Subcategory', href: '/category/subcategory' },
              { label: 'Current page', type: 'active' },
            ]}
          />
        </div>
      </section>

      {/* Breadcrumb with Intermediate (Ellipsis) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          With Intermediate (Ellipsis)
        </h2>
        <div className="space-y-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/', type: 'icon' },
              { label: '...', type: 'intermediate' },
              { label: 'Current page', type: 'active' },
            ]}
          />
        </div>
      </section>

      {/* Breadcrumb without Home Icon */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Without Home Icon
        </h2>
        <div className="space-y-8">
          <Breadcrumb
            items={[
              { label: 'Page name', href: '/page' },
              { label: 'Subpage', href: '/page/subpage' },
              { label: 'Current page', type: 'active' },
            ]}
          />
        </div>
      </section>

      {/* Individual Breadcrumb Items */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Individual Breadcrumb Items
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Icon Item (Home)
            </h3>
            <div className="flex gap-2">
              <BreadcrumbItem label="Home" type="icon" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Page Item
            </h3>
            <div className="flex gap-2">
              <BreadcrumbItem label="Page name" href="/page" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Active Page Item
            </h3>
            <div className="flex gap-2">
              <BreadcrumbItem label="Current page" type="active" showSeparator={false} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Intermediate Item (Ellipsis)
            </h3>
            <div className="flex gap-2">
              <BreadcrumbItem label="..." type="intermediate" />
            </div>
          </div>
        </div>
      </section>

      {/* Long Breadcrumb Path */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Long Breadcrumb Path
        </h2>
        <div className="space-y-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/', type: 'icon' },
              { label: 'Level 1', href: '/level1' },
              { label: 'Level 2', href: '/level1/level2' },
              { label: 'Level 3', href: '/level1/level2/level3' },
              { label: 'Level 4', href: '/level1/level2/level3/level4' },
              { label: 'Current page', type: 'active' },
            ]}
          />
        </div>
      </section>

      {/* Interactive Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Interactive Example
        </h2>
        <div className="space-y-8">
          <Breadcrumb
            items={[
              { 
                label: 'Home', 
                href: '/', 
                type: 'icon',
                onClick: () => console.log('Home clicked')
              },
              { 
                label: 'Products', 
                href: '/products',
                onClick: () => console.log('Products clicked')
              },
              { 
                label: 'Electronics', 
                href: '/products/electronics',
                onClick: () => console.log('Electronics clicked')
              },
              { 
                label: 'Current Product', 
                type: 'active' 
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

