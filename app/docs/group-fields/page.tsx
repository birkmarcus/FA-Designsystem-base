'use client';

import { useState } from 'react';
import { GroupField } from '@/components/GroupField';

export default function GroupFieldsPage() {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Group Fields
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        GroupField component for grouping radio buttons or checkboxes.
      </p>

      {/* Radio Group Fields */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Radio Group Fields
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Radio Group
            </h3>
            <div className="flex flex-col gap-4">
              <GroupField
                label="Option 1"
                description="This is option 1"
                type="radio"
                name="example-group"
                value="option1"
                selected={selectedOption === 'option1'}
                onChange={() => setSelectedOption('option1')}
              />
              <GroupField
                label="Option 2"
                description="This is option 2"
                type="radio"
                name="example-group"
                value="option2"
                selected={selectedOption === 'option2'}
                onChange={() => setSelectedOption('option2')}
              />
              <GroupField
                label="Option 3"
                description="Or this one"
                type="radio"
                name="example-group"
                value="option3"
                selected={selectedOption === 'option3'}
                onChange={() => setSelectedOption('option3')}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Icons
            </h3>
            <div className="flex flex-col gap-4">
              <GroupField
                label="Option 1"
                description="This is option 1"
                type="radio"
                name="example-group-icon"
                value="option1"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                }
              />
              <GroupField
                label="Option 2"
                description="This is option 2"
                type="radio"
                name="example-group-icon"
                value="option2"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checkbox Group Fields */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Checkbox Group Fields
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Checkbox Group
            </h3>
            <div className="flex flex-col gap-4">
              <GroupField
                label="Option 1"
                description="This is option 1"
                type="checkbox"
                selected={selectedOption === 'option1'}
                onChange={() => setSelectedOption(selectedOption === 'option1' ? '' : 'option1')}
              />
              <GroupField
                label="Option 2"
                description="This is option 2"
                type="checkbox"
                selected={selectedOption === 'option2'}
                onChange={() => setSelectedOption(selectedOption === 'option2' ? '' : 'option2')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

