'use client';

import { useState } from 'react';
import { InputField } from '@/components/InputField';

export default function InputFieldsPage() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Input Fields
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Input and TextArea field components with multiple states and variants.
      </p>

      {/* Input - Default State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Default State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              placeholder="Placeholder text"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Filled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Filled State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Focused State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Focused State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              state="focused"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Disabled State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              state="disabled"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Error State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Error State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              state="error"
              status="Error message"
              showStatus={true}
              showStatusIcon={true}
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Success State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Success State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              state="success"
              status="Success message"
              showStatus={true}
              showStatusIcon={true}
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Warning State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Warning State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              state="warning"
              status="Warning message"
              showStatus={true}
              showStatusIcon={true}
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - With Icon */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - With Icon
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              value="Lorem ipsum dolor"
              showIcon={true}
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              }
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Mandatory */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Mandatory Field
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              placeholder="Placeholder text"
              mandatory={true}
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Input - Optional */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Input - Optional Field
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Label"
              placeholder="Placeholder text"
              optional={true}
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* TextArea - Default State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          TextArea - Default State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="textarea"
              label="Label"
              placeholder="Placeholder text"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* TextArea - Filled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          TextArea - Filled State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="textarea"
              label="Label"
              value="Lorem ipsum dolor"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* TextArea - Focused State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          TextArea - Focused State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="textarea"
              label="Label"
              value="Lorem ipsum dolor"
              state="focused"
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* TextArea - Error State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          TextArea - Error State
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="textarea"
              label="Label"
              value="Lorem ipsum dolor"
              state="error"
              status="Error message"
              showStatus={true}
              showStatusIcon={true}
              showLabel={true}
            />
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Interactive Examples
        </h2>
        <div className="space-y-8">
          <div className="max-w-md">
            <InputField
              type="input"
              label="Email"
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              showLabel={true}
            />
          </div>
          <div className="max-w-md">
            <InputField
              type="textarea"
              label="Message"
              placeholder="Enter your message"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              showLabel={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

