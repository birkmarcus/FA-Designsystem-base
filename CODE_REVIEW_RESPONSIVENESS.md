# Responsiveness Review (Codex)

## Findings

### High
- `components/NavigationCards/NavigationCards.tsx:103` uses `flex-nowrap` for the cards row. Combined with fixed/min widths on items, this can cause horizontal overflow on narrow viewports; there’s no wrap or horizontal scroll handling.
- `components/NavigationCards/NavigationCardItem.tsx:105`, `components/NavigationCards/NavigationCardItem.tsx:183`, and `components/NavigationCards/NavigationCardItem.tsx:266` set `min-w-[244px]` on cards and fixed heights like `h-[387px]` / `h-[332px]` / `h-[483px]`. On small screens, these fixed dimensions can clip content or force overflow instead of reflow.

### Medium
- `components/TextBlock/TextBlock.tsx:94` hard-codes `w-[545px]`. This prevents the block from shrinking on mobile and can overflow in narrow containers.
- `components/ContentCard/ContentCard.tsx:144` hard-codes `w-[380px]` and `min-w-[244px]`. This restricts fluid layouts and can cause horizontal scrolling in smaller grids.
- `components/ImageFormat/ImageFormat.tsx:69` / `components/ImageFormat/ImageFormat.tsx:72` / `components/ImageFormat/ImageFormat.tsx:75` enforce fixed pixel sizes for all formats (e.g., `w-[456px] h-[608px]`). These dimensions are not responsive and will overflow smaller containers.
- `components/CTA/CTA.tsx:226` uses `min-w-[327px]` on the text column; `components/CTA/CTA.tsx:319` uses a fixed form width `w-[300px]`. Both can exceed available width on small screens.
- `components/Info/Info.tsx:114` uses `flex-nowrap` for some layouts, and `components/Info/Info.tsx:153` uses `min-w-[327px]` plus a fixed `h-[184px]` on the image container. This combination can force overflow instead of stacking on small screens.

## Suggested Fixes
- Replace fixed widths/heights with responsive constraints (`w-full`, `max-w-*`, `min-w-0`, `aspect-*`, `h-auto`), or use responsive variants (e.g., `sm:`, `md:`) to keep fixed sizes only at larger breakpoints.
- Avoid `flex-nowrap` for card rows on small screens; consider `flex-wrap`, a responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`), or explicit horizontal scrolling with `overflow-x-auto` and padding.
- Use responsive padding/gap tokens (e.g., `p-6 md:p-16`) so large paddings don’t collapse the layout on mobile.

## Notes
- Review is based on static code inspection; no viewport testing was run.
