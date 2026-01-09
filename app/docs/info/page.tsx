'use client';

import React from 'react';
import { Info } from '@/components/Info';
import { PlaceholderIcon } from '@/components/Info/PlaceholderIcon';

export default function InfoPage() {
  return (
    <div className="max-w-7xl mx-auto p-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Info / Key Figures</h1>
        <p className="text-lg text-gray-600 mb-8">
          A versatile component for displaying key figures, statistics, and information cards.
          Supports multiple layout variants and alignment options.
        </p>
      </div>

      {/* Card and CTA - Center */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Card and CTA - Center Alignment</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Info
            layout="card-and-cta"
            alignment="center"
            label="Label"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
            items={[
              {
                icon: <PlaceholderIcon />,
                title: '356+',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: '200+',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: '1.8K+',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: '11K+',
                description: 'Egestas elit dui',
              },
            ]}
          />
        </div>
      </section>

      {/* List Items - Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">List Items - Grid Alignment</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Info
            layout="list-items"
            alignment="grid"
            label="Label"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
            items={[
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
            ]}
            primaryCtaLabel="Primary Action"
            onPrimaryCtaClick={() => console.log('Primary CTA clicked')}
          />
        </div>
      </section>

      {/* Link Cards - Center */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Link Cards - Center Alignment</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Info
            layout="link-cards"
            alignment="center"
            label="Label"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
            items={[
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
                linkLabel: 'Button',
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
                linkLabel: 'Button',
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
                linkLabel: 'Button',
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
                linkLabel: 'Button',
                onLinkClick: () => console.log('Link clicked'),
              },
            ]}
            primaryCtaLabel="Primary Action"
            onPrimaryCtaClick={() => console.log('Primary CTA clicked')}
          />
        </div>
      </section>

      {/* Link Cards - Left */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Link Cards - Left Alignment</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Info
            layout="link-cards"
            alignment="left"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
            subheading="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
                linkLabel: 'Button',
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
                linkLabel: 'Button',
                onLinkClick: () => console.log('Link clicked'),
              },
            ]}
          />
        </div>
      </section>

      {/* Stats - Center */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Stats - Center Alignment</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Info
            layout="stats"
            alignment="center"
            label="Label"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
            items={[
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
            ]}
          />
        </div>
      </section>

      {/* Stats - Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Stats - Grid Alignment</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Info
            layout="stats"
            alignment="grid"
            label="Label"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
            imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=456&h=256&fit=crop&auto=format"
            imageAlt="Stats image"
            items={[
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
              {
                icon: <PlaceholderIcon />,
                title: 'Title',
                description: 'Egestas elit dui',
              },
            ]}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Usage</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`import { Info } from '@/components/Info';

<Info
  layout="card-and-cta"
  alignment="center"
  label="Label"
  heading="Main heading text"
  items={[
    {
      icon: <YourIcon />,
      title: '356+',
      description: 'Egestas elit dui',
    },
    // ... more items
  ]}
  primaryCtaLabel="Primary Action"
  onPrimaryCtaClick={() => console.log('Clicked')}
/>`}
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Props</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Info Props</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">layout</code> - Layout variant: 'card-and-cta' | 'list-items' | 'link-cards' | 'stats'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">alignment</code> - Alignment variant: 'grid' | 'left' | 'center'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">label</code> - Small label text above heading</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">heading</code> - Main heading text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">subheading</code> - Subheading/body text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">items</code> - Array of info items</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">primaryCtaLabel</code> - Primary CTA button label</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onPrimaryCtaClick</code> - Primary CTA click handler</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageSrc</code> - Image source URL (for stats-grid layout)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageAlt</code> - Image alt text</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">InfoItem Props</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">icon</code> - Icon element (React node)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">title</code> - Title/number text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">description</code> - Description text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">linkLabel</code> - Link button label (for link-cards layout)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onLinkClick</code> - Link button click handler</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">layout</code> - Layout variant (inherited from Info)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">iconStyle</code> - Icon style: 'circular' | 'square' (for stats layout)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

