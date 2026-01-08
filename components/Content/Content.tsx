'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import { ImageFormat } from '@/components/ImageFormat';
import { ContentItem, ContentItemProps } from './ContentItem';

export type ContentLayout = 'default' | 'column' | 'grid';
export type ContentAlignment = 'full' | 'left' | 'right';

export interface ContentProps {
  /**
   * Layout variant
   * @default 'default'
   */
  layout?: ContentLayout;
  /**
   * Alignment variant
   * @default 'full'
   */
  alignment?: ContentAlignment;
  /**
   * Show icons (for grid layout)
   * @default true
   */
  icon?: boolean;
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
   * Array of content items (for Column and Grid layouts)
   */
  items?: Omit<ContentItemProps, 'layout'>[];
  /**
   * Primary action button label
   */
  primaryActionLabel?: string;
  /**
   * Primary action button onClick handler
   */
  onPrimaryActionClick?: () => void;
  /**
   * Secondary action button label
   */
  secondaryActionLabel?: string;
  /**
   * Secondary action button onClick handler
   */
  onSecondaryActionClick?: () => void;
  /**
   * Image source URL
   */
  imageSrc?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Image format
   * @default 'square'
   */
  imageFormat?: 'portrait' | 'landscape' | 'square';
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Content Component
 * 
 * A versatile content component for displaying text, images, and action buttons.
 * Supports multiple layout variants (Default, Column, Grid) and alignment options (Full, Left, Right).
 */
export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  (
    {
      layout = 'default',
      alignment = 'full',
      icon = true,
      label,
      heading,
      subheading,
      body,
      items = [],
      primaryActionLabel,
      onPrimaryActionClick,
      secondaryActionLabel,
      onSecondaryActionClick,
      imageSrc,
      imageAlt,
      imageFormat = 'square',
      className,
    },
    ref
  ) => {
    // Container styles
    const containerStyles = cn(
      'flex flex-wrap',
      'bg-[var(--color-background-surface)]',
      'p-16', // 64px padding
      'gap-8', // 32px gap (device column gap)
      'items-center',
      'w-full',
      'max-w-[1280px]',
      'mx-auto',
      className
    );

    // Default layout - Left alignment
    if (layout === 'default' && alignment === 'left') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Content Section */}
          <div className="basis-0 flex flex-col grow items-start min-w-[327px] pr-8">
            <div className="flex flex-col gap-8 items-start max-w-[888px] w-full">
              {/* Text Section */}
              <div className="flex flex-col gap-2 items-start w-full">
                {label && (
                  <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                    {label}
                  </p>
                )}
                {heading && (
                  <p className="font-primary font-semibold text-[48px] leading-[48px] text-[var(--color-text-primary)] w-full">
                    {heading}
                  </p>
                )}
                {subheading && (
                  <p className="font-primary font-normal text-2xl leading-[30px] text-[var(--color-text-primary)] w-full">
                    {subheading}
                  </p>
                )}
              </div>
              {body && (
                <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
                  {body}
                </p>
              )}
              {/* Buttons */}
              {(primaryActionLabel || secondaryActionLabel) && (
                <div className="flex gap-4 items-start">
                  {secondaryActionLabel && (
                    <Button
                      variant="neutral"
                      size="medium"
                      onClick={onSecondaryActionClick}
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  {primaryActionLabel && (
                    <Button
                      variant="primary"
                      size="medium"
                      onClick={onPrimaryActionClick}
                    >
                      {primaryActionLabel}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Image */}
          {imageSrc && (
            <div className="basis-0 grow aspect-square relative overflow-hidden">
              <ImageFormat
                src={imageSrc}
                alt={imageAlt || 'Content image'}
                format={imageFormat}
                overlay={false}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      );
    }

    // Default layout - Right alignment
    if (layout === 'default' && alignment === 'right') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Image */}
          {imageSrc && (
            <div className="basis-0 grow aspect-square relative overflow-hidden">
              <ImageFormat
                src={imageSrc}
                alt={imageAlt || 'Content image'}
                format={imageFormat}
                overlay={false}
                className="w-full h-full"
              />
            </div>
          )}
          {/* Content Section */}
          <div className="basis-0 flex flex-col grow items-start min-w-[327px] pl-8">
            <div className="flex flex-col gap-8 items-start max-w-[888px] w-full">
              {/* Text Section */}
              <div className="flex flex-col gap-2 items-start w-full">
                {label && (
                  <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                    {label}
                  </p>
                )}
                {heading && (
                  <p className="font-primary font-semibold text-[48px] leading-[48px] text-[var(--color-text-primary)] w-full">
                    {heading}
                  </p>
                )}
                {subheading && (
                  <p className="font-primary font-normal text-2xl leading-[30px] text-[var(--color-text-primary)] w-full">
                    {subheading}
                  </p>
                )}
              </div>
              {body && (
                <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
                  {body}
                </p>
              )}
              {/* Buttons */}
              {(primaryActionLabel || secondaryActionLabel) && (
                <div className="flex gap-4 items-start">
                  {secondaryActionLabel && (
                    <Button
                      variant="neutral"
                      size="medium"
                      onClick={onSecondaryActionClick}
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  {primaryActionLabel && (
                    <Button
                      variant="primary"
                      size="medium"
                      onClick={onPrimaryActionClick}
                    >
                      {primaryActionLabel}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Column layout - Left alignment
    if (layout === 'column' && alignment === 'left') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Content Section */}
          <div className="basis-0 flex flex-col grow items-start min-w-[327px] gap-16 pr-0">
            <div className="flex flex-col gap-8 items-start w-full">
              {/* Text Section */}
              <div className="flex flex-col gap-8 items-start max-w-[888px] w-full">
                <div className="flex flex-col gap-2 items-start w-full">
                  {label && (
                    <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                      {label}
                    </p>
                  )}
                  {heading && (
                    <p className="font-primary font-semibold text-[36px] leading-[40px] text-[var(--color-text-primary)] w-full">
                      {heading}
                    </p>
                  )}
                </div>
              </div>
              {/* Items */}
              {items.length > 0 && (
                <div className="flex gap-8 items-start w-full">
                  {items.map((item, index) => (
                    <ContentItem
                      key={index}
                      {...item}
                      layout="column"
                      showIcon={icon}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Buttons */}
            {(primaryActionLabel || secondaryActionLabel) && (
              <div className="flex gap-4 items-start">
                {primaryActionLabel && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={onPrimaryActionClick}
                  >
                    {primaryActionLabel}
                  </Button>
                )}
                {secondaryActionLabel && (
                  <Button
                    variant="neutral"
                    size="medium"
                    onClick={onSecondaryActionClick}
                  >
                    {secondaryActionLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
          {/* Image */}
          {imageSrc && (
            <div className="basis-0 grow aspect-square relative overflow-hidden">
              <ImageFormat
                src={imageSrc}
                alt={imageAlt || 'Content image'}
                format={imageFormat}
                overlay={false}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      );
    }

    // Column layout - Right alignment
    if (layout === 'column' && alignment === 'right') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Image */}
          {imageSrc && (
            <div className="basis-0 grow aspect-square relative overflow-hidden">
              <ImageFormat
                src={imageSrc}
                alt={imageAlt || 'Content image'}
                format={imageFormat}
                overlay={false}
                className="w-full h-full"
              />
            </div>
          )}
          {/* Content Section */}
          <div className="basis-0 flex flex-col grow items-start min-w-[327px] gap-16 pl-0">
            <div className="flex flex-col gap-8 items-start w-full">
              {/* Text Section */}
              <div className="flex flex-col gap-8 items-start max-w-[888px] w-full">
                <div className="flex flex-col gap-2 items-start w-full">
                  {label && (
                    <p className="font-primary font-medium text-lg leading-6 text-[var(--color-text-tertiary)] w-full">
                      {label}
                    </p>
                  )}
                  {heading && (
                    <p className="font-primary font-semibold text-[36px] leading-[40px] text-[var(--color-text-primary)] w-full">
                      {heading}
                    </p>
                  )}
                </div>
              </div>
              {/* Items */}
              {items.length > 0 && (
                <div className="flex gap-8 items-start w-full">
                  {items.map((item, index) => (
                    <ContentItem
                      key={index}
                      {...item}
                      layout="column"
                      showIcon={icon}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Buttons */}
            {(primaryActionLabel || secondaryActionLabel) && (
              <div className="flex gap-4 items-start">
                {primaryActionLabel && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={onPrimaryActionClick}
                  >
                    {primaryActionLabel}
                  </Button>
                )}
                {secondaryActionLabel && (
                  <Button
                    variant="neutral"
                    size="medium"
                    onClick={onSecondaryActionClick}
                  >
                    {secondaryActionLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Grid layout - Left alignment
    if (layout === 'grid' && alignment === 'left') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Content Section */}
          <div className="basis-0 flex flex-col grow items-start min-w-[327px] gap-16 px-0 py-8">
            {/* First row */}
            {items.length > 0 && (
              <div className="flex gap-8 items-start w-full">
                {items.slice(0, 2).map((item, index) => (
                  <ContentItem
                    key={index}
                    {...item}
                    layout="grid"
                    showIcon={icon}
                  />
                ))}
              </div>
            )}
            {/* Second row */}
            {items.length > 2 && (
              <div className="flex gap-8 items-start w-full">
                {items.slice(2, 4).map((item, index) => (
                  <ContentItem
                    key={index + 2}
                    {...item}
                    layout="grid"
                    showIcon={icon}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Image */}
          {imageSrc && (
            <div className="basis-0 grow aspect-square relative overflow-hidden">
              <ImageFormat
                src={imageSrc}
                alt={imageAlt || 'Content image'}
                format={imageFormat}
                overlay={false}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      );
    }

    // Grid layout - Right alignment
    if (layout === 'grid' && alignment === 'right') {
      return (
        <div ref={ref} className={containerStyles}>
          {/* Image */}
          {imageSrc && (
            <div className="basis-0 grow aspect-square relative overflow-hidden">
              <ImageFormat
                src={imageSrc}
                alt={imageAlt || 'Content image'}
                format={imageFormat}
                overlay={false}
                className="w-full h-full"
              />
            </div>
          )}
          {/* Content Section */}
          <div className="basis-0 flex flex-col grow items-start min-w-[327px] gap-16 px-0 py-8">
            {/* First row */}
            {items.length > 0 && (
              <div className="flex gap-8 items-start w-full">
                {items.slice(0, 2).map((item, index) => (
                  <ContentItem
                    key={index}
                    {...item}
                    layout="grid"
                    showIcon={icon}
                  />
                ))}
              </div>
            )}
            {/* Second row */}
            {items.length > 2 && (
              <div className="flex gap-8 items-start w-full">
                {items.slice(2, 4).map((item, index) => (
                  <ContentItem
                    key={index + 2}
                    {...item}
                    layout="grid"
                    showIcon={icon}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Default layout - Full alignment (centered)
    return (
      <div ref={ref} className={cn(containerStyles, 'flex-col')}>
        <div className="flex flex-col gap-12 items-center w-full">
          {/* Text Section */}
          <div className="flex flex-col gap-8 items-center max-w-[888px] text-center w-full">
            <div className="flex flex-col gap-2 items-center w-full">
              {label && (
                <p className="font-primary font-medium text-base leading-5 text-[var(--color-text-tertiary)] w-full">
                  {label}
                </p>
              )}
              {heading && (
                <p className="font-primary font-semibold text-[30px] leading-[40px] text-[var(--color-text-primary)] w-full">
                  {heading}
                </p>
              )}
              {subheading && (
                <p className="font-primary font-normal text-2xl leading-[30px] text-[var(--color-text-primary)] w-full">
                  {subheading}
                </p>
              )}
            </div>
            {body && (
              <p className="font-primary font-normal text-lg leading-6 text-[var(--color-text-primary)] w-full">
                {body}
              </p>
            )}
          </div>
          {/* Buttons */}
          {(primaryActionLabel || secondaryActionLabel) && (
            <div className="flex gap-4 items-center justify-center">
              {primaryActionLabel && (
                <Button
                  variant="primary"
                  size="medium"
                  onClick={onPrimaryActionClick}
                >
                  {primaryActionLabel}
                </Button>
              )}
              {secondaryActionLabel && (
                <Button
                  variant="neutral"
                  size="medium"
                  onClick={onSecondaryActionClick}
                >
                  {secondaryActionLabel}
                </Button>
              )}
            </div>
          )}
        </div>
        {/* Image */}
        {imageSrc && (
          <div className="w-full aspect-[456/256] relative overflow-hidden">
            <ImageFormat
              src={imageSrc}
              alt={imageAlt || 'Content image'}
              format="landscape"
              overlay={false}
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    );
  }
);

Content.displayName = 'Content';

