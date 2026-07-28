import React from 'react';

/**
 * Doctums Button — flat at rest, tactile shadow on hover.
 * Variants: primary (Doctums Yellow), secondary (outline), ghost, link.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '12px' },
    md: { padding: '12px 24px', fontSize: '14px' },
    lg: { padding: '16px 32px', fontSize: '16px' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-base)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'box-shadow 200ms cubic-bezier(0.2,0,0,1), background-color 200ms, color 200ms',
    boxShadow: 'none',
    ...sizes[size],
  };

  const variants = {
    primary: { background: 'var(--primary)', color: 'var(--on-primary)' },
    secondary: { background: 'transparent', color: 'var(--accent)', borderColor: 'var(--accent)' },
    ghost: { background: 'transparent', color: 'var(--ink-primary)' },
    link: { background: 'transparent', color: 'var(--link)', padding: '0', borderRadius: 0 },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle =
    !disabled && hover
      ? variant === 'secondary'
        ? { background: 'color-mix(in srgb, var(--accent) 10%, transparent)' }
        : variant === 'ghost'
        ? { background: 'var(--surface-sunken)' }
        : variant === 'link'
        ? { textDecoration: 'underline' }
        : { boxShadow: 'var(--elevation-interactive)' }
      : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
