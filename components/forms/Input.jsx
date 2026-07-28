import React from 'react';

/** Minimalist text field. 48px locked height; 2px focus border in Marine Blue. */
export function Input({
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} className="dt-caption" style={{ color: 'var(--ink-secondary)' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
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
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span
          className="dt-caption"
          style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500, color: error ? 'var(--signal-red)' : 'var(--ink-muted)' }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
