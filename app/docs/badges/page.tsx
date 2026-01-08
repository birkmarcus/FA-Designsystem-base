'use client';

import { useState } from 'react';
import { Badge } from '@/components/Badge';

export default function BadgesPage() {
  const [badges, setBadges] = useState({
    default: true,
    brand: true,
    dark: true,
    error: true,
    success: true,
    warning: true,
  });

  const handleClose = (color: keyof typeof badges) => {
    setBadges((prev) => ({ ...prev, [color]: false }));
  };

  const resetBadges = () => {
    setBadges({
      default: true,
      brand: true,
      dark: true,
      error: true,
      success: true,
      warning: true,
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Badges
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Badge components with multiple color variants and optional close button.
        Used for labels, tags, and status indicators.
      </p>

      {/* Color Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Color Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              All Variants
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="default">Label</Badge>
              <Badge color="brand">Label</Badge>
              <Badge color="dark">Label</Badge>
              <Badge color="error">Label</Badge>
              <Badge color="success">Label</Badge>
              <Badge color="warning">Label</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Badges with Close Button */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Badges with Close Button
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Dismissible Badges
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {badges.default && (
                <Badge color="default" showClose onClose={() => handleClose('default')}>
                  Default
                </Badge>
              )}
              {badges.brand && (
                <Badge color="brand" showClose onClose={() => handleClose('brand')}>
                  Brand
                </Badge>
              )}
              {badges.dark && (
                <Badge color="dark" showClose onClose={() => handleClose('dark')}>
                  Dark
                </Badge>
              )}
              {badges.error && (
                <Badge color="error" showClose onClose={() => handleClose('error')}>
                  Error
                </Badge>
              )}
              {badges.success && (
                <Badge color="success" showClose onClose={() => handleClose('success')}>
                  Success
                </Badge>
              )}
              {badges.warning && (
                <Badge color="warning" showClose onClose={() => handleClose('warning')}>
                  Warning
                </Badge>
              )}
            </div>
            <div className="mt-4">
              <button
                onClick={resetBadges}
                className="px-4 py-2 bg-[var(--color-interactive-primary)] text-[var(--color-text-inverse)] rounded-lg hover:bg-[var(--color-interactive-primaryHover)] transition-colors"
              >
                Reset Badges
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Individual Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Default Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="default">Label</Badge>
              <Badge color="default" showClose onClose={() => {}}>
                With Close
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Brand Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="brand">Label</Badge>
              <Badge color="brand" showClose onClose={() => {}}>
                With Close
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Dark Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="dark">Label</Badge>
              <Badge color="dark" showClose onClose={() => {}}>
                With Close
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Error Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="error">Label</Badge>
              <Badge color="error" showClose onClose={() => {}}>
                With Close
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Success Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="success">Label</Badge>
              <Badge color="success" showClose onClose={() => {}}>
                With Close
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Warning Variant
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="warning">Label</Badge>
              <Badge color="warning" showClose onClose={() => {}}>
                With Close
              </Badge>
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
              Status Indicators
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="success">Active</Badge>
              <Badge color="error">Inactive</Badge>
              <Badge color="warning">Pending</Badge>
              <Badge color="brand">New</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Tags and Labels
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="default" showClose onClose={() => {}}>
                Tag 1
              </Badge>
              <Badge color="default" showClose onClose={() => {}}>
                Tag 2
              </Badge>
              <Badge color="default" showClose onClose={() => {}}>
                Tag 3
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Notification Counts
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="brand">5</Badge>
              <Badge color="error">12</Badge>
              <Badge color="success">99+</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

