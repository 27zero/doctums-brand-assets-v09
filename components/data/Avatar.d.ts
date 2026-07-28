import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  src?: string | null;
  /** px, square. @default 40 */
  size?: number;
}

/** Square avatar (micro radius) showing an image or derived initials. */
export function Avatar(props: AvatarProps): JSX.Element;
