'use client';

import { Hero } from '@/components/Hero';

export default function HeroPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Hero
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Hero section component with flexible alignment options for both vertical and horizontal axes.
      </p>

      {/* Alignment Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Alignment Variants
        </h2>
        <div className="space-y-16">
          {/* Center Y, Left X */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Center Y-axis, Left X-axis
            </h3>
            <div className="border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <Hero
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed."
                primaryActionLabel="Button"
                secondaryActionLabel="Button"
                alignmentY="center"
                alignmentX="left"
                onPrimaryAction={() => console.log('Primary action')}
                onSecondaryAction={() => console.log('Secondary action')}
              />
            </div>
          </div>

          {/* Center Y, Center X */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Center Y-axis, Center X-axis
            </h3>
            <div className="border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <Hero
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed."
                primaryActionLabel="Button"
                secondaryActionLabel="Button"
                alignmentY="center"
                alignmentX="center"
                onPrimaryAction={() => console.log('Primary action')}
                onSecondaryAction={() => console.log('Secondary action')}
              />
            </div>
          </div>

          {/* Bottom Y, Left X */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Bottom Y-axis, Left X-axis
            </h3>
            <div className="border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <Hero
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed."
                primaryActionLabel="Button"
                secondaryActionLabel="Button"
                alignmentY="bottom"
                alignmentX="left"
                onPrimaryAction={() => console.log('Primary action')}
                onSecondaryAction={() => console.log('Secondary action')}
              />
            </div>
          </div>

          {/* Bottom Y, Right X */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Bottom Y-axis, Right X-axis
            </h3>
            <div className="border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <Hero
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed."
                primaryActionLabel="Button"
                secondaryActionLabel="Button"
                alignmentY="bottom"
                alignmentX="right"
                onPrimaryAction={() => console.log('Primary action')}
                onSecondaryAction={() => console.log('Secondary action')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Height */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Custom Height
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Short Hero (400px)
            </h3>
            <div className="border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <Hero
                heading="Short Hero Section"
                description="This hero has a custom height of 400px."
                primaryActionLabel="Button"
                height={400}
                alignmentY="center"
                alignmentX="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Single Button */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Single Button
        </h2>
        <div className="border border-[var(--color-border-default)] rounded-lg overflow-hidden">
          <Hero
            heading="Hero with Single Action"
            description="This hero only has a primary action button."
            primaryActionLabel="Get Started"
            alignmentY="center"
            alignmentX="center"
            onPrimaryAction={() => console.log('Get started')}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage Examples
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Usage
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`import { Hero } from '@/components/Hero';

<Hero
  heading="Welcome to Our Platform"
  description="Discover amazing features and get started today."
  primaryActionLabel="Get Started"
  secondaryActionLabel="Learn More"
  alignmentY="center"
  alignmentX="left"
  onPrimaryAction={() => console.log('Get started')}
  onSecondaryAction={() => console.log('Learn more')}
/>`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Center Aligned
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`<Hero
  heading="Centered Hero"
  description="This hero is centered both vertically and horizontally."
  primaryActionLabel="Button"
  alignmentY="center"
  alignmentX="center"
/>`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Bottom Right Aligned
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`<Hero
  heading="Bottom Right Hero"
  description="This hero is aligned to the bottom right."
  primaryActionLabel="Button"
  alignmentY="bottom"
  alignmentX="right"
/>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

