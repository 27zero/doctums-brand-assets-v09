import React from 'react';

export type BadgeTone = 'neutral' | 'primary' | 'accent' | 'success' | 'danger';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  /** solid = filled; soft = outlined. @default 'soft' */
  variant?: 'solid' | 'soft';
  children?: React.ReactNode;
}

/** Small uppercase status/label chip with micro radius. */
export function Badge(props: BadgeProps): JSX.Element;
