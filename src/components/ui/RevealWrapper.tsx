'use client'

import React, { useEffect, useRef, ReactNode, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface RevealWrapperProps {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4 | 5
  as?: keyof React.JSX.IntrinsicElements
  style?: CSSProperties
  id?: string
}

/**
 * Composant wrapper qui ajoute la classe "reveal" sur son élément.
 * L'animation est gérée globalement par GlobalRevealObserver.
 * Ce composant n'a plus son propre observer pour éviter les conflits.
 */
export function RevealWrapper({
  children,
  className,
  delay,
  as: Tag = 'div',
  style,
  id,
}: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Si l'élément est déjà visible dans le viewport au montage, le montrer immédiatement
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
      el.classList.add('shown')
      return
    }

    // Sinon, laisser GlobalRevealObserver le gérer via IntersectionObserver
    // (le MutationObserver dans GlobalRevealObserver capte les nouveaux éléments)
  }, [])

  const delayClass = delay ? `d${delay}` : ''

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cn('reveal', delayClass, className)} style={style} id={id}>
      {children}
    </Tag>
  )
}
