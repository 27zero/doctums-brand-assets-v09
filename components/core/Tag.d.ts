import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  /** Show an × and call this on click. */
  onRemove?: (() => void) | null;
  children?: React.ReactNode;
}

/** Filter/category tag — removable chip with hairline border. */
export function Tag(props: TagProps): JSX.Element;
