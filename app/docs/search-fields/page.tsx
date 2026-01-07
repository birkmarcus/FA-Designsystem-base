'use client';

import { useState } from 'react';
import { SearchField } from '@/components/SearchField';

function SearchFieldExample() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchField
      label="Search"
      description="Enter your search query"
      placeholder="Search..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onClear={() => setSearchValue('')}
    />
  );
}

export default function SearchFieldsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Search Fields
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        SearchField component with search icon and clear button.
      </p>

      {/* Basic Search Field */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Basic Search Field
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Placeholder Only
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <SearchField placeholder="Search..." />
              <SearchField placeholder="Search..." defaultValue="Search value" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Label
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <SearchField 
                label="Search"
                placeholder="Search..."
              />
              <SearchField 
                label="Search"
                placeholder="Search..."
                defaultValue="Search value"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Label and Description
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <SearchField 
                label="Search"
                description="Enter your search query"
                placeholder="Search..."
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Disabled State
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <SearchField 
                label="Search"
                placeholder="Search..."
                disabled
              />
              <SearchField 
                label="Search"
                placeholder="Search..."
                defaultValue="Search value"
                disabled
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Interactive Example
            </h3>
            <SearchFieldExample />
          </div>
        </div>
      </section>
    </div>
  );
}

