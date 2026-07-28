Official Doctums logo lockups — serif wordmark, sun mark, "Higher Education Consulting" tag. The logo is the brand's structural anchor; never distort, rotate, recolor, add shadows, or invade its clear space.

```jsx
{/* Pick by background — auto-selects an approved variant */}
<Logo background="light" height={48} assetBase="../../assets/logos" />
<Logo background="dark"  height={40} assetBase="assets/logos" />

{/* Or name the variant explicitly (plain key or official number) */}
<Logo variant="01-primary" height={44} />
<Logo variant="mark" height={32} clearSpace />
```

**Background → variant** (brand book): light → 01 Primary / 04 Mono Black · dark → 02 Reverse / 05 Mono White · yellow → 03 On Yellow · cyan → 06 On Cyan.

**Minimums:** tagged lockup ≥160px wide (else drop the tagline — its cap-height must stay ≥10px screen / 6pt print); main lockup ≥80px tall; symbol-only (`mark`) ≥16px favicon / ≥32px app icon. `clearSpace` reserves the mandatory 1× (sun-symbol height) protection zone. `assetBase` must point at /assets/logos relative to the page.
