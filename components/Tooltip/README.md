# Tooltip Component

A flexible tooltip component that can be positioned around any trigger element. Supports both controlled and uncontrolled modes, and can display heading and description content.

## Components

### Tooltip

The base tooltip component that wraps any trigger element.

### QuestionCircleIcon

A question mark icon in a circle, commonly used as a tooltip trigger.

### TooltipBodyCopy

A specialized tooltip variant designed for inline use within body copy. Displays text with an inline question mark icon that triggers the tooltip.

### TooltipModal

A tooltip variant that opens a modal dialog instead of a tooltip popup. Uses a question circle icon as the trigger. Clicking the icon opens a modal with the provided heading and content. Ideal for displaying longer, more detailed information.

## Props

### Tooltip Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `React.ReactNode` | - | Tooltip content - can be a string or React node |
| `heading` | `string` | - | Optional heading text (shown above description) |
| `description` | `string` | - | Optional description text (shown below heading) |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the tooltip relative to trigger |
| `open` | `boolean` | - | Whether tooltip is open (controlled) |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes (for controlled usage) |
| `delay` | `number` | `0` | Delay before showing tooltip (in milliseconds) |
| `closeOnClickOutside` | `boolean` | `true` | Whether tooltip should close on click outside |
| `className` | `string` | - | Additional CSS classes for tooltip content |
| `triggerClassName` | `string` | - | Additional CSS classes for trigger wrapper |
| `children` | `React.ReactElement` | Required | Children element that triggers the tooltip |
| `disabled` | `boolean` | `false` | Whether tooltip is disabled |

### QuestionCircleIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the icon |
| `className` | `string` | - | Additional CSS classes |

### TooltipBodyCopy Props

Extends `TooltipProps` (excluding `children`) with:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | Required | Text content that will have the tooltip trigger inline |
| `iconSize` | `'small' \| 'medium' \| 'large'` | `'small'` | Size of the question circle icon |
| `textClassName` | `string` | - | Additional CSS classes for the text wrapper |

### TooltipModal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | - | Modal heading |
| `content` | `React.ReactNode` | Required | Modal content - can be a string or React node |
| `iconSize` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the question circle icon |
| `open` | `boolean` | - | Whether modal is open (controlled) |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes (for controlled usage) |
| `triggerClassName` | `string` | - | Additional CSS classes for trigger button |
| `modalClassName` | `string` | - | Additional CSS classes for modal container |
| `disabled` | `boolean` | `false` | Whether modal is disabled |

## Usage

### Basic Tooltip

```tsx
import { Tooltip, QuestionCircleIcon } from '@/components/Tooltip';

<Tooltip
  heading="Help"
  description="This is helpful information"
  position="top"
>
  <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
</Tooltip>
```

### Tooltip with Custom Content

```tsx
<Tooltip
  content={
    <div className="text-white">
      <p className="font-medium text-base leading-5">Custom Heading</p>
      <p className="font-normal text-sm leading-4 mt-0">
        This is custom tooltip content.
      </p>
    </div>
  }
  position="bottom"
>
  <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
</Tooltip>
```

### Tooltip with Button Trigger

```tsx
import { Tooltip } from '@/components/Tooltip';
import { Button } from '@/components/Button';

<Tooltip
  heading="Action"
  description="Click to perform action"
  position="top"
>
  <Button variant="primary">Hover Me</Button>
</Tooltip>
```

### Body Copy Tooltip

```tsx
import { TooltipBodyCopy } from '@/components/Tooltip';

<p>
  This is text with a{' '}
  <TooltipBodyCopy
    text="tooltip"
    heading="Information"
    description="Additional details here"
    position="top"
  />
  {' '}inline.
</p>
```

### Controlled Tooltip

```tsx
const [open, setOpen] = useState(false);

<Tooltip
  heading="Controlled Tooltip"
  description="This tooltip is controlled programmatically"
  position="top"
  open={open}
  onOpenChange={setOpen}
>
  <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
</Tooltip>

<Button onClick={() => setOpen(!open)}>
  {open ? 'Hide' : 'Show'} Tooltip
</Button>
```

### Tooltip with Delay

```tsx
<Tooltip
  heading="Delayed Tooltip"
  description="This tooltip appears after 500ms"
  position="top"
  delay={500}
>
  <QuestionCircleIcon className="text-[var(--color-text-tertiary)] cursor-pointer" />
</Tooltip>
```

### Tooltip Modal

```tsx
import { TooltipModal } from '@/components/Tooltip';

<TooltipModal
  heading="Information"
  content={
    <>
      <p>This is detailed information displayed in a modal.</p>
      <p>You can include multiple paragraphs or any React content.</p>
    </>
  }
/>
```

### Controlled Tooltip Modal

```tsx
const [open, setOpen] = useState(false);

<TooltipModal
  heading="Controlled Modal"
  content="This modal is controlled programmatically"
  open={open}
  onOpenChange={setOpen}
/>

<Button onClick={() => setOpen(!open)}>
  {open ? 'Close' : 'Open'} Modal
</Button>
```

## Design Tokens Used

- `--color-text-tertiary` - Default text color for question circle icon
- `--color-text-disabled` - Disabled state text color
- `--color-text-link` - Link color for text triggers
- `--color-text-linkHover` - Link hover color
- Dark background (`#0c0c0d`) - Tooltip background
- White text - Tooltip content text color
- Border radius (`4px`) - Tooltip corner rounding
- Shadow - Drop shadow for tooltip elevation

## Accessibility

- ✅ Keyboard navigation support (click to toggle)
- ✅ ARIA attributes (`role="tooltip"`, `aria-live="polite"`)
- ✅ Focus management
- ✅ Click outside to close
- ✅ Disabled state properly handled
- ✅ Semantic HTML structure

## Positioning

The tooltip supports four positions:
- `top` - Tooltip appears above the trigger
- `bottom` - Tooltip appears below the trigger
- `left` - Tooltip appears to the left of the trigger
- `right` - Tooltip appears to the right of the trigger

The tooltip automatically positions itself with a 12px gap from the trigger element and centers horizontally/vertically as appropriate.

## Best Practices

1. **Use descriptive headings and descriptions** - Make tooltip content clear and concise
2. **Choose appropriate positions** - Consider available space and reading flow
3. **Use TooltipBodyCopy for inline text** - Provides better UX for body copy contexts
4. **Consider delay for hover triggers** - Prevents accidental tooltip activation
5. **Use controlled mode for interactive tooltips** - When tooltip state needs to be managed programmatically
6. **Use TooltipModal for longer content** - When you need to display detailed information that doesn't fit well in a tooltip, use the modal variant
7. **Consider user context** - Tooltips are great for quick hints, modals are better for detailed explanations

