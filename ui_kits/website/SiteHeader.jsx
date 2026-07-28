// Doctums marketing site — top navigation
function SiteHeader({ onNav, active }) {
  const links = ['Approach', 'Services', 'Outcomes', 'Insights'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(252,253,254,0.86)', backdropFilter: 'saturate(180%) blur(8px)', borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav('home');}} style={{ display: 'flex' }}>
          <img src="../../assets/logos/logo-primary.png" alt="Doctums" style={{ height: 34 }} />
        </a>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l} href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav(l);}}
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', color: active===l ? 'var(--ink-primary)' : 'var(--ink-muted)' }}>
              {l}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={()=>onNav&&onNav('contact')}>Talk to us</Button>
        </nav>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
