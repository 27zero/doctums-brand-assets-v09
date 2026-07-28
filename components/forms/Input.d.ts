import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message — turns border & hint red. */
  error?: string;
}

/**
 * Minimalist text field. 48px locked height, 2px Marine-Blue focus border, no glow.
 * @startingPoint section="Forms" subtitle="Text input with label, hint, error" viewport="700x140"
 */
export function Input(props: InputProps): JSX.Element;
