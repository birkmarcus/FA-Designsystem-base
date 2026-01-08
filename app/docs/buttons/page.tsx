'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { NavigationButton } from '@/components/NavigationButton';

function NavigationButtonExample() {
  const [opened, setOpened] = useState(false);

  return (
    <NavigationButton
      opened={opened}
      onClick={() => setOpened(!opened)}
      aria-label={opened ? 'Close navigation menu' : 'Open navigation menu'}
    />
  );
}

export default function ButtonsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Buttons
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Button components with multiple variants, sizes, and states.
      </p>

      {/* Primary Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Primary Variant
        </h2>
        <div className="space-y-8">
          {/* Medium Size */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Medium Size
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="medium">
                Button
              </Button>
              <Button variant="primary" size="medium" disabled>
                Disabled
              </Button>
              <Button
                variant="primary"
                size="medium"
                leftIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                With Left Icon
              </Button>
              <Button
                variant="primary"
                size="medium"
                rightIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
              >
                With Right Icon
              </Button>
            </div>
          </div>

          {/* Small Size */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Small Size
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="small">
                Button
              </Button>
              <Button variant="primary" size="small" disabled>
                Disabled
              </Button>
              <Button
                variant="primary"
                size="small"
                leftIcon={
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                With Icon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Neutral Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Neutral Variant
        </h2>
        <div className="space-y-8">
          {/* Medium Size */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Medium Size
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="neutral" size="medium">
                Button
              </Button>
              <Button variant="neutral" size="medium" disabled>
                Disabled
              </Button>
              <Button
                variant="neutral"
                size="medium"
                leftIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                With Left Icon
              </Button>
              <Button
                variant="neutral"
                size="medium"
                rightIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
              >
                With Right Icon
              </Button>
            </div>
          </div>

          {/* Small Size */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Small Size
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="neutral" size="small">
                Button
              </Button>
              <Button variant="neutral" size="small" disabled>
                Disabled
              </Button>
              <Button
                variant="neutral"
                size="small"
                leftIcon={
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                With Icon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Subtle Variant
        </h2>
        <div className="space-y-8">
          {/* Medium Size */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Medium Size
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="subtle" size="medium">
                Button
              </Button>
              <Button variant="subtle" size="medium" disabled>
                Disabled
              </Button>
              <Button
                variant="subtle"
                size="medium"
                leftIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                With Left Icon
              </Button>
              <Button
                variant="subtle"
                size="medium"
                rightIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
              >
                With Right Icon
              </Button>
            </div>
          </div>

          {/* Small Size */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Small Size
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="subtle" size="small">
                Button
              </Button>
              <Button variant="subtle" size="small" disabled>
                Disabled
              </Button>
              <Button
                variant="subtle"
                size="small"
                leftIcon={
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                With Icon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Icon Buttons
        </h2>
        <div className="space-y-8">
          {/* Primary Icon Buttons */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Primary Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton
                variant="primary"
                size="medium"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add"
              />
              <IconButton
                variant="primary"
                size="small"
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add small"
              />
              <IconButton
                variant="primary"
                size="medium"
                disabled
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add disabled"
              />
            </div>
          </div>

          {/* Neutral Icon Buttons */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Neutral Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton
                variant="neutral"
                size="medium"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add"
              />
              <IconButton
                variant="neutral"
                size="small"
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add small"
              />
              <IconButton
                variant="neutral"
                size="medium"
                disabled
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add disabled"
              />
            </div>
          </div>

          {/* Subtle Icon Buttons */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Subtle Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton
                variant="subtle"
                size="medium"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add"
              />
              <IconButton
                variant="subtle"
                size="small"
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add small"
              />
              <IconButton
                variant="subtle"
                size="medium"
                disabled
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
                aria-label="Add disabled"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Button */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Navigation Button
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Default
            </h3>
            <NavigationButtonExample />
          </div>
        </div>
      </section>
    </div>
  );
}


