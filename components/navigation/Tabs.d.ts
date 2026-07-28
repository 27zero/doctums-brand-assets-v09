import React from 'react';

export interface TabItem { id: string; label: string; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
}

/** Editorial underline tabs — active tab marked by a Marine-Blue rule. */
export function Tabs(props: TabsProps): JSX.Element;
