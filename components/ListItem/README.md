# ListItem Component

A list item component for navigation and dropdowns with icon support, chevron indicator, notification badges, nested dropdown items, and multiselect/single select variants.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text |
| `icon` | `React.ReactNode` | `undefined` | Icon element (left side) |
| `chevron` | `boolean` | `false` | Whether to show chevron indicator |
| `open` | `boolean` | `false` | Whether the dropdown is open (affects chevron direction) |
| `notification` | `string \| number` | `undefined` | Notification badge content |
| `iconOnly` | `boolean` | `false` | Icon-only mode (no label) |
| `children` | `React.ReactNode` | `undefined` | Dropdown sub-items (shown when open) |
| `selectMode` | `'none' \| 'multiselect' \| 'single'` | `'none'` | Select mode: none, multiselect (checkbox), or single (radio) |
| `checked` | `boolean` | `false` | Checked state for select variants |
| `indeterminate` | `boolean` | `false` | Indeterminate state for multiselect |
| `name` | `string` | `undefined` | Name attribute for radio buttons (required for single select) |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | onChange handler for select variants |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Usage

### Basic List Item

```tsx
import { ListItem } from '@/components/ListItem';

<ListItem label="Menu Item" />
```

### With Icon

```tsx
<ListItem 
  label="Dashboard"
  icon={<DashboardIcon />}
/>
```

### With Dropdown

```tsx
const [open, setOpen] = useState(false);

<ListItem
  label="Settings"
  icon={<SettingsIcon />}
  chevron={true}
  open={open}
  onClick={() => setOpen(!open)}
>
  <DropdownItem label="Profile" />
  <DropdownItem label="Preferences" />
</ListItem>
```

### With Notification Badge

```tsx
<ListItem 
  label="Messages"
  icon={<MessageIcon />}
  notification={5}
/>
```

### Multiselect Variant

```tsx
const [checked, setChecked] = useState(false);

<ListItem
  label="Option 1"
  selectMode="multiselect"
  checked={checked}
  onCheckedChange={setChecked}
/>
```

### Single Select Variant

```tsx
const [selected, setSelected] = useState(false);

<ListItem
  label="Option 1"
  selectMode="single"
  name="options"
  checked={selected}
  onCheckedChange={setSelected}
/>
```

### Icon-Only Mode

```tsx
<ListItem
  icon={<HomeIcon />}
  iconOnly={true}
  aria-label="Home"
/>
```

## Design Tokens Used

- `--color-background-surfaceTertiary` - Hover background
- `--color-border-focus` - Focus border color
- `--color-text-primary` - Label text color
- `--color-text-tertiary` - Chevron color
- `--color-icon-primary` - Icon color
- `--color-interactive-primary` - Notification badge background

## Accessibility

- ✅ Keyboard navigation support
- ✅ Focus states with visible border
- ✅ Proper ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-label`, `aria-checked`)
- ✅ Role attributes for select variants (`role="checkbox"` or `role="radio"`)
- ✅ Semantic HTML (`<button>` element)
- ✅ Screen reader friendly

## Related Components

- `DropdownItem` - Sub-items for nested dropdowns

