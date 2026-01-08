'use client';

import { Button } from '@/components/Button';
import { SearchField } from '@/components/SearchField';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-surface)]">
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
