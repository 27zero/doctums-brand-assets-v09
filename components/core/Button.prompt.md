Primary action control — flat at rest, soft tactile shadow on hover. Use `primary` (Doctums Yellow) for the single main CTA per view; `secondary` (Marine Blue outline) and `ghost` for lower emphasis.

```jsx
<Button variant="primary">Request a review</Button>
<Button variant="secondary" size="lg">View framework</Button>
<Button variant="ghost" iconLeft={<span>←</span>}>Back</Button>
<Button variant="link">Read the case</Button>
```

Props: `variant` (primary | secondary | ghost | link), `size` (sm | md | lg), `disabled`, `fullWidth`, `iconLeft`, `iconRight`.
