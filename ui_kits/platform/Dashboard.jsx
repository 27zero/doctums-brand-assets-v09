// Doctums platform — dashboard content (stats, programs table, activity)
function Dashboard() {
  const [tab, setTab] = React.useState('active');
  const programs = [
    { name: 'B.Sc. Computer Science', cohort: '2026-A', seats: 240, fill: 92, status: 'Live' },
    { name: 'Executive MBA', cohort: '2026-A', seats: 60, fill: 78, status: 'Live' },
    { name: 'Public Health Diploma', cohort: '2026-B', seats: 120, fill: 41, status: 'Enrolling' },
    { name: 'Data Analytics Cert.', cohort: '2026-B', seats: 180, fill: 12, status: 'Draft' },
  ];
  const toneFor = (s) => (s === 'Live' ? 'success' : s === 'Enrolling' ? 'accent' : 'neutral');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {[
          { v: '12', l: 'Active programs' },
          { v: '3,480', l: 'Enrolled students', a: true },
          { v: '38%', l: 'Faster enroll cycle', a: true },
          { v: '99.9%', l: 'Platform uptime' },
        ].map((s) => (
          <Card key={s.l} padding="20px"><Stat value={s.v} label={s.l} accent={s.a} /></Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24, alignItems: 'start' }}>
        {/* Programs table */}
        <Card padding="0">
          <div style={{ padding: '18px 20px 0' }}>
            <Tabs tabs={[{id:'active',label:'Active'},{id:'enrolling',label:'Enrolling'},{id:'all',label:'All programs'}]} value={tab} onChange={setTab} />
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-serif)' }}>
            <thead>
              <tr>
                {['Program','Cohort','Seats','Fill','Status'].map((h)=>(
                  <th key={h} style={{ textAlign: h==='Seats'||h==='Fill'?'right':'left', padding: '14px 20px', fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-muted)', borderBottom: '1px solid var(--hairline)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {programs.map((p)=>(
                <tr key={p.name}>
                  <td style={{ padding: '16px 20px', fontSize: 15, color: 'var(--ink-primary)', borderBottom: '1px solid var(--gray-100)' }}>{p.name}</td>
                  <td style={{ padding: '16px 20px', fontSize: 14, color: 'var(--ink-secondary)', borderBottom: '1px solid var(--gray-100)' }}>{p.cohort}</td>
                  <td style={{ padding: '16px 20px', fontSize: 14, textAlign: 'right', color: 'var(--ink-secondary)', borderBottom: '1px solid var(--gray-100)' }}>{p.seats}</td>
                  <td style={{ padding: '16px 20px', borderBottom: '1px solid var(--gray-100)', minWidth: 120 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                      <div style={{ flex: 1, height: 6, background: 'var(--gray-150)', borderRadius: 1, overflow: 'hidden' }}>
                        <div style={{ width: p.fill+'%', height: '100%', background: p.fill>70?'var(--accent)':'var(--primary)' }} />
                      </div>
                      <span className="dt-mono" style={{ fontSize: 12, color: 'var(--ink-muted)', width: 34, textAlign: 'right' }}>{p.fill}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', borderBottom: '1px solid var(--gray-100)' }}><Badge tone={toneFor(p.status)} variant="solid">{p.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Side column: activity + enrollment */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card>
            <div className="dt-caption" style={{ marginBottom: 14 }}>Enrollment this term</div>
            <Stat value="+612" label="New enrollments" accent sub="vs. 480 last term" />
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 64, marginTop: 18 }}>
              {[40,52,48,66,72,80,76,90].map((h,i)=>(
                <div key={i} style={{ flex: 1, height: h+'%', background: i===7?'var(--accent)':'var(--gray-200)', borderRadius: 1 }} />
              ))}
            </div>
          </Card>
          <Card>
            <div className="dt-caption" style={{ marginBottom: 14 }}>Recent activity</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Public Health Diploma opened','2h ago'],
                ['Faculty roster synced — 18 added','5h ago'],
                ['Executive MBA reached 78% fill','Yesterday'],
              ].map(([t,when])=>(
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 1, background: 'var(--accent)', marginTop: 7, flex: 'none' }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--ink-primary)' }}>{t}</div>
                    <div className="dt-overline" style={{ textTransform: 'none', letterSpacing: 0, marginTop: 2 }}>{when}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
