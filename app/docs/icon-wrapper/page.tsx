'use client';

import { IconWrapper } from '@/components/IconWrapper';

// Example icons for demonstration
const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default function IconWrapperPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Icon Wrapper
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A simple wrapper component for icons with a circular background.
        Part of the atomic design system - used as a building block for other components.
      </p>

      {/* Size Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Size Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Small (16px icon)
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconWrapper size="small" icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="small" icon={<CheckIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="small" icon={<XIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="small" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Medium (24px icon)
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconWrapper size="medium" icon={<PlusIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="medium" icon={<CheckIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="medium" icon={<XIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="medium" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Large (32px icon)
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconWrapper size="large" icon={<PlusIcon className="w-8 h-8 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="large" icon={<CheckIcon className="w-8 h-8 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="large" icon={<XIcon className="w-8 h-8 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* All Sizes Comparison */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Size Comparison
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Same Icon, Different Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <IconWrapper size="small" icon={<StarIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />} />
                <span className="text-sm text-[var(--color-text-secondary)]">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IconWrapper size="medium" icon={<StarIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
                <span className="text-sm text-[var(--color-text-secondary)]">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IconWrapper size="large" icon={<StarIcon className="w-8 h-8 text-[var(--color-icon-primary)]" />} />
                <span className="text-sm text-[var(--color-text-secondary)]">Large</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage Examples
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Custom Icons
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconWrapper size="medium" icon={<PlusIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="medium" icon={<CheckIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="medium" icon={<XIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
              <IconWrapper size="medium" icon={<StarIcon className="w-6 h-6 text-[var(--color-icon-primary)]" />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Placeholder (No Icon Provided)
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconWrapper size="small" />
              <IconWrapper size="medium" />
              <IconWrapper size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Specifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Design Specifications
        </h2>
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Background</dt>
              <dd className="text-[var(--color-text-secondary)]">#f6f6fc (var(--color-surface-unselected))</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Padding</dt>
              <dd className="text-[var(--color-text-secondary)]">8px (var(--spacing-primitive-2))</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Border Radius</dt>
              <dd className="text-[var(--color-text-secondary)]">Full (9999px)</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Icon Sizes</dt>
              <dd className="text-[var(--color-text-secondary)]">
                Small: 16px, Medium: 24px, Large: 32px
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Total Size</dt>
              <dd className="text-[var(--color-text-secondary)]">
                Small: 32px, Medium: 40px, Large: 48px
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

