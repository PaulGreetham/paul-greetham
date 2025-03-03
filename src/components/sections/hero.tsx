"use client"

import { motion } from "motion/react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { TextReveal } from "@/components/ui/text-reveal"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

export function HeroSection() {
  const name = "Hi, I'm Paul Greetham";
  
  return (
    <section id="home" className="relative">
      <div className="flex flex-col items-center justify-center mt-80 relative z-10">
        <h1 className={cn(typography.h1, "text-center mb-8 flex flex-wrap justify-center")}>
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(typography.h2, "text-muted-foreground mb-8")}
        >
          Frontend Developer
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(typography.h2, "text-muted-foreground mb-24")}
        >
          Welcome to my website
        </motion.h2>
      </div>
      <div className="relative z-10">
        <TextReveal 
          text={`
          I'm a Frontend Developer.
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