import React from 'react';

/** Toggle switch. Square-ish track (2px radius) to match the flat, architectural system. */
export function Switch({ checked, defaultChecked, disabled = false, onChange, label = null, id, ...rest }) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const swId = id || (label ? `sw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label htmlFor={swId} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
      <button
        id={swId}
        role="switch"
        aria-checked={isOn}
        disabled={disabled}
        onClick={(e) => { e.preventDefault(); if (disabled) return; if (checked === undefined) setInternal(!isOn); onChange && onChange(!isOn); }}
        style={{
          width: '40px',
          height: '22px',
          borderRadius: '2px',
          border: '1px solid ' + (isOn ? 'var(--accent)' : 'var(--hairline-strong)'),
          background: isOn ? 'var(--accent)' : 'var(--surface-card)',
          position: 'relative',
          cursor: 'inherit',
          transition: 'background 200ms cubic-bezier(0.2,0,0,1)',
          padding: 0,
        }}
        {...rest}
      >
        <span style={{ position: 'absolute', top: '2px', left: isOn ? '20px' : '2px', width: '16px', height: '16px', borderRadius: '1px', background: isOn ? '#fff' : 'var(--ink-muted)', transition: 'left 200ms cubic-bezier(0.2,0,0,1)' }} />
      </button>
      {label && <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--ink-primary)' }}>{label}</span>}
    </label>
  );
}
