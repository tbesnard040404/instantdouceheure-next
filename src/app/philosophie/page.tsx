import Link from 'next/link'
import { getPhilosophieContent } from '@/lib/content'

export const metadata = {
  title: "Philosophie — Instant Douce'Heure",
  description: "La démarche holistique d'Océane Delannoy-Ferrero, praticienne certifiée depuis 2011.",
}

export default function PhilosophiePage() {
  const c = getPhilosophieContent()

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link><span className="breadcrumb__sep">›</span><span>{c.pageTitle}</span>
          </nav>
          <h1>{c.pageTitle}</h1>
          <p className="sub">{c.pageSubtitle}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="philo-layout">
            <div className="reveal">
              <p className="eyebrow">{c.eyebrow}</p>
              <h2>{c.title}</h2>
              <div className="divider" />
              {c.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="philo-certs">
                {c.certs.map(({ text, sub }) => (
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
                <p className="philo-quote__text">&ldquo;{c.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,var(--forest),var(--sage))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.125rem', color: '#fff', flexShrink: 0 }}>O</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '.9375rem', color: 'var(--dark)', margin: 0 }}>{c.quoteAuthor}</p>
                    <p style={{ fontSize: '.8125rem', color: 'var(--text-muted)', margin: 0 }}>{c.quoteRole}</p>
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
