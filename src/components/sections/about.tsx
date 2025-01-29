"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <section id="about" className="relative h-screen flex items-center justify-center bg-muted p-24">
      <div className="z-10 max-w-3xl">
        <h2 className={cn(typography.h2, "mb-6")}>About Me</h2>
        <p className={typography.p}>
          I&apos;m a passionate developer with expertise in modern web technologies.
          {/* Add your about content here */}
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