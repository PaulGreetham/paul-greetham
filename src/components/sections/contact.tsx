"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"

export function ContactSection() {
  return (
    <section id="contact" className="relative h-screen flex items-center justify-center bg-background p-24">
      <div className="z-10 max-w-2xl">
        <h2 className={cn(typography.h2, "mb-6")}>Contact Me</h2>
        {/* Add your contact form or contact information here */}
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