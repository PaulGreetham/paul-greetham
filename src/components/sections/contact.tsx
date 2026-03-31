"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import type { CircleProps } from "@/types/sections"

function Circle({ className, children, href, tooltip }: CircleProps) {
  const content = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "z-10 flex size-24 items-center justify-center rounded-full border border-border/85 bg-card/85 p-3 shadow-[0_20px_60px_-24px_hsl(var(--shadow-color)/0.65)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary cursor-pointer",
        className
      )}
    >
      {children}
    </a>
  )

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return content
}

export function ContactSection() {
  return (
    <TooltipProvider>
      <section id="contact" className="section-shell scroll-margin-top-20">
        <div className="section-frame max-w-5xl">
          <div className="mb-10 space-y-4 text-center">
            <div className="glass-chip">Contact</div>
            <h2 className={cn(typography.h2, "text-center")}>Let&apos;s Connect</h2>
          </div>

          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-8">
            <Circle href="https://www.linkedin.com/in/paul-greetham/" tooltip="Connect on LinkedIn">
              <FaLinkedin className="size-12" />
            </Circle>
            <Circle href="https://github.com/PaulGreetham" tooltip="Check out my GitHub">
              <FaGithub className="size-12" />
            </Circle>
            <Circle href="mailto:pgreetham@protonmail.com" tooltip="Send me an email">
              <FaEnvelope className="size-12" />
            </Circle>
            <Circle href="tel:+31(0)6-83674176" tooltip="+31 (0)6-83674176">
              <FaPhone className="size-12" />
            </Circle>
          </div>
        </div>

      </section>
    </TooltipProvider>
  )
} 