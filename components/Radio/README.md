# Radio Component

A radio button input component with label and optional description. Radio buttons should be grouped using the same `name` attribute.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text displayed next to radio button |
| `description` | `string` | `undefined` | Description text shown below label |
| `name` | `string` | Required | Name attribute for grouping radio buttons |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `value` | `string` | `undefined` | Value attribute |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `InputHTMLAttributes` | - | All standard input HTML attributes |

## Usage

### Basic Usage

```tsx
import { Radio } from '@/components/Radio';

<Radio name="option" label="Option 1" />
<Radio name="option" label="Option 2" />
```

### With Description

```tsx
<Radio 
  name="plan"
  label="Basic Plan"
  description="Perfect for individuals"
/>
```

### Controlled Component

```tsx
const [selected, setSelected] = useState('option1');

<Radio 
  name="options"
  value="option1"
  label="Option 1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>
```

### Radio Group

```tsx
<div>
  <Radio name="size" value="small" label="Small" />
  <Radio name="size" value="medium" label="Medium" />
  <Radio name="size" value="large" label="Large" />
</div>
```

### Disabled State

```tsx
<Radio 
  name="option"
  label="Disabled option"
  disabled={true}
/>
```

## Design Tokens Used

- `--color-border-default` - Unchecked border color
- `--color-interactive-primary` - Checked border and dot color
- `--color-interactive-primaryHover` - Hover state border color
- `--color-surface-disabled` - Disabled dot color
- `--color-text-primary` - Label text color
- `--color-text-tertiary` - Description text color
- `--color-text-disabled` - Disabled text color
- `--color-border-focus` - Focus ring color

## Accessibility

- ✅ Keyboard navigation (Arrow keys to navigate group, Space to select)
- ✅ Focus states with visible ring
- ✅ Proper ARIA attributes
- ✅ Screen reader friendly
- ✅ Semantic HTML (`<input type="radio">`)
- ✅ Grouped by `name` attribute for proper behavior

