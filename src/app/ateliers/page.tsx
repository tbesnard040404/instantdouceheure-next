import Link from 'next/link'
import type { ReactNode } from 'react'
import { getAteliersContent } from '@/lib/content'

export const metadata = {
  title: "Ateliers Nature & Jardin — Instant Douce'Heure",
  description: "Ateliers bien-être au cabinet du Havre et ateliers Ve'j'tal au domaine Milélé, en forêt normande.",
}

const EMAIL = 'oceane.delannoy.ferrero@gmail.com'
const DELAYS = ['d1', 'd2', 'd3']
const svgProps = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'var(--forest)',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  style: { width: 34, height: 34 },
  'aria-hidden': true,
}

const ICONS: Record<string, ReactNode> = {
  'bien-etre': (
    <svg {...svgProps}>
      <circle cx="16" cy="7" r="3.5" />
      <line x1="16" y1="10.5" x2="16" y2="18" />
      <path d="M16 14 L9 17 M16 14 L23 17" />
      <path d="M16 18 Q11 20 7 19 Q9 26 16 24 Q23 26 25 19 Q21 20 16 18Z" />
    </svg>
  ),
  tente: (
    <svg {...svgProps}>
      <path d="M4 26 L16 6 L28 26Z" />
      <path d="M12 26 Q13 21 16 19 Q19 21 20 26" />
      <line x1="4" y1="26" x2="28" y2="26" />
      <line x1="16" y1="6" x2="16" y2="19" />
    </svg>
  ),
  feuille: (
    <svg {...svgProps}>
      <path d="M8 26 Q8 10 22 6 C27 12 24 22 14 26Z" />
      <line x1="8" y1="26" x2="22" y2="12" />
      <path d="M14 20 L10 24" />
      <path d="M18 14 L12 22" />
    </svg>
  ),
  pousse: (
    <svg {...svgProps}>
      <rect x="10" y="22" width="12" height="6" rx="2" />
      <line x1="16" y1="22" x2="16" y2="14" />
      <path d="M16 18 Q10 14 8 6 C14 7 18 12 16 18Z" />
      <path d="M16 16 Q22 12 24 5 C18 6 14 12 16 16Z" />
    </svg>
  ),
  fleur: (
    <svg {...svgProps}>
      <path d="M16 26 C16 26 5 19 5 11 C5 6 10 4 16 10 C22 4 27 6 27 11 C27 19 16 26 16 26Z" />
      <line x1="16" y1="26" x2="16" y2="10" />
      <path d="M10 18 L16 14 M22 18 L16 14" />
    </svg>
  ),
  coeur: (
    <svg {...svgProps}>
      <path d="M16 27 C16 27 4 19 4 11 C4 7 7 4 11 4 C13 4 15 5 16 7 C17 5 19 4 21 4 C25 4 28 7 28 11 C28 19 16 27 16 27Z" />
    </svg>
  ),
  lotus: (
    <svg {...svgProps}>
      <path d="M16 24 Q10 14 12 6 Q16 10 16 24Z" />
      <path d="M16 24 Q22 14 20 6 Q16 10 16 24Z" />
      <path d="M16 24 Q6 17 7 9 Q13 12 16 24Z" />
      <path d="M16 24 Q26 17 25 9 Q19 12 16 24Z" />
      <line x1="9" y1="26" x2="23" y2="26" />
    </svg>
  ),
  arbre: (
    <svg {...svgProps}>
      <line x1="16" y1="28" x2="16" y2="17" />
      <path d="M7 20 Q16 5 25 20" />
      <path d="M10 26 Q16 13 22 26" />
      <line x1="11" y1="28" x2="21" y2="28" />
    </svg>
  ),
  mains: (
    <svg {...svgProps}>
      <path d="M4 22 L10 22 L10 16 Q10 13 13 13 L16 13 L16 13 Q19 13 19 16 L19 22 L25 22" />
      <path d="M10 22 Q13 26 16 22 Q19 26 22 22" />
      <line x1="13" y1="13" x2="13" y2="9" />
      <line x1="16" y1="13" x2="16" y2="8" />
      <line x1="19" y1="13" x2="19" y2="9" />
    </svg>
  ),
}

const listStyle = { margin: '0 0 1.25rem', paddingLeft: '1.25rem', lineHeight: 1.75, listStyle: 'disc' } as const

function mailto(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
}

export default function AteliersPage() {
  const c = getAteliersContent()
  const cab = c.cabinet

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Ateliers</span>
          </nav>
          <h1>{c.pageTitle}</h1>
          <p className="sub">{c.pageSubtitle}</p>
        </div>
      </header>

      {cab?.visible && cab.title && (
        <section className="section section--alt" aria-labelledby="bien-etre-a-deux-title">
          <div className="container">
            <div id="bien-etre-a-deux" className="atelier-cabinet reveal" style={{ maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
              {cab.eyebrow && <p className="eyebrow">{cab.eyebrow}</p>}
              <h2 id="bien-etre-a-deux-title">{cab.title}</h2>
              <div className="divider" />
              {cab.text && (
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', whiteSpace: 'pre-line' }}>{cab.text}</p>
              )}
              {!!cab.details?.length && (
                <ul style={{ ...listStyle, margin: '1.25rem 0' }}>
                  {cab.details.map((d, i) => (
                    <li key={i}>
                      {d.label && <strong>{d.label} : </strong>}
                      {d.value}
                    </li>
                  ))}
                </ul>
              )}
              {!!cab.includes?.length && (
                <>
                  {cab.includesTitle && <p style={{ fontWeight: 600, marginBottom: '.5rem' }}>{cab.includesTitle}</p>}
                  <ul style={listStyle}>
                    {cab.includes.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </>
              )}
              {!!cab.activities?.length && (
                <>
                  {cab.activitiesTitle && <p style={{ fontWeight: 600, marginBottom: '.5rem' }}>{cab.activitiesTitle}</p>}
                  <ul style={{ ...listStyle, marginBottom: '1.75rem' }}>
                    {cab.activities.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
                {cab.ctaLink ? (
                  <a href={cab.ctaLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                    {cab.ctaLabel || 'Réserver'}
                  </a>
                ) : (
                  <a href={mailto(cab.emailSubject || `Réservation ${cab.title}`)} className="btn btn--primary">
                    {cab.ctaLabel || 'Réserver par email'}
                  </a>
                )}
                <a href="tel:+33618980522" className="btn btn--secondary">06 18 98 05 22</a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: '3.5rem' }}>
            <p className="eyebrow">{c.introEyebrow}</p>
            <h2 style={{ whiteSpace: 'pre-line' }}>{c.introTitle}</h2>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', whiteSpace: 'pre-line' }}>{c.introText}</p>
          </div>

          <div className="ateliers-grid">
            {c.items.map((a, i) => (
              <article key={`${a.title}-${i}`} className={`atelier-card reveal ${DELAYS[i % 3]}`}>
                <div className="atelier-card__head">
                  <span className="atelier-card__emoji">{ICONS[a.icon ?? ''] ?? ICONS.feuille}</span>
                  <div className="atelier-card__price">
                    {a.price}
                    {a.priceUnit && <span>/{a.priceUnit.replace(/^\//, '')}</span>}
                  </div>
                </div>
                <div className="atelier-card__body">
                  <h3 className="atelier-card__title">{a.title}</h3>
                  <p className="atelier-card__desc">{a.desc}</p>
                  {a.date && <p className="atelier-card__date">{a.date}</p>}
                  {a.link ? (
                    <a href={a.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm atelier-card__btn">
                      Réserver ma place
                    </a>
                  ) : (
                    <a href={mailto(`Réservation ${a.title}`)} className="btn btn--primary btn--sm atelier-card__btn">
                      Réserver par email
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {c.promo?.title && (
            <div className="atelier-promo reveal">
              <h3>{c.promo.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{c.promo.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {c.promo.priceBefore && (
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textDecoration: 'line-through', opacity: 0.6 }}>{c.promo.priceBefore}</span>
                )}
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: 'var(--sand-light)' }}>{c.promo.priceAfter}</span>
                <a href={mailto(c.promo.title)} className="btn btn--sand">Profiter de l&apos;offre</a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
