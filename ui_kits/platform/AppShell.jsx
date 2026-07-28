// Doctums platform — app shell (sidebar + topbar)
function AppShell({ active, onNav, children }) {
  const nav = [
    { id: 'overview', label: 'Overview' },
    { id: 'programs', label: 'Programs' },
    { id: 'cohorts', label: 'Cohorts' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'analytics', label: 'Analytics' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '232px 1fr', minHeight: '100vh', background: 'var(--canvas)' }}>
      <aside style={{ borderRight: '1px solid var(--hairline)', background: 'var(--surface-card)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid var(--hairline)' }}>
          <img src="../../assets/logos/logo-primary.png" alt="Doctums" style={{ height: 28 }} />
        </div>
        <nav style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {nav.map((n) => {
            const on = n.id === active;
            return (
              <a key={n.id} href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav(n.id);}}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 4, textDecoration: 'none',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, letterSpacing: '0.01em',
                  color: on ? 'var(--ink-primary)' : 'var(--ink-muted)', background: on ? 'var(--surface-sunken)' : 'transparent',
                  borderLeft: '2px solid ' + (on ? 'var(--accent)' : 'transparent') }}>
                {n.label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginTop: 'auto', padding: 16, borderTop: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name="María Restrepo" size={34} />
          <div style={{ lineHeight: 1.3 }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ink-primary)' }}>María Restrepo</div>
            <div className="dt-overline" style={{ textTransform: 'none', letterSpacing: 0 }}>Vicerrectoría</div>
          </div>
        </div>
      </aside>
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid var(--hairline)', background: 'rgba(252,253,254,0.86)', backdropFilter: 'blur(8px)' }}>
          <div>
            <div className="dt-caption" style={{ color: 'var(--accent)' }}>Universidad Nacional</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', margin: '2px 0 0', textTransform: 'capitalize' }}>{active}</h1>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Button variant="ghost" size="sm">Export</Button>
            <Button variant="primary" size="sm">New program</Button>
          </div>
        </header>
        <div style={{ padding: 32, flex: 1 }}>{children}</div>
      </main>
    </div>
  );
}
window.AppShell = AppShell;
