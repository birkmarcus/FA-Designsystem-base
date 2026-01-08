'use client';

import { useState } from 'react';
import { FAQ } from '@/components/FAQ';
import type { FAQGroupItem } from '@/components/Accordion';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number, isOpen: boolean) => {
    setOpenItems((prev) => {
      if (isOpen) {
        return [...prev, index];
      } else {
        return prev.filter((i) => i !== index);
      }
    });
  };

  const sampleFAQItems: FAQGroupItem[] = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply sign up for an account, complete your profile, and you\'ll be ready to begin. Our onboarding process guides you through each step.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Absolutely! We offer 24/7 customer support via email, live chat, and phone. Our support team is always ready to help you with any questions or issues.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all new users. No credit card required. You can explore all features and decide if our service is right for you.',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        FAQ
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Frequently Asked Questions component with header section and collapsible FAQ items.
      </p>

      {/* Default FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default FAQ
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <FAQ
              label="Label"
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
              items={sampleFAQItems}
            />
          </div>
        </div>
      </section>

      {/* FAQ with Single Open Item */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ - Single Open Item (Accordion Mode)
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <FAQ
              label="Label"
              heading="Frequently Asked Questions"
              items={sampleFAQItems}
              allowMultiple={false}
              defaultOpen={[0]}
            />
          </div>
        </div>
      </section>

      {/* FAQ with Multiple Open Items */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ - Multiple Open Items
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <FAQ
              label="Label"
              heading="Frequently Asked Questions"
              items={sampleFAQItems}
              allowMultiple={true}
              defaultOpen={[0, 2]}
            />
          </div>
        </div>
      </section>

      {/* FAQ - Mobile */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ - Mobile
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <FAQ
              label="Label"
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis."
              items={sampleFAQItems}
              mobile
            />
          </div>
        </div>
      </section>

      {/* FAQ without Label */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ without Label
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <FAQ
              heading="Frequently Asked Questions"
              items={sampleFAQItems}
            />
          </div>
        </div>
      </section>

      {/* FAQ - Controlled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ - Controlled State
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-[var(--color-background-surface)]">
            <FAQ
              label="Label"
              heading="Frequently Asked Questions"
              items={sampleFAQItems}
              allowMultiple={true}
              openItems={openItems}
              onToggle={handleToggle}
            />
          </div>
          <div className="mt-4 text-sm text-[var(--color-text-secondary)]">
            Open items: {openItems.length > 0 ? openItems.join(', ') : 'None'}
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
            {/* Minimal FAQ */}
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
                Minimal FAQ
              </h3>
              <div className="bg-[var(--color-background-surface)]">
                <FAQ
                  heading="Frequently Asked Questions"
                  items={[
                    {
                      question: 'What is this?',
                      answer: 'This is a FAQ component.',
                    },
                    {
                      question: 'How does it work?',
                      answer: 'Click on a question to expand and see the answer.',
                    },
                  ]}
                />
              </div>
            </div>

            {/* FAQ with Custom Items */}
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
                FAQ with Custom Styling
              </h3>
              <div className="bg-[var(--color-background-surface)]">
                <FAQ
                  label="Support"
                  heading="Need Help?"
                  items={[
                    {
                      question: 'How can I contact support?',
                      answer: 'You can reach our support team via email at support@example.com or through our live chat feature.',
                    },
                    {
                      question: 'What are your business hours?',
                      answer: 'Our support team is available Monday through Friday, 9 AM to 5 PM EST.',
                    },
                  ]}
                  allowMultiple={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

