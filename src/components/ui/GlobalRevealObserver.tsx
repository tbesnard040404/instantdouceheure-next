'use client'

import { useEffect } from 'react'

/**
 * 1. Ajoute .js-ready sur <html> → le CSS peut maintenant masquer les .reveal
 * 2. Observe immédiatement tous les .reveal pour les animer à l'entrée dans le viewport
 * Approche progressive : sans JS, tous les éléments restent visibles.
 */
export function GlobalRevealObserver() {
  useEffect(() => {
    // Étape 1 : signaler que JS est actif
    document.documentElement.classList.add('js-ready')

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

    // Étape 2 : observer tous les éléments .reveal déjà dans le DOM
    const observe = () => {
      document.querySelectorAll('.reveal:not(.shown)').forEach((el) => obs.observe(el))
    }

    observe()

    // Étape 3 : observer les nouveaux éléments ajoutés dynamiquement (navigation SPA)
    const mutObs = new MutationObserver(observe)
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      obs.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
