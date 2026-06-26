import Link from 'next/link'

export const metadata = {
  title: "Abonnements Annuels — Instant Douce'Heure",
  description: "5 formules d'abonnement annuel pour un suivi bien-être régulier à un tarif avantageux. Essentiel, Régulier, Intensif, Grossesse, Périnatalité.",
}

interface Plan {
  name: string
  price: string
  period: string
  desc: string
  feats: string[]
  pop?: boolean
  btnClass: string
}

const plans: Plan[] = [
  {
    name: 'Essentiel',
    price: '32€',
    period: '12 mois · 6 séances/an',
    desc: "Une séance d'1h par période scolaire (Toussaint, Noël, Février, Pâques, Juin, Rentrée).",
    feats: [
      'Massage personnalisé de 50–55 min',
      'Discussion de vos besoins à chaque visite',
      "1 séance offerte à l'inscription",
    ],
    btnClass: 'btn btn--secondary btn--sm',
  },
  {
    name: 'Régulier',
    price: '63€',
    period: '12 mois · 1 séance/mois',
    desc: 'Suivi régulier avec massages ou soins énergétiques adaptés à chaque séance.',
    feats: [
      'Entretien de 5–10 min par séance',
      '50–55 min de soin personnalisé',
      'Débriefing sur vos sensations',
      '2 séances offertes incluses',
    ],
    pop: true,
    btnClass: 'btn btn--sand btn--sm',
  },
  {
    name: 'Intensif',
    price: '79€',
    period: '12 mois · 1 séance 1h30/mois',
    desc: 'Accompagnement approfondi avec des séances plus longues et un suivi complet.',
    feats: [
      'Consultation de 5–10 minutes',
      '1h15 de massage personnalisé',
      'Temps de détente final',
      '2 séances offertes incluses',
    ],
    btnClass: 'btn btn--secondary btn--sm',
  },
  {
    name: 'Grossesse',
    price: '67€',
    period: '12 mois · 9 séances',
    desc: "Accompagnement personnalisé tout au long de la grossesse, du premier trimestre jusqu'à l'accouchement.",
    feats: [
      'Entretien de 5 min par séance',
      "55 min de massage adapté à la grossesse",
      '1 séance offerte incluse',
    ],
    btnClass: 'btn btn--secondary btn--sm',
  },
  {
    name: 'Périnatalité',
    price: '82€',
    period: '15 mois · Grossesse → Post-partum',
    desc: "Accompagnement complet de la grossesse jusqu'à 6 mois après l'accouchement.",
    feats: [
      '55 min de massage pendant la grossesse',
      '1 séance Rebozo min. 40 jours après',
      '55 min de soin post-partum/mois',
      '2 séances offertes incluses',
    ],
    btnClass: 'btn btn--secondary btn--sm',
  },
]

export default function AbonnementsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Abonnement annuel</span>
          </nav>
          <h1>Abonnements Annuels</h1>
          <p className="sub">Prenez soin de vous régulièrement, à un tarif avantageux</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>5 formules disponibles</p>
            <h2>Un accompagnement sur mesure,<br />tout au long de l&apos;année</h2>
            <div className="divider divider--center" />
            <p style={{ maxWidth: 600, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.0625rem' }}>
              Chaque abonnement inclut un entretien de 5 à 10 minutes en début de séance pour adapter le soin à vos besoins du moment, et un temps d&apos;échange après.
            </p>
          </div>

          <div className="plans-grid reveal">
            {plans.map((plan) => (
              <div key={plan.name} className={`plan-card${plan.pop ? ' plan-card--pop' : ''}`}>
                {plan.pop && <div className="plan-badge">Le plus choisi</div>}
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
                <Link href="/contact?sujet=Abonnement+annuel" className={plan.btnClass}>
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
