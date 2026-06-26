import Link from 'next/link'

export const metadata = {
  title: "Collaborations — Instant Douce'Heure",
  description: "Les partenaires de cœur d'Océane : Céline Boucher (masseuse), Jérémy (paysagiste), Marie Matis (Rebozo).",
}

interface Collab {
  initials: string
  name: string
  role: string
  desc: string
  avClass: string
  delay: string
}

const collabs: Collab[] = [
  {
    initials: 'CB',
    name: 'Céline Boucher',
    role: 'Masseuse holistique',
    desc: "Formée avec Océane en 2015, Céline apporte professionnalisme et écoute fine du corps subtil. Elle reçoit au cabinet les vendredis, samedis et dimanches sur rendez-vous, et co-anime les séances et ateliers bien-être.",
    avClass: 'av--1',
    delay: 'd1',
  },
  {
    initials: 'J',
    name: 'Jérémy',
    role: "Co-créateur · Ateliers paysagistes",
    desc: "Paysagiste depuis 2016, Jérémy co-crée avec Océane les ateliers nature du domaine Milélé. Ensemble, ils ont acquis ce terrain de 2 500 m² en forêt normande pour offrir des espaces de reconnexion profonde à la nature.",
    avClass: 'av--2',
    delay: 'd2',
  },
  {
    initials: 'MM',
    name: 'Marie Matis',
    role: "Alchimiste du cœur · Rebozo",
    desc: "Collaboratrice depuis juin 2022 sur les rituels Rebozo, décrits comme \"une ode à la renaissance des femmes vers l'amour de soi\". Ensemble, elles ont co-créé la retraite \"Rencontre de son être alchimique\".",
    avClass: 'av--3',
    delay: 'd3',
  },
]

export default function CollaborationsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Collaborations</span>
          </nav>
          <h1>Mes Collaborations</h1>
          <p className="sub">Tisser ensemble les talents, les envies et les rêves</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 700, marginBottom: '3.5rem' }}>
            <p className="eyebrow">Des rencontres fondatrices</p>
            <h2>Des partenaires de cœur,<br />pas de simples collaborations</h2>
            <div className="divider" />
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)' }}>
              Je valorise avant tout les relations d&apos;interdépendance construites sur des valeurs partagées : le bien-faire, le respect mutuel et l&apos;amour de la nature. Chaque collaboration est une rencontre humaine avant d&apos;être professionnelle.
            </p>
          </div>

          <div className="collab-grid">
            {collabs.map((c) => (
              <article key={c.name} className={`collab-card reveal ${c.delay}`}>
                <div className={`collab-card__av ${c.avClass}`}>{c.initials}</div>
                <h3 className="collab-card__name">{c.name}</h3>
                <p className="collab-card__role">{c.role}</p>
                <p className="collab-card__desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
