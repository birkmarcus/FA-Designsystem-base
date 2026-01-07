/**
 * Responsive Typography Tokens
 * 
 * Typography tokens that adapt across different screen sizes.
 * These reference Primitives Typography and add responsive behavior.
 */

import { primitiveTypography } from '../primitives/typography';

/**
 * Typography Token Structure
 * Format: { element: { breakpoint: { size, weight, lineHeight, letterSpacing } } }
 */
export const responsiveTypography = {
  heading: {
    h1: {
      mobile: {
        fontSize: primitiveTypography.fontSize.xl,
        fontWeight: primitiveTypography.fontWeight.bold,
        lineHeight: primitiveTypography.lineHeight.tight,
        letterSpacing: primitiveTypography.letterSpacing.tight,
      },
      tablet: {
        fontSize: primitiveTypography.fontSize['2xl'],
        fontWeight: primitiveTypography.fontWeight.bold,
        lineHeight: primitiveTypography.lineHeight.tight,
        letterSpacing: primitiveTypography.letterSpacing.tight,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize['3xl'],
        fontWeight: primitiveTypography.fontWeight.bold,
        lineHeight: primitiveTypography.lineHeight.tight,
        letterSpacing: primitiveTypography.letterSpacing.tight,
      },
    },
    h2: {
      mobile: {
        fontSize: primitiveTypography.fontSize.lg,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.tight,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      tablet: {
        fontSize: primitiveTypography.fontSize.xl,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.tight,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize['2xl'],
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.tight,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
    },
    h3: {
      mobile: {
        fontSize: primitiveTypography.fontSize.base,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.snug,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      tablet: {
        fontSize: primitiveTypography.fontSize.lg,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.snug,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize.xl,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.snug,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
    },
    h4: {
      mobile: {
        fontSize: primitiveTypography.fontSize.sm,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      tablet: {
        fontSize: primitiveTypography.fontSize.base,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize.lg,
        fontWeight: primitiveTypography.fontWeight.semibold,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
    },
  },
  body: {
    large: {
      mobile: {
        fontSize: primitiveTypography.fontSize.base,
        fontWeight: primitiveTypography.fontWeight.regular,
        lineHeight: primitiveTypography.lineHeight.relaxed,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize.lg,
        fontWeight: primitiveTypography.fontWeight.regular,
        lineHeight: primitiveTypography.lineHeight.relaxed,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
    },
    base: {
      mobile: {
        fontSize: primitiveTypography.fontSize.sm,
        fontWeight: primitiveTypography.fontWeight.regular,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize.base,
        fontWeight: primitiveTypography.fontWeight.regular,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.normal,
      },
    },
    small: {
      mobile: {
        fontSize: primitiveTypography.fontSize.xs,
        fontWeight: primitiveTypography.fontWeight.regular,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.wide,
      },
      desktop: {
        fontSize: primitiveTypography.fontSize.sm,
        fontWeight: primitiveTypography.fontWeight.regular,
        lineHeight: primitiveTypography.lineHeight.normal,
        letterSpacing: primitiveTypography.letterSpacing.wide,
      },
    },
  },
  caption: {
    base: {
      fontSize: primitiveTypography.fontSize.xs,
      fontWeight: primitiveTypography.fontWeight.medium,
      lineHeight: primitiveTypography.lineHeight.normal,
      letterSpacing: primitiveTypography.letterSpacing.wide,
    },
  },
} as const;

export type ResponsiveTypographyToken = typeof responsiveTypography;

