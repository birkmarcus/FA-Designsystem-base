'use client';

import { Hero } from '@/components/Hero';

export default function HeroPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Hero Component
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Hero section component with multiple variants and responsive design.
      </p>

      {/* Default Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Large Size
            </h3>
            <Hero
              label="Label"
              heading="Build amazing products with our design system"
              subheading="Create beautiful, consistent interfaces"
              body="Our design system provides all the components and patterns you need to build exceptional user experiences. Built with accessibility and performance in mind."
              primaryCta="Get Started"
              secondaryCta="Learn More"
              onPrimaryCtaClick={() => console.log('Primary CTA clicked')}
              onSecondaryCtaClick={() => console.log('Secondary CTA clicked')}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Medium Size
            </h3>
            <Hero
              size="medium"
              label="Label"
              heading="Streamline your workflow"
              body="Everything you need in one place."
              primaryCta="Start Now"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Small Size
            </h3>
            <Hero
              size="small"
              heading="Quick start"
              body="Get up and running in minutes."
              primaryCta="Get Started"
            />
          </div>
        </div>
      </section>

      {/* Centered Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Centered Variant
        </h2>
        <div className="space-y-8">
          <Hero
            variant="centered"
            label="Welcome"
            heading="Welcome to our platform"
            subheading="Everything you need to succeed"
            body="Join thousands of teams building better products with our comprehensive design system and component library."
            primaryCta="Get Started"
            secondaryCta="View Documentation"
          />
        </div>
      </section>

      {/* Split Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Split Variant (with Image)
        </h2>
        <div className="space-y-8">
          <Hero
            variant="split"
            label="Feature"
            heading="Powerful features for modern teams"
            subheading="Built for scale and performance"
            body="Our platform provides everything you need to build, deploy, and scale your applications with confidence."
            primaryCta="Start Free Trial"
            secondaryCta="Schedule Demo"
            image={
              <div className="w-full h-[400px] bg-[var(--color-background-surfaceTertiary)] rounded-lg flex items-center justify-center">
                <p className="text-[var(--color-text-tertiary)]">Image Placeholder</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Minimal Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Minimal Variant
        </h2>
        <div className="space-y-8">
          <Hero
            variant="minimal"
            heading="Simple and focused"
            body="Just the essentials."
            primaryCta="Get Started"
            background="primary"
          />
        </div>
      </section>

      {/* Background Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Background Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Primary Background
            </h3>
            <Hero
              background="primary"
              heading="Stand out with primary background"
              body="Perfect for highlighting important content."
              primaryCta="Learn More"
              secondaryCta="Contact Us"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Neutral Background
            </h3>
            <Hero
              background="neutral"
              heading="Neutral and balanced"
              body="A subtle background option."
              primaryCta="Get Started"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

