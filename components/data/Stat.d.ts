import React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: string;
  /** Render the value in Marine Blue. @default false */
  accent?: boolean;
  sub?: React.ReactNode;
}

/** Large editorial metric — serif numeral over an uppercase caption label. */
export function Stat(props: StatProps): JSX.Element;
