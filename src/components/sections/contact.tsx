import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import type { CircleProps } from "@/types/sections"

function Circle({ className, children, href, label, tooltip }: CircleProps) {
  // mailto:/tel: links hand off to another app, so only web links open a new tab
  const isWebLink = href.startsWith("http")

  const content = (
    <a
      href={href}
      aria-label={label}
      {...(isWebLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "z-10 flex size-24 items-center justify-center rounded-full border border-border/85 bg-card/85 p-3 shadow-[0_20px_60px_-24px_hsl(var(--shadow-color)/0.65)] backdrop-blur-sm md:backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
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
  const { links } = siteConfig

  return (
    <TooltipProvider>
      <section id="contact" className="section-shell">
        <div className="section-frame max-w-5xl">
          <div className="mb-10 space-y-4 text-center">
            <div className="glass-chip">Contact</div>
            <h2 className={cn(typography.h2, "text-center")}>Let&apos;s Connect</h2>
          </div>

          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-8">
            <Circle href={links.linkedin} label="LinkedIn profile" tooltip="Connect on LinkedIn">
              <FaLinkedin className="size-12" aria-hidden="true" />
            </Circle>
            <Circle href={links.github} label="GitHub profile" tooltip="Check out my GitHub">
              <FaGithub className="size-12" aria-hidden="true" />
            </Circle>
            <Circle href={`mailto:${links.email}`} label={`Email ${links.email}`} tooltip="Send me an email">
              <FaEnvelope className="size-12" aria-hidden="true" />
            </Circle>
            <Circle href={`tel:${links.phone}`} label={`Call ${links.phoneDisplay}`} tooltip={links.phoneDisplay}>
              <FaPhone className="size-12" aria-hidden="true" />
            </Circle>
          </div>
        </div>

      </section>
    </TooltipProvider>
  )
}
