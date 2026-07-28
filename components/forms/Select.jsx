import React from 'react';

/** Select field matching Input metrics (48px, micro radius, blue focus). */
export function Select({ label = null, hint = null, id, disabled = false, children, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && (
        <label htmlFor={selId} className="dt-caption" style={{ color: 'var(--ink-secondary)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={selId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
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
            ...style,
          }}
          {...rest}
        >
          {children}
        </select>
        <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-muted)', fontSize: '12px' }}>▾</span>
      </div>
      {hint && <span className="dt-caption" style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500, color: 'var(--ink-muted)' }}>{hint}</span>}
    </div>
  );
}
