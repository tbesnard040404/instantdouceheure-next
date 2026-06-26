import Link from 'next/link'
import { getRetraitesContent } from '@/lib/content'

export const metadata = {
  title: "Retraites — Instant Douce'Heure",
  description: "Retraites bien-être en nature normande, en collaboration avec Sevdha Harmony.",
}

export default function RetraitesPage() {
  const c = getRetraitesContent()
  const bgClasses = ['retreat-card__bg--f', 'retreat-card__bg--e']

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>{c.pageTitle}</span>
          </nav>
          <h1>{c.pageTitle}</h1>
          <p className="sub">{c.pageSubtitle}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: '3.5rem' }}>
            <p className="eyebrow">{c.introEyebrow}</p>
            <h2 style={{ whiteSpace: 'pre-line' }}>{c.introTitle}</h2>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)' }}>{c.introText}</p>
          </div>

          <div className="retreat-grid">
            {c.retreats.map((r, i) => (
              <article key={r.title} className={`retreat-card reveal d${i + 1}`} style={{ minHeight: 480 }}>
                <div className={`retreat-card__bg ${bgClasses[i] ?? bgClasses[0]}`} aria-hidden="true" />
                <div className="retreat-card__overlay" aria-hidden="true" />
                <div className="retreat-card__content">
                  <span className="retreat-card__tag">{r.tag}</span>
                  <h3 className="retreat-card__title">{r.title}</h3>
                  <div className="retreat-card__meta">
                    <span>🗓 {r.date}</span>
                    <span>📍 {r.location}</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
                    {r.activities.map((act) => (
                      <li key={act} style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.78)' }}>{act}</li>
                    ))}
                  </ul>
                  <Link href="/contact?sujet=Retraites+2026" className="btn btn--sand btn--sm">{r.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
