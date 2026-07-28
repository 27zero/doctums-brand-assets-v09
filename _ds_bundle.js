/* @ds-bundle: {"format":4,"namespace":"DoctumsDesignSystem_9e6b2a","components":[{"name":"GoldenCanonGrid","sourcePath":"components/brand/GoldenCanonGrid.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PhotoFrame","sourcePath":"components/brand/PhotoFrame.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/GoldenCanonGrid.jsx":"5e120cfd8acc","components/brand/Logo.jsx":"849e4b004486","components/brand/PhotoFrame.jsx":"289dd5aa23c2","components/core/Badge.jsx":"2b5552d9de35","components/core/Button.jsx":"a5c0599a1a4f","components/core/Card.jsx":"c6bee9b157b0","components/core/Tag.jsx":"21e8921bf16f","components/data/Avatar.jsx":"111a7bd6d294","components/data/Stat.jsx":"5246bff8c1dd","components/forms/Checkbox.jsx":"456f1535fda8","components/forms/Input.jsx":"9ca0fb44e4c3","components/forms/Select.jsx":"0f23e2560857","components/forms/Switch.jsx":"9ec27c342b5b","components/navigation/Tabs.jsx":"4a6058b50928","doc-page.js":"371bab66f42d","ui_kits/platform/AppShell.jsx":"6c64a7285ca3","ui_kits/platform/Dashboard.jsx":"ed166b716623","ui_kits/website/Hero.jsx":"1d669c66840c","ui_kits/website/Sections.jsx":"afd693144a36","ui_kits/website/SiteHeader.jsx":"6126b34e21b2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DoctumsDesignSystem_9e6b2a = window.DoctumsDesignSystem_9e6b2a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GoldenCanonGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Golden Canon Grid overlay — the structural backbone of every Doctums layout.
 * Draws golden-section vertical/horizontal guides plus canon diagonals over
 * its positioned parent. Decorative; place inside a `position:relative` box.
 */
function GoldenCanonGrid({
  color = 'var(--accent)',
  opacity = 0.18,
  diagonals = true,
  showThirds = false,
  style = {},
  ...rest
}) {
  const phi = 0.618;
  const vx = [phi, 1 - phi].map(v => v * 100);
  const hy = [phi, 1 - phi].map(v => v * 100);
  const thirds = showThirds ? [33.333, 66.666] : [];
  const line = o => ({
    position: 'absolute',
    background: color,
    ...o
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity,
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: `1px solid ${color}`
    }
  }), vx.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: 'v' + i,
    style: line({
      top: 0,
      bottom: 0,
      left: `${x}%`,
      width: '1px'
    })
  })), hy.map((y, i) => /*#__PURE__*/React.createElement("div", {
    key: 'h' + i,
    style: line({
      left: 0,
      right: 0,
      top: `${y}%`,
      height: '1px'
    })
  })), thirds.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: 't' + i,
    style: line({
      top: 0,
      bottom: 0,
      left: `${x}%`,
      width: '1px',
      opacity: 0.5
    })
  })), diagonals && /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "100",
    y2: "100",
    stroke: color,
    strokeWidth: "0.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "0",
    x2: "0",
    y2: "100",
    stroke: color,
    strokeWidth: "0.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "100",
    y2: "61.8",
    stroke: color,
    strokeWidth: "0.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "0",
    x2: "0",
    y2: "61.8",
    stroke: color,
    strokeWidth: "0.2"
  })));
}
Object.assign(__ds_scope, { GoldenCanonGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GoldenCanonGrid.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ─── Official logo file map (BETA) ─────────────────────────────────────────
   8 canonical masters, each with CSS injected into <defs>.
   Naming convention: logo-{color}-{tagline?}.svg
   ─────────────────────────────────────────────────────────────────────────── */
const FILES = {
  // ── No tagline ────────────────────────────────────────────────────────────
  // Yellow sun + dark text → light surfaces (white / canvas / yellow)
  'primary': 'logo-primary.png',
  '01-primary': 'logo-primary.png',
  '03-on-yellow': 'logo-primary.png',
  // Yellow sun + white text → dark / coloured surfaces (black / cyan / gradient)
  'primary-white': 'logo-mono-white.png',
  '02-reverse': 'logo-mono-white.png',
  '06-on-cyan': 'logo-mono-white.png',
  // Monochrome white → dark surfaces (all-white, no yellow)
  'mono-white': 'logo-mono-white.png',
  '05-mono-white': 'logo-mono-white.png',
  // Monochrome black → light surfaces (all-dark, no yellow)
  'mono-black': 'logo-mono-black.png',
  '04-mono-black': 'logo-mono-black.png',
  // ── With "Higher Education Consulting" tagline ───────────────────────────
  'primary-tag': 'logo-primary-tag.png',
  'primary-white-tag': 'logo-mono-white-tag.png',
  'mono-white-tag': 'logo-mono-white-tag.png',
  'mono-black-tag': 'logo-mono-black-tag.png',
  // ── Services & co-branding ────────────────────────────────────────────────
  'services-1line': 'logo-services-1line.svg',
  'services-2lines': 'logo-services-2lines.svg',
  'cobrand-sf': 'cobrand-sf.svg',
  'cobrand-sm': 'cobrand-sm.svg'
};

/* Background → recommended variant */
const BG_DEFAULT = {
  light: 'primary',
  dark: 'primary-white',
  yellow: '03-on-yellow',
  cyan: '06-on-cyan'
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
function Logo({
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
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${file}`,
    alt: alt,
    style: {
      height,
      width: width || 'auto',
      display: 'block',
      ...(clearSpace ? {} : style)
    }
  }, clearSpace ? {} : rest));
  if (!clearSpace) return img;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: height,
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brand photo frame — applies the Doctums photographic treatment: warm
 * desaturation + the golden→cyan gradient overlay at ~30%. Optional caption.
 */
function PhotoFrame({
  src,
  alt = '',
  ratio = '16 / 9',
  overlay = true,
  grade = true,
  caption = null,
  radius = 'var(--radius-base)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      borderRadius: radius,
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: grade ? 'saturate(0.82) contrast(0.96) brightness(1.02)' : 'none'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-photo-overlay)',
      mixBlendMode: 'multiply'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "dt-caption",
    style: {
      marginTop: '8px',
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 500,
      color: 'var(--ink-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label chip. Square-ish (micro radius), sans caption type. */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      fg: 'var(--ink-secondary)',
      bg: 'var(--surface-sunken)',
      bd: 'var(--hairline)'
    },
    primary: {
      fg: 'var(--on-primary)',
      bg: 'var(--primary)',
      bd: 'var(--primary)'
    },
    accent: {
      fg: 'var(--on-accent)',
      bg: 'var(--accent)',
      bd: 'var(--accent)'
    },
    success: {
      fg: '#fff',
      bg: 'var(--signal-green)',
      bd: 'var(--signal-green)'
    },
    danger: {
      fg: '#fff',
      bg: 'var(--signal-red)',
      bd: 'var(--signal-red)'
    }
  }[tone];
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      padding: '4px 8px',
      borderRadius: 'var(--radius-micro)',
      color: solid ? palette.fg : palette.fg,
      background: solid ? palette.bg : 'transparent',
      border: '1px solid ' + palette.bd,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doctums Button — flat at rest, tactile shadow on hover.
 * Variants: primary (Doctums Yellow), secondary (outline), ghost, link.
 */
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '12px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '14px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '16px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-base)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'box-shadow 200ms cubic-bezier(0.2,0,0,1), background-color 200ms, color 200ms',
    boxShadow: 'none',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--on-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'var(--accent)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-primary)'
    },
    link: {
      background: 'transparent',
      color: 'var(--link)',
      padding: '0',
      borderRadius: 0
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'secondary' ? {
    background: 'color-mix(in srgb, var(--accent) 10%, transparent)'
  } : variant === 'ghost' ? {
    background: 'var(--surface-sunken)'
  } : variant === 'link' ? {
    textDecoration: 'underline'
  } : {
    boxShadow: 'var(--elevation-interactive)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content container. Flat at rest (hairline border only). When `interactive`,
 * gains tactile shadow + a -2px lift on hover.
 */
function Card({
  interactive = false,
  padding = 'var(--space-lg)',
  as = 'div',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-base)',
      padding,
      transition: 'box-shadow 200ms cubic-bezier(0.2,0,0,1), transform 200ms cubic-bezier(0.2,0,0,1)',
      boxShadow: lift ? 'var(--elevation-interactive)' : 'none',
      transform: lift ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter/category tag — removable chip with hairline border. */
function Tag({
  children,
  onRemove = null,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '13px',
      padding: '5px 10px',
      borderRadius: 'var(--radius-micro)',
      border: '1px solid ' + (active ? 'var(--accent)' : 'var(--hairline-strong)'),
      background: active ? 'color-mix(in srgb, var(--accent) 10%, transparent)' : 'var(--surface-card)',
      color: active ? 'var(--accent)' : 'var(--ink-secondary)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: '14px',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — initials or image, square with micro radius (architectural, not circular). */
function Avatar({
  name = '',
  src = null,
  size = 40,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-micro)',
      background: src ? 'transparent' : 'var(--doctums-black)',
      color: 'var(--ink-inverse)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: Math.round(size * 0.36),
      letterSpacing: '0.02em',
      overflow: 'hidden',
      flex: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Large editorial metric — serif number + caption label. Anchors data panels. */
function Stat({
  value,
  label,
  accent = false,
  sub = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: accent ? 'var(--accent)' : 'var(--ink-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "dt-caption"
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '14px',
      color: 'var(--ink-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox — micro radius, Marine-Blue fill when checked. */
function Checkbox({
  label = null,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  ...rest
}) {
  const cbId = id || (label ? `cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      appearance: 'none',
      width: '18px',
      height: '18px',
      margin: 0,
      border: '1px solid var(--hairline-strong)',
      borderRadius: 'var(--radius-micro)',
      background: 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'inherit'
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      color: 'var(--ink-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("style", null, `#${cbId}:checked{background:var(--accent);border-color:var(--accent)}#${cbId}:checked::after{content:"";width:5px;height:9px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);margin-top:-2px}#${cbId}:focus-visible{outline:none;box-shadow:var(--focus-ring)}`));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Minimalist text field. 48px locked height; 2px focus border in Marine Blue. */
function Input({
  label = null,
  hint = null,
  error = null,
  id,
  type = 'text',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--signal-red)' : focus ? 'var(--accent)' : 'var(--hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "dt-caption",
    style: {
      color: 'var(--ink-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: '48px',
      padding: '0 16px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--ink-primary)',
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      border: `${focus ? '2px' : '1px'} solid ${borderColor}`,
      borderRadius: 'var(--radius-micro)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: "dt-caption",
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 500,
      color: error ? 'var(--signal-red)' : 'var(--ink-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select field matching Input metrics (48px, micro radius, blue focus). */
function Select({
  label = null,
  hint = null,
  id,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    className: "dt-caption",
    style: {
      color: 'var(--ink-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: '48px',
      padding: '0 40px 0 16px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--ink-primary)',
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      border: `${focus ? '2px' : '1px'} solid ${focus ? 'var(--accent)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-micro)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-muted)',
      fontSize: '12px'
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    className: "dt-caption",
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 500,
      color: 'var(--ink-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch. Square-ish track (2px radius) to match the flat, architectural system. */
function Switch({
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  label = null,
  id,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const swId = id || (label ? `sw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: swId,
    role: "switch",
    "aria-checked": isOn,
    disabled: disabled,
    onClick: e => {
      e.preventDefault();
      if (disabled) return;
      if (checked === undefined) setInternal(!isOn);
      onChange && onChange(!isOn);
    },
    style: {
      width: '40px',
      height: '22px',
      borderRadius: '2px',
      border: '1px solid ' + (isOn ? 'var(--accent)' : 'var(--hairline-strong)'),
      background: isOn ? 'var(--accent)' : 'var(--surface-card)',
      position: 'relative',
      cursor: 'inherit',
      transition: 'background 200ms cubic-bezier(0.2,0,0,1)',
      padding: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '2px',
      left: isOn ? '20px' : '2px',
      width: '16px',
      height: '16px',
      borderRadius: '1px',
      background: isOn ? '#fff' : 'var(--ink-muted)',
      transition: 'left 200ms cubic-bezier(0.2,0,0,1)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      color: 'var(--ink-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Editorial underline tabs — active tab marked by a Marine-Blue rule. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: '28px',
      borderBottom: 'var(--border-hairline)',
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        if (value === undefined) setInternal(t.id);
        onChange && onChange(t.id);
      },
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        padding: '0 0 12px',
        marginBottom: '-1px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: on ? 'var(--ink-primary)' : 'var(--ink-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
        transition: 'color 200ms, border-color 200ms'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/platform/AppShell.jsx
try { (() => {
// Doctums platform — app shell (sidebar + topbar)
function AppShell({
  active,
  onNav,
  children
}) {
  const nav = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'programs',
    label: 'Programs'
  }, {
    id: 'cohorts',
    label: 'Cohorts'
  }, {
    id: 'faculty',
    label: 'Faculty'
  }, {
    id: 'analytics',
    label: 'Analytics'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '232px 1fr',
      minHeight: '100vh',
      background: 'var(--canvas)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: '1px solid var(--hairline)',
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 12px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-primary.png",
    alt: "Doctums",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav && onNav(n.id);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        borderRadius: 4,
        textDecoration: 'none',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: '0.01em',
        color: on ? 'var(--ink-primary)' : 'var(--ink-muted)',
        background: on ? 'var(--surface-sunken)' : 'transparent',
        borderLeft: '2px solid ' + (on ? 'var(--accent)' : 'transparent')
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 16,
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mar\xEDa Restrepo",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--ink-primary)'
    }
  }, "Mar\xEDa Restrepo"), /*#__PURE__*/React.createElement("div", {
    className: "dt-overline",
    style: {
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "Vicerrector\xEDa")))), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      borderBottom: '1px solid var(--hairline)',
      background: 'rgba(252,253,254,0.86)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'var(--accent)'
    }
  }, "Universidad Nacional"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em',
      margin: '2px 0 0',
      textTransform: 'capitalize'
    }
  }, active)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "New program"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      flex: 1
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Dashboard.jsx
try { (() => {
// Doctums platform — dashboard content (stats, programs table, activity)
function Dashboard() {
  const [tab, setTab] = React.useState('active');
  const programs = [{
    name: 'B.Sc. Computer Science',
    cohort: '2026-A',
    seats: 240,
    fill: 92,
    status: 'Live'
  }, {
    name: 'Executive MBA',
    cohort: '2026-A',
    seats: 60,
    fill: 78,
    status: 'Live'
  }, {
    name: 'Public Health Diploma',
    cohort: '2026-B',
    seats: 120,
    fill: 41,
    status: 'Enrolling'
  }, {
    name: 'Data Analytics Cert.',
    cohort: '2026-B',
    seats: 180,
    fill: 12,
    status: 'Draft'
  }];
  const toneFor = s => s === 'Live' ? 'success' : s === 'Enrolling' ? 'accent' : 'neutral';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, [{
    v: '12',
    l: 'Active programs'
  }, {
    v: '3,480',
    l: 'Enrolled students',
    a: true
  }, {
    v: '38%',
    l: 'Faster enroll cycle',
    a: true
  }, {
    v: '99.9%',
    l: 'Platform uptime'
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.l,
    padding: "20px"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: s.v,
    label: s.l,
    accent: s.a
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: 'active',
      label: 'Active'
    }, {
      id: 'enrolling',
      label: 'Enrolling'
    }, {
      id: 'all',
      label: 'All programs'
    }],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-serif)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Program', 'Cohort', 'Seats', 'Fill', 'Status'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: h === 'Seats' || h === 'Fill' ? 'right' : 'left',
      padding: '14px 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--ink-muted)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, programs.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.name
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 20px',
      fontSize: 15,
      color: 'var(--ink-primary)',
      borderBottom: '1px solid var(--gray-100)'
    }
  }, p.name), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 20px',
      fontSize: 14,
      color: 'var(--ink-secondary)',
      borderBottom: '1px solid var(--gray-100)'
    }
  }, p.cohort), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 20px',
      fontSize: 14,
      textAlign: 'right',
      color: 'var(--ink-secondary)',
      borderBottom: '1px solid var(--gray-100)'
    }
  }, p.seats), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--gray-100)',
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: 'var(--gray-150)',
      borderRadius: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.fill + '%',
      height: '100%',
      background: p.fill > 70 ? 'var(--accent)' : 'var(--primary)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "dt-mono",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)',
      width: 34,
      textAlign: 'right'
    }
  }, p.fill, "%"))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--gray-100)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: toneFor(p.status),
    variant: "solid"
  }, p.status))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      marginBottom: 14
    }
  }, "Enrollment this term"), /*#__PURE__*/React.createElement(Stat, {
    value: "+612",
    label: "New enrollments",
    accent: true,
    sub: "vs. 480 last term"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 64,
      marginTop: 18
    }
  }, [40, 52, 48, 66, 72, 80, 76, 90].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + '%',
      background: i === 7 ? 'var(--accent)' : 'var(--gray-200)',
      borderRadius: 1
    }
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      marginBottom: 14
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Public Health Diploma opened', '2h ago'], ['Faculty roster synced — 18 added', '5h ago'], ['Executive MBA reached 78% fill', 'Yesterday']].map(([t, when]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 1,
      background: 'var(--accent)',
      marginTop: 7,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--ink-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "dt-overline",
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      marginTop: 2
    }
  }, when)))))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Doctums marketing site — hero (editorial, golden canon anchored)
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.9fr',
      gap: 64,
      alignItems: 'center',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'var(--accent)'
    }
  }, "Higher Education Consulting"), /*#__PURE__*/React.createElement("h1", {
    className: "dt-display",
    style: {
      fontSize: 60,
      margin: '20px 0 0'
    }
  }, "Digital learning,", /*#__PURE__*/React.createElement("br", null), "built for how", /*#__PURE__*/React.createElement("br", null), "institutions ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, "actually run.")), /*#__PURE__*/React.createElement("p", {
    className: "dt-body",
    style: {
      marginTop: 24,
      fontSize: 18
    }
  }, "We design and implement advanced, cloud-based learning ecosystems for institutions, educators, and students across the region \u2014 measurable, scalable, and accessible from anywhere."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('contact')
  }, "Request a review"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav && onNav('Services')
  }, "Explore services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/imagery/architecture-01.png",
    alt: "Campus architecture",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -24,
      bottom: 28,
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      borderRadius: 4,
      padding: '16px 20px',
      boxShadow: 'var(--elevation-interactive)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "120+",
    label: "Institutions served",
    accent: true
  }))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Doctums marketing site — services + proof + insights + CTA + footer
function Services() {
  const items = [{
    n: '01',
    t: 'Platform implementation',
    d: 'Stand up scalable, high-performance learning platforms in the cloud — integrated with the systems you already run.'
  }, {
    n: '02',
    t: 'Academic transformation',
    d: 'Move static academic models to dynamic, measurable experiences without disrupting operational continuity.'
  }, {
    n: '03',
    t: 'Faculty enablement',
    d: 'Equip educators with the tooling and practice to teach well at scale, with data they can act on.'
  }, {
    n: '04',
    t: 'Governance & analytics',
    d: 'Instrument outcomes end to end: enrollment, retention, and learning, on dashboards leaders trust.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'var(--accent)'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "dt-headline",
    style: {
      fontSize: 42,
      margin: '12px 0 48px',
      maxWidth: 720
    }
  }, "Specific work, measured against real delivery."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'var(--hairline)',
      border: '1px solid var(--hairline)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      background: 'var(--surface-card)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-mono",
    style: {
      color: 'var(--accent)'
    }
  }, it.n), /*#__PURE__*/React.createElement("h3", {
    className: "dt-h4",
    style: {
      margin: '14px 0 8px'
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "dt-body",
    style: {
      fontSize: 15
    }
  }, it.d))))));
}
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--doctums-black)',
      color: 'var(--ink-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'var(--primary)'
    }
  }, "Outcomes, not hype"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 34,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      margin: '16px 0 0'
    }
  }, "\"Doctums rebuilt our enrollment flow around how our registrar actually works. We cut the cycle by more than a third in one term.\""), /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      marginTop: 24,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Vicerrector\xEDa Acad\xE9mica \xB7 Regional University")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "38%",
    label: "Faster enrollment cycle"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4.8",
    label: "Avg. satisfaction",
    sub: "of 5.0"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "99.9%",
    label: "Platform uptime"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "24/7",
    label: "Access, anywhere"
  }))));
}
function Insights() {
  const posts = [{
    img: '../../assets/imagery/students-02.png',
    tag: 'Operations',
    t: 'Designing enrollment for the registrar, not the brochure'
  }, {
    img: '../../assets/imagery/movement-02.png',
    tag: 'Analytics',
    t: 'The retention metrics that actually move'
  }, {
    img: '../../assets/imagery/architecture-03.png',
    tag: 'Platform',
    t: 'Integration before innovation: a sequencing guide'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'var(--accent)'
    }
  }, "Insights"), /*#__PURE__*/React.createElement("h2", {
    className: "dt-headline",
    style: {
      fontSize: 42,
      margin: '12px 0 0'
    }
  }, "From the practice.")), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "All insights \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    interactive: true,
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: p.img,
    alt: "",
    ratio: "16 / 10",
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'var(--accent)'
    }
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    className: "dt-h4",
    style: {
      fontSize: 20,
      margin: '10px 0 0'
    }
  }, p.t)))))));
}
function CTA({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-brand)',
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "dt-headline",
    style: {
      fontSize: 40,
      margin: 0
    }
  }, "Let's look at your operation."), /*#__PURE__*/React.createElement("p", {
    className: "dt-body",
    style: {
      fontSize: 18,
      marginTop: 16
    }
  }, "Tell us where the friction is. We'll come back with a specific, sequenced read \u2014 no hype, no boilerplate.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Institution",
    placeholder: "e.g. Universidad Nacional"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@institution.edu"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onNav && onNav('home')
  }, "Request a review"))))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--doctums-black)',
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mono-white.png",
    alt: "Doctums",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dt-caption",
    style: {
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 Doctums \xB7 Higher Education Consulting")));
}
Object.assign(window, {
  Services,
  Proof,
  Insights,
  CTA,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Doctums marketing site — top navigation
function SiteHeader({
  onNav,
  active
}) {
  const links = ['Approach', 'Services', 'Outcomes', 'Insights'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(252,253,254,0.86)',
      backdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-primary.png",
    alt: "Doctums",
    style: {
      height: 34
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      textDecoration: 'none',
      color: active === l ? 'var(--ink-primary)' : 'var(--ink-muted)'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav('contact')
  }, "Talk to us"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GoldenCanonGrid = __ds_scope.GoldenCanonGrid;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
