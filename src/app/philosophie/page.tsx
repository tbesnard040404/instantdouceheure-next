import Link from 'next/link'

export const metadata = {
  title: "Philosophie — Instant Douce'Heure",
  description: "La démarche holistique d'Océane Delannoy-Ferrero, praticienne certifiée depuis 2011.",
}

export default function PhilosophiePage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link><span className="breadcrumb__sep">›</span><span>Philosophie</span>
          </nav>
          <h1>Ma Philosophie</h1>
          <p className="sub">Une approche holistique du bien-être, née d&apos;une vocation d&apos;enfance</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="philo-layout">
            <div className="reveal">
              <p className="eyebrow">Ma démarche</p>
              <h2>Le massage... une technique pour certains, <em>une philosophie pour d&apos;autres</em></h2>
              <div className="divider" />
              <p>Passionnée de massage depuis l&apos;enfance, j&apos;ai d&apos;abord suivi mon intuition avant de formaliser mon apprentissage. Après des études en éducation environnementale, j&apos;ai entrepris une formation professionnelle en massage bien-être en 2011.</p>
              <p>En 2014, j&apos;ai rencontré Renato Pappalardo et commencé une formation continue en Chin Daï, une discipline qui développe l&apos;auto-compréhension et la connaissance du monde environnant.</p>
              <p>Au fil des années, je suis passée du statut de praticienne en massage à celui d&apos;<strong>accompagnante du vivant</strong> — cherchant toujours la posture juste, le toucher juste, une meilleure compréhension de soi et de l&apos;autre.</p>
              <p>Aujourd&apos;hui, je propose des séances individuelles, des ateliers collectifs de plusieurs heures et des retraites de plusieurs jours — autant d&apos;espaces pour explorer, ressentir et se reconnecter à soi.</p>

              <div className="philo-certs">
                {[
                  { text: 'Certificat de Formation — Novembre 2011', sub: 'Centre de Formation Hypothénuse · Paris' },
                  { text: 'Certificat de Formation — Juillet 2015', sub: 'Centre de Formation Biopulse · Paris' },
                  { text: 'Formation continue en Chin Daï', sub: 'Avec Renato Pappalardo · Depuis 2014' },
                ].map(({ text, sub }) => (
                  <div key={text} className="cert">
                    <span className="cert__icon">🎓</span>
                    <div>
                      <span className="cert__text">{text}</span>
                      <span className="cert__sub">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal d2">
              <div className="philo-quote">
                <p className="philo-quote__text">
                  &ldquo;Prendre soin de son corps, c&apos;est honorer le temple de son âme. Chaque séance est une invitation à revenir à soi — à s&apos;écouter, à se reconnecter profondément au vivant.&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,var(--forest),var(--sage))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.125rem', color: '#fff', flexShrink: 0 }}>O</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--dark)', margin: 0 }}>Océane Delannoy-Ferrero</p>
                    <p style={{ fontSize: '.8125rem', color: 'var(--text-muted)', margin: 0 }}>Praticienne en massage bien-être &amp; soins énergétiques</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', background: 'var(--forest-pale)', borderRadius: 'var(--r-lg)', padding: '2rem' }}>
                <p className="eyebrow">Ce que je propose</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.875rem', marginTop: '.5rem' }}>
                  {[
                    ['Séances individuelles', 'de massage et soins énergétiques'],
                    ['Ateliers collectifs', 'de plusieurs heures en groupe'],
                    ['Retraites', 'immersives de plusieurs jours en nature'],
                    ['Abonnements', 'pour un suivi régulier et personnalisé'],
                  ].map(([bold, rest]) => (
                    <li key={bold} style={{ display: 'flex', gap: '.75rem', fontSize: '.9375rem' }}>
                      <span style={{ color: 'var(--forest)', fontSize: '1.125rem' }}>→</span>
                      <span><strong>{bold}</strong> {rest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
