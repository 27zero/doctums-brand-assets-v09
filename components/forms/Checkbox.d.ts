import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/** Square checkbox — micro radius, Marine-Blue fill when checked. */
export function Checkbox(props: CheckboxProps): JSX.Element;
