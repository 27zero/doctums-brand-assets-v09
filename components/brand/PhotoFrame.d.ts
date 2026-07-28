import React from 'react';

export interface PhotoFrameProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  /** CSS aspect-ratio. @default '16 / 9' */
  ratio?: string;
  /** Golden→cyan 30% gradient overlay. @default true */
  overlay?: boolean;
  /** Warm desaturated color grade. @default true */
  grade?: boolean;
  caption?: React.ReactNode;
  radius?: string;
}

/**
 * Brand image frame applying the Doctums photographic treatment.
 * @startingPoint section="Brand" subtitle="Photo with brand gradient treatment" viewport="700x420"
 */
export function PhotoFrame(props: PhotoFrameProps): JSX.Element;
