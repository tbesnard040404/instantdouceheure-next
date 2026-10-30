import Link from 'next/link'

export const CONTACT_EMAIL = 'oceane.delannoy.ferrero@gmail.com'

export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link><span className="breadcrumb__sep">›</span><span>{title}</span>
          </nav>
          <h1>{title}</h1>
          <p className="sub">{subtitle}</p>
        </div>
      </header>

      <section className="section">
        <div className="container legal">
          {children}
          <p className="legal__updated">Dernière mise à jour : octobre 2026</p>
        </div>
      </section>
    </>
  )
}

export function Mail() {
  return <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
}
