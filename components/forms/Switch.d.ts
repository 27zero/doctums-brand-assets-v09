import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (next: boolean) => void;
  id?: string;
}

/** Toggle switch with a square-ish track, matching the flat architectural system. */
export function Switch(props: SwitchProps): JSX.Element;
