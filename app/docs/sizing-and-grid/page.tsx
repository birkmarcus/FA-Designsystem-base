'use client';

import { useState } from 'react';

// Grid system specifications
const gridSpecs = {
  mobile: {
    columns: 4,
    padding: 16,
    gap: 16,
    maxWidth: 375,
  },
  tablet: {
    columns: 6,
    padding: 24,
    gap: 24,
    maxWidth: 768,
  },
  desktop1280: {
    columns: 12,
    padding: 64,
    gap: 32,
    maxWidth: 1280,
  },
  desktop1920: {
    columns: 12,
    padding: 64,
    gap: 32,
    maxWidth: 1920,
  },
};

// Layout patterns for each breakpoint
const layoutPatterns = {
  mobile: [
    { label: 'Full', cols: 4, vertical: true },
    { label: 'Major', cols: 4, vertical: true },
    { label: 'Minor', cols: 4, vertical: true },
    { label: 'Minor', cols: 4, vertical: true },
    { label: 'Major', cols: 4, vertical: true },
    { label: 'Half', cols: 4, vertical: true },
    { label: 'Half', cols: 4, vertical: true },
    { label: 'Minor', cols: 2, next: { label: 'Minor', cols: 2 } },
    { label: 'Minor', cols: 2, next: { label: 'Minor', cols: 2 } },
    { label: 'Half', cols: 4, vertical: true },
    { label: 'Minor', cols: 2, next: { label: 'Minor', cols: 2 } },
    { label: 'Minor', cols: 2, next: { label: 'Minor', cols: 2 } },
    { label: 'Half', cols: 4, vertical: true },
    { label: 'Minor', cols: 4, vertical: true },
    { label: 'Half', cols: 4, vertical: true },
    { label: 'Minor', cols: 4, vertical: true },
  ],
  tablet: [
    { label: 'Full', cols: 6 },
    { label: 'Major', cols: 4, next: { label: 'Minor', cols: 2 } },
    { label: 'Minor', cols: 2, next: { label: 'Major', cols: 4 } },
    { label: 'Half', cols: 3, next: { label: 'Half', cols: 3 } },
    { label: 'Minor', cols: 2, next: { label: 'Minor', cols: 2 }, next2: { label: 'Minor', cols: 2 } },
    { label: 'Minor', cols: 3, next: { label: 'Half', cols: 3 } },
    { label: 'Minor', cols: 3, next: { label: 'Minor', cols: 3 } },
    { label: 'Half', cols: 2, next: { label: 'Minor', cols: 2 }, next2: { label: 'Minor', cols: 2 } },
    { label: 'Minor', cols: 2, next: { label: 'Half', cols: 2 }, next2: { label: 'Minor', cols: 2 } },
  ],
  desktop1280: [
    { label: 'Full', cols: 12 },
    { label: 'Major', cols: 8, next: { label: 'Minor', cols: 4 } },
    { label: 'Minor', cols: 4, next: { label: 'Major', cols: 8 } },
    { label: 'Half', cols: 6, next: { label: 'Half', cols: 6 } },
    { label: 'Minor', cols: 4, next: { label: 'Minor', cols: 4 }, next2: { label: 'Minor', cols: 4 } },
    { label: 'Minor', cols: 4, next: { label: 'Minor', cols: 4 }, next2: { label: 'Minor', cols: 4 } },
    { label: 'Half', cols: 6, next: { label: 'Minor', cols: 3 }, next2: { label: 'Minor', cols: 3 } },
    { label: 'Minor', cols: 4, next: { label: 'Minor', cols: 4 }, next2: { label: 'Minor', cols: 4 } },
    { label: 'Minor', cols: 4, next: { label: 'Half', cols: 6 }, next2: { label: 'Minor', cols: 2 } },
  ],
  desktop1920: [
    { label: 'Full', cols: 12 },
    { label: 'Major', cols: 8, next: { label: 'Minor', cols: 4 } },
    { label: 'Minor', cols: 4, next: { label: 'Major', cols: 8 } },
    { label: 'Half', cols: 6, next: { label: 'Half', cols: 6 } },
    { label: 'Minor', cols: 3, next: { label: 'Minor', cols: 3 }, next2: { label: 'Minor', cols: 3 }, next3: { label: 'Minor', cols: 3 } },
    { label: 'Half', cols: 6, next: { label: 'Minor', cols: 3 }, next2: { label: 'Minor', cols: 3 } },
    { label: 'Minor', cols: 3, next: { label: 'Minor', cols: 3 }, next2: { label: 'Half', cols: 6 } },
    { label: 'Minor', cols: 3, next: { label: 'Half', cols: 6 }, next2: { label: 'Minor', cols: 3 } },
  ],
};

export default function SizingAndGridPage() {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState<'mobile' | 'tablet' | 'desktop1280' | 'desktop1920'>('desktop1280');

  const currentSpec = gridSpecs[selectedBreakpoint];
  const currentPatterns = layoutPatterns[selectedBreakpoint];

  const GridVisualization = ({ breakpoint }: { breakpoint: keyof typeof gridSpecs }) => {
    const spec = gridSpecs[breakpoint];
    const patterns = layoutPatterns[breakpoint];
    
    return (
      <div className="relative bg-[#f7f7f7] rounded-xl p-4 overflow-x-auto">
        <div 
          className="relative mx-auto"
          style={{ 
            maxWidth: `${spec.maxWidth}px`,
            padding: `0 ${spec.padding}px`,
          }}
        >
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 flex pointer-events-none"
            style={{ gap: `${spec.gap}px`, padding: `0 ${spec.padding}px` }}
          >
            {Array.from({ length: spec.columns }).map((_, i) => (
              <div
                key={i}
                className="bg-[rgba(255,0,0,0.1)] flex-1"
                style={{ minWidth: 0 }}
              />
            ))}
          </div>

          {/* Content blocks */}
          <div className="relative space-y-4" style={{ marginTop: '24px' }}>
            {patterns.map((pattern, idx) => {
              // For mobile vertical stacking, render full width blocks
              if (breakpoint === 'mobile' && pattern.vertical) {
                return (
                  <div key={idx} className="w-full">
                    <div
                      className="bg-white border border-[#ebebec] rounded-xl p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] flex items-center justify-center min-h-[70px] w-full"
                    >
                      <span className="font-bold text-base text-[#000020] font-mono">{pattern.label}</span>
                    </div>
                  </div>
                );
              }
              
              // For horizontal layouts
              const totalCols = pattern.cols + (pattern.next?.cols || 0) + (pattern.next2?.cols || 0) + (pattern.next3?.cols || 0);
              const colWidth = `calc((100% - ${(totalCols - 1) * spec.gap}px) / ${totalCols} * ${pattern.cols} + ${(pattern.cols - 1) * spec.gap}px)`;
              
              return (
                <div 
                  key={idx}
                  className={`flex ${breakpoint === 'mobile' ? 'flex-wrap' : ''}`}
                  style={{ gap: `${spec.gap}px` }}
                >
                  {/* First block */}
                  <div
                    className="bg-white border border-[#ebebec] rounded-xl p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] flex items-center justify-center min-h-[70px]"
                    style={{ width: colWidth }}
                  >
                    <span className="font-bold text-base text-[#000020] font-mono">{pattern.label}</span>
                  </div>
                  
                  {/* Next block */}
                  {pattern.next && (
                    <>
                      <div
                        className="bg-white border border-[#ebebec] rounded-xl p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] flex items-center justify-center min-h-[70px]"
                        style={{ 
                          width: `calc((100% - ${(totalCols - 1) * spec.gap}px) / ${totalCols} * ${pattern.next.cols} + ${(pattern.next.cols - 1) * spec.gap}px)` 
                        }}
                      >
                        <span className="font-bold text-base text-[#000020] font-mono">{pattern.next.label}</span>
                      </div>
                    </>
                  )}
                  
                  {/* Next2 block */}
                  {pattern.next2 && (
                    <>
                      <div
                        className="bg-white border border-[#ebebec] rounded-xl p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] flex items-center justify-center min-h-[70px]"
                        style={{ 
                          width: `calc((100% - ${(totalCols - 1) * spec.gap}px) / ${totalCols} * ${pattern.next2.cols} + ${(pattern.next2.cols - 1) * spec.gap}px)` 
                        }}
                      >
                        <span className="font-bold text-base text-[#000020] font-mono">{pattern.next2.label}</span>
                      </div>
                    </>
                  )}
                  
                  {/* Next3 block */}
                  {pattern.next3 && (
                    <>
                      <div
                        className="bg-white border border-[#ebebec] rounded-xl p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] flex items-center justify-center min-h-[70px]"
                        style={{ 
                          width: `calc((100% - ${(totalCols - 1) * spec.gap}px) / ${totalCols} * ${pattern.next3.cols} + ${(pattern.next3.cols - 1) * spec.gap}px)` 
                        }}
                      >
                        <span className="font-bold text-base text-[#000020] font-mono">{pattern.next3.label}</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Sizing and Grid
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Responsive grid system with specifications for mobile, tablet, and desktop breakpoints.
      </p>

      {/* Breakpoint Selector */}
      <section className="mb-16">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setSelectedBreakpoint('mobile')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedBreakpoint === 'mobile'
                ? 'bg-[var(--color-interactive-primary)] text-white'
                : 'bg-[var(--color-background-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-background-surfaceTertiary)]'
            }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setSelectedBreakpoint('tablet')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedBreakpoint === 'tablet'
                ? 'bg-[var(--color-interactive-primary)] text-white'
                : 'bg-[var(--color-background-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-background-surfaceTertiary)]'
            }`}
          >
            Tablet
          </button>
          <button
            onClick={() => setSelectedBreakpoint('desktop1280')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedBreakpoint === 'desktop1280'
                ? 'bg-[var(--color-interactive-primary)] text-white'
                : 'bg-[var(--color-background-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-background-surfaceTertiary)]'
            }`}
          >
            Desktop 1280
          </button>
          <button
            onClick={() => setSelectedBreakpoint('desktop1920')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedBreakpoint === 'desktop1920'
                ? 'bg-[var(--color-interactive-primary)] text-white'
                : 'bg-[var(--color-background-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-background-surfaceTertiary)]'
            }`}
          >
            Desktop 1920
          </button>
        </div>

        {/* Grid Specifications */}
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            Grid Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm font-medium text-[var(--color-text-tertiary)] mb-1">Columns</div>
              <div className="text-lg font-semibold text-[var(--color-text-primary)]">{currentSpec.columns}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--color-text-tertiary)] mb-1">Padding</div>
              <div className="text-lg font-semibold text-[var(--color-text-primary)]">{currentSpec.padding}px</div>
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--color-text-tertiary)] mb-1">Gap</div>
              <div className="text-lg font-semibold text-[var(--color-text-primary)]">{currentSpec.gap}px</div>
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--color-text-tertiary)] mb-1">Max Width</div>
              <div className="text-lg font-semibold text-[var(--color-text-primary)]">{currentSpec.maxWidth}px</div>
            </div>
          </div>
        </div>

        {/* Grid Visualization */}
        <GridVisualization breakpoint={selectedBreakpoint} />
      </section>

      {/* All Breakpoints Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          All Breakpoints
        </h2>
        <div className="space-y-12">
          {(['mobile', 'tablet', 'desktop1280', 'desktop1920'] as const).map((breakpoint) => (
            <div key={breakpoint}>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 capitalize">
                {breakpoint === 'desktop1280' ? 'Desktop 1280px' : breakpoint === 'desktop1920' ? 'Desktop 1920px' : breakpoint}
              </h3>
              <GridVisualization breakpoint={breakpoint} />
            </div>
          ))}
        </div>
      </section>

      {/* Grid Usage Guidelines */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Grid Usage Guidelines
        </h2>
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Layout Patterns</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li><strong>Full:</strong> Spans all columns - Use for hero sections, full-width banners</li>
              <li><strong>Major:</strong> Spans majority of columns - Use for primary content areas</li>
              <li><strong>Half:</strong> Spans half the columns - Use for side-by-side content</li>
              <li><strong>Minor:</strong> Spans fewer columns - Use for secondary content, sidebars, or cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Responsive Behavior</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Mobile: 4 columns with 16px padding and gap</li>
              <li>Tablet: 6 columns with 24px padding and gap</li>
              <li>Desktop 1280px: 12 columns with 64px padding and 32px gap</li>
              <li>Desktop 1920px: 12 columns with 64px padding and 32px gap</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
              <li>Always maintain consistent padding and gap spacing</li>
              <li>Use the grid overlay to align content precisely</li>
              <li>Ensure content blocks align to column boundaries</li>
              <li>Test layouts across all breakpoints</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

