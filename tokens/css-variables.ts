/**
 * CSS Variables Generator
 * 
 * Converts design tokens to CSS custom properties.
 * This file generates CSS variables that can be used in Tailwind 4.
 */

import { primitiveColors } from './primitives/colors';
import { primitiveTypography } from './primitives/typography';
import { primitiveSpacing } from './primitives/spacing';
import { primitiveBorderRadius } from './primitives/border-radius';
import { primitiveShadows } from './primitives/shadows';
import { primitiveMotion } from './primitives/motion';
import { semanticColors } from './semantic/colors';
import { responsiveTypography } from './semantic/typography';
import { semanticSpacing } from './semantic/spacing';

/**
 * Flatten nested object to dot notation keys
 */
function flattenObject(obj: Record<string, any>, prefix = '', result: Record<string, string> = {}): Record<string, string> {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = String(value);
    }
  }
  return result;
}

/**
 * Generate CSS custom properties from tokens
 */
export function generateCSSVariables(): string {
  const variables: Record<string, string> = {};

  // Primitives Colors
  const colorVars = flattenObject(primitiveColors, 'color-primitive');
  Object.assign(variables, colorVars);

  // Semantic Colors
  const semanticColorVars = flattenObject(semanticColors, 'color');
  Object.assign(variables, semanticColorVars);

  // Primitives Typography
  const typographyVars: Record<string, string> = {};
  
  // Font families (join arrays)
  Object.entries(primitiveTypography.fontFamily).forEach(([key, value]) => {
    typographyVars[`font-family-${key}`] = Array.isArray(value) ? value.join(', ') : String(value);
  });
  
  // Font weights
  Object.entries(primitiveTypography.fontWeight).forEach(([key, value]) => {
    typographyVars[`font-weight-${key}`] = String(value);
  });
  
  // Font sizes
  Object.entries(primitiveTypography.fontSize).forEach(([key, value]) => {
    typographyVars[`font-size-${key}`] = String(value);
  });
  
  // Line heights
  Object.entries(primitiveTypography.lineHeight).forEach(([key, value]) => {
    typographyVars[`line-height-${key}`] = String(value);
  });
  
  // Letter spacing
  Object.entries(primitiveTypography.letterSpacing).forEach(([key, value]) => {
    typographyVars[`letter-spacing-${key}`] = String(value);
  });

  Object.assign(variables, flattenObject(typographyVars, 'typography-primitive'));

  // Primitives Spacing
  const spacingVars = flattenObject(primitiveSpacing, 'spacing-primitive');
  Object.assign(variables, spacingVars);

  // Semantic Spacing
  const semanticSpacingVars = flattenObject(semanticSpacing, 'spacing');
  Object.assign(variables, semanticSpacingVars);

  // Border Radius
  const radiusVars = flattenObject(primitiveBorderRadius, 'radius-primitive');
  Object.assign(variables, radiusVars);

  // Shadows
  const shadowVars = flattenObject(primitiveShadows, 'shadow-primitive');
  Object.assign(variables, shadowVars);

  // Motion
  const motionVars: Record<string, string> = {};
  Object.entries(primitiveMotion.duration).forEach(([key, value]) => {
    motionVars[`duration-${key}`] = String(value);
  });
  Object.entries(primitiveMotion.easing).forEach(([key, value]) => {
    motionVars[`easing-${key}`] = String(value);
  });
  Object.assign(variables, flattenObject(motionVars, 'motion-primitive'));

  // Generate CSS string
  const cssVars = Object.entries(variables)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');

  return `:root {\n${cssVars}\n}`;
}

/**
 * Generate responsive typography CSS classes
 */
export function generateResponsiveTypographyCSS(): string {
  const classes: string[] = [];

  // Generate classes for each heading level
  Object.entries(responsiveTypography.heading).forEach(([level, breakpoints]) => {
    Object.entries(breakpoints).forEach(([breakpoint, styles]) => {
      const selector = breakpoint === 'mobile' 
        ? `.text-${level}` 
        : `.${breakpoint}\\:text-${level}`;
      
      const css = `
${selector} {
  font-size: ${styles.fontSize};
  font-weight: ${styles.fontWeight};
  line-height: ${styles.lineHeight};
  letter-spacing: ${styles.letterSpacing};
}`;
      classes.push(css);
    });
  });

  // Generate classes for body text
  Object.entries(responsiveTypography.body).forEach(([size, breakpoints]) => {
    Object.entries(breakpoints).forEach(([breakpoint, styles]) => {
      const selector = breakpoint === 'mobile'
        ? `.text-body-${size}`
        : `.${breakpoint}\\:text-body-${size}`;
      
      const css = `
${selector} {
  font-size: ${styles.fontSize};
  font-weight: ${styles.fontWeight};
  line-height: ${styles.lineHeight};
  letter-spacing: ${styles.letterSpacing};
}`;
      classes.push(css);
    });
  });

  // Caption
  const caption = responsiveTypography.caption.base;
  classes.push(`
.text-caption {
  font-size: ${caption.fontSize};
  font-weight: ${caption.fontWeight};
  line-height: ${caption.lineHeight};
  letter-spacing: ${caption.letterSpacing};
}`);

  return classes.join('\n');
}

