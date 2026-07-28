// Doctums marketing site — hero (editorial, golden canon anchored)
function Hero({ onNav }) {
  return (
    <section style={{ borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 64, alignItems: 'center', minHeight: 560 }}>
          <div>
            <div className="dt-caption" style={{ color: 'var(--accent)' }}>Higher Education Consulting</div>
            <h1 className="dt-display" style={{ fontSize: 60, margin: '20px 0 0' }}>
              Digital learning,<br/>built for how<br/>institutions <span style={{ fontStyle: 'italic' }}>actually run.</span>
            </h1>
            <p className="dt-body" style={{ marginTop: 24, fontSize: 18 }}>
              We design and implement advanced, cloud-based learning ecosystems for institutions, educators, and students across the region — measurable, scalable, and accessible from anywhere.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <Button variant="primary" size="lg" onClick={()=>onNav&&onNav('contact')}>Request a review</Button>
              <Button variant="secondary" size="lg" onClick={()=>onNav&&onNav('Services')}>Explore services</Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <PhotoFrame src="../../assets/imagery/architecture-01.png" alt="Campus architecture" ratio="4 / 5" />
            <div style={{ position: 'absolute', left: -24, bottom: 28, background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 4, padding: '16px 20px', boxShadow: 'var(--elevation-interactive)' }}>
              <Stat value="120+" label="Institutions served" accent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
