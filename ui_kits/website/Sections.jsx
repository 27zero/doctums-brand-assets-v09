// Doctums marketing site — services + proof + insights + CTA + footer
function Services() {
  const items = [
    { n: '01', t: 'Platform implementation', d: 'Stand up scalable, high-performance learning platforms in the cloud — integrated with the systems you already run.' },
    { n: '02', t: 'Academic transformation', d: 'Move static academic models to dynamic, measurable experiences without disrupting operational continuity.' },
    { n: '03', t: 'Faculty enablement', d: 'Equip educators with the tooling and practice to teach well at scale, with data they can act on.' },
    { n: '04', t: 'Governance & analytics', d: 'Instrument outcomes end to end: enrollment, retention, and learning, on dashboards leaders trust.' },
  ];
  return (
    <section style={{ borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px' }}>
        <div className="dt-caption" style={{ color: 'var(--accent)' }}>What we do</div>
        <h2 className="dt-headline" style={{ fontSize: 42, margin: '12px 0 48px', maxWidth: 720 }}>Specific work, measured against real delivery.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--hairline)', border: '1px solid var(--hairline)', borderRadius: 4, overflow: 'hidden' }}>
          {items.map((it) => (
            <div key={it.n} style={{ background: 'var(--surface-card)', padding: 32 }}>
              <div className="dt-mono" style={{ color: 'var(--accent)' }}>{it.n}</div>
              <h3 className="dt-h4" style={{ margin: '14px 0 8px' }}>{it.t}</h3>
              <p className="dt-body" style={{ fontSize: 15 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section style={{ background: 'var(--doctums-black)', color: 'var(--ink-inverse)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div className="dt-caption" style={{ color: 'var(--primary)' }}>Outcomes, not hype</div>
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 34, lineHeight: 1.3, letterSpacing: '-0.01em', margin: '16px 0 0' }}>
            "Doctums rebuilt our enrollment flow around how our registrar actually works. We cut the cycle by more than a third in one term."
          </blockquote>
          <div className="dt-caption" style={{ marginTop: 24, color: 'rgba(255,255,255,0.6)' }}>Vicerrectoría Académica · Regional University</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <Stat value="38%" label="Faster enrollment cycle" />
          <Stat value="4.8" label="Avg. satisfaction" sub="of 5.0" />
          <Stat value="99.9%" label="Platform uptime" />
          <Stat value="24/7" label="Access, anywhere" />
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const posts = [
    { img: '../../assets/imagery/students-02.png', tag: 'Operations', t: 'Designing enrollment for the registrar, not the brochure' },
    { img: '../../assets/imagery/movement-02.png', tag: 'Analytics', t: 'The retention metrics that actually move' },
    { img: '../../assets/imagery/architecture-03.png', tag: 'Platform', t: 'Integration before innovation: a sequencing guide' },
  ];
  return (
    <section style={{ borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div className="dt-caption" style={{ color: 'var(--accent)' }}>Insights</div>
            <h2 className="dt-headline" style={{ fontSize: 42, margin: '12px 0 0' }}>From the practice.</h2>
          </div>
          <Button variant="link">All insights →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {posts.map((p) => (
            <Card key={p.t} interactive padding="0" style={{ overflow: 'hidden' }}>
              <PhotoFrame src={p.img} alt="" ratio="16 / 10" radius="0" />
              <div style={{ padding: 20 }}>
                <div className="dt-caption" style={{ color: 'var(--accent)' }}>{p.tag}</div>
                <h3 className="dt-h4" style={{ fontSize: 20, margin: '10px 0 0' }}>{p.t}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onNav }) {
  return (
    <section id="contact">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px' }}>
        <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--hairline)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-brand)', opacity: 0.12 }} />
          <div style={{ position: 'relative', padding: '64px 48px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="dt-headline" style={{ fontSize: 40, margin: 0 }}>Let's look at your operation.</h2>
              <p className="dt-body" style={{ fontSize: 18, marginTop: 16 }}>Tell us where the friction is. We'll come back with a specific, sequenced read — no hype, no boilerplate.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Input label="Institution" placeholder="e.g. Universidad Nacional" />
              <Input label="Work email" type="email" placeholder="you@institution.edu" />
              <Button variant="primary" size="lg" fullWidth onClick={()=>onNav&&onNav('home')}>Request a review</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background: 'var(--doctums-black)', color: 'rgba(255,255,255,0.7)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <img src="../../assets/logos/logo-mono-white.png" alt="Doctums" style={{ height: 40 }} />
        <div className="dt-caption" style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026 Doctums · Higher Education Consulting</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Services, Proof, Insights, CTA, SiteFooter });
