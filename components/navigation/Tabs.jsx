import React from 'react';

/** Editorial underline tabs — active tab marked by a Marine-Blue rule. */
export function Tabs({ tabs = [], value, defaultValue, onChange, style = {}, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  return (
    <div role="tablist" style={{ display: 'flex', gap: '28px', borderBottom: 'var(--border-hairline)', ...style }} {...rest}>
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => { if (value === undefined) setInternal(t.id); onChange && onChange(t.id); }}
            style={{
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
              transition: 'color 200ms, border-color 200ms',
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
