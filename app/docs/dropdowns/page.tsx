'use client';

import { useState } from 'react';
import { Dropdown } from '@/components/Dropdown';

function DropdownExample() {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [open, setOpen] = useState(false);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
  ];

  return (
    <Dropdown
      label="Select an option"
      value={selectedValue}
      placeholder="Choose..."
      options={options}
      open={open}
      onOpenChange={setOpen}
      onSelect={(value) => {
        setSelectedValue(value);
        setOpen(false);
      }}
    />
  );
}

function DropdownMultiselectExample() {
  const [checkedValues, setCheckedValues] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];

  const handleCheckedChange = (value: string, checked: boolean) => {
    const newChecked = new Set(checkedValues);
    if (checked) {
      newChecked.add(value);
    } else {
      newChecked.delete(value);
    }
    setCheckedValues(newChecked);
  };

  const displayValue = checkedValues.size > 0 
    ? `${checkedValues.size} selected`
    : 'Select options...';

  return (
    <Dropdown
      label="Select multiple options"
      value={displayValue}
      placeholder="Choose..."
      options={options.map(opt => ({
        ...opt,
        checked: checkedValues.has(opt.value),
      }))}
      multiselect={true}
      open={open}
      onOpenChange={setOpen}
      onCheckedChange={handleCheckedChange}
    />
  );
}

export default function DropdownsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Dropdowns
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Dropdown component with single and multiselect support.
      </p>

      {/* Basic Dropdown */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Basic Dropdown
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single Select
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <Dropdown
                label="Select an option"
                placeholder="Choose..."
                options={[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' },
                  { label: 'Option 4', value: 'option4' },
                  { label: 'Option 5', value: 'option5' },
                ]}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Icon
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <Dropdown
                label="Select an option"
                placeholder="Choose..."
                options={[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' },
                ]}
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Multiselect Dropdown (Checkboxes)
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <DropdownMultiselectExample />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Interactive Example
            </h3>
            <DropdownExample />
          </div>
        </div>
      </section>
    </div>
  );
}


