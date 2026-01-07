'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

export interface TextBlockProps {
  /**
   * Label text (small text above heading)
   */
  label?: string;
  /**
   * Main heading text
   */
  heading?: string;
  /**
   * Subheading text
   */
  subheading?: string;
  /**
   * Body text content
   */
  body?: string;
  /**
   * Primary CTA button text
   */
  primaryCta?: string;
  /**
   * Primary CTA button onClick handler
   */
  onPrimaryCtaClick?: () => void;
  /**
   * Secondary CTA button text
   */
  secondaryCta?: string;
  /**
   * Secondary CTA button onClick handler
   */
  onSecondaryCtaClick?: () => void;
  /**
   * Show/hide label
   * @default true
   */
  showLabel?: boolean;
  /**
   * Show/hide heading
   * @default true
   */
  showHeading?: boolean;
  /**
   * Show/hide subheading
   * @default true
   */
  showSubheading?: boolean;
  /**
   * Show/hide body
   * @default true
   */
  showBody?: boolean;
  /**
   * Show/hide CTA buttons
   * @default true
   */
  showCta?: boolean;
  /**
   * Additional className
   */
  className?: string;
}

/**
 * TextBlock Component
 * 
 * A text content block component with optional heading, subheading, body text,
 * and CTA buttons. Uses existing Button components.
 */
export const TextBlock: React.FC<TextBlockProps> = ({
  label = 'Label',
  heading = 'Purus sagittis fringilla arcu neque.',
  subheading = 'Bibendum amet at molestie mattis.',
  body = 'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.',
  primaryCta = 'Button',
  secondaryCta = 'Button',
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  showLabel = true,
  showHeading = true,
  showSubheading = true,
  showBody = true,
  showCta = true,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-8 items-start w-[545px]', className)}>
      {/* Top section: Label, Heading, Subheading */}
      <div className="flex flex-col gap-2 items-start w-full">
        {showLabel && label && (
          <p className="font-primary font-medium text-base leading-5 text-[var(--color-text-tertiary)] w-full">
            {label}
          </p>
        )}
        {showHeading && heading && (
          <h2 className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
            {heading}
          </h2>
        )}
        {showSubheading && subheading && (
          <h3 className="font-primary font-normal text-[24px] leading-[30px] text-[var(--color-text-primary)] w-full">
            {subheading}
          </h3>
        )}
      </div>

      {/* Body text */}
      {showBody && body && (
        <p className="font-primary font-normal text-[18px] leading-6 text-[var(--color-text-primary)] w-full">
          {body}
        </p>
      )}

      {/* CTA Buttons */}
      {showCta && (primaryCta || secondaryCta) && (
        <div className="flex gap-4 items-start">
          {secondaryCta && (
            <Button
              variant="neutral"
              size="medium"
              onClick={onSecondaryCtaClick}
            >
              {secondaryCta}
            </Button>
          )}
          {primaryCta && (
            <Button
              variant="primary"
              size="medium"
              onClick={onPrimaryCtaClick}
            >
              {primaryCta}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

TextBlock.displayName = 'TextBlock';

