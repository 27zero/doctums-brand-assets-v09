import React from 'react';

/** Large editorial metric — serif number + caption label. Anchors data panels. */
export function Stat({ value, label, accent = false, sub = null, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '48px', lineHeight: 1.05, letterSpacing: '-0.02em', color: accent ? 'var(--accent)' : 'var(--ink-primary)' }}>
        {value}
      </span>
      <span className="dt-caption">{label}</span>
      {sub && <span style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--ink-muted)' }}>{sub}</span>}
    </div>
  );
}
