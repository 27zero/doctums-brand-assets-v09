import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** When true, hover gives a soft shadow + -2px lift. @default false */
  interactive?: boolean;
  padding?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Editorial content container — flat with a hairline border at rest.
 * @startingPoint section="Core" subtitle="Card, flat & interactive" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
