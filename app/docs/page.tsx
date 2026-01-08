import Link from 'next/link';

export default function DocsOverview() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        FA Design System
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A comprehensive design system built with React, Next.js, and Tailwind CSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link
          href="/docs/buttons"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Buttons
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Button, IconButton, and NavigationButton components with multiple variants and states.
          </p>
        </Link>

        <Link
          href="/docs/list-items"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            List Items
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            ListItem and DropdownItem components for navigation and dropdowns.
          </p>
        </Link>

        <Link
          href="/docs/form-inputs"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Form Inputs
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Checkbox, Radio, Switch, and CheckboxGroup components.
          </p>
        </Link>

        <Link
          href="/docs/input-fields"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Input Fields
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            InputField component with Input and TextArea types, multiple states, and validation feedback.
          </p>
        </Link>

        <Link
          href="/docs/dropdowns"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Dropdowns
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Dropdown component with single and multiselect support.
          </p>
        </Link>

        <Link
          href="/docs/search-fields"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Search Fields
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            SearchField component with search icon and clear button.
          </p>
        </Link>

        <Link
          href="/docs/text-block"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Text Block
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            TextBlock component for displaying content with headings and CTAs.
          </p>
        </Link>

        <Link
          href="/docs/group-fields"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Group Fields
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            GroupField component for grouping radio buttons or checkboxes.
          </p>
        </Link>

        <Link
          href="/docs/pagination"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Pagination
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Pagination component with three variants (Default, Simple, Group) and multiple alignment options.
          </p>
        </Link>

        <Link
          href="/docs/carousel-pagination"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Carousel Pagination
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Carousel pagination components including dots, pagination groups, and navigation arrows.
          </p>
        </Link>

        <Link
          href="/docs/breadcrumbs"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Breadcrumbs
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Breadcrumb navigation component for showing the current page hierarchy with home icon, pages, and active state.
          </p>
        </Link>

        <Link
          href="/docs/colors"
          className="p-6 rounded-lg border border-[var(--color-border-default)] hover:border-[var(--color-border-focus)] transition-colors duration-fast"
        >
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            Colors
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Complete color palette with primitives and semantic tokens.
          </p>
        </Link>
      </div>

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

