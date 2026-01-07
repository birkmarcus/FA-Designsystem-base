# Design Tokens

This directory contains the design token system for the FA Design System.

## Structure

```
tokens/
├── primitives/          # Foundation tokens (raw values)
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── border-radius.ts
│   ├── shadows.ts
│   └── motion.ts
├── semantic/           # Semantic tokens (reference primitives)
│   ├── colors.ts       # References Primitives Colors
│   ├── typography.ts   # References Primitives Typography
│   └── spacing.ts      # References Primitives Spacing
├── css-variables.ts    # CSS variable generator
├── generate-css.ts     # CSS generation script
└── index.ts            # Main export
```

## Token Hierarchy

```
Primitives (Foundation)
    ↓
Semantic Tokens (Context-Specific)
    ↓
CSS Variables (Used in Tailwind)
```

## Connection Points

### Primitives Colors → Color Tokens

- **Primitives Colors** define raw color values (e.g., `primary-500`)
- **Color Tokens** reference primitives to assign semantic meaning (e.g., `background-primary` → `primary-500`)

### Primitives Typography → Responsive Typography

- **Primitives Typography** define base typographic values (font sizes, weights, etc.)
- **Responsive Typography** reference primitives and add breakpoint-specific behavior

## Usage

### Generating CSS

After modifying tokens, regenerate the CSS:

```bash
npm run tokens:generate
```

This creates `app/tokens.css` with all CSS custom properties.

### Using in TypeScript/React

```typescript
import { semanticColors, responsiveTypography } from '@/tokens';

// Access semantic colors
const primaryBg = semanticColors.background.primary;

// Access responsive typography
const h1Mobile = responsiveTypography.heading.h1.mobile;
```

### Using in Tailwind Classes

Tokens are automatically available as Tailwind utilities:

```tsx
// Primitives Colors
<div className="bg-primary-500 text-neutral-900" />

// Semantic Colors
<div className="bg-bg-primary text-text-primary" />

// Typography
<h1 className="text-h1 font-primary" />
```

### Responsive Typography

Use the generated CSS classes:

```tsx
<h1 className="text-h1 tablet:text-h1 desktop:text-h1" />
<p className="text-body-base desktop:text-body-large" />
```

## Token Naming Conventions

### Colors
- Primitives: `{color}-{shade}` (e.g., `primary-500`)
- Semantic: `{category}-{element}` (e.g., `background-primary`)

### Typography
- Primitives: `{property}-{value}` (e.g., `fontSize-base`)
- Responsive: `{element}-{breakpoint}` (e.g., `heading-1-mobile`)

## Best Practices

1. **Always reference primitives** - Never duplicate values in semantic tokens
2. **Use semantic tokens in components** - Don't use primitives directly
3. **Regenerate CSS after changes** - Run `npm run tokens:generate`
4. **Keep tokens type-safe** - Use TypeScript types exported from tokens

## Updating Tokens

1. Edit token files in `tokens/primitives/` or `tokens/semantic/`
2. Run `npm run tokens:generate`
3. Tokens will be available in Tailwind automatically

