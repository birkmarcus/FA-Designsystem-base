'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { PaginationNumber } from './PaginationNumber';
import { PaginationGroup } from './PaginationGroup';
import { Button } from '@/components/Button';

export type PaginationVariant = 'default' | 'simple' | 'group';
export type PaginationAlignment = 'left' | 'center' | 'right';

export interface PaginationProps {
  /**
   * Current page number (1-indexed)
   */
  currentPage: number;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Pagination variant
   * @default 'default'
   */
  variant?: PaginationVariant;
  /**
   * Alignment of pagination controls
   * @default 'left'
   */
  alignment?: PaginationAlignment;
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Pagination Component
 * 
 * A comprehensive pagination component with three variants:
 * - Default: Numbers + Previous/Next buttons
 * - Simple: Previous/Next buttons + page info
 * - Group: Grouped buttons with numbers
 */
export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      variant = 'default',
      alignment = 'left',
      onPageChange,
      className,
    },
    ref
  ) => {
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange?.(page);
      }
    };

    const handlePrevious = () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
      const pages: (number | 'ellipsis')[] = [];
      const maxVisible = 7; // Show up to 7 page numbers

      if (totalPages <= maxVisible) {
        // Show all pages
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        if (currentPage <= 4) {
          // Show first 5 pages, then ellipsis, then last page
          for (let i = 2; i <= 5; i++) {
            pages.push(i);
          }
          pages.push('ellipsis');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
          // Show first page, ellipsis, then last 5 pages
          pages.push('ellipsis');
          for (let i = totalPages - 4; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          // Show first page, ellipsis, current-1, current, current+1, ellipsis, last page
          pages.push('ellipsis');
          pages.push(currentPage - 1);
          pages.push(currentPage);
          pages.push(currentPage + 1);
          pages.push('ellipsis');
          pages.push(totalPages);
        }
      }

      return pages;
    };

    const containerStyles = cn(
      'bg-[var(--color-background-surface)]',
      'border border-[var(--color-border-default)] border-solid',
      'flex items-center',
      'p-[var(--spacing-primitive-4)]', // 16px padding
      'w-full',
      alignment === 'left' && 'justify-start',
      alignment === 'center' && 'justify-center',
      alignment === 'right' && 'justify-end',
      className
    );

    const pageNumbers = getPageNumbers();

    // Arrow icons
    const ArrowLeftIcon = () => (
      <svg className="w-5 h-[16.667px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    );

    const ArrowRightIcon = () => (
      <svg className="w-5 h-[16.667px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );

    // Previous/Next button component
    const PreviousButton = ({ withIcon = false }: { withIcon?: boolean }) => (
      <Button
        variant="neutral"
        size="medium"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        leftIcon={withIcon ? <ArrowLeftIcon /> : undefined}
      >
        Previous
      </Button>
    );

    const NextButton = ({ withIcon = false }: { withIcon?: boolean }) => (
      <Button
        variant="neutral"
        size="medium"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        rightIcon={withIcon ? <ArrowRightIcon /> : undefined}
      >
        Next
      </Button>
    );

    // Default variant: Numbers + Previous/Next buttons
    if (variant === 'default') {
      return (
        <div ref={ref} className={containerStyles}>
          {alignment === 'left' && (
            <>
              <div className="flex gap-[2px] items-start">
                {pageNumbers.map((page, index) => (
                  <React.Fragment key={index}>
                    {page === 'ellipsis' ? (
                      <PaginationNumber disabled>
                        ...
                      </PaginationNumber>
                    ) : (
                      <PaginationNumber
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationNumber>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex gap-[var(--spacing-primitive-3)] items-center ml-auto">
                <PreviousButton withIcon />
                <NextButton withIcon />
              </div>
            </>
          )}
          
          {alignment === 'center' && (
            <>
              <PreviousButton withIcon />
              <div className="flex gap-[2px] items-start mx-auto">
                {pageNumbers.map((page, index) => (
                  <React.Fragment key={index}>
                    {page === 'ellipsis' ? (
                      <PaginationNumber disabled>
                        ...
                      </PaginationNumber>
                    ) : (
                      <PaginationNumber
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationNumber>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <NextButton withIcon />
            </>
          )}
          
          {alignment === 'right' && (
            <>
              <div className="flex gap-[var(--spacing-primitive-3)] items-center mr-auto">
                <PreviousButton withIcon />
                <NextButton withIcon />
              </div>
              <div className="flex gap-[2px] items-start">
                {pageNumbers.map((page, index) => (
                  <React.Fragment key={index}>
                    {page === 'ellipsis' ? (
                      <PaginationNumber disabled>
                        ...
                      </PaginationNumber>
                    ) : (
                      <PaginationNumber
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationNumber>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </div>
      );
    }

    // Simple variant: Previous/Next buttons + page info
    if (variant === 'simple') {
      return (
        <div ref={ref} className={containerStyles}>
          {alignment === 'left' && (
            <>
              <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] text-nowrap">
                Page {currentPage} of {totalPages}
              </p>
              <div className="flex gap-[var(--spacing-primitive-3)] items-center ml-auto">
                <PreviousButton />
                <NextButton />
              </div>
            </>
          )}
          
          {alignment === 'center' && (
            <>
              <PreviousButton />
              <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] text-nowrap mx-auto">
                Page {currentPage} of {totalPages}
              </p>
              <NextButton />
            </>
          )}
          
          {alignment === 'right' && (
            <>
              <div className="flex gap-[var(--spacing-primitive-3)] items-center mr-auto">
                <PreviousButton />
                <NextButton />
              </div>
              <p className="font-primary font-normal text-sm leading-4 text-[var(--color-text-tertiary)] text-nowrap">
                Page {currentPage} of {totalPages}
              </p>
            </>
          )}
        </div>
      );
    }

    // Group variant: Grouped buttons with numbers
    if (variant === 'group') {
      const groupContainerStyles = cn(
        'flex items-start',
        alignment === 'left' && 'justify-start',
        alignment === 'center' && 'justify-center',
        alignment === 'right' && 'justify-end',
        alignment === 'right' && 'shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'
      );

      return (
        <div ref={ref} className={containerStyles}>
          <div className={groupContainerStyles}>
            <PaginationGroup
              hierarchy="leading"
              showIcon={true}
              showLabel={true}
              label="Previous"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            />
            
            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {page === 'ellipsis' ? (
                  <PaginationGroup hierarchy="middle" disabled>
                    ...
                  </PaginationGroup>
                ) : (
                  <PaginationGroup
                    hierarchy="middle"
                    state={page === currentPage ? 'active' : 'default'}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationGroup>
                )}
              </React.Fragment>
            ))}
            
            <PaginationGroup
              hierarchy="trailing"
              showIcon={true}
              showLabel={true}
              label="Next"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      );
    }

    return null;
  }
);

Pagination.displayName = 'Pagination';

