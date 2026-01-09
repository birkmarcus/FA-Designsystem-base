import Link from 'next/link';

export default function DocsOverview() {
  const categories = [
    {
      name: 'Foundation',
      description: 'Design tokens and base styles',
      components: [
        {
          href: '/docs/colors',
          title: 'Colors',
          description: 'Complete color palette with primitives and semantic tokens.',
        },
        {
          href: '/docs/typography',
          title: 'Typography',
          description: 'Type scale, font families, and text styles.',
        },
        {
          href: '/docs/sizing-and-grid',
          title: 'Sizing and Grid',
          description: 'Spacing system, layout grid, and sizing tokens.',
        },
      ],
    },
    {
      name: 'Actions',
      description: 'Interactive buttons and triggers',
      components: [
        {
          href: '/docs/buttons',
          title: 'Buttons',
          description: 'Button, IconButton, and NavigationButton components with multiple variants and states.',
        },
        {
          href: '/docs/list-items',
          title: 'List Items',
          description: 'ListItem and DropdownItem components for navigation and dropdowns.',
        },
      ],
    },
    {
      name: 'Forms',
      description: 'Form inputs and fields',
      components: [
        {
          href: '/docs/form-inputs',
          title: 'Form Inputs',
          description: 'Checkbox, Radio, Switch, and CheckboxGroup components.',
        },
        {
          href: '/docs/input-fields',
          title: 'Input Fields',
          description: 'InputField component with Input and TextArea types, multiple states, and validation feedback.',
        },
        {
          href: '/docs/search-fields',
          title: 'Search Fields',
          description: 'SearchField component with search icon and clear button.',
        },
        {
          href: '/docs/dropdowns',
          title: 'Dropdowns',
          description: 'Dropdown component with single and multiselect support.',
        },
        {
          href: '/docs/group-fields',
          title: 'Group Fields',
          description: 'GroupField component for grouping radio buttons or checkboxes.',
        },
        {
          href: '/docs/form-groups',
          title: 'Form Groups',
          description: 'FormGroup component for organizing form fields with labels and validation.',
        },
      ],
    },
    {
      name: 'Navigation',
      description: 'Navigation components',
      components: [
        {
          href: '/docs/breadcrumbs',
          title: 'Breadcrumbs',
          description: 'Breadcrumb navigation component for showing the current page hierarchy with home icon, pages, and active state.',
        },
        {
          href: '/docs/pagination',
          title: 'Pagination',
          description: 'Pagination component with three variants (Default, Simple, Group) and multiple alignment options.',
        },
        {
          href: '/docs/carousel-pagination',
          title: 'Carousel Pagination',
          description: 'Carousel pagination components including dots, pagination groups, and navigation arrows.',
        },
        {
          href: '/docs/tabs',
          title: 'Tabs',
          description: 'Tab and TabGroup components with multiple variants and states.',
        },
        {
          href: '/docs/tab-menu',
          title: 'Tab Menu',
          description: 'TabMenu component with fixed-width and equal-width variants.',
        },
      ],
    },
    {
      name: 'Content',
      description: 'Content display components',
      components: [
        {
          href: '/docs/text-block',
          title: 'Text Block',
          description: 'TextBlock component for displaying content with headings and CTAs.',
        },
        {
          href: '/docs/content',
          title: 'Content',
          description: 'Content component for structured content display.',
        },
        {
          href: '/docs/content-card',
          title: 'Content Card',
          description: 'ContentCard component for displaying card-based content.',
        },
        {
          href: '/docs/hero',
          title: 'Hero',
          description: 'Hero component for prominent page headers and introductions.',
        },
        {
          href: '/docs/cta',
          title: 'CTA',
          description: 'Call-to-action component with Vertical, Horizontal, and Newsletter layouts.',
        },
        {
          href: '/docs/faq',
          title: 'FAQ',
          description: 'Frequently Asked Questions component with header section and collapsible FAQ items.',
        },
        {
          href: '/docs/info',
          title: 'Info',
          description: 'Info component for displaying informational content with icons.',
        },
        {
          href: '/docs/navigation-cards',
          title: 'Navigation Cards',
          description: 'NavigationCards component for card-based navigation layouts.',
        },
        {
          href: '/docs/image-format',
          title: 'Image Format',
          description: 'ImageFormat component for displaying images with various formats and aspect ratios.',
        },
      ],
    },
    {
      name: 'Feedback',
      description: 'Feedback and notification components',
      components: [
        {
          href: '/docs/tooltips',
          title: 'Tooltips',
          description: 'Tooltip component with multiple variants and positioning options.',
        },
        {
          href: '/docs/badges',
          title: 'Badges',
          description: 'Badge component for labels, status indicators, and notifications.',
        },
        {
          href: '/docs/banner',
          title: 'Banner',
          description: 'Banner component for displaying important messages and announcements.',
        },
        {
          href: '/docs/accordions',
          title: 'Accordions',
          description: 'Accordion component for collapsible content sections.',
        },
        {
          href: '/docs/icon-wrapper',
          title: 'Icon Wrapper',
          description: 'IconWrapper component for consistent icon display and sizing.',
        },
      ],
    },
    {
      name: 'Product components',
      description: 'Product-specific components and patterns',
      components: [
        {
          href: '/docs/sidebar-navigation',
          title: 'Sidebar Navigation',
          description: 'Sidebar navigation component with Default and Slim variants. Supports expandable sub-navigation, badges, and account info.',
        },
        {
          href: '/docs/page-header',
          title: 'Page Header',
          description: 'Comprehensive page header component with breadcrumbs, title, badge, help text, action buttons, tabs, and search functionality.',
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        FA Design System
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A comprehensive design system built with React, Next.js, and Tailwind CSS.
      </p>

      {categories.map((category) => (
        <section key={category.name} className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
              {category.name}
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              {category.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.components.map((component) => (
              <Link
                key={component.href}
                href={component.href}
                className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
              >
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {component.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 p-6 bg-[var(--color-background-surfaceTertiary)] rounded-lg">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
          Design Principles
        </h2>
        <ul className="space-y-2 text-[var(--color-text-secondary)]">
          <li>✅ <strong>Token-First:</strong> All styling uses design tokens, no hardcoded values</li>
          <li>✅ <strong>Accessibility:</strong> All components are keyboard navigable and screen reader friendly</li>
          <li>✅ <strong>Consistency:</strong> Unified design language across all components</li>
          <li>✅ <strong>Reusability:</strong> Components are composable and flexible</li>
        </ul>
      </div>
    </div>
  );
}
