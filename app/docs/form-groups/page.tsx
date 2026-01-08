'use client';

import { useState } from 'react';
import { FormGroup, FormFieldConfig, FormButtonConfig, FormLinkConfig } from '@/components/FormGroup';

// Icons
const EyeOffIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

export default function FormGroupsPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  // Variant 1: Simple Email Submission
  const simpleEmailFields: FormFieldConfig[] = [
    {
      type: 'input',
      placeholder: 'mail@mail.xom',
      inputType: 'email',
    },
  ];

  const simpleEmailButtons: FormButtonConfig[] = [
    {
      label: 'Submit',
      variant: 'primary',
      type: 'submit',
    },
  ];

  const simpleEmailCheckbox: FormFieldConfig[] = [
    {
      type: 'checkbox',
      checkboxLabel: 'I accept the terms',
      checked: formValues.acceptTerms,
      onChange: (checked) => setFormValues({ ...formValues, acceptTerms: checked }),
    },
  ];

  // Variant 2: Email and Password Reset
  const resetPasswordFields: FormFieldConfig[] = [
    {
      type: 'input',
      label: 'Email',
      placeholder: 'mail@mail.xom',
      inputType: 'email',
    },
  ];

  const resetPasswordButtons: FormButtonConfig[] = [
    {
      label: 'Cancel',
      variant: 'subtle',
      type: 'button',
    },
    {
      label: 'Reset Password',
      variant: 'primary',
      type: 'submit',
    },
  ];

  // Variant 3: Sign In Form
  const signInFields: FormFieldConfig[] = [
    {
      type: 'input',
      label: 'Email',
      placeholder: 'mail@mail.xom',
      inputType: 'email',
    },
    {
      type: 'input',
      label: 'Password',
      placeholder: '************',
      inputType: passwordVisible ? 'text' : 'password',
    },
  ];

  const signInButtons: FormButtonConfig[] = [
    {
      label: 'Sign in',
      variant: 'primary',
      type: 'submit',
    },
  ];

  const signInLinks: FormLinkConfig[] = [
    {
      text: 'Forgot password?',
      href: '#',
    },
  ];

  // Variant 4: Sign Up Form
  const signUpFields: FormFieldConfig[] = [
    {
      type: 'input',
      label: 'Email',
      placeholder: 'mail@mail.xom',
      inputType: 'email',
    },
    {
      type: 'input',
      label: 'Password',
      placeholder: '************',
      inputType: passwordVisible2 ? 'text' : 'password',
    },
    {
      type: 'checkbox',
      checkboxLabel: 'I accept the terms',
      checked: formValues.acceptTerms2,
      onChange: (checked) => setFormValues({ ...formValues, acceptTerms2: checked }),
    },
  ];

  const signUpButtons: FormButtonConfig[] = [
    {
      label: 'Sign up',
      variant: 'primary',
      type: 'submit',
    },
  ];

  // Variant 5: Shipping Information Form
  const shippingFields: FormFieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      placeholder: 'Full name',
      inputType: 'text',
    },
    {
      type: 'dropdown',
      label: 'Country',
      placeholder: 'Select country',
      icon: <GlobeIcon />,
      options: [
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Germany', value: 'de' },
      ],
    },
    {
      type: 'textarea',
      label: 'Delivery notes',
      placeholder: 'Write notes for the driver...',
    },
    {
      type: 'checkbox',
      checkboxLabel: 'I read and agree to',
      linkText: 'terms and conditions',
      linkHref: '#',
      checked: formValues.acceptShippingTerms,
      onChange: (checked) => setFormValues({ ...formValues, acceptShippingTerms: checked }),
    },
  ];

  const shippingButtons: FormButtonConfig[] = [
    {
      label: 'Save shipping information',
      variant: 'primary',
      type: 'submit',
    },
  ];

  // Variant 6: Contact/Message Form
  const contactFields: FormFieldConfig[] = [
    {
      type: 'input',
      label: 'First name',
      placeholder: 'Fist name',
      inputType: 'text',
    },
    {
      type: 'input',
      label: 'Surname',
      placeholder: 'Last name',
      inputType: 'text',
    },
    {
      type: 'input',
      label: 'Email',
      placeholder: 'mail@mail.com',
      inputType: 'email',
      mandatory: true,
    },
    {
      type: 'textarea',
      label: 'Message',
      placeholder: 'Write your message here....',
    },
  ];

  const contactButtons: FormButtonConfig[] = [
    {
      label: 'Submit',
      variant: 'primary',
      type: 'submit',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Form Groups
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Pre-configured form groups for common use cases. Includes heading, help text, fields, buttons, and links.
      </p>

      {/* Variant 1: Simple Email Submission */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Simple Email Submission
        </h2>
        <div className="flex flex-wrap gap-8">
          <FormGroup
            heading="Heading"
            helpText="Help text"
            fields={[...simpleEmailFields, ...simpleEmailCheckbox]}
            buttons={simpleEmailButtons}
            width="300px"
          />
        </div>
      </section>

      {/* Variant 2: Email and Password Reset */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Email and Password Reset
        </h2>
        <div className="flex flex-wrap gap-8">
          <FormGroup
            heading="Heading"
            helpText="Help text"
            fields={resetPasswordFields}
            buttons={resetPasswordButtons}
            width="300px"
          />
        </div>
      </section>

      {/* Variant 3: Sign In Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Sign In Form
        </h2>
        <div className="flex flex-wrap gap-8">
          <FormGroup
            heading="Heading"
            helpText="Help text"
            fields={signInFields}
            buttons={signInButtons}
            links={signInLinks}
            width="300px"
          />
        </div>
      </section>

      {/* Variant 4: Sign Up Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Sign Up Form
        </h2>
        <div className="flex flex-wrap gap-8">
          <FormGroup
            heading="Heading"
            helpText="Help text"
            fields={signUpFields}
            buttons={signUpButtons}
            width="300px"
          />
        </div>
      </section>

      {/* Variant 5: Shipping Information Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Shipping Information Form
        </h2>
        <div className="flex flex-wrap gap-8">
          <FormGroup
            heading="Heading"
            helpText="Help text"
            fields={shippingFields}
            buttons={shippingButtons}
            width="300px"
          />
        </div>
      </section>

      {/* Variant 6: Contact/Message Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Contact/Message Form
        </h2>
        <div className="flex flex-wrap gap-8">
          <FormGroup
            heading="Heading"
            helpText="Help text"
            fields={contactFields}
            buttons={contactButtons}
            width="300px"
          />
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
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Form Width</dt>
              <dd className="text-[var(--color-text-secondary)]">300px (default), customizable</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Heading Font</dt>
              <dd className="text-[var(--color-text-secondary)]">30px, semibold weight, 40px line height</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Help Text Font</dt>
              <dd className="text-[var(--color-text-secondary)]">16px, regular weight, 20px line height</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Gap Between Sections</dt>
              <dd className="text-[var(--color-text-secondary)]">24px</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Gap Between Fields</dt>
              <dd className="text-[var(--color-text-secondary)]">8px</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-text-primary)] mb-2">Gap Between Buttons</dt>
              <dd className="text-[var(--color-text-secondary)]">8px</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

