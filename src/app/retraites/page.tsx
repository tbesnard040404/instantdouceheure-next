import Link from 'next/link'

export const metadata = {
  title: "Retraites — Instant Douce'Heure",
  description: "Retraites bien-être en nature normande, en collaboration avec Sevdha Harmony. Deux espaces sécurisés pour se retrouver.",
}

export default function RetraitesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Retraites</span>
          </nav>
          <h1>Retraites</h1>
          <p className="sub">Des espaces pour se retrouver, au cœur de la nature normande</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: '3.5rem' }}>
            <p className="eyebrow">En collaboration avec Sevdha Harmony</p>
            <h2>Deux femmes, deux univers<br />complémentaires</h2>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)' }}>
              &ldquo;Cette collaboration est avant tout une rencontre entre deux femmes, entre deux univers différents et complémentaires.&rdquo; Nous co-créons des espaces sécurisés et bienveillants où chaque activité est pensée comme une synergie cohérente, tout en restant flexible selon les besoins du groupe.
            </p>
          </div>

          <div className="retreat-grid">
            <article className="retreat-card reveal d1" style={{ minHeight: 480 }}>
              <div className="retreat-card__bg retreat-card__bg--f" aria-hidden="true" />
              <div className="retreat-card__overlay" aria-hidden="true" />
              <div className="retreat-card__content">
                <span className="retreat-card__tag">Réservé aux femmes</span>
                <h3 className="retreat-card__title">Retrouver son pouvoir féminin</h3>
                <div className="retreat-card__meta">
                  <span>🗓 2026 · Dates à venir</span>
                  <span>📍 Nature normande</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
                  {['🌸 Soins Rebozo', '🌿 Yoni steam', '🤲 Massages', '🎨 Ateliers créatifs'].map((item) => (
                    <li key={item} style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.78)' }}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact?sujet=Retraites+2026" className="btn btn--sand btn--sm">Me contacter pour les dates</Link>
              </div>
            </article>

            <article className="retreat-card reveal d2" style={{ minHeight: 480 }}>
              <div className="retreat-card__bg retreat-card__bg--e" aria-hidden="true" />
              <div className="retreat-card__overlay" aria-hidden="true" />
              <div className="retreat-card__content">
                <span className="retreat-card__tag">Mixte · Novembre 2026</span>
                <h3 className="retreat-card__title">Le chemin des 5 éléments</h3>
                <div className="retreat-card__meta">
                  <span>🗓 Novembre 2026</span>
                  <span>👥 Retraite mixte</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
                  {['🤲 Massages', '💃 Danse libre', '✨ Travail énergétique', '🍫 Cérémonie cacao'].map((item) => (
                    <li key={item} style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.78)' }}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact?sujet=Retraites+2026" className="btn btn--sand btn--sm">Me contacter</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
