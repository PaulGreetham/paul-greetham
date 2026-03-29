"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
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
    "Github", "Gitlab", "Figma", "Supabase", "Youtube", "Axios", "CSS", "OpenAI", "RxJS",
    "RevenueCat", "Firebase", "Mapbox", "GeoJSON", "Stripe", "MongoDB",
  ]

  const techString = mainTechnologies.join(" • ") + " • "

  return (
    <section id="about" className="section-shell">
      <div className="section-frame space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <div className="glass-chip">About</div>
          <h2 className={cn(typography.h2, "mx-auto max-w-2xl")}>About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl glass-card p-6 md:p-8"
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger>My background?</AccordionTrigger>
              <AccordionContent className="text-left text-muted-foreground">
                I&apos;m from the UK where I ran a successful brewery and hospitality business for many years in Manchester. Due to COVID and Brexit, these businesses were sold or closed and I&apos;ve been in the Netherlands for nearly 3 years. During my time in Manchester, I built Beatnikz Republic from the ground up, starting as a small craft brewery and expanding into a successful taproom in the city centre. This experience gave me invaluable insights into business operations, customer service, and the importance of adapting to changing market conditions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Why tech?</AccordionTrigger>
              <AccordionContent className="text-left text-muted-foreground">
                I built the websites for the UK businesses, including Stripe integration for UK-wide online beer sales. I developed the artwork of the businesses and wanted to move into a role where I could combine creativity and functionality. The transition to tech was a natural progression as I found myself increasingly drawn to the technical aspects of running the business. During the pandemic, I took the opportunity to formally transition into tech, completing an intensive bootcamp at Le Wagon Amsterdam and the School of Applied Technology, and securing my first role as a Software Developer. This career change has allowed me to merge my creative background with technical problem-solving.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Preferred stack?</AccordionTrigger>
              <AccordionContent className="text-left text-muted-foreground">
                I have mostly used TypeScript with Angular and React. I have built my personal projects using a combintation of React, Expo, Next.js, Node, Firebase, Tailwind and ShadCn. I&apos;m particularly passionate about creating responsive, accessible, and performant web applications. My experience with both Angular and React has given me a deep understanding of component-based architecture and state management. I&apos;m always eager to learn new technologies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="text-center">
            <div className="glass-chip">Tech Stack</div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/60 py-4 backdrop-blur-xl">
            <VelocityScroll defaultVelocity={1} numRows={2}>
              {techString}
            </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-card" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-card" />
          </div>
        </motion.div>
      </div>

      <DotPattern 
        className="opacity-60 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1}
      />
    </section>
  )
} 