import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  children?: React.ReactNode;
}

/** Dropdown select matching Input metrics (48px, micro radius, blue focus). */
export function Select(props: SelectProps): JSX.Element;
