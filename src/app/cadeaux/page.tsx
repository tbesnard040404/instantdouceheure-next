import Link from 'next/link'

export const metadata = {
  title: "Cartes Cadeaux — Instant Douce'Heure",
  description: "Offrez un moment de bien-être à vos proches. 7 cartes cadeaux de 35€ à 250€, valables 6 mois.",
}

const EMAIL = 'oceane.delannoy.ferrero@gmail.com'

export default function CadeauxPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Cartes cadeaux</span>
          </nav>
          <h1>Cartes Cadeaux</h1>
          <p className="sub">Offrez un moment de bien-être à vos proches</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Le cadeau idéal</p>
            <h2>Un cadeau qui fait du bien,<br />vraiment</h2>
            <div className="divider divider--center" />
            <p style={{ maxWidth: 560, margin: '0 auto 3rem', color: 'var(--text-muted)', fontSize: '1.0625rem' }}>
              Les cartes cadeaux sont valables 6 mois à compter de la date d&apos;achat. Elles sont utilisables pour l&apos;ensemble des soins et services proposés.
            </p>
          </div>

          <div className="gifts-grid">

            {/* 35€ */}
            <article className="gift-card reveal d1">
              <div className="gift-card__visual gift-card__visual--35" style={{ height: 118 }} aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 70, height: 70 }}>
                  <line x1="40" y1="65" x2="40" y2="32" stroke="rgba(61,98,85,.68)" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M40 52 C35 43 23 41 21 47 C19 53 31 58 40 52Z" fill="rgba(122,163,148,.28)" stroke="rgba(61,98,85,.62)" strokeWidth="1.2"/>
                  <path d="M40 41 C45 32 57 30 59 37 C61 44 49 48 40 41Z" fill="rgba(122,163,148,.2)" stroke="rgba(61,98,85,.52)" strokeWidth="1.2"/>
                  <path d="M37 32 C37 24 43 24 43 32 C43 37 37 37 37 32Z" fill="rgba(122,163,148,.42)" stroke="rgba(61,98,85,.72)" strokeWidth="1.2"/>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">35 €</div>
                <p className="gift-card__desc">Massage bien-être 30 min</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau 35€`} className="btn btn--primary btn--sm">Commander</a>
              </div>
            </article>

            {/* 50€ */}
            <article className="gift-card reveal d2">
              <div className="gift-card__visual gift-card__visual--50" style={{ height: 132 }} aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 76, height: 76 }}>
                  <g transform="translate(40,38)">
                    {[0, 90, 180, 270].map((deg) => (
                      <g key={deg} transform={`rotate(${deg})`}>
                        <path d="M-4 -4 Q-9 -18 0 -22 Q9 -18 4 -4Z" fill="rgba(122,163,148,.28)" stroke="rgba(61,98,85,.68)" strokeWidth="1.2"/>
                      </g>
                    ))}
                    <circle r="5.5" fill="rgba(122,163,148,.52)" stroke="rgba(61,98,85,.75)" strokeWidth="1.3"/>
                  </g>
                  <line x1="40" y1="64" x2="40" y2="54" stroke="rgba(61,98,85,.62)" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">50 €</div>
                <p className="gift-card__desc">Massage bien-être 45 min</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau 50€`} className="btn btn--primary btn--sm">Commander</a>
              </div>
            </article>

            {/* 75€ */}
            <article className="gift-card reveal d3">
              <div className="gift-card__visual gift-card__visual--75" style={{ height: 148 }} aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
                  <g transform="translate(40,40)">
                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                      <g key={deg} transform={`rotate(${deg})`}>
                        <path d="M-4.5 -5 Q-10 -20 0 -25 Q10 -20 4.5 -5Z" fill="rgba(201,169,122,.24)" stroke="rgba(139,110,80,.72)" strokeWidth="1.3"/>
                      </g>
                    ))}
                    <circle r="7" fill="rgba(201,169,122,.48)" stroke="rgba(139,110,80,.8)" strokeWidth="1.3"/>
                  </g>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">75 €</div>
                <p className="gift-card__desc">Massage bien-être 1h</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau 75€`} className="btn btn--primary btn--sm">Commander</a>
              </div>
            </article>

            {/* 95€ */}
            <article className="gift-card reveal d4">
              <div className="gift-card__visual gift-card__visual--95" style={{ height: 162 }} aria-hidden="true">
                <svg viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 84, height: 84 }}>
                  <g transform="translate(42,42)">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                      <g key={deg} transform={`rotate(${deg})`}>
                        <path d="M-4 -6 Q-9 -21 0 -27 Q9 -21 4 -6Z" fill="rgba(201,169,122,.2)" stroke="rgba(139,110,80,.7)" strokeWidth="1.2"/>
                      </g>
                    ))}
                    {[22.5, 112.5, 202.5, 292.5].map((deg) => (
                      <g key={deg} transform={`rotate(${deg})`}>
                        <path d="M-3 -6 Q-6 -13 0 -16 Q6 -13 3 -6Z" fill="rgba(201,169,122,.38)" stroke="rgba(139,110,80,.75)" strokeWidth="1.1"/>
                      </g>
                    ))}
                    <circle r="6.5" fill="rgba(184,149,106,.55)" stroke="rgba(139,110,80,.85)" strokeWidth="1.3"/>
                  </g>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">95 €</div>
                <p className="gift-card__desc">Massage bien-être 1h30</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau 95€`} className="btn btn--primary btn--sm">Commander</a>
              </div>
            </article>

            {/* 150€ */}
            <article className="gift-card reveal d1">
              <div className="gift-card__visual gift-card__visual--150" style={{ height: 178 }} aria-hidden="true">
                <svg viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 90, height: 90 }}>
                  <g transform="translate(46,46)">
                    <circle r="38" stroke="rgba(107,80,56,.22)" strokeWidth="1"/>
                    {[0,36,72,108,144,180,216,252,288,324].map((deg) => (
                      <g key={deg} transform={`rotate(${deg})`}><circle cx="0" cy="-38" r="2.2" fill="rgba(107,80,56,.45)"/></g>
                    ))}
                    {[0,36,72,108,144,180,216,252,288,324].map((deg) => (
                      <g key={`p${deg}`} transform={`rotate(${deg})`}>
                        <path d="M-4 -7 Q-9 -23 0 -29 Q9 -23 4 -7Z" fill="rgba(139,110,80,.17)" stroke="rgba(107,80,56,.7)" strokeWidth="1.2"/>
                      </g>
                    ))}
                    <circle r="11" stroke="rgba(107,80,56,.5)" strokeWidth="1" fill="rgba(139,110,80,.1)"/>
                    <circle r="6" fill="rgba(139,110,80,.5)" stroke="rgba(107,80,56,.8)" strokeWidth="1.2"/>
                  </g>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">150 €</div>
                <p className="gift-card__desc">Massage bien-être 2h</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau 150€`} className="btn btn--primary btn--sm">Commander</a>
              </div>
            </article>

            {/* 200€ */}
            <article className="gift-card reveal d2">
              <div className="gift-card__visual gift-card__visual--200" style={{ height: 196 }} aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 96, height: 96 }}>
                  <g transform="translate(50,50)">
                    <circle r="44" stroke="rgba(87,60,36,.18)" strokeWidth="1"/>
                    <circle r="36" stroke="rgba(87,60,36,.28)" strokeWidth="1"/>
                    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
                      <g key={deg} transform={`rotate(${deg})`}>
                        <path d="M-3.5 -7 Q-8 -23 0 -29 Q8 -23 3.5 -7Z" fill="rgba(107,80,56,.15)" stroke="rgba(87,60,36,.65)" strokeWidth="1.1"/>
                      </g>
                    ))}
                    {[15,75,135,195,255,315].map((deg) => (
                      <g key={`i${deg}`} transform={`rotate(${deg})`}>
                        <path d="M-3 -7 Q-6 -14 0 -18 Q6 -14 3 -7Z" fill="rgba(107,80,56,.3)" stroke="rgba(87,60,36,.68)" strokeWidth="1"/>
                      </g>
                    ))}
                    <circle r="9.5" stroke="rgba(87,60,36,.52)" strokeWidth="1" fill="rgba(107,80,56,.1)"/>
                    <circle r="5.5" fill="rgba(107,80,56,.55)" stroke="rgba(87,60,36,.88)" strokeWidth="1.2"/>
                  </g>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">200 €</div>
                <p className="gift-card__desc">Carte cadeau libre</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau 200€`} className="btn btn--primary btn--sm">Commander</a>
              </div>
            </article>

            {/* 250€ — Rebozo, wide */}
            <article className="gift-card gift-card--wide reveal d3">
              <div className="gift-card__visual gift-card__visual--250" style={{ height: 220 }} aria-hidden="true">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 190, height: 114 }}>
                  <g transform="translate(100,60)">
                    <circle r="54" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>
                    <circle r="46" stroke="rgba(223,196,160,.22)" strokeWidth="1" strokeDasharray="3 5"/>
                    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
                      <g key={`ray${deg}`} transform={`rotate(${deg})`}>
                        <path d="M-1.5 -33 Q0 -50 0 -53 Q0 -50 1.5 -33Z" fill="rgba(223,196,160,.5)" stroke="rgba(223,196,160,.65)" strokeWidth=".9"/>
                      </g>
                    ))}
                    {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((deg) => (
                      <g key={`p${deg}`} transform={`rotate(${deg})`}>
                        <path d="M-4 -9 Q-9 -26 0 -32 Q9 -26 4 -9Z" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.58)" strokeWidth="1.1"/>
                      </g>
                    ))}
                    <circle r="13" stroke="rgba(223,196,160,.48)" strokeWidth="1" fill="rgba(255,255,255,.04)"/>
                    {[0,45,90,135,180,225,270,315].map((deg) => (
                      <g key={`ip${deg}`} transform={`rotate(${deg})`}>
                        <path d="M-3 -8 Q-6 -14 0 -17 Q6 -14 3 -8Z" fill="rgba(223,196,160,.22)" stroke="rgba(223,196,160,.72)" strokeWidth="1"/>
                      </g>
                    ))}
                    <circle r="6.5" fill="rgba(223,196,160,.55)" stroke="rgba(223,196,160,.92)" strokeWidth="1.4"/>
                    <circle r="3" fill="rgba(255,255,255,.7)"/>
                  </g>
                </svg>
              </div>
              <div className="gift-card__body">
                <div className="gift-card__price">250 €</div>
                <p className="gift-card__desc">Soin Rituel Rebozo complet · 2h30 · Le cadeau le plus précieux</p>
                <a href={`mailto:${EMAIL}?subject=Carte cadeau Rebozo 250€`} className="btn btn--sand btn--sm">Commander le Rebozo</a>
              </div>
            </article>

          </div>

          <div className="notice reveal" style={{ marginTop: '2rem' }}>
            ℹ️ Les cartes cadeaux sont valables <strong>6 mois</strong> à partir de leur date d&apos;achat. Elles sont utilisables pour tous les soins, ateliers ou retraites proposés, et peuvent être divisées sur plusieurs options.
          </div>
        </div>
      </section>
    </>
  )
}
