'use client';

import { useState } from 'react';
import { Tooltip, QuestionCircleIcon, TooltipBodyCopy, TooltipModal } from '@/components/Tooltip';
import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';

export default function TooltipsPage() {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Tooltips
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Flexible tooltip components for displaying contextual information. Supports multiple positions, 
        custom triggers, and inline body copy usage.
      </p>

      {/* Basic Tooltip */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Basic Tooltip
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Question Circle Icon
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <Tooltip
                heading="Heading"
                description="Description"
                position="top"
              >
                <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
              </Tooltip>
              
              <Tooltip
                heading="Heading"
                description="Description"
                position="bottom"
              >
                <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
              </Tooltip>
              
              <Tooltip
                heading="Heading"
                description="Description"
                position="left"
              >
                <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
              </Tooltip>
              
              <Tooltip
                heading="Heading"
                description="Description"
                position="right"
              >
                <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
              </Tooltip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Custom Content
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <Tooltip
                content={
                  <div className="text-white">
                    <p className="font-medium text-base leading-5">Custom Heading</p>
                    <p className="font-normal text-sm leading-4 mt-0">
                      This is custom tooltip content with more details.
                    </p>
                  </div>
                }
                position="top"
              >
                <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Tooltip with Different Triggers */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tooltip with Different Triggers
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Button
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip
                heading="Button Tooltip"
                description="This button performs an important action"
                position="top"
              >
                <Button variant="primary" size="medium">
                  Hover Me
                </Button>
              </Tooltip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Icon Button
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip
                heading="Settings"
                description="Open settings menu"
                position="top"
              >
                <IconButton
                  variant="primary"
                  aria-label="Settings"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Text Link
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip
                heading="Learn More"
                description="Click to read more about this feature"
                position="top"
              >
                <span className="text-[var(--color-text-link)] cursor-pointer underline hover:text-[var(--color-text-linkHover)]">
                  Hover over this link
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Tooltip Body Copy */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tooltip Body Copy
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Inline Text with Tooltip
            </h3>
            <div className="max-w-2xl">
              <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
                This is a paragraph of body copy. Here is some text with a{' '}
                <TooltipBodyCopy
                  text="tooltip"
                  heading="Tooltip Information"
                  description="This tooltip appears inline with the text, making it easy to provide additional context without disrupting the reading flow."
                  position="top"
                  iconSize="small"
                />
                {' '}that provides additional information. The tooltip can be triggered by hovering over the question mark icon.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Different Icon Sizes
            </h3>
            <div className="space-y-4">
              <div className="max-w-2xl">
                <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
                  Small icon:{' '}
                  <TooltipBodyCopy
                    text="small"
                    heading="Small Icon"
                    description="This uses a small icon size"
                    position="top"
                    iconSize="small"
                  />
                </p>
              </div>
              <div className="max-w-2xl">
                <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
                  Medium icon:{' '}
                  <TooltipBodyCopy
                    text="medium"
                    heading="Medium Icon"
                    description="This uses a medium icon size"
                    position="top"
                    iconSize="medium"
                  />
                </p>
              </div>
              <div className="max-w-2xl">
                <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
                  Large icon:{' '}
                  <TooltipBodyCopy
                    text="large"
                    heading="Large Icon"
                    description="This uses a large icon size"
                    position="top"
                    iconSize="large"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controlled Tooltip */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Controlled Tooltip
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Programmatically Controlled
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip
                heading="Controlled Tooltip"
                description="This tooltip is controlled by the button below"
                position="top"
                open={controlledOpen}
                onOpenChange={setControlledOpen}
              >
                <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
              </Tooltip>
              
              <Button
                variant="primary"
                size="medium"
                onClick={() => setControlledOpen(!controlledOpen)}
              >
                {controlledOpen ? 'Hide' : 'Show'} Tooltip
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tooltip States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tooltip States
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Disabled Tooltip
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <Tooltip
                heading="Disabled Tooltip"
                description="This tooltip is disabled and won't show"
                position="top"
                disabled
              >
                <QuestionCircleIcon className="text-[var(--color-text-disabled)] cursor-not-allowed" />
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Tooltip Modal */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Tooltip Modal
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Modal
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Click the question mark icon to open a modal dialog with detailed information.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <TooltipModal
                heading="Heading"
                content={
                  <>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur. Et commodo sed nulla quis quisque turpis imperdiet. 
                      Viverra morbi auctor quis pretium interdum arcu blandit in. At egestas varius accumsan dui in 
                      curabitur semper arcu id. Amet ornare commodo amet magna fringilla egestas.
                    </p>
                    <p className="mb-0 text-[14px]">&nbsp;</p>
                    <p className="mb-0">
                      Lobortis aliquet ut quis id sed. Egestas iaculis nulla nibh magna id sapien sollicitudin sed. 
                      Malesuada nulla cras ac nulla. A commodo ornare cras pretium pellentesque risus purus in facilisis.
                    </p>
                  </>
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Different Icon Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <TooltipModal
                  heading="Small Icon"
                  content="This modal uses a small icon trigger."
                  iconSize="small"
                />
                <span className="text-xs text-[var(--color-text-tertiary)]">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TooltipModal
                  heading="Medium Icon"
                  content="This modal uses a medium icon trigger."
                  iconSize="medium"
                />
                <span className="text-xs text-[var(--color-text-tertiary)]">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TooltipModal
                  heading="Large Icon"
                  content="This modal uses a large icon trigger."
                  iconSize="large"
                />
                <span className="text-xs text-[var(--color-text-tertiary)]">Large</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Controlled Modal
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <TooltipModal
                heading="Controlled Modal"
                content="This modal is controlled by the button below."
                open={controlledOpen}
                onOpenChange={setControlledOpen}
              />
              
              <Button
                variant="primary"
                size="medium"
                onClick={() => setControlledOpen(!controlledOpen)}
              >
                {controlledOpen ? 'Close' : 'Open'} Modal
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Disabled Modal
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <TooltipModal
                heading="Disabled Modal"
                content="This modal is disabled and won't open."
                disabled
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Usage Examples
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Basic Usage
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`import { Tooltip, QuestionCircleIcon } from '@/components/Tooltip';

<Tooltip
  heading="Help"
  description="This is helpful information"
  position="top"
>
  <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
</Tooltip>`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Body Copy Usage
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`import { TooltipBodyCopy } from '@/components/Tooltip';

<p>
  This is text with a{' '}
  <TooltipBodyCopy
    text="tooltip"
    heading="Information"
    description="Additional details here"
    position="top"
  />
  {' '}inline.
</p>`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Custom Trigger
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`import { Tooltip } from '@/components/Tooltip';
import { Button } from '@/components/Button';

<Tooltip
  heading="Action"
  description="Click to perform action"
  position="bottom"
>
  <Button variant="primary">Hover Me</Button>
</Tooltip>`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Tooltip Modal Usage
            </h3>
            <pre className="bg-[var(--color-background-surface)] p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-[var(--color-text-primary)]">
{`import { TooltipModal } from '@/components/Tooltip';

<TooltipModal
  heading="Information"
  content={
    <>
      <p>This is detailed information displayed in a modal.</p>
      <p>You can include multiple paragraphs or any React content.</p>
    </>
  }
/>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

