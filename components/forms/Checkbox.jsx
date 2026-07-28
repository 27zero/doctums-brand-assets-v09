import React from 'react';

/** Square checkbox — micro radius, Marine-Blue fill when checked. */
export function Checkbox({ label = null, checked, defaultChecked, disabled = false, onChange, id, ...rest }) {
  const cbId = id || (label ? `cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label htmlFor={cbId} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
      <input
        id={cbId}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        style={{
          appearance: 'none',
          width: '18px',
          height: '18px',
          margin: 0,
          border: '1px solid var(--hairline-strong)',
          borderRadius: 'var(--radius-micro)',
          background: 'var(--surface-card)',
          display: 'grid',
          placeItems: 'center',
          cursor: 'inherit',
        }}
        {...rest}
      />
      {label && <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--ink-primary)' }}>{label}</span>}
      <style>{`#${cbId}:checked{background:var(--accent);border-color:var(--accent)}#${cbId}:checked::after{content:"";width:5px;height:9px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);margin-top:-2px}#${cbId}:focus-visible{outline:none;box-shadow:var(--focus-ring)}`}</style>
    </label>
  );
}
