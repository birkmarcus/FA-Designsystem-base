# IconButton Component

An icon-only button component with three variants (primary, neutral, subtle) and two sizes (medium, small).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` | Button variant style |
| `size` | `'medium' \| 'small'` | `'medium'` | Button size |
| `children` | `React.ReactNode` | Required | Icon element |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Usage

### Basic Usage

```tsx
import { IconButton } from '@/components/IconButton';

<IconButton>
  <PlusIcon />
</IconButton>
```

### Variants

```tsx
<IconButton variant="primary">
  <EditIcon />
</IconButton>

<IconButton variant="neutral">
  <DeleteIcon />
</IconButton>

<IconButton variant="subtle">
  <MoreIcon />
</IconButton>
```

### Sizes

```tsx
<IconButton size="medium">
  <Icon />
</IconButton>

<IconButton size="small">
  <Icon />
</IconButton>
```

### With Event Handlers

```tsx
<IconButton 
  variant="primary"
  onClick={() => console.log('Clicked!')}
  aria-label="Add item"
>
  <PlusIcon />
</IconButton>
```

## Design Tokens Used

- `--color-interactive-primary` - Primary variant background
- `--color-interactive-primaryHover` - Primary hover state
- `--color-interactive-primaryActive` - Primary active state
- `--color-background-surface` - Neutral variant background
- `--color-text-primary` - Neutral variant text color
- `--color-border-default` - Neutral variant border
- `--color-background-surfaceTertiary` - Neutral hover state
- `--color-text-inverse` - Primary variant icon color
- `--color-border-focus` - Focus ring color
- `--color-surface-disabled` - Disabled background
- `--color-text-disabled` - Disabled text color

## Accessibility

- ✅ Keyboard navigation support
- ✅ Focus states with visible ring
- ✅ Disabled state properly handled
- ✅ Semantic HTML (`<button>` element)
- ⚠️ **Important**: Always provide `aria-label` for icon-only buttons

## Variant Details

### Primary
- Solid colored background with white icon
- Used for primary actions
- High contrast for visibility

### Neutral
- White/light background with border
- Used for secondary actions
- Lower visual weight than primary

### Subtle
- Transparent background with colored icon
- Used for tertiary actions
- Minimal visual impact


