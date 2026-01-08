'use client';

import { useState } from 'react';
import { CarouselDot } from '@/components/CarouselPagination';
import { CarouselPaginationGroup } from '@/components/CarouselPagination';
import { CarouselArrow } from '@/components/CarouselPagination';

export default function CarouselPaginationPage() {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(1);
  const [currentSlide4, setCurrentSlide4] = useState(2);

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Carousel Pagination
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Carousel pagination components including dots, pagination groups, and navigation arrows.
      </p>

      {/* Carousel Dot */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Carousel Dot
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Current Dot
            </h3>
            <div className="flex gap-3 items-center">
              <CarouselDot current />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Inactive Dot
            </h3>
            <div className="flex gap-3 items-center">
              <CarouselDot />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Multiple Dots
            </h3>
            <div className="flex gap-3 items-center">
              <CarouselDot current />
              <CarouselDot />
              <CarouselDot />
              <CarouselDot />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Pagination Group - Unframed */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Carousel Pagination Group - Unframed
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              3 Slides
            </h3>
            <CarouselPaginationGroup
              totalSlides={3}
              currentSlide={currentSlide1}
              onSlideChange={setCurrentSlide1}
              framed={false}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              5 Slides
            </h3>
            <CarouselPaginationGroup
              totalSlides={5}
              currentSlide={currentSlide2}
              onSlideChange={setCurrentSlide2}
              framed={false}
            />
          </div>
        </div>
      </section>

      {/* Carousel Pagination Group - Framed */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Carousel Pagination Group - Framed
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              3 Slides (with dark overlay background)
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg">
              <CarouselPaginationGroup
                totalSlides={3}
                currentSlide={currentSlide3}
                onSlideChange={setCurrentSlide3}
                framed={true}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              5 Slides (with dark overlay background)
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg">
              <CarouselPaginationGroup
                totalSlides={5}
                currentSlide={currentSlide4}
                onSlideChange={setCurrentSlide4}
                framed={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Arrow - Light Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Carousel Arrow - Light Variant (Dark Overlay)
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Left Arrow
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg">
              <CarouselArrow direction="left" color="light" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Right Arrow
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg">
              <CarouselArrow direction="right" color="light" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Both Arrows
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg flex gap-4 items-center">
              <CarouselArrow direction="left" color="light" />
              <CarouselArrow direction="right" color="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Arrow - Dark Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Carousel Arrow - Dark Variant (White Background)
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Left Arrow
            </h3>
            <CarouselArrow direction="left" color="dark" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Right Arrow
            </h3>
            <CarouselArrow direction="right" color="dark" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Both Arrows
            </h3>
            <div className="flex gap-4 items-center">
              <CarouselArrow direction="left" color="dark" />
              <CarouselArrow direction="right" color="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Disabled States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Disabled States
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Disabled Arrow (Light)
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg">
              <CarouselArrow direction="left" color="light" disabled />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Disabled Arrow (Dark)
            </h3>
            <CarouselArrow direction="right" color="dark" disabled />
          </div>
        </div>
      </section>

      {/* Complete Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Complete Example
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Carousel with Arrows and Pagination Dots
            </h3>
            <div className="bg-gray-200 p-8 rounded-lg">
              <div className="flex flex-col gap-6 items-center">
                {/* Arrows */}
                <div className="flex gap-4 items-center">
                  <CarouselArrow direction="left" color="light" />
                  <CarouselArrow direction="right" color="light" />
                </div>
                {/* Pagination Dots */}
                <CarouselPaginationGroup
                  totalSlides={5}
                  currentSlide={currentSlide2}
                  onSlideChange={setCurrentSlide2}
                  framed={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

