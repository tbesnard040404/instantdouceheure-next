'use client'

import Link from 'next/link'

const FIN_AFFICHAGE = new Date('2027-02-01T00:00:00+01:00').getTime()
const COPIES = 6
export const PAGES_BANDEAU = ['/', '/abonnements', '/cadeaux']

export function bandeauActif(pathname: string | null) {
  return Date.now() < FIN_AFFICHAGE && PAGES_BANDEAU.includes(pathname ?? '')
}

function Messages({ copie }: { copie?: boolean }) {
  const tab = copie ? -1 : undefined
  return (
    <span className="bandeau__group" aria-hidden={copie || undefined}>
      <strong className="bandeau__tag">Nouveauté !</strong>
      <Link href="/abonnements#lessentiel" tabIndex={tab}>Un abonnement pour petit budget à 46&nbsp;€/mois</Link>
      <span className="bandeau__sep" aria-hidden="true">✦</span>
      <Link href="/ateliers#bien-etre-a-deux" tabIndex={tab}>Un nouvel atelier fait son apparition : bien-être à deux&nbsp;!</Link>
      <span className="bandeau__sep" aria-hidden="true">✦</span>
    </span>
  )
}

export function NouveautesBanner() {
  return (
    <aside className="bandeau" aria-label="Nouveautés">
      <div className="bandeau__track">
        {Array.from({ length: COPIES }, (_, i) => <Messages key={i} copie={i > 0} />)}
      </div>
    </aside>
  )
}
