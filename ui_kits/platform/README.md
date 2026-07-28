# Doctums — Platform UI Kit (Institution Dashboard)

The admin surface of the Doctums learning platform: how a Vicerrectoría / registrar sees programs, cohorts, and enrollment analytics. Flat, data-first, hairline-structured — shadows only on interaction.

## Run
Open `index.html`. Loads `../../_ds_bundle.js` + `styles.css`, then mounts the shell. Sidebar items switch the header title (content is the Overview by design).

## Files
- `index.html` — composition + mount
- `AppShell.jsx` — sidebar nav + sticky topbar + user block
- `Dashboard.jsx` — stat row, programs table with fill bars + status badges, enrollment sparkbars, activity feed

## Components used
Button, Card, Badge, Tabs, Avatar, Stat from `window.DoctumsDesignSystem_9e6b2a`.
