'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/ateliers', label: 'Ateliers' },
  { href: '/tarifs', label: 'Tarif & description' },
  { href: '/cadeaux', label: 'Cartes cadeaux' },
  { href: '/abonnements', label: 'Abonnement annuel' },
  { href: '/retraites', label: 'Retraites' },
  { href: '/philosophie', label: 'Philosophie' },
  { href: '/contact', label: 'Contact' },
  { href: '/collaborations', label: 'Collaborations' },
]

const PLANITY = 'https://www.planity.com/instant-douceheure-76600-le-havre'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile quand on change de page
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav
        id="nav"
        aria-label="Navigation principale"
        className={`nav${scrolled ? ' scrolled' : ''}`}
      >
        <div className="container">
          <div className="nav__inner">
            <Link href="/" className="nav__logo">
              <span className="nav__logo-name">Instant Douce&apos;Heure</span>
              <span className="nav__logo-tag">Le Havre · Bien-être</span>
            </Link>

            <ul className="nav__links" id="navLinks">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={pathname === href ? 'active' : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={PLANITY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sand btn--sm nav__book"
            >
              Réserver en ligne
            </a>

            <button
              className={`nav__burger${open ? ' open' : ''}`}
              id="burger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <nav
        className={`nav__mobile${open ? ' open' : ''}`}
        id="mobileNav"
        aria-label="Navigation mobile"
      >
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <a
          href={PLANITY}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Réserver en ligne
        </a>
      </nav>
    </>
  )
}
