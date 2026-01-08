'use client';

import { useState } from 'react';
import { AccordionItem, AccordionGroup } from '@/components/Accordion';
import { FAQItem, FAQGroup } from '@/components/Accordion';

export default function AccordionsPage() {
  const [openItem1, setOpenItem1] = useState(false);
  const [openItem2, setOpenItem2] = useState(false);
  const [openFAQ1, setOpenFAQ1] = useState(false);
  const [openFAQ2, setOpenFAQ2] = useState(false);
  const [accordionOpenItems, setAccordionOpenItems] = useState<number[]>([]);
  const [faqOpenItems, setFaqOpenItems] = useState<number[]>([]);

  const accordionItems = [
    {
      title: 'What is this?',
      content: 'This is an accordion item that can be expanded to show more content.',
    },
    {
      title: 'How does it work?',
      content: 'Click on the title to expand or collapse the content. The chevron icon indicates the current state.',
    },
    {
      title: 'Can multiple items be open?',
      content: 'By default, only one item can be open at a time. You can enable multiple open items using the allowMultiple prop.',
    },
  ];

  const faqItems = [
    {
      question: 'What is a FAQ?',
      answer: 'A FAQ (Frequently Asked Questions) is a list of common questions and answers about a particular topic.',
    },
    {
      question: 'How do I use FAQ items?',
      answer: 'FAQ items work similarly to accordion items, but use plus/minus icons instead of chevrons. Click the question to expand and see the answer.',
    },
    {
      question: 'Can I customize the styling?',
      answer: 'Yes, both AccordionItem and FAQItem components accept className props for custom styling, and all components use design tokens for consistent theming.',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Accordions
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Accordion components for expandable content sections. Includes AccordionItem and FAQItem variants.
      </p>

      {/* AccordionItem Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Accordion Item
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single Items
            </h3>
            <div className="w-[449px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <AccordionItem
                title="Title"
                open={openItem1}
                onToggle={() => setOpenItem1(!openItem1)}
              >
                Text here
              </AccordionItem>
              <AccordionItem
                title="Another Title"
                open={openItem2}
                onToggle={() => setOpenItem2(!openItem2)}
              >
                More content can go here. This is shown when the accordion is expanded.
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* AccordionGroup Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Accordion Group
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single Open (Default)
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Only one item can be open at a time.
            </p>
            <div className="w-[449px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <AccordionGroup
                items={accordionItems}
                allowMultiple={false}
                openItems={accordionOpenItems}
                onToggle={(index, isOpen) => {
                  if (isOpen) {
                    setAccordionOpenItems([index]);
                  } else {
                    setAccordionOpenItems([]);
                  }
                }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Multiple Open
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Multiple items can be open at the same time.
            </p>
            <div className="w-[449px] border border-[var(--color-border-default)] rounded-lg overflow-hidden">
              <AccordionGroup
                items={accordionItems}
                allowMultiple={true}
                defaultOpen={[0]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQItem Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ Item
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single FAQ Items
            </h3>
            <div className="flex flex-col gap-4 w-[449px]">
              <FAQItem
                question="Question"
                answer="Answer"
                open={openFAQ1}
                onToggle={() => setOpenFAQ1(!openFAQ1)}
              />
              <FAQItem
                question="Another Question"
                answer="This is a longer answer that provides more detailed information about the question. It can span multiple lines and contain any content you need."
                open={openFAQ2}
                onToggle={() => setOpenFAQ2(!openFAQ2)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQGroup Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          FAQ Group
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single Open (Default)
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Only one FAQ item can be open at a time.
            </p>
            <div className="w-[449px]">
              <FAQGroup
                items={faqItems}
                allowMultiple={false}
                openItems={faqOpenItems}
                onToggle={(index, isOpen) => {
                  if (isOpen) {
                    setFaqOpenItems([index]);
                  } else {
                    setFaqOpenItems([]);
                  }
                }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Multiple Open
            </h3>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              Multiple FAQ items can be open at the same time.
            </p>
            <div className="w-[449px]">
              <FAQGroup
                items={faqItems}
                allowMultiple={true}
                defaultOpen={[0]}
              />
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
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">AccordionItem Width</dt>
              <dd className="text-[var(--color-text-secondary)]">449px (default), customizable</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">FAQItem Width</dt>
              <dd className="text-[var(--color-text-secondary)]">449px (default), customizable</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">AccordionItem Padding</dt>
              <dd className="text-[var(--color-text-secondary)]">16px horizontal, 8px vertical</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">FAQItem Padding</dt>
              <dd className="text-[var(--color-text-secondary)]">16px all sides</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Title Font</dt>
              <dd className="text-[var(--color-text-secondary)]">18px, medium weight, 24px line height</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Content Font</dt>
              <dd className="text-[var(--color-text-secondary)]">14px (AccordionItem) / 16px (FAQItem), regular weight</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">AccordionItem Background</dt>
              <dd className="text-[var(--color-text-secondary)]">Grey (#f7f7f7) when open, transparent when closed</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">FAQItem Background</dt>
              <dd className="text-[var(--color-text-secondary)]">White with border and rounded corners</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Icons</dt>
              <dd className="text-[var(--color-text-secondary)]">Chevron up/down (AccordionItem), Plus/Minus (FAQItem)</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

