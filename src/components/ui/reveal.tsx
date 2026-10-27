"use client"

import * as React from "react"
import { m } from "motion/react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  /** Animate on mount instead of when scrolled into view (for above-the-fold content). */
  immediate?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 20,
  immediate = false,
}: RevealProps) {
  const target = { opacity: 1, y: 0 }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true } })}
      transition={{ duration, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </m.div>
  )
}
