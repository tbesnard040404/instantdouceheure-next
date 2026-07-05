'use client'

import { useEffect } from 'react'

/**
 * Stratégie sans flash et sans contenu invisible :
 *
 * 1. SYNCHRONE : on parcourt tous les .reveal déjà dans le viewport
 *    et on leur ajoute immédiatement "shown" (visible).
 * 2. Seulement APRÈS, on ajoute .js-ready sur <html> → le CSS masque
 *    uniquement les .reveal hors-viewport (qui n'ont pas encore "shown").
 * 3. L'IntersectionObserver observe les éléments restants et les anime
 *    au fur et à mesure qu'ils entrent dans le viewport.
 *
 * Résultat : zéro flash, zéro contenu invisible, sur tous les appareils.
 */
export function GlobalRevealObserver() {
  useEffect(() => {
    // ÉTAPE 1 — marquer synchroniquement comme visibles tous les éléments
    // déjà dans le viewport (getBoundingClientRect est synchrone)
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
        el.classList.add('shown')
      }
    })

    // ÉTAPE 2 — maintenant que les éléments visibles ont "shown",
    // activer le CSS qui masque les éléments hors-viewport sans "shown"
    document.documentElement.classList.add('js-ready')

    // ÉTAPE 3 — observer les éléments restants (hors-viewport) pour les
    // animer quand l'utilisateur scrolle
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('shown')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    document.querySelectorAll('.reveal:not(.shown)').forEach((el) => obs.observe(el))

    // ÉTAPE 4 — re-observer si de nouveaux éléments .reveal apparaissent
    // (navigation entre pages en SPA)
    const mutObs = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.shown)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
          el.classList.add('shown')
        } else {
          obs.observe(el)
        }
      })
    })
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      obs.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
