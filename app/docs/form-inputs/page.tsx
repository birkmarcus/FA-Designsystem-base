'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/Checkbox';
import { CheckboxGroup } from '@/components/CheckboxGroup';
import { Radio } from '@/components/Radio';
import { Switch } from '@/components/Switch';

export default function FormInputsPage() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioSelected, setRadioSelected] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxGroupValues, setCheckboxGroupValues] = useState<string[]>([]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Form Inputs
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Checkbox, Radio, Switch, and CheckboxGroup components.
      </p>

      {/* Checkboxes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Checkboxes
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Checkbox
            </h3>
            <div className="flex flex-col gap-4">
              <Checkbox label="Accept terms" />
              <Checkbox label="Subscribe to newsletter" checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />
              <Checkbox label="Disabled checkbox" disabled />
              <Checkbox label="Checked disabled" checked disabled />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Description
            </h3>
            <div className="flex flex-col gap-4">
              <Checkbox
                label="Enable notifications"
                description="Receive updates about your account"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Indeterminate State
            </h3>
            <div className="flex flex-col gap-4">
              <Checkbox label="Select all" indeterminate />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Checkbox Group
            </h3>
            <CheckboxGroup
              options={[
                { 
                  label: 'Option 1', 
                  value: 'option1', 
                  description: 'Description for option 1',
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )
                },
                { 
                  label: 'Option 2', 
                  value: 'option2', 
                  description: 'Description for option 2',
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )
                },
                { 
                  label: 'Option 3', 
                  value: 'option3',
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  )
                },
                { 
                  label: 'Option 4', 
                  value: 'option4', 
                  disabled: true 
                },
              ]}
              value={checkboxGroupValues}
              onChange={setCheckboxGroupValues}
            />
          </div>
        </div>
      </section>

      {/* Radio Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Radio Buttons
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Radio
            </h3>
            <div className="flex flex-col gap-4">
              <Radio name="example1" label="Option 1" value="option1" checked={radioSelected === 'option1'} onChange={(e) => setRadioSelected(e.target.value)} />
              <Radio name="example1" label="Option 2" value="option2" checked={radioSelected === 'option2'} onChange={(e) => setRadioSelected(e.target.value)} />
              <Radio name="example1" label="Option 3" value="option3" checked={radioSelected === 'option3'} onChange={(e) => setRadioSelected(e.target.value)} />
              <Radio name="example1" label="Disabled" value="disabled" disabled />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Description
            </h3>
            <div className="flex flex-col gap-4">
              <Radio
                name="example2"
                label="Basic Plan"
                description="Perfect for individuals"
                value="basic"
              />
              <Radio
                name="example2"
                label="Pro Plan"
                description="For teams and businesses"
                value="pro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Switches */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Switches
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Switch
            </h3>
            <div className="flex flex-col gap-4">
              <Switch
                label="Unchecked switch"
                checked={switchChecked}
                onChange={(e) => setSwitchChecked(e.target.checked)}
              />
              <Switch
                label="Checked switch"
                checked={!switchChecked}
                onChange={(e) => setSwitchChecked(!e.target.checked)}
              />
              <Switch label="Disabled unchecked" disabled />
              <Switch label="Disabled checked" checked disabled />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Description
            </h3>
            <div className="flex flex-col gap-4">
              <Switch
                label="Enable notifications"
                description="Receive email notifications about your account"
                checked={switchChecked}
                onChange={(e) => setSwitchChecked(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

