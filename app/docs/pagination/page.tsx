'use client';

import { useState } from 'react';
import { Pagination } from '@/components/Pagination';

export default function PaginationPage() {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [currentPage4, setCurrentPage4] = useState(1);
  const [currentPage5, setCurrentPage5] = useState(1);
  const [currentPage6, setCurrentPage6] = useState(1);
  const [currentPage7, setCurrentPage7] = useState(1);
  const [currentPage8, setCurrentPage8] = useState(1);
  const [currentPage9, setCurrentPage9] = useState(1);

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Pagination
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Pagination components with three variants and multiple alignment options.
      </p>

      {/* Default Variant - Left Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - Left Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage1}
            totalPages={10}
            variant="default"
            alignment="left"
            onPageChange={setCurrentPage1}
          />
        </div>
      </section>

      {/* Default Variant - Center Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - Center Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage2}
            totalPages={10}
            variant="default"
            alignment="center"
            onPageChange={setCurrentPage2}
          />
        </div>
      </section>

      {/* Default Variant - Right Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Default Variant - Right Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage3}
            totalPages={10}
            variant="default"
            alignment="right"
            onPageChange={setCurrentPage3}
          />
        </div>
      </section>

      {/* Simple Variant - Left Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Simple Variant - Left Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage4}
            totalPages={10}
            variant="simple"
            alignment="left"
            onPageChange={setCurrentPage4}
          />
        </div>
      </section>

      {/* Simple Variant - Center Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Simple Variant - Center Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage5}
            totalPages={10}
            variant="simple"
            alignment="center"
            onPageChange={setCurrentPage5}
          />
        </div>
      </section>

      {/* Simple Variant - Right Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Simple Variant - Right Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage6}
            totalPages={10}
            variant="simple"
            alignment="right"
            onPageChange={setCurrentPage6}
          />
        </div>
      </section>

      {/* Group Variant - Left Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Group Variant - Left Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage7}
            totalPages={10}
            variant="group"
            alignment="left"
            onPageChange={setCurrentPage7}
          />
        </div>
      </section>

      {/* Group Variant - Center Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Group Variant - Center Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage8}
            totalPages={10}
            variant="group"
            alignment="center"
            onPageChange={setCurrentPage8}
          />
        </div>
      </section>

      {/* Group Variant - Right Alignment */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Group Variant - Right Alignment
        </h2>
        <div className="space-y-8">
          <Pagination
            currentPage={currentPage9}
            totalPages={10}
            variant="group"
            alignment="right"
            onPageChange={setCurrentPage9}
          />
        </div>
      </section>

      {/* Edge Cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Edge Cases
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Few Pages (5 pages)
            </h3>
            <Pagination
              currentPage={1}
              totalPages={5}
              variant="default"
              alignment="left"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Many Pages (20 pages, showing page 10)
            </h3>
            <Pagination
              currentPage={10}
              totalPages={20}
              variant="default"
              alignment="left"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

