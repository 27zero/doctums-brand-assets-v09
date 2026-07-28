import React from 'react';

export type LogoVariant =
  // No tagline
  | 'primary'           // yellow sun + dark text  → light bg
  | 'primary-white'     // yellow sun + white text → dark bg
  | 'mono-white'        // all white               → dark bg
  | 'mono-black'        // all dark                → light bg
  // With tagline
  | 'primary-tag'
  | 'primary-white-tag'
  | 'mono-white-tag'
  | 'mono-black-tag'
  // Official numbered (brand book)
  | '01-primary' | '02-reverse' | '03-on-yellow'
  | '04-mono-black' | '05-mono-white' | '06-on-cyan'
  // Services & co-branding
  | 'services-1line' | 'services-2lines'
  | 'cobrand-sf' | 'cobrand-sm';

export type LogoBackground = 'light' | 'dark' | 'yellow' | 'cyan';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Explicit lockup key. */
  variant?: LogoVariant;
  /** Auto-select approved variant from surface. Overridden by `variant`. */
  background?: LogoBackground;
  height?: number;
  width?: number | null;
  /** Reserve 1× clear-space protection zone. */
  clearSpace?: boolean;
  /** Path to /assets/logos relative to the consuming page. @default 'assets/logos' */
  assetBase?: string;
}

/**
 * Official Doctums logo — 8 masters + services/cobrand lockups.
 * CSS embedded in each SVG; no extra stylesheet required.
 * @startingPoint section="Brand" subtitle="Logo variants by background" viewport="700x160"
 */
export function Logo(props: LogoProps): JSX.Element;
