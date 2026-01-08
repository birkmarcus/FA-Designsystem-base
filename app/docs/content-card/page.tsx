'use client';

import { ContentCard } from '@/components/ContentCard';

// Example icons
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

// Horse images from Unsplash for examples 🐴 - each one is a different horse!
const landscapeImage = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=456&h=256&fit=crop&auto=format'; // Horse running
const squareImage = 'https://images.unsplash.com/photo-1553284966-3e6ed968e0d3?w=456&h=456&fit=crop&auto=format'; // Horse portrait
const natureImage = 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=456&h=256&fit=crop&auto=format'; // Horse in field
const cityImage = 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=456&h=256&fit=crop&auto=format'; // Horse close-up
const mountainImage = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=456&h=256&fit=crop&auto=format'; // Horse grazing

export default function ContentCardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Content Card
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A versatile content card component with multiple layout variants.
        Uses IconWrapper and Button components for consistent styling.
      </p>

      {/* Variant Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Variants
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Default Variant
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              White background with border, image at top, content below with buttons.
            </p>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="default"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                imageSrc={landscapeImage}
                imageAlt="Example image"
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
                primaryButton={{ label: 'Button', variant: 'primary' }}
                secondaryButton={{ label: 'Button', variant: 'subtle' }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Wrapped Variant
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              White background with border, padding around image, content below with buttons.
            </p>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="wrapped"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                imageSrc={landscapeImage}
                imageAlt="Example image"
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
                primaryButton={{ label: 'Button', variant: 'primary' }}
                secondaryButton={{ label: 'Button', variant: 'subtle' }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Full Variant
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Square image with dark overlay, white text on top, button at bottom.
            </p>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="full"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                imageSrc={squareImage}
                imageAlt="Example image"
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-text-inverse)]" />}
                primaryButton={{ label: 'Button', variant: 'neutral' }}
                showButtons={true}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Plain Variant
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              No border, no image, just icon, category, title, body, and buttons.
            </p>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="plain"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
                showImage={false}
                primaryButton={{ label: 'Button', variant: 'primary' }}
                secondaryButton={{ label: 'Button', variant: 'subtle' }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Horizontal Variant
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Compact horizontal layout with icon, title, and body. No buttons.
            </p>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="horizontal"
                title="Title"
                body="Egestas elit dui"
                icon={<PlusIcon className="w-8 h-8 text-[var(--color-icon-primary)]" />}
                showImage={false}
                showCategory={false}
                showButtons={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Variants Comparison */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          All Variants Side by Side
        </h2>
        <div className="flex flex-wrap gap-8">
          <ContentCard
            variant="default"
            category="Category"
            title="Title"
            body="Egestas elit dui"
            imageSrc={natureImage}
            imageAlt="Default variant"
            icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
            primaryButton={{ label: 'Button' }}
            secondaryButton={{ label: 'Button', variant: 'subtle' }}
          />
          <ContentCard
            variant="wrapped"
            category="Category"
            title="Title"
            body="Egestas elit dui"
            imageSrc={cityImage}
            imageAlt="Wrapped variant"
            icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
            primaryButton={{ label: 'Button' }}
            secondaryButton={{ label: 'Button', variant: 'subtle' }}
          />
          <ContentCard
            variant="full"
            category="Category"
            title="Title"
            body="Egestas elit dui"
            imageSrc={squareImage}
            imageAlt="Full variant"
            icon={<PlusIcon className="w-4 h-4 text-[var(--color-text-inverse)]" />}
            primaryButton={{ label: 'Button', variant: 'neutral' }}
          />
        </div>
      </section>

      {/* Customization Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Customization Examples
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Without Image
            </h3>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="default"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                showImage={false}
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
                primaryButton={{ label: 'Button' }}
                secondaryButton={{ label: 'Button', variant: 'subtle' }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Without Icon
            </h3>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="default"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                imageSrc={natureImage}
                imageAlt="Example"
                showIcon={false}
                primaryButton={{ label: 'Button' }}
                secondaryButton={{ label: 'Button', variant: 'subtle' }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Without Buttons
            </h3>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="default"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                imageSrc={cityImage}
                imageAlt="Example"
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
                showButtons={false}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single Button
            </h3>
            <div className="flex flex-wrap gap-8">
              <ContentCard
                variant="default"
                category="Category"
                title="Title"
                body="Egestas elit dui"
                imageSrc={mountainImage}
                imageAlt="Example"
                icon={<PlusIcon className="w-4 h-4 text-[var(--color-icon-primary)]" />}
                primaryButton={{ label: 'Button' }}
              />
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
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Card Width</dt>
              <dd className="text-[var(--color-text-secondary)]">380px (min-width: 244px)</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Border Radius</dt>
              <dd className="text-[var(--color-text-secondary)]">16px (rounded-2xl)</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Image Aspect Ratio</dt>
              <dd className="text-[var(--color-text-secondary)]">Landscape: 456:256, Square: 1:1</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Content Padding</dt>
              <dd className="text-[var(--color-text-secondary)]">16px (default), varies by variant</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Content Gap</dt>
              <dd className="text-[var(--color-text-secondary)]">24px between sections</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Overlay Opacity</dt>
              <dd className="text-[var(--color-text-secondary)]">48% (Full variant)</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

