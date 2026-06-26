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
