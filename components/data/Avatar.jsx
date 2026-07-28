import React from 'react';

/** Avatar — initials or image, square with micro radius (architectural, not circular). */
export function Avatar({ name = '', src = null, size = 40, style = {}, ...rest }) {
  const initials = name.split(' ').map((p) => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
