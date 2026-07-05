import React from 'react'
import Link from 'next/link'
import { TarifTable } from '@/components/sections/TarifTable'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

const PLANITY = 'https://www.planity.com/instant-douceheure-76600-le-havre'

export const metadata = {
  title: "Tarifs & Descriptions — Instant Douce'Heure",
  description: 'Grille tarifaire complète des massages et soins énergétiques. Séances à la carte de 30 minutes à 2h30.',
}

export default function TarifsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Tarif &amp; description</span>
          </nav>
          <h1>Tarifs &amp; Descriptions</h1>
          <p className="sub">Des soins adaptés à vos besoins, à votre rythme</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="notice reveal">
            ℹ️ <strong>Information importante&nbsp;:</strong> Les massages proposés ne sont ni tantriques, ni sexuels, ni érotiques. Les séances du dimanche sont majorées de 15€.
          </div>

          <RevealWrapper style={{ marginBottom: '3rem' }}>
            <p className="eyebrow">Grille tarifaire</p>
            <h2 style={{ marginBottom: '1.5rem' }}>Séances à la carte</h2>
            <p style={{ fontSize: '.8125rem', color: 'var(--text-muted)', marginBottom: '.875rem', display: 'flex', alignItems: 'center', gap: '.5rem', fontStyle: 'italic' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, background: 'var(--forest-pale)', borderRadius: '50%', color: 'var(--forest)', fontSize: '.7rem', fontStyle: 'normal', flexShrink: 0 }}>↕</span>
              Cliquez sur une ligne pour découvrir le détail du soin
            </p>
            <TarifTable />
            <p style={{ fontSize: '.875rem', color: 'var(--text-muted)' }}>
              * Supplément de 15€ pour les séances du dimanche · Privatisation du salon possible pour ateliers bien-être, enterrements de vie de jeune fille, etc.
            </p>
          </RevealWrapper>

          {/* SOINS EN DÉTAIL */}
          <RevealWrapper>
            <p className="eyebrow">Nos soins en détail</p>
            <h2 style={{ marginBottom: '2rem' }}>Ce que vous allez vivre</h2>
          </RevealWrapper>
          <div className="soin-grid">
            <article className="soin-card reveal d1">
              <h3 className="soin-card__title">Massage Holistique</h3>
              <p className="soin-card__desc">Séances entièrement personnalisées après un court échange sur vos besoins. Je sélectionne des huiles adaptées à votre type de peau et votre personnalité. Prise en charge de la grossesse dès 3 mois jusqu&apos;au post-partum, avec forfaits spéciaux disponibles.</p>
              <a href={PLANITY} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" style={{ marginTop: '1.25rem' }}>Réserver en ligne →</a>
            </article>
            <article className="soin-card reveal d2">
              <h3 className="soin-card__title">Soin Énergétique (Chin Daï)</h3>
              <p className="soin-card__desc">Méthode inspirée du Chin Daï, art martial transmis par Renato Pappalardo. Ce soin travaille sur les dimensions physico-psychiques et développe une conscience raffinée de l&apos;énergie. Il cible les chakras et circuits énergétiques pour soutenir votre bien-être mental, physique et intuitif.</p>
              <a href={PLANITY} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" style={{ marginTop: '1.25rem' }}>Réserver en ligne →</a>
            </article>
            <article className="soin-card reveal d3">
              <h3 className="soin-card__title">Soin Rituel Rebozo</h3>
              <p className="soin-card__desc">Soin cérémoniel mexicain traditionnel d&apos;environ 2h30 : massage à quatre mains sur tout le corps (30–45 min), bain d&apos;herbes sacrées, enveloppement en sept points avec le tissu traditionnel. Disponible le vendredi/samedi matin à domicile (avec baignoire) ou au salon. Idéal pour le post-partum et les transitions de vie.</p>
              <Link href="/contact?sujet=Renseignement+sur+les+soins" className="btn btn--primary btn--sm" style={{ marginTop: '1.25rem' }}>Demander une date →</Link>
            </article>
            <article className="soin-card reveal d1">
              <h3 className="soin-card__title">Massage en Duo</h3>
              <p className="soin-card__desc">Un moment de bien-être partagé à deux — en couple, entre amis, ou entre parent et enfant. Séance réalisée en duo avec Céline&nbsp;: chaque personne bénéficie d&apos;1h15 de massage personnalisé en simultané. <strong>180 € la séance · 90 € par personne.</strong> À réserver environ un mois avant la date souhaitée.</p>
              <Link href="/contact?sujet=Massage+en+duo" className="btn btn--primary btn--sm" style={{ marginTop: '1.25rem' }}>Demander une date →</Link>
            </article>
          </div>

          {/* CARTES CADEAUX */}
          <RevealWrapper style={{ marginTop: '4rem', marginBottom: '2rem' }}>
            <p className="eyebrow">Offrir un moment de bien-être</p>
            <h2 style={{ marginBottom: '.75rem' }}>Cartes Cadeaux</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Offrez un soin à un proche — disponibles en plusieurs montants, valables sur l&apos;ensemble des prestations.
            </p>
          </RevealWrapper>
          <div className="soin-grid reveal">
            {([
              {
                label: 'Carte cadeau 35 €', href: 'https://buy.stripe.com/3cI9ATfUk5fZ7bC20C6c00f',
                svg: <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><line x1="40" y1="65" x2="40" y2="32" stroke="rgba(61,98,85,.68)" strokeWidth="1.5" strokeLinecap="round"/><path d="M40 52 C35 43 23 41 21 47 C19 53 31 58 40 52Z" fill="rgba(122,163,148,.28)" stroke="rgba(61,98,85,.62)" strokeWidth="1.2"/><path d="M40 41 C45 32 57 30 59 37 C61 44 49 48 40 41Z" fill="rgba(122,163,148,.2)" stroke="rgba(61,98,85,.52)" strokeWidth="1.2"/><path d="M37 32 C37 24 43 24 43 32 C43 37 37 37 37 32Z" fill="rgba(122,163,148,.42)" stroke="rgba(61,98,85,.72)" strokeWidth="1.2"/></svg>,
              },
              {
                label: 'Carte cadeau 50 €', href: 'https://buy.stripe.com/5kQbJ1fUkaAj9jK48K6c00g',
                svg: <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><g transform="translate(40,38)">{[0,90,180,270].map((deg) => <g key={deg} transform={`rotate(${deg})`}><path d="M-4 -4 Q-9 -18 0 -22 Q9 -18 4 -4Z" fill="rgba(122,163,148,.28)" stroke="rgba(61,98,85,.68)" strokeWidth="1.2"/></g>)}<circle r="5.5" fill="rgba(122,163,148,.52)" stroke="rgba(61,98,85,.75)" strokeWidth="1.3"/></g><line x1="40" y1="64" x2="40" y2="54" stroke="rgba(61,98,85,.62)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
              },
              {
                label: 'Carte cadeau 75 €', href: 'https://buy.stripe.com/7sYbJ10Zq0ZJ9jK7kW6c00l',
                svg: <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><g transform="translate(40,40)">{[0,60,120,180,240,300].map((deg) => <g key={deg} transform={`rotate(${deg})`}><path d="M-4.5 -5 Q-10 -20 0 -25 Q10 -20 4.5 -5Z" fill="rgba(201,169,122,.24)" stroke="rgba(139,110,80,.72)" strokeWidth="1.3"/></g>)}<circle r="7" fill="rgba(201,169,122,.48)" stroke="rgba(139,110,80,.8)" strokeWidth="1.3"/></g></svg>,
              },
              {
                label: 'Carte cadeau 95 €', href: 'https://buy.stripe.com/3cIeVd37ydMvfI86gS6c00h',
                svg: <svg viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><g transform="translate(42,42)">{[0,45,90,135,180,225,270,315].map((deg) => <g key={deg} transform={`rotate(${deg})`}><path d="M-4 -6 Q-9 -21 0 -27 Q9 -21 4 -6Z" fill="rgba(201,169,122,.2)" stroke="rgba(139,110,80,.7)" strokeWidth="1.2"/></g>)}{[22.5,112.5,202.5,292.5].map((deg) => <g key={`i${deg}`} transform={`rotate(${deg})`}><path d="M-3 -6 Q-6 -13 0 -16 Q6 -13 3 -6Z" fill="rgba(201,169,122,.38)" stroke="rgba(139,110,80,.75)" strokeWidth="1.1"/></g>)}<circle r="6.5" fill="rgba(184,149,106,.55)" stroke="rgba(139,110,80,.85)" strokeWidth="1.3"/></g></svg>,
              },
              {
                label: 'Carte cadeau 150 €', href: 'https://buy.stripe.com/eVq9AT37ybEn3Zq8p06c00i',
                svg: <svg viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><g transform="translate(46,46)"><circle r="38" stroke="rgba(107,80,56,.22)" strokeWidth="1"/>{[0,36,72,108,144,180,216,252,288,324].map((deg) => <g key={deg} transform={`rotate(${deg})`}><circle cx="0" cy="-38" r="2.2" fill="rgba(107,80,56,.45)"/></g>)}{[0,36,72,108,144,180,216,252,288,324].map((deg) => <g key={`p${deg}`} transform={`rotate(${deg})`}><path d="M-4 -7 Q-9 -23 0 -29 Q9 -23 4 -7Z" fill="rgba(139,110,80,.17)" stroke="rgba(107,80,56,.7)" strokeWidth="1.2"/></g>)}<circle r="11" stroke="rgba(107,80,56,.5)" strokeWidth="1" fill="rgba(139,110,80,.1)"/><circle r="6" fill="rgba(139,110,80,.5)" stroke="rgba(107,80,56,.8)" strokeWidth="1.2"/></g></svg>,
              },
              {
                label: 'Carte cadeau 180 €', href: 'https://buy.stripe.com/dRmeVd0ZqfUDbrS20C6c00k',
                svg: <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><g transform="translate(50,50)"><circle r="44" stroke="rgba(87,60,36,.18)" strokeWidth="1"/><circle r="36" stroke="rgba(87,60,36,.28)" strokeWidth="1"/>{[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => <g key={deg} transform={`rotate(${deg})`}><path d="M-3.5 -7 Q-8 -23 0 -29 Q8 -23 3.5 -7Z" fill="rgba(107,80,56,.15)" stroke="rgba(87,60,36,.65)" strokeWidth="1.1"/></g>)}{[15,75,135,195,255,315].map((deg) => <g key={`i${deg}`} transform={`rotate(${deg})`}><path d="M-3 -7 Q-6 -14 0 -18 Q6 -14 3 -7Z" fill="rgba(107,80,56,.3)" stroke="rgba(87,60,36,.68)" strokeWidth="1"/></g>)}<circle r="9.5" stroke="rgba(87,60,36,.52)" strokeWidth="1" fill="rgba(107,80,56,.1)"/><circle r="5.5" fill="rgba(107,80,56,.55)" stroke="rgba(87,60,36,.88)" strokeWidth="1.2"/></g></svg>,
              },
              {
                label: 'Carte cadeau 250 €', href: 'https://buy.stripe.com/fZu6oH37yaAj1RicFg6c00j',
                svg: <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}><g transform="translate(50,50)"><circle r="44" stroke="rgba(255,255,255,.12)" strokeWidth="1"/><circle r="36" stroke="rgba(223,196,160,.22)" strokeWidth="1" strokeDasharray="3 5"/>{[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => <g key={`ray${deg}`} transform={`rotate(${deg})`}><path d="M-1.5 -28 Q0 -40 0 -42 Q0 -40 1.5 -28Z" fill="rgba(223,196,160,.5)" stroke="rgba(223,196,160,.65)" strokeWidth=".9"/></g>)}{[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((deg) => <g key={`p${deg}`} transform={`rotate(${deg})`}><path d="M-3.5 -8 Q-8 -22 0 -27 Q8 -22 3.5 -8Z" fill="rgba(139,110,80,.15)" stroke="rgba(139,110,80,.6)" strokeWidth="1.1"/></g>)}<circle r="11" stroke="rgba(139,110,80,.48)" strokeWidth="1" fill="rgba(139,110,80,.08)"/><circle r="5.5" fill="rgba(139,110,80,.5)" stroke="rgba(139,110,80,.85)" strokeWidth="1.2"/></g></svg>,
              },
            ] as { label: string; href: string; svg: React.ReactNode }[]).map(({ label, href, svg }) => (
              <article key={label} className="soin-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, background: 'var(--forest-pale)', borderRadius: '50%' }}>
                  {svg}
                </div>
                <h3 className="soin-card__title">{label}</h3>
                <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" style={{ marginTop: 'auto' }}>
                  Offrir ce montant →
                </a>
              </article>
            ))}
          </div>

          <div className="cta-sec reveal" style={{ borderRadius: 'var(--r-xl)', marginTop: '3rem' }}>
            <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Réservation en ligne uniquement</p>
            <h2>Prêt(e) à vous offrir ce moment ?</h2>
            <p>Réservez directement via Planity</p>
            <a href={PLANITY} target="_blank" rel="noopener noreferrer" className="btn btn--sand btn--lg">Réserver sur Planity</a>
          </div>
        </div>
      </section>
    </>
  )
}
