import React from 'react';

/** Filter/category tag — removable chip with hairline border. */
export function Tag({ children, onRemove = null, active = false, style = {}, ...rest }) {
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'inherit', fontSize: '14px', lineHeight: 1, padding: 0 }}>
          ×
        </button>
      )}
    </span>
  );
}
