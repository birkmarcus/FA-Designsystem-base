# Checkbox Component

A checkbox input component with label and optional description, supporting checked, unchecked, and indeterminate states.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text displayed next to checkbox |
| `description` | `string` | `undefined` | Description text shown below label |
| `indeterminate` | `boolean` | `false` | Indeterminate state (shows minus icon) |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `InputHTMLAttributes` | - | All standard input HTML attributes |

## Usage

### Basic Usage

```tsx
import { Checkbox } from '@/components/Checkbox';

<Checkbox label="Accept terms" />
```

### With Description

```tsx
<Checkbox 
  label="Subscribe to newsletter"
  description="Receive weekly updates about new features"
/>
```

### Controlled Component

```tsx
const [checked, setChecked] = useState(false);

<Checkbox 
  label="Enable notifications"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```

### Indeterminate State

```tsx
<Checkbox 
  label="Select all"
  indeterminate={true}
/>
```

### Disabled State

```tsx
<Checkbox 
  label="Disabled option"
  disabled={true}
/>
```

## Design Tokens Used

- `--color-border-default` - Unchecked border color
- `--color-interactive-primary` - Checked background color
- `--color-interactive-primaryHover` - Hover state background
- `--color-surface-disabled` - Disabled background
- `--color-text-primary` - Label text color
- `--color-text-tertiary` - Description text color
- `--color-text-disabled` - Disabled text color
- `--color-icon-disabled` - Disabled icon color
- `--color-text-inverse` - Check icon color
- `--color-border-focus` - Focus ring color

## Accessibility

- ✅ Keyboard navigation (Space to toggle)
- ✅ Focus states with visible ring
- ✅ Proper ARIA attributes
- ✅ Screen reader friendly
- ✅ Semantic HTML (`<input type="checkbox">`)

