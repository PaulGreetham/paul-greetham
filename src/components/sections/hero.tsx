"use client"

import { motion } from "motion/react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { TextReveal } from "@/components/ui/text-reveal"
import { cn } from "@/lib/utils"
import { typography } from "@/lib/typography"

export function HeroSection() {
  const name = "Hi, I'm Paul Greetham";
  
  // Calculate total characters up to each word for consistent timing
  const words = name.split(' ');
  let charCount = 0;
  
  return (
    <section id="home" className="relative">
      <div className="flex flex-col items-start md:items-center justify-center mt-80 relative z-10 px-4 md:px-0">
        <h1 className={cn(
          typography.h1, 
          "text-left mb-8 flex flex-wrap max-w-[350px] md:max-w-none md:justify-center"
        )}>
          {words.map((word, i) => (
            <div key={i} className="w-full md:w-auto md:mr-2">
              {word.split('').map((char, j) => {
                const delay = (charCount + j) * 0.05;
                return (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                );
              })}
              {/* Update character count after each word */}
              <span className="hidden">{charCount += word.length + 1}</span>
            </div>
          ))}
        </h1>
        <div className="flex flex-col md:items-center w-full max-w-[350px] md:max-w-none">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(typography.h2, "text-muted-foreground mb-2 md:mb-4 text-left md:text-center")}
          >
            Frontend Developer
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(typography.h2, "text-muted-foreground mb-24 text-left md:text-center")}
          >
            Welcome to my website
          </motion.h2>
        </div>
      </div>
      <div className="relative z-10">
        <TextReveal 
          text={`
          I'm a Frontend Developer & Former Founder with a passion for UI.
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