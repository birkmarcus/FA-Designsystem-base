# FA Design System Foundation

A comprehensive design system built with Next.js, React, TypeScript, and Tailwind CSS 4, implementing design tokens from Figma.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component showcase.

### Generate Design Tokens

```bash
npm run tokens:generate
```

This generates `app/tokens.css` from the TypeScript token definitions in `tokens/`.

## 📦 Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Component showcase page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── tokens.css         # Auto-generated CSS variables
├── components/            # React components
│   ├── Button/           # Button component
│   ├── IconButton/       # Icon-only button
│   ├── NavigationButton/  # Navigation toggle button
│   ├── ListItem/         # List item with dropdown support
│   ├── Checkbox/         # Checkbox input
│   ├── Radio/            # Radio button input
│   ├── Switch/            # Toggle switch
│   └── TextBlock/        # Text content block
├── tokens/               # Design tokens
│   ├── primitives/       # Base token values
│   ├── semantic/         # Context-specific tokens
│   └── generate-css.ts   # CSS generation script
└── lib/                  # Utilities
    └── utils.ts          # Helper functions (cn, etc.)
```

## 🎨 Design Tokens

The design system uses a hierarchical token structure:

1. **Primitives** - Base values (colors, typography, spacing, etc.)
2. **Semantic** - Context-specific tokens that reference primitives
3. **CSS Variables** - Auto-generated from tokens for use in components

### Token Categories

- **Colors**: Primitives (primary, secondary, neutral, accent, success, warning, error) + Semantic (background, text, border, interactive, surface, icon, status)
- **Typography**: Font families, weights, sizes, line heights, letter spacing
- **Spacing**: Consistent spacing scale
- **Border Radius**: Rounded corners
- **Shadows**: Elevation and depth
- **Motion**: Durations and easing functions

See `tokens/README.md` for detailed documentation.

## 🧩 Components

### Button
Versatile button component with three variants (primary, neutral, subtle) and two sizes (medium, small).

**Features:**
- Left and right icon support
- All interactive states (default, hover, focused, pressed, disabled)
- Fully accessible

### IconButton
Icon-only button component with the same variants and states as Button.

### NavigationButton
Toggle button for navigation menus (hamburger ↔ close icon).

### ListItem / DropdownItem
List item component for navigation and dropdowns with:
- Icon support
- Chevron indicator
- Notification badges
- Nested dropdown items
- Multiselect and single select variants (checkbox/radio)

### Checkbox
Checkbox input with label and optional description.

**Features:**
- Checked, unchecked, and indeterminate states
- All interactive states
- Accessible implementation

### Radio
Radio button input with label and optional description.

**Features:**
- Selected/unselected states
- Grouped by name attribute
- All interactive states

### Switch
Toggle switch component with label and optional description.

**Features:**
- Checked/unchecked states
- Smooth animations
- All interactive states

### TextBlock
Content block component with heading, subheading, body text, and CTA buttons.

**Features:**
- Flexible content structure
- Reuses Button components
- Show/hide individual sections

## 🎯 Design Principles

1. **Token-First**: All styling uses design tokens, no hardcoded values
2. **Accessibility**: All components are keyboard navigable and screen reader friendly
3. **Consistency**: Shared patterns and conventions across components
4. **Type Safety**: Full TypeScript support with proper types
5. **Composability**: Components can be combined and extended

## 📝 Code Style

- **Components**: Functional components with `forwardRef` for ref forwarding
- **Styling**: Tailwind CSS 4 with CSS custom properties (design tokens)
- **State Management**: React hooks (`useState`, `useEffect`)
- **TypeScript**: Strict typing with interfaces and types
- **File Structure**: Co-located components with `index.ts` exports

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate design tokens CSS
npm run tokens:generate
```

## 📚 Documentation

- **Design Tokens**: See `tokens/README.md` and `DESIGN_TOKEN_STRUCTURE.md`
- **Component Examples**: See `app/page.tsx` for comprehensive examples
- **Button Component**: See `components/Button/README.md` for detailed Button documentation

## 🎨 Color System

The design system includes:

- **Primitives Colors**: 7 color scales (primary, secondary, neutral, accent, success, warning, error) with 50-950 shades
- **Semantic Colors**: Context-specific colors for backgrounds, text, borders, interactive elements, surfaces, icons, and status

All colors are available as CSS variables in `app/tokens.css`.

## ✅ Code Review Checklist

- ✅ All components use design tokens (no hardcoded colors/values)
- ✅ TypeScript types are properly defined
- ✅ Components are accessible (keyboard navigation, ARIA attributes)
- ✅ Consistent naming conventions
- ✅ Proper error handling
- ✅ Documentation in place
- ✅ Examples and demos available
- ✅ Linter passes without errors

## 🚧 Known Issues / Future Improvements

- Consider adding tokens for neutral button hover/active opacity values (currently using rgba)
- Consider adding Storybook for component documentation
- Add unit tests for components
- Consider adding component prop validation with runtime checks

## 📋 Code Review

See `CODE_REVIEW.md` for a comprehensive code review checklist and notes.

## 📄 License

Private project - All rights reserved

