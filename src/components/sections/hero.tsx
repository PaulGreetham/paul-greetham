"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { TextReveal } from "@/components/ui/text-reveal"

export function HeroSection() {
  return (
    <section id="home" className="relative">
      <TextReveal 
        text={`Hi, I'm Paul Greetham.
        I'm a Full-stack Developer.
        I'm a Former Founder.
        I build scalable web applications.
        Let's create something amazing together.`}
      />

      <DotPattern 
        className="fixed inset-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
      />

      <div className="fixed inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background/10" />
    </section>
  )
} 