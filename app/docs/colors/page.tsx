import { primitiveColors } from '@/tokens/primitives/colors';
import { semanticColors } from '@/tokens/semantic/colors';

export default function ColorsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Colors
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Complete color palette with primitives and semantic tokens.
      </p>

      {/* Primitives Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Primitives Colors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primary */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Primary</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.primary).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Secondary</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.secondary).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Neutral</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.neutral).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accent */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Accent</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.accent).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Success</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.success).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Warning</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.warning).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Error</h3>
            <div className="space-y-2">
              {Object.entries(primitiveColors.error).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {shade}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Semantic Colors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Background Colors */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Background</h3>
            <div className="space-y-2">
              {Object.entries(semanticColors.background).map(([key, color]) => (
                <div key={key} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {key}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Text</h3>
            <div className="space-y-2">
              {Object.entries(semanticColors.text).map(([key, color]) => (
                <div key={key} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {key}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Colors */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Border</h3>
            <div className="space-y-2">
              {Object.entries(semanticColors.border).map(([key, color]) => (
                <div key={key} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {key}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Colors */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Interactive</h3>
            <div className="space-y-2">
              {Object.entries(semanticColors.interactive).map(([key, color]) => (
                <div key={key} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {key}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Colors */}
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Status</h3>
            <div className="space-y-2">
              {Object.entries(semanticColors.status).map(([key, color]) => (
                <div key={key} className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-lg border border-[var(--color-border-default)] shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--color-text-primary)]">
                      {key}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {color}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

