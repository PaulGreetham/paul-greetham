import { cn } from "@/lib/utils"
import React from "react"

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
)
LinkButton.displayName = "LinkButton" 