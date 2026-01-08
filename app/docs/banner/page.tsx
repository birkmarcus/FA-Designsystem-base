'use client';

import { useState } from 'react';
import { Banner } from '@/components/Banner';

export default function BannerPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Banner
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Banner component for displaying important messages with action buttons.
      </p>

      {/* Default Banner */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Banner
        </h2>
        <div className="space-y-8">
          <div className="max-w-4xl">
            {showBanner && (
              <Banner
                message="We use cookies to personalize your experience."
                linkText="Cookie Policy"
                linkUrl="#"
                primaryActionLabel="Allow"
                secondaryActionLabel="Decline"
                onPrimaryAction={() => {
                  console.log('Allow clicked');
                  setShowBanner(false);
                }}
                onSecondaryAction={() => {
                  console.log('Decline clicked');
                  setShowBanner(false);
                }}
                onClose={() => {
                  console.log('Close clicked');
                  setShowBanner(false);
                }}
              />
            )}
            {!showBanner && (
              <button
                onClick={() => setShowBanner(true)}
                className="px-4 py-2 bg-[var(--color-interactive-primary)] text-white rounded-lg hover:bg-[var(--color-interactive-primaryHover)]"
              >
                Show Banner Again
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Banner without link */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Banner without Link
        </h2>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <Banner
              message="This is an important announcement."
              primaryActionLabel="Learn More"
              onPrimaryAction={() => console.log('Learn More clicked')}
              onClose={() => console.log('Close clicked')}
            />
          </div>
        </div>
      </section>

      {/* Banner with custom actions */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Banner with Custom Actions
        </h2>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <Banner
              message="Your session will expire in 5 minutes."
              primaryActionLabel="Extend Session"
              secondaryActionLabel="Logout"
              onPrimaryAction={() => console.log('Extend Session clicked')}
              onSecondaryAction={() => console.log('Logout clicked')}
              onClose={() => console.log('Close clicked')}
            />
          </div>
        </div>
      </section>

      {/* Banner without close button */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Banner without Close Button
        </h2>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <Banner
              message="Please complete your profile to continue."
              linkText="Complete Profile"
              linkUrl="#"
              primaryActionLabel="Go to Profile"
              onPrimaryAction={() => console.log('Go to Profile clicked')}
              showClose={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

