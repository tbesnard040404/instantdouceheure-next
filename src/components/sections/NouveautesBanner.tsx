'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const FIN_AFFICHAGE = new Date('2027-02-01T00:00:00+01:00').getTime()

export function NouveautesBanner() {
  const [expiree, setExpiree] = useState(Date.now() >= FIN_AFFICHAGE)

  useEffect(() => {
    setExpiree(Date.now() >= FIN_AFFICHAGE)
  }, [])

  if (expiree) return null

  return (
    <aside className="nouveautes" aria-label="Nouveautés">
      <p className="nouveautes__label">Nouveauté !</p>
      <ul className="nouveautes__list">
        <li>
          <Link href="/abonnements#lessentiel">Un abonnement pour petit budget à 46&nbsp;€/mois</Link>
        </li>
        <li>
          <Link href="/ateliers#bien-etre-a-deux">Un nouvel atelier fait son apparition : bien-être à deux !</Link>
        </li>
      </ul>
    </aside>
  )
}
