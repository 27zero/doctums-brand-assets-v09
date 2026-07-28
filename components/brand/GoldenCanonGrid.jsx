import React from 'react';

/**
 * Golden Canon Grid overlay — the structural backbone of every Doctums layout.
 * Draws golden-section vertical/horizontal guides plus canon diagonals over
 * its positioned parent. Decorative; place inside a `position:relative` box.
 */
export function GoldenCanonGrid({ color = 'var(--accent)', opacity = 0.18, diagonals = true, showThirds = false, style = {}, ...rest }) {
  const phi = 0.618;
  const vx = [phi, 1 - phi].map((v) => v * 100);
  const hy = [phi, 1 - phi].map((v) => v * 100);
  const thirds = showThirds ? [33.333, 66.666] : [];
  const line = (o) => ({ position: 'absolute', background: color, ...o });
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity, overflow: 'hidden', ...style }} {...rest}>
      {/* Outer frame */}
      <div style={{ position: 'absolute', inset: 0, border: `1px solid ${color}` }} />
      {/* Golden vertical guides */}
      {vx.map((x, i) => <div key={'v' + i} style={line({ top: 0, bottom: 0, left: `${x}%`, width: '1px' })} />)}
      {/* Golden horizontal guides */}
      {hy.map((y, i) => <div key={'h' + i} style={line({ left: 0, right: 0, top: `${y}%`, height: '1px' })} />)}
      {/* Optional thirds */}
      {thirds.map((x, i) => <div key={'t' + i} style={line({ top: 0, bottom: 0, left: `${x}%`, width: '1px', opacity: 0.5 })} />)}
      {/* Canon diagonals */}
      {diagonals && (
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <line x1="0" y1="0" x2="100" y2="100" stroke={color} strokeWidth="0.2" />
          <line x1="100" y1="0" x2="0" y2="100" stroke={color} strokeWidth="0.2" />
          <line x1="0" y1="0" x2="100" y2="61.8" stroke={color} strokeWidth="0.2" />
          <line x1="100" y1="0" x2="0" y2="61.8" stroke={color} strokeWidth="0.2" />
        </svg>
      )}
    </div>
  );
}
