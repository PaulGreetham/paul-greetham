"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { typography } from "@/lib/typography"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false) // Close menu after clicking
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto max-w-6xl rounded-full border border-border/70 bg-background/70 px-3 py-2 shadow-[0_24px_60px_-32px_hsl(var(--shadow-color)/0.7)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => scrollToSection("home")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Go to home section"
          >
            PG
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  typography.nav,
                  "rounded-full px-4 text-foreground/75 transition-colors hover:bg-primary/10 hover:text-primary"
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 rounded-[1.5rem] border border-border/70 bg-card/80 p-3 shadow-[0_24px_60px_-32px_hsl(var(--shadow-color)/0.65)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    typography.nav,
                    "justify-start rounded-2xl px-4 py-3 text-left text-foreground/85 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {item.label}
                </Button>
              ))}
              <div className="px-2 pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar 