'use client'

import { useEffect } from 'react'

/**
 * Observer global qui surveille TOUS les éléments .reveal dans le DOM,
 * qu'ils soient wrappés dans <RevealWrapper> ou codés en dur en JSX.
 * Ajoute la classe "shown" dès qu'un élément entre dans le viewport.
 */
export function GlobalRevealObserver() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('shown')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.reveal:not(.shown)').forEach((el) => obs.observe(el))
    }

    // Observer au montage
    observe()

    // Re-observer si de nouveaux éléments .reveal apparaissent (navigation SPA)
    const mutObs = new MutationObserver(observe)
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      obs.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
