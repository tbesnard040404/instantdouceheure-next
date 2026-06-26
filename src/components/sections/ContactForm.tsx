'use client'

import { useState, FormEvent } from 'react'

const FORMSPREE_ID = 'VOTRE_ID_FORMSPREE'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget

    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
    if (!email || !message) {
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
      } else {
        throw new Error()
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>🌿</div>
        <h3 style={{ marginBottom: '.75rem', color: 'var(--forest)' }}>Message envoyé !</h3>
        <p style={{ color: 'var(--text-muted)' }}>Merci pour votre message. Océane vous répondra dans les meilleurs délais.</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn btn--secondary btn--sm"
          style={{ marginTop: '1.5rem' }}
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <div className="form-card">
      <h3>Envoyer un message</h3>
      <form onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="_subject" value="Nouveau message — Instant Douce'Heure" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="prenom">Prénom</label>
            <input className="form-input" type="text" id="prenom" name="prenom" placeholder="Marie" required autoComplete="given-name" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="nom">Nom</label>
            <input className="form-input" type="text" id="nom" name="nom" placeholder="Dupont" required autoComplete="family-name" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" type="email" id="email" name="email" placeholder="marie@exemple.fr" required autoComplete="email" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="tel">Téléphone (optionnel)</label>
          <input className="form-input" type="tel" id="tel" name="tel" placeholder="06 00 00 00 00" autoComplete="tel" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="sujet">Sujet</label>
          <select className="form-select" id="sujet" name="sujet">
            <option value="">Choisir un sujet...</option>
            <option value="Renseignement sur les soins">Renseignement sur les soins</option>
            <option value="Abonnement annuel">Abonnement annuel</option>
            <option value="Carte cadeau">Carte cadeau</option>
            <option value="Massage en duo">Massage en duo</option>
            <option value="Retraites 2026">Retraites 2026</option>
            <option value="Ateliers Ve'j'tal">Ateliers Ve&apos;j&apos;tal</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-textarea" id="message" name="message" placeholder="Votre message..." required />
        </div>

        <button
          type="submit"
          className="btn btn--primary"
          style={{ width: '100%', justifyContent: 'center' }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
        </button>

        {status === 'error' && (
          <div style={{ marginTop: '1rem', padding: '.875rem 1rem', background: '#fef2f2', borderRadius: 'var(--r-md)', color: '#991b1b', fontSize: '.875rem' }}>
            Une erreur est survenue. Merci de réessayer ou de nous écrire à{' '}
            <a href="mailto:oceane.delannoy.ferrero@gmail.com" style={{ color: '#991b1b', fontWeight: 600 }}>
              oceane.delannoy.ferrero@gmail.com
            </a>
          </div>
        )}
      </form>
    </div>
  )
}
