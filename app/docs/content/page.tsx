'use client';

import { Content } from '@/components/Content';
import { PlaceholderIcon } from '@/components/Info/PlaceholderIcon';

// Example images from Unsplash
const squareImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=456&h=456&fit=crop&auto=format';
const landscapeImage = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=456&h=256&fit=crop&auto=format';

export default function ContentPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Content
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        A versatile content component for displaying text, images, and action buttons.
        Supports multiple layout variants (Default, Column, Grid) and alignment options (Full, Left, Right).
      </p>

      {/* Default Layout - Full Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Layout - Full Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="default"
            alignment="full"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            primaryActionLabel="Primary Action"
            secondaryActionLabel="Button"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
            onSecondaryActionClick={() => console.log('Secondary action clicked')}
            imageSrc={landscapeImage}
            imageAlt="Content image"
            imageFormat="landscape"
          />
        </div>
      </section>

      {/* Default Layout - Left Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Layout - Left Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="default"
            alignment="left"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            primaryActionLabel="Button"
            secondaryActionLabel="Button"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
            onSecondaryActionClick={() => console.log('Secondary action clicked')}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Default Layout - Right Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Layout - Right Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="default"
            alignment="right"
            label="Label"
            heading="Purus sagittis fringilla arcu neque."
            subheading="Bibendum amet at molestie mattis."
            body="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
            primaryActionLabel="Button"
            secondaryActionLabel="Button"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
            onSecondaryActionClick={() => console.log('Secondary action clicked')}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Column Layout - Left Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Column Layout - Left Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="column"
            alignment="left"
            icon={true}
            label="Label"
            heading="Lorem ipsum dolor sit amet consectetur. Amet neque gravida ut lobortis sed sapien sit nunc."
            items={[
              {
                icon: <PlaceholderIcon />,
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
              {
                icon: <PlaceholderIcon />,
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
            ]}
            primaryActionLabel="Primary Action"
            secondaryActionLabel="Secondary Action"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
            onSecondaryActionClick={() => console.log('Secondary action clicked')}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Column Layout - Right Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Column Layout - Right Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="column"
            alignment="right"
            icon={true}
            label="Label"
            heading="Lorem ipsum dolor sit amet consectetur. Amet neque gravida ut lobortis sed sapien sit nunc."
            items={[
              {
                icon: <PlaceholderIcon />,
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
              {
                icon: <PlaceholderIcon />,
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
            ]}
            primaryActionLabel="Primary Action"
            secondaryActionLabel="Secondary Action"
            onPrimaryActionClick={() => console.log('Primary action clicked')}
            onSecondaryActionClick={() => console.log('Secondary action clicked')}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Grid Layout - Left Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Grid Layout - Left Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="grid"
            alignment="left"
            icon={true}
            items={[
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Id eros pellentesque facilisi id mollis faucibus commodo enim.",
              },
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.",
              },
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.",
              },
            ]}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Grid Layout - Right Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Grid Layout - Right Alignment
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="grid"
            alignment="right"
            icon={true}
            items={[
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Id eros pellentesque facilisi id mollis faucibus commodo enim.",
              },
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.",
              },
              {
                icon: <PlaceholderIcon />,
                title: "Title",
                description: "Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.",
              },
            ]}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Grid Layout - Without Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Grid Layout - Without Icons
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <Content
            layout="grid"
            alignment="left"
            icon={false}
            items={[
              {
                title: "Title",
                description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
              {
                title: "Title",
                description: "Id eros pellentesque facilisi id mollis faucibus commodo enim.",
              },
              {
                title: "Title",
                description: "Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.",
              },
              {
                title: "Title",
                description: "Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.",
              },
            ]}
            imageSrc={squareImage}
            imageAlt="Content image"
            imageFormat="square"
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Usage</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`import { Content } from '@/components/Content';

<Content
  layout="default"
  alignment="full"
  label="Label"
  heading="Main heading text"
  subheading="Subheading text"
  body="Body text content"
  primaryActionLabel="Primary Action"
  secondaryActionLabel="Button"
  onPrimaryActionClick={() => console.log('Primary action clicked')}
  onSecondaryActionClick={() => console.log('Secondary action clicked')}
  imageSrc="https://example.com/image.jpg"
  imageAlt="Content image"
  imageFormat="landscape"
/>`}
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Props</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-2">Content Props</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-tertiary)]">
              <li><code className="bg-gray-100 px-2 py-1 rounded">layout</code> - Layout variant: 'default' | 'column' | 'grid'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">alignment</code> - Alignment variant: 'full' | 'left' | 'right'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">icon</code> - Show icons (for grid layout): boolean</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">label</code> - Label text (small text above heading)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">heading</code> - Main heading text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">subheading</code> - Subheading text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">body</code> - Body text content</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">items</code> - Array of content items (for Column and Grid layouts)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">primaryActionLabel</code> - Primary action button label</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onPrimaryActionClick</code> - Primary action button onClick handler</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">secondaryActionLabel</code> - Secondary action button label</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onSecondaryActionClick</code> - Secondary action button onClick handler</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageSrc</code> - Image source URL</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageAlt</code> - Image alt text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">imageFormat</code> - Image format: 'portrait' | 'landscape' | 'square'</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-2">ContentItem Props</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-tertiary)]">
              <li><code className="bg-gray-100 px-2 py-1 rounded">icon</code> - Icon element</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">title</code> - Title text (for grid layout)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">description</code> - Description text</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">layout</code> - Layout variant: 'column' | 'grid'</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">showIcon</code> - Show icon: boolean</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

