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
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('shown')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay ? `d${delay}` : ''

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cn('reveal', delayClass, className)} style={style} id={id}>
      {children}
    </Tag>
  )
}
