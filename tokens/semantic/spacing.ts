/**
 * Semantic Spacing Tokens
 * 
 * Context-specific spacing tokens that reference Primitives Spacing.
 */

import { primitiveSpacing } from '../primitives/spacing';

export const semanticSpacing = {
  padding: {
    xs: primitiveSpacing[1],   // 4px
    sm: primitiveSpacing[2],   // 8px
    md: primitiveSpacing[4],    // 16px
    lg: primitiveSpacing[6],   // 24px
    xl: primitiveSpacing[8],   // 32px
    '2xl': primitiveSpacing[12], // 48px
  },
  margin: {
    xs: primitiveSpacing[1],
    sm: primitiveSpacing[2],
    md: primitiveSpacing[4],
    lg: primitiveSpacing[6],
    xl: primitiveSpacing[8],
    '2xl': primitiveSpacing[12],
  },
  gap: {
    xs: primitiveSpacing[1],
    sm: primitiveSpacing[2],
    md: primitiveSpacing[4],
    lg: primitiveSpacing[6],
    xl: primitiveSpacing[8],
    '2xl': primitiveSpacing[12],
  },
} as const;

export type SemanticSpacingToken = typeof semanticSpacing;

