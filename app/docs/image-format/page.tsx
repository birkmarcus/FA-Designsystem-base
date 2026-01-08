'use client';

import { useState } from 'react';
import { ImageFormat } from '@/components/ImageFormat';

// Horse images from Unsplash for examples 🐴 - each one is a different horse!
const portraitImage = 'https://images.unsplash.com/photo-1553284966-3e6ed968e0d3?w=456&h=608&fit=crop&auto=format'; // Horse portrait
const landscapeImage = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=456&h=256&fit=crop&auto=format'; // Horse running
const squareImage = 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=456&h=456&fit=crop&auto=format'; // Horse in field
const natureImage = 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=456&h=256&fit=crop&auto=format'; // Horse close-up
const cityImage = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=456&h=256&fit=crop&auto=format'; // Horse grazing
const oceanImage = 'https://images.unsplash.com/photo-1578667267501-b08c9df9c8de?w=456&h=256&fit=crop&auto=format'; // Horse profile

export default function ImageFormatPage() {
  const [showOverlay, setShowOverlay] = useState({
    portrait: false,
    landscape: false,
    square: false,
  });

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Image Format
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A component for displaying images in different format ratios with optional overlay.
        Supports portrait, landscape, and square formats.
      </p>

      {/* Format Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Format Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Portrait Format (456px × 608px)
            </h3>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={portraitImage}
                  alt="Portrait image example"
                  format="portrait"
                  overlay={showOverlay.portrait}
                />
                <label className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <input
                    type="checkbox"
                    checked={showOverlay.portrait}
                    onChange={(e) =>
                      setShowOverlay((prev) => ({ ...prev, portrait: e.target.checked }))
                    }
                  />
                  Show overlay
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Landscape Format (456px × 256px)
            </h3>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={landscapeImage}
                  alt="Landscape image example"
                  format="landscape"
                  overlay={showOverlay.landscape}
                />
                <label className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <input
                    type="checkbox"
                    checked={showOverlay.landscape}
                    onChange={(e) =>
                      setShowOverlay((prev) => ({ ...prev, landscape: e.target.checked }))
                    }
                  />
                  Show overlay
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Square Format (456px × 456px)
            </h3>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={squareImage}
                  alt="Square image example"
                  format="square"
                  overlay={showOverlay.square}
                />
                <label className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <input
                    type="checkbox"
                    checked={showOverlay.square}
                    onChange={(e) =>
                      setShowOverlay((prev) => ({ ...prev, square: e.target.checked }))
                    }
                  />
                  Show overlay
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Formats Comparison */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Format Comparison
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              All Formats Side by Side
            </h3>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={portraitImage}
                  alt="Portrait format"
                  format="portrait"
                />
                <span className="text-sm text-[var(--color-text-secondary)] text-center">
                  Portrait
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={landscapeImage}
                  alt="Landscape format"
                  format="landscape"
                />
                <span className="text-sm text-[var(--color-text-secondary)] text-center">
                  Landscape
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={squareImage}
                  alt="Square format"
                  format="square"
                />
                <span className="text-sm text-[var(--color-text-secondary)] text-center">
                  Square
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* With Overlay Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          With Overlay
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              All Formats with Dark Overlay (48% opacity)
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Overlays are useful for improving text readability when content is placed over images.
            </p>
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={natureImage}
                  alt="Portrait with overlay"
                  format="portrait"
                  overlay={true}
                />
                <span className="text-sm text-[var(--color-text-secondary)] text-center">
                  Portrait + Overlay
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={cityImage}
                  alt="Landscape with overlay"
                  format="landscape"
                  overlay={true}
                />
                <span className="text-sm text-[var(--color-text-secondary)] text-center">
                  Landscape + Overlay
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <ImageFormat
                  src={oceanImage}
                  alt="Square with overlay"
                  format="square"
                  overlay={true}
                />
                <span className="text-sm text-[var(--color-text-secondary)] text-center">
                  Square + Overlay
                </span>
              </div>
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
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Portrait Dimensions</dt>
              <dd className="text-[var(--color-text-secondary)]">456px × 608px (3:4 ratio)</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Landscape Dimensions</dt>
              <dd className="text-[var(--color-text-secondary)]">456px × 256px (16:9 ratio)</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Square Dimensions</dt>
              <dd className="text-[var(--color-text-secondary)]">456px × 456px (1:1 ratio)</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Overlay</dt>
              <dd className="text-[var(--color-text-secondary)]">Black with 48% opacity (rgba(0,0,0,0.48))</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Object Fit</dt>
              <dd className="text-[var(--color-text-secondary)]">Cover (default), supports contain, fill, none, scale-down</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Object Position</dt>
              <dd className="text-[var(--color-text-secondary)]">Center (default), customizable</dd>
            </div>
          </dl>
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
              Basic Usage
            </h3>
            <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-4">
              <pre className="text-sm text-[var(--color-text-primary)] overflow-x-auto">
                <code>{`<ImageFormat
  src="/path/to/image.jpg"
  alt="Description of image"
  format="landscape"
/>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Overlay
            </h3>
            <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-4">
              <pre className="text-sm text-[var(--color-text-primary)] overflow-x-auto">
                <code>{`<ImageFormat
  src="/path/to/image.jpg"
  alt="Description of image"
  format="portrait"
  overlay={true}
/>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Custom Object Fit
            </h3>
            <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-4">
              <pre className="text-sm text-[var(--color-text-primary)] overflow-x-auto">
                <code>{`<ImageFormat
  src="/path/to/image.jpg"
  alt="Description of image"
  format="square"
  objectFit="contain"
  objectPosition="top"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

