# Button Component

A versatile button component built with design tokens, supporting multiple variants, sizes, and states.

## Features

- ✅ Three variants: Primary, Neutral, Subtle
- ✅ Two sizes: Medium (44px), Small (36px)
- ✅ All interactive states: Default, Hover, Focused, Pressed, Disabled
- ✅ Icon support (left and right)
- ✅ Fully accessible with keyboard navigation
- ✅ Uses design tokens for consistent styling

## Usage

### Basic Usage

```tsx
import { Button } from '@/components/Button';

<Button>Click Me</Button>
```

### Variants

```tsx
<Button variant="primary">Primary Button</Button>
<Button variant="neutral">Neutral Button</Button>
<Button variant="subtle">Subtle Button</Button>
```

### Sizes

```tsx
<Button size="medium">Medium Button</Button>
<Button size="small">Small Button</Button>
```

### With Icons

```tsx
<Button
  leftIcon={<Icon />}
  rightIcon={<Icon />}
>
  Button with Icons
</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### Full Example

```tsx
<Button
  variant="primary"
  size="medium"
  leftIcon={<PlusIcon />}
  onClick={() => console.log('Clicked!')}
>
  Add Item
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` | Button variant style |
| `size` | `'medium' \| 'small'` | `'medium'` | Button size |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon displayed on the left |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon displayed on the right |
| `children` | `React.ReactNode` | Required | Button label/content |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Design Tokens Used

### Colors
- `--color-interactive-primary` - Primary button background
- `--color-interactive-primaryHover` - Primary button hover state
- `--color-interactive-primaryActive` - Primary button active/pressed state
- `--color-text-inverse` - Text color on primary buttons
- `--color-background-surface` - Neutral button background
- `--color-text-primary` - Text color on neutral/subtle buttons
- `--color-border-default` - Border color for neutral buttons
- `--color-border-focus` - Focus ring color
- `--color-interactive-disabled` - Disabled button background
- `--color-text-disabled` - Disabled text color

### Typography
- `font-primary` - Font family (Inter)
- `font-medium` - Font weight (500)
- `text-base` - Medium size font (16px)
- `text-sm` - Small size font (14px)

### Spacing
- `px-4` - Horizontal padding (16px)
- `gap-2` - Gap between icon and text (8px)
- `h-11` - Medium button height (44px)
- `h-9` - Small button height (36px)

### Border Radius
- `rounded-lg` - Border radius (8px)

### Motion
- `duration-fast` - Transition duration (150ms)
- `ease-out` - Easing function

## Variant Details

### Primary
- Solid background with inverse text color
- Used for primary actions
- High contrast for visibility

### Neutral
- White/light background with border
- Used for secondary actions
- Lower visual weight than primary

### Subtle
- Transparent background with colored text
- Used for tertiary actions
- Minimal visual impact

## Accessibility

- ✅ Keyboard navigation support
- ✅ Focus states with visible ring
- ✅ Disabled state properly handled
- ✅ Semantic HTML (`<button>` element)
- ✅ ARIA attributes can be added via props

## Examples

See `app/page.tsx` for a complete showcase of all button variants, sizes, and states.

