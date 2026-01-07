/**
 * Primitives Motion
 * 
 * Base motion/animation values.
 */

export const primitiveMotion = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export type PrimitiveDuration = typeof primitiveMotion.duration[keyof typeof primitiveMotion.duration];
export type PrimitiveEasing = typeof primitiveMotion.easing[keyof typeof primitiveMotion.easing];

