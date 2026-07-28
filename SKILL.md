---
name: doctums-design
description: Use this skill to generate well-branded interfaces and assets for Doctums (Higher Education Consulting / EdTech), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Voice:** practitioner-led, specific over vague, evidence-based, no hype, no emoji. "We" to "your institution". Lead with concrete numbers.
- **Color:** Canvas `#FCFDFE`, white cards, hairline `#EAEAEA`. Primary = Doctums Yellow `#F5C33F` (CTAs only). Accent = Marine Blue `#05B6CB` (links/hover/focus). Ink = `#1E1E1E`. Dark ink only on yellow/blue (AAA). One light mode only.
- **Type:** Georgia serif for display/headline (−0.02em) + body (16/1.6, ≤65ch); Montserrat for UI/labels (uppercase, +0.1em); Cousine mono for data.
- **Shape:** flat by default, hairline borders, radii 2px/4px, no pills/circles. Shadow only on hover/focus. 8px spacing grid. Golden Canon Grid for layout.
- **Photos:** warm desaturated, low-contrast, Portra-400 film, golden→cyan 30% overlay; editorial-documentary campus imagery.

## Files
- `readme.md` — full guide (content + visual foundations, iconography, manifest)
- `styles.css` + `tokens/` — link `styles.css` to get all CSS variables and type utilities
- `components/` — React primitives (bundle: `_ds_bundle.js`, namespace `window.DoctumsDesignSystem_9e6b2a`)
- `ui_kits/website/`, `ui_kits/platform/` — full screen recreations
- `slides/` — 1280×720 presentation templates
- `assets/logos/`, `assets/imagery/` — real brand assets (never redraw logos)
