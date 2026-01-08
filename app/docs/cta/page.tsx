'use client';

import { useState } from 'react';
import { CTA } from '@/components/CTA';

export default function CTAPage() {
  const [email, setEmail] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleNewsletterSubmit = (submittedEmail: string) => {
    console.log('Newsletter submitted:', submittedEmail);
    alert(`Newsletter submitted with email: ${submittedEmail}`);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        CTA
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Call-to-action component with three layout variants: Vertical, Horizontal, and Newsletter.
      </p>

      {/* Vertical Layout */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Vertical Layout
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)] p-16">
            <CTA
              layout="vertical"
              label="Label"
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nBibendum amet at molestie mattis."
              primaryButtonLabel="Button"
              secondaryButtonLabel="Button"
              onPrimaryClick={() => console.log('Primary clicked')}
              onSecondaryClick={() => console.log('Secondary clicked')}
            />
          </div>
        </div>
      </section>

      {/* Vertical Layout - Mobile */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Vertical Layout - Mobile
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)] p-4">
            <CTA
              layout="vertical"
              mobile
              label="Label"
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nBibendum amet at molestie mattis."
              primaryButtonLabel="Button"
              secondaryButtonLabel="Button"
              onPrimaryClick={() => console.log('Primary clicked')}
              onSecondaryClick={() => console.log('Secondary clicked')}
            />
          </div>
        </div>
      </section>

      {/* Horizontal Layout */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Horizontal Layout
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)] p-16">
            <CTA
              layout="horizontal"
              label="Label"
              heading="Bibendum amet at molestie mattis."
              description="Rhoncus morbi et augue nec, in id ullamcorper at sit."
              primaryButtonLabel="Button"
              secondaryButtonLabel="Button"
              onPrimaryClick={() => console.log('Primary clicked')}
              onSecondaryClick={() => console.log('Secondary clicked')}
            />
          </div>
        </div>
      </section>

      {/* Horizontal Layout - Mobile */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Horizontal Layout - Mobile
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)] p-4">
            <CTA
              layout="horizontal"
              mobile
              label="Label"
              heading="Bibendum amet at molestie mattis."
              description="Rhoncus morbi et augue nec, in id ullamcorper at sit."
              primaryButtonLabel="Button"
              secondaryButtonLabel="Button"
              onPrimaryClick={() => console.log('Primary clicked')}
              onSecondaryClick={() => console.log('Secondary clicked')}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Layout */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Newsletter Layout
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)] p-16">
            <CTA
              layout="newsletter"
              label="Label"
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
              description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis."
              showFormHeading={false}
              inputPlaceholder="Type in email"
              checkboxLabel="I accept the terms & conditions"
              checkboxChecked={checkboxChecked}
              onCheckboxChange={setCheckboxChecked}
              onSubmit={handleNewsletterSubmit}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Layout - Mobile */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Newsletter Layout - Mobile
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)] p-4">
            <CTA
              layout="newsletter"
              mobile
              label="Label"
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
              description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis."
              showFormHeading={false}
              inputPlaceholder="Type in email"
              checkboxLabel="I accept the terms & conditions"
              checkboxChecked={checkboxChecked}
              onCheckboxChange={setCheckboxChecked}
              onSubmit={handleNewsletterSubmit}
            />
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage Examples
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="space-y-8">
            {/* Minimal Vertical */}
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
                Minimal Vertical CTA
              </h3>
              <div className="bg-[var(--color-background-surface)] p-16">
                <CTA
                  layout="vertical"
                  heading="Get Started Today"
                  primaryButtonLabel="Sign Up"
                />
              </div>
            </div>

            {/* Horizontal with Description */}
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
                Horizontal CTA with Description
              </h3>
              <div className="bg-[var(--color-background-surface)] p-16">
                <CTA
                  layout="horizontal"
                  heading="Ready to get started?"
                  description="Join thousands of users who are already using our platform."
                  primaryButtonLabel="Get Started"
                  secondaryButtonLabel="Learn More"
                />
              </div>
            </div>

            {/* Newsletter Form */}
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
                Newsletter Signup Form
              </h3>
              <div className="bg-[var(--color-background-surface)] p-16">
                <CTA
                  layout="newsletter"
                  heading="Subscribe to our newsletter"
                  description="Stay updated with the latest news and updates."
                  showFormHeading={false}
                  inputPlaceholder="Enter your email"
                  checkboxLabel="I accept the terms & conditions"
                  onSubmit={(email) => console.log('Subscribed:', email)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

