"use client"

import { motion } from "motion/react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

export function HeroSection() {
  return (
    <section id="home" className="section-shell pt-32 md:pt-40">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <div className="section-frame overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--glow-1)/0.22),transparent_32%),radial-gradient(circle_at_bottom_right,hsl(var(--glow-2)/0.18),transparent_30%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] lg:items-end">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-chip"
              >
                Software Developer
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
                className={cn(
                  typography.h1,
                  "max-w-4xl text-left leading-[1.02]"
                )}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Hi, I&apos;m Paul Greetham
                </span>
              </motion.h1>

              <div className="max-w-2xl space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={cn(typography.h3, "text-muted-foreground")}
                >
                  Software Developer
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-base leading-8 text-muted-foreground md:text-lg"
                >
                  Welcome to my website
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            >
              <div className="glass-card p-5">
                <p className="glass-chip mb-4">Focus</p>
                <p className="text-2xl font-semibold">Web + mobile apps</p>
              </div>
              <div className="glass-card p-5">
                <p className="glass-chip mb-4">Background</p>
                <p className="text-2xl font-semibold">Former founder</p>
              </div>
              <div className="glass-card p-5">
                <p className="glass-chip mb-4">Approach</p>
                <p className="text-2xl font-semibold">Scalable products</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <DotPattern 
        className="fixed inset-0 z-0 opacity-60 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
      />
    </section>
  )
} 