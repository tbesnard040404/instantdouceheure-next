import Link from 'next/link'
import { getCollaborationsContent } from '@/lib/content'

export const metadata = {
  title: "Collaborations — Instant Douce'Heure",
  description: "Les partenaires de cœur d'Océane : Céline Boucher, Jérémy, Marie Matis.",
}

const avClasses = ['av--1', 'av--2', 'av--3']

export default function CollaborationsPage() {
  const c = getCollaborationsContent()

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
          <div className="reveal" style={{ maxWidth: 700, marginBottom: '3.5rem' }}>
            <p className="eyebrow">Des rencontres fondatrices</p>
            <h2 style={{ whiteSpace: 'pre-line' }}>{c.introTitle}</h2>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)' }}>{c.introText}</p>
          </div>

          <div className="collab-grid">
            {c.collabs.map((col, i) => (
              <article key={col.name} className={`collab-card reveal d${i + 1}`}>
                <div className={`collab-card__av ${avClasses[i] ?? avClasses[0]}`}>{col.initials}</div>
                <h3 className="collab-card__name">{col.name}</h3>
                <p className="collab-card__role">{col.role}</p>
                <p className="collab-card__desc">{col.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
