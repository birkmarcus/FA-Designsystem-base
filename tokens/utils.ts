/**
 * Token Utilities
 * 
 * Helper functions for working with design tokens.
 */

import { semanticColors } from './semantic/colors';
import { responsiveTypography } from './semantic/typography';

/**
 * Get a semantic color value
 */
export function getSemanticColor(
  category: keyof typeof semanticColors,
  key: string
): string {
  const categoryColors = semanticColors[category] as Record<string, string>;
  return categoryColors[key] || '';
}

/**
 * Get responsive typography styles for a specific breakpoint
 */
export function getTypographyStyles(
  element: 'h1' | 'h2' | 'h3' | 'h4',
  breakpoint: 'mobile' | 'tablet' | 'desktop' = 'mobile'
) {
  const heading = responsiveTypography.heading[element];
  return heading[breakpoint];
}

/**
 * Get body text styles for a specific breakpoint
 */
export function getBodyStyles(
  size: 'large' | 'base' | 'small',
  breakpoint: 'mobile' | 'desktop' = 'mobile'
) {
  const body = responsiveTypography.body[size];
  return body[breakpoint];
}

/**
 * Generate Tailwind classes for responsive typography
 */
export function getTypographyClasses(
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'body-large' | 'body-base' | 'body-small' | 'caption'
): string {
  const classMap: Record<string, string> = {
    h1: 'text-h1 tablet:text-h1 desktop:text-h1',
    h2: 'text-h2 tablet:text-h2 desktop:text-h2',
    h3: 'text-h3 tablet:text-h3 desktop:text-h3',
    h4: 'text-h4 tablet:text-h4 desktop:text-h4',
    'body-large': 'text-body-large desktop:text-body-large',
    'body-base': 'text-body-base desktop:text-body-base',
    'body-small': 'text-body-small desktop:text-body-small',
    caption: 'text-caption',
  };

  return classMap[element] || '';
}

