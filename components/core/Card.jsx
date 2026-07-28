import React from 'react';

/**
 * Content container. Flat at rest (hairline border only). When `interactive`,
 * gains tactile shadow + a -2px lift on hover.
 */
export function Card({ interactive = false, padding = 'var(--space-lg)', as = 'div', children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const lift = interactive && hover;
  return (
    <Tag
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: 'var(--border-hairline)',
        borderRadius: 'var(--radius-base)',
        padding,
        transition: 'box-shadow 200ms cubic-bezier(0.2,0,0,1), transform 200ms cubic-bezier(0.2,0,0,1)',
        boxShadow: lift ? 'var(--elevation-interactive)' : 'none',
        transform: lift ? 'translateY(-2px)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
