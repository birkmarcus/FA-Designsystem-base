# Design Tokens Setup - Complete

## Overview

Design tokens have been successfully set up for the FA Design System, following the hierarchical structure documented in `DESIGN_TOKEN_STRUCTURE.md`. The system is fully integrated with Tailwind CSS 4 and ready for component development.

## Structure Created

```
tokens/
├── primitives/              # Foundation tokens
│   ├── colors.ts           # Color primitives (primary, secondary, neutral, etc.)
│   ├── typography.ts       # Typography primitives (fonts, sizes, weights, etc.)
│   ├── spacing.ts          # Spacing scale primitives
│   ├── border-radius.ts    # Border radius primitives
│   ├── shadows.ts          # Shadow/elevation primitives
│   ├── motion.ts           # Animation/motion primitives
│   └── index.ts            # Exports all primitives
│
├── semantic/               # Semantic tokens (reference primitives)
│   ├── colors.ts           # Semantic colors → references Primitives Colors
│   ├── typography.ts       # Responsive typography → references Primitives Typography
│   ├── spacing.ts          # Semantic spacing → references Primitives Spacing
│   └── index.ts            # Exports all semantic tokens
│
├── css-variables.ts        # CSS variable generator
├── generate-css.ts         # CSS generation script
├── utils.ts                # Helper functions for using tokens
├── index.ts                # Main export point
└── README.md               # Token documentation
```

## Key Connection Points Implemented

### ✅ Primitives Colors → Color Tokens

**Connection**: Semantic color tokens directly reference primitive color values.

**Example**:
```typescript
// Primitives Colors
primary: { 500: '#3b82f6' }

// Semantic Colors (references primitives)
background: {
  primary: primitiveColors.primary[500]  // → #3b82f6
}
```

**Benefits**:
- Single source of truth for colors
- Changes to primitives automatically propagate
- Easy theme switching

### ✅ Primitives Typography → Responsive Typography

**Connection**: Responsive typography tokens reference multiple primitive values and add breakpoint behavior.

**Example**:
```typescript
// Primitives Typography
fontSize: { xl: '1.25rem' }
fontWeight: { bold: 700 }

// Responsive Typography (references primitives)
heading: {
  h1: {
    mobile: {
      fontSize: primitiveTypography.fontSize.xl,      // → 1.25rem
      fontWeight: primitiveTypography.fontWeight.bold   // → 700
    }
  }
}
```

**Benefits**:
- Consistent typography foundation
- Responsive behavior without duplication
- Scalable across devices

## Integration with Tailwind CSS 4

### CSS Variables Generated

All tokens are automatically converted to CSS custom properties in `app/tokens.css`:

```css
:root {
  --color-primitive-primary-500: #3b82f6;
  --color-background-primary: #3b82f6;
  --typography-primitive-font-size-xl: 1.25rem;
  /* ... and many more */
}
```

### Tailwind Configuration

Tokens are mapped to Tailwind utilities in `tailwind.config.ts`:

- **Colors**: `bg-primary-500`, `text-text-primary`, `bg-bg-primary`
- **Typography**: `font-primary`, `text-xl`, `text-h1`
- **Spacing**: `p-4`, `m-6`, `gap-8`
- **Shadows**: `shadow-md`, `shadow-lg`
- **Border Radius**: `rounded-lg`, `rounded-full`
- **Motion**: `duration-fast`, `ease-in-out`

## Usage Examples

### In React Components

```tsx
// Using Tailwind classes (recommended)
<div className="bg-bg-primary text-text-primary p-4">
  <h1 className="text-h1 tablet:text-h1 desktop:text-h1">
    Heading
  </h1>
</div>

// Using TypeScript tokens
import { semanticColors } from '@/tokens';
const bgColor = semanticColors.background.primary;
```

### Responsive Typography

```tsx
// Responsive heading
<h1 className="text-h1 tablet:text-h1 desktop:text-h1">
  Responsive Heading
</h1>

// Responsive body text
<p className="text-body-base desktop:text-body-large">
  Responsive body text
</p>
```

## Commands

### Generate CSS from Tokens

After modifying tokens, regenerate the CSS:

```bash
npm run tokens:generate
```

This updates `app/tokens.css` with the latest token values.

## Next Steps

1. ✅ Design tokens structure created
2. ✅ Primitives → Semantic connections implemented
3. ✅ Tailwind CSS 4 integration complete
4. ⏳ Ready for component development
5. ⏳ Import components from Figma (next phase)

## Files Modified/Created

### Created
- `tokens/` - Complete token system
- `app/tokens.css` - Generated CSS variables
- `tokens/README.md` - Token documentation

### Modified
- `tailwind.config.ts` - Configured to use design tokens
- `app/globals.css` - Imports token CSS
- `package.json` - Added `tokens:generate` script

## Token Naming Conventions

### Primitives
- Colors: `{color}-{shade}` (e.g., `primary-500`)
- Typography: `{property}-{value}` (e.g., `fontSize-base`)

### Semantic
- Colors: `{category}-{element}` (e.g., `background-primary`)
- Typography: `{element}-{breakpoint}` (e.g., `heading-1-mobile`)

## Type Safety

All tokens are fully typed with TypeScript:

```typescript
import type { SemanticColorToken } from '@/tokens/semantic/colors';
import type { ResponsiveTypographyToken } from '@/tokens/semantic/typography';
```

## Notes

- Tokens follow the exact structure documented in `DESIGN_TOKEN_STRUCTURE.md`
- Connection points mirror Figma variable relationships
- CSS generation is automatic via `npm run tokens:generate`
- All tokens are available as Tailwind utilities
- Type-safe token access via TypeScript

---

*Design tokens are ready for component development!*

