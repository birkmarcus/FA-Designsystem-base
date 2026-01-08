# Code Review (Codex)

## Findings

### Medium
- `components/NavigationCards/NavigationCardItem.tsx:146` and `components/DocsSidebar/DocsSidebar.tsx:155` use `<button>` without `type="button"`, which can cause unintended form submissions when rendered inside a `<form>`.
- Hardcoded colors are present in a few components, which undermines the “no hardcoded values” claim and makes theme overrides harder:
  - `components/Modal/Modal.tsx:144` uses `bg-black/50` for the backdrop.
  - `components/Modal/Modal.tsx:151` uses `bg-white` and `border-[#ebebec]`.
  - `components/NavigationCards/NavigationCardItem.tsx:282` uses `bg-black/48`.

### Low
- `key={index}` is used in list rendering, which can cause state mismatch on reorder or insertion. Examples:
  - `components/NavigationCards/NavigationCards.tsx:148`
  - `components/CTA/CTA.tsx:170`

## Suggested Fixes
- Add `type="button"` to non-submit buttons to avoid default submit behavior.
- Replace hardcoded colors with existing design tokens, or introduce tokens if missing.
- Prefer stable identifiers for `key` values (e.g., item id, slug, href).

## Notes
- This review was based on code inspection only; no tests were run.
