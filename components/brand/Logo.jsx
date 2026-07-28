import React from 'react';

/* ─── Official logo file map (BETA) ─────────────────────────────────────────
   8 canonical masters, each with CSS injected into <defs>.
   Naming convention: logo-{color}-{tagline?}.svg
   ─────────────────────────────────────────────────────────────────────────── */
const FILES = {
  // ── No tagline ────────────────────────────────────────────────────────────
  // Yellow sun + dark text → light surfaces (white / canvas / yellow)
  'primary':            'logo-primary.png',
  '01-primary':         'logo-primary.png',
  '03-on-yellow':       'logo-primary.png',
  // Yellow sun + white text → dark / coloured surfaces (black / cyan / gradient)
  'primary-white':      'logo-mono-white.png',
  '02-reverse':         'logo-mono-white.png',
  '06-on-cyan':         'logo-mono-white.png',
  // Monochrome white → dark surfaces (all-white, no yellow)
  'mono-white':         'logo-mono-white.png',
  '05-mono-white':      'logo-mono-white.png',
  // Monochrome black → light surfaces (all-dark, no yellow)
  'mono-black':         'logo-mono-black.png',
  '04-mono-black':      'logo-mono-black.png',

  // ── With "Higher Education Consulting" tagline ───────────────────────────
  'primary-tag':              'logo-primary-tag.png',
  'primary-white-tag':        'logo-mono-white-tag.png',
  'mono-white-tag':           'logo-mono-white-tag.png',
  'mono-black-tag':           'logo-mono-black-tag.png',

  // ── Services & co-branding ────────────────────────────────────────────────
  'services-1line':     'logo-services-1line.svg',
  'services-2lines':    'logo-services-2lines.svg',
  'cobrand-sf':         'cobrand-sf.svg',
  'cobrand-sm':         'cobrand-sm.svg',
};

/* Background → recommended variant */
const BG_DEFAULT = {
  light:  'primary',
  dark:   'primary-white',
  yellow: '03-on-yellow',
  cyan:   '06-on-cyan',
};

function resolveVariant(variant, background) {
  if (!variant && background) return BG_DEFAULT[background] || 'primary';
  return variant || 'primary';
}

/**
 * Official Doctums logo. Pick by `variant` key or `background` shortcut.
 * CSS is embedded in each SVG — no extra stylesheet needed.
 *
 * Minimums: primary/mono no-tagline ≥80px tall; with tagline ≥160px wide
 * (tagline cap-height must be ≥10px screen / 6pt print).
 * `clearSpace` pads 1× the sun symbol height on all sides.
 */
export function Logo({
  variant,
  background = null,
  height = 40,
  width = null,
  clearSpace = false,
  assetBase = 'assets/logos',
  alt = 'Doctums',
  style = {},
  ...rest
}) {
  const key = resolveVariant(variant, background);
  const file = FILES[key] || FILES['primary'];

  const img = (
    <img
      src={`${assetBase}/${file}`}
      alt={alt}
      style={{ height, width: width || 'auto', display: 'block', ...(clearSpace ? {} : style) }}
      {...(clearSpace ? {} : rest)}
    />
  );

  if (!clearSpace) return img;
  return (
    <span style={{ display: 'inline-block', padding: height, ...style }} {...rest}>
      {img}
    </span>
  );
}
