/**
 * Semantic Color Tokens
 * 
 * Context-specific color tokens that reference Primitives Colors.
 * These tokens assign semantic meaning to primitive color values.
 */

import { primitiveColors } from '../primitives/colors';

/**
 * Background Color Tokens
 * Reference: Primitives Colors
 */
export const semanticColors = {
  background: {
    primary: primitiveColors.primary[500],
    secondary: primitiveColors.secondary[500],
    neutral: primitiveColors.neutral[100],
    surface: primitiveColors.neutral[50],
    surfaceElevated: primitiveColors.neutral[50], // Same as surface, elevated via shadow
    surfaceTertiary: primitiveColors.neutral[100], // Surface/tertiary for hover states
    inverse: primitiveColors.neutral[900],
  },
  text: {
    primary: '#000020', // Text primary from Figma
    secondary: primitiveColors.neutral[600],
    tertiary: '#76767b', // Text tertiary from Figma
    disabled: '#9d9da1', // Text disabled from Figma
    inverse: primitiveColors.neutral[50],
    link: primitiveColors.primary[600],
    linkHover: primitiveColors.primary[700],
  },
  border: {
    default: primitiveColors.neutral[200],
    subtle: primitiveColors.neutral[100],
    focus: '#004dff', // Border/focused from Figma
    selected: '#ccccec', // Border color when group field is selected (unselected state)
    error: primitiveColors.error[500],
    success: primitiveColors.success[500],
  },
  interactive: {
    primary: '#4d4dbb', // Button/Default/default from Figma
    primaryHover: '#00009e', // Button/Default/hover from Figma
    primaryActive: '#000020', // Button/Default/active from Figma
    secondary: primitiveColors.secondary[600],
    secondaryHover: primitiveColors.secondary[700],
    secondaryActive: primitiveColors.secondary[800],
    neutralHover: 'rgba(12,12,13,0.05)', // Button/Neutral/hover from Figma
    neutralActive: 'rgba(12,12,13,0.1)', // Button/Neutral/pressed from Figma
    disabled: '#ebebec', // Surface/disabled from Figma
  },
  surface: {
    disabled: '#ebebec', // Surface/disabled from Figma
    unselected: '#f6f6fc', // Switch unselected background / button/subtle/default
    iconWrapperHover: '#e5e5f5', // button/subtle/hover from Figma (icon wrapper background when selected)
  },
  icon: {
    primary: '#000020', // Icon/primary from Figma
    disabled: '#9d9da1', // Icon/disabled from Figma
  },
  overlay: {
    backdrop: 'rgba(0, 0, 0, 0.5)', // Modal/backdrop overlay (50% black)
    backdropSubtle: 'rgba(0, 0, 0, 0.48)', // Subtle backdrop overlay (48% black)
  },
  status: {
    success: primitiveColors.success[500],
    successBackground: primitiveColors.success[50],
    warning: primitiveColors.warning[500],
    warningBackground: primitiveColors.warning[50],
    error: primitiveColors.error[500],
    errorBackground: primitiveColors.error[50],
    info: primitiveColors.primary[500],
    infoBackground: primitiveColors.primary[50],
  },
} as const;

export type SemanticColorToken = typeof semanticColors;

