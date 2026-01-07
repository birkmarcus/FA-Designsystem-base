/**
 * Primitives Typography
 * 
 * Base typographic properties without responsive considerations.
 * These serve as the foundation for all typography tokens.
 */

export const primitiveTypography = {
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'],
    secondary: ['Roboto', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  lineHeight: {
    none: 1,
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export type PrimitiveFontFamily = typeof primitiveTypography.fontFamily[keyof typeof primitiveTypography.fontFamily];
export type PrimitiveFontWeight = typeof primitiveTypography.fontWeight[keyof typeof primitiveTypography.fontWeight];
export type PrimitiveFontSize = typeof primitiveTypography.fontSize[keyof typeof primitiveTypography.fontSize];
export type PrimitiveLineHeight = typeof primitiveTypography.lineHeight[keyof typeof primitiveTypography.lineHeight];
export type PrimitiveLetterSpacing = typeof primitiveTypography.letterSpacing[keyof typeof primitiveTypography.letterSpacing];

