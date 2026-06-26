import Link from 'next/link'
import { getAbonnementsContent } from '@/lib/content'

export const metadata = {
  title: "Abonnements Annuels — Instant Douce'Heure",
  description: "5 formules d'abonnement annuel pour un suivi bien-être régulier à un tarif avantageux.",
}

export default function AbonnementsPage() {
  const c = getAbonnementsContent()

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
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>5 formules disponibles</p>
            <h2 style={{ whiteSpace: 'pre-line' }}>{c.sectionTitle}</h2>
            <div className="divider divider--center" />
            <p style={{ maxWidth: 600, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.0625rem' }}>
              {c.sectionSubtitle}
            </p>
          </div>

          <div className="plans-grid reveal">
            {c.plans.map((plan) => (
              <div key={plan.name} className={`plan-card${plan.popular ? ' plan-card--pop' : ''}`}>
                {plan.popular && <div className="plan-badge">Le plus choisi</div>}
                <p className="plan-name">{plan.name}</p>
                <div className="plan-price">{plan.price}<sub>/mois</sub></div>
                <p className="plan-period">{plan.period}</p>
                <p className="plan-desc">{plan.desc}</p>
                <ul className="plan-feats">
                  {plan.feats.map((feat) => (
                    <li key={feat} className="plan-feat">
                      <span className="plan-check">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?sujet=Abonnement+annuel"
                  className={plan.popular ? 'btn btn--sand btn--sm' : 'btn btn--secondary btn--sm'}
                >
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
