import Link from 'next/link'

const PLANITY = 'https://www.planity.com/instant-douceheure-76600-le-havre'

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Marque */}
          <div>
            <div className="footer__brand-name">Instant Douce&apos;Heure</div>
            <span className="footer__brand-tag">Le Havre · Bien-être</span>
            <p className="footer__tagline">
              Massages de bien-être, soins énergétiques et produits naturels.
              Un espace de soin professionnel et bienveillant au Havre.
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__soc-link"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__soc-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer__heading">Navigation</p>
            <ul className="footer__links">
              {[
                ['/','Accueil'],
                ['/tarifs','Tarif & description'],
                ['/abonnements','Abonnements'],
                ['/cadeaux','Cartes cadeaux'],
                ['/retraites','Retraites'],
                ['/ateliers','Ateliers'],
                ['/philosophie','Philosophie'],
                ['/collaborations','Collaborations'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <p className="footer__heading">Horaires</p>
            <div className="footer__contact-line">
              <span>Lun – Sam&nbsp;: 10h – 19h</span>
              <span>Dimanche&nbsp;: 10h – 18h</span>
              <span style={{ fontSize: '.8125rem', color: 'rgba(255,255,255,.35)', marginTop: '.25rem' }}>
                Supplément dim.&nbsp;: +15€
              </span>
              <span style={{ marginTop: '.5rem' }}>Réservation en ligne uniquement</span>
              <a href={PLANITY} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sand-light)' }}>
                → Réserver sur Planity
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="footer__heading">Contact</p>
            <div className="footer__contact-line">
              <a href="tel:+33618980522">06.18.98.05.22</a>
              <a href="mailto:oceane.delannoy.ferrero@gmail.com" style={{ wordBreak: 'break-all' }}>
                oceane.delannoy.ferrero@gmail.com
              </a>
              <span style={{ marginTop: '.5rem' }}>23 rue Jules Ancel<br />76600 Le Havre</span>
              <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.28)', marginTop: '.5rem' }}>
                SIRET&nbsp;: 80414431900030
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Instant Douce&apos;Heure · Océane Delannoy-Ferrero</p>
          <nav className="footer__legal" aria-label="Liens légaux">
            <Link href="#">Mentions légales</Link>
            <Link href="#">Politique de confidentialité</Link>
            <Link href="#">RGPD</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
