'use client';

import { TextBlock } from '@/components/TextBlock';
import { Button } from '@/components/Button';

export default function TextBlockPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Text Block
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        TextBlock component for displaying content with headings and CTAs.
      </p>

      {/* Basic Text Block */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Basic Text Block
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Full Example
            </h3>
            <TextBlock
              label="Label"
              heading="Heading"
              subheading="Subheading"
              body="This is the body text. It can contain multiple paragraphs and provides detailed information about the content."
              ctaPrimary={
                <Button variant="primary" size="medium">
                  Primary CTA
                </Button>
              }
              ctaSecondary={
                <Button variant="neutral" size="medium">
                  Secondary CTA
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Minimal Example
            </h3>
            <TextBlock
              heading="Simple Heading"
              body="Just a heading and body text."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

