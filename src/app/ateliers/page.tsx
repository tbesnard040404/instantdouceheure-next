import Link from 'next/link'

export const metadata = {
  title: "Ateliers Nature & Jardin — Instant Douce'Heure",
  description: "Ateliers Ve'j'tal au domaine Milélé, forêt normande. Co-animés par Océane et Jérémy. Jardin, nature, bien-être.",
}

interface AtelierData {
  title: string
  price: string
  priceUnit: string
  desc: string
  date: string
  icon: React.ReactNode
  delay: string
}

const ateliers: AtelierData[] = [
  {
    title: 'Atelier Bien-être',
    price: '80€',
    priceUnit: '/personne',
    desc: 'Sport, méditation, relaxation et massages. Journée de 9h à 17h avec déjeuner végétarien.',
    date: '📅 27 juin · 18 juillet · 5 sept. 2026',
    delay: 'd1',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <circle cx="16" cy="7" r="3.5"/>
        <line x1="16" y1="10.5" x2="16" y2="18"/>
        <path d="M16 14 L9 17 M16 14 L23 17"/>
        <path d="M16 18 Q11 20 7 19 Q9 26 16 24 Q23 26 25 19 Q21 20 16 18Z"/>
      </svg>
    ),
  },
  {
    title: 'Week-end Nature',
    price: '150€',
    priceUnit: '/2 jours',
    desc: 'Randonnée, création intuitive, écriture, dessin, méditation, feu de camp et nuit en tente.',
    date: '📅 15–16 août 2026',
    delay: 'd2',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <path d="M4 26 L16 6 L28 26Z"/>
        <path d="M12 26 Q13 21 16 19 Q19 21 20 26"/>
        <line x1="4" y1="26" x2="28" y2="26"/>
        <line x1="16" y1="6" x2="16" y2="19"/>
      </svg>
    ),
  },
  {
    title: 'Atelier Balade Nature',
    price: '60€',
    priceUnit: 'adulte · 20€ enfant',
    desc: 'Jeux en plein air, randonnée, connexion à la nature, découverte des plantes comestibles.',
    date: '📅 6 juin 2026',
    delay: 'd3',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <path d="M8 26 Q8 10 22 6 C27 12 24 22 14 26Z"/>
        <line x1="8" y1="26" x2="22" y2="12"/>
        <path d="M14 20 L10 24"/>
        <path d="M18 14 L12 22"/>
      </svg>
    ),
  },
  {
    title: 'Atelier Jardin',
    price: '60€',
    priceUnit: '/personne',
    desc: 'Compostage, potager, taille, techniques durables et respectueuses de l\'environnement.',
    date: '📅 17 mai · 21 juin 2026',
    delay: 'd1',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <rect x="10" y="22" width="12" height="6" rx="2"/>
        <line x1="16" y1="22" x2="16" y2="14"/>
        <path d="M16 18 Q10 14 8 6 C14 7 18 12 16 18Z"/>
        <path d="M16 16 Q22 12 24 5 C18 6 14 12 16 16Z"/>
      </svg>
    ),
  },
  {
    title: 'Atelier Déco Nature',
    price: '60€',
    priceUnit: '/personne',
    desc: 'Création avec matériaux naturels, land art et expression artistique au fil de l\'imagination.',
    date: '📅 30 mai · 28 juin 2026',
    delay: 'd2',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <path d="M16 26 C16 26 5 19 5 11 C5 6 10 4 16 10 C22 4 27 6 27 11 C27 19 16 26 16 26Z"/>
        <line x1="16" y1="26" x2="16" y2="10"/>
        <path d="M10 18 L16 14 M22 18 L16 14"/>
      </svg>
    ),
  },
  {
    title: 'Apaiser le Cœur',
    price: '60€',
    priceUnit: '/personne',
    desc: 'Relaxation en forêt, création d\'une statue Jizo, exercices en binôme, cérémonie cacao.',
    date: '📅 8 août 2026',
    delay: 'd3',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <path d="M16 27 C16 27 4 19 4 11 C4 7 7 4 11 4 C13 4 15 5 16 7 C17 5 19 4 21 4 C25 4 28 7 28 11 C28 19 16 27 16 27Z"/>
      </svg>
    ),
  },
  {
    title: 'Connexion à Soi',
    price: '60€',
    priceUnit: '/personne',
    desc: 'Massage, soins énergétiques, exercices d\'écriture des ombres et méditation guidée.',
    date: '📅 23 mai 2026',
    delay: 'd1',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <path d="M16 24 Q10 14 12 6 Q16 10 16 24Z"/>
        <path d="M16 24 Q22 14 20 6 Q16 10 16 24Z"/>
        <path d="M16 24 Q6 17 7 9 Q13 12 16 24Z"/>
        <path d="M16 24 Q26 17 25 9 Q19 12 16 24Z"/>
        <line x1="9" y1="26" x2="23" y2="26"/>
      </svg>
    ),
  },
  {
    title: 'Connexion à la Nature',
    price: '60€',
    priceUnit: '/personne',
    desc: 'Marche sensorielle, méditation en forêt, travail créatif, connexion aux éléments naturels.',
    date: '📅 20 juin 2026',
    delay: 'd2',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <line x1="16" y1="28" x2="16" y2="17"/>
        <path d="M7 20 Q16 5 25 20"/>
        <path d="M10 26 Q16 13 22 26"/>
        <line x1="11" y1="28" x2="21" y2="28"/>
      </svg>
    ),
  },
  {
    title: "Connexion à l'Autre",
    price: '60€',
    priceUnit: '/personne',
    desc: 'Initiation aux soins énergétiques, écoute intuitive, exercices de confiance et travail en binôme.',
    date: '📅 11 juillet 2026',
    delay: 'd3',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 34, height: 34 }}>
        <path d="M4 22 L10 22 L10 16 Q10 13 13 13 L16 13 L16 13 Q19 13 19 16 L19 22 L25 22"/>
        <path d="M10 22 Q13 26 16 22 Q19 26 22 22"/>
        <line x1="13" y1="13" x2="13" y2="9"/>
        <line x1="16" y1="13" x2="16" y2="8"/>
        <line x1="19" y1="13" x2="19" y2="9"/>
      </svg>
    ),
  },
]

export default function AteliersPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Ateliers</span>
          </nav>
          <h1>Ateliers Nature &amp; Jardin</h1>
          <p className="sub">Ve&apos;j&apos;tal · Milélé · Forêt normande</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: '3.5rem' }}>
            <p className="eyebrow">Le projet Ve&apos;j&apos;tal</p>
            <h2>Un terrain de 2 500 m²<br />au cœur de la forêt normande</h2>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)' }}>
              Après 15 ans de réflexion, Océane et Jérémy (paysagiste depuis 2016) ont acquis en février 2025 un terrain baptisé <strong>&ldquo;Milélé&rdquo;</strong> en forêt normande. Ce lieu ouvre ses portes à l&apos;été 2026 pour des ateliers de reconnexion à la nature. <strong>Tous les ateliers sont co-animés par Océane et Jérémy</strong> — entre savoir-faire du soin et expertise du vivant végétal, un tandem unique au service de votre bien-être.
            </p>
          </div>

          <div className="ateliers-grid">
            {ateliers.map((a) => (
              <article key={a.title} className={`atelier-card reveal ${a.delay}`}>
                <div className="atelier-card__head">
                  <span className="atelier-card__emoji">{a.icon}</span>
                  <div className="atelier-card__price">{a.price}<span>/{a.priceUnit.replace('/', '')}</span></div>
                </div>
                <div className="atelier-card__body">
                  <h4 className="atelier-card__title">{a.title}</h4>
                  <p className="atelier-card__desc">{a.desc}</p>
                  <p className="atelier-card__date">{a.date}</p>
                  <Link
                    href={`/contact?sujet=Ateliers+Ve%27j%27tal&atelier=${encodeURIComponent(a.title)}`}
                    className="btn btn--primary btn--sm atelier-card__btn"
                  >
                    Réserver ma place
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="atelier-promo reveal">
            <h4>Offre Trio Connexion</h4>
            <p>Inscrivez-vous aux 3 ateliers &ldquo;Connexion&rdquo; (à Soi · à la Nature · à l&apos;Autre)<br />et bénéficiez d&apos;un tarif préférentiel.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textDecoration: 'line-through', opacity: .6 }}>180€</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: 'var(--sand-light)' }}>150€</span>
              <Link href="/contact?sujet=Ateliers+Ve%27j%27tal&offre=trio" className="btn btn--sand">Profiter de l&apos;offre</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
