# NavigationButton Component

A button component for navigation menus that toggles between hamburger menu icon (closed) and close/X icon (opened).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `opened` | `boolean` | `false` | Whether the navigation menu is opened |
| `disabled` | `boolean` | `false` | Disabled state |
| `aria-label` | `string` | Required | Accessible label for screen readers |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Usage

### Basic Usage

```tsx
import { NavigationButton } from '@/components/NavigationButton';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<NavigationButton
  opened={isOpen}
  onClick={() => setIsOpen(!isOpen)}
  aria-label={isOpen ? 'Close menu' : 'Open menu'}
/>
```

### Controlled Component

```tsx
const [menuOpen, setMenuOpen] = useState(false);

<NavigationButton
  opened={menuOpen}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
  aria-expanded={menuOpen}
/>
```

### Disabled State

```tsx
<NavigationButton
  opened={false}
  disabled={true}
  aria-label="Navigation menu"
/>
```

## Design Tokens Used

- `--color-surface-unselected` - Hover and focus background
- `--color-border-focus` - Focus ring color
- `--color-icon-primary` - Icon color
- `--color-text-disabled` - Disabled opacity

## Accessibility

- ✅ Keyboard navigation support
- ✅ Focus states with visible ring
- ✅ Proper ARIA attributes (`aria-label`, `aria-expanded`)
- ✅ Semantic HTML (`<button>` element)
- ✅ Screen reader friendly

## Icon States

- **Closed**: Shows hamburger icon (3 horizontal lines)
- **Opened**: Shows close/X icon (cross)
- **Hover**: Light background highlight
- **Focus**: Blue focus ring
- **Disabled**: Reduced opacity, non-interactive

