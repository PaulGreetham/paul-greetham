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
    "Github", "Gitlab", "Figma", "Supabase", "Youtube", "Axios", "CSS", "OpenAI", "RxJS"
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
          <div className="mx-auto mb-8 max-w-3xl bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full text-left">
              <AccordionItem value="item-1">
                <AccordionTrigger>My background?</AccordionTrigger>
                <AccordionContent className="text-left">
                  I&apos;m from the UK where I ran a successful brewery and hospitality business for many years in Manchester. Due to COVID and Brexit, these businesses were sold or closed and I&apos;ve been in the Netherlands for nearly 3 years. During my time in Manchester, I built Beatnikz Republic from the ground up, starting as a small craft brewery and expanding into a successful taproom in the city centre. This experience gave me invaluable insights into business operations, customer service, and the importance of adapting to changing market conditions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Why tech?</AccordionTrigger>
                <AccordionContent className="text-left">
                  I built the websites for the UK businesses, including Stripe integration for UK-wide online beer sales. I developed the artwork of the businesses and wanted to move into a role where I could combine creativity and functionality. The transition to tech was a natural progression as I found myself increasingly drawn to the technical aspects of running the business. During the pandemic, I took the opportunity to formally transition into tech, completing an intensive bootcamp at Le Wagon Amsterdam and the School of Applied Technology, and securing my first role as a Software Developer. This career change has allowed me to merge my creative background with technical problem-solving.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Preferred stack?</AccordionTrigger>
                <AccordionContent className="text-left">
                  I have mostly used TypeScript with Angular and React. I have built my personal projects using a combintation of React, Expo, Next.js, Node, Firebase, Tailwind and ShadCn. I&apos;m particularly passionate about creating responsive, accessible, and performant web applications. My experience with both Angular and React has given me a deep understanding of component-based architecture and state management. I&apos;m always eager to learn new technologies.
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