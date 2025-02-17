"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { TextReveal } from "@/components/ui/text-reveal"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

export function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="flex flex-col items-center justify-center mt-80 relative z-10">
        <h1 className={cn(typography.h1, "text-center mb-8")}>
          Hi, I&apos;m Paul Greetham
        </h1>
        <h2 className={cn(typography.h2, "text-muted-foreground mb-8")}>
          Frontend & UI Developer
        </h2>
        <h2 className={cn(typography.h2, "text-muted-foreground mb-24")}>
          Welcome to my portfolio
        </h2>
      </div>
      <div className="relative z-10">
        <TextReveal 
          text={`
          I'm a Frontend & UI Developer.
          I'm a Former Founder.
          I build scalable web and mobile applications.
          Let's create something amazing together.
          `}
        />
      </div>

      <DotPattern 
        className="fixed inset-0 z-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
      />

      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/0 via-background/5 to-background/10" />
    </section>
  )
} 