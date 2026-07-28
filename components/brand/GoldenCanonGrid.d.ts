import React from 'react';

export interface GoldenCanonGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Guide-line color. @default 'var(--accent)' */
  color?: string;
  /** @default 0.18 */
  opacity?: number;
  /** Draw the canon diagonals. @default true */
  diagonals?: boolean;
  /** Also draw rule-of-thirds verticals. @default false */
  showThirds?: boolean;
}

/**
 * Golden Canon Grid overlay — the structural backbone behind Doctums layouts.
 * Place inside a position:relative container as a decorative guide layer.
 */
export function GoldenCanonGrid(props: GoldenCanonGridProps): JSX.Element;
