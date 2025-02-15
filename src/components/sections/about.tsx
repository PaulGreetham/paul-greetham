"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { techIcons } from "@/config/tech-icons"
import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AboutSection() {
  const mainTechnologies = [
    "Next.js", "Expo", "React", "Angular", "TypeScript", "Node.js", 
    "Tailwind CSS", "Shadcn", "MUI", "SCSS", "Docker", "Jest", "Cypress", "Vercel", 
    "Github", "Gitlab", "Figma", "Supabase", "Youtube", "Axios", "CSS", "OpenAI"
  ]

  // Create tech string with icons
  const techString = mainTechnologies.map(tech => {
    const icon = techIcons[tech]
    return `${icon.name} `
  }).join(' • ') + ' • '

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-muted py-24 px-4 md:px-24">
      <div className="z-10 w-full max-w-6xl space-y-16">
        {/* Main About Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className={cn(typography.h2, "mb-8")}>About Me</h2>
          <div className="mx-auto max-w-3xl bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={cn(typography.h3, "mb-8 text-center")}>Stack Experience</h3>
          <div className="relative -mx-4 md:-mx-24 overflow-hidden">
            <VelocityScroll defaultVelocity={1} numRows={2}>
              {techString}
            </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-muted" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-muted" />
          </div>
        </motion.div>
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