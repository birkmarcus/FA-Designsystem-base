# Design Token Structure - FA Design System

## Overview

This document outlines the design token structure for the FA Design System, with particular focus on the connection points between variable collections in Figma.

## Variable Collections Architecture

The design token system follows a hierarchical structure where **Primitives** serve as the foundation, and **Semantic Tokens** reference these primitives to create context-specific values.

```
Primitives (Foundation)
    ↓
Semantic Tokens (Context-Specific)
    ↓
Component Tokens (Component-Specific)
```

---

## 1. Color Token Structure

### 1.1 Primitives Colors Collection

**Purpose**: Defines the raw color values without semantic meaning.

**Structure**:
- Base color palette (e.g., Primary, Secondary, Neutral, Accent)
- Color scales (typically 50-900 or similar ranges)
- Raw hex/RGB values

**Example Structure**:
```
Primitives Colors/
├── Primary/
│   ├── primary-50
│   ├── primary-100
│   ├── primary-200
│   ├── ...
│   └── primary-900
├── Secondary/
│   └── [similar structure]
├── Neutral/
│   └── [grayscale values]
└── Accent/
    └── [accent colors]
```

### 1.2 Color Tokens Collection

**Purpose**: Semantic color tokens that reference Primitives Colors to assign meaning.

**Connection Point**: Color Tokens **reference** Primitives Colors variables.

**Structure**:
- Semantic naming (e.g., `background-primary`, `text-primary`, `border-default`)
- References to Primitives Colors
- Context-specific assignments

**Example Structure**:
```
Color Tokens/
├── Background/
│   ├── background-primary → references Primitives Colors/Primary/primary-500
│   ├── background-secondary → references Primitives Colors/Secondary/secondary-500
│   ├── background-neutral → references Primitives Colors/Neutral/neutral-100
│   └── background-surface → references Primitives Colors/Neutral/neutral-50
├── Text/
│   ├── text-primary → references Primitives Colors/Neutral/neutral-900
│   ├── text-secondary → references Primitives Colors/Neutral/neutral-600
│   └── text-disabled → references Primitives Colors/Neutral/neutral-400
├── Border/
│   ├── border-default → references Primitives Colors/Neutral/neutral-200
│   └── border-focus → references Primitives Colors/Primary/primary-500
└── Interactive/
    ├── interactive-primary → references Primitives Colors/Primary/primary-600
    └── interactive-hover → references Primitives Colors/Primary/primary-700
```

### 1.3 Connection Pattern: Primitives Colors → Color Tokens

**How it works**:
1. **Primitives Colors** define the raw color values
2. **Color Tokens** create aliases that reference Primitives Colors
3. When a primitive color changes, all referencing tokens automatically update
4. This creates a single source of truth for color values

**Benefits**:
- ✅ Centralized color management
- ✅ Easy theme switching
- ✅ Consistent color application
- ✅ Reduced duplication

**Example Connection**:
```
Primitives Colors/Primary/primary-500 = #0066FF
    ↓ (referenced by)
Color Tokens/Background/background-primary = Primitives Colors/Primary/primary-500
Color Tokens/Interactive/interactive-primary = Primitives Colors/Primary/primary-500
```

---

## 2. Typography Token Structure

### 2.1 Primitives Typography Collection

**Purpose**: Defines base typographic properties without responsive considerations.

**Structure**:
- Font families
- Font weights
- Base font sizes
- Line heights
- Letter spacing

**Example Structure**:
```
Primitives Typography/
├── Font Families/
│   ├── font-family-primary → "Inter", sans-serif
│   ├── font-family-secondary → "Roboto", sans-serif
│   └── font-family-mono → "Fira Code", monospace
├── Font Weights/
│   ├── weight-light → 300
│   ├── weight-regular → 400
│   ├── weight-medium → 500
│   ├── weight-semibold → 600
│   └── weight-bold → 700
├── Base Sizes/
│   ├── size-xs → 12px
│   ├── size-sm → 14px
│   ├── size-base → 16px
│   ├── size-lg → 18px
│   └── size-xl → 20px
└── Line Heights/
    ├── line-height-tight → 1.2
    ├── line-height-normal → 1.5
    └── line-height-relaxed → 1.75
```

### 2.2 Responsive Typography Collection

**Purpose**: Typography tokens that adapt across different screen sizes, referencing Primitives Typography.

**Connection Point**: Responsive Typography **references** Primitives Typography variables and adds responsive behavior.

**Structure**:
- Breakpoint-specific typography scales
- Responsive font sizes
- Adaptive line heights
- Screen-size-aware spacing

**Example Structure**:
```
Responsive Typography/
├── Heading/
│   ├── heading-1/
│   │   ├── mobile → references Primitives Typography/size-xl + weight-bold
│   │   ├── tablet → references Primitives Typography/size-2xl + weight-bold
│   │   └── desktop → references Primitives Typography/size-3xl + weight-bold
│   ├── heading-2/
│   │   ├── mobile → references Primitives Typography/size-lg + weight-semibold
│   │   ├── tablet → references Primitives Typography/size-xl + weight-semibold
│   │   └── desktop → references Primitives Typography/size-2xl + weight-semibold
│   └── heading-3/
│       └── [similar structure]
├── Body/
│   ├── body-large/
│   │   ├── mobile → references Primitives Typography/size-base + weight-regular
│   │   └── desktop → references Primitives Typography/size-lg + weight-regular
│   └── body-small/
│       ├── mobile → references Primitives Typography/size-sm + weight-regular
│       └── desktop → references Primitives Typography/size-base + weight-regular
└── Caption/
    └── caption → references Primitives Typography/size-xs + weight-medium
```

### 2.3 Connection Pattern: Primitives Typography → Responsive

**How it works**:
1. **Primitives Typography** defines base typographic values
2. **Responsive Typography** creates breakpoint-specific tokens that reference primitives
3. Each responsive token can reference multiple primitive values (size, weight, line-height)
4. Responsive tokens adapt based on screen size while maintaining consistency

**Benefits**:
- ✅ Consistent typography foundation
- ✅ Responsive behavior without duplication
- ✅ Easy global typography updates
- ✅ Scalable across devices

**Example Connection**:
```
Primitives Typography/size-xl = 20px
Primitives Typography/weight-bold = 700
    ↓ (referenced by)
Responsive Typography/Heading/heading-1/mobile = 
    size: Primitives Typography/size-xl
    weight: Primitives Typography/weight-bold
    line-height: Primitives Typography/line-height-tight
```

---

## 3. Additional Token Collections

### 3.1 Spacing Tokens
- Base spacing scale (4px, 8px, 16px, etc.)
- Semantic spacing tokens (padding, margin, gap)

### 3.2 Border Radius Tokens
- Base radius values
- Component-specific radius tokens

### 3.3 Shadow Tokens
- Elevation levels
- Shadow presets

### 3.4 Motion Tokens
- Duration values
- Easing functions
- Animation presets

---

## 4. Token Hierarchy and Dependencies

```
Level 1: Primitives
├── Primitives Colors
├── Primitives Typography
├── Primitives Spacing
└── Primitives [Other]

Level 2: Semantic Tokens (Reference Primitives)
├── Color Tokens → references Primitives Colors
├── Responsive Typography → references Primitives Typography
├── Spacing Tokens → references Primitives Spacing
└── [Other Semantic Tokens]

Level 3: Component Tokens (Reference Semantic Tokens)
├── Button Tokens → references Color Tokens + Spacing Tokens
├── Card Tokens → references Color Tokens + Shadow Tokens
└── [Other Component Tokens]
```

---

## 5. Key Connection Points Summary

### 5.1 Primitives Colors ↔ Color Tokens

**Connection Type**: Direct Reference
- Color Tokens directly reference Primitives Colors variables
- One primitive can be referenced by multiple semantic tokens
- Changes to primitives propagate automatically

**Use Case**: 
- Updating brand colors updates all UI elements
- Creating theme variations
- Maintaining color consistency

### 5.2 Primitives Typography ↔ Responsive Typography

**Connection Type**: Composite Reference
- Responsive tokens reference multiple primitive values
- Responsive tokens add breakpoint logic
- Maintains typographic consistency across devices

**Use Case**:
- Responsive design implementation
- Typography scaling across screen sizes
- Maintaining readability at all breakpoints

---

## 6. Implementation Notes

### 6.1 Variable Aliasing in Figma

In Figma, variables can reference other variables using aliases:
- Select a variable value
- Choose "Alias" mode
- Select the variable to reference

### 6.2 Best Practices

1. **Single Source of Truth**: Always reference primitives, never duplicate values
2. **Semantic Naming**: Use meaningful names in semantic tokens
3. **Consistent Structure**: Maintain consistent naming conventions
4. **Documentation**: Document the purpose of each token collection
5. **Version Control**: Track changes to primitives carefully

### 6.3 Migration Path

When updating the design system:
1. Update Primitives first
2. Verify semantic tokens update automatically
3. Test component tokens
4. Document breaking changes

---

## 7. Token Naming Conventions

### Color Tokens
Format: `{category}-{element}-{state}`
- Example: `background-primary-default`
- Example: `text-primary-hover`

### Typography Tokens
Format: `{element}-{size}-{breakpoint}`
- Example: `heading-1-mobile`
- Example: `body-large-desktop`

---

## 8. Next Steps

To complete this documentation:
1. ✅ Document the connection patterns (completed)
2. ⏳ Map actual variable names from Figma file
3. ⏳ Document all token collections
4. ⏳ Create visual diagrams of connections
5. ⏳ Add code generation examples

---

## Notes

- This structure is based on design system best practices
- Actual variable names and values should be extracted from the Figma file
- Connection points should be verified in Figma's variable editor
- Consider exporting tokens to code format (JSON, CSS variables, etc.)

---

*Last Updated: [Date]*
*Figma File: FA-Design-System--Duplicate-this-*

