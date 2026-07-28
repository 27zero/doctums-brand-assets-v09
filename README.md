# Doctums — Design System

> **Version: BETA.** **Doctums** is an EdTech company that designs and implements advanced, cloud-based digital learning ecosystems for institutions, educators, and students across the region. It turns static academic models into dynamic, measurable, accessible experiences — positioned not as a generic startup but as an **elite Higher-Education consultancy**. The interface behaves like a *living editorial document*: operative, clear, concrete, built for reading speed and anchored to the **Golden Canon Grid** (classical proportion, mathematical intersections, architectural precision).

Tagline: **Higher Education Consulting**. Voice: calm confidence grounded in real delivery — specificity over hype.

---

## Sources (provided materials)
This system was built from materials supplied by the client. The reader may not have access; recorded here for provenance.

- **Figma:** `PRUEBA_system1 - brand guidelines DOCTUMS.fig` — a 48-frame brand & logo guideline book (Cover, Golden Canon Grid, Logo anatomy/construction/clear-space, Color variants, Brand colors, Official gradient, Typography, Brand voice, Writing principles, Photography overview + 4 photo directions, Templates, Sign-off). Only 2 standalone Figma components exist (`GoldenCanonGrid-1920`, `logo doctmus`); there is **no component library** in the file — the UI primitives here are authored from the written system spec.
- **PDFs:** `doctums, prompt base_brandbook.pdf` (photography prompt system), `Fonts Structure.pdf` (Montserrat scale reference). `Doctums — Logo Guidelines.pdf` was listed but did not arrive in `uploads/` — **please re-upload if you want it captured.**
- **Logos:** primary lockup + tagged variants (white/black/transparent), generic-services lockups, co-branding lockups → `assets/logos/`.
- **Imagery:** 80+ AI-generated editorial/architectural photos → curated and organized into `assets/imagery/` across 4 directions: architecture (01–23), movement (01–13), students (01–13), practitioners (01–20), concept/abstract (01–20). Original full-resolution copies also kept in `uploads/`.
- **Written spec:** full color / type / spacing / component definition provided in the brief (the authoritative source for tokens).

---

## CONTENT FUNDAMENTALS — how Doctums writes

**Core stance:** *"the calm confidence of experienced Higher-Education consultants — grounded in proven market experience and the realities of institutional operations."* Doctums speaks **as practitioners**, showing expertise through **specificity, not hype** — outcomes, constraints, and what changes over time.

**Five writing principles** (verbatim from the book):
1. **Practitioner-led** — write from a real-world delivery perspective, not theory or abstract consulting language.
2. **Specific over vague** — concrete examples, defined terms, clear risks, practical context.
3. **Practical over aspirational** — actionable next steps, not slogans.
4. **Evidence-based claims** — no hype, no exaggerated guarantees.
5. **Technically fluent** — show real understanding of institutional operations, systems, integrations, data, security, implementation, continuity.

**Tone & mechanics**
- **Person:** "we" (Doctums) speaking to "you/your institution". Confident, plain, unhurried.
- **Casing:** Sentence case in prose and headlines. Labels/captions/eyebrows are **UPPERCASE Montserrat with +0.1em tracking**.
- **Numbers:** lead with specific figures ("38% faster enrollment cycle", "120+ institutions") — the specificity *is* the credibility. Avoid round, unsourced hype numbers.
- **Emoji:** **none.** Not part of the brand.
- **Punctuation:** em-dashes for asides; italics (serif) for emphasis on a key phrase ("…how institutions *actually run.*").
- **Examples of voice:**
  - Headline: *"Digital learning, built for how institutions actually run."*
  - Section: *"Specific work, measured against real delivery."*
  - CTA: *"Tell us where the friction is. We'll come back with a specific, sequenced read — no hype, no boilerplate."*
  - Avoid: "Revolutionize education with our cutting-edge AI-powered platform!" 🚀

---

## VISUAL FOUNDATIONS

**Overall feeling:** an editorial document, not a web app. Architectural plans over decorated UI. Whitespace is a functional material.

- **Colors:** warm-paper **Canvas `#FCFDFE`** (a barely-there step off pure white) with pure-white **Surface Cards `#FFFFFF`** separated only by **Hairline `#EAEAEA`** rules. **Doctums Yellow `#F5C33F`** is the primary action color (CTAs only). **Marine Blue `#05B6CB`** is reserved for links, hover, and focus. **Doctums Black `#1E1E1E`** carries 100% of reading text. **AAA contrast rule:** dark ink only on Yellow/Blue — *never* white-on-yellow. One light mode only; **dark mode is explicitly out of scope** (the dark bands on slides/sections are intentional inverse blocks, not a theme).
- **Official gradient:** golden `#F5C33F` → cyan `#05B6CB`, ~120°. Used as a thin accent stripe, a 12% wash behind CTAs, and at **30% opacity (multiply)** over photography.
- **Type:** Swiss/Bauhaus hierarchy with **dramatic 2×–4× jumps**, not a linear ramp. **Georgia** (serif) for display, headlines *and* body reading — display/headline carry **−0.02em** tracking to compact glyphs like newspaper mastheads; body is 16px / 1.6, max ~65ch. **Montserrat** for all UI, labels, captions (uppercase, +0.1em). **Cousine** (mono) for data/code. *(Substitution note below.)*
- **Spacing & grid:** strict **8px base**. Container max 1440px, content 1200px, 24px gutters (16px under 768px). `--space-2xl` (96px) collapses to 48px on mobile. Nothing floats — everything is anchored to the Golden Canon Grid's golden-section intersections.
- **Backgrounds:** flat paper canvas; full-bleed editorial photography for hero/section moments; **no patterns, no noise, no decorative gradients** beyond the one official gradient. Dark `#1E1E1E` blocks for inverse sections.
- **Photography:** warm desaturated, low-contrast, **Kodak Portra 400** film aesthetic with subtle grain; golden→cyan 30% overlay; editorial-documentary, candid, multiple diverse people (no single hero), recognizable modern campus architecture. Four official directions: **Campus Architecture** (bridges, concrete structures, glass façades, geometric abstraction; golden→cyan brand palette is already in the architecture), **Everyday Movement** (motion-blur crowds on plazas and stairs, kinetic energy), **Students on Campus** (candid corridors, interiors, enrollment and service scenes), **Practitioners at Work** (teams reviewing blueprints/screens, data-ops rooms, whiteboard sessions — supports the consulting positioning). Treatment is codified in `PhotoFrame`. Library: 80+ images in `assets/imagery/`, named by direction + sequential number.
- **Elevation:** **flat by default** — cards/buttons rest with a hairline border and *no shadow*. Shadow is tactile confirmation only: hover raises `0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04)`. Overlays (dialogs) get a larger soft shadow. No glassmorphism, no skeuomorphism, no glows.
- **Corner radii:** tiny and architectural — **micro 2px** (inputs), **base 4px** (cards, buttons). **No pills, no circles** (even avatars are square with 2px radius).
- **Borders:** 1px hairline `#EAEAEA` everywhere structure is needed; 2px Marine-Blue solid border on focused form fields (no glow).
- **Hover / press:** buttons gain the interactive shadow; secondary buttons fill to 10% of their border color; ghost buttons fill to the sunken gray; linked cards lift **−2px** translateY + shadow; links underline / brighten to Marine Blue.
- **Animation:** sober and performance-first. `--ease-standard: cubic-bezier(0.2,0,0,1)`, 120–200ms. Fades/lifts only — **no bounces, no infinite decorative loops**. Entrance animation is undocumented in the source and kept minimal by choice.
- **Cards:** white surface, 1px hairline border, 4px radius, no rest shadow; `interactive` variant lifts on hover.

---

## LOGO & IDENTITY GUIDELINES

The logo is the brand's **structural anchor and guarantee of authority** — its visual integrity is non-negotiable. Codified in the `Logo` component and `tokens/logo.css`.

**Six official variants** (choose by background):
| # | Variant | Use on |
|---|---|---|
| 01 | Primary (black text, yellow symbol) | Light — Canvas `#FCFDFE` / Card `#FFFFFF` |
| 02 | Reverse (white text, yellow symbol) | Dark — `#1E1E1E` |
| 03 | On Yellow | Doctums Yellow `#F5C33F` |
| 04 | Mono Black | Light |
| 05 | Mono White | Dark |
| 06 | On Cyan | Marine Blue `#05B6CB` |

Always place on calm, high-contrast surfaces (WCAG ≥ 4.5:1). `<Logo background="light|dark|yellow|cyan" />` auto-picks an approved variant.

**Proportional weight on the canvas:** Hero/covers **50vw** (aligned to Golden Canon intersections) · Standard (docs/stationery) **20–25vw** · Landscape never below **10–15vw**.

**Minimum sizes & tagline thresholds:** tagged lockup **≥160px** wide — if the tagline cap-height would fall below **10px on screen / 6pt in print**, drop the tagline. Main lockup (no tagline) **≥80px** tall. For tiny/restricted spaces use the **sun symbol only** — favicon **16px**, app icon **32px+**.

**Clear space:** a mandatory **1× protection zone** (X = exact height of the Doctums sun symbol at current scale) on all sides — no text, element, or container edge may invade it. Use `<Logo clearSpace />`.

**Don'ts:** never distort/stretch, rotate, add drop-shadows/glows/3D, alter internal symbol↔wordmark spacing, place over low-contrast photos / busy or gradient backgrounds / non-approved colors, recolor the master palette, or re-typeset, translate, or re-align the tagline.

> **Note:** dedicated **On-Yellow (03)** and **On-Cyan (06)** masters and true mono variants were not in the uploads — the component currently maps them to the dark/mono lockup. **Send those masters if they differ and I'll wire them in.**

---

## ICONOGRAPHY

The brand book defines **no icon font and no bespoke icon set** — the only proprietary marks are the **sunburst/seal** inside the logo and small UI chevrons/arrows (used in the writing-principles and contents pages). Iconography is therefore deliberately sparse: the system leans on **type, rules, and number** rather than icons.

- **Logos / marks:** real SVG/PNG lockups live in `assets/logos/` — always use these, never redraw. The sunburst seal should only appear as part of the logo lockup.
- **No emoji, no unicode-as-icon.**
- **UI icons (substitution — please confirm):** since no set was provided, use **[Lucide](https://lucide.dev)** (1.5–2px stroke, geometric, square-cornered) via CDN when an interface genuinely needs icons — it matches the clean, architectural line quality. Keep them monochrome (`--ink-secondary` or `--accent`), 20–24px, and sparing. **If Doctums has an official icon library, send it and we'll swap Lucide out.**

---

## Index / manifest

**Foundations**
- `styles.css` — global entry (consumers link this). `@import`s everything below.
- `tokens/fonts.css` · `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/logo.css` · `tokens/base.css` (type utility classes: `.dt-display`, `.dt-headline`, `.dt-title`, `.dt-body`, `.dt-caption`, `.dt-mono`, `.dt-link`).
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`window.DoctumsDesignSystem_9e6b2a`) — see each `*.prompt.md`
- core: `Button`, `Card`, `Badge`, `Tag`
- forms: `Input`, `Select`, `Checkbox`, `Switch`
- navigation: `Tabs`
- data: `Stat`, `Avatar`
- brand: `Logo`, `PhotoFrame`, `GoldenCanonGrid`

**UI kits**
- `ui_kits/website/` — editorial marketing homepage (interactive).
- `ui_kits/platform/` — institution admin dashboard (programs, cohorts, analytics).

**Slides** — `slides/` (1280×720): `title`, `section`, `content`, `quote`, `data`, `photo`.

**Assets** — `assets/logos/`, `assets/imagery/`.

**Skill** — `SKILL.md` (Agent-Skills compatible).
