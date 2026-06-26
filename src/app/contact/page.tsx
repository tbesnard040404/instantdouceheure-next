import Link from 'next/link'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata = {
  title: "Contact — Instant Douce'Heure",
  description: 'Contactez Océane pour toute question sur les soins, ateliers, retraites ou abonnements.',
}

const PLANITY = 'https://www.planity.com/instant-douceheure-76600-le-havre'

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb__sep">›</span>
            <span>Contact</span>
          </nav>
          <h1>Nous Contacter</h1>
          <p className="sub">Réservation uniquement en ligne via Planity</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="notice reveal">
            📋 <strong>Réservation en ligne uniquement</strong> via Planity. Si vous souhaitez poser une question, choisir un abonnement, ou obtenir des informations sur les ateliers et retraites, utilisez le formulaire ci-dessous ou contactez-moi directement.
          </div>

          <div className="contact-layout" style={{ marginTop: '3rem' }}>
            <div className="contact-info reveal">
              <div className="contact-block">
                <span className="contact-block__icon">📍</span>
                <p className="contact-block__title">Adresse</p>
                <p className="contact-block__text">
                  23 rue Jules Ancel<br />76600 Le Havre, France<br />
                  <em style={{ fontSize: '.8125rem', color: 'var(--text-muted)' }}>Accessible aux personnes à mobilité réduite (PMR)</em>
                </p>
              </div>
              <div className="contact-block">
                <span className="contact-block__icon">📞</span>
                <p className="contact-block__title">Téléphone</p>
                <p className="contact-block__text"><a href="tel:+33618980522">06.18.98.05.22</a></p>
              </div>
              <div className="contact-block">
                <span className="contact-block__icon">✉️</span>
                <p className="contact-block__title">Email</p>
                <p className="contact-block__text"><a href="mailto:oceane.delannoy.ferrero@gmail.com">oceane.delannoy.ferrero@gmail.com</a></p>
              </div>
              <div className="contact-block">
                <span className="contact-block__icon">🕐</span>
                <p className="contact-block__title">Horaires</p>
                <p className="contact-block__text">
                  Lundi – Samedi&nbsp;: 10h – 19h<br />Dimanche&nbsp;: 10h – 18h<br />
                  <em style={{ fontSize: '.8125rem', color: 'var(--text-muted)' }}>Supplément de 15€ pour les séances du dimanche</em>
                </p>
              </div>
              <div className="contact-block" style={{ background: 'var(--forest)', borderColor: 'var(--forest)' }}>
                <span className="contact-block__icon">🗓</span>
                <p className="contact-block__title" style={{ color: 'var(--sand-light)' }}>Réserver en ligne</p>
                <p className="contact-block__text" style={{ color: 'rgba(255,255,255,.75)', marginBottom: '1rem' }}>
                  Via Planity · Céline disponible les week-ends et en cas d&apos;absence.
                </p>
                <a href={PLANITY} target="_blank" rel="noopener noreferrer" className="btn btn--sand btn--sm">Réserver sur Planity</a>
              </div>
            </div>

            <div className="reveal d2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
