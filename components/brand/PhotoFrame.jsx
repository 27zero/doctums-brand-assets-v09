import React from 'react';

/**
 * Brand photo frame — applies the Doctums photographic treatment: warm
 * desaturation + the golden→cyan gradient overlay at ~30%. Optional caption.
 */
export function PhotoFrame({ src, alt = '', ratio = '16 / 9', overlay = true, grade = true, caption = null, radius = 'var(--radius-base)', style = {}, ...rest }) {
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div style={{ position: 'relative', aspectRatio: ratio, overflow: 'hidden', borderRadius: radius, background: 'var(--surface-sunken)' }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: grade ? 'saturate(0.82) contrast(0.96) brightness(1.02)' : 'none',
          }}
        />
        {overlay && <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-photo-overlay)', mixBlendMode: 'multiply' }} />}
      </div>
      {caption && (
        <figcaption className="dt-caption" style={{ marginTop: '8px', textTransform: 'none', letterSpacing: 0, fontWeight: 500, color: 'var(--ink-muted)' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
