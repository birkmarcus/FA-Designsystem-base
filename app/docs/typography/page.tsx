import { responsiveTypography } from '@/tokens/semantic/typography';
import { primitiveTypography } from '@/tokens/primitives/typography';

// Helper function to convert rem to px
const remToPx = (rem: string): number => {
  const num = parseFloat(rem);
  return Math.round(num * 16);
};

// Helper function to format font weight
const formatFontWeight = (weight: number): string => {
  const weightMap: Record<number, string> = {
    300: 'Light',
    400: 'Regular',
    500: 'Medium',
    600: 'Semibold',
    700: 'Bold',
  };
  return weightMap[weight] || weight.toString();
};

export default function TypographyPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Typography
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        Responsive typography system with styles for mobile, tablet, and desktop breakpoints.
      </p>

      {/* Font Families */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Font Families
        </h2>
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                Primary
              </h3>
              <p className="text-base text-[var(--color-text-secondary)] font-mono">
                {primitiveTypography.fontFamily.primary.join(', ')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                Secondary
              </h3>
              <p className="text-base text-[var(--color-text-secondary)] font-mono">
                {primitiveTypography.fontFamily.secondary.join(', ')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
                Monospace
              </h3>
              <p className="text-base text-[var(--color-text-secondary)] font-mono">
                {primitiveTypography.fontFamily.mono.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Headings */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Headings
        </h2>
        <div className="space-y-8">
          {Object.entries(responsiveTypography.heading).map(([level, styles]) => {
            const levelUpper = level.toUpperCase();
            return (
              <div key={level} className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6">
                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-4">
                  {levelUpper}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Mobile */}
                  {'mobile' in styles && (
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                        Mobile
                      </div>
                      <div
                        style={{
                          fontSize: styles.mobile.fontSize,
                          fontWeight: styles.mobile.fontWeight,
                          lineHeight: styles.mobile.lineHeight,
                          letterSpacing: styles.mobile.letterSpacing,
                        }}
                        className="text-[var(--color-text-primary)] mb-4"
                      >
                        {levelUpper} Heading
                      </div>
                      <div className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
                        <div>Size: {styles.mobile.fontSize} ({remToPx(styles.mobile.fontSize)}px)</div>
                        <div>Weight: {formatFontWeight(styles.mobile.fontWeight)} ({styles.mobile.fontWeight})</div>
                        <div>Line Height: {styles.mobile.lineHeight}</div>
                        <div>Letter Spacing: {styles.mobile.letterSpacing}</div>
                      </div>
                    </div>
                  )}

                  {/* Tablet */}
                  {'tablet' in styles && (
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                        Tablet
                      </div>
                      <div
                        style={{
                          fontSize: styles.tablet.fontSize,
                          fontWeight: styles.tablet.fontWeight,
                          lineHeight: styles.tablet.lineHeight,
                          letterSpacing: styles.tablet.letterSpacing,
                        }}
                        className="text-[var(--color-text-primary)] mb-4"
                      >
                        {levelUpper} Heading
                      </div>
                      <div className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
                        <div>Size: {styles.tablet.fontSize} ({remToPx(styles.tablet.fontSize)}px)</div>
                        <div>Weight: {formatFontWeight(styles.tablet.fontWeight)} ({styles.tablet.fontWeight})</div>
                        <div>Line Height: {styles.tablet.lineHeight}</div>
                        <div>Letter Spacing: {styles.tablet.letterSpacing}</div>
                      </div>
                    </div>
                  )}

                  {/* Desktop */}
                  {'desktop' in styles && (
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                        Desktop
                      </div>
                      <div
                        style={{
                          fontSize: styles.desktop.fontSize,
                          fontWeight: styles.desktop.fontWeight,
                          lineHeight: styles.desktop.lineHeight,
                          letterSpacing: styles.desktop.letterSpacing,
                        }}
                        className="text-[var(--color-text-primary)] mb-4"
                      >
                        {levelUpper} Heading
                      </div>
                      <div className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
                        <div>Size: {styles.desktop.fontSize} ({remToPx(styles.desktop.fontSize)}px)</div>
                        <div>Weight: {formatFontWeight(styles.desktop.fontWeight)} ({styles.desktop.fontWeight})</div>
                        <div>Line Height: {styles.desktop.lineHeight}</div>
                        <div>Letter Spacing: {styles.desktop.letterSpacing}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Body Text */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Body Text
        </h2>
        <div className="space-y-8">
          {Object.entries(responsiveTypography.body).map(([size, styles]) => {
            const sizeLabel = size.charAt(0).toUpperCase() + size.slice(1);
            return (
              <div key={size} className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6">
                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-4">
                  Body {sizeLabel}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mobile */}
                  {'mobile' in styles && (
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                        Mobile
                      </div>
                      <div
                        style={{
                          fontSize: styles.mobile.fontSize,
                          fontWeight: styles.mobile.fontWeight,
                          lineHeight: styles.mobile.lineHeight,
                          letterSpacing: styles.mobile.letterSpacing,
                        }}
                        className="text-[var(--color-text-primary)] mb-4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                      <div className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
                        <div>Size: {styles.mobile.fontSize} ({remToPx(styles.mobile.fontSize)}px)</div>
                        <div>Weight: {formatFontWeight(styles.mobile.fontWeight)} ({styles.mobile.fontWeight})</div>
                        <div>Line Height: {styles.mobile.lineHeight}</div>
                        <div>Letter Spacing: {styles.mobile.letterSpacing}</div>
                      </div>
                    </div>
                  )}

                  {/* Desktop */}
                  {'desktop' in styles && (
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                        Desktop
                      </div>
                      <div
                        style={{
                          fontSize: styles.desktop.fontSize,
                          fontWeight: styles.desktop.fontWeight,
                          lineHeight: styles.desktop.lineHeight,
                          letterSpacing: styles.desktop.letterSpacing,
                        }}
                        className="text-[var(--color-text-primary)] mb-4"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                      <div className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
                        <div>Size: {styles.desktop.fontSize} ({remToPx(styles.desktop.fontSize)}px)</div>
                        <div>Weight: {formatFontWeight(styles.desktop.fontWeight)} ({styles.desktop.fontWeight})</div>
                        <div>Line Height: {styles.desktop.lineHeight}</div>
                        <div>Letter Spacing: {styles.desktop.letterSpacing}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Caption */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Caption
        </h2>
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6">
          <div>
            <div
              style={{
                fontSize: responsiveTypography.caption.base.fontSize,
                fontWeight: responsiveTypography.caption.base.fontWeight,
                lineHeight: responsiveTypography.caption.base.lineHeight,
                letterSpacing: responsiveTypography.caption.base.letterSpacing,
              }}
              className="text-[var(--color-text-primary)] mb-4"
            >
              Caption text for labels, metadata, and supplementary information.
            </div>
            <div className="space-y-1 text-xs text-[var(--color-text-secondary)] font-mono">
              <div>Size: {responsiveTypography.caption.base.fontSize} ({remToPx(responsiveTypography.caption.base.fontSize)}px)</div>
              <div>Weight: {formatFontWeight(responsiveTypography.caption.base.fontWeight)} ({responsiveTypography.caption.base.fontWeight})</div>
              <div>Line Height: {responsiveTypography.caption.base.lineHeight}</div>
              <div>Letter Spacing: {responsiveTypography.caption.base.letterSpacing}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Font Weights Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Font Weights
        </h2>
        <div className="bg-[var(--color-background-surface)] border border-[var(--color-border-default)] rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(primitiveTypography.fontWeight).map(([name, weight]) => (
              <div key={name} className="text-center">
                <div
                  style={{ fontWeight: weight }}
                  className="text-2xl text-[var(--color-text-primary)] mb-2"
                >
                  Aa
                </div>
                <div className="text-sm font-medium text-[var(--color-text-primary)]">
                  {formatFontWeight(weight)}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] font-mono">
                  {weight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

