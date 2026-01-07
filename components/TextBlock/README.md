# TextBlock Component

A content block component with heading, subheading, body text, and CTA buttons. Reuses existing Button components.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text (shown at top) |
| `heading` | `string` | `undefined` | Main heading text |
| `subheading` | `string` | `undefined` | Subheading text |
| `body` | `string` | `undefined` | Body text content |
| `primaryCTA` | `React.ReactNode` | `undefined` | Primary call-to-action button |
| `secondaryCTA` | `React.ReactNode` | `undefined` | Secondary call-to-action button |
| `showLabel` | `boolean` | `true` | Whether to show label |
| `showHeading` | `boolean` | `true` | Whether to show heading |
| `showSubheading` | `boolean` | `true` | Whether to show subheading |
| `showBody` | `boolean` | `true` | Whether to show body text |
| `className` | `string` | `undefined` | Additional CSS classes |

## Usage

### Basic Usage

```tsx
import { TextBlock } from '@/components/TextBlock';
import { Button } from '@/components/Button';

<TextBlock
  label="Section Label"
  heading="Main Heading"
  subheading="Subheading Text"
  body="Body text content goes here."
  primaryCTA={<Button variant="primary">Primary Action</Button>}
  secondaryCTA={<Button variant="neutral">Secondary Action</Button>}
/>
```

### Minimal Content

```tsx
<TextBlock
  heading="Simple Heading"
  body="Just the essentials."
/>
```

### With Custom Buttons

```tsx
<TextBlock
  heading="Get Started"
  body="Start using our platform today."
  primaryCTA={
    <Button variant="primary" size="large">
      Sign Up
    </Button>
  }
/>
```

### Conditional Display

```tsx
<TextBlock
  label="Optional Label"
  heading="Main Content"
  showLabel={false} // Hide label
  showSubheading={false} // Hide subheading
/>
```

## Design Tokens Used

- `--color-text-primary` - Heading, subheading, and body text color
- `--color-text-tertiary` - Label text color
- Typography tokens for font sizes and weights

## Structure

The component renders content in the following order:
1. Label (if provided and `showLabel={true}`)
2. Heading (if provided and `showHeading={true}`)
3. Subheading (if provided and `showSubheading={true}`)
4. Body text (if provided and `showBody={true}`)
5. CTA buttons (if provided)

## Accessibility

- ✅ Semantic HTML structure (`<h2>`, `<h3>`, `<p>`)
- ✅ Proper heading hierarchy
- ✅ Screen reader friendly
- ✅ Buttons maintain their own accessibility features

