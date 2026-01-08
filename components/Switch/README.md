# Switch Component

A toggle switch component with label and optional description. Supports checked, unchecked, hover, focus, and disabled states.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text displayed next to switch |
| `description` | `string` | `undefined` | Description text shown below label |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `InputHTMLAttributes` | - | All standard input HTML attributes |

## Usage

### Basic Usage

```tsx
import { Switch } from '@/components/Switch';

<Switch label="Enable notifications" />
```

### With Description

```tsx
<Switch 
  label="Dark mode"
  description="Switch between light and dark theme"
/>
```

### Controlled Component

```tsx
const [enabled, setEnabled] = useState(false);

<Switch 
  label="Enable feature"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

### Disabled State

```tsx
<Switch 
  label="Disabled switch"
  disabled={true}
/>
```

## Design Tokens Used

- `--color-interactive-primary` - Checked track background
- `--color-interactive-primaryHover` - Checked hover state background
- `--color-surface-unselected` - Unchecked track background
- `--color-surface-disabled` - Disabled track background
- `--color-background-surface` - Knob background (white)
- `--color-text-primary` - Label text color
- `--color-text-tertiary` - Description text color
- `--color-text-disabled` - Disabled text color
- `--color-icon-primary` - Check icon color (default)
- `--color-icon-disabled` - Disabled icon color
- `--color-border-focus` - Focus ring color

## Accessibility

- ✅ Keyboard navigation (Space to toggle)
- ✅ Focus states with visible ring
- ✅ Proper ARIA attributes (`role="switch"`)
- ✅ Screen reader friendly
- ✅ Semantic HTML (`<input type="checkbox" role="switch">`)

## States

- **Unchecked**: Light gray track with white knob on the left
- **Checked**: Blue track with white knob and check icon on the right
- **Hover**: Darker background color on checked state
- **Focus**: Blue focus ring around track
- **Disabled**: Grayed out appearance, non-interactive


