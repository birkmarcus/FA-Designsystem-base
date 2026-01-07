'use client';

import { Hero } from '@/components/Hero';
import { Button } from '@/components/Button';
import { SearchField } from '@/components/SearchField';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-surface)]">
      {/* Hero Section - Default Variant */}
      <Hero
        variant="default"
        size="large"
        label="Welcome to our platform"
        heading="Build amazing products with our design system"
        subheading="Create beautiful, consistent interfaces"
        body="Our design system provides all the components and patterns you need to build exceptional user experiences. Built with accessibility and performance in mind."
        primaryCta="Get Started"
        secondaryCta="Learn More"
        onPrimaryCtaClick={() => console.log('Get Started clicked')}
        onSecondaryCtaClick={() => console.log('Learn More clicked')}
      />

      {/* Hero Section - Centered Variant */}
      <Hero
        variant="centered"
        size="medium"
        label="Features"
        heading="Everything you need to succeed"
        body="Join thousands of teams building better products with our comprehensive design system and component library."
        primaryCta="Start Free Trial"
        secondaryCta="View Documentation"
      />

      {/* Hero Section - Split Variant */}
      <Hero
        variant="split"
        size="large"
        label="Product"
        heading="Powerful features for modern teams"
        subheading="Built for scale and performance"
        body="Our platform provides everything you need to build, deploy, and scale your applications with confidence."
        primaryCta="Start Free Trial"
        secondaryCta="Schedule Demo"
        image={
          <div className="w-full h-[400px] bg-gradient-to-br from-[var(--color-background-primary)] to-[var(--color-background-secondary)] rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-[var(--color-background-surface)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-[var(--color-text-inverse)] font-medium">Product Image</p>
            </div>
          </div>
        }
      />

      {/* Hero Section - Primary Background */}
      <Hero
        background="primary"
        variant="centered"
        size="large"
        heading="Ready to get started?"
        body="Join our community and start building amazing products today."
        primaryCta="Sign Up Free"
        secondaryCta="Contact Sales"
      />

      {/* Additional Content Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[var(--color-background-surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] mb-4">
              Additional Components
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Here are some other components from our design system in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Search Feature
              </h3>
              <SearchField
                label="Search"
                placeholder="Search for components..."
              />
            </div>

            <div className="p-6 bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Call to Action
              </h3>
              <div className="flex flex-col gap-4">
                <Button variant="primary" size="medium">
                  Primary Action
                </Button>
                <Button variant="neutral" size="medium">
                  Secondary Action
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

