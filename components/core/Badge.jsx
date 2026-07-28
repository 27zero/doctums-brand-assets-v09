import React from 'react';

/** Small status/label chip. Square-ish (micro radius), sans caption type. */
export function Badge({ tone = 'neutral', variant = 'soft', children, style = {}, ...rest }) {
  const palette = {
    neutral: { fg: 'var(--ink-secondary)', bg: 'var(--surface-sunken)', bd: 'var(--hairline)' },
    primary: { fg: 'var(--on-primary)', bg: 'var(--primary)', bd: 'var(--primary)' },
    accent: { fg: 'var(--on-accent)', bg: 'var(--accent)', bd: 'var(--accent)' },
    success: { fg: '#fff', bg: 'var(--signal-green)', bd: 'var(--signal-green)' },
    danger: { fg: '#fff', bg: 'var(--signal-red)', bd: 'var(--signal-red)' },
  }[tone];
  const solid = variant === 'solid';
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
