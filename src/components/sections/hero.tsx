"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-background p-24">
      <div className="z-10 max-w-4xl text-center">
        <h1 className={cn(typography.h1, "mb-6")}>Welcome to My Portfolio</h1>
        <p className={typography.p}>
          Full-stack developer specializing in modern web technologies
        </p>
      </div>
      <DotPattern 
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
      />
    </section>
  )
} 