import Link from 'next/link'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { getHomeContent, getSiteSettings } from '@/lib/content'

// SVG illustrations inline (zéro dépendance externe)
function MassageSvg() {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 130, height: 97, opacity: .93 }}>
      <ellipse cx="60" cy="25" rx="12" ry="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <path d="M28 58 C37 42 50 37 60 40 C70 37 83 42 92 58" stroke="rgba(255,255,255,0.85)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M22 68 C33 52 48 47 60 50 C72 47 87 52 98 68" stroke="rgba(255,255,255,0.42)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <line x1="44" y1="14" x2="40" y2="6" stroke="rgba(223,196,160,0.7)" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="60" y1="10" x2="60" y2="2" stroke="rgba(223,196,160,0.7)" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="76" y1="14" x2="80" y2="6" stroke="rgba(223,196,160,0.7)" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="20" cy="75" r="5" fill="rgba(255,255,255,0.07)" />
      <circle cx="100" cy="20" r="7" fill="rgba(255,255,255,0.06)" />
    </svg>
  )
}
function EnergieSvg() {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 130, height: 97, opacity: .93 }}>
      <circle cx="60" cy="45" r="8" fill="rgba(223,196,160,0.45)" stroke="rgba(223,196,160,0.9)" strokeWidth="1.8" />
      <circle cx="60" cy="45" r="18" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2" />
      <circle cx="60" cy="45" r="28" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <circle cx="60" cy="45" r="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="60" y1="7" x2="60" y2="15" stroke="rgba(223,196,160,0.8)" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="75" x2="60" y2="83" stroke="rgba(223,196,160,0.8)" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="45" x2="30" y2="45" stroke="rgba(223,196,160,0.8)" strokeWidth="2" strokeLinecap="round" />
      <line x1="90" y1="45" x2="98" y2="45" stroke="rgba(223,196,160,0.8)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function RebozoSvg() {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-52%)', width: 130, height: 97, opacity: .93 }}>
      <path d="M16 42 Q36 24 60 32 Q84 24 104 42 Q84 52 60 44 Q36 52 16 42Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.58)" strokeWidth="1.6" />
      <path d="M16 52 Q36 34 60 42 Q84 34 104 52 Q84 62 60 54 Q36 62 16 52Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.34)" strokeWidth="1.2" />
      <path d="M16 62 Q36 44 60 52 Q84 44 104 62 Q84 72 60 64 Q36 72 16 62Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <circle cx="60" cy="22" r="5.5" fill="rgba(139,110,80,0.4)" stroke="rgba(223,196,160,0.78)" strokeWidth="1.3" />
    </svg>
  )
}

const cardVisuals = [
  { visual: 's-card__visual--massage', svg: <MassageSvg /> },
  { visual: 's-card__visual--energie', svg: <EnergieSvg /> },
  { visual: 's-card__visual--rebozo', svg: <RebozoSvg /> },
]
const cardLinks = ['/tarifs', '/tarifs', '/tarifs']

export default function HomePage() {
  const c = getHomeContent()
  const s = getSiteSettings()

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="Bannière principale">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <p className="hero__eyebrow">{c.hero.eyebrow}</p>
            <h1 className="hero__title">
              {c.hero.title.split("'")[0]}&apos;<br /><em>{c.hero.title.split("'")[1] ?? ''}</em>
            </h1>
            <p className="hero__sub" style={{ whiteSpace: 'pre-line' }}>{c.hero.subtitle}</p>
            <div className="hero__actions">
              <a href={s.planityUrl} target="_blank" rel="noopener noreferrer" className="btn btn--sand btn--lg">
                {c.hero.ctaPrimary}
              </a>
              <Link href="/tarifs" className="btn btn--ghost">{c.hero.ctaSecondary}</Link>
            </div>
          </div>
        </div>
        <div className="hero__badge" aria-hidden="true">
          <div className="hero__badge-ring">
            <span className="hero__badge-num">{c.hero.badgeNumber}</span>
            <span className="hero__badge-lbl" style={{ whiteSpace: 'pre-line' }}>{c.hero.badgeLabel}</span>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-line" />
          <span>Découvrir</span>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust" role="complementary" aria-label="Informations clés">
        <div className="container">
          <ul className="trust__list">
            <li className="trust__item"><span className="trust__icon">🎓</span> Certifiée depuis 2011</li>
            <li className="trust__item"><span className="trust__icon">📍</span> 23 rue Jules Ancel, Le Havre</li>
            <li className="trust__item"><span className="trust__icon">🕐</span> Lun–Sam 10h–19h · Dim 10h–18h</li>
            <li className="trust__item"><span className="trust__icon">🌿</span> Produits naturels &amp; bio · retraites &amp; ateliers en pleine nature</li>
            <li className="trust__item"><span className="trust__icon">♿</span> Accessible PMR</li>
          </ul>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <RevealWrapper>
            <p className="eyebrow">{c.services.eyebrow}</p>
            <h2 id="services-title" style={{ whiteSpace: 'pre-line' }}>{c.services.title}</h2>
            <div className="divider" />
            <p style={{ maxWidth: 560, color: 'var(--text-muted)', fontSize: '1.0625rem' }}>{c.services.subtitle}</p>
          </RevealWrapper>
          <div className="services-grid">
            {c.services.cards.map((card, i) => (
              <article key={card.title} className={`s-card reveal d${i + 1}`}>
                <div className={`s-card__visual ${cardVisuals[i].visual}`} aria-hidden="true">
                  {cardVisuals[i].svg}
                </div>
                <div className="s-card__body">
                  <h3 className="s-card__title">{card.title}</h3>
                  <p className="s-card__desc">{card.desc}</p>
                  <div className="s-card__price">{card.price}</div>
                  <Link href={cardLinks[i]} className="btn btn--secondary btn--sm">{card.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY TEASER */}
      <section className="section section--alt" aria-labelledby="philo-title-home">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <RevealWrapper>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Ma philosophie</p>
            <h2 id="philo-title-home" style={{ whiteSpace: 'pre-line' }}>{c.philosophy.title}</h2>
            <div className="divider divider--center" />
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{c.philosophy.text}</p>
            <Link href="/philosophie" className="btn btn--primary">{c.philosophy.cta}</Link>
          </RevealWrapper>
        </div>
      </section>

      {/* ABONNEMENTS TEASER */}
      <section className="section" aria-labelledby="abo-title-home">
        <div className="container">
          <RevealWrapper style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <p className="eyebrow">Abonnements</p>
              <h2 id="abo-title-home">Prendre soin de soi,<br />tout au long de l&apos;année</h2>
              <div className="divider" />
            </div>
            <Link href="/abonnements" className="btn btn--secondary">Voir toutes les formules</Link>
          </RevealWrapper>
          <div className="plans-scroll reveal d1">
            {[
              { name: 'Essentiel', price: '32€', period: '1h par période scolaire · 12 mois', desc: "6 séances par an, espacées selon les vacances scolaires. 1 séance offerte à l'inscription." },
              { name: 'Régulier', price: '63€', period: '1h par mois · 12 mois', desc: "Suivi mensuel personnalisé avec 2 séances offertes incluses dans l'abonnement.", pop: true },
              { name: 'Intensif', price: '79€', period: '1h30 par mois · 12 mois', desc: "Séances approfondies d'1h15 de soin + consultation. 2 séances offertes incluses." },
              { name: 'Grossesse', price: '67€', period: '12 mois · 9 séances', desc: "Accompagnement personnalisé tout au long de la grossesse, du premier trimestre jusqu'à l'accouchement." },
              { name: 'Périnatalité', price: '82€', period: '15 mois · Grossesse → Post-partum', desc: "Accompagnement complet de la grossesse jusqu'à 6 mois après l'accouchement." },
            ].map(({ name, price, period, desc, pop }) => (
              <div key={name} className={`plan-card${pop ? ' plan-card--pop' : ''}`}>
                {pop && <div className="plan-badge">Le plus choisi</div>}
                <p className="plan-name">{name}</p>
                <div className="plan-price">{price}<sub>/mois</sub></div>
                <p className="plan-period">{period}</p>
                <p className="plan-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETRAITES TEASER */}
      <section className="section section--alt" aria-labelledby="ret-title-home">
        <div className="container">
          <RevealWrapper style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <p className="eyebrow">Retraites &amp; Ateliers</p>
              <h2 id="ret-title-home">Des expériences<br />au cœur de la nature</h2>
              <div className="divider" />
            </div>
            <Link href="/retraites" className="btn btn--secondary">Tout voir</Link>
          </RevealWrapper>
          <div className="retreat-grid">
            <article className="retreat-card reveal d1">
              <div className="retreat-card__bg retreat-card__bg--f" aria-hidden="true" />
              <div className="retreat-card__overlay" aria-hidden="true" />
              <div className="retreat-card__content">
                <span className="retreat-card__tag">Retraite 2026</span>
                <h3 className="retreat-card__title">Retrouver son pouvoir féminin</h3>
                <div className="retreat-card__meta">
                  <span>🗓 2026 · Dates à venir</span>
                  <span>📍 Nature normande</span>
                </div>
                <Link href="/retraites" className="btn btn--ghost btn--sm">Découvrir</Link>
              </div>
            </article>
            <article className="retreat-card reveal d2">
              <div className="retreat-card__bg retreat-card__bg--e" aria-hidden="true" />
              <div className="retreat-card__overlay" aria-hidden="true" />
              <div className="retreat-card__content">
                <span className="retreat-card__tag">Ateliers</span>
                <h3 className="retreat-card__title">Le chemin des 5 éléments</h3>
                <div className="retreat-card__meta">
                  <span>🗓 Novembre 2026</span>
                  <span>🌿 Massages · Méditation · Cacao</span>
                </div>
                <Link href="/retraites" className="btn btn--ghost btn--sm">Découvrir</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <div className="info-strip">
        <div className="container">
          <div className="info-strip__grid">
            {[
              { icon: '🕐', val: 'Lun–Sam', lbl: '10h–19h\n(Dim 10h–18h)' },
              { icon: '🌿', val: 'Naturel', lbl: 'Soins naturels\nProduits bio certifiés' },
              { icon: '🎓', val: '2011', lbl: 'Certifiée depuis\nFormation continue' },
              { icon: '📍', val: 'Le Havre', lbl: '23 rue Jules Ancel\n76600 · PMR accessible' },
            ].map(({ icon, val, lbl }, i) => (
              <div key={i} className={`info-item reveal d${i + 1}`}>
                <span className="info-item__icon">{icon}</span>
                <span className="info-item__val">{val}</span>
                <span className="info-item__lbl" style={{ whiteSpace: 'pre-line' }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-sec" aria-labelledby="cta-title">
        <div className="container container--narrow reveal">
          <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>{c.cta.eyebrow}</p>
          <h2 id="cta-title" style={{ whiteSpace: 'pre-line' }}>{c.cta.title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{c.cta.text}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={s.planityUrl} target="_blank" rel="noopener noreferrer" className="btn btn--sand btn--lg">{c.cta.ctaPrimary}</a>
            <Link href="/contact" className="btn btn--ghost">{c.cta.ctaSecondary}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
