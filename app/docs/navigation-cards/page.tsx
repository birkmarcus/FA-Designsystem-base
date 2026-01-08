'use client';

import { NavigationCards } from '@/components/NavigationCards';

// Example images from Unsplash
const landscapeImage1 = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=456&h=256&fit=crop&auto=format';
const landscapeImage2 = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=456&h=256&fit=crop&auto=format';
const landscapeImage3 = 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=456&h=256&fit=crop&auto=format';
const landscapeImage4 = 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=456&h=256&fit=crop&auto=format';
const portraitImage1 = 'https://images.unsplash.com/photo-1553284966-3e6ed968e0d3?w=456&h=608&fit=crop&auto=format';
const portraitImage2 = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=456&h=608&fit=crop&auto=format';
const portraitImage3 = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=456&h=608&fit=crop&auto=format';

export default function NavigationCardsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Navigation Cards
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A component for displaying a grid of navigation cards with optional text section
        and primary action button. Supports multiple card variants and column layouts.
      </p>

      {/* Default Variant - 4 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - 4 Columns
        </h2>
        <div className="bg-gray-50 pt-8 pr-8 pb-8 rounded-lg pl-0">
          <NavigationCards
            cardVariant="default"
            columns="4"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                imageSrc: landscapeImage1,
                imageAlt: "Card 1",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                imageSrc: landscapeImage2,
                imageAlt: "Card 2",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                imageSrc: landscapeImage3,
                imageAlt: "Card 3",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                imageSrc: landscapeImage4,
                imageAlt: "Card 4",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
            ]}
            primaryActionLabel="Primary Action"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
          />
        </div>
      </section>

      {/* Default Variant - 3 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - 3 Columns
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <NavigationCards
            cardVariant="default"
            columns="3"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                imageSrc: landscapeImage1,
                imageAlt: "Card 1",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                imageSrc: landscapeImage2,
                imageAlt: "Card 2",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
              {
                imageSrc: landscapeImage3,
                imageAlt: "Card 3",
                title: "Title",
                description: "Egestas elit dui",
                linkLabel: "Link",
                onLinkClick: () => console.log('Link clicked'),
              },
            ]}
            primaryActionLabel="Primary Action"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
          />
        </div>
      </section>

      {/* Wrapped Variant - 4 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Wrapped Variant - 4 Columns
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <NavigationCards
            cardVariant="wrapped"
            columns="4"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                imageSrc: landscapeImage1,
                imageAlt: "Card 1",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
              {
                imageSrc: landscapeImage2,
                imageAlt: "Card 2",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
              {
                imageSrc: landscapeImage3,
                imageAlt: "Card 3",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
              {
                imageSrc: landscapeImage4,
                imageAlt: "Card 4",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
            ]}
          />
        </div>
      </section>

      {/* Wrapped Variant - 3 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Wrapped Variant - 3 Columns
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <NavigationCards
            cardVariant="wrapped"
            columns="3"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                imageSrc: landscapeImage1,
                imageAlt: "Card 1",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
              {
                imageSrc: landscapeImage2,
                imageAlt: "Card 2",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
              {
                imageSrc: landscapeImage3,
                imageAlt: "Card 3",
                category: "Category",
                title: "Title",
                description: "Egestas elit dui",
                primaryButtonLabel: "Button",
                onPrimaryButtonClick: () => console.log('Primary clicked'),
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Secondary clicked'),
              },
            ]}
          />
        </div>
      </section>

      {/* Full Variant - 4 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Full Variant - 4 Columns
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <NavigationCards
            cardVariant="full"
            columns="4"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                imageSrc: portraitImage1,
                imageAlt: "Card 1",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
              },
              {
                imageSrc: portraitImage2,
                imageAlt: "Card 2",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
              },
              {
                imageSrc: portraitImage3,
                imageAlt: "Card 3",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
              },
              {
                imageSrc: portraitImage1,
                imageAlt: "Card 4",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
              },
            ]}
          />
        </div>
      </section>

      {/* Full Variant - 3 Columns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Full Variant - 3 Columns
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <NavigationCards
            cardVariant="full"
            columns="4"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            items={[
              {
                imageSrc: portraitImage1,
                imageAlt: "Card 1",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
              },
              {
                imageSrc: portraitImage2,
                imageAlt: "Card 2",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
              },
              {
                imageSrc: portraitImage3,
                imageAlt: "Card 3",
                title: "Title",
                description: "Egestas elit dui",
                secondaryButtonLabel: "Button",
                onSecondaryButtonClick: () => console.log('Button clicked'),
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
{`import { NavigationCards } from '@/components/NavigationCards';

<NavigationCards
  cardVariant="default"
  columns="4"
  label="Label"
  heading="Main heading text"
  subheading="Subheading text"
  body="Body text content"
  items={[
    {
      imageSrc: "https://example.com/image.jpg",
      imageAlt: "Card image",
      title: "Title",
      description: "Description text",
      linkLabel: "Link",
      onLinkClick: () => console.log('Link clicked'),
    },
    // ... more items
  ]}
  primaryActionLabel="Primary Action"
  onPrimaryActionClick={() => console.log('Primary action clicked')}
/>`}
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Props</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-2">NavigationCards Props</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-tertiary)]">
              <li><code className="bg-gray-100 px-2 py-1 rounded">cardVariant</code> - Card variant: 'default' | 'full' | 'wrapped'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">columns</code> - Number of columns: '3' | '4'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">label</code> - Label text (small text above heading)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">heading</code> - Main heading text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">subheading</code> - Subheading text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">body</code> - Body text content</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">items</code> - Array of navigation card items</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">primaryActionLabel</code> - Primary action button label</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onPrimaryActionClick</code> - Primary action button onClick handler</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-2">NavigationCardItem Props</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-tertiary)]">
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageSrc</code> - Image source URL</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageAlt</code> - Image alt text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">category</code> - Category text (for wrapped variant)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">title</code> - Title text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">description</code> - Description/body text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">linkLabel</code> - Link label text (for default variant)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onLinkClick</code> - Link onClick handler</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">primaryButtonLabel</code> - Primary button label (for wrapped variant)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">secondaryButtonLabel</code> - Secondary button label (for wrapped/full variants)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

